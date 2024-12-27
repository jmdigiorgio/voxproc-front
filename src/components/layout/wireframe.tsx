import React, { useState, useEffect } from 'react';
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  MoonIcon,
  BellIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  MusicalNoteIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  StopIcon,
  SpeakerWaveIcon as VolumeIcon,
} from '@heroicons/react/24/outline';

const Wireframe = ({ children }: { children?: React.ReactNode }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setTime] = useState(0);

  // Animation loop for voice meter
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTime(Date.now());
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-mono">
      {/* Header - Always visible, minimalistic */}
      <header className="h-16 sticky top-0 z-50 bg-zinc-950">
        <div className="h-full flex items-center justify-between px-5">
          {/* Logo */}
          <div className="text-2xl tracking-tighter">
            <span className="text-emerald-400 font-bold">x</span>
            <span className="text-emerald-400 font-bold">_</span>
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-400/90 to-emerald-400/70 bg-clip-text text-transparent font-semibold">
              telegraph
            </span>
            <span className="text-emerald-400/30 animate-[blink_1s_steps(1)_infinite] ml-0.5 -mr-1">
              _
            </span>
          </div>

          {/* Primary Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button className="text-emerald-400 hover:text-emerald-300 transition-colors tracking-tight">
              Home
            </button>
            <button className="text-zinc-400 hover:text-emerald-400 transition-colors tracking-tight">
              Discover
            </button>
          </nav>

          {/* User Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Toggle theme"
            >
              <MoonIcon className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="Notifications"
            >
              <BellIcon className="w-5 h-5" />
            </button>

            {/* Profile */}
            <button
              className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
              aria-label="User profile"
            >
              <UserCircleIcon className="w-5 h-5" />
            </button>

            <button
              className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="w-5 h-5" />
              ) : (
                <SpeakerWaveIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Body - Main content area */}
      <main className="flex-1 container mx-auto px-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="lg:w-2/3 space-y-8">
            {/* Current Post */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Current Post
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center">
                    <div className="w-6 h-6 text-emerald-400">
                      <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-200 tracking-tight">
                      @username
                    </div>
                    <div className="text-zinc-500 text-sm tracking-tight">
                      Just now
                    </div>
                  </div>
                </div>
                <p className="text-zinc-300 tracking-tight">
                  Post content will appear here...
                </p>
              </div>
            </section>

            {/* Post Queue */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Queue
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-4 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center">
                        <div className="w-4 h-4 text-emerald-400">
                          <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-zinc-400 tracking-tight">
                        @user{i}
                      </div>
                    </div>
                    <p className="text-zinc-500 text-sm tracking-tight">
                      Queued post preview...
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 space-y-8">
            {/* Current Station */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Current Station
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                  <MusicalNoteIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-zinc-200 tracking-tight">
                    Tech Twitter
                  </div>
                  <div className="text-zinc-500 text-sm tracking-tight">
                    42 posts in queue
                  </div>
                </div>
              </div>
            </section>

            {/* Station List */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Stations
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <button
                    key={i}
                    className="w-full p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                        <MusicalNoteIcon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-zinc-200 tracking-tight">
                          Station {i}
                        </div>
                        <div className="text-zinc-500 text-sm tracking-tight">
                          {10 * i} posts
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer - Persistent Audio Player */}
      <footer className="h-36 bg-zinc-900/80 backdrop-blur-sm fixed bottom-0 left-0 right-0">
        <div className="h-full px-8 flex items-center">
          {/* Now Playing Info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
              <MusicalNoteIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col gap-2">
              {/* Voice Meter */}
              <div className="flex gap-1 h-4 items-end">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 bg-emerald-400/80 rounded-full transition-all duration-75 ${
                      isPlaying ? '' : 'h-0.5'
                    }`}
                    style={{
                      height: isPlaying
                        ? `${Math.max(0.2, Math.random() * 1)}rem`
                        : '0.125rem',
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="text-zinc-100">Currently Reading</div>
                <div className="text-zinc-500 text-sm">Tech Twitter Feed</div>
              </div>
            </div>
          </div>

          {/* Progress Bar and Controls Group */}
          <div className="flex-1 flex flex-col gap-4 max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full">
              <div className="text-zinc-500 text-sm">0:00</div>
              <div className="flex-1 h-1 bg-zinc-800 rounded-full">
                <div className="w-1/3 h-full bg-emerald-400 rounded-full"></div>
              </div>
              <div className="text-zinc-500 text-sm">1:30</div>
            </div>

            {/* Center Controls */}
            <div className="flex items-center justify-center gap-4">
              <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                <BackwardIcon className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                <StopIcon className="w-5 h-5" />
              </button>

              <button
                className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <PauseIcon className="w-5 h-5" />
                ) : (
                  <PlayIcon className="w-5 h-5" />
                )}
              </button>

              <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                <ForwardIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                  <VolumeIcon className="w-5 h-5" />
                </button>
                <input
                  type="range"
                  className="w-24 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-2
                         [&::-webkit-slider-thumb]:h-2
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-emerald-400"
                  min="0"
                  max="100"
                  defaultValue="75"
                />
              </div>
            </div>
          </div>

          {/* Empty Right Section */}
          <div className="w-[200px]" />
        </div>
      </footer>

      {/* Spacer for footer */}
      <div className="h-24"></div>
    </div>
  );
};

export default Wireframe;
