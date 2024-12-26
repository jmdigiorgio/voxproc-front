import React from 'react';

const AudioPlayerLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="min-h-screen bg-zinc-950"
      role="application"
      aria-label="Live Stream Reader Interface"
    >
      {/* Header */}
      <header className="h-20">
        <div className="h-full flex items-center justify-between px-5">
          <div className="font-mono text-2xl tracking-tighter">
            <span className="text-emerald-400 font-bold">x</span>
            <span className="text-emerald-400 font-bold">_</span>
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-400/90 to-emerald-400/70 bg-clip-text text-transparent font-semibold">
              telegraph
            </span>
            <span className="text-emerald-400/30 animate-[blink_1s_steps(1)_infinite] ml-0.5 -mr-1">
              _
            </span>
          </div>
          <div className="flex items-center gap-5">
            {/* Theme Toggle */}
            <button
              className="relative w-16 h-8 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center p-0.5 cursor-pointer group
                         shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hover:border-emerald-400/50 transition-colors"
              aria-label="Toggle theme"
              role="switch"
              aria-checked="false"
            >
              {/* Track Icons */}
              <div className="absolute inset-0 flex items-center justify-between px-2 text-zinc-600">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              {/* Thumb */}
              <div
                className="w-7 h-7 rounded-sm bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-lg transform transition-all duration-200
                            border border-emerald-500/50 group-hover:shadow-emerald-400/20"
              />
            </button>

            {/* Account Button */}
            <button
              className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center 
                         shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] text-zinc-400 
                         hover:text-emerald-400 hover:border-emerald-400/50 transition-colors"
              aria-label="Account menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="px-5">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Audio Player Section */}
          <div className="lg:sticky lg:top-8 lg:flex-1">
            <div className="w-full max-w-2xl mx-auto bg-zinc-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Status Bar */}
              <div className="px-4 py-2 border-b border-zinc-800 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-zinc-400 text-sm">Reading Live</span>
                </div>
                <div className="text-zinc-500 text-sm">|</div>
                <div className="text-zinc-400 text-sm">Queue: 42 posts</div>
              </div>

              {/* Current Post */}
              <div className="p-6 border-b border-zinc-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-medium">
                      @techuser
                    </div>
                    <div className="text-zinc-500 text-sm">2 minutes ago</div>
                  </div>
                </div>
                <div className="text-zinc-300 text-base leading-relaxed">
                  "Just deployed my first Next.js 13 app with the new app
                  router. The developer experience is amazing! 🚀 #webdev
                  #nextjs"
                </div>
              </div>

              {/* Audio Controls */}
              <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-zinc-400 text-sm">
                    Currently Reading:{' '}
                    <span className="text-emerald-400">Tech Twitter Feed</span>
                  </div>
                  <button
                    className="px-3 py-1.5 bg-zinc-800 text-emerald-400 rounded-full text-sm
                             hover:bg-zinc-700 transition-colors"
                  >
                    Change Feed
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {/* Controls */}
                  <div className="flex-1 flex items-center justify-center gap-3">
                    <button
                      className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-full
                               hover:bg-zinc-800"
                      aria-label="Previous post"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      className="w-10 h-10 rounded-full bg-emerald-400 text-zinc-900 flex items-center justify-center
                               hover:bg-emerald-300 transition-colors"
                      aria-label="Pause reading"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6"
                        />
                      </svg>
                    </button>

                    <button
                      className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors rounded-full
                               hover:bg-zinc-800"
                      aria-label="Skip post"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Volume */}
                  <div className="w-24 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-zinc-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072M12 6v12"
                      />
                    </svg>
                    <input
                      type="range"
                      className="flex-1 h-1 bg-zinc-800 rounded-lg appearance-none 
                             [&::-webkit-slider-thumb]:appearance-none
                             [&::-webkit-slider-thumb]:w-2.5
                             [&::-webkit-slider-thumb]:h-2.5
                             [&::-webkit-slider-thumb]:rounded-full
                             [&::-webkit-slider-thumb]:bg-emerald-400
                             [&::-webkit-slider-thumb]:cursor-pointer"
                      min="0"
                      max="100"
                      defaultValue="75"
                    />
                  </div>
                </div>

                {/* Voice Wave */}
                <div className="h-8 flex items-center justify-center gap-0.5">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="w-0.5 bg-emerald-400/40 rounded-full transition-all duration-150"
                      style={{
                        height: `${Math.sin(i * 0.5) * 50 + 50}%`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Post Queue Panel */}
          <div className="lg:flex-1 xl:flex-[1.5]">
            <div className="bg-zinc-900 rounded-xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-zinc-100">
                  Upcoming Posts
                </h2>
                <div className="text-zinc-400">42 in queue</div>
              </div>

              {/* Queue List */}
              <div className="space-y-3">
                {[
                  {
                    user: '@devtools',
                    time: '5m',
                    content:
                      'New VS Code extension for AI pair programming just dropped! Check it out...',
                    likes: 128,
                    comments: 23,
                  },
                  {
                    user: '@webstandards',
                    time: '8m',
                    content:
                      'Important: New CSS Container Queries specification has reached candidate recommendation!',
                    likes: 432,
                    comments: 56,
                  },
                  {
                    user: '@designsystem',
                    time: '12m',
                    content:
                      'Just published our updated component library. Now with better accessibility...',
                    likes: 89,
                    comments: 12,
                  },
                ].map((post, i) => (
                  <div
                    key={i}
                    className="p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800/70 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-medium">
                          {post.user}
                        </span>
                        <span className="text-zinc-500 text-sm">
                          {post.time} ago
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-500">
                        <span> {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                    </div>
                    <p className="text-zinc-300 text-sm">{post.content}</p>
                  </div>
                ))}
              </div>

              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AudioPlayerLayout;
