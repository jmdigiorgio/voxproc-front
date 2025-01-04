'use client';

import React from 'react';

export function DevHeader() {
  return (
    <div className="w-full h-6 bg-neutral-500 flex items-center justify-center px-8 font-mono text-sm text-neutral-50 border-b border-neutral-900">
      <div className="w-full overflow-hidden sm:text-center">
        <div className="whitespace-nowrap sm:animate-none animate-marquee">
          You're early! Not much here yet but feel free to watch us build.
        </div>
      </div>
    </div>
  );
}
