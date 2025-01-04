import React from 'react';
import { SpeakerXMarkIcon } from '@heroicons/react/24/outline';

interface StopButtonProps {
  onStop: () => void;
  isPlaying: boolean;
}

export function StopButton({ onStop, isPlaying }: StopButtonProps) {
  return (
    <div className="relative">
      {!isPlaying && (
        <div className="absolute inset-0 border border-neutral-900 rounded-lg animate-pulse-border pointer-events-none" />
      )}
      <button
        onClick={onStop}
        className="w-16 h-16 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <SpeakerXMarkIcon className="w-8 h-8 text-neutral-900 transform scale-x-[-1]" />
      </button>
    </div>
  );
}
