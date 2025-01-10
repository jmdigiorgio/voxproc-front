# API Gateway Testing Guide

## Overview

The frontend includes test endpoints that will send POST requests to `/api/{service}/ping` for each service. These requests will help verify:
- Authentication handling
- Request validation
- Service routing
- Response handling
- Error handling

## Authentication

All requests will include:
```http
Authorization: Bearer ${clerk_token}
Content-Type: application/json
```

The gateway should:
- Validate the Clerk token
- Extract user information
- Handle missing/invalid tokens

## Test Endpoints

### 1. Stream Service (`/api/stream/ping`)

Expects data structure:
```typescript
{
  userId: string;
  action: string;
  streamConfig: {
    name: string;
    description: string;
    sources: string[];
    filters: {
      keywords: string[];
      excludeReplies: boolean;
      excludeReposts: boolean;
    }
  };
  ttsConfig: {
    voice: string;
    speed: number;
    pitch: number;
    language: string;
  };
  content: {
    text: string;
    type: string;
    platform: string;
    originalId: string;
    metadata: {
      hasMedia: boolean;
      isReply: boolean;
      isRepost: boolean;
    }
  }
}
```

Test cases to handle:
- Valid stream configuration
- TTS parameter validation
- Content processing validation
- Platform-specific data handling

### 2. Settings Service (`/api/settings/ping`)

Expects data structure:
```typescript
{
  userId: string;
  preferences: {
    tts: {
      defaultVoice: string;
      defaultSpeed: number;
      defaultPitch: number;
      defaultLanguage: string;
    };
    playback: {
      autoPlay: boolean;
      continuousPlay: boolean;
      crossfade: boolean;
      crossfadeDuration: number;
    };
    notifications: {
      enabled: boolean;
      sound: boolean;
      desktop: boolean;
      mobile: boolean;
    };
    privacy: {
      profileVisibility: string;
      activityVisibility: string;
      allowRecommendations: boolean;
    }
  };
  connections: {
    bluesky: {
      connected: boolean;
      handle: string;
    };
    threads: {
      connected: boolean;
    }
  }
}
```

Test cases to handle:
- User preference validation
- Platform connection status
- Privacy settings validation
- Notification settings validation

### 3. Community Service (`/api/community/ping`)

Expects data structure:
```typescript
{
  userId: string;
  action: string;
  streamId: string;
  community: {
    visibility: string;
    tags: string[];
    allowComments: boolean;
    allowSharing: boolean;
  };
  engagement: {
    likes: number;
    shares: number;
    comments: number;
    listeners: number;
  };
  discovery: {
    category: string;
    language: string;
    recommendationScore: number;
    trending: boolean;
  }
}
```

Test cases to handle:
- Community feature validation
- Engagement metrics processing
- Discovery metadata validation
- Content visibility rules

## Expected Responses

Each service should return:
- Success case: `200 OK` with response data
- Auth error: `401 Unauthorized`
- Validation error: `400 Bad Request` with details
- Server error: `500 Internal Server Error`

Example success response:
```json
{
  "status": "success",
  "message": "Service healthy",
  "data": {
    "received": {/* echo of received data */},
    "timestamp": "ISO timestamp",
    "service": "service name"
  }
}
```

## Error Handling Test Cases

1. Authentication:
   - Missing token
   - Invalid token
   - Expired token

2. Validation:
   - Missing required fields
   - Invalid data types
   - Out of range values
   - Invalid enums

3. Service-specific:
   - Invalid stream configuration
   - Invalid TTS settings
   - Invalid privacy settings
   - Invalid community actions

## Rate Limiting

The gateway should enforce rate limits:
- Per IP
- Per user
- Per service

Test with rapid successive requests to verify rate limiting. 