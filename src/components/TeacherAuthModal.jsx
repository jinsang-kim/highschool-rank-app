import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, KeyRound, X, AlertCircle, Sparkles, Check } from 'lucide-react';

export default function TeacherAuthModal({
  isOpen,
  onClose,
  onSuccess,
  teacherPin = 'admin123',
}) {
  const [pinInput, setPinInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // 'admin123' 또는 지정된 PIN으로 인증
    if (pinInput.trim() === 'admin123' || pinInput.trim() === teacherPin.trim()) {
      setErrorMsg('');
      setPinInput('');
      onSuccess();
    } else {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
      setPinInput('');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 sm:p-7 border border-pink-100 z-10 space-y-5 text-center"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-purple-200">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-800">선생님 전용 모드 인증</h3>
            <p className="text-xs text-slate-500">
              학생들의 임의 조작 방지를 위해 교사 인증 비밀번호를 입력해 주세요.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="password"
                maxLength={30}
                autoFocus
                placeholder="비밀번호 입력 (admin123)"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setErrorMsg('');
                }}
                className="w-full px-4 py-3 text-center tracking-widest text-base font-black bg-slate-50 border border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-300 focus:outline-hidden"
                required
              />
            </div>

            {errorMsg && (
              <div className="flex items-center justify-center text-xs text-rose-600 font-bold space-x-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl font-black text-sm shadow-md shadow-purple-200 flex items-center justify-center space-x-1.5"
            >
              <KeyRound className="w-4 h-4" />
              <span>교사 모드로 접속하기</span>
            </button>
          </form>

          <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100">
            💡 고정 관리자 비밀번호는 <b className="text-purple-600 font-mono">admin123</b> 입니다.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
