# ⚡ Quick Fix for Vercel Deployment

## 🎯 The Problem
Vercel is trying to build from the root directory, but your Next.js app is in `/nextjs-portfolio/`

## ✅ Solution Applied

I've added these files to fix the Node.js version AND directory issues:

1. **Root `.nvmrc`** - Node.js 22
2. **Root `.node-version`** - Node.js 22  
3. **Root `vercel.json`** - Points to nextjs-portfolio subdirectory

## 🚀 Choose One Option:

### **Option A: Use Vercel Dashboard (Easiest)**

1. Go to your project on Vercel
2. Settings → General
3. **Root Directory**: Set to `nextjs-portfolio`
4. **Node.js Version**: Set to `22.x`
5. Save and redeploy

### **Option B: Use Root vercel.json (Already Done!)**

Just push the changes:
```bash
cd /workspace
git add .
git commit -m "Fix: Configure Vercel for Node.js 22 and subdirectory build"
git push
```

Then Vercel will automatically:
- Use Node.js 22
- Build from `nextjs-portfolio` directory
- Deploy successfully! 🎉

---

## 📝 What Changed

Files added/updated:
- `/workspace/.nvmrc` ✅
- `/workspace/.node-version` ✅
- `/workspace/vercel.json` ✅
- `/workspace/nextjs-portfolio/.nvmrc` ✅
- `/workspace/nextjs-portfolio/package.json` (added engines field) ✅
- `/workspace/nextjs-portfolio/vercel.json` ✅

---

## 🎯 Expected Result

Next deployment will show:
```
✓ Using Node.js 22.x
✓ Installing dependencies in nextjs-portfolio
✓ Building Next.js application
✓ Deployment successful!
```

---

**Your deployment should work now! Just commit and push these changes.** 🚀
