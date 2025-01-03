'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useClerk, useUser } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  const handleSettings = () => {
    router.push('/settings');
  };

  return (
    <header
      className={`flex items-center w-full h-16 bg-white px-8 relative ${pathname === '/feed' ? 'border-2 border-neutral-900' : ''}`}
    >
      <Button variant="ghost" asChild className="p-0">
        <Link
          href="/"
          style={{ fontSize: '24px', lineHeight: '24px' }}
          className="text-neutral-900 font-mono font-bold"
        >
          voxproc<span className="animate-[blink_1s_steps(1)_infinite]">_</span>
        </Link>
      </Button>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Button variant="ghost" asChild>
          <Link
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '18px', lineHeight: '24px' }}
            className="text-neutral-900 font-mono"
          >
            Blog
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        {isSignedIn && (
          <Button variant="ghost" size="icon" className="text-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-neutral-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {isSignedIn ? (
              <>
                <DropdownMenuItem
                  onClick={handleSettings}
                  className="font-mono"
                >
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="font-mono text-red-600"
                >
                  Sign Out
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem onClick={handleSignIn} className="font-mono">
                Sign In
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
