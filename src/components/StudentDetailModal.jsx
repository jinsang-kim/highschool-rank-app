import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, User, Award, Calendar, PlusCircle, Heart, Trash2, School } from 'lucide-react';
import { calculateCategoryBreakdown } from '../utils/rankCalculator';
import { CATEGORY_ICONS } from '../data/defaultClasses';
import { fireSparkle } from '../utils/confetti';
import TierIllustration from './TierIllustration';

export default function StudentDetailModal({
  student,
  isOpen,
  onClose,
  onAddScore,
  onDeleteScore,
  role = 'student', // 'student' | 'teacher'
}) {
  const [cheerCount, setCheerCount] = useState(0);
  const [isAddingScore, setIsAddingScore] = useState(false);
  const [newScoreCategory, setNewScoreCategory] = useState('야자');
  const [newScoreTitle, setNewScoreTitle] = useState('');
  const [newScorePoints, setNewScorePoints] = useState(10);

  if (!isOpen || !student) return null;

  const {
    id,
    studentId,
    name,
    grade,
    classNum,
    motto,
    totalScore,
    rank,
    percentile,
    tier,
    history = [],
  } = student;

  const breakdown = calculateCategoryBreakdown(student);

  const handleCheer = (e) => {
    setCheerCount(prev => prev + 1);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    fireSparkle(x, y);
  };

  const handleQuickAddScore = (e) => {
    e.preventDefault();
    if (!newScoreTitle.trim()) return;

    onAddScore(id, {
      category: newScoreCategory,
      title: newScoreTitle.trim(),
      points: Number(newScorePoints),
      date: new Date().toISOString().split('T')[0],
    });

    setNewScoreTitle('');
    setIsAddingScore(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-pink-100 max-h-[90vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-7 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 border-b border-pink-200/60">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-slate-500 hover:text-slate-800 transition-colors shadow-xs"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md shrink-0 border border-white">
                  <TierIllustration tier={tier.tier} rank={rank} size="full" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-xl text-xs font-black bg-pink-600 text-white shadow-xs">
                      {rank}위
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-white/90 text-slate-700 font-mono font-bold text-xs border border-pink-200">
                      {studentId}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
                      {name}
                    </h2>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium italic">
                    {motto || `“오늘도 성실하게 갓생 도전!”`}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2 py-0.5 rounded-lg bg-white/80 font-semibold text-pink-700 border border-pink-200">
                      <School className="w-3.5 h-3.5 inline mr-1" />
                      {grade}학년 {classNum}반
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-white/80 font-semibold text-indigo-700 border border-indigo-200">
                      상위 {percentile}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Score Display */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between bg-white/90 p-3.5 sm:p-4 rounded-2xl border border-pink-200/80 shadow-xs">
                <span className="text-xs font-bold text-slate-500">개인 총점</span>
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {totalScore} <span className="text-sm text-pink-500 font-bold">점</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* Dynamic Character Profile Card with Illustration */}
            <div className={`p-5 rounded-3xl border ${tier.cardBorder} bg-gradient-to-r from-pink-50/50 via-white to-purple-50/50 relative overflow-hidden`}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <TierIllustration tier={tier.tier} size="full" />
                </div>
                <div className="space-y-1.5 flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-pink-600 bg-pink-100 px-2 py-0.5 rounded-md">
                      배정 일러스트
                    </span>
                    <h4 className="text-lg font-black text-slate-800">
                      {tier.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    {tier.description}
                  </p>
                  <p className="text-xs text-pink-700 font-bold bg-pink-50/80 p-2.5 rounded-xl border border-pink-100/60">
                    {tier.quote}
                  </p>
                  <p className="text-xs text-purple-700 font-extrabold pt-1">
                    {tier.reward}
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Core Score Category Breakdown Badges */}
            <div>
              <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-1 text-pink-500" />
                3대 생활기록 점수 항목별 누적 분석
              </h4>
              <div className="grid grid-cols-3 gap-3">
                
                {/* 1. 기본점수 */}
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col justify-between">
                  <div className="flex items-center space-x-1 text-xs font-bold text-indigo-700">
                    <span>🏫</span>
                    <span>기본점수</span>
                  </div>
                  <div className="text-xl font-black text-indigo-900 mt-2">
                    {breakdown['기본점수']}점
                  </div>
                </div>

                {/* 2. 야자점수 */}
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex flex-col justify-between">
                  <div className="flex items-center space-x-1 text-xs font-bold text-purple-700">
                    <span>🌙</span>
                    <span>야자점수</span>
                  </div>
                  <div className={`text-xl font-black mt-2 ${breakdown['야자점수'] >= 0 ? 'text-purple-900' : 'text-rose-600'}`}>
                    {breakdown['야자점수'] > 0 ? `+${breakdown['야자점수']}` : breakdown['야자점수']}점
                  </div>
                </div>

                {/* 3. 특별가점 */}
                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-100 flex flex-col justify-between">
                  <div className="flex items-center space-x-1 text-xs font-bold text-pink-700">
                    <span>✨</span>
                    <span>특별가점</span>
                  </div>
                  <div className={`text-xl font-black mt-2 ${breakdown['특별가점'] >= 0 ? 'text-pink-900' : 'text-rose-600'}`}>
                    {breakdown['특별가점'] > 0 ? `+${breakdown['특별가점']}` : breakdown['특별가점']}점
                  </div>
                </div>
              </div>
            </div>

            {/* Score History Timeline */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-purple-500" />
                  상세 가감점 기록 히스토리 ({history.length}건)
                </h4>
                
                {role === 'teacher' && (
                  <button
                    onClick={() => setIsAddingScore(!isAddingScore)}
                    className="text-xs font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 px-2.5 py-1 rounded-lg border border-pink-200 transition-colors flex items-center"
                  >
                    <PlusCircle className="w-3.5 h-3.5 mr-1" />
                    {isAddingScore ? '입력 닫기' : '점수 추가'}
                  </button>
                )}
              </div>

              {/* Quick Add Score Form (Teacher only) */}
              {role === 'teacher' && isAddingScore && (
                <form
                  onSubmit={handleQuickAddScore}
                  className="mb-4 p-4 rounded-2xl bg-pink-50/70 border border-pink-200 space-y-3"
                >
                  <div className="text-xs font-bold text-pink-800">
                    선생님 즉시 점수 부여
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <select
                      value={newScoreCategory}
                      onChange={(e) => setNewScoreCategory(e.target.value)}
                      className="px-3 py-2 text-xs font-semibold bg-white border border-pink-200 rounded-xl"
                    >
                      <option value="야자">🌙 야자점수</option>
                      <option value="지각및복장">⏰ 지각 및 복장 점수</option>
                      <option value="특별가점">✨ 특별가점</option>
                    </select>

                    <input
                      type="text"
                      placeholder="사유 (예: 야자 성실 참여)"
                      value={newScoreTitle}
                      onChange={(e) => setNewScoreTitle(e.target.value)}
                      className="px-3 py-2 text-xs bg-white border border-pink-200 rounded-xl sm:col-span-1"
                      required
                    />

                    <div className="flex space-x-2">
                      <input
                        type="number"
                        placeholder="점수"
                        value={newScorePoints}
                        onChange={(e) => setNewScorePoints(e.target.value)}
                        className="w-20 px-3 py-2 text-xs bg-white border border-pink-200 rounded-xl"
                        required
                      />
                      <button
                        type="submit"
                        className="flex-1 px-3 py-2 text-xs font-bold bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-xs"
                      >
                        등록
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* History Items */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {history.length === 0 ? (
                  <div className="text-center py-6 text-xs text-slate-400 font-medium">
                    등록된 점수 변동 기록이 없습니다.
                  </div>
                ) : (
                  history.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-white border border-slate-100 flex items-center justify-between hover:border-pink-200 transition-colors shadow-2xs"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">
                          {CATEGORY_ICONS[item.category] || '📌'}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {item.date} · {item.category === '야자' ? '야자점수' : item.category === '지각및복장' ? '지각및복장점수' : '특별가점'}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-sm font-black px-2.5 py-0.5 rounded-lg ${
                            item.points >= 0
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                              : 'bg-rose-50 text-rose-600 border border-rose-100'
                          }`}
                        >
                          {item.points >= 0 ? `+${item.points}` : item.points}점
                        </span>
                        {role === 'teacher' && onDeleteScore && (
                          <button
                            onClick={() => onDeleteScore(id, item.id)}
                            className="text-slate-300 hover:text-rose-500 p-1 rounded transition-colors"
                            title="삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCheer}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-pink-200 flex items-center space-x-1.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>학생 응원 스탬프 ({cheerCount})</span>
            </motion.button>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-600 font-bold text-xs sm:text-sm border border-slate-200 transition-colors"
            >
              닫기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
