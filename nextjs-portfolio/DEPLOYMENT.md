# Deployment Guide

This guide covers deploying your Next.js portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `nextjs-portfolio` (or `.` if this is your root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Click "Deploy"

Your site will be live in a few minutes! 🎉

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain and follow the DNS configuration instructions

## 📦 Netlify

### Steps:

1. Push your code to GitHub (see Vercel instructions above)

2. Go to [Netlify](https://netlify.com) and sign in

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Configure build settings:
   - **Base directory**: `nextjs-portfolio`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

6. Click "Deploy site"

## 🐳 Docker

Build and run with Docker:

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

Create a `Dockerfile` in your project root:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

## 📡 GitHub Pages

GitHub Pages doesn't support Next.js server-side features, but you can deploy a static export:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build and export:
```bash
npm run build
```

3. Deploy the `out` directory to GitHub Pages

## 🔐 Environment Variables

For production deployments, set these environment variables in your hosting platform:

- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `NEXT_PUBLIC_EMAIL_SERVICE_ID`: Email service configuration (if using)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics ID (optional)

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information (name, email, links)
- [ ] Add your resume PDF to `/public`
- [ ] Update social media links
- [ ] Configure email service for contact form
- [ ] Test dark/light mode thoroughly
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (optional)
- [ ] Test all links and functionality

## 🔧 Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Images Not Loading

- Ensure images are in `/public` directory
- Check image paths in components
- Configure `next.config.ts` for remote images

### Theme Not Working

- Verify `next-themes` is properly configured
- Check if `suppressHydrationWarning` is in `<html>` tag

## 📚 Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
