import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUp, ArrowDown, Minus, Sparkles, User, Award, Flame } from 'lucide-react';
import { CATEGORY_ICONS } from '../data/defaultClasses';
import TierIllustration from './TierIllustration';

export default function ClassCard({
  classItem,
  maxScore = 200,
  onSelect,
}) {
  const {
    rank,
    name,
    slogan,
    homeroomTeacher,
    representative,
    totalScore,
    percentile,
    tier,
    rankChange,
    history = [],
  } = classItem;

  const scoreProgress = Math.min(100, Math.max(15, (totalScore / Math.max(maxScore, 100)) * 100));

  const getRankBadgeStyle = (r) => {
    switch (r) {
      case 1:
        return 'bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-amber-950 ring-4 ring-yellow-200/80 shadow-md shadow-yellow-200/50';
      case 2:
        return 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 text-slate-800 ring-2 ring-slate-200 shadow-sm';
      case 3:
        return 'bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-amber-50 ring-2 ring-amber-200 shadow-sm';
      default:
        return 'bg-pink-100/90 text-pink-700 border border-pink-200';
    }
  };

  const latestHistory = history[0];

  return (
    <motion.div
      layout
      layoutId={classItem.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(classItem)}
      className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 cursor-pointer transition-all duration-300 glass-card border ${
        rank === 1
          ? 'border-pink-300 ring-4 ring-pink-200/60 bg-gradient-to-br from-pink-50/90 via-white/95 to-purple-50/90'
          : rank === 2
          ? 'border-purple-200 ring-2 ring-purple-100 bg-white/90'
          : rank === 3
          ? 'border-indigo-200 bg-white/90'
          : 'border-white/80 bg-white/75 hover:bg-white/95 hover:border-pink-200'
      }`}
    >
      {/* 1위 특별 반짝이 리본 배경 */}
      {rank === 1 && (
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-28 h-28 bg-gradient-to-bl from-pink-400 via-rose-300 to-transparent rounded-full opacity-30 blur-xl pointer-events-none" />
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left: Rank, Full Illustration Graphic, Name, Dynamic Character */}
        <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-5">
          
          {/* Rank Number & Delta */}
          <div className="flex flex-col items-center justify-center min-w-[48px]">
            <div
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl tracking-tight transition-transform ${getRankBadgeStyle(
                rank
              )}`}
            >
              {rank === 1 ? '👑' : `${rank}위`}
            </div>

            <div className="mt-1 flex items-center text-[11px] font-bold">
              {rankChange > 0 ? (
                <span className="flex items-center text-rose-500 bg-rose-50 px-1.5 py-0.2 rounded-full border border-rose-100">
                  <ArrowUp className="w-3 h-3 mr-0.5" />
                  {rankChange}
                </span>
              ) : rankChange < 0 ? (
                <span className="flex items-center text-blue-500 bg-blue-50 px-1.5 py-0.2 rounded-full border border-blue-100">
                  <ArrowDown className="w-3 h-3 mr-0.5" />
                  {Math.abs(rankChange)}
                </span>
              ) : (
                <span className="flex items-center text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded-full">
                  <Minus className="w-3 h-3" />
                </span>
              )}
            </div>
          </div>

          {/* Full Scene Illustration Frame */}
          <div className="relative group shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
              <TierIllustration tier={tier.tier} size="full" />
            </div>
            {rank === 1 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500 text-[11px] items-center justify-center text-white font-bold shadow-xs">👑</span>
              </span>
            )}
          </div>

          {/* Class Information & Dynamic Tier Character */}
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight flex items-center">
                {name}
                {rank === 1 && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    현재 1위
                  </span>
                )}
              </h3>

              {/* Dynamic 10-Tier Badge */}
              <div
                className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold shadow-xs ${tier.badgeBg}`}
                title={`전체 ${percentile}% 위치`}
              >
                <span>{tier.emoji}</span>
                <span>{tier.title}</span>
              </div>
            </div>

            {/* Slogan */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 italic">
              {slogan || `“우리 ${name} 파이팅!”`}
            </p>

            {/* Teacher & Representative Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-pink-50 text-pink-700 border border-pink-100">
                <User className="w-3 h-3 mr-1 text-pink-500" />
                담임: {homeroomTeacher}
              </span>
              {representative && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-100">
                  <Award className="w-3 h-3 mr-1 text-purple-500" />
                  반장: {representative}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Score Gauge & Detail Action */}
        <div className="flex items-center justify-between md:justify-end space-x-4 pt-2 md:pt-0 border-t md:border-t-0 border-pink-100/60">
          
          <div className="flex flex-col items-start md:items-end w-full md:w-48">
            <div className="flex items-baseline space-x-1">
              <span className="text-xs text-slate-400 font-semibold">생활기록 총점</span>
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {totalScore}
              </span>
              <span className="text-sm font-bold text-pink-500">점</span>
            </div>

            {/* Score Progress Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mt-1 p-0.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${scoreProgress}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`h-full rounded-full ${
                  rank === 1
                    ? 'bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300'
                    : rank <= 3
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                    : 'bg-gradient-to-r from-slate-300 to-pink-300'
                }`}
              />
            </div>

            {/* Latest Event Pill */}
            {latestHistory && (
              <div className="mt-1.5 flex items-center text-[11px] text-slate-500 truncate max-w-full">
                <span className="mr-1">{CATEGORY_ICONS[latestHistory.category] || '📌'}</span>
                <span className="truncate">{latestHistory.title}</span>
                <span
                  className={`ml-1 font-bold ${
                    latestHistory.points >= 0 ? 'text-emerald-600' : 'text-rose-500'
                  }`}
                >
                  ({latestHistory.points >= 0 ? `+${latestHistory.points}` : latestHistory.points})
                </span>
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-pink-50 text-pink-600 group-hover:bg-pink-100 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
