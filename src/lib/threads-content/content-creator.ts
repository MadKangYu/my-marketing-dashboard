/**
 * Threads Content Creator
 * 쓰레드 콘텐츠 작성 도우미
 */

export interface ThreadsContent {
  text: string;
  hashtags: string[];
  mediaUrls?: string[];
  mentions?: string[];
  scheduledTime?: Date;
  contentType: 'text' | 'image' | 'video' | 'carousel';
  category: string;
  targetAudience: string;
}

export interface ContentTemplate {
  id: string;
  name: string;
  category: string;
  template: string;
  variables: string[];
  exampleOutput: string;
  bestTimeToPost: string[];
}

export interface ContentIdea {
  topic: string;
  hook: string;
  body: string;
  cta: string;
  hashtags: string[];
  estimatedEngagement: number;
}

export class ThreadsContentCreator {
  private templates: ContentTemplate[] = [
    {
      id: 'product-launch',
      name: '신제품 출시',
      category: 'marketing',
      template: '🚀 [제품명] 출시!\n\n[핵심 기능 3가지]\n✨ [기능1]\n✨ [기능2]\n✨ [기능3]\n\n[특별 혜택]\n\n지금 바로 확인하세요 👉 [링크]',
      variables: ['제품명', '기능1', '기능2', '기능3', '특별 혜택', '링크'],
      exampleOutput: '🚀 AI 마케팅 대시보드 출시!\n\n✨ 실시간 데이터 분석\n✨ 자동 리포트 생성\n✨ 경쟁사 벤치마킹\n\n🎁 첫 달 50% 할인\n\n지금 바로 확인하세요 👉 link.com',
      bestTimeToPost: ['09:00', '12:00', '19:00']
    },
    {
      id: 'tips-and-tricks',
      name: '팁 & 트릭',
      category: 'education',
      template: '💡 [주제] 꿀팁 [숫자]가지\n\n1️⃣ [팁1]\n2️⃣ [팁2]\n3️⃣ [팁3]\n\n북마크하고 나중에 활용하세요! 📌\n\n더 많은 팁은 프로필 링크에서 👆',
      variables: ['주제', '숫자', '팁1', '팁2', '팁3'],
      exampleOutput: '💡 마케팅 성과 높이는 꿀팁 3가지\n\n1️⃣ 데이터 기반 의사결정\n2️⃣ A/B 테스트 활용\n3️⃣ 고객 피드백 반영\n\n북마크하고 나중에 활용하세요! 📌',
      bestTimeToPost: ['10:00', '14:00', '20:00']
    },
    {
      id: 'user-testimonial',
      name: '고객 후기',
      category: 'social-proof',
      template: '🌟 고객님의 소중한 후기\n\n"[후기 내용]"\n\n- [고객명/직책]\n\n[제품/서비스]를 통해 [결과]를 달성하셨습니다! 🎯\n\n#고객후기 #[제품명]',
      variables: ['후기 내용', '고객명/직책', '제품/서비스', '결과', '제품명'],
      exampleOutput: '🌟 고객님의 소중한 후기\n\n"매출이 3개월 만에 200% 성장했어요!"\n\n- 김대표/스타트업 CEO\n\nAI 마케팅 도구를 통해 놀라운 성과를 달성하셨습니다! 🎯',
      bestTimeToPost: ['11:00', '15:00', '18:00']
    },
    {
      id: 'behind-the-scenes',
      name: '비하인드 스토리',
      category: 'engagement',
      template: '👀 [회사/팀]의 일상\n\n오늘은 [활동/프로젝트]를 진행했습니다!\n\n[상세 설명]\n\n[감정/느낌]\n\n#비하인드 #일상 #[해시태그]',
      variables: ['회사/팀', '활동/프로젝트', '상세 설명', '감정/느낌', '해시태그'],
      exampleOutput: '👀 개발팀의 일상\n\n오늘은 새로운 AI 기능을 테스트했습니다!\n\n3시간의 디버깅 끝에 드디어 성공 🎉\n\n팀원들과 함께여서 더 즐거웠어요!\n\n#개발일상 #팀워크',
      bestTimeToPost: ['13:00', '17:00', '21:00']
    },
    {
      id: 'question-engagement',
      name: '질문형 참여 유도',
      category: 'engagement',
      template: '🤔 [질문]?\n\nA. [선택지1]\nB. [선택지2]\nC. [선택지3]\n\n댓글로 알려주세요! 👇\n\n[추가 설명/이유]\n\n#투표 #소통',
      variables: ['질문', '선택지1', '선택지2', '선택지3', '추가 설명/이유'],
      exampleOutput: '🤔 가장 중요한 마케팅 지표는?\n\nA. 전환율\nB. 고객 획득 비용\nC. 고객 생애 가치\n\n댓글로 알려주세요! 👇\n\n여러분의 의견이 궁금해요!',
      bestTimeToPost: ['12:00', '16:00', '19:00']
    }
  ];

  /**
   * AI 기반 콘텐츠 아이디어 생성
   */
  async generateContentIdeas(
    topic: string,
    count: number = 5,
    targetAudience?: string
  ): Promise<ContentIdea[]> {
    const ideas: ContentIdea[] = [];
    
    // 트렌딩 토픽 기반 아이디어
    const trendingTopics = [
      'AI 활용법', '생산성 향상', '마케팅 전략', '고객 경험', '데이터 분석',
      '소셜 미디어 팁', '스타트업 성장', '리더십', '트렌드 분석', '케이스 스터디'
    ];

    // 훅 템플릿
    const hooks = [
      `${topic}의 숨겨진 비밀`,
      `아무도 알려주지 않는 ${topic} 팁`,
      `${topic}로 성공한 실제 사례`,
      `${topic}의 미래는?`,
      `${topic} 완벽 가이드`,
      `초보자를 위한 ${topic} 입문`,
      `전문가가 알려주는 ${topic}`,
      `${topic} 실패 경험담`,
      `${topic} 성공의 3가지 법칙`,
      `${topic} 트렌드 2025`
    ];

    // CTA 템플릿
    const ctas = [
      '더 많은 정보는 프로필 링크에서!',
      '팔로우하고 더 많은 팁 받아보세요',
      '저장하고 나중에 활용하세요',
      '친구에게 공유해주세요',
      '댓글로 여러분의 경험을 공유해주세요',
      'DM으로 문의 주세요',
      '무료 상담 신청하기',
      '뉴스레터 구독하기',
      '더 자세한 내용이 궁금하신가요?'
    ];

    for (let i = 0; i < count; i++) {
      const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
      const randomCta = ctas[Math.floor(Math.random() * ctas.length)];
      
      ideas.push({
        topic: topic,
        hook: randomHook,
        body: this.generateBody(topic),
        cta: randomCta,
        hashtags: this.generateHashtags(topic),
        estimatedEngagement: Math.floor(Math.random() * 1000) + 100
      });
    }

    return ideas;
  }

  /**
   * 콘텐츠 본문 생성
   */
  private generateBody(topic: string): string {
    const bodyTemplates = [
      `${topic}을(를) 시작하기 전 알아야 할 3가지:\n\n1. 기초 이해하기\n2. 실전 적용하기\n3. 결과 측정하기`,
      `${topic} 성공 사례:\n\n✅ 3개월 만에 200% 성장\n✅ 비용 50% 절감\n✅ 효율성 300% 향상`,
      `${topic} 체크리스트:\n\n□ 목표 설정\n□ 전략 수립\n□ 실행 계획\n□ 모니터링\n□ 최적화`,
      `${topic}의 핵심:\n\n💡 인사이트: 데이터 기반 접근\n🎯 목표: 명확한 KPI 설정\n🚀 실행: 빠른 테스트와 개선`,
      `${topic} 실패 원인 TOP 3:\n\n❌ 준비 부족\n❌ 잘못된 타이밍\n❌ 피드백 무시\n\n이것만 피해도 성공률 UP!`
    ];

    return bodyTemplates[Math.floor(Math.random() * bodyTemplates.length)];
  }

  /**
   * 해시태그 생성
   */
  generateHashtags(topic: string, count: number = 5): string[] {
    const baseHashtags = [
      '#쓰레드', '#Threads', '#마케팅', '#디지털마케팅', '#소셜미디어',
      '#콘텐츠마케팅', '#브랜딩', '#스타트업', '#비즈니스', '#성장',
      '#팁', '#인사이트', '#트렌드', '#전략', '#마케터', '#창업',
      '#AI', '#자동화', '#데이터분석', '#고객경험'
    ];

    // 토픽 관련 해시태그 추가
    const topicHashtags = [
      `#${topic.replace(/\s/g, '')}`,
      `#${topic.replace(/\s/g, '_')}`,
      `#${topic.split(' ')[0]}`
    ];

    const allHashtags = [...topicHashtags, ...baseHashtags];
    const selected = [];
    
    for (let i = 0; i < count && i < allHashtags.length; i++) {
      const randomIndex = Math.floor(Math.random() * allHashtags.length);
      if (!selected.includes(allHashtags[randomIndex])) {
        selected.push(allHashtags[randomIndex]);
      }
    }

    return selected;
  }

  /**
   * 콘텐츠 템플릿 적용
   */
  applyTemplate(
    templateId: string,
    variables: Record<string, string>
  ): ThreadsContent {
    const template = this.templates.find(t => t.id === templateId);
    if (!template) {
      throw new Error(`Template ${templateId} not found`);
    }

    let content = template.template;
    
    // 변수 치환
    for (const [key, value] of Object.entries(variables)) {
      content = content.replace(new RegExp(`\\[${key}\\]`, 'g'), value);
    }

    return {
      text: content,
      hashtags: this.generateHashtags(template.category),
      contentType: 'text',
      category: template.category,
      targetAudience: 'general'
    };
  }

  /**
   * 최적 업로드 시간 추천
   */
  getBestPostingTimes(
    targetAudience: string = 'general',
    timezone: string = 'Asia/Seoul'
  ): string[] {
    const audienceTimes: Record<string, string[]> = {
      'general': ['09:00', '12:00', '18:00', '20:00'],
      'business': ['08:00', '12:00', '17:00'],
      'young': ['14:00', '19:00', '21:00', '23:00'],
      'global': ['03:00', '10:00', '15:00', '22:00'] // KST 기준
    };

    return audienceTimes[targetAudience] || audienceTimes['general'];
  }

  /**
   * 이모지 추천
   */
  suggestEmojis(category: string): string[] {
    const emojiMap: Record<string, string[]> = {
      'marketing': ['📈', '🎯', '💡', '🚀', '📊', '💰', '🔥', '⭐'],
      'education': ['📚', '✏️', '🎓', '💡', '🧠', '📖', '✅', '📝'],
      'social-proof': ['🌟', '💬', '👥', '🏆', '✨', '💯', '👍', '🎉'],
      'engagement': ['🤔', '💭', '👇', '💬', '❓', '🗣️', '🙋', '📢'],
      'product': ['🎁', '🛍️', '✨', '🆕', '🔔', '🎊', '🎈', '🎀'],
      'tech': ['💻', '🤖', '⚡', '🔧', '🛠️', '📱', '🖥️', '⌨️']
    };

    return emojiMap[category] || emojiMap['marketing'];
  }

  /**
   * 콘텐츠 최적화 제안
   */
  optimizeContent(content: string): {
    optimized: string;
    suggestions: string[];
  } {
    const suggestions: string[] = [];
    let optimized = content;

    // 길이 체크 (500자 제한)
    if (content.length > 500) {
      suggestions.push('콘텐츠가 너무 깁니다. 500자 이내로 줄이세요.');
      optimized = content.substring(0, 497) + '...';
    }

    // 이모지 추가 제안
    if (!content.match(/[\u{1F300}-\u{1F9FF}]/gu)) {
      suggestions.push('이모지를 추가하면 참여율이 높아집니다.');
    }

    // 해시태그 체크
    const hashtagCount = (content.match(/#/g) || []).length;
    if (hashtagCount === 0) {
      suggestions.push('해시태그를 추가하세요 (3-5개 권장)');
    } else if (hashtagCount > 10) {
      suggestions.push('해시태그가 너무 많습니다 (3-5개 권장)');
    }

    // CTA 체크
    const ctaKeywords = ['클릭', '확인', '신청', '구매', '다운로드', '팔로우', '댓글'];
    const hasCTA = ctaKeywords.some(keyword => content.includes(keyword));
    if (!hasCTA) {
      suggestions.push('행동 유도 문구(CTA)를 추가하세요');
    }

    // 라인 브레이크 추가
    if (!content.includes('\n')) {
      suggestions.push('가독성을 위해 줄바꿈을 추가하세요');
    }

    return { optimized, suggestions };
  }

  /**
   * 템플릿 목록 가져오기
   */
  getTemplates(): ContentTemplate[] {
    return this.templates;
  }

  /**
   * 새 템플릿 추가
   */
  addTemplate(template: ContentTemplate): void {
    this.templates.push(template);
  }
}

// 사용 예시를 위한 CLI 명령어 매핑
export const contentCommands = {
  'generate_ideas': async (topic: string, count: number = 5) => {
    const creator = new ThreadsContentCreator();
    return await creator.generateContentIdeas(topic, count);
  },
  
  'apply_template': (templateId: string, variables: Record<string, string>) => {
    const creator = new ThreadsContentCreator();
    return creator.applyTemplate(templateId, variables);
  },
  
  'optimize': (content: string) => {
    const creator = new ThreadsContentCreator();
    return creator.optimizeContent(content);
  },
  
  'best_times': (audience: string = 'general') => {
    const creator = new ThreadsContentCreator();
    return creator.getBestPostingTimes(audience);
  },
  
  'suggest_hashtags': (topic: string) => {
    const creator = new ThreadsContentCreator();
    return creator.generateHashtags(topic);
  }
};