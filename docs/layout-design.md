# voxproc Layout Design

- The app will support light and dark themes.
- The app uses the system monospace font (`font-mono` in Tailwind) for a technical, terminal-inspired aesthetic. This is implemented via Tailwind's built-in monospace font stack which provides good cross-platform compatibility.

---

## Header

The header serves as the primary navigation and branding area.

### Header Components

#### Header Left Section

Components will be right-aligned.

In order of appearance (from left to right):

- Logo

#### Header Center Section

Components will be center-aligned.

In order of appearance (from left to right):

- Feed (primary navigation to main listening experience)
- Stations (manage curated content sources)
- Narrator (text-to-speech engine settings and preferences)

#### Header Right Section

Components will be right-aligned.

In order of appearance (from left to right):

- Theme toggle
- Notifications
- User Profile/Settings

### Header Behavior

- Always visible, even on scroll
- Anchored to top of page

### Header Visual Style

- No border
- No shadow
- Same bg as page

---

## Body

The body serves as a flexible container for page-specific content. The actual content and structure within this container will be defined in individual page design documents.

### Body Behavior

- Fills available space between header and footer
- Scrollable when content exceeds viewport
- Maintains consistent padding and max-width

---

## Footer

The footer houses the persistent audio player, which is a core feature of the application. It has a semi-transparent dark background with blur effect for visual depth.

### Footer Components

#### Footer Left Section (Status Indicator)

- Visual Status
  - Icon indicating current state (playing/waiting/paused)
  - Visual feedback through animation states
- Voice Meter Animation
  - Active: 8 vertical bars that animate when playing
  - Inactive: Minimized state when waiting or paused
- Status Info
  - Primary Status (e.g., "Currently Reading", "Waiting for Posts", "Paused")
  - Secondary Info (e.g., Station Name, User Preference)

#### Footer Center Section (Progress and Controls)

- Progress Indicator
  - Current time display
  - Visual progress bar (non-interactive)
  - Total duration display
- Playback Controls
  - Previous/Next buttons (skip entire posts)
  - Play/Pause button (primary control)
  - Stop button
- Volume Control
  - Mute/Unmute toggle
  - Volume slider (optional)

#### Footer Right Section

- Narrator Mini Controls
  - Flow rate control (continuous/custom/paused)
  - Voice speed adjustment
  - Quick voice selector
  - Link to full narrator settings

### Footer Behavior

- Fixed positioning at bottom of viewport
- Semi-transparent background with blur effect
- Always visible
- Smooth transitions for play/pause states
- Animated voice meter during playback

### Footer Visual Style

- Height: 9rem (h-36)
- Semi-transparent dark background (bg-zinc-900/80)
- Backdrop blur effect
- Emerald accent color for interactive elements
- Minimalistic controls with hover states
- Voice meter uses emerald color with opacity
