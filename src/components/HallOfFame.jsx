import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Sparkles, Calendar, User, ChevronDown, ChevronUp, PartyPopper, School, Medal, Crown } from 'lucide-react';
import { fireRank1Confetti } from '../utils/confetti';

export default function HallOfFame({ hallOfFame = [] }) {
  const [expandedMonth, setExpandedMonth] = useState(hallOfFame[0]?.yearMonth || null);

  const toggleExpand = (yearMonth) => {
    setExpandedMonth(prev => prev === yearMonth ? null : yearMonth);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 text-xs font-black border border-amber-200 shadow-xs"
        >
          <Trophy className="w-3.5 h-3.5 text-amber-600" />
          <span>월별 1등부터 10등까지 영예의 Top 10 아카이브</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
          👑 영광의 명예의 전당 Top 10 👑
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          매월 마감된 <b>1등부터 10등까지(Top 10)</b> 갓생 우수 학생들의 영예로운 순위와 최종 점수가 영구 보존됩니다.
        </p>
      </div>

      {/* Hall of Fame List */}
      <div className="space-y-8">
        {hallOfFame.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center text-slate-400 text-sm space-y-3">
            <div className="text-4xl">🏛️</div>
            <div className="font-bold text-slate-600">아직 등록된 명예의 전당 기록이 없습니다.</div>
            <p className="text-xs text-slate-400">
              월말 마감(또는 교사 페이지의 월간 마감 실행) 시 1등부터 10등까지의 명예의 전당이 자동 등재됩니다!
            </p>
          </div>
        ) : (
          hallOfFame.map((item, idx) => {
            const isExpanded = expandedMonth === item.yearMonth;
            const champName = item.championStudent || item.championClass;
            const champScore = item.championScore;
            
            // 1위부터 10위까지의 학생 목록 (Top 10)
            const top10Rankings = (item.rankings || []).slice(0, 10);
            const remainingRankings = (item.rankings || []).slice(10);

            return (
              <motion.div
                key={item.yearMonth || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden border border-pink-200 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Champion Banner (1위 MVP 특별 배너) */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-100/90 via-pink-100/70 to-purple-100/80 border-b border-pink-200/80 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    
                    {/* Left: Trophy & 1위 정보 */}
                    <div className="flex items-start sm:items-center space-x-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-yellow-400 via-amber-400 to-rose-400 text-white flex items-center justify-center text-3xl sm:text-4xl shadow-lg shadow-amber-200 shrink-0 border-2 border-white">
                        🏆
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-black text-amber-950 bg-amber-200/90 px-3 py-0.5 rounded-full border border-amber-300">
                            🥇 {item.month} 1위 MVP
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            총 {item.totalParticipants || (item.rankings ? item.rankings.length : 0)}명 참여
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                          {champName}
                        </h3>
                        {item.classInfo && (
                          <p className="text-xs text-slate-600 font-bold flex items-center">
                            <School className="w-3.5 h-3.5 inline mr-1 text-pink-500" />
                            {item.classInfo}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right: 1위 점수 & 칭호 */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between bg-white/95 p-4 rounded-2xl border border-pink-200 shadow-xs">
                      <span className="text-xs font-bold text-slate-400">1위 최종 점수</span>
                      <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        {champScore} <span className="text-sm font-bold text-pink-500">점</span>
                      </div>
                      <div className="text-xs font-extrabold text-purple-700 mt-1 flex items-center">
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-yellow-500" />
                        {item.tierName}
                      </div>
                    </div>
                  </div>

                  {/* Slogan & Confetti Button */}
                  <div className="mt-4 p-3.5 rounded-2xl bg-white/80 border border-pink-100 text-xs text-slate-700 italic flex items-center justify-between shadow-2xs">
                    <span>{item.quote || '“매일매일 갓생 살기 성공! 다음 달도 다 같이 화이팅!”'}</span>
                    <button
                      onClick={() => fireRank1Confetti()}
                      className="ml-2 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl text-xs font-black flex items-center shadow-xs shrink-0 transition-all"
                    >
                      <PartyPopper className="w-3.5 h-3.5 mr-1" />
                      축하 폭죽 🎉
                    </button>
                  </div>
                </div>

                {/* Top 10 Leaderboard Section */}
                <div className="p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Medal className="w-5 h-5 text-amber-500" />
                      <h4 className="text-base font-black text-slate-800">
                        {item.month} 명예의 전당 Top 10 (1위 ~ 10위)
                      </h4>
                    </div>
                    <span className="text-xs text-pink-600 font-bold bg-pink-50 px-2.5 py-1 rounded-lg border border-pink-100">
                      상위 10인 명예 등재
                    </span>
                  </div>

                  {/* Top 10 Grid List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {top10Rankings.map((r) => {
                      const isTop1 = r.rank === 1;
                      const isTop2 = r.rank === 2;
                      const isTop3 = r.rank === 3;
                      const isTop3Group = r.rank <= 3;

                      return (
                        <div
                          key={r.rank}
                          className={`p-3.5 rounded-2xl flex items-center justify-between border transition-all ${
                            isTop1
                              ? 'bg-gradient-to-r from-amber-50/90 to-yellow-50/70 border-amber-300 shadow-xs'
                              : isTop2
                              ? 'bg-gradient-to-r from-purple-50/80 to-pink-50/60 border-purple-200'
                              : isTop3
                              ? 'bg-gradient-to-r from-rose-50/80 to-pink-50/60 border-rose-200'
                              : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3 min-w-0">
                            {/* Rank Badge */}
                            <div className="w-8 text-center shrink-0">
                              {isTop1 ? (
                                <span className="text-xl">🥇</span>
                              ) : isTop2 ? (
                                <span className="text-xl">🥈</span>
                              ) : isTop3 ? (
                                <span className="text-xl">🥉</span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200/80 text-slate-700 font-black text-xs">
                                  {r.rank}
                                </span>
                              )}
                            </div>

                            {/* Student Info */}
                            <div className="min-w-0">
                              <div className="flex items-center space-x-1.5 flex-wrap">
                                <span className={`font-black text-sm truncate ${isTop3Group ? 'text-slate-900' : 'text-slate-800'}`}>
                                  {r.name}
                                </span>
                                {r.classInfo && (
                                  <span className="text-[11px] text-slate-400 font-medium">
                                    ({r.classInfo})
                                  </span>
                                )}
                              </div>
                              {r.tierTitle && (
                                <div className="text-[11px] font-bold text-purple-700 truncate mt-0.5">
                                  {r.tierEmoji} {r.tierTitle}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Final Score */}
                          <div className="text-right shrink-0 pl-3">
                            <span className="text-sm sm:text-base font-black text-pink-600">
                              {r.score}
                            </span>
                            <span className="text-xs font-bold text-slate-400 ml-0.5">점</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 11위 이하 전체 순위 보기 (더보기 아코디언) */}
                {remainingRankings.length > 0 && (
                  <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">
                      11위 ~ {item.rankings.length}위 전체 학생 기록 ({remainingRankings.length}명)
                    </span>
                    <button
                      onClick={() => toggleExpand(item.yearMonth)}
                      className="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center space-x-1"
                    >
                      <span>{isExpanded ? '11위 이하 접기' : '11위 이하 순위 보기'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                )}

                {/* Expanded Remaining Rankings (11위~) */}
                {isExpanded && remainingRankings.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-5 bg-white border-t border-slate-100"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      {remainingRankings.map((r) => (
                        <div
                          key={r.rank}
                          className="p-2.5 rounded-xl flex items-center justify-between border bg-slate-50/50 border-slate-100 text-slate-600"
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <span className="w-5 text-center font-bold text-slate-400">{r.rank}위</span>
                            <span className="font-bold text-slate-700 truncate">{r.name}</span>
                          </div>
                          <span className="font-bold text-pink-600 shrink-0 ml-2">
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
