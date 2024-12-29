# User Settings Design

## User Setting States

💳 - Subscribers only
🟢 - On by default
🔴 - Off by default
🚫 - Cannot be turned off or left unpopulated
🤝 - Optional

## Overview

The user settings page is the primary interface for users to manage their settings. The user settings are divided into the following sections:

- **Account Settings**
- **Notification Settings**
- **Stream Settings**
- **Community Settings**
- **Privacy Settings**

## Account Settings

The account settings are the settings that are used to uniquely identify the user.

- **Username** 🚫
- **Email** 🚫
- **Phone number** 🤝
- **Birthdate** 🤝
- **Location** 🤝
- **Avatar** 🤝
- **Password** 🚫
- **Billing information** 💳
  - **Address** 🚫
  - **Payment method** 🚫
- **Delete account** 🚫

## Notification Settings

Notification settings are primarily centered around Community activity, but there are a few edge cases that don't fall under Community.

- **Community notifications** 🟢 - Notifications for Community activity
  - Filter by type of Community activity
  - Frequency of notifications
- **Stream notifications** 🟢 - These are administrative notifications such as a problem with a source account in the stream or the stream's ability to connect a platform source that the stream depends on.
  - Filter by type of stream update
  - Frequency of notifications
- **User notifications** 🚫 - These are administrative notifications such as a problem with billing information if the user is a subscriber.

## Stream Settings

Streams are the core functionality of the app. They are the whole purpose that the app is being developed. Included in the idea of streams is the engine that is used to convert text to audio.

- **Flow** - The frequency that the stream broadcasts content:
  - Always 🟢 - The stream broadcasts content as it comes in.
  - Interval 🔴 - The stream broadcasts At a user-specified time interval which can be 5, 15, 30, or 60 minutes.
  - Manual 🔴 - The stream holds broadcasts in the queue, waiting for the user to request them to be broadcast.
- **Length** - The maximum allowed length of the stream in minutes regardless of queue size. A number between 1 and 30 minutes. 5 minutes by default. Does not apply when flow is set to Always.
- **Notification sound** - The sound that is played when the stream starts and/or ends.
- **Stream engine settings** - Settings for the stream engine
  - Universal or stream-specific voice settings
  - Language
  - Voice speed
- **Queue** - The queue is the list of pending broadcasts.
  - Queue size - The maximum number of broadcasts that can be held in the queue. A number between 1 and 25. 10 by default.
- **Visibility** - The visibility of each user-created stream to other users.
  - Public 🟢 - The stream is visible to all users.
  - Followers only 🔴 - The stream is visible only to the user's followers.
  - Private 💳 🔴 - The stream is visible only to the user.

## Community Settings

Think of Community as a public ledger of user activity. Unlike traditional social media platforms, there is no current plan for users to create their own freeform posts. Instead, community posts are created automatically by what the user does. This philosophy may change in the future depending on user feedback.

Users don't have to participate in Community. They can turn it off and do not have to see any activity from other users. Users can also control how they participate in the community if they don't want to turn Community off. It should be much more beneficial for users to participate in the community to some degree than not to participate at all.

- **Community participation** 💳 🟢 - If disabled, the user will not see any activity from other users nor will the user's activity be broadcast to any other users.
- **Broadcast settings** 💳 🟢 - What user actions are automatically broadcast to the community feed?
  - Creating a stream
  - Modifying a stream
  - Following a stream
  - What the user is listening to

## Privacy Settings

- **Profile visibility** 💳 🟢 - Is the user visible to other users in the user search?
- **Activity ledger visibility** 💳 🟢 - Is the user's activity ledger visible to other users?
- **Profile privacy** - If the user is visible to other users, what can other users see about them in their profile?
  - Username 🚫
  - Avatar 🚫
  - Email 🔴
  - Phone number 🔴
  - Birthdate 🔴
  - Location 🔴
- **Followers**
  - Follower visibility 🟢 - Can another user see who they follow?
  - Follower permissions 🟢 - Can another user follow them without their permission?
