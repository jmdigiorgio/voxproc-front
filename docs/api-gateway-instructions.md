# API Gateway Setup Instructions

## Project Setup

1. Create new directory and initialize:
```bash
mkdir voxproc-gateway
cd voxproc-gateway
npm init -y
```

2. Install core dependencies:
```bash
npm install express @clerk/clerk-sdk-node cors helmet express-rate-limit http-proxy-middleware dotenv
npm install --save-dev typescript @types/express @types/node ts-node-dev
```

3. Initialize TypeScript:
```bash
npx tsc --init
```

## Project Structure

Create the following structure:
```
voxproc-gateway/
├── src/
│   ├── middleware/
│   │   ├── auth.ts        # Clerk authentication
│   │   ├── validator.ts   # Request validation
│   │   └── proxy.ts       # Service proxying
│   ├── config/
│   │   ├── services.ts    # Service endpoints
│   │   └── env.ts         # Environment configuration
│   ├── routes/
│   │   ├── stream.ts      # Stream service routes
│   │   ├── settings.ts    # Settings service routes
│   │   └── community.ts   # Community service routes
│   └── app.ts             # Main application
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

## Implementation Steps

### 1. Environment Setup

Create `.env`:
```env
PORT=3000
CLERK_SECRET_KEY=your_clerk_secret
STREAM_SERVICE_URL=http://stream-service:3001
SETTINGS_SERVICE_URL=http://settings-service:3002
COMMUNITY_SERVICE_URL=http://community-service:3003
```

### 2. Service Configuration (src/config/services.ts)

```typescript
export const serviceConfig = {
  stream: {
    url: process.env.STREAM_SERVICE_URL,
    pathRewrite: {'^/api/stream': ''}
  },
  settings: {
    url: process.env.SETTINGS_SERVICE_URL,
    pathRewrite: {'^/api/settings': ''}
  },
  community: {
    url: process.env.COMMUNITY_SERVICE_URL,
    pathRewrite: {'^/api/community': ''}
  }
};
```

### 3. Middleware Implementation

#### Authentication (src/middleware/auth.ts)
```typescript
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

export const authMiddleware = ClerkExpressWithAuth({
  // Configure Clerk options
});
```

#### Request Validation (src/middleware/validator.ts)
```typescript
import { Request, Response, NextFunction } from 'express';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  // Implement request validation logic
  // Check required parameters, formats, etc.
  next();
};
```

#### Proxy Handler (src/middleware/proxy.ts)
```typescript
import { createProxyMiddleware } from 'http-proxy-middleware';
import { serviceConfig } from '../config/services';

export const createServiceProxy = (service: keyof typeof serviceConfig) => {
  return createProxyMiddleware({
    target: serviceConfig[service].url,
    changeOrigin: true,
    pathRewrite: serviceConfig[service].pathRewrite
  });
};
```

### 4. Main Application (src/app.ts)

```typescript
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { authMiddleware } from './middleware/auth';
import { validateRequest } from './middleware/validator';
import { createServiceProxy } from './middleware/proxy';

const app = express();

// Basic middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

// Routes with middleware chain
app.use('/api/stream', 
  authMiddleware,
  validateRequest,
  createServiceProxy('stream')
);

app.use('/api/settings',
  authMiddleware,
  validateRequest,
  createServiceProxy('settings')
);

app.use('/api/community',
  authMiddleware,
  validateRequest,
  createServiceProxy('community')
);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});
```

## Railway Deployment

1. Create Railway project:
```bash
railway init
```

2. Add environment variables in Railway dashboard

3. Configure deployment:
```bash
railway up
```

## Testing

1. Local testing:
```bash
npm run dev
```

2. Test endpoints:
```bash
curl http://localhost:3000/health
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:3000/api/stream/some-endpoint
```

## Monitoring & Maintenance

1. Add logging:
```bash
npm install winston
```

2. Set up monitoring:
- Railway provides basic monitoring
- Consider adding Sentry for error tracking
- Implement custom metrics collection

## Security Checklist

- [x] Authentication (Clerk)
- [x] Rate limiting
- [x] CORS configuration
- [x] Helmet security headers
- [x] Request validation
- [x] HTTPS (handled by Railway)
- [x] Environment variable protection

## Next Steps

1. Implement detailed request validation for each service
2. Add request/response logging
3. Set up error monitoring
4. Configure production security policies
5. Implement circuit breakers for service calls
6. Add API documentation (Swagger/OpenAPI) 