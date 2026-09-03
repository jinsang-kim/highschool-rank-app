import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, Filter, Search, Award, Flame, User, School, ArrowUpDown } from 'lucide-react';
import StudentCard from './StudentCard';
import TierIllustration from './TierIllustration';

export default function RankingBoard({
  rankedStudents = [],
  onSelectStudent,
}) {
  const [selectedGrade, setSelectedGrade] = useState('all'); // 'all', 1, 2, 3
  const [selectedClassNum, setSelectedClassNum] = useState('all'); // 'all', 1, 2, 3
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('rank'); // 'rank' (순위순) | 'studentId' (학번순)

  // 필터링 및 검색 적용
  const filteredStudents = useMemo(() => {
    let result = [...rankedStudents];

    // 1. 학년 필터
    if (selectedGrade !== 'all') {
      result = result.filter(s => s.grade === Number(selectedGrade));
    }

    // 2. 반 필터
    if (selectedClassNum !== 'all') {
      result = result.filter(s => s.classNum === Number(selectedClassNum));
    }

    // 3. 검색어 필터 (이름 또는 학번)
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        s => s.name.toLowerCase().includes(q) || String(s.studentId).includes(q)
      );
    }

    // 4. 정렬 (순위순 vs 학번순)
    if (sortOrder === 'studentId') {
      result.sort((a, b) => String(a.studentId).localeCompare(String(b.studentId)));
    } else {
      result.sort((a, b) => a.rank - b.rank);
    }

    return result;
  }, [rankedStudents, selectedGrade, selectedClassNum, searchQuery, sortOrder]);

  // Top 3 Podium Students (전체 1, 2, 3위)
  const top1 = rankedStudents[0];
  const top2 = rankedStudents[1];
  const top3 = rankedStudents[2];

  const maxScore = rankedStudents.length > 0 ? rankedStudents[0].totalScore : 200;

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Hero Banner & 1~3 Podium */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-black border border-pink-200 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>2026 여고 갓생 학생 개인별 실시간 랭킹전</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
          이달의 갓생 여고생 랭킹 TOP
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          야자 성실 출석과 특별 가점을 합산한 학생 개인별 실시간 랭킹입니다.
        </p>
      </div>

      {/* Podium Top 3 Hero Cards */}
      {rankedStudents.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4 items-end">
          
          {/* 2nd Place */}
          {top2 && (
            <motion.div
              whileHover={{ y: -6 }}
              onClick={() => onSelectStudent(top2)}
              className="order-2 md:order-1 glass-card p-5 rounded-3xl border-2 border-slate-200 text-center cursor-pointer relative overflow-hidden shadow-md bg-white/90"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-400 text-slate-800 font-black text-lg flex items-center justify-center mx-auto shadow-xs">
                2위
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto my-3 rounded-2xl overflow-hidden shadow-sm">
                <TierIllustration tier={top2.tier.tier} rank={top2.rank} size="full" />
              </div>
              <div className="text-xs font-mono font-bold text-slate-500">{top2.studentId} · {top2.grade}학년 {top2.classNum}반</div>
              <h3 className="font-black text-lg text-slate-800 mt-0.5">{top2.name}</h3>
              <div className="text-xl font-black text-purple-600 mt-1">{top2.totalScore}점</div>
              <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-700">
                {top2.tier.emoji} {top2.tier.title}
              </div>
            </motion.div>
          )}

          {/* 1st Place Champion */}
          {top1 && (
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => onSelectStudent(top1)}
              className="order-1 md:order-2 glass-card p-6 sm:p-7 rounded-3xl border-3 border-pink-400 text-center cursor-pointer relative overflow-hidden shadow-xl bg-gradient-to-b from-pink-50 via-white to-purple-50 ring-4 ring-pink-200/50 -mt-2 md:-mt-6"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-40" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-500 text-amber-950 font-black text-xl flex items-center justify-center mx-auto shadow-md shadow-yellow-200">
                👑 1위
              </div>
              <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto my-3 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <TierIllustration tier={top1.tier.tier} rank={top1.rank} size="full" />
              </div>
              <div className="text-xs font-mono font-bold text-pink-600">{top1.studentId} · {top1.grade}학년 {top1.classNum}반</div>
              <h3 className="font-black text-2xl text-slate-800 mt-0.5 flex items-center justify-center">
                {top1.name}
              </h3>
              <div className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-1">
                {top1.totalScore}점
              </div>
              <div className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xs">
                {top1.tier.emoji} {top1.tier.title}
              </div>
            </motion.div>
          )}

          {/* 3rd Place */}
          {top3 && (
            <motion.div
              whileHover={{ y: -6 }}
              onClick={() => onSelectStudent(top3)}
              className="order-3 glass-card p-5 rounded-3xl border-2 border-amber-200 text-center cursor-pointer relative overflow-hidden shadow-md bg-white/90"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-800 text-amber-50 font-black text-lg flex items-center justify-center mx-auto shadow-xs">
                3위
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto my-3 rounded-2xl overflow-hidden shadow-sm">
                <TierIllustration tier={top3.tier.tier} rank={top3.rank} size="full" />
              </div>
              <div className="text-xs font-mono font-bold text-slate-500">{top3.studentId} · {top3.grade}학년 {top3.classNum}반</div>
              <h3 className="font-black text-lg text-slate-800 mt-0.5">{top3.name}</h3>
              <div className="text-xl font-black text-indigo-600 mt-1">{top3.totalScore}점</div>
              <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
                {top3.tier.emoji} {top3.tier.title}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Filter and Search Controls */}
      <div className="glass-panel p-4 sm:p-5 rounded-3xl space-y-3 max-w-5xl mx-auto border border-pink-100">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Grade Filters */}
          <div className="flex items-center space-x-1.5 w-full md:w-auto overflow-x-auto">
            <span className="text-xs font-bold text-slate-500 mr-1 shrink-0">학년:</span>
            {[
              { id: 'all', label: '전체' },
              { id: 1, label: '1학년' },
              { id: 2, label: '2학년' },
              { id: 3, label: '3학년' },
            ].map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedGrade(g.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  selectedGrade === g.id
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-pink-50 border border-slate-200'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Class Filters */}
          <div className="flex items-center space-x-1.5 w-full md:w-auto overflow-x-auto">
            <span className="text-xs font-bold text-slate-500 mr-1 shrink-0">반:</span>
            {[
              { id: 'all', label: '전체반' },
              { id: 1, label: '1반' },
              { id: 2, label: '2반' },
              { id: 3, label: '3반' },
            ].map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedClassNum(c.id)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedClassNum === c.id
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-purple-50 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-56">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="학생 이름 / 학번 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-pink-200 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-pink-300 focus:outline-hidden"
            />
          </div>

          {/* Sort Toggle (Rank vs StudentId) */}
          <button
            onClick={() => setSortOrder(prev => prev === 'rank' ? 'studentId' : 'rank')}
            className="px-3 py-2 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 flex items-center space-x-1 shrink-0"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-pink-500" />
            <span>{sortOrder === 'rank' ? '순위순 정렬' : '학번순 정렬'}</span>
          </button>
        </div>
      </div>

      {/* Students List */}
      <div className="space-y-3.5 max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-2">
          <div className="text-xs font-bold text-slate-500">
            총 <span className="text-pink-600 font-extrabold">{filteredStudents.length}명</span>의 학생이 표시 중입니다.
          </div>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="glass-card p-12 text-center rounded-3xl text-slate-400 space-y-2">
            <User className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-sm font-bold">조건에 일치하는 학생이 없습니다.</p>
          </div>
        ) : (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              maxScore={maxScore}
              onSelect={onSelectStudent}
            />
          ))
        )}
      </div>
    </div>
  );
}
