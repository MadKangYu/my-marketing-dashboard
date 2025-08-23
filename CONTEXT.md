# Marketing Dashboard - Claude Code Context

## 📊 프로젝트 개요

**이름**: Marketing Dashboard  
**목적**: Threads, Instagram, TikTok 마케팅 데이터 통합 분석 플랫폼  
**저장소**: https://github.com/MadKangYu/my-marketing-dashboard  
**기술 스택**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui  

## 🗂️ 프로젝트 구조

```
my-marketing-dashboard/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API 라우트
│   │   │   ├── report/         # 리포트 생성 API
│   │   │   └── threads-content/ # 콘텐츠 생성 API
│   │   ├── page.tsx            # 메인 페이지
│   │   └── layout.tsx          # 레이아웃
│   ├── components/             # React 컴포넌트
│   │   ├── threads/            # Threads 전용
│   │   │   └── ContentCreatorUI.tsx
│   │   └── ui/                 # shadcn/ui 컴포넌트 (17개)
│   └── lib/                    # 유틸리티 & 비즈니스 로직
│       ├── report/             # 리포트 생성 시스템
│       │   └── generator.ts    # PDF/이메일/GitHub 연동
│       └── threads-content/    # 콘텐츠 생성 시스템
│           └── content-creator.ts
├── .claude/                    # Claude Code 설정
│   └── agents/                 # 서브에이전트 정의 (7개)
└── public/                     # 정적 파일
```

## 🚀 핵심 기능

### 1. Threads Analytics (리포트 생성)
- **PDF 생성**: jsPDF 활용
- **이메일 발송**: nodemailer 연동
- **GitHub 업로드**: Octokit API
- **MCP 저장소 연동**: 추후 구현 예정

### 2. Content Creator (콘텐츠 작성)
- **AI 아이디어 생성**: 주제별 5개 자동 생성
- **템플릿 시스템**: 5종 (신제품, 팁, 후기, 비하인드, 질문형)
- **콘텐츠 최적화**: 500자 제한, 해시태그, CTA 체크
- **최적 시간 추천**: 타겟별 포스팅 시간

### 3. 데이터 시각화
- **Chart.js**: 성장 추이, 참여율 차트
- **react-chartjs-2**: React 통합
- **실시간 대시보드**: 추후 구현 예정

## 💻 주요 파일 설명

### `/src/lib/report/generator.ts`
```typescript
// 리포트 생성 클래스
export class ReportGenerator {
  generateReport(): Promise<string>  // PDF 생성
  shareReport(): Promise<void>       // 이메일/GitHub 공유
  collectAnalytics(): Promise<ThreadsAnalytics>
}
```

### `/src/lib/threads-content/content-creator.ts`
```typescript
// 콘텐츠 생성 클래스
export class ThreadsContentCreator {
  generateContentIdeas(): Promise<ContentIdea[]>
  applyTemplate(): ThreadsContent
  optimizeContent(): { optimized: string; suggestions: string[] }
  getBestPostingTimes(): string[]
}
```

### `/src/app/api/threads-content/route.ts`
- POST: 콘텐츠 생성 액션 처리
- GET: 템플릿 목록 반환

## 🔧 환경 변수 (.env.local)

```env
# API Keys
THREADS_API_KEY=
INSTAGRAM_API_KEY=
TIKTOK_API_KEY=

# Email
EMAIL_USER=
EMAIL_PASS=

# GitHub
GITHUB_TOKEN=
GITHUB_REPO=

# Supabase (선택)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## 📦 주요 의존성

```json
{
  "next": "15.1.0",
  "react": "19.0.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "@radix-ui/react-*": "UI 컴포넌트",
  "chart.js": "^4.5.0",
  "react-chartjs-2": "^5.3.0",
  "jspdf": "PDF 생성",
  "nodemailer": "이메일",
  "@octokit/rest": "GitHub API",
  "axios": "HTTP 클라이언트",
  "dotenv": "환경변수"
}
```

## 🎯 CLI 명령어 예시

```bash
# 데이터 분석
analyze_growth --account k.madlab --platform threads --period 30d
get_top_posts --account k.madlab --limit 5
compare_accounts --target k.madlab --competitor competitor

# 리포트 생성
export_report --account k.madlab --type weekly --format pdf --share email@example.com

# AI 전략
ai_strategy --account k.madlab --goal "increase followers 10%"

# 콘텐츠 생성
generate_ideas --topic "AI 마케팅" --count 5
optimize_content --text "..." 
suggest_hashtags --topic "스타트업"
```

## 🤖 Claude Code 서브에이전트

1. **code-reviewer**: 코드 품질 검토
2. **debugger**: 에러 분석 및 수정
3. **test-runner**: 테스트 자동 실행
4. **performance-optimizer**: 성능 최적화
5. **security-auditor**: 보안 취약점 검사
6. **documentation-writer**: 문서 작성
7. **data-scientist**: 데이터 분석

## 📊 토큰 사용량 (Top 5)

1. content-creator.ts: 3,493 tokens (11.1%)
2. ContentCreatorUI.tsx: 2,621 tokens (8.3%)
3. generator.ts: 2,300 tokens (7.3%)
4. dropdown-menu.tsx: 1,755 tokens (5.6%)
5. README.md: 1,537 tokens (4.9%)

**총계**: 48 파일, 31,428 토큰, 119,906 문자

## 🔗 관련 문서

- **repomix-output.xml**: 전체 코드베이스 XML (123KB)
- **sample-threads-posts.md**: 샘플 Threads 포스트 3개
- **README.md**: 프로젝트 상세 문서

## 🚀 실행 방법

```bash
# 설치
npm install

# 개발 서버
npm run dev  # http://localhost:3001

# 빌드
npm run build

# 린트 & 타입 체크
npm run lint
npm run typecheck
```

## 📝 참고사항

- Threads API는 비공식/스크래핑 필요 (현재 mock 데이터)
- Vercel 배포 준비 완료
- Obsidian 통합 가이드 작성됨
- MCP 서버 연동 가능 (supabase, filesystem 등)

---

생성일: 2025-08-23  
작성자: Claude Code with MadKangYu  
용도: Claude Code가 프로젝트를 빠르게 이해하고 작업할 수 있도록 구조화된 컨텍스트 제공