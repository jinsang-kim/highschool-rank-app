/**
 * 학생 개인별 초기 마스터 데이터 및 3대 점수 체계
 * (선생님의 실제 구글 시트 [야간자기주도학습 기록용] 기반)
 * 총점 = 🏫 기본점수(100점) + 🌙 야자점수 + ✨ 특별가점
 */

export const DEFAULT_STUDENTS = [
  { id: 'student-1101', studentId: '1101', name: '김아름', grade: 1, classNum: 1, studentNum: 1, phone: '', motto: '✨ 매일매일 성실하게 갓생 살기!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1102', studentId: '1102', name: '김태린', grade: 1, classNum: 1, studentNum: 2, phone: '', motto: '🎧 조용히 집중해서 내 페이스대로', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1103', studentId: '1103', name: '김태희', grade: 1, classNum: 1, studentNum: 3, phone: '', motto: '⚡ 벼락치기 장인! 만회해보자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1104', studentId: '1104', name: '마혜빈', grade: 1, classNum: 1, studentNum: 4, phone: '', motto: '🍀 럭키비키 긍정 파워로 전진!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1105', studentId: '1105', name: '박시현', grade: 1, classNum: 1, studentNum: 5, phone: '', motto: '☕ 카페인 힘으로 오늘도 화이팅', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1106', studentId: '1106', name: '송민령', grade: 1, classNum: 1, studentNum: 6, phone: '', motto: '💖 매 순간 최선을 다하자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1107', studentId: '1107', name: '신민정', grade: 1, classNum: 1, studentNum: 7, phone: '', motto: '🌸 꽃길만 걷는 고교생활', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1108', studentId: '1108', name: '신보금', grade: 1, classNum: 1, studentNum: 8, phone: '', motto: '💤 잘 자고 잘 공부하자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1109', studentId: '1109', name: '이민정', grade: 1, classNum: 1, studentNum: 9, phone: '', motto: '🎀 오늘 하루도 파이팅!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1110', studentId: '1110', name: '이서현', grade: 1, classNum: 1, studentNum: 10, phone: '', motto: '📚 목표를 향해 한 걸음씩', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1111', studentId: '1111', name: '이수현', grade: 1, classNum: 1, studentNum: 11, phone: '', motto: '🌈 맑고 자신있게!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1112', studentId: '1112', name: '이영주', grade: 1, classNum: 1, studentNum: 12, phone: '', motto: '✨ 빛나는 미래를 위해', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1113', studentId: '1113', name: '이윤아', grade: 1, classNum: 1, studentNum: 13, phone: '', motto: '🎵 즐겁게 생활하자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1114', studentId: '1114', name: '이휘향', grade: 1, classNum: 1, studentNum: 14, phone: '', motto: '🌷 나만의 색깔로 빛나자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1115', studentId: '1115', name: '임서윤', grade: 1, classNum: 1, studentNum: 15, phone: '', motto: '💫 꾸준함이 정답이다', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1116', studentId: '1116', name: '정보민', grade: 1, classNum: 1, studentNum: 16, phone: '', motto: '☀️ 햇살처럼 밝게', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1117', studentId: '1117', name: '최문설', grade: 1, classNum: 1, studentNum: 17, phone: '', motto: '🌟 오늘도 보람찬 하루', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1118', studentId: '1118', name: '최수빈', grade: 1, classNum: 1, studentNum: 18, phone: '', motto: '🍀 행운은 노력하는 자에게', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1119', studentId: '1119', name: '허별희', grade: 1, classNum: 1, studentNum: 19, phone: '', motto: '🥔 작은 감자도 싹을 틔운다!', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1120', studentId: '1120', name: '허주희', grade: 1, classNum: 1, studentNum: 20, phone: '', motto: '🔥 끝까지 포기하지 말자', baseScore: 100, previousRank: null, history: [] },
  { id: 'student-1203', studentId: '1203', name: '김나영', grade: 1, classNum: 2, studentNum: 3, phone: '', motto: '👑 1등 먹고 마라탕후루 파티 가자!', baseScore: 100, previousRank: null, history: [] }
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
 * [월별 자동 분리 & 상위 20명 시상 명단 시트 자동 생성 Google Apps Script]
 * 
 * 1. 학생명단 탭 C열의 [전화번호] 자동 연동 지원
 * 2. 시트 상단 메뉴 [🏆 여고 갓생 랭킹전] → [✨ 상위 20명 시상 명단 시트 자동 생성] 원클릭 생성
 * 3. 웹 앱 API로 1위부터 전교생 데이터 및 전화번호 실시간 전송
 */
export const GAS_SAMPLE_CODE = `/**
 * ==============================================================================
 * [여고 생활기록 랭킹전 - 상위 20명 시상 시트 자동 생성 & 전화번호 연동 Web App]
 * ==============================================================================
 */

// ⚙️ 야자 참석 점수 가중치 (1교시당 +5점)
const YAJA_SCORE_PER_ATTEND = 5;

/**
 * 🌟 구글 스프레드시트 상단 메뉴 자동 등록
 * 시트를 열면 상단에 [🏆 갓생 랭킹전] 메뉴가 추가되어 상위 20명 시트를 원클릭 생성할 수 있습니다!
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🏆 갓생 랭킹전')
    .addItem('✨ [지난달] 상위 20명 시상 명단 탭 생성', 'menuCreatePastMonthTop20Sheet')
    .addItem('📊 [이번달 실시간] 상위 20명 명단 탭 생성', 'menuCreateCurrentMonthTop20Sheet')
    .addSeparator()
    .addItem('🔍 실시간 데이터 및 명예의 전당 진단', 'testDebug')
    .addToUi();
}

/**
 * 메뉴 1: 지난달(예: 9월) 상위 20명 시상 명단 시트 탭 자동 생성
 */
function menuCreatePastMonthTop20Sheet() {
  const data = fetchIntegratedData();
  if (data.hallOfFame && data.hallOfFame.length > 0) {
    const latestPast = data.hallOfFame[0];
    const sheetName = createTop20SheetFromRankingData(latestPast.month, latestPast.rankings);
    SpreadsheetApp.getUi().alert('🎉 [' + sheetName + '] 시트 생성이 완료되었습니다!\\n상위 20명 학생의 순위, 학번, 이름, 전화번호, 최종점수가 정리되었습니다.');
  } else {
    SpreadsheetApp.getUi().alert('⚠️ 아직 마감된 지난달 기록이 없습니다. [이번달 실시간] 메뉴를 이용해 주세요.');
  }
}

/**
 * 메뉴 2: 이번 달(예: 10월) 실시간 상위 20명 시트 탭 생성
 */
function menuCreateCurrentMonthTop20Sheet() {
  const data = fetchIntegratedData();
  const now = new Date();
  const curLabel = now.getFullYear() + "년 " + (now.getMonth() + 1) + "월(진행중)";
  
  // 이번 달 실시간 랭킹 산출
  const curRankings = data.students.map(s => {
    let yajaPoints = 0;
    let yajaCount = 0;
    let spcPoints = 0;
    (s.history || []).forEach(h => {
      if (h.category === '야자') {
        yajaPoints += h.points;
        yajaCount += Math.round(h.points / YAJA_SCORE_PER_ATTEND);
      } else if (h.category === '특별가점') {
        spcPoints += h.points;
      }
    });
    return {
      studentId: s.studentId,
      name: s.name,
      phone: s.phone || '',
      classInfo: s.grade + "학년 " + s.classNum + "반",
      score: (s.baseScore || 100) + yajaPoints + spcPoints,
      attCount: yajaCount,
      tierTitle: '',
      tierEmoji: ''
    };
  });
  curRankings.sort((a, b) => b.score - a.score);
  curRankings.forEach((r, idx) => {
    r.rank = idx + 1;
    const tier = getTierInfoByRank(r.rank);
    r.tierTitle = tier.title;
    r.tierEmoji = tier.emoji;
    r.reward = tier.reward;
  });

  const sheetName = createTop20SheetFromRankingData(curLabel, curRankings);
  SpreadsheetApp.getUi().alert('📊 [' + sheetName + '] 시트 생성이 완료되었습니다!');
}

/**
 * 🛠️ 랭킹 데이터를 기반으로 예쁜 상위 20명 시트 탭을 생성/갱신하는 핵심 함수
 */
function createTop20SheetFromRankingData(monthTitle, rankings) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const targetSheetName = monthTitle + "_상위20명_시상명단";
  
  let sheet = ss.getSheetByName(targetSheetName);
  if (!sheet) {
    sheet = ss.insertSheet(targetSheetName);
  } else {
    sheet.clear(); // 기존 내용 갱신
  }

  // 1. 타이틀 배너
  sheet.getRange("A1:I1").merge()
    .setValue("🏆 " + monthTitle + " 갓생 랭킹전 우수 학생 시상 명단 (상위 20명)")
    .setFontSize(14)
    .setFontWeight("bold")
    .setBackground("#FFE4E6")
    .setFontColor("#9F1239")
    .setHorizontalAlignment("center");

  // 2. 테이블 헤더
  const headers = ["순위", "학번", "이름", "학년/반", "전화번호 (연락처)", "최종 총점", "야자 인정교시", "캐릭터 칭호", "시상품 / 혜택"];
  sheet.getRange(2, 1, 1, headers.length)
    .setValues([headers])
    .setFontWeight("bold")
    .setBackground("#F3E8FF")
    .setFontColor("#581C87")
    .setHorizontalAlignment("center");

  // 3. 상위 20명 데이터 삽입
  const top20 = (rankings || []).slice(0, 20);
  const rows = [];

  for (let i = 0; i < top20.length; i++) {
    const r = top20[i];
    const rankLabel = r.rank === 1 ? "🥇 1위 (MVP)" :
                      r.rank === 2 ? "🥈 2위" :
                      r.rank === 3 ? "🥉 3위" : (r.rank + "위");
    const rawName = (r.name || '').replace(/\\s*\\([0-9]+\\)/g, '').trim();
    const phone = r.phone || '-';
    const reward = r.reward || (r.rank === 1 ? "마라탕 세트 & 1위 트로피" :
                               r.rank <= 3 ? "프리미엄 디저트 세트 교환권" :
                               r.rank <= 10 ? "편의점 모바일 상품권" : "열공 갓생 간식 기프티콘");

    rows.push([
      rankLabel,
      r.studentId,
      rawName,
      r.classInfo,
      phone,
      r.score + "점",
      (r.attCount || 0) + "교시",
      (r.tierEmoji || '') + " " + (r.tierTitle || ''),
      reward
    ]);
  }

  if (rows.length > 0) {
    sheet.getRange(3, 1, rows.length, headers.length)
      .setValues(rows)
      .setHorizontalAlignment("center");

    // 1위~3위 특별 하이라이트 색상
    if (rows.length >= 1) sheet.getRange("A3:I3").setBackground("#FEF3C7").setFontWeight("bold"); // 1위 골드
    if (rows.length >= 2) sheet.getRange("A4:I4").setBackground("#F5F3FF"); // 2위 퍼플
    if (rows.length >= 3) sheet.getRange("A5:I5").setBackground("#FFF1F2"); // 3위 로즈

    // 전화번호 열(E열) 텍스트 서식 지정
    sheet.getRange(3, 5, rows.length, 1).setNumberFormat("@");

    // 테두리 및 서식
    sheet.getRange(2, 1, rows.length + 1, headers.length)
      .setBorder(true, true, true, true, true, true, "#E2E8F0", SpreadsheetApp.BorderStyle.SOLID);
  }

  // 열 너비 자동 맞춤
  for (let c = 1; c <= headers.length; c++) {
    sheet.autoResizeColumn(c);
  }

  return targetSheetName;
}

/**
 * 🛠️ [실시간 진단 함수]
 */
function testDebug() {
  Logger.log("=== 🔍 생활기록 랭킹전 실시간 데이터 및 명예의 전당 진단 ===");
  const result = fetchIntegratedData();
  Logger.log("1. 총 등록 학생 수: " + result.students.length + "명");
  
  let phoneRegisteredCount = 0;
  result.students.forEach(s => {
    if (s.phone && s.phone.trim() !== '') phoneRegisteredCount++;
  });
  Logger.log("2. 전화번호 등록 학생 수: " + phoneRegisteredCount + "명");
  
  Logger.log("3. 명예의 전당에 등재된 지난 월 수: " + (result.hallOfFame ? result.hallOfFame.length : 0) + "개 월");
  (result.hallOfFame || []).forEach((hof, hIdx) => {
    Logger.log("   🏆 [" + hof.month + " 명예의 전당 1위 MVP] " + hof.championStudent + " (" + hof.championScore + "점)");
  });
  Logger.log("=== ✅ 진단 완료 ===");
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

function parseYearMonthFromDate(dateValue, defaultYear, defaultMonth) {
  if (!dateValue) return null;
  
  if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
    const y = dateValue.getFullYear();
    const m = ('0' + (dateValue.getMonth() + 1)).slice(-2);
    return y + '-' + m;
  }
  
  const str = String(dateValue).trim();
  if (str === '') return null;
  
  const ymdMatch = str.match(/(\\d{4})[^0-9]+(\\d{1,2})/);
  if (ymdMatch) {
    const y = ymdMatch[1];
    const m = ('0' + parseInt(ymdMatch[2])).slice(-2);
    return y + '-' + m;
  }
  
  const mdMatch = str.match(/^(\\d{1,2})[^0-9]+/);
  if (mdMatch) {
    const m = ('0' + parseInt(mdMatch[1])).slice(-2);
    return defaultYear + '-' + m;
  }
  
  return null;
}

function getTierInfoByRank(rank) {
  const tiers = [
    { title: '우주 대스타 마라탕후루 여왕', emoji: '👑✨', reward: '🎁 마라탕 세트 & 1위 트로피' },
    { title: '도도한 재벌집 막내딸', emoji: '💅😎', reward: '🎀 프리미엄 디저트 세트 교환권' },
    { title: '갓생 질주 전교회장', emoji: '📚🌟', reward: '📖 스터디 플래너 & 고급 문구 세트' },
    { title: '럭키비키 Y2K 하굣길', emoji: '🎧🎶', reward: '✨ 편의점 스낵 파티 기프티콘' },
    { title: '새벽 감성 만점 스터디러', emoji: '🌙📖', reward: '☕ 카페 음료 기프티콘' },
    { title: '체력 만렙 몬스터 열공러', emoji: '⚡🔥', reward: '⚡ 에너지 비타민 음료 기프티콘' },
    { title: '조용한 카리스마 올라운더', emoji: '🎯🤍', reward: '🍦 아이스크림 교환권' },
    { title: '파워 비타민 분위기 메이커', emoji: '🍊🌟', reward: '🍪 수제 쿠키 디저트 세트' },
    { title: '감성 충만 하이틴 주인공', emoji: '🎀🌷', reward: '🌷 힐링 문구 선물세트' },
    { title: '포텐 폭발 직전 다크호스', emoji: '🚀✨', reward: '🍔 햄버거 세트 교환권' }
  ];
  if (rank >= 1 && rank <= 10) return tiers[rank - 1];
  return { title: '갓생 도전자 ' + rank + '위', emoji: '✨', reward: '🎁 갓생 열공 응원 간식' };
}

function fetchIntegratedData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const now = new Date();
  const curYear = now.getFullYear();
  const curMonth = now.getMonth() + 1; // 1~12 (현재 월, 예: 10)
  const curYearMonth = curYear + '-' + ('0' + curMonth).slice(-2); // "2026-10"

  // 1. [학생명단] 탭 로드 (A:학번, B:이름, C:전화번호)
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
    // 📞 C열(또는 3번째 열)의 전화번호 읽기
    const phone = String(studentListData[i][2] || '').trim();
    
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
        phone: phone, // 전화번호 저장
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
  const specialMapByMonthAndStudent = {};
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

  // 3. [출석기록] 탭 파싱
  const allSheets = ss.getSheets();
  const yajaSheets = [];

  for (let s = 0; s < allSheets.length; s++) {
    const sheetName = allSheets[s].getName().trim();
    if (sheetName.indexOf("학생명단") !== -1 || sheetName.indexOf("학생 명부") !== -1 || sheetName.indexOf("특별가점") !== -1 || sheetName.indexOf("상위20명") !== -1) {
      continue;
    }
    if (
      sheetName.indexOf("출석") !== -1 || 
      sheetName.indexOf("야자") !== -1 || 
      sheetName.indexOf("기록") !== -1 || 
      sheetName.match(/\\d+월/) ||
      sheetName === "Sheet1" ||
      sheetName === "시트1"
    ) {
      yajaSheets.push(allSheets[s]);
    }
  }

  if (yajaSheets.length === 0 && allSheets.length > 1) {
    for (let s = 1; s < allSheets.length; s++) {
      if (allSheets[s].getName().indexOf("상위20명") === -1) {
        yajaSheets.push(allSheets[s]);
      }
    }
  }

  const monthlyAttendanceMap = {};
  const foundMonthsSet = {};

  yajaSheets.forEach(sheet => {
    const sheetName = sheet.getName();
    let sheetDefaultYm = null;
    const sheetMonthMatch = sheetName.match(/(\\d{1,2})월/);
    if (sheetMonthMatch) {
      sheetDefaultYm = curYear + '-' + ('0' + parseInt(sheetMonthMatch[1])).slice(-2);
    }

    const rawData = sheet.getDataRange().getValues();
    const displayData = sheet.getDataRange().getDisplayValues();

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
        if (p1.indexOf("출석") !== -1 || p1 === "O" || p1 === "o" || p1 === "1" || p1 === "참석") count++;
        if (p2.indexOf("출석") !== -1 || p2 === "O" || p2 === "o" || p2 === "1" || p2 === "참석") count++;

        if (count > 0) {
          const ym = parseYearMonthFromDate(dateCell, curYear, curMonth) || sheetDefaultYm || curYearMonth;
          foundMonthsSet[ym] = true;
          if (!monthlyAttendanceMap[ym]) monthlyAttendanceMap[ym] = {};
          monthlyAttendanceMap[ym][targetKey] = (monthlyAttendanceMap[ym][targetKey] || 0) + count;
        }
      }
    }
  });

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

  // 5. [지난 달(Past Months) 명예의 전당 Top 20 및 전교생] 자동 산출
  const pastHallOfFame = [];
  const pastMonths = Object.keys(foundMonthsSet)
    .filter(ym => ym < curYearMonth)
    .sort()
    .reverse();

  pastMonths.forEach(ym => {
    const ymParts = ym.split('-');
    const pYear = ymParts[0];
    const pMonth = parseInt(ymParts[1]);
    const monthLabel = pYear + "년 " + pMonth + "월";

    const yajaForMonth = monthlyAttendanceMap[ym] || {};
    const specialForMonth = specialMapByMonthAndStudent[ym] || {};

    const monthlyScores = baseStudents.map(s => {
      const sId = s.studentId;
      const attCount = yajaForMonth[sId] || 0;
      const yajaScore = attCount * YAJA_SCORE_PER_ATTEND;
      const spcScore = specialForMonth[sId] || 0;
      const totalScore = 100 + yajaScore + spcScore;

      return {
        studentId: sId,
        name: s.name,
        phone: s.phone || '', // 전화번호 보존
        grade: s.grade,
        classNum: s.classNum,
        studentNum: s.studentNum,
        motto: s.motto,
        totalScore: totalScore,
        yajaScore: yajaScore,
        attCount: attCount
      };
    });

    monthlyScores.sort((a, b) => b.totalScore - a.totalScore);

    const rankedMonthly = monthlyScores.map((s, rankIndex) => {
      const rank = rankIndex + 1;
      const tier = getTierInfoByRank(rank);
      return {
        rank: rank,
        name: s.name + " (" + s.studentId + ")",
        rawName: s.name,
        studentId: s.studentId,
        phone: s.phone, // 전화번호 포함
        classInfo: s.grade + "학년 " + s.classNum + "반",
        score: s.totalScore,
        attCount: s.attCount,
        tierTitle: tier.title,
        tierEmoji: tier.emoji,
        reward: tier.reward
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
        rankings: rankedMonthly
      });
    }
  });

  return {
    students: baseStudents,
    hallOfFame: pastHallOfFame
  };
}
`;
