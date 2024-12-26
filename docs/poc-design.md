# XTelegraph POC Design

The app will support light and dark themes.

---

## Header

The header serves as the primary navigation and branding area.

### Header Components

- Logo (left-aligned)
- Primary Navigation
  - Home/Feed
  - Discover
- User Controls (right-aligned)
  - Theme toggle
  - User Profile/Settings
  - Notifications

### Header Behavior

- Always visible, even on scroll
- Anchored to top of page

### Header Visual Style

- No border
- No shadow
- Same bg as page
- Minimalistic

---

## Body

The body houses the main content of the application.

### Body Components

#### Body Left Section

##### Body Left Upper Section

Current Post

##### Body Left Lower Section

Post Queue

#### Body Right Section

##### Body Right Upper Section

Current Station

##### Body Right Lower Section

Station List

---

## Footer

The footer houses the persistent audio player, which is a core feature of the application.

### Footer Components

#### Footer Left Section

- Current Post Info
  - Platform icon
  - Author name
  - Post preview (truncated)
  - Timestamp

#### Footer Center Section (Primary Controls)

- Play/Pause (larger button)
- Previous/Next Post
- Progress Bar
  - Current time
  - Total duration
  - Interactive seek functionality
- Speed Control

#### Footer Right Section

- Volume Control
  - Mute toggle
  - Volume slider
- Queue Toggle
- Additional Controls
  - Share
  - Like/Save
  - More options

### Footer Behavior

- Always visible
- Fixed positioning at bottom
- Smooth transitions between states
- Expandable for queue view
- Collapses to mini player on mobile

### Footer Visual Style

- Height TBD
- Dark theme by default
- Prominent playback controls
- Subtle animations for state changes
- High contrast for better readability

### Footer Accessibility

- Clear focus states
- Keyboard shortcuts
  - Space: Play/Pause
  - M: Mute
  - Arrow keys: Seek/Volume
- Screen reader optimized
- Touch targets >= 44px
