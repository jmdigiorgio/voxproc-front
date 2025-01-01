'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/feed');
    }
  }, [isLoaded, isSignedIn, router]);

  if (isLoaded && !isSignedIn) {
    return (
      <div className="flex flex-col items-center px-4 font-mono">
        <div className="pt-6 pb-12 text-center">
          <div className="mb-24">
            <h1 className="text-6xl font-bold text-neutral-900 mb-6">
              Enough doomscrolling.
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Transform your social media into audio. Use your free time for
              more important things.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
            <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1),8px_8px_0px_0px_rgba(0,0,0,0.2),12px_12px_0px_0px_rgba(0,0,0,0.1)]">
              <CardHeader>
                <CardTitle className="text-lg">Audio Enhancement</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-600">
                Professional-grade noise reduction, EQ optimization, and clarity
                enhancement for crystal-clear audio.
              </CardContent>
            </Card>
            <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1),8px_8px_0px_0px_rgba(0,0,0,0.2),12px_12px_0px_0px_rgba(0,0,0,0.1)]">
              <CardHeader>
                <CardTitle className="text-lg">Quick Editing</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-600">
                Trim, split, and combine audio segments with precision. Perfect
                your content in minutes, not hours.
              </CardContent>
            </Card>
            <Card className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1),8px_8px_0px_0px_rgba(0,0,0,0.2),12px_12px_0px_0px_rgba(0,0,0,0.1)]">
              <CardHeader>
                <CardTitle className="text-lg">One-Click Publishing</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-600">
                Seamlessly share your enhanced audio across all major social
                platforms with a single click.
              </CardContent>
            </Card>
          </div>
          <div>
            <Button
              asChild
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 text-white"
            >
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen" />;
}
