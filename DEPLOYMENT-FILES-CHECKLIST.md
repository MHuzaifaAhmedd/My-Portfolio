# Deployment Files Checklist

This document lists all files you need to send to another PC for deploying the Portfolio project.

## 📦 Essential Deployment Files

### 1. Docker & Nginx Configuration
- ✅ `Dockerfile` - Docker build configuration
- ✅ `nginx.conf` - Nginx config for serving static files inside container
- ✅ `nginx-portfolio.conf` - Nginx reverse proxy config for host server (domain setup)

### 2. Deployment Documentation
- ✅ `DEPLOYMENT-Portfolio.md` - Complete deployment instructions
- ✅ `DOMAIN-SETUP.md` - Domain and SSL setup guide

### 3. Project Configuration Files (Required for Build)
- ✅ `package.json` - Project dependencies and scripts
- ✅ `package-lock.json` - Locked dependency versions (ensures consistent builds)
- ✅ `next.config.js` - Next.js configuration
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tailwind.config.ts` - Tailwind CSS configuration
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `next-env.d.ts` - Next.js TypeScript environment types

### 4. Source Code Directories
- ✅ `app/` - Next.js app directory (all files and subdirectories)
  - `app/fonts/`
  - `app/globals.css`
  - `app/layout.tsx`
  - `app/page.tsx`
- ✅ `components/` - All React components
  - `About.tsx`
  - `Contact.tsx`
  - `Experience.tsx`
  - `Footer.tsx`
  - `Hero.tsx`
  - `HeroGsap.tsx`
  - `Navbar.tsx`
  - `ParticleBackground.tsx`
  - `Projects.tsx`
  - `ScrollProgress.tsx`
  - `SectionWrapper.tsx`
  - `Skills.tsx`
  - `ThemeProvider.tsx`
  - `ThemeToggle.tsx`
- ✅ `data/` - Data files
  - `portfolio.ts`
- ✅ `lib/` - Utility libraries
  - `animations.ts`
  - `constants.ts`
  - `utils.ts`
- ✅ `public/` - Static assets
  - `resume.pdf`
  - `robots.txt`
  - (any other static files)

### 5. Optional but Recommended
- ✅ `README.md` - Project documentation
- ✅ `.gitignore` - Git ignore rules (if exists)

## 🚫 Files to EXCLUDE (Don't Send)

- ❌ `node_modules/` - Will be installed via `npm ci`
- ❌ `out/` - Build output (will be generated during build)
- ❌ `.next/` - Next.js build cache (will be generated)
- ❌ `.env` or `.env.local` - Environment files (sensitive, should be created on target PC)
- ❌ `.git/` - Git repository (unless you want full history)

## 📋 Quick Copy Checklist

### Minimum Required Files (for Docker deployment):
```
✓ Dockerfile
✓ nginx.conf
✓ nginx-portfolio.conf
✓ DEPLOYMENT-Portfolio.md
✓ DOMAIN-SETUP.md
✓ package.json
✓ package-lock.json
✓ next.config.js
✓ tsconfig.json
✓ tailwind.config.ts
✓ postcss.config.js
✓ next-env.d.ts
✓ app/ (entire directory)
✓ components/ (entire directory)
✓ data/ (entire directory)
✓ lib/ (entire directory)
✓ public/ (entire directory)
```

## 🔐 Environment Variables Needed

The deployment uses build-time environment variables. You'll need:
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (optional, for contact form)
  - Current value: `94f0fdac-89ab-4338-8a79-89e988796468`

## 📝 Deployment Steps Summary

1. **Transfer all files** listed above to the target PC
2. **Install dependencies**: `npm ci` (or `npm install`)
3. **Build Docker image**: Follow instructions in `DEPLOYMENT-Portfolio.md`
4. **Deploy container**: Use commands from `DEPLOYMENT-Portfolio.md`
5. **Set up domain** (optional): Follow `DOMAIN-SETUP.md` if using a custom domain

## 💡 Tips

- **Compress before transfer**: Create a zip/tar archive of all required files
- **Verify structure**: Ensure directory structure matches the original
- **Check permissions**: Make sure files are readable on target PC
- **Test build locally first**: Run `npm ci && npm run build` to verify everything works

## 🔄 Alternative: Git Repository

If both PCs have Git access, you can:
1. Push to a Git repository (GitHub, GitLab, etc.)
2. Clone on target PC: `git clone <repository-url>`
3. Follow deployment steps from `DEPLOYMENT-Portfolio.md`

---

**Note**: The `DEPLOYMENT-Admin.md` file is for a different project (EMS Admin) and is NOT needed for Portfolio deployment.

