import React, { useState, useRef } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';

export function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const notificationRef = useRef<HTMLAudioElement>(null);
  const audioPostRef = useRef<HTMLAudioElement>(null);

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
    <>
      <button
        onClick={handleClick}
        className="w-16 h-16 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <SpeakerWaveIcon className="w-8 h-8 text-neutral-900" />
      </button>
      <audio ref={notificationRef} src="/audio/sample-notification.mp3" />
      <audio ref={audioPostRef} src="/audio/sample-audio-post.mp3" />
    </>
  );
}
