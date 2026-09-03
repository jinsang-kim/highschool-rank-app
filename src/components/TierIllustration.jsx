import React from 'react';

/**
 * 1위부터 전교생 모든 등위마다 100% 다른 고유 캐릭터 벡터 일러스트레이션 엔진
 */
export default function TierIllustration({ tier, rank, size = 'md', className = '' }) {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
    xl: 'w-52 h-52 sm:w-64 sm:h-64',
    full: 'w-full h-full',
  };

  const sizeClass = sizeMap[size] || sizeMap.md;
  const currentRank = rank || tier || 1;

  // 11위 이상을 위한 고유 절차적 일러스트 렌더러
  const renderProceduralRankIllustration = (r) => {
    // 결정론적 팔레트 & 속성 추출
    const bgPalettes = [
      { id: 'rose', bg1: '#FFF1F2', bg2: '#FECDD3', bg3: '#FB7185', hair: '#FB7185', glow: '#FDA4AF' },
      { id: 'purple', bg1: '#FAF5FF', bg2: '#F3E8FF', bg3: '#C084FC', hair: '#A855F7', glow: '#E9D5FF' },
      { id: 'indigo', bg1: '#EEF2FF', bg2: '#E0E7FF', bg3: '#818CF8', hair: '#6366F1', glow: '#C7D2FE' },
      { id: 'emerald', bg1: '#ECFDF5', bg2: '#D1FAE5', bg3: '#34D399', hair: '#10B981', glow: '#A7F3D0' },
      { id: 'amber', bg1: '#FFFBEB', bg2: '#FEF3C7', bg3: '#FBBF24', hair: '#F59E0B', glow: '#FDE68A' },
      { id: 'sky', bg1: '#F0F9FF', bg2: '#E0F2FE', bg3: '#38BDF8', hair: '#0284C7', glow: '#BAE6FD' },
      { id: 'fuchsia', bg1: '#FDF4FF', bg2: '#FAE8FF', bg3: '#E879F9', hair: '#C026D3', glow: '#F5D0FE' },
      { id: 'teal', bg1: '#F0FDFA', bg2: '#CCFBF1', bg3: '#2DD4BF', hair: '#0D9488', glow: '#99F6E4' },
    ];
    const palette = bgPalettes[r % bgPalettes.length];

    // 헤어 스타일 (0: 트윈테일, 1: 숏단발, 2: 포니테일, 3: 웨이브 롱, 4: 히메컷)
    const hairStyle = r % 5;
    // 눈 표정 (0: 초롱초롱, 1: 윙크, 2: 당당함, 3: 힐링 미소)
    const eyeStyle = r % 4;
    // 머리 장식 (0: 리본, 1: 베레모, 2: 고양이귀, 3: 벚꽃핀, 4: 별핀)
    const accStyle = (r * 3) % 5;
    // 소품 (0: 마카롱, 1: 버블티, 2: 책, 3: 스마트폰, 4: 도넛)
    const propStyle = (r * 7) % 5;

    return (
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          <linearGradient id={`grad-bg-${r}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.bg1} />
            <stop offset="60%" stopColor={palette.bg2} />
            <stop offset="100%" stopColor={palette.bg3} />
          </linearGradient>
          <linearGradient id={`grad-hair-${r}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.hair} />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* 배경 프레임 */}
        <rect x="10" y="10" width="180" height="180" rx="36" fill={`url(#grad-bg-${r})`} />
        <circle cx="100" cy="100" r="70" fill="#FFF" opacity="0.35" />

        {/* 등수 엠블럼 워터마크 */}
        <text x="175" y="42" textAnchor="end" fill={palette.hair} opacity="0.4" fontSize="20" fontWeight="900" fontFamily="sans-serif">
          #{r}
        </text>

        {/* 배경 파티클 데코 (음표, 반짝이 등) */}
        {r % 2 === 0 ? (
          <g fill="#FFF" opacity="0.8">
            <path d="M35 45 L37 36 L39 45 L48 47 L39 49 L37 58 L35 49 L26 47 Z" />
            <path d="M160 145 L162 138 L164 145 L171 147 L164 149 L162 156 L160 149 L153 147 Z" />
            <circle cx="45" cy="155" r="4" fill={palette.glow} />
          </g>
        ) : (
          <g fill={palette.hair} opacity="0.6">
            <circle cx="35" cy="45" r="5" />
            <circle cx="160" cy="150" r="6" />
            <path d="M150 40 Q155 35 160 40 T170 40" stroke={palette.hair} strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 백 헤어 (스타일에 따라 분기) */}
        {hairStyle === 0 && (
          // 트윈테일
          <g fill={`url(#grad-hair-${r})`}>
            <path d="M48 85 C25 110, 20 150, 42 170 C38 140, 48 115, 58 95 Z" />
            <path d="M152 85 C175 110, 180 150, 158 170 C162 140, 152 115, 142 95 Z" />
          </g>
        )}
        {hairStyle === 2 && (
          // 사이드 포니테일
          <g fill={`url(#grad-hair-${r})`}>
            <path d="M145 80 C180 95, 185 145, 160 170 C165 135, 155 110, 140 95 Z" />
          </g>
        )}
        {hairStyle === 3 && (
          // 롱 웨이브
          <g fill={`url(#grad-hair-${r})`}>
            <path d="M55 90 C45 130, 45 165, 70 185 C55 155, 60 120, 68 95 Z" />
            <path d="M145 90 C155 130, 155 165, 130 185 C145 155, 140 120, 132 95 Z" />
          </g>
        )}

        {/* 의상 바디 (교복 / 가디건) */}
        <path d="M70 140 L55 190 L145 190 L130 140 Z" fill="#334155" />
        <path d="M82 140 L100 168 L118 140 Z" fill="#FFF" />
        <polygon points="96,145 104,145 106,165 100,172 94,165" fill={palette.hair} />

        {/* 얼굴 & 목 */}
        <polygon points="90,130 110,130 105,145 95,145" fill="#FBCFE8" />
        <circle cx="100" cy="100" r="38" fill="#FED7AA" />

        {/* 눈 & 표정 */}
        {eyeStyle === 0 && (
          // 초롱초롱 눈
          <g fill="#1E293B">
            <circle cx="88" cy="100" r="4.5" />
            <circle cx="112" cy="100" r="4.5" />
            <circle cx="86" cy="98" r="1.5" fill="#FFF" />
            <circle cx="110" cy="98" r="1.5" fill="#FFF" />
          </g>
        )}
        {eyeStyle === 1 && (
          // 윙크
          <g>
            <path d="M82 100 Q88 94 94 100" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="112" cy="100" r="4.5" fill="#1E293B" />
            <circle cx="110" cy="98" r="1.5" fill="#FFF" />
          </g>
        )}
        {eyeStyle === 2 && (
          // 당당한 눈
          <g fill="#1E293B">
            <ellipse cx="88" cy="100" rx="4.5" ry="3.5" />
            <ellipse cx="112" cy="100" rx="4.5" ry="3.5" />
            <path d="M82 92 L94 94" stroke="#1E293B" strokeWidth="2" />
            <path d="M118 92 L106 94" stroke="#1E293B" strokeWidth="2" />
          </g>
        )}
        {eyeStyle === 3 && (
          // 힐링 스마일 눈
          <g stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none">
            <path d="M82 100 Q88 93 94 100" />
            <path d="M106 100 Q112 93 118 100" />
          </g>
        )}

        {/* 볼터치 & 입 */}
        <circle cx="80" cy="108" r="5" fill="#FB7185" opacity="0.4" />
        <circle cx="120" cy="108" r="5" fill="#FB7185" opacity="0.4" />
        <path d="M96 112 Q100 117 104 112" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* 앞머리 헤어 */}
        <path
          d="M62 92 C68 62, 132 62, 138 92 C125 76, 75 76, 62 92 Z"
          fill={`url(#grad-hair-${r})`}
        />

        {/* 머리 장식 악세서리 */}
        {accStyle === 0 && (
          // 핑크 리본
          <g fill="#F43F5E">
            <polygon points="65,72 52,65 55,80" />
            <polygon points="65,72 78,65 75,80" />
            <circle cx="65" cy="72" r="4" fill="#FFE4E6" />
          </g>
        )}
        {accStyle === 1 && (
          // 베레모
          <path d="M60 75 Q100 45 140 75 Q100 65 60 75 Z" fill="#475569" />
        )}
        {accStyle === 2 && (
          // 고양이귀 머리띠
          <g fill={palette.hair}>
            <polygon points="65,70 70,50 82,65" />
            <polygon points="135,70 130,50 118,65" />
            <polygon points="68,68 71,56 78,65" fill="#FBCFE8" />
            <polygon points="132,68 129,56 122,65" fill="#FBCFE8" />
          </g>
        )}
        {accStyle === 3 && (
          // 벚꽃 헤어핀
          <circle cx="130" cy="78" r="6" fill="#FDA4AF" />
        )}
        {accStyle === 4 && (
          // 골드 스타 핀
          <path d="M68 76 L70 70 L72 76 L78 78 L72 80 L70 86 L68 80 L62 78 Z" fill="#FACC15" />
        )}

        {/* 손에 든 시그니처 소품 */}
        {propStyle === 0 && (
          // 딸기 마카롱
          <g transform="translate(132, 135)">
            <ellipse cx="14" cy="10" rx="12" ry="6" fill="#F43F5E" />
            <ellipse cx="14" cy="13" rx="10" ry="3" fill="#FFF" />
            <ellipse cx="14" cy="16" rx="12" ry="6" fill="#F43F5E" />
          </g>
        )}
        {propStyle === 1 && (
          // 버블티 컵
          <g transform="translate(132, 130)">
            <rect x="5" y="5" width="16" height="24" rx="4" fill="#FFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <rect x="7" y="14" width="12" height="13" fill="#D97706" opacity="0.6" />
            <line x1="13" y1="0" x2="13" y2="25" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="9" cy="23" r="1.5" fill="#1E293B" />
            <circle cx="14" cy="24" r="1.5" fill="#1E293B" />
          </g>
        )}
        {propStyle === 2 && (
          // 스터디 북
          <g transform="translate(132, 138) rotate(-15)">
            <rect x="0" y="0" width="22" height="16" rx="2" fill={palette.hair} />
            <rect x="3" y="2" width="16" height="12" fill="#FFF" />
            <line x1="6" y1="6" x2="16" y2="6" stroke="#94A3B8" strokeWidth="1" />
            <line x1="6" y1="9" x2="14" y2="9" stroke="#94A3B8" strokeWidth="1" />
          </g>
        )}
        {propStyle === 3 && (
          // 스마트폰
          <g transform="translate(136, 135)">
            <rect x="0" y="0" width="16" height="24" rx="3" fill="#1E293B" />
            <rect x="2" y="2" width="12" height="18" fill="#38BDF8" />
            <circle cx="8" cy="22" r="1" fill="#FFF" />
          </g>
        )}
        {propStyle === 4 && (
          // 달콤한 도넛
          <g transform="translate(132, 135)">
            <circle cx="12" cy="12" r="10" fill="#D97706" />
            <circle cx="12" cy="12" r="4" fill="#FED7AA" />
            <path d="M6 10 C8 6, 16 6, 18 10 C16 14, 8 14, 6 10 Z" fill="#EC4899" opacity="0.8" />
          </g>
        )}
      </svg>
    );
  };

  const renderIllustration = () => {
    switch (currentRank) {
      // 1. 우주 대스타 마라탕후루 여왕
      case 1:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
            <defs>
              <linearGradient id="queen-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF1F2" />
                <stop offset="50%" stopColor="#FECDD3" />
                <stop offset="100%" stopColor="#FB7185" />
              </linearGradient>
              <linearGradient id="queen-hair-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB7185" />
                <stop offset="100%" stopColor="#E11D48" />
              </linearGradient>
              <linearGradient id="queen-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="180" rx="36" fill="url(#queen-bg-grad)" />
            <circle cx="100" cy="100" r="75" fill="#FFE4E6" opacity="0.6" />
            <polygon points="40,0 80,0 120,200 20,200" fill="#FFF" opacity="0.25" />
            <polygon points="120,0 160,0 180,200 80,200" fill="#FFF" opacity="0.2" />
            <g fill="#FFF">
              <path d="M35 40 L38 28 L41 40 L53 43 L41 46 L38 58 L35 46 L23 43 Z" />
              <path d="M165 35 L167 25 L169 35 L179 37 L169 39 L167 49 L165 39 L155 37 Z" />
            </g>
            <path d="M50 85 C30 110, 25 150, 48 175 C42 145, 52 120, 60 100 Z" fill="url(#queen-hair-grad)" />
            <path d="M150 85 C170 110, 175 150, 152 175 C158 145, 148 120, 140 100 Z" fill="url(#queen-hair-grad)" />
            <path d="M72 135 L60 185 L140 185 L128 135 Z" fill="#F43F5E" />
            <circle cx="100" cy="98" r="38" fill="#FED7AA" />
            <path d="M64 90 C70 65, 130 65, 136 90 C125 72, 75 72, 64 90 Z" fill="url(#queen-hair-grad)" />
            <circle cx="62" cy="85" r="7" fill="#E11D48" />
            <circle cx="138" cy="85" r="7" fill="#E11D48" />
            <g fill="#1E293B">
              <circle cx="88" cy="98" r="4" />
              <circle cx="112" cy="98" r="4" />
              <circle cx="86" cy="96" r="1.5" fill="#FFF" />
              <circle cx="110" cy="96" r="1.5" fill="#FFF" />
            </g>
            <circle cx="82" cy="106" r="6" fill="#FB7185" opacity="0.6" />
            <circle cx="118" cy="106" r="6" fill="#FB7185" opacity="0.6" />
            <path d="M96 110 Q100 116 104 110" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <g>
              <polygon points="85,62 100,42 115,62 122,50 126,65 74,65 78,50" fill="url(#queen-gold)" />
              <circle cx="100" cy="42" r="3.5" fill="#F43F5E" />
            </g>
            <g transform="translate(138, 105) rotate(15)">
              <line x1="10" y1="0" x2="10" y2="70" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
              <circle cx="10" cy="15" r="12" fill="#E11D48" />
              <circle cx="10" cy="35" r="11" fill="#F97316" />
              <circle cx="10" cy="52" r="10" fill="#E11D48" />
              <ellipse cx="6" cy="12" rx="3" ry="6" fill="#FFF" opacity="0.8" />
            </g>
          </svg>
        );

      // 2. 도도한 재벌집 막내딸
      case 2:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
            <defs>
              <linearGradient id="rich-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF5FF" />
                <stop offset="50%" stopColor="#F3E8FF" />
                <stop offset="100%" stopColor="#E9D5FF" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="180" rx="36" fill="url(#rich-bg)" />
            <circle cx="100" cy="100" r="75" fill="#F5D0FE" opacity="0.4" />
            <path d="M55 85 C45 130, 45 165, 68 185 L132 185 C155 165, 155 130, 145 85 Z" fill="#6B21A8" />
            <path d="M70 140 L55 190 L145 190 L130 140 Z" fill="#1E1B4B" />
            <circle cx="100" cy="100" r="38" fill="#FED7AA" />
            <path d="M60 92 C68 65, 132 65, 140 92 C125 76, 75 76, 60 92 Z" fill="#6B21A8" />
            <path d="M60 70 Q100 40 140 70 Q100 60 60 70 Z" fill="#A855F7" />
            <circle cx="100" cy="45" r="4" fill="#C084FC" />
            <g fill="#0F172A">
              <path d="M78 95 L95 95 L92 108 L80 108 Z" rx="2" />
              <path d="M105 95 L122 95 L120 108 L108 108 Z" rx="2" />
              <line x1="95" y1="98" x2="105" y2="98" stroke="#0F172A" strokeWidth="2.5" />
            </g>
            <path d="M96 116 Q100 120 104 116" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" fill="none" />
            <g transform="translate(138, 125)">
              <rect x="0" y="5" width="20" height="30" rx="4" fill="#FFF" stroke="#CBD5E1" strokeWidth="1.5" />
              <rect x="0" y="0" width="20" height="7" rx="3" fill="#475569" />
              <circle cx="10" cy="20" r="5" fill="#10B981" />
            </g>
          </svg>
        );

      // 3. 갓생 질주 전교회장
      case 3:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
            <defs>
              <linearGradient id="prez-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EEF2FF" />
                <stop offset="50%" stopColor="#E0E7FF" />
                <stop offset="100%" stopColor="#C7D2FE" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="180" rx="36" fill="url(#prez-bg)" />
            <path d="M55 85 C45 130, 45 165, 68 185 L132 185 C155 165, 155 130, 145 85 Z" fill="#312E81" />
            <path d="M70 140 L55 190 L145 190 L130 140 Z" fill="#1E293B" />
            <polygon points="95,145 105,145 108,175 100,182 92,175" fill="#EF4444" />
            <circle cx="100" cy="100" r="38" fill="#FED7AA" />
            <path d="M62 92 C68 62, 132 62, 138 92 C125 76, 75 76, 62 92 Z" fill="#312E81" />
            <g stroke="#3B82F6" strokeWidth="2.5" fill="none">
              <circle cx="86" cy="98" r="9" />
              <circle cx="114" cy="98" r="9" />
              <line x1="95" y1="98" x2="105" y2="98" />
            </g>
            <g fill="#1E293B">
              <circle cx="86" cy="98" r="3" />
              <circle cx="114" cy="98" r="3" />
            </g>
            <path d="M96 114 Q100 118 104 114" stroke="#475569" strokeWidth="2" strokeLinecap="round" fill="none" />
            <g transform="translate(132, 130) rotate(-10)">
              <rect x="0" y="0" width="28" height="38" rx="4" fill="#4F46E5" />
              <rect x="3" y="3" width="22" height="32" rx="2" fill="#FFF" />
              <line x1="6" y1="8" x2="22" y2="8" stroke="#4F46E5" strokeWidth="2" />
              <line x1="6" y1="14" x2="20" y2="14" stroke="#94A3B8" strokeWidth="1.5" />
            </g>
          </svg>
        );

      // 4. 럭키비키 Y2K 하굣길
      case 4:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
            <defs>
              <linearGradient id="lucky-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ECFDF5" />
                <stop offset="50%" stopColor="#D1FAE5" />
                <stop offset="100%" stopColor="#A7F3D0" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="180" rx="36" fill="url(#lucky-bg)" />
            <path d="M50 85 C30 110, 25 150, 48 175 C42 145, 52 120, 60 100 Z" fill="#047857" />
            <path d="M150 85 C170 110, 175 150, 152 175 C158 145, 148 120, 140 100 Z" fill="#047857" />
            <path d="M70 140 L55 190 L145 190 L130 140 Z" fill="#065F46" />
            <circle cx="100" cy="100" r="38" fill="#FED7AA" />
            <path d="M62 92 C68 62, 132 62, 138 92 C125 76, 75 76, 62 92 Z" fill="#047857" />
            <path d="M60 90 Q100 45 140 90" stroke="#334155" strokeWidth="7" fill="none" />
            <rect x="52" y="85" width="14" height="26" rx="6" fill="#10B981" />
            <rect x="134" y="85" width="14" height="26" rx="6" fill="#10B981" />
            <g fill="#1E293B">
              <circle cx="88" cy="98" r="4" />
              <circle cx="112" cy="98" r="4" />
              <circle cx="86" cy="96" r="1.5" fill="#FFF" />
              <circle cx="110" cy="96" r="1.5" fill="#FFF" />
            </g>
            <circle cx="82" cy="106" r="5" fill="#10B981" opacity="0.4" />
            <circle cx="118" cy="106" r="5" fill="#10B981" opacity="0.4" />
            <path d="M96 112 Q100 118 104 112" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <g transform="translate(60, 68)">
              <circle cx="5" cy="5" r="4" fill="#34D399" />
              <circle cx="11" cy="5" r="4" fill="#34D399" />
              <circle cx="5" cy="11" r="4" fill="#34D399" />
              <circle cx="11" cy="11" r="4" fill="#34D399" />
            </g>
          </svg>
        );

      // 5. 몬스터 에너지 열공러
      case 5:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl overflow-visible">
            <defs>
              <linearGradient id="monster-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="50%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FDE68A" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="180" rx="36" fill="url(#monster-bg)" />
            <path d="M55 85 C45 130, 45 165, 68 185 L132 185 C155 165, 155 130, 145 85 Z" fill="#B45309" />
            <path d="M70 140 L55 190 L145 190 L130 140 Z" fill="#78350F" />
            <circle cx="100" cy="100" r="38" fill="#FED7AA" />
            <path d="M62 92 C68 62, 132 62, 138 92 C125 76, 75 76, 62 92 Z" fill="#B45309" />
            <polygon points="65,70 70,55 82,75 75,75 80,85 68,75" fill="#FACC15" />
            <g fill="#1E293B">
              <polygon points="86,94 92,100 84,102" />
              <polygon points="114,94 108,100 116,102" />
            </g>
            <path d="M96 114 L104 114" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
            <g transform="translate(136, 125)">
              <rect x="0" y="0" width="18" height="34" rx="4" fill="#18181B" />
              <path d="M6 10 L8 24 M10 8 L12 26 M14 11 L16 22" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        );

      // 6~10위 및 11위 이상은 고유 절차적 일러스트 엔진으로 렌더링
      default:
        return renderProceduralRankIllustration(currentRank);
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClass} ${className}`}>
      {renderIllustration()}
    </div>
  );
}
