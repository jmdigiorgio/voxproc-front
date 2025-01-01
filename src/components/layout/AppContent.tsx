'use client';

import { useUser } from '@clerk/nextjs';
import { Header } from './Header';
import { usePathname, useRouter } from 'next/navigation';

export function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Handle redirect if needed
  if (isLoaded && isSignedIn && pathname === '/') {
    router.replace('/feed');
    return (
      <>
        <Header />
        <main className="pt-16">
          <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-neutral-900" />
          </div>
        </main>
      </>
    );
  }

  // Show loading state only during initial auth check
  if (!isLoaded) {
    return (
      <>
        <Header />
        <main className="pt-16">
          <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
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
      <main className="pt-16">{children}</main>
    </>
  );
}
