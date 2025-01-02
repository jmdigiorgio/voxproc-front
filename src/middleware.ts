import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Base paths from src/middleware.ts
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    // Additional specific paths from root middleware.ts
    '/feed',
    '/feed/(.*)',
    '/settings',
    '/settings/(.*)',
    '/user',
    '/user/(.*)',
  ],
};
