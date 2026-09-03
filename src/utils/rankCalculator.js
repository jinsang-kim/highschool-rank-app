import { getCharacterTierByRank } from '../data/characterTiers';

/**
 * 학생 개인의 총점 계산
 * @param {object} student 학생 데이터 객체
 * @returns {number} 총점
 */
export function calculateTotalScore(student) {
  const base = Number(student.baseScore || 100);
  const historySum = (student.history || []).reduce((sum, item) => sum + Number(item.points || 0), 0);
  return base + historySum;
}

/**
 * 모든 학생의 총점을 계산하고 순위 및 10단계 캐릭터 티어를 부여하여 정렬
 * @param {Array} students 학생 목록
 * @returns {Array} 순위와 일러스트 티어가 부여된 정렬된 학생 목록
 */
export function processStudentRankings(students) {
  if (!students || students.length === 0) return [];

  // 1. 총점 계산
  const studentsWithScore = students.map((item) => {
    const totalScore = calculateTotalScore(item);
    return {
      ...item,
      totalScore,
    };
  });

  // 2. 총점 내림차순 정렬 (동점 시 학번 순)
  studentsWithScore.sort((a, b) => {
    if (b.totalScore !== a.totalScore) {
      return b.totalScore - a.totalScore;
    }
    return String(a.studentId).localeCompare(String(b.studentId));
  });

  const totalStudents = studentsWithScore.length;

  // 3. 순위 및 캐릭터 티어 배정
  return studentsWithScore.map((item, index) => {
    const rank = index + 1;
    const tierInfo = getCharacterTierByRank(rank, totalStudents);
    
    // 순위 변동 계산 (이전 순위 대비)
    let rankChange = 0;
    if (item.previousRank) {
      rankChange = item.previousRank - rank; // 양수: 상승(+), 음수: 하락(-)
    }

    return {
      ...item,
      rank,
      percentile: ((rank / totalStudents) * 100).toFixed(1),
      tier: tierInfo,
      rankChange,
    };
  });
}

// 하위 호환성 별칭
export const processClassRankings = processStudentRankings;

/**
 * 학생의 3대 카테고리별 점수 합계 계산 (기본점수, 야자점수, 특별가점)
 * @param {object} student 학생 데이터 객체
 * @returns {object} 3개 분야별 합계 객체
 */
export function calculateCategoryBreakdown(student) {
  const baseScore = Number(student?.baseScore || 100);
  const history = student?.history || [];

  const breakdown = {
    '기본점수': baseScore,
    '야자점수': 0,
    '특별가점': 0,
  };

  history.forEach((h) => {
    const cat = h.category || '기타';
    const pts = Number(h.points || 0);

    if (cat === '야자' || cat === '야자점수') {
      breakdown['야자점수'] += pts;
    } else {
      breakdown['특별가점'] += pts;
    }
  });

  return breakdown;
}
