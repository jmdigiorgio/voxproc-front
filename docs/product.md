# voxproc

## Product Vision

voxproc transforms how users consume social media content by converting text-based posts into an audio stream experience, enabling continuous or periodic information consumption without visual or tactile interruption of primary tasks. Think of it as "radio station or a personal telegraph for social media" - a background audio companion for the modern professional or people who are just tired of looking at their phones all the time.

## Target Users

- Knowledge workers who need to stay informed while maintaining productivity
- Professionals who value real-time information but can't constantly check social media
- Multitaskers who want to consume content while engaged in other activities
- Social media power users looking for a more efficient way to consume content
- People who want to be connected to social media without being totally distracted by it
- People who are trying to spend less time on their phones
- People who can't see well or at all but still want to consume social media

## Core Problems We're Solving

1. **Context Switching Burden**: Traditional social media platforms require users to stop their current activities and visually focus on the platform to consume information, leading to productivity loss and workflow interruption.

2. **Information Accessibility**: While platforms like X, Threads, Bluesky, and Mastodon excel at rapid information sharing, their text-based nature creates a visual dependency that limits when and how users can consume content.

3. **Attention Management**: Users currently face a trade-off between staying informed and maintaining focus on primary tasks, often leading to either missed information or reduced productivity.

## Key Features & Functionality

### Proof of Concept

1. **Core Audio Experience** (Desktop Web App)

   - Text-to-speech conversion of social media posts
   - Audio translation to multiple languages
   - Background audio playback through browser
   - Basic playback controls (play/pause, skip, volume)
   - System status audio alerts
   - Post queue management

2. **Platform Integration**

   - Bluesky integration as first platform
     - AT Protocol integration
     - OAuth-based authentication
     - Feed retrieval and processing
     - Basic content filtering (no polls, no pure image posts)
     - Follow list synchronization
     - Custom feed support

3. **User Interface**

   - Simple, intuitive web-based audio player interface
   - Connected account management
   - Basic feed customization options
   - Light/dark mode support
   - Minimized player mode

4. **Free Tier Implementation**

   - Basic audio advertisements
   - Single platform connection (Bluesky)
   - Standard voice option
   - Basic playback history (last 24 hours)

5. **Essential Settings**
   - Voice selection (2-3 options)
   - Language selection
   - Playback speed control
   - Volume normalization
   - Auto-start preferences
   - Content Pacing
     - Post frequency control (posts per minute/hour)
     - Minimum time gap between posts
     - Quiet hours configuration
     - Batch vs. real-time delivery preference
   - Audio Alerts
     - Pre-post chime selection (gentle tones to indicate new content)
     - System status tones (connection issues, errors)
     - Alert volume control
     - Option to disable specific alerts
     - Different tones for different alert types
   - Status Indicators
     - In-UI status messages
     - Connection status indicator
     - Processing status indicator
     - Error messages in player interface

### Future Features

- Platform integrations
  - X (Twitter)
  - Mastodon
  - Threads
- User account management
- Infrastructure scaling
- Mobile app versions (iOS/Android)
- Advanced voice customization
- Mobile-specific features
- Cross-device sync

## Success Metrics

### User Engagement

1. **Active Listening**

   - Daily Active Users (DAU)
   - Average listening time per session
   - Number of posts consumed via audio per user
   - Background listening time vs. active app time

2. **Platform Adoption**
   - Number of authenticated users
   - Feed customization usage
   - Premium feature adoption rate

### User Retention

1. **Core Metrics**

   - Day 1/7/30 retention rates
   - Weekly active users (WAU)
   - Monthly active users (MAU)
   - Churn rate analysis

2. **User Satisfaction**
   - Website ratings and reviews
   - User feedback submissions
   - Customer support tickets
   - Net Promoter Score (NPS)

### Business Performance

1. **Free Tier Metrics**

   - User acquisition cost
   - Ad completion rates
   - Ad engagement rates
   - Conversion rate to premium

2. **Premium Tier Metrics**
   - Subscription conversion rate
   - Monthly Recurring Revenue (MRR)
   - Customer Lifetime Value (CLV)
   - Premium feature usage

### Technical Performance

1. **System Health**
   - Average post-to-audio latency
   - System uptime
   - Error rates in audio conversion
   - API reliability metrics

## Competitive Analysis

### Current Solutions

1. **Social Media Platforms** (X, Threads, Bluesky, Mastodon)

   - Strength: Rapid information sharing, real-time updates
   - Weakness: Requires visual attention and context switching
   - Market Position: Primary source of content we're transforming

2. **Audio Platforms** (Spotify, Apple Podcasts, YouTube Music)

   - Strength: Perfected background listening experience
   - Strength: Well-established audio controls and user experience
   - Weakness: Content is pre-recorded, not real-time
   - Weakness: No integration with social media feeds
   - Market Position: Sets user expectations for audio quality and playback experience

3. **News Aggregators** (Feedly, RSS Readers)
   - Strength: Aggregation of multiple sources
   - Weakness: Text-based consumption
   - Weakness: No audio transformation capability

### Our Differentiation

- Unique audio-first approach to social media consumption
- Real-time transformation of text content to audio
- Background processing capability
- Multi-platform social media integration
- Focus on productivity and continuous information flow
- Bridging the gap between social media and audio platforms

## Monetization Strategy

### Tiered Pricing Model

1. **Free Tier**

   - Access to basic features
   - Audio advertisements between content blocks
   - Limited number of social media platform connections
   - Standard voice options
   - Basic customization options

2. **Premium Tier**
   - Ad-free experience
   - Unlimited platform connections
   - Premium voice options
   - Advanced customization features
   - Priority content processing
   - Extended playback history

### Revenue Streams

1. **Advertising**

   - Audio ads in free tier
   - Targeted advertising based on content categories
   - Partnership opportunities with relevant brands
   - Native audio sponsorships

2. **Premium Subscriptions**
   - Monthly subscription model
   - Annual subscription with discount
   - Team/Enterprise pricing options
