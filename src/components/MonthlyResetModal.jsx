import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Award, PartyPopper, CheckCircle2 } from 'lucide-react';
import { fireMonthlyGrandCelebration } from '../utils/confetti';
import TierIllustration from './TierIllustration';

export default function MonthlyResetModal({
  isOpen,
  championData,
  onConfirmReset,
}) {
  useEffect(() => {
    if (isOpen) {
      fireMonthlyGrandCelebration();
    }
  }, [isOpen]);

  if (!isOpen || !championData) return null;

  const { month, champStudent, champClass, allRankings = [] } = championData;
  const champ = champStudent || champClass;

  if (!champ) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Darkened backdrop with sparkle glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Grand Celebration Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          transition={{ type: 'spring', damping: 20, stiffness: 260 }}
          className="relative w-full max-w-lg bg-gradient-to-b from-pink-500 via-rose-500 to-purple-600 rounded-3xl shadow-2xl p-1 z-10 text-white overflow-hidden text-center"
        >
          {/* Inner Card Container */}
          <div className="bg-white rounded-[22px] p-6 sm:p-8 text-slate-800 relative overflow-hidden">
            
            {/* Background floating decor */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-50" />

            {/* Header Badge */}
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 font-black text-xs sm:text-sm shadow-md shadow-yellow-200"
            >
              <PartyPopper className="w-4 h-4" />
              <span>{month} 월간 마감 최종 시상식</span>
              <Sparkles className="w-4 h-4" />
            </motion.div>

            {/* Champion Illustration Animation */}
            <div className="mt-5 flex justify-center items-center relative">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden shadow-2xl shadow-pink-300 border-4 border-white">
                  <TierIllustration tier={champ.tier.tier} size="full" />
                </div>
                <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
                  👑
                </div>
              </motion.div>
            </div>

            {/* Champion Student Title */}
            <div className="mt-4 space-y-1">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">
                🏆 지난달 영예의 전교 1위 MVP 🏆
              </span>
              <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                {champ.name} <span className="text-lg text-slate-500 font-mono">({champ.studentId})</span>
              </h2>
              <div className="text-sm font-semibold text-slate-600">
                {champ.grade}학년 {champ.classNum}반 · 총점 <span className="text-rose-600 font-black text-lg">{champ.totalScore}점</span> 달성!
              </div>
            </div>

            {/* Character Tier Banner */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 border border-pink-200">
              <div className="font-extrabold text-pink-700 text-sm sm:text-base">
                {champ.tier.emoji} {champ.tier.title}
              </div>
              <p className="text-xs text-slate-600 mt-1 italic">
                {champ.motto || champ.slogan || '“우리 모두의 위대한 갓생 질주!”'}
              </p>
              <div className="mt-2 text-xs font-bold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-xl">
                🎁 1위 보상: {champ.tier.reward}
              </div>
            </div>

            {/* Info notice about Hall of Fame and Board Reset */}
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-1">
              <div className="flex items-center font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-1.5" />
                자동 아카이빙 & 새로운 달 시작 안내
              </div>
              <p className="text-[11px] text-slate-500 pl-5.5">
                • 지난달 최종 순위는 <span className="font-bold text-pink-600">[명예의 전당]</span>에 영구 보관됩니다.
                <br />
                • 현재 랭킹 보드는 새로운 달의 점수(기본 100점)로 산뜻하게 초기화됩니다.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onConfirmReset(month)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-pink-200 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>명예의 전당 보관 및 새 달 시작하기</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
