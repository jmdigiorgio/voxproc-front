'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@clerk/nextjs';

export function ContentViewer() {
  const { toast } = useToast();
  const { getToken } = useAuth();

  const pingService = async (service: 'stream' | 'settings' | 'community') => {
    try {
      const token = await getToken();

      if (!token) {
        throw new Error('Not authenticated');
      }

      // Comprehensive test data for each service
      const testData = {
        stream: {
          // Test stream management
          userId: 'test-user-123',
          action: 'start_stream',
          streamConfig: {
            name: 'My Tech News',
            description: 'Latest tech updates',
            sources: ['bluesky', 'threads'],
            filters: {
              keywords: ['tech', 'AI', 'programming'],
              excludeReplies: true,
              excludeReposts: false,
            },
          },
          // Test TTS functionality
          ttsConfig: {
            voice: 'voice-1',
            speed: 1.0,
            pitch: 1.0,
            language: 'en-US',
          },
          // Test content processing
          content: {
            text: 'Test post content for TTS conversion with #hashtags and @mentions',
            type: 'post',
            platform: 'bluesky',
            originalId: 'post-123',
            metadata: {
              hasMedia: false,
              isReply: false,
              isRepost: false,
            },
          },
        },
        settings: {
          userId: 'test-user-123',
          // User preferences
          preferences: {
            tts: {
              defaultVoice: 'voice-1',
              defaultSpeed: 1.0,
              defaultPitch: 1.0,
              defaultLanguage: 'en-US',
            },
            playback: {
              autoPlay: true,
              continuousPlay: true,
              crossfade: true,
              crossfadeDuration: 0.5,
            },
            notifications: {
              enabled: true,
              sound: true,
              desktop: true,
              mobile: true,
            },
            privacy: {
              profileVisibility: 'public',
              activityVisibility: 'followers',
              allowRecommendations: true,
            },
          },
          // Platform connections
          connections: {
            bluesky: {
              connected: true,
              handle: '@user.bsky.social',
            },
            threads: {
              connected: false,
            },
          },
        },
        community: {
          userId: 'test-user-123',
          // Social actions
          action: 'share_stream',
          streamId: 'test-stream-456',
          // Community features
          community: {
            visibility: 'public',
            tags: ['tech', 'news', 'AI'],
            allowComments: true,
            allowSharing: true,
          },
          // Engagement data
          engagement: {
            likes: 42,
            shares: 15,
            comments: 7,
            listeners: 120,
          },
          // Discovery metadata
          discovery: {
            category: 'Technology',
            language: 'en-US',
            recommendationScore: 0.85,
            trending: false,
          },
        },
      };

      const response = await fetch(`/api/${service}/ping`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(testData[service]),
      });

      const data = await response.json();

      toast({
        title: `${service} Service Ping`,
        description: `Sent: ${JSON.stringify(testData[service])}\nResponse: ${JSON.stringify(data)}`,
        duration: 5000,
      });
    } catch (error) {
      toast({
        title: `${service} Service Error`,
        description:
          error instanceof Error ? error.message : 'Failed to ping service',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <div className="h-1/2 border-2 border-neutral-900">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 font-mono">
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => pingService('stream')}
            className="border-2 border-neutral-900 hover:bg-neutral-100"
          >
            Ping Stream
          </Button>
          <Button
            variant="outline"
            onClick={() => pingService('settings')}
            className="border-2 border-neutral-900 hover:bg-neutral-100"
          >
            Ping Settings
          </Button>
          <Button
            variant="outline"
            onClick={() => pingService('community')}
            className="border-2 border-neutral-900 hover:bg-neutral-100"
          >
            Ping Community
          </Button>
        </div>
        <div className="text-sm text-neutral-500">
          Click buttons to test API Gateway connectivity
        </div>
      </div>
    </div>
  );
}
