'use client';

import { useUser } from '@clerk/nextjs';
import { Header } from './Header';
import { DevHeader } from './DevHeader';
import { AudioPlayer } from './AudioPlayer';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoaded && isSignedIn && pathname === '/') {
      router.replace('/feed');
    }
  }, [isLoaded, isSignedIn, pathname, router]);

  // Show loading state during initial auth check or redirect
  if (!isLoaded || (isLoaded && isSignedIn && pathname === '/')) {
    return (
      <>
        <Header />
        <DevHeader />
        <main className="pt-28">
          <div className="flex items-center justify-center min-h-[calc(100vh-7rem)]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-900" />
          </div>
        </main>
      </>
    );
  }

  // Show content once loaded
  return (
    <>
      <Header />
      {pathname === '/feed' && <DevHeader />}
      <main className={pathname === '/feed' ? '' : 'pt-16 pb-16'}>
        {children}
      </main>
      {isSignedIn && <AudioPlayer />}
    </>
  );
}
