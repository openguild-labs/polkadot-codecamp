# Polkadot Hackathon CodeCamp Website

A modern, fully responsive website for the Polkadot Hackathon CodeCamp featuring workshop materials, coding challenges, and comprehensive educational resources.

![Polkadot CodeCamp](https://via.placeholder.com/1200x600/0D0D0D/E6007A?text=Polkadot+CodeCamp)

## 🌟 Features

- **📚 Workshop Topics**: 5 comprehensive workshops with detailed slide presentations
- **💻 Coding Challenges**: 4 hands-on challenges with GitHub integration
- **❓ FAQ Section**: Comprehensive Q&A for participants
- **🎨 Modern UI**: Polkadot-branded design with smooth animations
- **📱 Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **⚡ Fast Performance**: Built with Next.js 14 for optimal speed
- **🎬 Smooth Animations**: Powered by Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/polkadot-codecamp.git
cd polkadot-codecamp
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
polkadot-codecamp/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── workshops/
│       └── [slug]/
│           └── page.tsx         # Dynamic workshop pages
│
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx
│   │   ├── Workshops.tsx
│   │   ├── Challenges.tsx
│   │   └── FAQ.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   └── MarkdownViewer.tsx       # Markdown slide renderer
│
├── data/                         # Data and content
│   ├── workshops.ts             # Workshop metadata
│   ├── challenges.ts            # Challenge metadata
│   └── faq.ts                   # FAQ content
│
├── slides/                       # Workshop slide content (Markdown)
│   ├── introduction-to-polkadot-hub.md
│   ├── build-on-polkadot-narratives.md
│   ├── evm-tooling-development-setup.md
│   ├── cross-chain-defi-primitives.md
│   └── polkadot-grant-ecosystem.md
│
├── public/                       # Static assets
│   └── images/
│
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.mjs              # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Workshops

The website features 5 comprehensive workshops:

### 1. Introduction to Polkadot Hub
- Understanding the Polkadot ecosystem
- Developer resources and guidance
- Hackathon process walkthrough
- **Presenter:** Tin

### 2. Build on Polkadot: Narratives, Resources and Growth
- Current Polkadot narratives
- Leveraging community resources
- Growth strategies for projects
- **Presenter:** Tin

### 3. EVM on Polkadot, Toolings and Development Setup
- Dual VM architecture
- Development environment setup
- Foundry, Hardhat, and Scaffold DOT
- **Presenter:** Tin

### 4. Cross-chain DeFi Primitives
- XCM (Cross-Consensus Messaging)
- Hyperbridge SDK integration
- Building cross-chain applications
- **Presenter:** Tin (with Bifrost Team)

### 5. Walk through Polkadot Grant Ecosystem
- Understanding grant programs
- Writing winning proposals
- Application process and tips
- **Presenter:** Tin

## 💻 Coding Challenges

### 1. Cross-chain Solidity Smart Contract with XCM + Hyperbridge
**Difficulty:** Advanced  
**PIC:** Dustin

Build cross-chain smart contracts using XCM and Hyperbridge. Deploy on Polkadot testnet.

### 2. Building a Polkadot AI app with Polkadot Agent Kit
**Difficulty:** Intermediate  
**PIC:** Dustin

Create AI-powered applications using the polkadot-agent-kit. Deploy a functional agent.

### 3. Full-stack development with Scaffold DOT
**Difficulty:** Beginner  
**PIC:** Scaffold-DOT Team

Build a complete full-stack Polkadot application using Scaffold-DOT framework.

### 4. Building a Uniswap V2 DEX on Polkadot Hub
**Difficulty:** Advanced  
**PIC:** Dustin

Implement a Uniswap V2 style DEX with smart contracts and UI on Polkadot.

## 🎯 Technologies Used

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Markdown:** react-markdown, gray-matter
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Adding New Workshops

1. **Create slide content**

Create a new markdown file in `/slides/`:

```bash
touch slides/my-new-workshop.md
```

2. **Add workshop data**

Edit `/data/workshops.ts`:

```typescript
export const workshops: Workshop[] = [
  // ... existing workshops
  {
    id: "6",
    title: "My New Workshop",
    description: "Description of the workshop",
    pic: "Presenter Name",
    deliverables: "What participants will learn",
    slug: "my-new-workshop",
    slidePath: "/slides/my-new-workshop.md",
  },
];
```

3. **Workshop page is auto-generated!**

The dynamic route at `/workshops/[slug]` will automatically create a page for your new workshop.

### Adding New Challenges

Edit `/data/challenges.ts`:

```typescript
export const challenges: Challenge[] = [
  // ... existing challenges
  {
    id: "5",
    title: "My New Challenge",
    description: "Challenge description",
    pic: "Your Name",
    deliverables: "What needs to be built",
    githubUrl: "https://github.com/your-repo",
    difficulty: "Intermediate",
  },
];
```

### Customizing Styles

The website uses Polkadot's brand colors defined in `tailwind.config.ts`:

```typescript
colors: {
  polkadot: {
    pink: "#E6007A",      // Primary brand color
    purple: "#552BBF",    // Secondary color
    cyan: "#00B2FF",      // Accent color
    dark: "#0D0D0D",      // Background
    darker: "#000000",    // Darker background
  },
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, `xl:`) for optimal display on all devices.

## 🎬 Animations

Powered by Framer Motion, the website features:

- **Scroll animations**: Elements fade in as you scroll
- **Hover effects**: Interactive cards and buttons
- **Page transitions**: Smooth navigation between pages
- **Stagger animations**: Sequential element animations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**

- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel auto-detects Next.js configuration
- Deploy!

3. **Custom Domain** (Optional)

Add your custom domain in Vercel project settings.

### Deploy to Other Platforms

The site can also be deployed to:

- **Netlify**: Connect GitHub repo, configure build settings
- **AWS Amplify**: Use the Amplify Console
- **Cloudflare Pages**: Connect repository and deploy
- **Self-hosted**: Run `npm run build && npm run start`

## 🔧 Configuration

### Environment Variables

Create `.env.local` for any environment-specific configuration:

```bash
# Example (currently none required)
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Next.js Configuration

Edit `next.config.mjs` for Next.js-specific settings:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your configuration here
};

export default nextConfig;
```

## 📖 Content Management

### Workshop Slides

Workshop slides are written in Markdown with frontmatter:

```markdown
---
title: Workshop Title
presenter: Presenter Name
duration: 60 minutes
---

# Workshop Title

Your content here...

## Section

More content...
```

### Supported Markdown Features

- Headings (h1-h6)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Links and images
- Tables
- Blockquotes
- Horizontal rules

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic
- Test your changes locally
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Polkadot**: For the amazing ecosystem
- **OpenGuild**: For education resources and inspiration ([learn.openguild.wtf](https://learn.openguild.wtf))
- **Base Batches**: For design inspiration ([basebatches.xyz](https://www.basebatches.xyz))
- **Web3 Foundation**: For grant support
- **All Workshop Presenters**: For their expertise and time

## 📞 Support

- **Discord**: Join our Discord server
- **Email**: support@polkadotcodec amp.com
- **GitHub Issues**: Report bugs or request features
- **Forum**: [Polkadot Forum](https://forum.polkadot.network)

## 🔗 Useful Links

- **Polkadot Network**: https://polkadot.network
- **Polkadot Wiki**: https://wiki.polkadot.network
- **Polkadot Education Hub**: https://learn.openguild.wtf
- **Substrate Documentation**: https://docs.substrate.io
- **Polkadot.js**: https://polkadot.js.org

## 📊 Project Status

- ✅ Website Design Complete
- ✅ Workshop Slides Created
- ✅ Challenge Content Ready
- ✅ Responsive Design Implemented
- ✅ Animations Added
- 🚧 Video Integration (Pending workshop recordings)
- 🚧 User Testing
- 📅 Launch: TBD

## 🎓 For Workshop Participants

### Getting Started

1. **Explore Workshops**: Browse all 5 workshops on the home page
2. **Read Slides**: Click any workshop to view detailed slides
3. **Take Challenges**: Pick a challenge that matches your skill level
4. **Join Community**: Connect with other participants
5. **Ask Questions**: Use the FAQ or reach out for help

### Resources

- Workshop slides are available for download
- Challenge repositories include starter code
- Join Discord for real-time help
- Check FAQ for common questions

## 🚀 What's Next?

### Upcoming Features

- [ ] Video integration for workshop recordings
- [ ] Interactive slide presentations
- [ ] User progress tracking
- [ ] Certificate generation
- [ ] Community showcase
- [ ] Live chat support

### Feedback

We'd love to hear from you! Please share:

- What you liked
- What could be improved
- Feature requests
- Bug reports
- General suggestions

---

**Built with ❤️ for the Polkadot Community**

*Empowering developers to build the decentralized future*

[Get Started](#-quick-start) | [View Workshops](#-workshops) | [Take Challenges](#-coding-challenges)

