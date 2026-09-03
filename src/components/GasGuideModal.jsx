import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, FileSpreadsheet, ExternalLink, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GAS_SAMPLE_CODE } from '../data/defaultClasses';

export default function GasGuideModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(GAS_SAMPLE_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-pink-100 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-white/20 rounded-2xl backdrop-blur-xs">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black">[야간자기주도학습 기록용] 시트 원클릭 연동 가이드</h3>
                <p className="text-xs text-emerald-100">
                  다른 시트 연결 불필요! [야간자기주도학습 기록용] 시트 하나로 모든 연동이 끝납니다.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Guide Steps */}
          <div className="p-6 space-y-6 overflow-y-auto text-xs text-slate-700">
            
            {/* Overview Box */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <div className="flex items-center space-x-1.5 font-bold text-emerald-900 text-sm">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>선생님의 [야간자기주도학습 기록용] 시트 하나로 끝!</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 bg-white rounded-xl border border-emerald-100">
                  <div className="font-bold text-slate-800 flex items-center">
                    <span className="mr-1">📋</span> 1. 학생명단 (기초 데이터)
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    '학생명단' 탭의 <b>학번(A열)</b>과 <b>이름(B열)</b>을 읽어 전교생 명부 자동 로드 (기본점수 100점)!
                  </p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-emerald-100">
                  <div className="font-bold text-slate-800 flex items-center">
                    <span className="mr-1">🌙</span> 2. 야자 출석기록 (+5점/교시)
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    '출석기록' 탭의 <b>1교시/2교시</b> 출석 여부를 읽어 학생 개인별 야자 점수(+5점/교시) 자동 합산!
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1: Apps Script Code */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-black text-slate-900 flex items-center justify-between">
                <span className="flex items-center">
                  <span className="w-6 h-6 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2 text-xs font-bold">Step 1</span>
                  Apps Script에 코드 붙여넣기
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs flex items-center space-x-1 shadow-md transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                  <span>{copied ? '복사 완료!' : '스크립트 원클릭 복사'}</span>
                </button>
              </h4>
              <p className="text-slate-600">
                <b>[야간자기주도학습 기록용]</b> 시트 상단 메뉴 <b>[확장 프로그램] → [Apps Script]</b>를 클릭하고 아래 코드를 붙여넣습니다.
              </p>

              <div className="relative">
                <pre className="p-4 bg-slate-900 text-slate-100 rounded-2xl font-mono text-[11px] max-h-48 overflow-y-auto leading-relaxed">
                  {GAS_SAMPLE_CODE}
                </pre>
              </div>
            </div>

            {/* Step 2: Deployment */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-black text-slate-900 flex items-center">
                <span className="w-6 h-6 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2 text-xs font-bold">Step 2</span>
                웹 앱(Web App)으로 배포 (또는 새 버전 업데이트)
              </h4>
              
              <div className="space-y-2 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="flex items-start space-x-2 text-amber-900 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>배포 설정 3가지 필수 체크:</span>
                </div>
                <ol className="list-decimal pl-5 space-y-1 text-slate-700 font-medium text-[11px]">
                  <li>우측 상단 파란색 <b>[배포] → [배포 관리]</b> (또는 [새 배포]) 클릭</li>
                  <li>버전 드롭다운에서 <b>[새 버전]</b> 선택</li>
                  <li>
                    액세스 권한 항목이 <b className="text-rose-600 underline">"모든 사용자 (Anyone)"</b> 로 되어 있는지 확인
                  </li>
                  <li>[배포] 클릭 후 생성된 <b>웹 앱 URL (https://script.google.com/macros/s/.../exec)</b>을 복사!</li>
                </ol>
              </div>
            </div>

            {/* Step 3: Paste & Sync */}
            <div className="space-y-2">
              <h4 className="text-sm font-black text-slate-900 flex items-center">
                <span className="w-6 h-6 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2 text-xs font-bold">Step 3</span>
                앱의 [연동 및 설정] 탭에 URL 입력 후 저장
              </h4>
              <p className="text-slate-600">
                본 웹 앱의 <b>[연동 및 설정]</b> 탭에 복사한 URL을 넣고 <b>[저장 및 연결 테스트]</b>를 누르면 전교생 명부와 야자 출석(+5점/교시)이 실시간으로 동기화됩니다!
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md"
            >
              가이드 확인 완료
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
