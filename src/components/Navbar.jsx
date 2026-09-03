import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Edit3, UserCheck, Settings, RefreshCw, Sparkles, CheckCircle2, AlertCircle, Lock, GraduationCap } from 'lucide-react';

export default function Navbar({
  activeTab,
  setActiveTab,
  role, // 'student' | 'teacher'
  onSwitchToTeacher,
  onSwitchToStudent,
  isSyncing,
  syncError,
  gasUrl,
  onRefresh,
  onOpenGasGuide,
}) {
  const currentDate = new Date();
  const currentMonthStr = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  // 학생용 탭 vs 교사용 탭 분리
  const studentTabs = [
    { id: 'ranking', label: '실시간 랭킹', icon: Trophy, badge: 'LIVE' },
    { id: 'hallOfFame', label: '명예의 전당', icon: Award },
  ];

  const teacherTabs = [
    { id: 'ranking', label: '실시간 랭킹', icon: Trophy, badge: 'LIVE' },
    { id: 'hallOfFame', label: '명예의 전당', icon: Award },
    { id: 'scoreManager', label: '점수 기록', icon: Edit3, role: '선생님용' },
    { id: 'studentManager', label: '학생 관리', icon: UserCheck, role: '명부 관리' },
    { id: 'settings', label: '연동 및 설정', icon: Settings },
  ];

  const visibleTabs = role === 'teacher' ? teacherTabs : studentTabs;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 border-b border-pink-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & School Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('ranking')}>
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-purple-400 flex items-center justify-center text-white shadow-md shadow-pink-200"
            >
              <Sparkles className="w-6 h-6 animate-pulse" />
            </motion.div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  여고 갓생 랭킹전
                </span>
                {role === 'teacher' ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-100 text-purple-700 border border-purple-200">
                    👨‍🏫 교사 관리자 모드
                  </span>
                ) : (
                  <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-100 text-pink-700 border border-pink-200 animate-bounce">
                    {currentMonthStr} 시즌 🎀
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {role === 'teacher'
                  ? '교사 전용 페이지 (개인 점수 관리 · 학생 명부 · GAS 연동)'
                  : '학생 개인별 생활기록 실시간 랭킹 & 월간 보상'}
              </p>
            </div>
          </div>

          {/* Right Actions: Role Switch & Sync Status */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Teacher Mode: Show GAS Status & Refresh */}
            {role === 'teacher' ? (
              <>
                <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium">
                  {gasUrl ? (
                    syncError ? (
                      <span className="flex items-center text-rose-500 font-semibold" title={syncError}>
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        GAS 오류
                      </span>
                    ) : (
                      <span className="flex items-center text-emerald-600 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        구글 시트 연동중
                      </span>
                    )
                  ) : (
                    <span className="flex items-center text-purple-600 font-semibold cursor-pointer" onClick={onOpenGasGuide} title="클릭하여 구글 시트 연동 가이드 확인">
                      <Sparkles className="w-3.5 h-3.5 mr-1 text-pink-500" />
                      로컬 Mock 모드
                    </span>
                  )}
                </div>

                {/* Refresh Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onRefresh}
                  disabled={isSyncing}
                  className="p-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 border border-pink-200 transition-colors flex items-center justify-center shadow-xs"
                  title="데이터 새로고침"
                >
                  <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin text-purple-600' : ''}`} />
                </motion.button>

                {/* Switch to Student Mode Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onSwitchToStudent}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center space-x-1.5 border border-slate-300 transition-colors"
                  title="학생 화면으로 전환"
                >
                  <GraduationCap className="w-4 h-4 text-pink-500" />
                  <span className="hidden sm:inline">학생 화면으로</span>
                </motion.button>
              </>
            ) : (
              /* Student Mode: Teacher Entry Button */
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onSwitchToTeacher}
                className="px-3.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center space-x-1.5 border border-purple-200 shadow-2xs transition-colors"
                title="선생님 전용 페이지 접속"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>선생님 페이지</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* Tab Navigation (Role-Filtered) */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 scrollbar-none border-t border-pink-50">
          {visibleTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                  isActive
                    ? 'text-pink-700 bg-pink-100/90 shadow-xs'
                    : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-pink-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="px-1.5 py-0.2 rounded-md text-[10px] font-black bg-rose-500 text-white tracking-wider">
                    {tab.badge}
                  </span>
                )}
                {tab.role && (
                  <span className="hidden lg:inline-block px-1.5 py-0.2 rounded text-[10px] font-medium bg-purple-100 text-purple-700">
                    {tab.role}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
