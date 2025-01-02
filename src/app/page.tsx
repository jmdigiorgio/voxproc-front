'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center px-4 font-mono">
      <div className="pt-6 pb-12 text-center">
        <div className="mb-24 relative">
          <div className="absolute inset-0 -z-10 flex items-center justify-center w-screen left-1/2 -translate-x-1/2">
            <div className="flex gap-[2px] min-w-screen overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-transparent via-20% to-transparent to-80% z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-80% to-white to-100% z-10" />
              {[...Array(128)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-96 bg-neutral-900 rounded-full origin-center opacity-[0.075] ${
                    i % 3 === 0
                      ? 'animate-wave-1'
                      : i % 3 === 1
                        ? 'animate-wave-2'
                        : 'animate-wave-3'
                  }`}
                  style={{
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>
          <h1 className="text-6xl font-bold text-neutral-900 mb-6 relative">
            Enough doomscrolling 😵
          </h1>
          <p className="text-xl text-neutral-800 max-w-2xl mx-auto">
            Transform your social media into audio. Use your free time for more
            important things.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-24 animate-fade-in">
          <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1),8px_8px_0px_0px_rgba(0,0,0,0.2),12px_12px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1),12px_12px_0px_0px_rgba(0,0,0,0.2),16px_16px_0px_0px_rgba(0,0,0,0.1)] animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-lg text-center">Inform</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Your social feed converted into a seamless audio stream. Like a
              radio station, but it's stuff you care about.
            </CardContent>
          </Card>
          <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1),8px_8px_0px_0px_rgba(0,0,0,0.2),12px_12px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1),12px_12px_0px_0px_rgba(0,0,0,0.2),16px_16px_0px_0px_rgba(0,0,0,0.1)] animate-fade-in-up [animation-delay:200ms]">
            <CardHeader>
              <CardTitle className="text-lg text-center">Personalize</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Choose what you want to hear and when you want to hear it. Filter
              by topics and people.
            </CardContent>
          </Card>
          <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1),8px_8px_0px_0px_rgba(0,0,0,0.2),12px_12px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1),12px_12px_0px_0px_rgba(0,0,0,0.2),16px_16px_0px_0px_rgba(0,0,0,0.1)] animate-fade-in-up [animation-delay:400ms]">
            <CardHeader>
              <CardTitle className="text-lg text-center">Discover</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Find out what others are listening to. Find new voices and
              perspectives through the community.
            </CardContent>
          </Card>
          <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1),8px_8px_0px_0px_rgba(0,0,0,0.2),12px_12px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1),12px_12px_0px_0px_rgba(0,0,0,0.2),16px_16px_0px_0px_rgba(0,0,0,0.1)] animate-fade-in-up [animation-delay:600ms]">
            <CardHeader>
              <CardTitle className="text-lg text-center">Be Free</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-600">
              Keep up with your feed without the constant urge to check your
              phone. Free yourself from the scroll.
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Button
            asChild
            size="lg"
            className="bg-neutral-900 hover:bg-neutral-800 text-white transition-transform hover:scale-105"
          >
            <Link href="/login">
              Sign Up for&nbsp;<span className="font-bold">Free</span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-neutral-900 transition-transform hover:scale-105"
          >
            <Link href="/blog">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
