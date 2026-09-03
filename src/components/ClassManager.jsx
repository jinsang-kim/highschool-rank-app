import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, Plus, Trash2, Edit2, Check, X, User, Award, Sparkles, MessageSquare } from 'lucide-react';
import TierIllustration from './TierIllustration';

export default function ClassManager({
  classes,
  onAddClass,
  onRemoveClass,
  onUpdateClass,
}) {
  const [newGrade, setNewGrade] = useState(1);
  const [newClassNum, setNewClassNum] = useState(3);
  const [newTeacher, setNewTeacher] = useState('');
  const [newSlogan, setNewSlogan] = useState('');
  const [newRepresentative, setNewRepresentative] = useState('');
  const [editingClassId, setEditingClassId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [toastMsg, setToastMsg] = useState('');

  const handleCreateClass = (e) => {
    e.preventDefault();
    onAddClass({
      grade: Number(newGrade),
      classNum: Number(newClassNum),
      name: `${newGrade}학년 ${newClassNum}반`,
      homeroomTeacher: newTeacher.trim() || `${newGrade}-${newClassNum} 담임`,
      slogan: newSlogan.trim() || `✨ ${newGrade}학년 ${newClassNum}반 파이팅!`,
      representative: newRepresentative.trim() || '반장',
    });

    setToastMsg(`🎉 ${newGrade}학년 ${newClassNum}반이 성공적으로 등록되었습니다!`);
    setNewTeacher('');
    setNewSlogan('');
    setNewRepresentative('');
    setNewClassNum(prev => prev + 1);

    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleStartEdit = (classItem) => {
    setEditingClassId(classItem.id);
    setEditFormData({
      name: classItem.name,
      homeroomTeacher: classItem.homeroomTeacher,
      representative: classItem.representative || '',
      slogan: classItem.slogan || '',
    });
  };

  const handleSaveEdit = (classId) => {
    onUpdateClass(classId, editFormData);
    setEditingClassId(null);
    setToastMsg('✨ 학급 정보가 성공적으로 수정되었습니다.');
    setTimeout(() => setToastMsg(''), 3000);
  };

  // 1, 2, 3학년별 학급 그룹핑
  const grade1Classes = classes.filter(c => c.grade === 1);
  const grade2Classes = classes.filter(c => c.grade === 2);
  const grade3Classes = classes.filter(c => c.grade === 3);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200">
          <School className="w-3.5 h-3.5" />
          <span>학급 목록 및 가변 관리 대시보드</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
          학급 추가 · 삭제 · 정보 관리
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          학교 상황에 맞게 학급을 자유롭게 추가하거나 삭제하세요. 학급 수가 변해도 10단계 백분율 일러스트 티어가 자동으로 계산됩니다.
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
          <div className="text-xs font-bold text-slate-500">전체 등록 학급</div>
          <div className="text-2xl font-black text-pink-600 mt-1">{classes.length}개 반</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-purple-200 text-center">
          <div className="text-xs font-bold text-slate-500">1학년 학급</div>
          <div className="text-2xl font-black text-purple-600 mt-1">{grade1Classes.length}개 반</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-indigo-200 text-center">
          <div className="text-xs font-bold text-slate-500">2학년 학급</div>
          <div className="text-2xl font-black text-indigo-600 mt-1">{grade2Classes.length}개 반</div>
        </div>
        <div className="glass-card p-4 rounded-2xl border border-emerald-200 text-center">
          <div className="text-xs font-bold text-slate-500">3학년 학급</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">{grade3Classes.length}개 반</div>
        </div>
      </div>

      {/* Add Class Form */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-pink-200 space-y-4">
        <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center">
          <Plus className="w-5 h-5 mr-1.5 text-pink-500" />
          새로운 학급 등록하기
        </h3>

        <form onSubmit={handleCreateClass} className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">학년 선택</label>
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
              <label className="block text-xs font-bold text-slate-600 mb-1">반 번호</label>
              <input
                type="number"
                min="1"
                max="30"
                value={newClassNum}
                onChange={(e) => setNewClassNum(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">담임선생님 성함</label>
              <input
                type="text"
                placeholder="예: 김예은 선생님"
                value={newTeacher}
                onChange={(e) => setNewTeacher(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">반장/학급대표</label>
              <input
                type="text"
                placeholder="예: 이지원"
                value={newRepresentative}
                onChange={(e) => setNewRepresentative(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-2xl font-black text-xs shadow-md shadow-pink-200"
              >
                학급 추가
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">학급 슬로건 / 급훈</label>
            <input
              type="text"
              placeholder="예: ✨ 1학년 3반 갓생 프로젝트! 마라탕은 우리 거"
              value={newSlogan}
              onChange={(e) => setNewSlogan(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-pink-200 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </form>
      </div>

      {/* Class List by Grade */}
      <div className="space-y-6">
        {[
          { grade: 1, label: '1학년 학급 목록', list: grade1Classes, color: 'from-pink-500 to-rose-500' },
          { grade: 2, label: '2학년 학급 목록', list: grade2Classes, color: 'from-purple-500 to-indigo-500' },
          { grade: 3, label: '3학년 학급 목록', list: grade3Classes, color: 'from-indigo-500 to-blue-500' },
        ].map((section) => (
          <div key={section.grade} className="glass-card rounded-3xl p-6 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-xl text-xs font-black text-white bg-gradient-to-r ${section.color}`}>
                  {section.grade}학년
                </span>
                <h4 className="text-base font-black text-slate-800">{section.label} ({section.list.length}개 반)</h4>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.list.map((c) => {
                const isEditing = editingClassId === c.id;

                return (
                  <div
                    key={c.id}
                    className="p-4 bg-white rounded-2xl border border-pink-100 hover:border-pink-300 transition-all shadow-2xs space-y-2 relative"
                  >
                    {isEditing ? (
                      /* Editing Form */
                      <div className="space-y-2 text-xs">
                        <div>
                          <label className="text-[10px] font-bold text-slate-400">반 이름</label>
                          <input
                            type="text"
                            value={editFormData.name}
                            onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                            className="w-full px-2 py-1 bg-slate-50 border rounded-lg text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400">담임선생님</label>
                          <input
                            type="text"
                            value={editFormData.homeroomTeacher}
                            onChange={(e) => setEditFormData({ ...editFormData, homeroomTeacher: e.target.value })}
                            className="w-full px-2 py-1 bg-slate-50 border rounded-lg text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400">반장</label>
                          <input
                            type="text"
                            value={editFormData.representative}
                            onChange={(e) => setEditFormData({ ...editFormData, representative: e.target.value })}
                            className="w-full px-2 py-1 bg-slate-50 border rounded-lg text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400">슬로건</label>
                          <input
                            type="text"
                            value={editFormData.slogan}
                            onChange={(e) => setEditFormData({ ...editFormData, slogan: e.target.value })}
                            className="w-full px-2 py-1 bg-slate-50 border rounded-lg text-xs"
                          />
                        </div>

                        <div className="flex space-x-2 pt-1">
                          <button
                            onClick={() => handleSaveEdit(c.id)}
                            className="flex-1 py-1.5 bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>저장</span>
                          </button>
                          <button
                            onClick={() => setEditingClassId(null)}
                            className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs"
                          >
                            취소
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Display Card */
                      <>
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="font-black text-base text-slate-800">{c.name}</h5>
                            <p className="text-xs text-slate-500 font-medium">담임: {c.homeroomTeacher}</p>
                            {c.representative && (
                              <p className="text-[11px] text-purple-600 font-semibold">반장: {c.representative}</p>
                            )}
                          </div>

                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => handleStartEdit(c)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                              title="수정"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`${c.name}을 삭제하시겠습니까?`)) {
                                  onRemoveClass(c.id);
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
                          {c.slogan || '“우리 반 파이팅!”'}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
