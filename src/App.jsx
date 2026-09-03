import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import RankingBoard from './components/RankingBoard';
import StudentDetailModal from './components/StudentDetailModal';
import MonthlyResetModal from './components/MonthlyResetModal';
import HallOfFame from './components/HallOfFame';
import ScoreManager from './components/ScoreManager';
import StudentManager from './components/StudentManager';
import AdminSettings from './components/AdminSettings';
import GasGuideModal from './components/GasGuideModal';
import TeacherAuthModal from './components/TeacherAuthModal';
import { useRankData } from './hooks/useRankData';

export default function App() {
  const [activeTab, setActiveTab] = useState('ranking'); // ranking, hallOfFame, scoreManager, studentManager, settings
  const [selectedStudentForDetail, setSelectedStudentForDetail] = useState(null);
  const [isGasGuideOpen, setIsGasGuideOpen] = useState(false);
  
  // Role & Authentication State
  const [role, setRole] = useState('student'); // 'student' | 'teacher'
  const [isTeacherAuthOpen, setIsTeacherAuthOpen] = useState(false);
  const [teacherPin, setTeacherPin] = useState(() => {
    return localStorage.getItem('hsg_teacher_pin') || 'admin123';
  });

  const {
    students,
    rankedStudents,
    gasUrl,
    setGasUrl,
    isSyncing,
    syncError,
    hallOfFame,
    showMonthlyPopup,
    championDataForPopup,
    syncWithGas,
    addStudent,
    removeStudent,
    updateStudent,
    addScoreRecord,
    removeScoreRecord,
    executeMonthlyReset,
    triggerMonthlyResetSimulation,
    resetToDefaultData,
  } = useRankData();

  // URL 및 브라우저 히스토리 기반 라우팅 동기화
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();

      const isTeacherRoute =
        path.includes('/teacher') ||
        path.includes('/admin') ||
        hash.includes('#/teacher') ||
        hash.includes('#/admin') ||
        search.includes('role=teacher');

      if (isTeacherRoute) {
        const isAuthSession = sessionStorage.getItem('hsg_teacher_authed') === 'true';
        if (isAuthSession) {
          setRole('teacher');
        } else {
          setIsTeacherAuthOpen(true);
        }
      } else {
        setRole('student');
        setActiveTab((prev) => (prev === 'ranking' || prev === 'hallOfFame' ? prev : 'ranking'));
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // 교사 모드로 전환 처리
  const handleSwitchToTeacher = () => {
    const isAuthSession = sessionStorage.getItem('hsg_teacher_authed') === 'true';
    if (isAuthSession) {
      setRole('teacher');
      window.history.pushState(null, '', '/teacher');
    } else {
      setIsTeacherAuthOpen(true);
    }
  };

  // 교사 인증 성공 시
  const handleTeacherAuthSuccess = () => {
    sessionStorage.setItem('hsg_teacher_authed', 'true');
    setRole('teacher');
    setIsTeacherAuthOpen(false);
    window.history.pushState(null, '', '/teacher');
  };

  // 학생 모드로 전환 처리
  const handleSwitchToStudent = () => {
    setRole('student');
    setActiveTab('ranking');
    window.history.pushState(null, '', '/');
  };

  // PIN 변경 핸들러
  const handleUpdateTeacherPin = (newPin) => {
    setTeacherPin(newPin);
    localStorage.setItem('hsg_teacher_pin', newPin);
  };

  // 현재 모달에 열려있는 학생 객체의 최신 상태 동기화
  const currentDetailStudent = selectedStudentForDetail
    ? rankedStudents.find((s) => s.id === selectedStudentForDetail.id || s.studentId === selectedStudentForDetail.studentId) || selectedStudentForDetail
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFF5F7] via-[#FAF5FF] to-[#EFF6FF] text-slate-800">
      
      {/* Navigation Header (역할에 따른 분리) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        role={role}
        onSwitchToTeacher={handleSwitchToTeacher}
        onSwitchToStudent={handleSwitchToStudent}
        isSyncing={isSyncing}
        syncError={syncError}
        gasUrl={gasUrl}
        onRefresh={() => syncWithGas()}
        onOpenGasGuide={() => setIsGasGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        
        {/* 1. 학생 개인별 실시간 랭킹 보드 (학생 & 교사 공통) */}
        {activeTab === 'ranking' && (
          <RankingBoard
            rankedStudents={rankedStudents}
            onSelectStudent={(s) => setSelectedStudentForDetail(s)}
          />
        )}

        {/* 2. 명예의 전당 (학생 & 교사 공통) */}
        {activeTab === 'hallOfFame' && (
          <HallOfFame
            hallOfFame={hallOfFame}
          />
        )}

        {/* 3. 선생님 전용 개인별 점수 기록 페이지 (교사 전용) */}
        {role === 'teacher' && activeTab === 'scoreManager' && (
          <ScoreManager
            students={students}
            onAddScore={addScoreRecord}
            onDeleteScore={removeScoreRecord}
          />
        )}

        {/* 4. 학생 명부 관리 전용 페이지 (교사 전용) */}
        {role === 'teacher' && activeTab === 'studentManager' && (
          <StudentManager
            students={students}
            onAddStudent={addStudent}
            onRemoveStudent={removeStudent}
            onUpdateStudent={updateStudent}
          />
        )}

        {/* 5. Google Apps Script 연동 및 환경 설정 전용 페이지 (교사 전용) */}
        {role === 'teacher' && activeTab === 'settings' && (
          <AdminSettings
            gasUrl={gasUrl}
            setGasUrl={setGasUrl}
            isSyncing={isSyncing}
            syncError={syncError}
            onSyncGas={syncWithGas}
            onResetDefault={resetToDefaultData}
            onSimulateMonthlyPopup={triggerMonthlyResetSimulation}
            onOpenGasGuide={() => setIsGasGuideOpen(true)}
            teacherPin={teacherPin}
            onUpdateTeacherPin={handleUpdateTeacherPin}
          />
        )}
      </main>

      {/* Interactive Modals */}
      
      {/* 1. Student Detail Modal */}
      <StudentDetailModal
        isOpen={!!selectedStudentForDetail}
        student={currentDetailStudent}
        onClose={() => setSelectedStudentForDetail(null)}
        onAddScore={addScoreRecord}
        onDeleteScore={removeScoreRecord}
        role={role}
      />

      {/* 2. Monthly Reset & 1st of Month Fireworks Celebration Popup */}
      <MonthlyResetModal
        isOpen={showMonthlyPopup}
        championData={championDataForPopup}
        onConfirmReset={(monthTitle) => executeMonthlyReset(monthTitle)}
      />

      {/* 3. Google Apps Script Tutorial Modal */}
      <GasGuideModal
        isOpen={isGasGuideOpen}
        onClose={() => setIsGasGuideOpen(false)}
      />

      {/* 4. Teacher PIN Authentication Modal */}
      <TeacherAuthModal
        isOpen={isTeacherAuthOpen}
        onClose={() => {
          setIsTeacherAuthOpen(false);
          if (role !== 'teacher') {
            window.history.pushState(null, '', '/');
          }
        }}
        onSuccess={handleTeacherAuthSuccess}
        teacherPin={teacherPin}
      />

      {/* Footer */}
      <footer className="w-full py-8 border-t border-pink-100/80 bg-white/60 text-center text-xs text-slate-400 space-y-1">
        <p className="font-semibold text-slate-500">
          ✨ 여고 갓생 학생 개인별 생활기록 랭킹전 (React + Tailwind CSS + Framer Motion)
        </p>
        <p>
          {role === 'teacher' ? (
            <span className="text-purple-600 font-bold">
              👨‍🏫 교사 전용 관리 모드 접속 중 · <button onClick={handleSwitchToStudent} className="underline hover:text-pink-600">학생 화면으로 전환</button>
            </span>
          ) : (
            <span>학생 전용 뷰 (실시간 개인 랭킹 & 명예의 전당)</span>
          )}
        </p>
      </footer>
    </div>
  );
}
