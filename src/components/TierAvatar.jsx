import React from 'react';

/**
 * 10단계 캐릭터 전용 고품질 일러스트 아바타 컴포넌트
 */
export default function TierAvatar({ tier, size = 'md', className = '' }) {
  const sizeMap = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
    '2xl': 'w-36 h-36',
  };

  const sizeClass = sizeMap[size] || sizeMap.md;

  const renderAvatarContent = () => {
    switch (tier) {
      // 1. 우주 대스타 마라탕후루 여왕
      case 1:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="queen-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDA4AF" />
                <stop offset="50%" stopColor="#FB7185" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
              <linearGradient id="crown-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#queen-bg)" />
            {/* 반짝이 별 */}
            <path d="M20 25 L22 18 L24 25 L31 27 L24 29 L22 36 L20 29 L13 27 Z" fill="#FFF" opacity="0.9" />
            <path d="M78 22 L80 17 L82 22 L87 24 L82 26 L80 31 L78 26 L73 24 Z" fill="#FFF" opacity="0.9" />
            {/* 얼굴 */}
            <circle cx="50" cy="55" r="24" fill="#FED7AA" />
            {/* 양갈래 핑크 웨이브 헤어 */}
            <path d="M26 48 C20 60, 22 75, 30 82 C28 70, 32 60, 34 52 Z" fill="#FB7185" />
            <path d="M74 48 C80 60, 78 75, 70 82 C72 70, 68 60, 66 52 Z" fill="#FB7185" />
            <path d="M28 50 C32 34, 68 34, 72 50 C68 40, 32 40, 28 50 Z" fill="#FB7185" />
            {/* 왕관 */}
            <path d="M34 32 L40 18 L50 26 L60 18 L66 32 Z" fill="url(#crown-gold)" stroke="#CA8A04" strokeWidth="1.5" />
            <circle cx="50" cy="24" r="3" fill="#F43F5E" />
            <circle cx="40" cy="18" r="2" fill="#38BDF8" />
            <circle cx="60" cy="18" r="2" fill="#38BDF8" />
            {/* 눈 & 볼터치 & 미소 */}
            <circle cx="42" cy="54" r="3" fill="#1E293B" />
            <circle cx="58" cy="54" r="3" fill="#1E293B" />
            <circle cx="43" cy="53" r="1" fill="#FFF" />
            <circle cx="59" cy="53" r="1" fill="#FFF" />
            <ellipse cx="37" cy="60" rx="4" ry="2" fill="#F43F5E" opacity="0.5" />
            <ellipse cx="63" cy="60" rx="4" ry="2" fill="#F43F5E" opacity="0.5" />
            <path d="M45 62 Q50 67 55 62" stroke="#E11D48" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* 탕후루 꼬치 아이콘 */}
            <g transform="translate(68, 46) rotate(15) scale(0.65)">
              <line x1="10" y1="5" x2="10" y2="45" stroke="#D97706" strokeWidth="2.5" />
              <circle cx="10" cy="12" r="7" fill="#EF4444" />
              <circle cx="10" cy="24" r="6.5" fill="#F97316" />
              <circle cx="10" cy="35" r="6" fill="#EAB308" />
              <ellipse cx="8" cy="10" rx="2" ry="4" fill="#FFF" opacity="0.6" />
            </g>
          </svg>
        );

      // 2. 여유로운 재벌집 막내딸
      case 2:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="chaebol-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#chaebol-bg)" />
            {/* 다이아몬드 반짝임 */}
            <polygon points="20,25 25,20 30,25 25,30" fill="#E9D5FF" />
            <polygon points="75,30 80,25 85,30 80,35" fill="#E9D5FF" />
            {/* 얼굴 */}
            <circle cx="50" cy="56" r="23" fill="#FED7AA" />
            {/* 우아한 퍼플 롱헤어 */}
            <path d="M26 50 C24 70, 28 85, 34 90 C30 75, 32 60, 35 50 Z" fill="#6B21A8" />
            <path d="M74 50 C76 70, 72 85, 66 90 C70 75, 68 60, 65 50 Z" fill="#6B21A8" />
            <path d="M28 48 C34 32, 66 32, 72 48 C68 36, 32 36, 28 48 Z" fill="#6B21A8" />
            {/* 명품 캣아이 선글라스 */}
            <path d="M33 50 L46 50 L43 57 L35 57 Z" fill="#1E1B4B" />
            <path d="M54 50 L67 50 L65 57 L57 57 Z" fill="#1E1B4B" />
            <line x1="46" y1="52" x2="54" y2="52" stroke="#F59E0B" strokeWidth="2" />
            <line x1="33" y1="50" x2="46" y2="50" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="54" y1="50" x2="67" y2="50" stroke="#F59E0B" strokeWidth="1.5" />
            {/* 여유로운 미소 */}
            <path d="M47 67 Q53 69 57 65" stroke="#9333EA" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* 진주 목걸이 */}
            <circle cx="42" cy="78" r="2.5" fill="#FFF" />
            <circle cx="47" cy="80" r="3" fill="#FFF" />
            <circle cx="53" cy="80" r="3" fill="#FFF" />
            <circle cx="58" cy="78" r="2.5" fill="#FFF" />
          </svg>
        );

      // 3. 갓생러 전교회장
      case 3:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="prez-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#4338CA" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#prez-bg)" />
            {/* 학사모/스마트 베레모 */}
            <path d="M28 36 Q50 20 72 36 L70 42 Q50 30 30 42 Z" fill="#312E81" />
            <circle cx="50" cy="24" r="3" fill="#FBBF24" />
            {/* 얼굴 */}
            <circle cx="50" cy="56" r="23" fill="#FED7AA" />
            {/* 단정한 단발머리 */}
            <path d="M29 46 C27 62, 30 72, 34 76 C31 66, 31 54, 34 46 Z" fill="#1E293B" />
            <path d="M71 46 C73 62, 70 72, 66 76 C69 66, 69 54, 66 46 Z" fill="#1E293B" />
            {/* 둥근 스마트 안경 */}
            <circle cx="41" cy="54" r="7" stroke="#CA8A04" strokeWidth="2" fill="rgba(255,255,255,0.3)" />
            <circle cx="59" cy="54" r="7" stroke="#CA8A04" strokeWidth="2" fill="rgba(255,255,255,0.3)" />
            <line x1="48" y1="54" x2="52" y2="54" stroke="#CA8A04" strokeWidth="2" />
            {/* 초롱초롱 눈 */}
            <circle cx="41" cy="54" r="3" fill="#1E293B" />
            <circle cx="59" cy="54" r="3" fill="#1E293B" />
            <circle cx="42" cy="53" r="1" fill="#FFF" />
            <circle cx="60" cy="53" r="1" fill="#FFF" />
            {/* 단정한 미소 */}
            <path d="M46 67 Q50 71 54 67" stroke="#4338CA" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* 1등 플래너 & 연필 아이콘 */}
            <g transform="translate(66, 60) scale(0.6)">
              <rect x="0" y="0" width="22" height="28" rx="3" fill="#F8FAFC" stroke="#6366F1" strokeWidth="2" />
              <line x1="4" y1="8" x2="18" y2="8" stroke="#818CF8" strokeWidth="2" />
              <line x1="4" y1="14" x2="18" y2="14" stroke="#818CF8" strokeWidth="2" />
              <line x1="4" y1="20" x2="12" y2="20" stroke="#818CF8" strokeWidth="2" />
            </g>
          </svg>
        );

      // 4. 럭키비키 하교길
      case 4:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="lucky-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#lucky-bg)" />
            {/* 얼굴 */}
            <circle cx="50" cy="56" r="23" fill="#FED7AA" />
            {/* 브라운 하이 포니테일 */}
            <path d="M68 34 C82 24, 88 42, 80 58 C74 48, 72 40, 68 34 Z" fill="#78350F" />
            <path d="M30 46 C34 32, 66 32, 70 46 Z" fill="#78350F" />
            {/* Y2K 헤드폰 */}
            <path d="M24 50 C24 30, 76 30, 76 50" stroke="#EC4899" strokeWidth="4" fill="none" strokeLinecap="round" />
            <rect x="20" y="46" width="8" height="16" rx="4" fill="#F472B6" />
            <rect x="72" y="46" width="8" height="16" rx="4" fill="#F472B6" />
            {/* 윙크 표정 */}
            <path d="M37 54 Q42 49 47 54" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="59" cy="53" r="3" fill="#1E293B" />
            <circle cx="60" cy="52" r="1" fill="#FFF" />
            {/* 볼에 네잎클로버 */}
            <g transform="translate(33, 58) scale(0.5)">
              <circle cx="6" cy="3" r="3" fill="#10B981" />
              <circle cx="10" cy="6" r="3" fill="#10B981" />
              <circle cx="6" cy="10" r="3" fill="#10B981" />
              <circle cx="3" cy="6" r="3" fill="#10B981" />
            </g>
            <path d="M46 66 Q51 72 56 66" stroke="#059669" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        );

      // 5. 아슬아슬 벼락치기 성공러
      case 5:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="cram-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#cram-bg)" />
            {/* 번개 이펙트 */}
            <polygon points="76,15 84,28 78,29 82,42 68,26 75,25" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
            {/* 얼굴 */}
            <circle cx="50" cy="56" r="23" fill="#FED7AA" />
            {/* 삐죽삐죽 묶은 헤어 */}
            <path d="M28 48 C32 30, 68 30, 72 48 Z" fill="#92400E" />
            {/* 땀방울 삐질 */}
            <path d="M72 48 Q77 56 72 60 Q67 56 72 48 Z" fill="#38BDF8" />
            {/* 활짝 웃는 눈 & V손 */}
            <path d="M37 54 Q42 48 47 54" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M53 54 Q58 48 63 54" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M44 65 Q50 74 56 65 Z" fill="#DC2626" />
            {/* ✌️ 브이 손가락 */}
            <g transform="translate(14, 52) scale(0.65)">
              <circle cx="15" cy="15" r="10" fill="#FED7AA" />
              <rect x="8" y="2" width="5" height="14" rx="2.5" fill="#FED7AA" stroke="#D97706" strokeWidth="1" />
              <rect x="15" y="0" width="5" height="16" rx="2.5" fill="#FED7AA" stroke="#D97706" strokeWidth="1" />
            </g>
          </svg>
        );

      // 6. 카페인 수혈 중인 K-고딩
      case 6:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="caffeine-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A8A29E" />
                <stop offset="100%" stopColor="#57534E" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#caffeine-bg)" />
            {/* 얼굴 */}
            <circle cx="50" cy="54" r="23" fill="#E2E8F0" />
            {/* 헝클어진 머리 */}
            <path d="M26 48 C30 28, 70 28, 74 48 C68 34, 32 34, 26 48 Z" fill="#334155" />
            {/* 지친 다크서클 */}
            <ellipse cx="40" cy="55" rx="7" ry="4" fill="#94A3B8" opacity="0.6" />
            <ellipse cx="60" cy="55" rx="7" ry="4" fill="#94A3B8" opacity="0.6" />
            {/* 멍한 소용돌이 눈 */}
            <circle cx="40" cy="53" r="3" fill="#0F172A" />
            <circle cx="60" cy="53" r="3" fill="#0F172A" />
            {/* 쳐진 입 */}
            <path d="M45 66 Q50 63 55 66" stroke="#475569" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* 커피/에너지 드링크 컵 */}
            <g transform="translate(64, 52) scale(0.65)">
              <polygon points="5,8 25,8 21,35 9,35" fill="#15803D" />
              <rect x="3" y="4" width="24" height="5" rx="2" fill="#F8FAFC" />
              <line x1="15" y1="4" x2="20" y2="-6" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
              <circle cx="15" cy="20" r="5" fill="#DC2626" />
            </g>
          </svg>
        );

      // 7. 체육복 입고 떡실신
      case 7:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="gym-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#gym-bg)" />
            {/* zZZ 말풍선 */}
            <text x="70" y="28" fill="#DBEAFE" fontSize="14" fontWeight="bold" fontFamily="monospace">z</text>
            <text x="78" y="20" fill="#DBEAFE" fontSize="18" fontWeight="bold" fontFamily="monospace">Z</text>
            {/* 얼굴 (기울어진 잠자기) */}
            <circle cx="50" cy="58" r="23" fill="#FED7AA" />
            {/* 체육복 삼선 져지 깃 */}
            <path d="M30 78 L50 70 L70 78 L70 95 L30 95 Z" fill="#1E40AF" />
            <line x1="38" y1="78" x2="38" y2="95" stroke="#FFF" strokeWidth="1.5" />
            <line x1="42" y1="78" x2="42" y2="95" stroke="#FFF" strokeWidth="1.5" />
            <line x1="46" y1="78" x2="46" y2="95" stroke="#FFF" strokeWidth="1.5" />
            {/* 귀여운 토끼 수면안대 */}
            <rect x="30" y="44" width="40" height="15" rx="7" fill="#F472B6" />
            <circle cx="40" cy="51" r="2" fill="#1E293B" />
            <circle cx="60" cy="51" r="2" fill="#1E293B" />
            {/* 침 흘리는 입 */}
            <ellipse cx="50" cy="67" rx="3" ry="4" fill="#1E293B" />
            <path d="M52 68 Q56 75 54 80 Q52 82 50 78 Z" fill="#67E8F9" />
          </svg>
        );

      // 8. 비 맞는 하찮은 감자
      case 8:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="potato-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#potato-bg)" />
            {/* 먹구름 & 빗방울 */}
            <path d="M25 22 Q32 14 42 18 Q50 12 60 18 Q68 14 74 22 Z" fill="#CBD5E1" />
            <line x1="30" y1="26" x2="26" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="26" x2="46" y2="36" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            <line x1="70" y1="26" x2="66" y2="34" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            {/* 감자 몸체 */}
            <ellipse cx="50" cy="62" rx="25" ry="22" fill="#D97706" />
            {/* 감자 머리 위 돋아난 작은 새싹 */}
            <path d="M50 40 Q46 32 40 36 Q46 36 50 40 Z" fill="#22C55E" />
            <path d="M50 40 Q54 32 60 36 Q54 36 50 40 Z" fill="#4ADE80" />
            {/* 감자의 하찮고 귀여운 눈코입 */}
            <circle cx="42" cy="58" r="2.5" fill="#451A03" />
            <circle cx="58" cy="58" r="2.5" fill="#451A03" />
            <circle cx="43" cy="57" r="0.8" fill="#FFF" />
            <circle cx="59" cy="57" r="0.8" fill="#FFF" />
            <ellipse cx="36" cy="63" rx="3" ry="1.5" fill="#FB7185" opacity="0.6" />
            <ellipse cx="64" cy="63" rx="3" ry="1.5" fill="#FB7185" opacity="0.6" />
            <path d="M47 65 Q50 67 53 65" stroke="#451A03" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* 감자 반점 */}
            <circle cx="34" cy="55" r="1.5" fill="#B45309" />
            <circle cx="63" cy="70" r="2" fill="#B45309" />
          </svg>
        );

      // 9. 멘탈 바사삭 먼지 뭉치
      case 9:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="dust-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#dust-bg)" />
            {/* 바람에 흩날리는 파티클 */}
            <circle cx="20" cy="35" r="3" fill="#E2E8F0" opacity="0.8" />
            <circle cx="78" cy="30" r="4" fill="#E2E8F0" opacity="0.7" />
            <circle cx="82" cy="60" r="2.5" fill="#E2E8F0" opacity="0.6" />
            {/* 몽글몽글 먼지 뭉치 몸체 */}
            <g fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2">
              <circle cx="50" cy="52" r="22" />
              <circle cx="34" cy="52" r="14" />
              <circle cx="66" cy="52" r="14" />
              <circle cx="40" cy="40" r="14" />
              <circle cx="60" cy="40" r="14" />
              <circle cx="42" cy="66" r="12" />
              <circle cx="58" cy="66" r="12" />
            </g>
            {/* 쿠쿠다스 반창고 */}
            <rect x="52" y="36" width="16" height="7" rx="2" fill="#FED7AA" stroke="#F97316" strokeWidth="0.8" transform="rotate(-20 52 36)" />
            {/* 바사삭 떨고 있는 눈과 입 */}
            <circle cx="43" cy="52" r="3" fill="#334155" />
            <circle cx="57" cy="52" r="3" fill="#334155" />
            <path d="M46 60 Q48 57 50 60 Q52 57 54 60" stroke="#334155" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </svg>
        );

      // 10. 형태를 잃은 슬라임 (최하위권)
      case 10:
      default:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="slime-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#0F766E" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="url(#slime-bg)" />
            {/* 방울방울 거품 */}
            <circle cx="28" cy="30" r="4" fill="#CCFBF1" opacity="0.8" />
            <circle cx="72" cy="32" r="6" fill="#CCFBF1" opacity="0.6" />
            <circle cx="65" cy="20" r="3" fill="#CCFBF1" opacity="0.9" />
            {/* 바닥에 녹아내린 젤리 슬라임 형태 */}
            <path
              d="M20 78 C20 55, 32 44, 50 44 C68 44, 80 55, 80 78 C80 88, 70 86, 60 84 C48 82, 35 88, 20 78 Z"
              fill="#5EEAD4"
            />
            {/* 흘러내리는 젤리 광택 */}
            <ellipse cx="44" cy="50" rx="6" ry="2.5" fill="#FFF" opacity="0.6" />
            {/* 멍하게 흘러내리는 슬라임 눈 */}
            <circle cx="42" cy="62" r="4" fill="#134E4A" />
            <circle cx="58" cy="62" r="4" fill="#134E4A" />
            <circle cx="43" cy="61" r="1.5" fill="#FFF" />
            <circle cx="59" cy="61" r="1.5" fill="#FFF" />
            <ellipse cx="50" cy="71" rx="4" ry="2" fill="#0F766E" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClass} ${className}`}>
      {renderAvatarContent()}
    </div>
  );
}
