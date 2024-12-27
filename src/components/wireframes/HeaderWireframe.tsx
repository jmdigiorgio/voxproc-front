import React from 'react';
import {
  MoonIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const HeaderWireframe = () => {
  return (
    <header className="h-16 sticky top-0 z-50 bg-zinc-950">
      <div className="h-full flex items-center justify-between px-5">
        {/* Logo */}
        <div className="text-2xl tracking-tighter">
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-400/90 to-emerald-400/70 bg-clip-text text-transparent font-semibold">
            voxproc
          </span>
          <span className="text-emerald-400/30 animate-[blink_1s_steps(1)_infinite] ml-0.5 -mr-1">
            _
          </span>
        </div>

        {/* Primary Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button className="text-emerald-400 hover:text-emerald-300 transition-colors tracking-tight">
            Feed
          </button>
          <button className="text-zinc-400 hover:text-emerald-400 transition-colors tracking-tight">
            Explore
          </button>
          <button className="text-zinc-400 hover:text-emerald-400 transition-colors tracking-tight">
            Narrator
          </button>
        </nav>

        {/* User Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
            aria-label="Toggle theme"
          >
            <MoonIcon className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <button
            className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
            aria-label="Notifications"
          >
            <BellIcon className="w-5 h-5" />
          </button>

          {/* Profile */}
          <button
            className="p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
            aria-label="User profile"
          >
            <UserCircleIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderWireframe;
