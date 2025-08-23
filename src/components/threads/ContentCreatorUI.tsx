'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Sparkles, 
  Hash, 
  Clock, 
  TrendingUp, 
  Copy,
  RefreshCw,
  Send,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';

export default function ContentCreatorUI() {
  const [topic, setTopic] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [contentText, setContentText] = useState('');
  const [optimizedContent, setOptimizedContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // 아이디어 생성
  const generateIdeas = async () => {
    if (!topic) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/threads-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate_ideas',
          topic,
          count: 5
        })
      });
      
      const data = await response.json();
      if (data.success) {
        setGeneratedIdeas(data.data);
      }
    } catch (error) {
      console.error('Failed to generate ideas:', error);
    }
    setLoading(false);
  };

  // 콘텐츠 최적화
  const optimizeContent = async () => {
    if (!contentText) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/threads-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'optimize',
          content: contentText
        })
      });
      
      const data = await response.json();
      if (data.success) {
        setOptimizedContent(data.data);
      }
    } catch (error) {
      console.error('Failed to optimize content:', error);
    }
    setLoading(false);
  };

  // 클립보드 복사
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Toast 알림 추가 가능
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Threads 콘텐츠 작성 도우미</h1>
          <p className="text-muted-foreground mt-2">
            AI 기반 콘텐츠 아이디어 생성 및 최적화
          </p>
        </div>
      </div>

      <Tabs defaultValue="ideas" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ideas">
            <Lightbulb className="w-4 h-4 mr-2" />
            아이디어
          </TabsTrigger>
          <TabsTrigger value="templates">
            <BookOpen className="w-4 h-4 mr-2" />
            템플릿
          </TabsTrigger>
          <TabsTrigger value="optimize">
            <Sparkles className="w-4 h-4 mr-2" />
            최적화
          </TabsTrigger>
          <TabsTrigger value="schedule">
            <Clock className="w-4 h-4 mr-2" />
            스케줄
          </TabsTrigger>
        </TabsList>

        {/* 아이디어 생성 탭 */}
        <TabsContent value="ideas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI 콘텐츠 아이디어 생성</CardTitle>
              <CardDescription>
                주제를 입력하면 관련 콘텐츠 아이디어를 생성합니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="예: AI 마케팅, 스타트업 성장 전략..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={generateIdeas} disabled={loading}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  생성하기
                </Button>
              </div>

              {generatedIdeas.length > 0 && (
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    {generatedIdeas.map((idea, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <h3 className="font-semibold">{idea.hook}</h3>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard(
                                  `${idea.hook}\n\n${idea.body}\n\n${idea.cta}\n\n${idea.hashtags.join(' ')}`
                                )}
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-sm whitespace-pre-line">{idea.body}</p>
                            <p className="text-sm font-medium">{idea.cta}</p>
                            <div className="flex flex-wrap gap-1">
                              {idea.hashtags.map((tag: string, i: number) => (
                                <Badge key={i} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <TrendingUp className="w-3 h-3" />
                              예상 참여: {idea.estimatedEngagement}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* 템플릿 탭 */}
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>콘텐츠 템플릿</CardTitle>
              <CardDescription>
                검증된 템플릿을 활용해 빠르게 콘텐츠를 작성하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { id: 'product-launch', name: '신제품 출시', icon: '🚀' },
                  { id: 'tips-and-tricks', name: '팁 & 트릭', icon: '💡' },
                  { id: 'user-testimonial', name: '고객 후기', icon: '🌟' },
                  { id: 'behind-the-scenes', name: '비하인드', icon: '👀' },
                  { id: 'question-engagement', name: '질문형', icon: '🤔' }
                ].map((template) => (
                  <Card 
                    key={template.id}
                    className="cursor-pointer hover:border-primary"
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{template.icon}</span>
                        <div>
                          <h4 className="font-semibold">{template.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            클릭하여 템플릿 사용
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 최적화 탭 */}
        <TabsContent value="optimize" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>콘텐츠 최적화</CardTitle>
              <CardDescription>
                작성한 콘텐츠를 분석하고 개선점을 제안합니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="최적화할 콘텐츠를 입력하세요..."
                value={contentText}
                onChange={(e) => setContentText(e.target.value)}
                className="min-h-[200px]"
              />
              <Button onClick={optimizeContent} disabled={loading}>
                <Sparkles className="w-4 h-4 mr-2" />
                최적화 분석
              </Button>

              {optimizedContent && (
                <div className="space-y-4">
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">최적화된 콘텐츠</h4>
                    <Card>
                      <CardContent className="p-4">
                        <p className="whitespace-pre-line">{optimizedContent.optimized}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">개선 제안</h4>
                    <div className="space-y-2">
                      {optimizedContent.suggestions.map((suggestion: string, i: number) => (
                        <div key={i} className="flex items-start gap-2">
                          <Target className="w-4 h-4 mt-0.5 text-primary" />
                          <p className="text-sm">{suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* 스케줄 탭 */}
        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>최적 업로드 시간</CardTitle>
              <CardDescription>
                타겟 오디언스에 따른 최적의 업로드 시간을 확인하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select defaultValue="general">
                  <SelectTrigger>
                    <SelectValue placeholder="타겟 오디언스 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">일반</SelectItem>
                    <SelectItem value="business">비즈니스</SelectItem>
                    <SelectItem value="young">젊은층</SelectItem>
                    <SelectItem value="global">글로벌</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-4 gap-2">
                  {['09:00', '12:00', '18:00', '20:00'].map((time) => (
                    <Card key={time}>
                      <CardContent className="p-3 text-center">
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        <p className="font-semibold">{time}</p>
                        <p className="text-xs text-muted-foreground">KST</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}