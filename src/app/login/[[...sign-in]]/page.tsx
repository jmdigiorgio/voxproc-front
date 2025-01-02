'use client';

import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-start justify-center pt-16 font-mono">
      <SignIn
        appearance={{
          layout: {
            socialButtonsVariant: 'iconButton',
            socialButtonsPlacement: 'bottom',
            termsPageUrl: 'https://voxproc.com/terms',
            privacyPageUrl: 'https://voxproc.com/privacy',
          },
          elements: {
            rootBox: 'mx-auto font-mono',
            card: 'bg-white shadow-none border border-neutral-200',
            headerTitle: 'text-neutral-900 text-xl',
            headerSubtitle: 'text-neutral-600',
            socialButtonsIconButton:
              'border-2 border-neutral-200 hover:border-neutral-400 hover:bg-white',
            socialButtonsBlockButton:
              'border-2 border-neutral-200 hover:border-neutral-400 hover:bg-white text-neutral-900',
            socialButtonsProviderIcon: 'w-5 h-5 text-neutral-900',
            formButtonPrimary:
              'bg-neutral-900 hover:bg-neutral-800 shadow-none normal-case font-normal',
            footerActionLink: 'text-neutral-900 hover:text-neutral-700',
            formFieldLabel: 'font-mono text-neutral-600',
            formFieldInput:
              'font-mono border-2 border-neutral-200 focus:border-neutral-400 focus:ring-0 bg-white',
            formFieldInputShowPasswordButton:
              'text-neutral-900 hover:text-neutral-700',
            footerAction: 'font-mono',
            dividerLine: 'bg-neutral-200',
            dividerText: 'font-mono text-neutral-600 bg-white',
            formFieldWarning: 'text-amber-500',
            formFieldError: 'text-red-500',
            alert: 'border-2 border-neutral-200 bg-neutral-50',
            alertText: 'text-neutral-600',
            identityPreviewText: 'text-neutral-600',
            identityPreviewEditButton:
              'text-neutral-900 hover:text-neutral-700',
            otpCodeFieldInput:
              'font-mono border-2 border-neutral-200 focus:border-neutral-400 focus:ring-0',
          },
        }}
      />
    </div>
  );
}
