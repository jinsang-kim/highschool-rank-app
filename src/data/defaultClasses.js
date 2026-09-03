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

/**
 * [초간단 단일 야자 시트 전용 Google Apps Script]
 */
export const GAS_SAMPLE_CODE = `/**
 * ==============================================================================
 * [여고 생활기록 랭킹전 - 야자 시트 단일 연동 Web App]
 * 
 * • '학생명단' 탭 (A열: 학번, B열: 이름)  -> 전교생 기초 명부 로드 (기본 100점)
 * • '출석기록' 탭 (B:학번, D:1교시, E:2교시) -> 야자 참석 1교시당 +5점 자동 가점
 * • '특별가점' 탭 (A:학번, B:특별가점, C:좌우명) -> 특별가점 합산 (선택 사항)
 * ==============================================================================
 */

const YAJA_SCORE_PER_ATTEND = 5;

function doGet(e) {
  try {
    const data = fetchIntegratedData();
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      updatedAt: new Date().toISOString(),
      students: data.students
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function fetchIntegratedData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
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

  // 2. [출석기록] 탭 집계 (B:학번, D:1교시, E:2교시)
  const yajaSheet = ss.getSheetByName("출석기록");
  if (yajaSheet) {
    const yajaData = yajaSheet.getDataRange().getDisplayValues();
    const studentYajaMap = {};
    
    for (let i = 1; i < yajaData.length; i++) {
      const rawId = String(yajaData[i][1] || '').replace(/[^0-9]/g, '').trim();
      const rawName = String(yajaData[i][2] || '').trim();
      const p1 = String(yajaData[i][3] || '');
      const p2 = String(yajaData[i][4] || '');
      
      let targetKey = rawId;
      if (!studentIdIndexMap[targetKey] && studentNameIndexMap[rawName] !== undefined) {
        targetKey = baseStudents[studentNameIndexMap[rawName]].studentId;
      }
      
      if (targetKey) {
        let count = 0;
        if (p1.indexOf("출석") !== -1) count++;
        if (p2.indexOf("출석") !== -1) count++;
        studentYajaMap[targetKey] = (studentYajaMap[targetKey] || 0) + count;
      }
    }
    
    Object.keys(studentYajaMap).forEach(sId => {
      const idx = studentIdIndexMap[sId];
      const attendCount = studentYajaMap[sId];
      if (idx !== undefined && attendCount > 0) {
        baseStudents[idx].history.push({
          id: 'yaja-att-' + sId,
          date: new Date().toISOString().split('T')[0],
          category: '야자',
          title: '야간자기주도학습 출석 (' + attendCount + '교시 참석 인정)',
          points: attendCount * YAJA_SCORE_PER_ATTEND,
          type: 'plus'
        });
      }
    });
  }

  // 3. [특별가점] 탭 집계 (선택 사항)
  const specialSheet = ss.getSheetByName("특별가점");
  if (specialSheet) {
    const specialData = specialSheet.getDataRange().getDisplayValues();
    for (let i = 1; i < specialData.length; i++) {
      const rawId = String(specialData[i][0] || '').replace(/[^0-9]/g, '').trim();
      const bonusStr = String(specialData[i][1] || '').replace(/[^0-9.-]/g, '');
      const bonus = parseFloat(bonusStr) || 0;
      const motto = String(specialData[i][2] || '').trim();
      
      const idx = studentIdIndexMap[rawId];
      if (idx !== undefined) {
        if (motto) baseStudents[idx].motto = motto;
        if (bonus !== 0) {
          baseStudents[idx].history.push({
            id: 'spc-' + rawId + '-' + i,
            date: new Date().toISOString().split('T')[0],
            category: '특별가점',
            title: '수업 최우수/환경미화 특별 가점',
            points: bonus,
            type: bonus >= 0 ? 'plus' : 'minus'
          });
        }
      }
    }
  }

  return { students: baseStudents };
}
`;
