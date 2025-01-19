# Feed Design

## Overview

The feed is the primary interface for users to listen to their streams. It provides real-time updates about current playback, queued content, and community activity.

## Layout Structure

### Three Column Layout

```code
+----------------+----------------+--------------+
|     Queue      |     Main      |   Stations    |
|                |   Viewport    |               |
|                |               |               |
|  [25% width]   |  [50% width]  |  [25% width]  |
+----------------+----------------+--------------+
```

## Column Details

### Left Column: Queue

Shows the content queue with previous, current, and upcoming posts.

#### Queue Components

1. **Queue Title**
   - Indicates to the user that this is the queue
   - Settings button
   - Centered in container

2. **Previous Post**
   - Dimmed appearance
   - Author avatar/initial
   - Username
   - Content preview
   - Platform indicator

3. **Now Playing**
   - Highlighted with emerald border
   - Author avatar/initial
   - Username
   - Content preview
   - Send to viewport button

4. **Up Next**
   - Dimmed appearance
   - Author avatar/initial
   - Username
   - Content preview

5. **Queue Controls**
   - Show More button
   - Queue length indicator

### Center Column: Main Viewport

Primary content display area showing a detailed view of the current post streaming. Below the post are the user's community updates.

#### Components

1. **Post View**
     - Platform source indicator
     - Account name with avatar
     - Link to original post
     - Timestamp
     - Full post content

2. **Community**
   - Centered section title with settings
   - Individual update cards
   - Dismissible updates (X button)
   - Timestamps
   - User avatars
   - User names
   - Action descriptions
      - Followed
      - Created a new stream
      - Added to an existing stream
      - Created a channel (multiple, categorized streams)

### Right Column: Stream

Streams are curated lists of social media accounts whose posts are audio streamed in voxproc.

#### Stream Components

1. **Streams Title**
   - Settings button
   - Centered in container

2. **Previous Stream**
   - Dimmed appearance
   - Station icon
   - Station name
   - Source list

3. **Current Stream**
   - Highlighted with emerald border
   - Station icon
   - Stream name
   - Source list
   - Send to viewport button

4. **Pinned Streams**
   - Dimmed appearance
   - Stream icon
   - Stream name
   - Source list preview
   - Platform source icon

5. **Station Controls**
   - Show More button
   - Pinned streams count

## Visual Design

### Color Scheme

- Dark theme primary (bg-zinc-950)
- Emerald accents (#10B981)
- Status indicators
  - Active: Emerald border
  - Inactive: Dimmed opacity
  - Hover: Zinc-800

### Typography

- Monospace font family
- Hierarchical sizing
  - Section titles: text-lg
  - Content: text-sm
  - Labels: text-xs uppercase

### Component Styling

- Rounded corners (rounded-lg)
- Consistent padding (p-4, p-6)
- Hover states on interactive elements
- Smooth transitions
- Icon buttons with hover effects

## Responsive Behavior

### Desktop (>1024px)

- Full three-column layout
- Fixed header and footer
- All columns visible

### Tablet (768px - 1024px)

- Two columns
  - Combined queue/content
  - Station management
- Collapsible sections

### Mobile (<768px)

- Single column
- Bottom navigation
- Swipe between sections
- Modal overlays for details

## Interactive Elements

### Buttons

- Settings buttons for each section
- Send to viewport buttons
- Dismiss update buttons
- Show more buttons

### Hover States

- Background color changes
- Text color changes
- Opacity transitions
- Icon button highlights

### Content Flow

- Queue progression
- Station switching
- Network update feed
- Content viewport updates
