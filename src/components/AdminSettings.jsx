import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Globe, RefreshCw, Sparkles, HelpCircle, Check, AlertCircle, RotateCcw, PartyPopper, ShieldCheck, Database, Lock, KeyRound } from 'lucide-react';
import { CHARACTER_TIERS } from '../data/characterTiers';
import TierIllustration from './TierIllustration';

export default function AdminSettings({
  gasUrl,
  setGasUrl,
  isSyncing,
  syncError,
  onSyncGas,
  onResetDefault,
  onSimulateMonthlyPopup,
  onOpenGasGuide,
  teacherPin,
  onUpdateTeacherPin,
}) {
  const [inputUrl, setInputUrl] = useState(gasUrl);
  const [newPin, setNewPin] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [pinSuccessMsg, setPinSuccessMsg] = useState('');

  const handleSaveGasUrl = (e) => {
    e.preventDefault();
    setGasUrl(inputUrl.trim());
    if (inputUrl.trim()) {
      onSyncGas(inputUrl.trim());
      setSaveSuccessMsg('GAS Web App URL이 저장되고 구글 시트와의 동기화를 시도했습니다.');
    } else {
      setSaveSuccessMsg('로컬 Mock 데이터 모드로 전환되었습니다.');
    }
    setTimeout(() => setSaveSuccessMsg(''), 3500);
  };

  const handleChangePin = (e) => {
    e.preventDefault();
    if (!newPin.trim()) return;
    onUpdateTeacherPin(newPin.trim());
    setPinSuccessMsg(`선생님 비밀번호가 [${newPin.trim()}]으로 성공적으로 변경되었습니다.`);
    setNewPin('');
    setTimeout(() => setPinSuccessMsg(''), 3500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200">
          <Settings className="w-3.5 h-3.5" />
          <span>환경 설정 및 외부 연동 대시보드</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
          Google Apps Script 연동 & 시스템 보안
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          선생님의 구글 스프레드시트 Web App URL을 연동하고, 월간 마감 이벤트 시뮬레이션 및 교사 인증 PIN을 설정합니다.
        </p>
      </div>

      {/* GAS Configuration Box */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-indigo-200 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800">Google 스프레드시트 (GAS) 실시간 연동</h3>
              <p className="text-xs text-slate-500">배포된 Web App URL을 등록하여 구글 시트 점수를 웹 앱으로 가져옵니다.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenGasGuide}
            className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2.5 rounded-2xl border border-indigo-200 shadow-2xs flex items-center space-x-1.5 self-start sm:self-auto"
          >
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span>구글 시트 연동 3분 가이드 보기</span>
          </button>
        </div>

        <form onSubmit={handleSaveGasUrl} className="space-y-3 pt-2">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700">
              배포된 Google Apps Script Web App URL
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                placeholder="https://script.google.com/macros/s/.../exec"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-indigo-200 rounded-2xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-indigo-300 focus:outline-hidden placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={isSyncing}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? '동기화 중...' : '저장 및 연결 테스트'}</span>
              </button>
            </div>
          </div>

          {syncError && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-semibold flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
              <span>{syncError}</span>
            </div>
          )}

          {saveSuccessMsg && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-semibold flex items-center">
              <Check className="w-4 h-4 mr-2 shrink-0" />
              <span>{saveSuccessMsg}</span>
            </div>
          )}
        </form>
      </div>

      {/* Security & Teacher PIN Setting */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-200 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800">교사 전용 접속 비밀번호(PIN) 관리</h3>
            <p className="text-xs text-slate-500">
              학생들이 임의로 관리자 페이지에 접속하지 못하도록 비밀번호를 변경할 수 있습니다. (현재 PIN: {teacherPin})
            </p>
          </div>
        </div>

        <form onSubmit={handleChangePin} className="space-y-3 pt-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              maxLength={8}
              placeholder="새로운 교사 비밀번호 (예: 2026 또는 5678)"
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
              className="flex-1 px-4 py-3 bg-white border border-purple-200 rounded-2xl text-xs sm:text-sm font-black tracking-wider focus:ring-2 focus:ring-purple-300 focus:outline-hidden"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-md shadow-purple-200 flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <KeyRound className="w-4 h-4" />
              <span>비밀번호 변경</span>
            </button>
          </div>

          {pinSuccessMsg && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-semibold flex items-center">
              <Check className="w-4 h-4 mr-2 shrink-0" />
              <span>{pinSuccessMsg}</span>
            </div>
          )}
        </form>
      </div>

      {/* Simulation & Data Controls */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-200 space-y-4">
        <h3 className="text-base sm:text-lg font-black text-slate-800 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-amber-500" />
          이벤트 시뮬레이션 및 데이터 백업/초기화 도구
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Monthly Reset 1st of Month Simulation */}
          <div className="p-5 bg-white/95 rounded-2xl border border-pink-200 space-y-2.5">
            <h4 className="font-bold text-sm text-slate-800 flex items-center">
              <PartyPopper className="w-4 h-4 mr-1.5 text-pink-500" />
              매월 1일 마감 & 팝업 즉시 시뮬레이션
            </h4>
            <p className="text-xs text-slate-500">
              접속일이 1일이 아니어도 언제든 전체 화면 폭죽 팝업과 지난달 1위 학급 시상식을 테스트할 수 있습니다.
            </p>
            <button
              type="button"
              onClick={onSimulateMonthlyPopup}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-black text-xs shadow-md shadow-pink-200 flex items-center justify-center space-x-1.5"
            >
              <span>🎉 1일 축하 팝업 즉시 실행</span>
            </button>
          </div>

          {/* Reset to Default */}
          <div className="p-5 bg-white/95 rounded-2xl border border-slate-200 space-y-2.5">
            <h4 className="font-bold text-sm text-slate-800 flex items-center">
              <RotateCcw className="w-4 h-4 mr-1.5 text-slate-500" />
              초기 기본 8개 반 데이터로 복원
            </h4>
            <p className="text-xs text-slate-500">
              테스트 중 변경된 모든 학급 및 점수 히스토리를 초기 기본 8개 반(1-1, 1-2, 2-1, 2-2, 2-3, 3-1, 3-2, 3-3)으로 복원합니다.
            </p>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('기본 8개 학급 및 샘플 점수 데이터로 초기화하시겠습니까?')) {
                  onResetDefault();
                }
              }}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-300"
            >
              기본 데이터로 초기화
            </button>
          </div>
        </div>
      </div>

      {/* 10-Tier Illustrated Cards Reference Grid */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-black text-slate-800 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-pink-500" />
              10단계 전용 풀 일러스트레이션 카드 갤러리
            </h3>
            <p className="text-xs text-slate-500">순위 백분율에 따라 자동으로 배정되는 10가지 개성 넘치는 일러스트입니다.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {CHARACTER_TIERS.map((tier) => (
            <div
              key={tier.tier}
              className={`p-3.5 rounded-3xl border ${tier.cardBorder} bg-white flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-2">
                <TierIllustration tier={tier.tier} size="full" />
              </div>
              
              <div className="space-y-1 w-full">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-extrabold bg-pink-100 text-pink-700 inline-block">
                  상위 {tier.maxPercent}%
                </span>
                <h4 className="font-black text-xs sm:text-sm text-slate-800 line-clamp-1">{tier.title}</h4>
                <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">{tier.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
