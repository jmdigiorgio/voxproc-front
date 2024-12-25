# Technical Stack

## Core Technologies

### Next.js 14

- **App Router**: Leveraging the latest Next.js features for routing and layouts
- **Server Components**: Optimizing performance with server-side rendering
- **API Routes**: Handling backend functionality within the same application
- **Edge Runtime**: Future capability for global deployment
- **TypeScript**: Type safety and better developer experience

### Tailwind CSS

- **Utility-First CSS**: Rapid UI development with minimal custom CSS
- **JIT Compiler**: Optimized production builds
- **Custom Theming**: Design system implementation
- **Dark Mode**: Built-in dark mode support
- **Responsive Design**: Mobile-first approach for future expansion

### Radix UI

- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Unstyled Components**: Foundation for custom design system
- **State Management**: Handling complex component states
- **Focus Management**: Proper keyboard navigation support
- **Composition API**: Flexible component customization

### shadcn/ui

- **Component Library**: Built on top of Radix UI
- **Tailwind Integration**: Styled using our Tailwind configuration
- **Customization**: Own and modify all component code
- **Modern Design**: Clean, professional aesthetic
- **TypeScript**: Full type safety

## Architecture Decisions

### 1. Frontend Architecture

- **Component Structure**:

  ```code
  src/
    components/
      ui/          # shadcn/ui components
      features/    # Feature-specific components
      layouts/     # Layout components
      audio/       # Audio-specific components
  ```

### 2. State Management

- React Context for global state
- React Query for API state management
- Local state for component-specific logic

### 3. Audio Processing

- Web Audio API for playback
- Audio worklets for background processing
- MediaSession API for media controls

### 4. API Integration

- Custom hooks for Bluesky API
- Axios for HTTP requests
- React Query for caching and state

### 5. Performance Optimizations

- Server Components where possible
- Client Components for interactive features
- Dynamic imports for code splitting
- Asset optimization with Next.js

## Development Workflow

### 1. Development Environment

#### Code Quality Tools

1. **ESLint Configuration**

   ```javascript
   // .eslintrc.js
   module.exports = {
     extends: [
       "next/core-web-vitals",
       "plugin:@typescript-eslint/recommended",
       "plugin:react-hooks/recommended",
       "plugin:jsx-a11y/recommended",
       "prettier"
     ],
     plugins: [
       "@typescript-eslint",
       "jsx-a11y",
       "react-hooks",
       "prettier"
     ],
     rules: {
       // React specific
       "react-hooks/rules-of-hooks": "error",
       "react-hooks/exhaustive-deps": "warn",
       
       // TypeScript
       "@typescript-eslint/no-unused-vars": ["error"],
       "@typescript-eslint/explicit-function-return-type": ["warn"],
       
       // Accessibility
       "jsx-a11y/media-has-caption": "off", // Due to our audio nature
       
       // General
       "no-console": ["warn", { allow: ["warn", "error"] }],
       "prettier/prettier": "error"
     }
   }
   ```

2. **Prettier Configuration**

   ```javascript
   // .prettierrc
   {
     "semi": true,
     "trailingComma": "es5",
     "singleQuote": true,
     "printWidth": 80,
     "tabWidth": 2,
     "useTabs": false
   }
   ```

3. **TypeScript Strict Mode**

   ```javascript
   // tsconfig.json strict checks
   {
     "compilerOptions": {
       "strict": true,
       "noImplicitAny": true,
       "strictNullChecks": true,
       "strictFunctionTypes": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true
     }
   }
   ```

4. **Pre-commit Hooks** (using husky)

   ```bash
   # .husky/pre-commit
   #!/bin/sh
   . "$(dirname "$0")/_/husky.sh"

   npm run lint-staged
   ```

   ```javascript
   // package.json
   {
     "lint-staged": {
       "*.{ts,tsx}": [
         "eslint --fix",
         "prettier --write"
       ]
     }
   }
   ```

5. **VS Code Settings**'

   ```javascript
   // .vscode/settings.json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "typescript.tsdk": "node_modules/typescript/lib"
   }
   ```

### 2. Conventional Commits

We follow the Conventional Commits specification for clear and structured commit messages:

- **feat:** New feature

  ```code
  feat: add audio playback controls
  ```

- **fix:** Bug fix

  ```code
  fix: resolve audio stuttering in background
  ```

- **docs:** Documentation changes

  ```code
  docs: update API integration guide
  ```

- **style:** Code style changes (formatting, semicolons, etc)

  ```code
  style: format audio component files
  ```

- **refactor:** Code changes that neither fix bugs nor add features

  ```code
  refactor: restructure audio processing logic
  ```

- **perf:** Performance improvements

  ```code
  perf: optimize audio buffer handling
  ```

- **test:** Adding or modifying tests

  ```code
  test: add unit tests for audio controls
  ```

- **chore:** Changes to build process or auxiliary tools

  ```code
  chore: update dependency versions
  ```

Commit messages should be structured as:

```code
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Example:

```code
feat(audio): add voice selection dropdown

- Add voice selection component
- Integrate with text-to-speech API
- Update settings interface

Closes #123
```

### 3. Build Process

- Next.js production build
- Tailwind CSS purging
- TypeScript compilation
- Bundle optimization

### 4. Deployment

- Vercel for hosting
- Edge functions for global distribution
- Automated deployments from main branch

## Security Considerations

### 1. Authentication

- OAuth flow for Bluesky
- Secure token storage
- CSRF protection

### 2. Data Protection

- Environment variables for secrets
- Input sanitization
- XSS prevention

## Future Technical Considerations

### 1. Scaling

- Edge caching strategies
- Audio processing optimization
- Database integration (if needed)

### 2. Mobile Support

- Progressive Web App capabilities
- Mobile-specific optimizations
- Touch interaction support

### 3. Monitoring

- Error tracking
- Performance monitoring
- Usage analytics

## Development Guidelines

### 1. Component Development

```typescript
// Example component structure
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FeatureProps {
  // Strong typing for props
}

export function FeatureComponent({ ...props }: FeatureProps) {
  // Implementation
}
```

### 2. Styling Approach

```typescript
// Combining Tailwind with shadcn/ui
<div className={cn(
  "flex items-center",
  "p-4 space-x-2",
  className
)}>
  <Button variant="ghost">
    {/* Component content */}
  </Button>
</div>
```

### 3. State Management

```typescript
// Example custom hook
export function useAudioState() {
  // Audio-specific state management
}
```
