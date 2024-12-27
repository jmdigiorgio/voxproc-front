# Feed Design

## Overview

The feed is the primary interface for users to consume and manage their audio content streams. It provides real-time updates about current playback, network activity, and station management.

## Layout Structure

### Three Column Layout

```
+----------------+----------------+----------------+
|     Queue      |     Main      |   Stations    |
|                |   Viewport    |               |
|                |               |               |
|  [25% width]   |  [50% width]  |  [25% width]  |
+----------------+----------------+----------------+
```

## Column Details

### Left Column: Queue

Shows the content queue with previous, current, and upcoming posts.

#### Components
1. **Queue Title**
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

Primary content display area showing detailed views of either the current post or station, as well as network updates.

#### Components
1. **Detailed View**
   - Can show either post or station details
   - Close button to dismiss view
   - Content varies based on type:
     
     **Post View**
     - Platform source indicator
     - Author info with avatar
     - Link to original post
     - Timestamp
     - Full post content

     **Station View**
     - Station name and icon
     - Source list with usernames
     - Station status
     - Current activity

2. **Network Updates**
   - Centered section title with settings
   - Individual update cards
   - Dismissible updates (X button)
   - Timestamps
   - User avatars
   - Action descriptions

### Right Column: Stations

Managing and switching between different content sources.

#### Components
1. **Stations Title**
   - Settings button
   - Centered in container

2. **Previous Station**
   - Dimmed appearance
   - Station icon
   - Station name
   - Source list

3. **Current Station**
   - Highlighted with emerald border
   - Station icon
   - Station name
   - Source list
   - Send to viewport button

4. **Pinned Stations**
   - Dimmed appearance
   - Station icon
   - Station name
   - Source list

5. **Station Controls**
   - Show More button
   - Pinned stations count

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
