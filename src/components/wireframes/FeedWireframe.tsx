import React from 'react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import HeaderWireframe from './HeaderWireframe';
import FooterWireframe from './FooterWireframe';

const FeedWireframe = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-mono">
      <HeaderWireframe />

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-5 py-8">
        <div className="flex gap-8">
          {/* Left Column - Feed Reel */}
          <div className="w-1/4">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 px-4 py-1 bg-zinc-900 rounded-lg">
                <button className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-400">
                  <Cog6ToothIcon className="w-4 h-4" />
                </button>
                <h2 className="text-zinc-400 text-lg tracking-tight">Queue</h2>
              </div>
            </div>
            <div className="space-y-4">
              {/* Previously Played */}
              <div className="p-4 bg-zinc-900/50 rounded-lg opacity-50">
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-3">
                  Previous
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <span className="text-zinc-400 text-sm font-bold">V</span>
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm font-medium mb-1">
                      @verge
                    </div>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      Microsoft completes Activision Blizzard acquisition...
                    </p>
                  </div>
                </div>
              </div>

              {/* Now Playing */}
              <div className="p-4 bg-zinc-900 rounded-lg border-2 border-emerald-400/20">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-emerald-400 text-xs uppercase tracking-wider">
                    Now Playing
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-400 text-sm font-bold">
                      T
                    </span>
                  </div>
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">
                      @techcrunch
                    </div>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      Apple announces new MacBook Pro models with
                      next-generation M3 chips...
                    </p>
                  </div>
                </div>
              </div>

              {/* Up Next */}
              <div className="p-4 bg-zinc-900/50 rounded-lg opacity-50">
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-3">
                  Up Next
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <span className="text-zinc-400 text-sm font-bold">N</span>
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm font-medium mb-1">
                      @newsbot
                    </div>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      Breaking: Major announcement in tech industry...
                    </p>
                  </div>
                </div>
              </div>

              {/* Show More Button */}
              <button className="w-full p-3 rounded-lg bg-zinc-900/50 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300 transition-colors text-sm">
                Show More
              </button>

              {/* Queue Length Indicator */}
              <div className="text-center text-zinc-500 text-sm">
                11 more in queue
              </div>
            </div>
          </div>

          {/* Center Column - Content Feed */}
          <div className="w-1/2 space-y-8">
            {/* Now Playing */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="group/tooltip relative">
                  <h2 className="text-emerald-400 text-lg tracking-tight">
                    Now Playing
                  </h2>
                  <div className="absolute hidden group-hover/tooltip:block w-64 p-2 bg-[rgb(0,0,0)] text-zinc-300 text-xs rounded-lg left-0 top-8 shadow-xl">
                    The post currently being read aloud or queued to be read
                    aloud next
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="group/tooltip relative">
                    <div className="text-zinc-500 text-sm">via Bluesky</div>
                    <div className="absolute hidden group-hover/tooltip:block w-64 p-2 bg-[rgb(0,0,0)] text-zinc-300 text-xs rounded-lg -left-[120px] top-8 shadow-xl">
                      The source of the post being read aloud
                    </div>
                  </div>
                  <div className="group/tooltip relative">
                    <button
                      className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-400"
                      aria-label="Close Now Playing"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                    <div className="absolute hidden group-hover/tooltip:block w-64 p-2 bg-[rgb(0,0,0)] text-zinc-300 text-xs rounded-lg -left-[120px] top-8 shadow-xl">
                      The user can close this component and Network Updates will
                      expand upward to fill the void
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {/* Author Info */}
                <div className="flex items-start gap-4">
                  <div className="group/tooltip relative">
                    <div className="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                      <span className="text-emerald-400 text-xl font-bold">
                        T
                      </span>
                    </div>
                    <div className="absolute hidden group-hover/tooltip:block w-64 p-2 bg-[rgb(0,0,0)] text-zinc-300 text-xs rounded-lg left-0 top-14 shadow-xl">
                      The avatar of the social media account whose post is being
                      read aloud
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="group/tooltip relative">
                        <div className="text-zinc-300 font-medium">
                          @techcrunch
                        </div>
                        <div className="absolute hidden group-hover/tooltip:block w-64 p-2 bg-[rgb(0,0,0)] text-zinc-300 text-xs rounded-lg left-0 top-6 shadow-xl">
                          The username of the social media account whose post is
                          being read aloud
                        </div>
                      </div>
                    </div>
                    <div className="text-zinc-500 text-sm">
                      <div className="group/tooltip relative inline-block">
                        <span>TechCrunch</span>
                        <div className="absolute hidden group-hover/tooltip:block w-64 p-2 bg-[rgb(0,0,0)] text-zinc-300 text-xs rounded-lg left-0 top-6 shadow-xl">
                          The station that the post belongs to
                        </div>
                      </div>
                      {' • '}
                      <div className="group/tooltip relative inline-block">
                        <span>5m ago</span>
                        <div className="absolute hidden group-hover/tooltip:block w-64 p-2 bg-[rgb(0,0,0)] text-zinc-300 text-xs rounded-lg right-0 top-6 shadow-xl">
                          How long ago the post was created on its respective
                          social media source
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-zinc-200 leading-relaxed">
                    Apple announces new MacBook Pro models with next-generation
                    M3 chips, promising up to 40% faster performance than the
                    previous generation. The new lineup includes 14-inch and
                    16-inch models, featuring improved GPU capabilities and
                    enhanced machine learning performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Network Updates Title */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 px-4 py-1 bg-zinc-900 rounded-lg">
                <button className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-400">
                  <Cog6ToothIcon className="w-4 h-4" />
                </button>
                <h2 className="text-zinc-400 text-lg tracking-tight">
                  Network Updates
                </h2>
              </div>
            </div>

            {/* Network Updates Content */}
            <section className="bg-zinc-900/50 rounded-lg p-6">
              <div className="space-y-4 max-h-[216px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-track]:bg-zinc-800/50 hover:[&::-webkit-scrollbar-thumb]:bg-zinc-600 pr-2">
                {/* Station Update */}
                <div className="group p-3 bg-zinc-800/50 rounded-lg relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-300 text-sm">
                          <span className="font-medium">@alex</span> created a
                          new station
                        </div>
                        <div className="text-zinc-600 text-sm mr-7">2m ago</div>
                      </div>
                      <div className="text-zinc-500 text-sm">
                        AI Research Daily
                      </div>
                    </div>
                  </div>
                </div>

                {/* Listening Update */}
                <div className="group p-3 bg-zinc-800/50 rounded-lg relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-300 text-sm">
                          <span className="font-medium">@sarah</span> is
                          listening to
                        </div>
                        <div className="text-zinc-600 text-sm mr-7">5m ago</div>
                      </div>
                      <div className="text-zinc-500 text-sm">Tech News</div>
                    </div>
                  </div>
                </div>

                {/* Station Change */}
                <div className="group p-3 bg-zinc-800/50 rounded-lg relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm font-bold">D</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-300 text-sm">
                          <span className="font-medium">@david</span> added new
                          sources to
                        </div>
                        <div className="text-zinc-600 text-sm mr-7">
                          12m ago
                        </div>
                      </div>
                      <div className="text-zinc-500 text-sm">
                        Developer News • @github, @gitlab
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Station Collaboration */}
                <div className="group p-3 bg-zinc-800/50 rounded-lg relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm font-bold">M</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-300 text-sm">
                          <span className="font-medium">@maria</span> invited
                          you to collaborate on
                        </div>
                        <div className="text-zinc-600 text-sm mr-7">
                          15m ago
                        </div>
                      </div>
                      <div className="text-zinc-500 text-sm">
                        Startup News • @producthunt, @ycombinator
                      </div>
                    </div>
                  </div>
                </div>

                {/* Source Addition Update */}
                <div className="group p-3 bg-zinc-800/50 rounded-lg relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm font-bold">J</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-300 text-sm">
                          <span className="font-medium">@james</span> added
                          sources to your station
                        </div>
                        <div className="text-zinc-600 text-sm mr-7">
                          20m ago
                        </div>
                      </div>
                      <div className="text-zinc-500 text-sm">
                        AI Research Daily • @huggingface, @deepmind
                      </div>
                    </div>
                  </div>
                </div>

                {/* Station Merge Update */}
                <div className="group p-3 bg-zinc-800/50 rounded-lg relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm font-bold">E</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-300 text-sm">
                          <span className="font-medium">@emma</span> merged
                          their station with
                        </div>
                        <div className="text-zinc-600 text-sm mr-7">
                          25m ago
                        </div>
                      </div>
                      <div className="text-zinc-500 text-sm">
                        Tech News • Added @cnet, @engadget
                      </div>
                    </div>
                  </div>
                </div>

                {/* Station Theme Update */}
                <div className="group p-3 bg-zinc-800/50 rounded-lg relative">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <span className="text-zinc-400 text-sm font-bold">R</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-zinc-300 text-sm">
                          <span className="font-medium">@ryan</span> updated
                          station theme
                        </div>
                        <div className="text-zinc-600 text-sm mr-7">
                          30m ago
                        </div>
                      </div>
                      <div className="text-zinc-500 text-sm">
                        Developer News • New dark theme
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Station Management */}
          <div className="w-1/4">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 px-4 py-1 bg-zinc-900 rounded-lg">
                <button className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-zinc-400">
                  <Cog6ToothIcon className="w-4 h-4" />
                </button>
                <h2 className="text-zinc-400 text-lg tracking-tight">
                  Stations
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {/* Previously Playing Station */}
              <div className="p-4 bg-zinc-900/50 rounded-lg opacity-50">
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-3">
                  Previous
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <span className="text-zinc-400 text-sm font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm font-medium mb-1">
                      AI News
                    </div>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      @openai, @anthropic, @huggingface
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Station */}
              <div className="p-4 bg-zinc-900 rounded-lg border-2 border-emerald-400/20">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-emerald-400 text-xs uppercase tracking-wider">
                    Current Station
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-400 text-sm font-bold">
                      TN
                    </span>
                  </div>
                  <div>
                    <div className="text-zinc-200 text-sm font-medium mb-1">
                      Tech News
                    </div>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      @techcrunch, @theverge, @wired
                    </p>
                  </div>
                </div>
              </div>

              {/* Pinned Stations */}
              <div className="p-4 bg-zinc-900/50 rounded-lg opacity-50">
                <div className="text-zinc-500 text-xs uppercase tracking-wider mb-3">
                  Pinned
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <span className="text-zinc-400 text-sm font-bold">D</span>
                  </div>
                  <div>
                    <div className="text-zinc-400 text-sm font-medium mb-1">
                      Dev Updates
                    </div>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      @github, @gitlab, @stackoverflow
                    </p>
                  </div>
                </div>
              </div>

              {/* Show More Button */}
              <button className="w-full p-3 rounded-lg bg-zinc-900/50 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300 transition-colors text-sm">
                Show More
              </button>

              {/* Station Count */}
              <div className="text-center text-zinc-500 text-sm">
                4 pinned stations
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterWireframe />
    </div>
  );
};

export default FeedWireframe;
