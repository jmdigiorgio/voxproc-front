import React from 'react';

interface AudioBarsProps {
  isPlaying: boolean;
}

export function AudioBars({ isPlaying }: AudioBarsProps) {
  return (
    <div className="flex items-center gap-[2px] h-16 px-8">
      {[...Array(32)].map((_, i) => (
        <div
          key={i}
          className={`w-1 bg-neutral-900 rounded-full transition-all duration-75 ${
            isPlaying &&
            (i % 3 === 0
              ? 'animate-wave-1'
              : i % 3 === 1
                ? 'animate-wave-2'
                : 'animate-wave-3')
          }`}
          style={{
            height: isPlaying ? '100%' : '50%',
            transformOrigin: 'center',
            animationPlayState: isPlaying ? 'running' : 'paused',
            animationDelay: `${i * 0.1}s`,
            opacity: isPlaying ? 0.9 : 0.3,
          }}
        />
      ))}
    </div>
  );
}
