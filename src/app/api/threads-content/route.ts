/**
 * Threads Content API Route
 * 쓰레드 콘텐츠 생성 API
 */

import { NextRequest, NextResponse } from 'next/server';
import { ThreadsContentCreator } from '@/lib/threads-content/content-creator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, ...params } = body;
    
    const creator = new ThreadsContentCreator();
    let result;

    switch (action) {
      case 'generate_ideas':
        result = await creator.generateContentIdeas(
          params.topic,
          params.count || 5,
          params.targetAudience
        );
        break;

      case 'apply_template':
        result = creator.applyTemplate(
          params.templateId,
          params.variables
        );
        break;

      case 'optimize':
        result = creator.optimizeContent(params.content);
        break;

      case 'best_times':
        result = creator.getBestPostingTimes(
          params.audience,
          params.timezone
        );
        break;

      case 'suggest_hashtags':
        result = creator.generateHashtags(
          params.topic,
          params.count || 5
        );
        break;

      case 'get_templates':
        result = creator.getTemplates();
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Content generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}

export async function GET() {
  const creator = new ThreadsContentCreator();
  const templates = creator.getTemplates();
  
  return NextResponse.json({
    templates,
    actions: [
      'generate_ideas',
      'apply_template',
      'optimize',
      'best_times',
      'suggest_hashtags',
      'get_templates'
    ],
    info: {
      description: 'Threads Content Creation API',
      version: '1.0.0'
    }
  });
}