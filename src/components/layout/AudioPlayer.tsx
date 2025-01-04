import React from 'react';
import { PlayButton } from '@/components/audio-controls/PlayButton';

export function AudioPlayer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-40 bg-white border-t-2 border-neutral-900 flex items-center justify-center">
      <PlayButton />
    </div>
  );
}
