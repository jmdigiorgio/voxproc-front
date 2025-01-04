import React, { useState, useRef } from 'react';
import { PlayButton } from '@/components/audio-controls/PlayButton';
import { StopButton } from '@/components/audio-controls/StopButton';
import { AudioBars } from '@/components/audio-controls/AudioBars';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const notificationRef = useRef<HTMLAudioElement>(null);
  const audioPostRef = useRef<HTMLAudioElement>(null);

  const handleStop = () => {
    if (notificationRef.current) {
      notificationRef.current.pause();
      notificationRef.current.currentTime = 0;
    }
    if (audioPostRef.current) {
      audioPostRef.current.pause();
      audioPostRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsAnimating(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIsAnimating(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-40 bg-white border-t-2 border-neutral-900">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="flex items-center gap-2">
          <PlayButton
            isPlaying={isPlaying}
            setIsPlaying={handlePlay}
            notificationRef={notificationRef}
            audioPostRef={audioPostRef}
          />
          <AudioBars isPlaying={isAnimating} />
          <StopButton onStop={handleStop} isPlaying={isPlaying} />
        </div>
      </div>
      <audio ref={notificationRef} src="/audio/sample-notification.mp3" />
      <audio ref={audioPostRef} src="/audio/sample-audio-post.mp3" />
    </div>
  );
}
