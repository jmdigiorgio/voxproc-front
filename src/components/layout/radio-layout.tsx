import React from 'react';

const RadioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-fuchsia-950 to-indigo-950">
      {/* Retrowave Sun Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-pink-500/20" />

      {/* Radio Cabinet */}
      <div className="relative max-w-6xl mx-auto min-h-screen flex flex-col">
        {/* Top Panel / Header */}
        <header
          className="p-4 bg-black/40 backdrop-blur-sm border-b-2 border-cyan-500 rounded-t-lg
                         shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        >
          <div className="flex justify-between items-center">
            {/* Brand Badge */}
            <div
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 
                          font-bold text-2xl tracking-wider"
            >
              XTelegraph
            </div>

            {/* Tuning Controls */}
            <div className="flex gap-4 items-center">
              {/* Frequency Display */}
              <div
                className="bg-black/60 px-4 py-2 rounded font-mono text-cyan-400 border border-cyan-500/30
                            shadow-[0_0_10px_rgba(6,182,212,0.3)] animate-pulse"
              >
                88.1 MHz
              </div>

              {/* Control Knobs */}
              <div className="flex gap-2">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900 to-purple-950 
                              border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]
                              hover:shadow-[0_0_20px_rgba(236,72,153,0.7)] transition-shadow duration-300"
                />
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-900 to-purple-950 
                              border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]
                              hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transition-shadow duration-300"
                />
              </div>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="flex gap-2 mt-4">
            {['Home', 'About', 'Blog', 'Contact'].map(item => (
              <button
                key={item}
                className="px-4 py-2 bg-black/40 text-cyan-400 rounded 
                          border border-cyan-500/30 hover:border-cyan-400
                          shadow-[0_0_10px_rgba(6,182,212,0.3)]
                          hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]
                          transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </header>

        {/* Radio Face / Main Content */}
        <main className="flex-1 bg-black/40 backdrop-blur-sm p-8">
          {/* Retrowave Grid Effect */}
          <div
            className="min-h-full rounded-lg p-6 relative overflow-hidden
                         before:absolute before:inset-0 
                         before:bg-[linear-gradient(transparent_1px,_#000_1px),linear-gradient(90deg,_transparent_1px,_#000_1px)]
                         before:bg-[size:20px_20px]
                         before:border-2 before:border-pink-500/30
                         before:[background-position:_center]
                         before:[transform:_perspective(500px)_rotateX(60deg)]
                         before:opacity-20"
          >
            <div
              className="relative bg-black/60 p-6 rounded-lg border border-cyan-500/30
                          shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              {children}
            </div>
          </div>
        </main>

        {/* Bottom Panel / Footer */}
        <footer
          className="p-4 bg-black/40 backdrop-blur-sm border-t-2 border-pink-500 rounded-b-lg
                          shadow-[0_0_15px_rgba(236,72,153,0.5)]"
        >
          <div className="flex justify-between items-center text-pink-400">
            {/* Input Jacks (Social Links) */}
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                <div
                  key={social}
                  className="flex items-center gap-2 hover:text-pink-300 transition-colors duration-300"
                >
                  <div
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500
                                shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                  />
                  <span>{social}</span>
                </div>
              ))}
            </div>

            {/* Model Info */}
            <div
              className="font-mono text-sm text-transparent bg-clip-text 
                          bg-gradient-to-r from-cyan-400 to-pink-500"
            >
              Model: XT-2024 • Serial: 001
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RadioLayout;
