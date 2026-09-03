import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, Plus, Minus, CheckCircle, Sparkles, AlertCircle, Clock, Trash2, Calendar, User, Search, School } from 'lucide-react';
import { CATEGORY_ICONS } from '../data/defaultClasses';
import { fireSparkle } from '../utils/confetti';

export default function ScoreManager({
  students = [],
  onAddScore,
  onDeleteScore,
}) {
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.id || '');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [searchStudent, setSearchStudent] = useState('');
  
  const [category, setCategory] = useState('야자'); // '야자', '특별가점'
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState(10);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [successToast, setSuccessToast] = useState('');

  // 자주 쓰는 점수 빠른 프리셋 (원클릭)
  const presets = [
    { label: '🏃 야자 무단이탈 (-10)', category: '야자', points: -10, title: '야간자기주도학습 무단이탈 감점' },
    { label: '🌙 야자 자율 심화학습 참여 (+10)', category: '야자', points: 10, title: '야자 자율 심화학습 특별 참여' },
    { label: '✨ 수업시간 최우수 칭찬 (+5)', category: '특별가점', points: 5, title: '수업시간 집중 및 태도 최우수 칭찬' },
    { label: '✨ 학급 청소/분리수거 솔선수범 (+10)', category: '특별가점', points: 10, title: '교실 청소 및 분리수거 솔선수범' },
    { label: '✨ 도서관/교내 봉사활동 (+10)', category: '특별가점', points: 10, title: '교내 행사 질서 및 자원봉사 가산점' },
  ];

  const handleApplyPreset = (p) => {
    setCategory(p.category);
    setPoints(p.points);
    setTitle(p.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudentId || !title.trim()) return;

    onAddScore(selectedStudentId, {
      category,
      title: title.trim(),
      points: Number(points),
      date,
    });

    const targetStudent = students.find(s => s.id === selectedStudentId);
    const catLabel = category === '야자' ? '야자점수' : category === '지각및복장' ? '지각및복장점수' : '특별가점';
    setSuccessToast(`✨ ${targetStudent?.name || '학생'}(${targetStudent?.studentId})의 [${catLabel}]에 [${points > 0 ? `+${points}` : points}점]이 반영되었습니다!`);
    
    fireSparkle(0.5, 0.4);
    setTitle('');
    setTimeout(() => {
      setSuccessToast('');
    }, 3500);
  };

  // 학생 필터링
  const filteredStudents = students.filter(s => {
    if (gradeFilter !== 'all' && s.grade !== Number(gradeFilter)) return false;
    if (searchStudent.trim()) {
      const q = searchStudent.toLowerCase();
      return s.name.toLowerCase().includes(q) || String(s.studentId).includes(q);
    }
    return true;
  });

  const selectedStudent = students.find(s => s.id === selectedStudentId) || students[0];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Header Info */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200">
          <Edit3 className="w-3.5 h-3.5" />
          <span>선생님 전용 점수 관리 대시보드</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
          학생 개인별 점수 부여 및 차감
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          학생을 선택하고 <b>야자점수 · 지각및복장점수 · 특별가점</b>을 등록하면 실시간 순위와 일러스트 티어가 즉시 반영됩니다.
        </p>
      </div>

      {/* Success Notification */}
      {successToast && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm shadow-lg shadow-pink-200 flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 animate-spin" />
            <span>{successToast}</span>
          </div>
          <button onClick={() => setSuccessToast('')} className="text-white/80 hover:text-white text-xs">
            닫기
          </button>
        </motion.div>
      )}

      {/* Main Score Input Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-pink-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Step 1: Select Student */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
                1. 점수를 부여할 학생 선택
              </label>

              <div className="flex items-center space-x-2">
                {/* Grade Filter */}
                <div className="flex space-x-1">
                  {['all', 1, 2, 3].map(g => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setGradeFilter(g)}
                      className={`px-2 py-1 rounded-lg text-xs font-bold ${
                        gradeFilter === g ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {g === 'all' ? '전체' : `${g}학년`}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative w-36">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    placeholder="학생 검색..."
                    value={searchStudent}
                    onChange={(e) => setSearchStudent(e.target.value)}
                    className="w-full pl-7 pr-2 py-1.5 bg-white border border-slate-200 rounded-xl text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1">
              {filteredStudents.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSelectedStudentId(s.id)}
                  className={`p-2.5 rounded-xl text-xs font-black transition-all text-left border ${
                    selectedStudentId === s.id
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-500 shadow-md shadow-pink-200 scale-102'
                      : 'bg-white/80 hover:bg-pink-50/50 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-mono text-[10px] opacity-75">{s.studentId}</div>
                  <div className="text-xs font-extrabold truncate">{s.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2 uppercase tracking-wider">
              ⚡ 자주 쓰는 점수 빠른 프리셋 (원클릭)
            </label>
            <div className="flex flex-wrap gap-2">
              {presets.map((p, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleApplyPreset(p)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-pink-100 hover:text-pink-700 text-slate-600 border border-slate-200 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Details Input */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-pink-100">
            
            {/* Category: 2 major categories */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                점수 항목 구분
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-pink-300 focus:outline-hidden"
              >
                <option value="야자">🌙 야자점수 (참여/출석/이탈)</option>
                <option value="특별가점">✨ 특별가점 (환경미화/선행/수업태도)</option>
              </select>
            </div>

            {/* Points (Plus / Minus) */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                부여 점수 (가점: 양수 / 감점: 음수)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-white border rounded-2xl text-sm font-black focus:ring-2 focus:outline-hidden ${
                    points >= 0
                      ? 'border-emerald-300 text-emerald-600 focus:ring-emerald-200'
                      : 'border-rose-300 text-rose-600 focus:ring-rose-200'
                  }`}
                  required
                />
                <span className="text-xs font-bold text-slate-500 whitespace-nowrap">점</span>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                기록 날짜
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-bold text-slate-700 focus:ring-2 focus:ring-pink-300 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Reason / Title */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">
              사유 및 상세 내역
            </label>
            <input
              type="text"
              placeholder="예: 야간자기주도학습 성실 참여 가점"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-pink-200 rounded-2xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-pink-300 focus:outline-hidden placeholder:text-slate-400"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-black text-sm sm:text-base shadow-lg shadow-pink-200 flex items-center justify-center space-x-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>선택한 학생에게 점수 즉시 반영하기</span>
          </motion.button>
        </form>
      </div>

      {/* Selected Student Recent Score History */}
      {selectedStudent && (
        <div className="glass-panel p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-slate-800 flex items-center">
              <Clock className="w-4 h-4 mr-1.5 text-pink-500" />
              {selectedStudent.name} ({selectedStudent.studentId}) 최근 가감점 내역 ({selectedStudent.history?.length || 0}건)
            </h3>
            <span className="text-xs text-slate-500">
              {selectedStudent.grade}학년 {selectedStudent.classNum}반
            </span>
          </div>

          <div className="space-y-2">
            {(!selectedStudent.history || selectedStudent.history.length === 0) ? (
              <p className="text-xs text-slate-400 text-center py-4">
                등록된 점수 변동 기록이 없습니다.
              </p>
            ) : (
              selectedStudent.history.slice(0, 6).map((h) => (
                <div
                  key={h.id}
                  className="p-3 bg-white rounded-2xl border border-slate-100 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-base">{CATEGORY_ICONS[h.category] || '📌'}</span>
                    <div>
                      <div className="font-bold text-slate-800">{h.title}</div>
                      <div className="text-[10px] text-slate-400">
                        {h.date} · {h.category === '야자' ? '야자점수' : h.category === '지각및복장' ? '지각및복장점수' : '특별가점'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span
                      className={`font-black px-2.5 py-0.5 rounded-lg ${
                        h.points >= 0
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                          : 'bg-rose-50 text-rose-600 border border-rose-100'
                      }`}
                    >
                      {h.points >= 0 ? `+${h.points}` : h.points}점
                    </span>
                    <button
                      onClick={() => onDeleteScore(selectedStudent.id, h.id)}
                      className="text-slate-300 hover:text-rose-500 p-1 rounded transition-colors"
                      title="기록 취소/삭제"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
