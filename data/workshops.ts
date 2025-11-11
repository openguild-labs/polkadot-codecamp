export interface Workshop {
  id: string;
  title: string;
  description: string;
  pic: string;
  deliverables: string;
  slug: string;
  videoUrl?: string;
  slidePath: string;
}

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Introduction to Polkadot Hub",
    description:
      "Walk through the hackathon information and process that hackers need to follow. Reference Polkadot Builder Playbook. General introduction to Polkadot Hub: developer ecosystem and guidance.",
    pic: "Tin",
    deliverables: "Understanding of Polkadot ecosystem and hackathon process",
    slug: "introduction-to-polkadot-hub",
    videoUrl: "https://www.youtube.com/embed/9mqerlQXgMk?si=gkycaA8hhSI5aO8U",
    slidePath: "/slides/introduction-to-polkadot-hub.md",
  },
  {
    id: "2",
    title: "Build on Polkadot: Narratives, Resources and Growth",
    description:
      "Learn how to maximize community resources to build on Polkadot and narratives to focus on.",
    pic: "Tin",
    deliverables: "Knowledge of Polkadot narratives and community resources",
    slug: "build-on-polkadot-narratives",
    videoUrl: "https://www.youtube.com/embed/9mqerlQXgMk?si=gkycaA8hhSI5aO8U",
    slidePath: "/slides/build-on-polkadot-narratives.md",
  },
  {
    id: "3",
    title: "EVM on Polkadot, Toolings and Development Setup",
    description:
      "Walk through dual VM's technical design and step-by-step guidance to set up the local development environment with DevContainer, Foundry, Hardhat and Scaffold DOT.",
    pic: "Tin",
    deliverables: "Configured development environment with EVM tooling",
    slug: "evm-tooling-development-setup",
    videoUrl: "https://www.youtube.com/embed/9mqerlQXgMk?si=gkycaA8hhSI5aO8U",
    slidePath: "/slides/evm-tooling-development-setup.md",
  },
  {
    id: "4",
    title: "Cross-chain DeFi Primitives",
    description:
      "Introduction to XCM and Hyperbridge SDK. Walk through cross-chain DeFi use cases with the Bifrost team.",
    pic: "Tin",
    deliverables: "Understanding of XCM and cross-chain DeFi implementations",
    slug: "cross-chain-defi-primitives",
    videoUrl: "https://www.youtube.com/embed/9mqerlQXgMk?si=gkycaA8hhSI5aO8U",
    slidePath: "/slides/cross-chain-defi-primitives.md",
  },
  {
    id: "5",
    title: "Walk through Polkadot Grant Ecosystem",
    description:
      "Guide the builders about the grant ecosystem and how to write a good proposal. Compares the good / bad proposals and points out tips and tricks to write a good proposals.",
    pic: "Tin",
    deliverables: "Knowledge of grant writing and proposal best practices",
    slug: "polkadot-grant-ecosystem",
    videoUrl: "https://www.youtube.com/embed/9mqerlQXgMk?si=gkycaA8hhSI5aO8U",
    slidePath: "/slides/polkadot-grant-ecosystem.md",
  },
];
