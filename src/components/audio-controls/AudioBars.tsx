import React, { useMemo } from 'react';

interface AudioBarsProps {
  isPlaying: boolean;
}

export function AudioBars({ isPlaying }: AudioBarsProps) {
  // Generate random animations and delays once on mount
  const barConfigs = useMemo(() => {
    return [...Array(16)].map(() => ({
      animation: `animate-wave-${Math.floor(Math.random() * 3) + 1}`,
      delay: Math.random() * 0.5,
      baseHeight: Math.random() * 30 + 70,
    }));
  }, []);

  return (
    <div className="flex items-center gap-[2px] h-16 px-4">
      {barConfigs.map((config, i) => (
        <div
          key={i}
          className={`w-[2px] bg-neutral-500 rounded-full transition-all duration-75 ${
            isPlaying ? config.animation : ''
          }`}
          style={{
            height: isPlaying ? `${config.baseHeight}%` : '50%',
            transformOrigin: 'center',
            animationPlayState: isPlaying ? 'running' : 'paused',
            animationDelay: `${config.delay}s`,
            opacity: isPlaying ? 0.9 : 0.3,
          }}
        />
      ))}
    </div>
  );
}
