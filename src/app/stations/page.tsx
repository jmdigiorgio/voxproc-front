import AudioTerminalLayout from '@/components/layout/audio-terminal-layout';

export default function StationsPage() {
  return (
    <AudioTerminalLayout>
      <div className="space-y-6">
        {/* Command Input */}
        <div className="flex items-center gap-2">
          <span className="text-green-500/80">$</span>
          <span className="typing-animation">station list --all</span>
        </div>

        {/* Station List */}
        <div className="pl-4 space-y-4">
          {[
            {
              name: 'Tech News Radio',
              frequency: '88.1',
              status: 'playing',
              listeners: 1337,
              tags: ['tech', 'news', 'programming'],
            },
            {
              name: 'Dev Talk FM',
              frequency: '90.5',
              status: 'online',
              listeners: 892,
              tags: ['development', 'interviews'],
            },
            {
              name: 'Code Beats',
              frequency: '92.3',
              status: 'online',
              listeners: 564,
              tags: ['coding', 'music', 'lofi'],
            },
          ].map((station, i) => (
            <div
              key={i}
              className="border border-green-500/20 rounded p-3 hover:bg-green-500/5 
                       transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="font-bold">{station.name}</span>
                    <span className="text-xs text-green-500/60">
                      {station.frequency} MHz
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {station.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 rounded-full bg-green-500/10 
                                 border border-green-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm">
                      {station.listeners} listening
                    </span>
                  </div>
                  {station.status === 'playing' && (
                    <div
                      className="text-xs px-2 py-1 rounded-full bg-green-500/20 
                                  border border-green-500 animate-pulse"
                    >
                      ON AIR
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Command Help */}
        <div className="pt-4 border-t border-green-500/20">
          <div className="text-sm text-green-500/60">Available commands:</div>
          <div className="pl-4 text-sm space-y-1 mt-2">
            <div>station list [--all|--favorites|--recent]</div>
            <div>station tune &lt;frequency&gt;</div>
            <div>station info &lt;name&gt;</div>
            <div>station favorite &lt;name&gt;</div>
          </div>
        </div>

        {/* Command Prompt */}
        <div className="flex items-center gap-2 pt-4">
          <span className="text-green-500/80">$</span>
          <span className="w-4 h-5 bg-green-500 animate-pulse" />
        </div>
      </div>
    </AudioTerminalLayout>
  );
}
