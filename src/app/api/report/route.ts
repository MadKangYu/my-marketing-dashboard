/**
 * API Route: /api/report
 * Threads 리포트 생성 및 공유 API
 */

import { NextRequest, NextResponse } from 'next/server';
import { ReportGenerator, parseCommand } from '@/lib/report/generator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { command } = body;

    // 명령어 파싱
    const config = parseCommand(command);

    // 리포트 생성
    const generator = new ReportGenerator(config);
    const reportPath = await generator.generateReport();

    return NextResponse.json({
      success: true,
      message: 'Report generated successfully',
      path: reportPath,
      config,
    });
  } catch (error) {
    console.error('Report generation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // URL 파라미터로 리포트 설정 받기
  const config = {
    account: searchParams.get('account') || 'k.madlab',
    platform: searchParams.get('platform') || 'threads',
    type: searchParams.get('type') || 'weekly',
    format: searchParams.get('format') || 'pdf',
  };

  return NextResponse.json({
    message: 'Use POST method to generate report',
    example: {
      command: `export_report --account ${config.account} --platform ${config.platform} --type ${config.type} --format ${config.format}`,
    },
    availableOptions: {
      platforms: ['threads', 'instagram', 'tiktok'],
      types: ['daily', 'weekly', 'monthly'],
      formats: ['pdf', 'html', 'json'],
    },
  });
}