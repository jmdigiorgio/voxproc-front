# Repository Setup Guide

This document outlines the complete setup process for a new Next.js project with all necessary tooling and configurations.

## Initial Setup

1. Create a new Next.js project with TypeScript:
```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

## Git Setup

1. Initialize git repository (if not already done):
```bash
git init
```

2. Create `.gitignore` with standard Next.js ignores:
```
# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Commit Linting Setup

1. Install commitlint and its conventional config:
```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

2. Create `commitlint.config.cjs`:
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation
        'style',    // Formatting, missing semi colons, etc
        'refactor', // Code change that neither fixes a bug or adds a feature
        'test',     // Adding tests
        'chore',    // Maintain
        'perf',     // Performance improvements
        'revert',   // Revert to a commit
        'ci',       // CI/CD related changes
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
```

## Husky Setup

1. Install Husky for git hooks:
```bash
npm install --save-dev husky
```

2. Initialize Husky:
```bash
npx husky install
```

3. Add Husky install to package.json scripts:
```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

4. Add commit-msg hook for commitlint:
```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'
```

## Testing Setup

1. Install Jest and related dependencies:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

2. Create `jest.config.ts`:
```typescript
import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
```

3. Create `jest.setup.ts`:
```typescript
import '@testing-library/jest-dom';
```

4. Add test script to package.json:
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

## Linting Setup

1. Install ESLint and related plugins (some come with Next.js by default):
```bash
npm install --save-dev eslint-config-prettier
```

2. Configure ESLint in `.eslintrc.json`:
```json
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ]
}
```

## Pre-commit Hooks

1. Install lint-staged:
```bash
npm install --save-dev lint-staged
```

2. Add pre-commit hook:
```bash
npx husky add .husky/pre-commit "npm run lint-staged"
```

3. Add lint-staged configuration to package.json:
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## Environment Variables

1. Create `.env.example`:
```
# API Keys
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Documentation Structure

Create basic documentation files:
```
docs/
├── tech-stack.md
├── product.md
└── repo-setup.md
```

## Final Steps

1. Install all dependencies:
```bash
npm install
```

2. Verify setup:
```bash
git commit -m "chore: Initial repository setup"
```

This should run through all the hooks and checks successfully.

## Commit Message Format

Follow the conventional commits format:
- Format: `type: Subject in sentence case`
- Types: feat, fix, docs, style, refactor, test, chore, perf, revert, ci
- Example: `feat: Add user authentication`

## Common Commands

- Run development server: `npm run dev`
- Run tests: `npm test`
- Run linting: `npm run lint`
- Build production: `npm run build` 