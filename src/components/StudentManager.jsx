import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Plus, Trash2, Edit2, Check, X, User, Award, Sparkles, School, Search } from 'lucide-react';
import TierIllustration from './TierIllustration';

export default function StudentManager({
  students = [],
  onAddStudent,
  onRemoveStudent,
  onUpdateStudent,
}) {
  const [newGrade, setNewGrade] = useState(1);
  const [newClassNum, setNewClassNum] = useState(1);
  const [newStudentNum, setNewStudentNum] = useState(21);
  const [newName, setNewName] = useState('');
  const [newMotto, setNewMotto] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [toastMsg, setToastMsg] = useState('');

  const handleCreateStudent = (e) => {
    e.preventDefault();
    const studentId = `${newGrade}${newClassNum}${String(newStudentNum).padStart(2, '0')}`;
    
    onAddStudent({
      studentId,
      name: newName.trim() || `학생 ${studentId}`,
      grade: Number(newGrade),
      classNum: Number(newClassNum),
      studentNum: Number(newStudentNum),
      motto: newMotto.trim() || '✨ 매일매일 갓생 도전!',
    });

    setToastMsg(`🎉 ${studentId} ${newName.trim()} 학생이 등록되었습니다!`);
    setNewName('');
    setNewMotto('');
    setNewStudentNum(prev => prev + 1);

    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleStartEdit = (student) => {
    setEditingStudentId(student.id);
    setEditFormData({
      name: student.name,
      motto: student.motto || '',
      studentId: student.studentId,
    });
  };

  const handleSaveEdit = (studentId) => {
    onUpdateStudent(studentId, editFormData);
    setEditingStudentId(null);
    setToastMsg('✨ 학생 정보가 성공적으로 수정되었습니다.');
    setTimeout(() => setToastMsg(''), 3000);
  };

  // 검색 필터 적용
  const filteredList = students.filter(s => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return s.name.toLowerCase().includes(q) || String(s.studentId).includes(q);
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200">
          <UserCheck className="w-3.5 h-3.5" />
          <span>학생 명부 및 개인별 관리 대시보드</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
          학생 등록 · 명부 관리
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          학생을 등록하거나 수정하세요. 구글 시트 연동 시 시트의 학생 명부 및 출석 기록이 우선 반영됩니다.
        </p>
      </div>

      {/* Toast Notification */}
      {toastMsg && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>{toastMsg}</span>
          </div>
          <button onClick={() => setToastMsg('')} className="text-white/80 hover:text-white text-xs">
            닫기
          </button>
        </motion.div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="glass-card p-4 rounded-2xl border border-pink-200 text-center">
          <div className="text-xs font-bold text-slate-500">전체 등록 학생</div>
          <div className="text-2xl font-black text-pink-600 mt-1">{students.length}명</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-purple-200 text-center">
          <div className="text-xs font-bold text-slate-500">1학년 학생</div>
          <div className="text-2xl font-black text-purple-600 mt-1">{students.filter(s => s.grade === 1).length}명</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-indigo-200 text-center">
          <div className="text-xs font-bold text-slate-500">2학년 학생</div>
          <div className="text-2xl font-black text-indigo-600 mt-1">{students.filter(s => s.grade === 2).length}명</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-emerald-200 text-center">
          <div className="text-xs font-bold text-slate-500">3학년 학생</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">{students.filter(s => s.grade === 3).length}명</div>
        </div>
      </div>

      {/* Add Student Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-pink-200 space-y-4">
        <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center">
          <Plus className="w-5 h-5 mr-1.5 text-pink-500" />
          새로운 학생 등록하기
        </h3>

        <form onSubmit={handleCreateStudent} className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">학년</label>
              <select
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-pink-300"
              >
                <option value={1}>1학년</option>
                <option value={2}>2학년</option>
                <option value={3}>3학년</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">반</label>
              <input
                type="number"
                min="1"
                max="20"
                value={newClassNum}
                onChange={(e) => setNewClassNum(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">출석 번호</label>
              <input
                type="number"
                min="1"
                max="50"
                value={newStudentNum}
                onChange={(e) => setNewStudentNum(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">학생 이름</label>
              <input
                type="text"
                placeholder="예: 김아름"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-2xl font-black text-xs shadow-md shadow-pink-200"
              >
                학생 등록
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">좌우명 / 슬로건</label>
            <input
              type="text"
              placeholder="예: ✨ 매일매일 성실하게 갓생 살기!"
              value={newMotto}
              onChange={(e) => setNewMotto(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </form>
      </div>

      {/* Student Search & List */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h4 className="text-base font-black text-slate-800">
            등록된 학생 명단 ({filteredList.length}명)
          </h4>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="이름 또는 학번 검색..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredList.map((s) => {
            const isEditing = editingStudentId === s.id;

            return (
              <div
                key={s.id}
                className="p-4 bg-white rounded-2xl border border-pink-100 hover:border-pink-300 transition-all shadow-2xs space-y-2 relative"
              >
                {isEditing ? (
                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400">이름</label>
                      <input
                        type="text"
                        value={editFormData.name}
                        onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                        className="w-full px-2 py-1 bg-slate-50 border rounded-lg text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400">좌우명</label>
                      <input
                        type="text"
                        value={editFormData.motto}
                        onChange={(e) => setEditFormData({ ...editFormData, motto: e.target.value })}
                        className="w-full px-2 py-1 bg-slate-50 border rounded-lg text-xs"
                      />
                    </div>

                    <div className="flex space-x-2 pt-1">
                      <button
                        onClick={() => handleSaveEdit(s.id)}
                        className="flex-1 py-1.5 bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>저장</span>
                      </button>
                      <button
                        onClick={() => setEditingStudentId(null)}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                            {s.studentId}
                          </span>
                          <h5 className="font-black text-base text-slate-800">{s.name}</h5>
                        </div>
                        <p className="text-xs text-slate-500 font-semibold mt-0.5">
                          {s.grade}학년 {s.classNum}반 ({s.studentNum || 0}번)
                        </p>
                      </div>

                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleStartEdit(s)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                          title="수정"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`${s.name}(${s.studentId}) 학생을 명부에서 삭제하시겠습니까?`)) {
                              onRemoveStudent(s.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-600 italic bg-pink-50/50 p-2 rounded-xl border border-pink-100/60 line-clamp-1">
                      {s.motto || '“오늘도 갓생 도전!”'}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
