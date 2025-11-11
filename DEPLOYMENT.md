# Deployment Guide

This document provides instructions for deploying the Polkadot Hub CodeCamp website.

## ✅ Prerequisites

Before deploying, ensure you have:

- [x] Node.js 18.x or higher installed
- [x] npm or yarn package manager
- [x] Git repository set up
- [x] Account on your chosen deployment platform

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

**Steps:**

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Connect to Vercel**

- Visit [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel automatically detects Next.js configuration
- Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

**Custom Domain (Optional):**

- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

### Option 2: Netlify

**Steps:**

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Node version:** 18 or higher

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
```

---

### Option 3: Self-Hosted (VPS/Server)

**Requirements:**

- Ubuntu 20.04+ or similar
- Node.js 18+
- PM2 for process management
- Nginx for reverse proxy

**Installation:**

```bash
# 1. Clone repository
git clone YOUR_REPO_URL
cd polkadot-codecamp

# 2. Install dependencies
npm install

# 3. Build application
npm run build

# 4. Install PM2
npm install -g pm2

# 5. Start application
pm2 start npm --name "polkadot-codecamp" -- start

# 6. Save PM2 configuration
pm2 save
pm2 startup
```

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site and restart Nginx
sudo ln -s /etc/nginx/sites-available/polkadot-codecamp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**SSL Certificate (Let's Encrypt):**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔧 Environment Variables

If you need environment variables, create `.env.local`:

```bash
# Example (currently not required for basic setup)
NEXT_PUBLIC_API_URL=https://api.example.com
```

**For production deployment, add these in your platform:**

- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Self-hosted: Add to `.env.local` on server

---

## 📦 Build Verification

Before deploying, always test the build locally:

```bash
# Build the application
npm run build

# Test production build
npm run start

# Visit http://localhost:3000
```

---

## 🎯 Post-Deployment Checklist

After deployment, verify:

- [ ] Home page loads correctly
- [ ] All workshop pages are accessible
- [ ] Challenge links work
- [ ] FAQ section functions properly
- [ ] Mobile responsiveness
- [ ] Page load times
- [ ] All animations work
- [ ] No console errors

---

## 🔄 Continuous Deployment

### Vercel (Automatic)

- **Main branch:** Auto-deploys to production
- **Other branches:** Auto-deploys to preview URLs
- **Pull requests:** Generates preview deployments

### GitHub Actions (Custom)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy
        run: |
          # Add your deployment commands here
```

---

## 📊 Monitoring

### Vercel Analytics

- Automatically included
- View in Vercel dashboard
- Real-time analytics
- Web vitals monitoring

### Custom Monitoring

Add to `app/layout.tsx`:

```typescript
// Google Analytics (example)
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🐛 Troubleshooting

### Build Fails

**Issue:** Build fails with memory errors

```bash
# Solution: Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Issue:** Missing dependencies

```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
```

### Runtime Errors

**Issue:** 404 on workshop pages

- Check `slides/` folder exists
- Verify markdown files are present
- Check workshop slugs match filenames

**Issue:** Animations not working

- Ensure Framer Motion is installed
- Check browser compatibility
- Verify "use client" directives

---

## 🔐 Security

### Headers Configuration

Add to `next.config.mjs`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};
```

---

## 📈 Performance Optimization

### Images

Replace placeholder images in slides with optimized versions:

```markdown
<!-- Before -->

![Alt](https://via.placeholder.com/800x400)

<!-- After -->

![Alt](/images/optimized-image.webp)
```

### Fonts

Font optimization is already configured with Next.js Google Fonts.

### Caching

Configure in `next.config.mjs`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/slides/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
```

---

## 🆘 Support

If you encounter issues:

1. Check [Next.js documentation](https://nextjs.org/docs)
2. Review [deployment platform docs](https://vercel.com/docs)
3. Search [GitHub issues](https://github.com)
4. Ask in Polkadot Discord

---

## 📝 Deployment Checklist

Before going live:

- [ ] Test all features locally
- [ ] Run `npm run build` successfully
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test on multiple browsers
- [ ] Review slide content for accuracy
- [ ] Update README with live URL
- [ ] Configure custom domain (if needed)
- [ ] Set up SSL certificate
- [ ] Configure analytics
- [ ] Test page load speeds
- [ ] Review security headers
- [ ] Set up error monitoring
- [ ] Create backup plan
- [ ] Document deployment process

---

**🎉 Ready to Deploy!**

Choose your deployment method above and follow the steps. The website is production-ready and optimized for performance.

For questions or issues, refer to the main [README.md](README.md) or reach out to the development team.
