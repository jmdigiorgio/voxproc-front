import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/feed',
    '/feed/(.*)',
    '/settings',
    '/settings/(.*)',
    '/user',
    '/user/(.*)',
    '/api/(.*)',
  ],
};
