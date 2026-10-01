/**
 * 학생 개인별 초기 마스터 데이터 및 3대 점수 체계
 * (선생님의 실제 구글 시트 [야간자기주도학습 기록용] 기반)
 * 총점 = 🏫 기본점수(100점) + 🌙 야자점수 + ✨ 특별가점
 */

export const DEFAULT_STUDENTS = [
  { id: 'student-1101', studentId: '1101', name: '김아름', grade: 1, classNum: 1, studentNum: 1, motto: '✨ 매일매일 성실하게 갓생 살기!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1102', studentId: '1102', name: '김태린', grade: 1, classNum: 1, studentNum: 2, motto: '🎧 조용히 집중해서 내 페이스대로', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1103', studentId: '1103', name: '김태희', grade: 1, classNum: 1, studentNum: 3, motto: '⚡ 벼락치기 장인! 만회해보자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1104', studentId: '1104', name: '마혜빈', grade: 1, classNum: 1, studentNum: 4, motto: '🍀 럭키비키 긍정 파워로 전진!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1105', studentId: '1105', name: '박시현', grade: 1, classNum: 1, studentNum: 5, motto: '☕ 카페인 힘으로 오늘도 화이팅', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1106', studentId: '1106', name: '송민령', grade: 1, classNum: 1, studentNum: 6, motto: '💖 매 순간 최선을 다하자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1107', studentId: '1107', name: '신민정', grade: 1, classNum: 1, studentNum: 7, motto: '🌸 꽃길만 걷는 고교생활', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1108', studentId: '1108', name: '신보금', grade: 1, classNum: 1, studentNum: 8, motto: '💤 잘 자고 잘 공부하자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1109', studentId: '1109', name: '이민정', grade: 1, classNum: 1, studentNum: 9, motto: '🎀 오늘 하루도 파이팅!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1110', studentId: '1110', name: '이서현', grade: 1, classNum: 1, studentNum: 10, motto: '📚 목표를 향해 한 걸음씩', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1111', studentId: '1111', name: '이수현', grade: 1, classNum: 1, studentNum: 11, motto: '🌈 맑고 자신있게!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1112', studentId: '1112', name: '이영주', grade: 1, classNum: 1, studentNum: 12, motto: '✨ 빛나는 미래를 위해', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1113', studentId: '1113', name: '이윤아', grade: 1, classNum: 1, studentNum: 13, motto: '🎵 즐겁게 생활하자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1114', studentId: '1114', name: '이휘향', grade: 1, classNum: 1, studentNum: 14, motto: '🌷 나만의 색깔로 빛나자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1115', studentId: '1115', name: '임서윤', grade: 1, classNum: 1, studentNum: 15, motto: '💫 꾸준함이 정답이다', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1116', studentId: '1116', name: '정보민', grade: 1, classNum: 1, studentNum: 16, motto: '☀️ 햇살처럼 밝게', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1117', studentId: '1117', name: '최문설', grade: 1, classNum: 1, studentNum: 17, motto: '🌟 오늘도 보람찬 하루', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1118', studentId: '1118', name: '최수빈', grade: 1, classNum: 1, studentNum: 18, motto: '🍀 행운은 노력하는 자에게', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1119', studentId: '1119', name: '허별희', grade: 1, classNum: 1, studentNum: 19, motto: '🥔 작은 감자도 싹을 틔운다!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1120', studentId: '1120', name: '허주희', grade: 1, classNum: 1, studentNum: 20, motto: '🔥 끝까지 포기하지 말자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1203', studentId: '1203', name: '김나영', grade: 1, classNum: 2, studentNum: 3, motto: '👑 1등 먹고 마라탕후루 파티 가자!', baseScore: 100, previousRank: null, history: [] }
];

export const DEFAULT_CLASSES = DEFAULT_STUDENTS;

export const SAMPLE_HALL_OF_FAME = [];

export const CATEGORY_ICONS = {
  '기본점수': '🏫',
  '야자': '🌙',
  '특별가점': '✨',
  '기타': '📝'
};

// ⚙️ [선생님의 고정 Web App URL] 여기에 배포 URL을 입력해두면 어떤 기기/브라우저에서도 절대 풀리지 않고 100% 자동 연결됩니다!
export const DEFAULT_FIXED_GAS_URL = "https://script.google.com/macros/s/AKfycbyJbbiqSpDb64rRFdVVgHd-OmlzOU6fTniACsM0v6SShCARC7X2hSms8QlkT0hTsqgwiw/exec";

/**
 * [월별 자동 분리 & 영구 명예의 전당 자동 아카이빙 통합 Google Apps Script]
 * 
 * 1. 당월(현재 월): 현재 월 출석만 집계하여 실시간 랭킹 제공 (다음 달 1일이 되면 자동으로 100점 시작)
 * 2. 전월(지난 모든 달): 9월, 10월 등 지난 달 기록을 시트에서 자동 역산하여 '영광의 명예의 전당 Top 10'으로 영구 보존!
 */
export const GAS_SAMPLE_CODE = `/**
 * ==============================================================================
 * [여고 생활기록 랭킹전 - 당월 랭킹 & 역대 명예의 전당 Top 10 완전 자동 통합 Web App]
 * ==============================================================================
 */

// ⚙️ 야자 참석 점수 가중치 (1교시당 +5점)
const YAJA_SCORE_PER_ATTEND = 5;

/**
 * 🛠️ [실시간 진단 함수]:
 * Apps Script 상단에서 'testDebug'를 선택하고 ▶ [실행]을 누르시면
 * 당월 학생 수와 지난달(9월 등) 명예의 전당 Top 10이 로그에 즉시 출력됩니다!
 */
function testDebug() {
  Logger.log("=== 🔍 생활기록 랭킹전 실시간 데이터 및 명예의 전당 진단 ===");
  const result = fetchIntegratedData();
  Logger.log("1. 총 등록 학생 수: " + result.students.length + "명");
  
  let curYajaCount = 0;
  result.students.forEach(s => {
    (s.history || []).forEach(h => {
      if (h.category === '야자') curYajaCount++;
    });
  });
  Logger.log("2. 이번 달(" + getCurrentYearMonth() + ") 야자 출석 집계 건수: " + curYajaCount + "건");
  
  Logger.log("3. 명예의 전당에 등재된 지난 월 수: " + (result.hallOfFame ? result.hallOfFame.length : 0) + "개 월");
  (result.hallOfFame || []).forEach((hof, hIdx) => {
    Logger.log("   🏆 [" + hof.month + " 명예의 전당 1위 MVP] " + hof.championStudent + " (" + hof.championScore + "점 / " + hof.tierName + ")");
    Logger.log("      Top 10 등재 학생 수: " + (hof.rankings ? hof.rankings.length : 0) + "명");
    if (hof.rankings && hof.rankings.length >= 3) {
      Logger.log("      - 1위: " + hof.rankings[0].name + " (" + hof.rankings[0].score + "점)");
      Logger.log("      - 2위: " + hof.rankings[1].name + " (" + hof.rankings[1].score + "점)");
      Logger.log("      - 3위: " + hof.rankings[2].name + " (" + hof.rankings[2].score + "점)");
    }
  });
  Logger.log("=== ✅ 진단 완료: 정상 작동 중 ===");
}

function doGet(e) {
  try {
    const data = fetchIntegratedData();
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      targetMonth: getCurrentYearMonth(),
      updatedAt: new Date().toISOString(),
      students: data.students,
      hallOfFame: data.hallOfFame || []
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getCurrentYearMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  return year + '-' + month; // 예: "2026-10"
}

/**
 * 날짜 셀의 값에서 "YYYY-MM" 형식의 연/월 문자열을 추출하는 스마트 파서
 */
function parseYearMonthFromDate(dateValue, defaultYear, defaultMonth) {
  if (!dateValue) return null;
  
  if (dateValue instanceof Date) {
    const y = dateValue.getFullYear();
    const m = ('0' + (dateValue.getMonth() + 1)).slice(-2);
    return y + '-' + m;
  }
  
  const str = String(dateValue).trim();
  if (str === '') return null;
  
  // 1) "2026-09-01", "2026.09.01", "2026/09/01", "2026년 9월" 등
  const ymdMatch = str.match(/(\\d{4})[-./년\\s]+(\\d{1,2})/);
  if (ymdMatch) {
    const y = ymdMatch[1];
    const m = ('0' + parseInt(ymdMatch[2])).slice(-2);
    return y + '-' + m;
  }
  
  // 2) "9/1", "9-1", "9월 1일" 등 연도가 없는 경우
  const mdMatch = str.match(/^(\\d{1,2})[-./월\\s]+/);
  if (mdMatch) {
    const m = ('0' + parseInt(mdMatch[1])).slice(-2);
    return defaultYear + '-' + m;
  }
  
  return null;
}

/**
 * 순위에 따른 고유 칭호와 이모지 반환
 */
function getTierInfoByRank(rank) {
  const tiers = [
    { title: '우주 대스타 마라탕후루 여왕', emoji: '👑✨' },
    { title: '도도한 재벌집 막내딸', emoji: '💅😎' },
    { title: '갓생 질주 전교회장', emoji: '📚🌟' },
    { title: '럭키비키 Y2K 하굣길', emoji: '🎧🎶' },
    { title: '새벽 감성 만점 스터디러', emoji: '🌙📖' },
    { title: '체력 만렙 몬스터 열공러', emoji: '⚡🔥' },
    { title: '조용한 카리스마 올라운더', emoji: '🎯🤍' },
    { title: '파워 비타민 분위기 메이커', emoji: '🍊🌟' },
    { title: '감성 충만 하이틴 주인공', emoji: '🎀🌷' },
    { title: '포텐 폭발 직전 다크호스', emoji: '🚀✨' }
  ];
  if (rank >= 1 && rank <= 10) return tiers[rank - 1];
  return { title: '갓생 도전자 ' + rank + '위', emoji: '✨' };
}

function fetchIntegratedData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const now = new Date();
  const curYear = now.getFullYear();
  const curMonth = now.getMonth() + 1; // 1~12 (현재 월, 예: 10)
  const curYearMonth = curYear + '-' + ('0' + curMonth).slice(-2); // "2026-10"
  const curYearMonthLabel = curYear + "년 " + curMonth + "월";

  // 1. [학생명단] 탭 로드 (A:학번, B:이름)
  const studentListSheet = ss.getSheetByName("학생명단") || 
                           ss.getSheetByName("학생 명부") || 
                           ss.getSheets()[0];
  const studentListData = studentListSheet.getDataRange().getDisplayValues();
  
  const baseStudents = [];
  const studentIdIndexMap = {};   // "1101" -> index
  const studentNameIndexMap = {}; // "김아름" -> index
  
  for (let i = 1; i < studentListData.length; i++) {
    const sId = String(studentListData[i][0] || '').replace(/[^0-9]/g, '').trim();
    const name = String(studentListData[i][1] || '').trim();
    
    if (sId && sId.length >= 3) {
      const numVal = parseInt(sId);
      const grade = Math.floor(numVal / 1000) || 1;
      const classNum = Math.floor((numVal % 1000) / 100) || 1;
      const studentNum = (numVal % 100) || (baseStudents.length + 1);
      
      const idx = baseStudents.length;
      studentIdIndexMap[sId] = idx;
      if (name) studentNameIndexMap[name] = idx;
      
      baseStudents.push({
        id: 'student-' + sId,
        studentId: sId,
        name: name || ('학생 ' + sId),
        grade: grade,
        classNum: classNum,
        studentNum: studentNum,
        motto: '✨ 매일매일 갓생 도전!',
        baseScore: 100,
        history: []
      });
    }
  }

  // 2. [특별가점] 탭 로드
  const specialMapByMonthAndStudent = {}; // { "2026-09": { "1101": 10 } }
  const generalSpecialMap = {};
  const studentMottoMap = {};

  const specialSheet = ss.getSheetByName("특별가점");
  if (specialSheet) {
    const specialData = specialSheet.getDataRange().getDisplayValues();
    for (let i = 1; i < specialData.length; i++) {
      const rawId = String(specialData[i][0] || '').replace(/[^0-9]/g, '').trim();
      const bonusStr = String(specialData[i][1] || '').replace(/[^0-9.-]/g, '');
      const bonus = parseFloat(bonusStr) || 0;
      const motto = String(specialData[i][2] || '').trim();
      const dateCell = specialData[i][3] || '';

      if (rawId) {
        if (motto) studentMottoMap[rawId] = motto;
        if (bonus !== 0) {
          const ym = parseYearMonthFromDate(dateCell, curYear, curMonth);
          if (ym) {
            if (!specialMapByMonthAndStudent[ym]) specialMapByMonthAndStudent[ym] = {};
            specialMapByMonthAndStudent[ym][rawId] = (specialMapByMonthAndStudent[ym][rawId] || 0) + bonus;
          } else {
            generalSpecialMap[rawId] = (generalSpecialMap[rawId] || 0) + bonus;
          }
        }
      }
    }
  }

  // 좌우명 동기화
  Object.keys(studentMottoMap).forEach(sId => {
    const idx = studentIdIndexMap[sId];
    if (idx !== undefined) baseStudents[idx].motto = studentMottoMap[sId];
  });

  // 3. [출석기록] 탭 파싱 - 모든 행의 날짜를 연/월(YYYY-MM)별로 완전 분류!
  const yajaSheet = ss.getSheetByName("출석기록") || 
                    ss.getSheetByName(curMonth + "월 출석기록") || 
                    ss.getSheetByName(curMonth + "월");

  const monthlyAttendanceMap = {}; // { "2026-09": { "1101": count }, "2026-10": { "1101": count } }
  const foundMonthsSet = {};

  if (yajaSheet) {
    const rawData = yajaSheet.getDataRange().getValues();
    const displayData = yajaSheet.getDataRange().getDisplayValues();

    for (let i = 1; i < displayData.length; i++) {
      const dateCell = rawData[i][0] || displayData[i][0];
      const rawId = String(displayData[i][1] || '').replace(/[^0-9]/g, '').trim();
      const rawName = String(displayData[i][2] || '').trim();
      const p1 = String(displayData[i][3] || '');
      const p2 = String(displayData[i][4] || '');

      let targetKey = rawId;
      if (!studentIdIndexMap[targetKey] && studentNameIndexMap[rawName] !== undefined) {
        targetKey = baseStudents[studentNameIndexMap[rawName]].studentId;
      }

      if (targetKey) {
        let count = 0;
        if (p1.indexOf("출석") !== -1) count++;
        if (p2.indexOf("출석") !== -1) count++;

        if (count > 0) {
          const ym = parseYearMonthFromDate(dateCell, curYear, curMonth) || curYearMonth;
          foundMonthsSet[ym] = true;
          if (!monthlyAttendanceMap[ym]) monthlyAttendanceMap[ym] = {};
          monthlyAttendanceMap[ym][targetKey] = (monthlyAttendanceMap[ym][targetKey] || 0) + count;
        }
      }
    }
  }

  // 4. [당월(Current Month)] 실시간 학생 랭킹 데이터 구성 -> baseStudents.history
  const curYajaMap = monthlyAttendanceMap[curYearMonth] || {};
  Object.keys(curYajaMap).forEach(sId => {
    const idx = studentIdIndexMap[sId];
    const attendCount = curYajaMap[sId];
    if (idx !== undefined && attendCount > 0) {
      baseStudents[idx].history.push({
        id: 'yaja-att-' + sId + '-' + curYearMonth,
        date: new Date().toISOString().split('T')[0],
        category: '야자',
        title: curMonth + '월 야간자기주도학습 출석 (' + attendCount + '교시 참석 인정)',
        points: attendCount * YAJA_SCORE_PER_ATTEND,
        type: 'plus'
      });
    }
  });

  // 당월 특별가점 반영
  const curSpecialMap = specialMapByMonthAndStudent[curYearMonth] || generalSpecialMap;
  Object.keys(curSpecialMap).forEach(sId => {
    const idx = studentIdIndexMap[sId];
    const bonus = curSpecialMap[sId];
    if (idx !== undefined && bonus !== 0) {
      baseStudents[idx].history.push({
        id: 'spc-' + sId + '-' + curYearMonth,
        date: new Date().toISOString().split('T')[0],
        category: '특별가점',
        title: '수업 최우수/환경미화 특별 가점',
        points: bonus,
        type: bonus >= 0 ? 'plus' : 'minus'
      });
    }
  });

  // 5. [지난 달(Past Months) 명예의 전당 Top 10] 자동 산출 및 영구 보존!
  const pastHallOfFame = [];
  const pastMonths = Object.keys(foundMonthsSet)
    .filter(ym => ym < curYearMonth) // 현재 월보다 이전인 모든 달 (예: "2026-09", "2026-08" ...)
    .sort()
    .reverse(); // 최신 지난달부터 정렬

  pastMonths.forEach(ym => {
    const ymParts = ym.split('-');
    const pYear = ymParts[0];
    const pMonth = parseInt(ymParts[1]);
    const monthLabel = pYear + "년 " + pMonth + "월";

    const yajaForMonth = monthlyAttendanceMap[ym] || {};
    const specialForMonth = specialMapByMonthAndStudent[ym] || {};

    // 해당 월의 전교생 점수 산출
    const monthlyScores = baseStudents.map(s => {
      const sId = s.studentId;
      const attCount = yajaForMonth[sId] || 0;
      const yajaScore = attCount * YAJA_SCORE_PER_ATTEND;
      const spcScore = specialForMonth[sId] || 0;
      const totalScore = 100 + yajaScore + spcScore;

      return {
        studentId: sId,
        name: s.name,
        grade: s.grade,
        classNum: s.classNum,
        studentNum: s.studentNum,
        motto: s.motto,
        totalScore: totalScore,
        yajaScore: yajaScore,
        attCount: attCount
      };
    });

    // 점수 내림차순 정렬
    monthlyScores.sort((a, b) => b.totalScore - a.totalScore);

    // 1위부터 순위 및 칭호 부여
    const rankedMonthly = monthlyScores.map((s, rankIndex) => {
      const rank = rankIndex + 1;
      const tier = getTierInfoByRank(rank);
      return {
        rank: rank,
        name: s.name + " (" + s.studentId + ")",
        studentId: s.studentId,
        classInfo: s.grade + "학년 " + s.classNum + "반",
        score: s.totalScore,
        tierTitle: tier.title,
        tierEmoji: tier.emoji
      };
    });

    if (rankedMonthly.length > 0) {
      const champ = monthlyScores[0];
      const champTier = getTierInfoByRank(1);

      pastHallOfFame.push({
        month: monthLabel,
        yearMonth: ym,
        championStudent: champ.studentId + " " + champ.name,
        championScore: champ.totalScore,
        classInfo: champ.grade + "학년 " + champ.classNum + "반",
        tierName: champTier.title + " " + champTier.emoji,
        rewardGiven: "월간 MVP 특급 간식 상품권 & 1위 트로피",
        quote: champ.motto || "“모두 수고 많았어, 다음 달도 화이팅!”",
        totalParticipants: monthlyScores.length,
        rankings: rankedMonthly // 1위부터 10위(Top 10) 및 전교생 보존
      });
    }
  });

  return {
    students: baseStudents,
    hallOfFame: pastHallOfFame
  };
}
`;
