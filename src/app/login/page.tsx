'use client';

import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center font-mono">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto font-mono',
            card: 'bg-white',
            headerTitle: 'text-neutral-900',
            headerSubtitle: 'text-neutral-600',
            socialButtonsBlockButton: 'text-neutral-900',
            formButtonPrimary: 'bg-neutral-900 hover:bg-neutral-800',
            footerActionLink: 'text-neutral-900 hover:text-neutral-700',
            formFieldLabel: 'font-mono',
            formFieldInput: 'font-mono',
            formFieldInputShowPasswordButton: 'font-mono',
            footerAction: 'font-mono',
            card__main: 'font-mono',
            dividerRow: 'font-mono',
            dividerText: 'font-mono',
            socialButtonsBlockButtonText: 'font-mono',
          },
        }}
        routing="path"
        path="/login"
      />
    </div>
  );
}
