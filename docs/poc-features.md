# voxproc - Proof of Concept Features

For simplicity, a *post* refers to a single public or semi-public message from an external social media source such as X, Threads, etc.

## Audio Player

The audio player is the core of the application. It is responsible for playing back the audio of the current post.

- Playback controls
  - Play
  - Pause
  - Stop
  - Volume
  - Speed
- Playback progress bar
- Audio level meter
- Station name

## Text-to-Speech

- Text-to-Speech engine
- Text-to-Speech settings
  - Voice selection
  - Language selection
  - User-enabled profanity filter

## Post Display

Displays the current post being played back.

- Platform source
- Author
- Content
- Timestamp - how long ago

## Post Queue

The post queue is a list of posts that are waiting to be played back or have recently been played back.

- Queue progress bar
- Queue display
  - Abbreviated post metadata
- Queue management
  - Clear queue
  - Limit queue length

## Station Management

A station is a curated list of one or more sources and one or more accounts that, in turn, make up a post queue and are listened to by the user.

- Station visibility
  - Public
  - Private
- Customize station
  - Name
  - Description
  - Tags
  - Avatar
  - Sources
  - Accounts
  - Alert preferences
- Global playback settings for all stations

## User Account

A user account is a collection of user data and settings accessible only to the user.

- User Data
  - Sources
  - Accounts
  - Stations
  - Followed stations
- External source authentication for follow list retrieval

## Social

- Follow other users who enable following

## Accessibility

- Screen reader support
