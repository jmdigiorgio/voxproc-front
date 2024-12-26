import React from 'react';

const AudioTerminalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen bg-zinc-950 text-emerald-400 font-mono"
      role="application"
      aria-label="Terminal Radio Interface"
    >
      {/* Audio Player Header */}
      <header
        className="bg-zinc-900 border-b border-emerald-500/30 p-4"
        role="banner"
      >
        <div className="max-w-6xl mx-auto">
          {/* Player Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Play Controls */}
              <div
                className="flex items-center gap-4"
                role="group"
                aria-label="Playback controls"
              >
                <button
                  className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500
                          hover:bg-emerald-500/30 transition-colors flex items-center justify-center
                          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  aria-label="Play"
                >
                  <div
                    className="w-0 h-0 border-t-[8px] border-t-transparent 
                              border-l-[16px] border-l-emerald-400 
                              border-b-[8px] border-b-transparent ml-1"
                  />
                </button>
                <div className="flex gap-2">
                  <button
                    className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/50
                            hover:bg-emerald-500/20 transition-colors flex items-center justify-center
                            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                    aria-label="Previous station"
                  >
                    ⏮
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/50
                            hover:bg-emerald-500/20 transition-colors flex items-center justify-center
                            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                    aria-label="Next station"
                  >
                    ⏭
                  </button>
                </div>
              </div>

              {/* Current Station */}
              <div
                className="bg-zinc-950/50 px-4 py-2 rounded border border-emerald-500/30"
                role="status"
              >
                <div className="text-xs text-emerald-500/80">Now Playing</div>
                <div className="font-bold">Tech News Radio</div>
              </div>
            </div>

            {/* Volume & Settings */}
            <div className="flex items-center gap-4">
              {/* Volume Slider */}
              <div
                className="flex items-center gap-2"
                role="group"
                aria-label="Volume control"
              >
                <label htmlFor="volume" className="text-emerald-500/80">
                  Vol
                </label>
                <input
                  id="volume"
                  type="range"
                  className="w-24 h-1 bg-emerald-500/30 rounded-lg appearance-none 
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-3
                         [&::-webkit-slider-thumb]:h-3
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-emerald-400
                         [&::-webkit-slider-thumb]:cursor-pointer
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                  min="0"
                  max="100"
                  defaultValue="75"
                  aria-label="Volume"
                />
              </div>

              {/* Signal Strength */}
              <div
                className="flex gap-1"
                role="meter"
                aria-label="Signal strength"
                aria-valuenow={75}
              >
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="w-1 bg-emerald-400 rounded-t"
                    style={{
                      height: `${i * 4}px`,
                      opacity: i <= 3 ? 1 : 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div
            className="mt-4 flex items-center gap-2"
            role="group"
            aria-label="Playback progress"
          >
            <span
              className="text-xs text-emerald-500/80"
              aria-label="Current time"
            >
              00:00
            </span>
            <div className="flex-1 h-1 bg-emerald-500/20 rounded-full">
              <div className="w-1/3 h-full bg-emerald-400 rounded-full" />
            </div>
            <span
              className="text-xs text-emerald-500/80"
              aria-label="Total time"
            >
              03:45
            </span>
          </div>
        </div>
      </header>

      {/* Terminal Body */}
      <main className="max-w-6xl mx-auto p-4" role="main">
        <div className="border border-emerald-500/30 rounded-md bg-zinc-950/50 min-h-[calc(100vh-12rem)]">
          {/* Terminal Header */}
          <div className="border-b border-emerald-500/30 p-2 flex items-center gap-2">
            <span className="text-emerald-500/80">station_manager</span>
            <span className="text-xs">v1.0.0</span>
          </div>

          {/* Terminal Content */}
          <div className="p-4">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default AudioTerminalLayout;
