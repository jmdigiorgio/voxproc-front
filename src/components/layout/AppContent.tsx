'use client';

import { useUser } from '@clerk/nextjs';
import { Header } from './Header';

export function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useUser();

  return (
    <>
      <Header />
      <main className="pt-16">
        {!isLoaded ? (
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
