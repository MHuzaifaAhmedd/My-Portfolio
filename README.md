# Huzaifa Ahmed - Professional Portfolio -- https://my-portfolio-tau-two-59.vercel.app/

A world-class, modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Static Export** - Optimized for performance with Next.js static export
- 🎨 **Modern Design** - Glassmorphism, gradients, and smooth animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Fast loading times and smooth interactions
- 🎭 **Advanced Animations** - Framer Motion animations throughout
- 🌓 **Dark/Light Mode** - Theme switching with smooth transitions
- ♿ **Accessible** - Built with accessibility in mind
- 🔍 **SEO Optimized** - Comprehensive meta tags and structured data

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Next Themes** - Theme management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

This will create a static export in the `out` directory.

### Customization

1. Update personal information in `data/portfolio.ts`
2. Modify social links in `lib/constants.ts`
3. Customize colors in `tailwind.config.ts`
4. Update metadata in `app/layout.tsx`

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── ...
├── data/               # Data files
│   └── portfolio.ts    # Portfolio data
├── lib/                # Utility functions
│   ├── animations.ts   # Animation variants
│   ├── constants.ts    # App constants
│   └── utils.ts        # Helper functions
└── public/             # Static assets
```

## Deployment

The static export can be deployed to any static hosting service:

- **Vercel** - Recommended for Next.js
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting
- **AWS S3** - Scalable hosting
- **Any CDN** - For maximum performance

## License

This project is open source and available under the MIT License.

