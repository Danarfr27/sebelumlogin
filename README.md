# AIVOLKS - AI Dashboard

Landing page for AIVOLKS AI Dashboard. Built with pure HTML, CSS, and JavaScript.

## Tech Stack

- HTML5
- CSS3 (custom properties, gradients, animations)
- JavaScript (vanilla, no frameworks)
- Canvas API (particle animation)
- Intersection Observer API (scroll animations)

## Quick Start

```bash
# Serve locally (any static server)
npx serve .
# or
python3 -m http.server 3000
# or just open index.html in browser
```

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Create GitHub repo:**
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aivolks-dashboard.git
git push -u origin main
```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up / Log in
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Click **Deploy**

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option 3: Manual Upload
1. Go to [vercel.com](https://vercel.com)
2. Drag and drop this folder directly

## File Structure

```
aivolks-site/
├── index.html          # Main HTML
├── css/
│   └── style.css       # All styles
├── js/
│   ├── particles.js    # Canvas particle animation
│   └── main.js         # Scroll, nav, interactions
├── .gitignore
├── vercel.json
└── README.md
```

## Features

- Particle network animation (Canvas API)
- Scroll reveal animations (IntersectionObserver)
- Glassmorphism header on scroll
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Mobile hamburger menu
- CSS custom properties for theming
