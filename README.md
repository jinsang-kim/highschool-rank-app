# 👑 2026 여고 갓생 학생 실시간 랭킹전 웹 앱 (High School Live Ranking App)

> **고등학교 학생들의 건강한 학습 동기부여와 자기주도학습 활성화를 위한 학생 개인별 실시간 갓생 랭킹 & 명예의 전당 웹 애플리케이션입니다.**

![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?logo=tailwind-css)
![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-Live_Sync-34A853?logo=google)

---

## ✨ 핵심 기능 (Features)

### 1. 👩‍🎓 학생 개인별 3대 갓생 점수 산출 체계
- **총점 공식**: $\text{총점} = \text{기본점수 (100점)} + \text{야자점수 (+5점/교시)} + \text{특별가점}$
  - 🏫 **기본점수 (100점)**: 학생 등록 시 기본 부여
  - 🌙 **야자점수 (+5점/교시)**: 야간자기주도학습 1교시/2교시 성실 참석 자동 가산점
  - ✨ **특별가점 (칭찬 가점)**: 수업 태도 우수, 교실 청소/분리수거, 교내 봉사활동 등 맞춤 가산점

### 2. 🎨 1위부터 무한 등위까지 100% 고유한 캐릭터 & 칭호 일러스트
- 순위(`rank`)에 따라 헤어스타일, 눈 표정, 머리 장식(왕관/리본/별/베레모), 소품(마라탕/음료/별봉/책)이 자동으로 조합되는 **절차적 벡터 일러스트레이터(Procedural Vector Illustrator)** 탑재!
- 마라탕후루 여왕, 재벌집 막내딸, 전교회장, Y2K 하굣길, 몬스터 열공러 등 100% 다른 고유 칭호와 명언 카드 제공.

### 3. 📊 실시간 랭킹보드 & 명예의 전당 (Hall of Fame)
- **Top 3 포디움(시상대) 히어로 카드** 및 1위~전교생 순위표 실시간 표시
- **순위 변동(Rank Delta)**: 전월/직전 순위 대비 상승(▲) / 하강(▼) 표시
- **월간 랭킹 마감 & 명예의 전당 아카이빙**: 월말 초기화 시 우승자 및 순위를 명예의 전당에 영구 보존.

### 4. 🔒 학생용 / 교사용 주소 분리 및 보안
- **학생 화면 (`/`)**: 실시간 랭킹보드 및 명예의 전당만 조회 가능 (점수 수정 불가)
- **교사 관리자 화면 (`/teacher`)**: 점수 부여/차감(원클릭 프리셋), 학생 명부 관리, 구글 시트 연동 설정, 월간 마감 기능 제공 (PIN 보안 인증 지원).

### 5. ☁️ Google 스프레드시트 (Apps Script) 실시간 연동
- [야간자기주도학습 기록용] 구글 시트의 **'학생명단'** 탭과 **'출석기록'** 탭을 실시간으로 읽어와 웹 앱과 100% 자동 동기화.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Lucide React, Canvas-Confetti
- **Backend / Database**: Google Sheets & Google Apps Script (Serverless Web App API)
- **State Management**: React Custom Hook (`useRankData`) with LocalStorage fallback

---

## 🚀 빠른 시작 (Getting Started)

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
- 브라우저에서 `http://localhost:5173/` 접속 (학생 랭킹 화면)
- 교사 관리자 페이지: `http://localhost:5173/teacher` (초기 비밀번호: `1234`)

### 3. 프로덕션 빌드
```bash
npm run build
```

---

## 📄 라이선스 (License)

MIT License © 2026
