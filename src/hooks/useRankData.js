import { useState, useEffect, useCallback, useMemo } from 'react';
import { DEFAULT_STUDENTS, SAMPLE_HALL_OF_FAME } from '../data/defaultClasses';
import { processStudentRankings } from '../utils/rankCalculator';
import { fireMonthlyGrandCelebration } from '../utils/confetti';

const STORAGE_KEYS = {
  STUDENTS: 'hsg_rank_students_v2',
  GAS_URL: 'hsg_gas_url_v2',
  HALL_OF_FAME: 'hsg_hall_of_fame_v2',
  LAST_CHECKED_MONTH: 'hsg_last_checked_month_v2',
};

export function useRankData() {
  // 1. 학생 개인별 데이터
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STUDENTS);
      return saved ? JSON.parse(saved) : DEFAULT_STUDENTS;
    } catch (e) {
      console.error('Failed to load students from LocalStorage', e);
      return DEFAULT_STUDENTS;
    }
  });

  // 2. GAS Web App URL
  const [gasUrl, setGasUrl] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.GAS_URL) || '';
    } catch (e) {
      return '';
    }
  });

  // 3. 명예의 전당 아카이브
  const [hallOfFame, setHallOfFame] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HALL_OF_FAME);
      return saved ? JSON.parse(saved) : SAMPLE_HALL_OF_FAME;
    } catch (e) {
      return SAMPLE_HALL_OF_FAME;
    }
  });

  // 4. 동기화 상태 및 모달 상태
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState(null);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const [showMonthlyPopup, setShowMonthlyPopup] = useState(false);
  const [championDataForPopup, setChampionDataForPopup] = useState(null);

  // 로컬 스토리지 자동 저장
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    } catch (e) {
      console.error('Failed to save students to LocalStorage', e);
    }
  }, [students]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GAS_URL, gasUrl);
    } catch (e) {
      console.error('Failed to save GAS URL', e);
    }
  }, [gasUrl]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.HALL_OF_FAME, JSON.stringify(hallOfFame));
    } catch (e) {
      console.error('Failed to save Hall of Fame', e);
    }
  }, [hallOfFame]);

  // 가공 및 정렬된 랭킹 데이터
  const rankedStudents = useMemo(() => {
    return processStudentRankings(students);
  }, [students]);

  // 4. 월말 마감 및 1일 팝업 자동 감지 로직
  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
    const currentMonthKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
    
    const lastChecked = localStorage.getItem(STORAGE_KEYS.LAST_CHECKED_MONTH);

    // 조건: 이전에 접속한 달과 현재 달이 다르고, 오늘이 매월 1일인 경우
    if (lastChecked && lastChecked !== currentMonthKey && currentDate === 1) {
      const currentRankings = processStudentRankings(students);
      if (currentRankings.length > 0) {
        const champ = currentRankings[0];
        setChampionDataForPopup({
          month: `${lastChecked.split('-')[0]}년 ${parseInt(lastChecked.split('-')[1])}월`,
          champStudent: champ,
          allRankings: currentRankings,
        });
        setShowMonthlyPopup(true);
        fireMonthlyGrandCelebration();
      }
      localStorage.setItem(STORAGE_KEYS.LAST_CHECKED_MONTH, currentMonthKey);
    } else if (!lastChecked) {
      localStorage.setItem(STORAGE_KEYS.LAST_CHECKED_MONTH, currentMonthKey);
    }
  }, [students]);

  // GAS 동기화 함수
  const syncWithGas = useCallback(async (customUrl) => {
    const targetUrl = customUrl !== undefined ? customUrl : gasUrl;
    if (!targetUrl || !targetUrl.trim()) {
      setSyncError('Google Apps Script Web App URL이 설정되지 않았습니다.');
      return false;
    }

    setIsSyncing(true);
    setSyncError(null);

    try {
      const response = await fetch(targetUrl.trim());
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: 서버 응답 오류`);
      }
      const data = await response.json();
      
      if (data && data.students && Array.isArray(data.students)) {
        setStudents(data.students);
        setLastSyncTime(new Date());
        setIsSyncing(false);
        return true;
      } else if (data && data.classes && Array.isArray(data.classes)) {
        // 하위 호환
        setStudents(data.classes);
        setLastSyncTime(new Date());
        setIsSyncing(false);
        return true;
      } else {
        throw new Error('응답 데이터 형식이 올바르지 않습니다. (students 배열 필요)');
      }
    } catch (err) {
      console.warn('GAS Sync Error:', err);
      setSyncError(err.message || 'Google Sheets 동기화 중 오류가 발생했습니다.');
      setIsSyncing(false);
      return false;
    }
  }, [gasUrl]);

  // 학생 추가
  const addStudent = useCallback((newStudentData) => {
    const grade = parseInt(newStudentData.grade) || 1;
    const classNum = parseInt(newStudentData.classNum) || 1;
    const studentNum = parseInt(newStudentData.studentNum) || 1;
    const studentId = newStudentData.studentId || `${grade}${classNum}${String(studentNum).padStart(2, '0')}`;
    const name = newStudentData.name || `학생 ${studentId}`;
    const id = `student-${studentId}-${Date.now()}`;

    const newStudent = {
      id,
      studentId,
      name,
      grade,
      classNum,
      studentNum,
      motto: newStudentData.motto || '✨ 매일매일 갓생 도전!',
      baseScore: 100,
      previousRank: students.length + 1,
      history: [
        {
          id: `h-init-${Date.now()}`,
          date: new Date().toISOString().split('T')[0],
          category: '기타',
          title: '학생 등록 초기 기본점수 부여',
          points: 0,
          type: 'plus'
        }
      ]
    };

    setStudents(prev => [...prev, newStudent]);
  }, [students.length]);

  // 학생 삭제
  const removeStudent = useCallback((studentId) => {
    setStudents(prev => prev.filter(s => s.id !== studentId && s.studentId !== studentId));
  }, []);

  // 학생 정보 수정
  const updateStudent = useCallback((studentId, updatedFields) => {
    setStudents(prev => prev.map(s => {
      if (s.id === studentId || s.studentId === studentId) {
        return { ...s, ...updatedFields };
      }
      return s;
    }));
  }, []);

  // 점수 변동 기록 추가 (가점 / 감점)
  const addScoreRecord = useCallback((targetStudentId, record) => {
    const newRecord = {
      id: `h-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      date: record.date || new Date().toISOString().split('T')[0],
      category: record.category || '기타',
      title: record.title || '점수 변동',
      points: Number(record.points),
      type: Number(record.points) >= 0 ? 'plus' : 'minus',
    };

    setStudents(prev => {
      const currentRankings = processStudentRankings(prev);
      const rankMap = {};
      currentRankings.forEach((s) => {
        rankMap[s.id] = s.rank;
      });

      return prev.map(s => {
        if (s.id === targetStudentId || s.studentId === targetStudentId) {
          return {
            ...s,
            previousRank: rankMap[s.id] || s.previousRank,
            history: [newRecord, ...(s.history || [])]
          };
        }
        return {
          ...s,
          previousRank: rankMap[s.id] || s.previousRank
        };
      });
    });
  }, []);

  // 점수 변동 기록 삭제
  const removeScoreRecord = useCallback((targetStudentId, historyId) => {
    setStudents(prev => prev.map(s => {
      if (s.id === targetStudentId || s.studentId === targetStudentId) {
        return {
          ...s,
          history: (s.history || []).filter(h => h.id !== historyId)
        };
      }
      return s;
    }));
  }, []);

  // 월간 마감 및 명예의 전당 아카이빙 실행
  const executeMonthlyReset = useCallback((monthTitle) => {
    const currentRankings = processStudentRankings(students);
    if (currentRankings.length === 0) return;

    const champ = currentRankings[0];
    const today = new Date();
    const defaultMonthTitle = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
    const finalMonthTitle = monthTitle || defaultMonthTitle;

    const newHallRecord = {
      month: finalMonthTitle,
      yearMonth: today.toISOString().substring(0, 7),
      championStudent: `${champ.studentId} ${champ.name}`,
      championScore: champ.totalScore,
      classInfo: `${champ.grade}학년 ${champ.classNum}반`,
      tierName: `${champ.tier.title} ${champ.tier.emoji}`,
      rewardGiven: champ.tier.reward || '월간 MVP 특급 간식 상품권',
      quote: champ.motto || '“모두 고생 많았어, 다음 달도 화이팅!”',
      totalParticipants: currentRankings.length,
      rankings: currentRankings.map(s => ({
        rank: s.rank,
        name: `${s.name} (${s.studentId})`,
        classInfo: `${s.grade}학년 ${s.classNum}반`,
        score: s.totalScore,
        tierTitle: s.tier.title,
        tierEmoji: s.tier.emoji,
      }))
    };

    setHallOfFame(prev => [newHallRecord, ...prev]);

    // 새로운 달 시작: 기본 점수 100점으로 초기화
    setStudents(prev => prev.map((s, index) => ({
      ...s,
      baseScore: 100,
      previousRank: index + 1,
      history: [
        {
          id: `h-reset-${Date.now()}-${index}`,
          date: new Date().toISOString().split('T')[0],
          category: '기타',
          title: `새 달(${finalMonthTitle}) 시작 기본점수`,
          points: 0,
          type: 'plus'
        }
      ]
    })));

    setShowMonthlyPopup(false);
  }, [students]);

  // 1일 팝업 즉시 시뮬레이션
  const triggerMonthlyResetSimulation = useCallback(() => {
    const currentRankings = processStudentRankings(students);
    if (currentRankings.length > 0) {
      const champ = currentRankings[0];
      const today = new Date();
      setChampionDataForPopup({
        month: `${today.getFullYear()}년 ${today.getMonth() + 1}월 마감 결산`,
        champStudent: champ,
        allRankings: currentRankings,
      });
      setShowMonthlyPopup(true);
      fireMonthlyGrandCelebration();
    }
  }, [students]);

  // 기본 더미 데이터로 리셋
  const resetToDefaultData = useCallback(() => {
    setStudents(DEFAULT_STUDENTS);
    setHallOfFame(SAMPLE_HALL_OF_FAME);
    setSyncError(null);
  }, []);

  return {
    students,
    rankedStudents,
    // 하위 호환 매핑
    classes: students,
    rankedClasses: rankedStudents,
    gasUrl,
    setGasUrl,
    isSyncing,
    syncError,
    lastSyncTime,
    hallOfFame,
    showMonthlyPopup,
    setShowMonthlyPopup,
    championDataForPopup,
    syncWithGas,
    addStudent,
    removeStudent,
    updateStudent,
    addClass: addStudent,
    removeClass: removeStudent,
    updateClass: updateStudent,
    addScoreRecord,
    removeScoreRecord,
    executeMonthlyReset,
    triggerMonthlyResetSimulation,
    resetToDefaultData,
  };
}
