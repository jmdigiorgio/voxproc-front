import React, { useState, useRef, useEffect } from 'react';
import { AudioBars } from '@/components/audio-controls/AudioBars';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([1]);
  const notificationRef = useRef<HTMLAudioElement>(null);
  const sampleAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const notification = notificationRef.current;
    if (notification) {
      notification.onended = () => {
        sampleAudioRef.current?.play();
      };
    }
    return () => {
      if (notification) {
        notification.onended = null;
      }
    };
  }, []);

  useEffect(() => {
    [notificationRef.current, sampleAudioRef.current].forEach(audio => {
      if (audio) {
        audio.volume = volume[0];
      }
    });
  }, [volume]);

  const handleTogglePlay = (checked: boolean) => {
    if (checked) {
      notificationRef.current?.play();
      setIsPlaying(true);
    } else {
      [notificationRef.current, sampleAudioRef.current].forEach(audio => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-40 bg-white border-t-2 border-neutral-900">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="flex items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Switch
                checked={isPlaying}
                onCheckedChange={handleTogglePlay}
                className={cn(
                  'data-[state=unchecked]:bg-red-600 data-[state=unchecked]:hover:bg-red-500',
                  'data-[state=checked]:bg-green-600 data-[state=checked]:hover:bg-green-500'
                )}
              />
              <AudioBars isPlaying={isPlaying} />
            </div>
            <div className="w-28">
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={1}
                step={0.1}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <audio ref={notificationRef} src="/audio/sample-notification.mp3" />
      <audio ref={sampleAudioRef} src="/audio/sample-audio-post.mp3" />
    </div>
  );
}
