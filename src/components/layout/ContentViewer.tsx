'use client';

import React from 'react';

export function ContentViewer() {
  return (
    <div className="h-1/2 border-2 border-neutral-900">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 font-mono">
        <div>Content Viewport</div>
      </div>
    </div>
  );
}
