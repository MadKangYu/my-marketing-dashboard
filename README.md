# 📊 Marketing Dashboard

Marketing Analytics Dashboard for Threads, Instagram, and TikTok - Built with Next.js and EasyNext

## 🚀 Overview

A comprehensive marketing analytics platform designed to track, analyze, and optimize social media performance across multiple platforms. Special focus on **Threads** analytics with AI-powered insights and automated reporting.

## ✨ Key Features

### 📈 Analytics & Metrics
- **Real-time Performance Tracking** - Monitor follower growth, engagement rates, and content performance
- **Multi-platform Support** - Threads, Instagram, TikTok in one dashboard
- **Competitor Analysis** - Benchmark against competitors
- **AI-Powered Insights** - Get strategic recommendations

### 📊 Data Visualization
- Interactive charts with Chart.js
- Customizable dashboards
- Export reports as PDF/Excel
- Real-time data updates

### 🤖 Automation
- Scheduled reports via email
- GitHub integration for report archiving
- MCP storage system integration
- Webhook notifications

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) + [EasyNext](https://github.com/easynextjs/easynext)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Chart.js + react-chartjs-2
- **State Management**: Zustand
- **API Client**: Axios
- **Form Handling**: React Hook Form + Zod
- **Database**: Supabase (optional)

## 📦 Installation

### Prerequisites
- Node.js 20+
- npm or yarn
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/MadKangYu/my-marketing-dashboard.git
cd my-marketing-dashboard

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# API Keys
THREADS_API_KEY=your_threads_api_key
INSTAGRAM_API_KEY=your_instagram_api_key
TIKTOK_API_KEY=your_tiktok_api_key

# Email Configuration (for reports)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# GitHub Integration
GITHUB_TOKEN=your_github_token
GITHUB_REPO=username/repo-name

# Optional: AI Services
OPENAI_API_KEY=your_openai_key
```

## 📱 CLI Commands

The dashboard includes a powerful CLI for data analysis:

### Growth Analysis
```bash
analyze_growth --account k.madlab --platform threads --period 30d
```

### Top Posts
```bash
get_top_posts --account k.madlab --platform threads --metric engagement --limit 5
```

### Competitor Comparison
```bash
compare_accounts --target k.madlab --competitor clickmate_seller --platform threads
```

### Export Reports
```bash
export_report --account k.madlab --platform threads --type weekly --format pdf --share email@example.com
```

### AI Strategy
```bash
ai_strategy --account k.madlab --platform threads --goal "increase followers 10%" --period 30d
```

## 📊 Dashboard Features

### 1. Real-time Metrics
- Follower count and growth rate
- Engagement metrics (likes, comments, shares)
- Reach and impressions
- Best performing content

### 2. Trend Analysis
- Content performance over time
- Optimal posting times
- Hashtag effectiveness
- Audience demographics

### 3. Report Generation
- Weekly/Monthly automated reports
- Custom date range analysis
- Multiple export formats (PDF, Excel, JSON)
- Email and cloud storage integration

### 4. AI Insights
- Content recommendations
- Posting schedule optimization
- Hashtag suggestions
- Growth strategy planning

## 🔌 API Endpoints

### Report Generation
```http
POST /api/report
Content-Type: application/json

{
  "command": "export_report --account k.madlab --platform threads --type weekly"
}
```

### Analytics Data
```http
GET /api/analytics?account=k.madlab&platform=threads&period=7d
```

### Competitor Analysis
```http
GET /api/compare?target=k.madlab&competitor=competitor_account
```

## 📂 Project Structure

```
my-marketing-dashboard/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API routes
│   │   ├── dashboard/       # Dashboard pages
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── charts/          # Chart components
│   │   ├── threads/         # Threads-specific
│   │   └── ui/              # shadcn/ui components
│   ├── lib/                 # Utilities
│   │   ├── threads-api/     # API wrappers
│   │   ├── report/          # Report generation
│   │   └── analytics/       # Data processing
│   └── hooks/               # Custom React hooks
├── public/                  # Static assets
├── .claude/                 # Claude Code settings
└── package.json            # Dependencies
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Docker
```bash
# Build image
docker build -t marketing-dashboard .

# Run container
docker run -p 3000:3000 marketing-dashboard
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [EasyNext](https://github.com/easynextjs/easynext)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Charts powered by [Chart.js](https://www.chartjs.org)
- Deployed on [Vercel](https://vercel.com)

## 📞 Support

For support, email richardowen7212@gmail.com or open an issue on GitHub.

## 🔗 Links

- [Live Demo](https://marketing-dashboard.vercel.app)
- [Documentation](https://docs.marketing-dashboard.com)
- [GitHub Repository](https://github.com/MadKangYu/my-marketing-dashboard)

---

Made with ❤️ by MadKangYu | Powered by Claude Code & EasyNext