import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Sparkles, Calendar, User, ChevronDown, ChevronUp, PartyPopper, School } from 'lucide-react';
import { fireRank1Confetti } from '../utils/confetti';

export default function HallOfFame({ hallOfFame = [] }) {
  const [expandedMonth, setExpandedMonth] = useState(hallOfFame[0]?.yearMonth || null);

  const toggleExpand = (yearMonth) => {
    setExpandedMonth(prev => prev === yearMonth ? null : yearMonth);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200"
        >
          <Award className="w-3.5 h-3.5 text-amber-600" />
          <span>역대 우승 학생 MVP 아카이브</span>
        </motion.div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
          👑 영광의 명예의 전당 👑
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
          매월 1일 마감된 지난달 1위 MVP 학생의 영예로운 기록과 최종 순위표가 영구 보존됩니다.
        </p>
      </div>

      {/* Hall of Fame List */}
      <div className="space-y-6">
        {hallOfFame.length === 0 ? (
          <div className="glass-card rounded-3xl p-10 text-center text-slate-400 text-sm">
            아직 마감된 월간 기록이 없습니다. 월말 마감 후 첫 번째 챔피언이 등재됩니다!
          </div>
        ) : (
          hallOfFame.map((item, idx) => {
            const isExpanded = expandedMonth === item.yearMonth;
            const champName = item.championStudent || item.championClass;
            const champScore = item.championScore;

            return (
              <motion.div
                key={item.yearMonth || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden border border-pink-200 shadow-md hover:shadow-lg transition-all"
              >
                {/* Champion Banner */}
                <div className="p-6 sm:p-7 bg-gradient-to-r from-pink-100/80 via-purple-50/80 to-amber-50/80 border-b border-pink-200/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Left: Trophy & Month */}
                    <div className="flex items-start sm:items-center space-x-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-yellow-300 via-amber-400 to-rose-400 text-white flex items-center justify-center text-3xl shadow-md shadow-amber-200 shrink-0">
                        🏆
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-black text-pink-600 bg-pink-100 px-2.5 py-0.5 rounded-full">
                            {item.month} MVP
                          </span>
                          <span className="text-xs font-bold text-slate-400">
                            총 {item.totalParticipants || 0}명 참여
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                          {champName}
                        </h3>
                        {item.classInfo && (
                          <p className="text-xs text-slate-500 font-medium flex items-center">
                            <School className="w-3.5 h-3.5 inline mr-1 text-pink-500" />
                            소속: {item.classInfo}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right: Champion Score & Tier Badge */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between bg-white/90 p-4 rounded-2xl border border-pink-200/80">
                      <span className="text-xs font-bold text-slate-400">최종 점수</span>
                      <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        {champScore} <span className="text-sm font-bold text-pink-500">점</span>
                      </div>
                      <div className="text-[11px] font-extrabold text-purple-700 mt-1">
                        {item.tierName}
                      </div>
                    </div>
                  </div>

                  {/* Slogan / Winning Quote */}
                  <div className="mt-4 p-3 rounded-xl bg-white/80 border border-pink-100 text-xs text-slate-700 italic flex items-center justify-between">
                    <span>{item.quote || '“모두 수고 많았어, 다음 달도 화이팅!”'}</span>
                    <button
                      onClick={() => fireRank1Confetti()}
                      className="ml-2 text-pink-600 hover:text-pink-700 font-bold flex items-center shrink-0"
                    >
                      <PartyPopper className="w-3.5 h-3.5 mr-1" />
                      축하 폭죽
                    </button>
                  </div>

                  {/* Reward pill */}
                  {item.rewardGiven && (
                    <div className="mt-2 text-xs font-extrabold text-amber-900 bg-amber-100/80 px-3 py-1.5 rounded-xl border border-amber-200/60">
                      🎁 지급된 보상: {item.rewardGiven}
                    </div>
                  )}
                </div>

                {/* Accordion Toggle for Full Rankings */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">
                    {item.month} 전체 학생 최종 순위표
                  </span>
                  <button
                    onClick={() => toggleExpand(item.yearMonth)}
                    className="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center space-x-1"
                  >
                    <span>{isExpanded ? '순위표 접기' : '순위표 보기'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Full Monthly Rankings */}
                {isExpanded && item.rankings && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-5 bg-white border-t border-slate-100"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {item.rankings.map((r) => (
                        <div
                          key={r.rank}
                          className={`p-2.5 rounded-xl flex items-center justify-between border ${
                            r.rank === 1
                              ? 'bg-amber-50/80 border-amber-200 font-black text-amber-900'
                              : r.rank <= 3
                              ? 'bg-purple-50/50 border-purple-100 font-bold text-slate-800'
                              : 'bg-slate-50/50 border-slate-100 text-slate-600'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="w-5 text-center font-black">
                              {r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : `${r.rank}위`}
                            </span>
                            <span className="font-bold">{r.name}</span>
                            {r.classInfo && (
                              <span className="text-[10px] text-slate-400">({r.classInfo})</span>
                            )}
                          </div>
                          <span className="font-extrabold text-pink-600">
                            {r.score}점
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
