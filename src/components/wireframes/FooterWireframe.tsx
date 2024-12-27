import React, { useState, useEffect } from 'react';
import {
  MusicalNoteIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  StopIcon,
  SpeakerWaveIcon as VolumeIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const FooterWireframe = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setTime] = useState(0);

  // Animation loop for voice meter
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTime(Date.now());
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <>
      <footer className="h-36 bg-zinc-900/80 backdrop-blur-sm fixed bottom-0 left-0 right-0">
        <div className="h-full px-8 flex items-center">
          {/* Now Playing Info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
              <MusicalNoteIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col gap-2">
              {/* Voice Meter */}
              <div className="flex gap-1 h-4 items-end">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 bg-emerald-400/80 rounded-full transition-all duration-75 ${
                      isPlaying ? '' : 'h-0.5'
                    }`}
                    style={{
                      height: isPlaying
                        ? `${Math.max(0.2, Math.random() * 1)}rem`
                        : '0.125rem',
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="text-zinc-100">Currently Reading</div>
                <div className="text-zinc-500 text-sm">Tech Twitter Feed</div>
              </div>
            </div>
          </div>

          {/* Progress Bar and Controls Group */}
          <div className="flex-1 flex flex-col gap-4 max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="flex items-center gap-2 w-full">
              <div className="text-zinc-500 text-sm">0:00</div>
              <div className="flex-1 h-1 bg-zinc-800 rounded-full">
                <div className="w-1/3 h-full bg-emerald-400 rounded-full"></div>
              </div>
              <div className="text-zinc-500 text-sm">1:30</div>
            </div>

            {/* Center Controls */}
            <div className="flex items-center justify-center gap-4">
              <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                <BackwardIcon className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                <StopIcon className="w-5 h-5" />
              </button>

              <button
                className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <PauseIcon className="w-5 h-5" />
                ) : (
                  <PlayIcon className="w-5 h-5" />
                )}
              </button>

              <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                <ForwardIcon className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:text-emerald-400 transition-colors">
                  <VolumeIcon className="w-5 h-5" />
                </button>
                <input
                  type="range"
                  className="w-24 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-2
                         [&::-webkit-slider-thumb]:h-2
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:bg-emerald-400"
                  min="0"
                  max="100"
                  defaultValue="75"
                />
              </div>
            </div>
          </div>

          {/* Empty Right Section */}
          <div className="w-[200px] flex flex-col gap-2 justify-center">
            {/* Voice Selector and Settings */}
            <div className="flex justify-end items-center">
              <button
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
                aria-label="Narrator settings"
              >
                <Cog6ToothIcon className="w-5 h-5" />
              </button>
              <select
                className="bg-zinc-800 text-zinc-400 rounded-lg px-2 py-1 text-sm hover:text-emerald-400 transition-colors w-36 ml-2"
                defaultValue="voice1"
              >
                <option value="voice1">Voice 1</option>
                <option value="voice2">Voice 2</option>
                <option value="voice3">Voice 3</option>
              </select>
            </div>

            {/* Speed Control */}
            <div className="flex justify-end">
              <select
                className="bg-zinc-800 text-zinc-400 rounded-lg px-2 py-1 text-sm hover:text-emerald-400 transition-colors w-36"
                defaultValue="1.0"
              >
                <option value="0.75">0.75x</option>
                <option value="1.0">1.0x</option>
                <option value="1.5">1.5x</option>
                <option value="2.0">2.0x</option>
              </select>
            </div>

            {/* Broadcast Rate */}
            <div className="flex justify-end">
              <select
                className="bg-zinc-800 text-zinc-400 rounded-lg px-2 py-1 text-sm hover:text-emerald-400 transition-colors w-36"
                defaultValue="continuous"
              >
                <option value="continuous">Continuous</option>
                <option value="custom">Custom</option>
                <option value="paused">Paused</option>
              </select>
            </div>
          </div>
        </div>
      </footer>

      {/* Spacer for footer */}
      <div className="h-24"></div>
    </>
  );
};

export default FooterWireframe;
