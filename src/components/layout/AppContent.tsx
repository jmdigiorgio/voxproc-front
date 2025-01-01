'use client';

import { useUser } from '@clerk/nextjs';
import { Header } from './Header';
import { useEffect, useState } from 'react';

export function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useUser();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setShowContent(true);
    }

    // Fallback timeout in case auth state gets stuck
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isLoaded]);

  return (
    <>
      <Header />
      <main className="pt-16">
        {!showContent ? (
          <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-900" />
          </div>
        ) : (
          children
        )}
      </main>
    </>
  );
}
