# Quick Start Guide

Get the Polkadot Hub CodeCamp website running in 5 minutes!

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open your browser
# Visit http://localhost:3000
```

That's it! The website should now be running locally.

---

## 📋 What You'll See

### Home Page (/)

- Hero section with animated background
- 5 workshop topic cards
- 4 coding challenge cards
- FAQ accordion section
- Footer with links

### Workshop Pages (/workshops/[slug])

Each workshop has:

- Workshop description and metadata
- Full presentation slides in markdown
- Presenter information
- Deliverables list

**Available Workshops:**

1. `/workshops/introduction-to-polkadot-hub`
2. `/workshops/build-on-polkadot-narratives`
3. `/workshops/evm-tooling-development-setup`
4. `/workshops/cross-chain-defi-primitives`
5. `/workshops/polkadot-grant-ecosystem`

---

## 🎨 Key Features to Try

### 1. Scroll Animations

- Scroll down the home page
- Watch elements fade in as you scroll
- Smooth, polished animations throughout

### 2. Interactive Cards

- Hover over workshop cards
- See the hover effects and transitions
- Click to navigate to workshop details

### 3. FAQ Section

- Click on any question
- Watch the accordion expand
- Smooth animations on open/close

### 4. Mobile Responsiveness

- Resize your browser window
- Check mobile view (< 768px)
- Test tablet view (768-1024px)
- Hamburger menu appears on mobile

### 5. Workshop Slides

- Click any workshop card
- View the full presentation
- Styled markdown with code highlighting
- Images and formatting preserved

---

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📝 Quick Customization

### Add a New Workshop

1. **Create slide file:**

   ```bash
   touch slides/my-new-workshop.md
   ```

2. **Add content to the file:**

   ```markdown
   ---
   title: My New Workshop
   presenter: Your Name
   duration: 60 minutes
   ---

   # My New Workshop

   Content goes here...
   ```

3. **Update data file:**
   Edit `data/workshops.ts`:

   ```typescript
   {
     id: "6",
     title: "My New Workshop",
     description: "Workshop description",
     pic: "Your Name",
     deliverables: "What you'll learn",
     slug: "my-new-workshop",
     slidePath: "/slides/my-new-workshop.md",
   }
   ```

4. **Done!** Visit `/workshops/my-new-workshop`

### Add a New Challenge

Edit `data/challenges.ts`:

```typescript
{
  id: "5",
  title: "New Challenge",
  description: "Challenge description",
  pic: "Your Name",
  deliverables: "What to build",
  githubUrl: "https://github.com/your-repo",
  difficulty: "Intermediate",
}
```

---

## 🎯 Project Structure (Simplified)

```
polkadot-codecamp/
├── app/
│   ├── page.tsx              ← Home page
│   └── workshops/[slug]/     ← Workshop pages
│       └── page.tsx
│
├── components/
│   ├── sections/             ← Hero, Workshops, Challenges, FAQ
│   └── ui/                   ← Button, Card, etc.
│
├── data/
│   ├── workshops.ts          ← Workshop metadata
│   ├── challenges.ts         ← Challenge data
│   └── faq.ts                ← FAQ content
│
└── slides/                   ← Markdown presentations
    ├── introduction-to-polkadot-hub.md
    ├── build-on-polkadot-narratives.md
    ├── evm-tooling-development-setup.md
    ├── cross-chain-defi-primitives.md
    └── polkadot-grant-ecosystem.md
```

---

## 🚀 Deploy to Vercel

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Deploy:**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"

3. **Live in ~2 minutes!**

---

## 💡 Tips

### For Development

- ✅ Use `npm run dev` for hot reload
- ✅ Changes reflect immediately
- ✅ Check console for errors
- ✅ Use browser DevTools for debugging

### For Content

- ✅ Edit markdown files directly
- ✅ Use standard markdown syntax
- ✅ Add code blocks with syntax highlighting
- ✅ Include images with `![alt](url)`

### For Customization

- ✅ Colors: Edit `tailwind.config.ts`
- ✅ Fonts: Edit `app/layout.tsx`
- ✅ Styles: Use Tailwind classes
- ✅ Animations: Already configured!

---

## 🐛 Troubleshooting

### "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use

```bash
# Use different port
PORT=3001 npm run dev
```

### Build errors

```bash
# Check for TypeScript errors
npm run lint

# Clean build
rm -rf .next
npm run build
```

---

## 📚 Learn More

- **Full Documentation:** [README.md](README.md)
- **Deployment Guide:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Project Summary:** [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## ✨ Next Steps

1. **Explore** the website locally
2. **Customize** colors and content
3. **Add** your workshop videos (when ready)
4. **Deploy** to production
5. **Share** with the community!

---

## 🎉 You're All Set!

The website is ready to use. Start exploring, customizing, and deploying!

**Questions?** Check the [README.md](README.md) or reach out to the team.

**Happy Building!** 🚀
