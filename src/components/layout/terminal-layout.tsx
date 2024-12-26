import React from 'react';

const TerminalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 relative crt">
      {/* Terminal Window */}
      <div
        className="max-w-6xl mx-auto min-h-screen border border-green-500/50 rounded-md
                    shadow-[0_0_10px_rgba(34,197,94,0.2)] backdrop-blur relative"
      >
        {/* Title Bar */}
        <div className="border-b border-green-500/50 p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Terminal Controls */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 text-sm opacity-80">
              xtelegraph@terminal:~
            </span>
          </div>
          <div className="text-sm opacity-60">Connected - 88.1 MHz</div>
        </div>

        {/* Terminal Header */}
        <header className="p-4 border-b border-green-500/20">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-xl">$</span>
              <nav className="flex gap-4">
                {['home', 'about', 'blog', 'contact'].map(item => (
                  <button
                    key={item}
                    className="text-green-500/80 hover:text-green-400 
                             hover:underline underline-offset-4 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-60">
              <span>v1.0.0</span>
              <span className="w-2 h-4 bg-green-500 animate-pulse" />
            </div>
          </div>
        </header>

        {/* Main Terminal Content */}
        <main className="p-6">
          <div className="space-y-1 mb-6">
            <div className="opacity-60"># Welcome to XTelegraph Terminal</div>
            <div className="opacity-60">
              # Type 'help' for available commands
            </div>
          </div>
          <div className="relative">{children}</div>
        </main>

        {/* Terminal Footer */}
        <footer className="border-t border-green-500/20 p-4 mt-auto">
          <div className="flex justify-between items-center text-sm opacity-60">
            <div className="flex gap-4">
              {['github', 'twitter', 'linkedin'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-green-400 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span>System Status: Online</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TerminalLayout;
