import confetti from 'canvas-confetti';

/**
 * 1위 축하 화려한 폭죽 효과
 */
export function fireRank1Confetti() {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#FF69B4', '#FFB6C1', '#FFD700', '#FF1493']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#A78BFA', '#F472B6', '#FBBF24', '#34D399']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

/**
 * 전체 화면 대형 축제 폭죽 (매월 1일 팝업용)
 */
export function fireMonthlyGrandCelebration() {
  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // 좌우 양쪽에서 폭죽 발사
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#FF69B4', '#FFD700', '#C084FC', '#38BDF8', '#FB7185']
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#F472B6', '#FBBF24', '#A855F7', '#4ADE80', '#F43F5E']
    });
  }, 250);
}

/**
 * 클릭 스파클 하트 & 별 이펙트
 */
export function fireSparkle(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 30,
    spread: 60,
    origin: { x, y },
    colors: ['#F472B6', '#C084FC', '#FBBF24'],
    shapes: ['circle', 'square'],
    scalar: 0.9,
  });
}
