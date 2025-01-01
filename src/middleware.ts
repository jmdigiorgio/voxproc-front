import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: ['/feed/:path*', '/dashboard/:path*', '/api/:path*'],
};
