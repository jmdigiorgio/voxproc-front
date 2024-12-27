import React from 'react';
import {
  ChatBubbleLeftEllipsisIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import HeaderWireframe from './HeaderWireframe';
import FooterWireframe from './FooterWireframe';

const FeedWireframe = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-mono">
      <HeaderWireframe />

      {/* Body - Main content area */}
      <main className="flex-1 container mx-auto px-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="lg:w-2/3 space-y-8">
            {/* Current Post */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Current Post
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center">
                    <div className="w-6 h-6 text-emerald-400">
                      <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-200 tracking-tight">
                      @username
                    </div>
                    <div className="text-zinc-500 text-sm tracking-tight">
                      Just now
                    </div>
                  </div>
                </div>
                <p className="text-zinc-300 tracking-tight">
                  Post content will appear here...
                </p>
              </div>
            </section>

            {/* Post Queue */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Queue
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="p-4 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center">
                        <div className="w-4 h-4 text-emerald-400">
                          <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-zinc-400 tracking-tight">
                        @user{i}
                      </div>
                    </div>
                    <p className="text-zinc-500 text-sm tracking-tight">
                      Queued post preview...
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 space-y-8">
            {/* Current Station */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Current Station
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                  <MusicalNoteIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-zinc-200 tracking-tight">
                    Tech Twitter
                  </div>
                  <div className="text-zinc-500 text-sm tracking-tight">
                    42 posts in queue
                  </div>
                </div>
              </div>
            </section>

            {/* Station List */}
            <section className="bg-zinc-900 rounded-lg p-6">
              <h2 className="text-emerald-400 text-lg tracking-tight mb-4">
                Stations
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <button
                    key={i}
                    className="w-full p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                        <MusicalNoteIcon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-zinc-200 tracking-tight">
                          Station {i}
                        </div>
                        <div className="text-zinc-500 text-sm tracking-tight">
                          {10 * i} posts
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterWireframe />
    </div>
  );
};

export default FeedWireframe;
