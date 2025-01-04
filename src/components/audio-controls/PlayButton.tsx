import React, { RefObject } from 'react';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';

interface PlayButtonProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  notificationRef: RefObject<HTMLAudioElement | null>;
  audioPostRef: RefObject<HTMLAudioElement | null>;
}

export function PlayButton({
  isPlaying,
  setIsPlaying,
  notificationRef,
  audioPostRef,
}: PlayButtonProps) {
  const handleClick = async () => {
    if (notificationRef.current && audioPostRef.current) {
      setIsPlaying(true);

      // Play notification sound first
      notificationRef.current.play();

      // Wait for notification to finish, then play the audio post
      notificationRef.current.onended = () => {
        audioPostRef.current?.play();
      };

      // Reset when audio post finishes
      audioPostRef.current.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  return (
    <div className="relative">
      {isPlaying && (
        <div className="absolute inset-0 border border-neutral-900 rounded-lg animate-pulse-border pointer-events-none" />
      )}
      <button
        onClick={handleClick}
        className="w-16 h-16 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <SpeakerWaveIcon className="w-8 h-8 text-neutral-900" />
      </button>
    </div>
  );
}
