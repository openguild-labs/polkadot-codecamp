export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What is Polkadot CodeCamp?",
    answer: "Polkadot CodeCamp is a comprehensive learning program designed to help developers learn to build on the Polkadot ecosystem through hands-on workshops and coding challenges. Whether you're new to blockchain or an experienced developer, our program provides the resources and guidance you need to build production-ready applications.",
  },
  {
    question: "Who should join Polkadot CodeCamp?",
    answer: "Polkadot CodeCamp is perfect for developers of all levels - from beginners who are just starting their blockchain journey to experienced developers looking to expand into the Polkadot ecosystem. If you're interested in building decentralized applications, cross-chain solutions, or DeFi protocols, this program is for you.",
  },
  {
    question: "Do I need prior blockchain experience?",
    answer: "While some blockchain knowledge is helpful, it's not required. Our workshops start with foundational concepts and progressively build to more advanced topics. We recommend having basic programming knowledge in languages like JavaScript, Rust, or Solidity.",
  },
  {
    question: "What will I learn in the workshops?",
    answer: "Our workshops cover a wide range of topics including: Introduction to Polkadot ecosystem, EVM development on Polkadot, cross-chain DeFi primitives using XCM and Hyperbridge, development tooling setup, and how to navigate the Polkadot grant ecosystem. Each workshop includes hands-on exercises and real-world examples.",
  },
  {
    question: "What are the coding challenges?",
    answer: "The coding challenges are practical, hands-on projects that let you apply what you've learned. They include building cross-chain smart contracts, AI-powered applications using Polkadot Agent Kit, full-stack dApps with Scaffold DOT, and a Uniswap V2 style DEX. Each challenge includes starter templates, tests, and detailed requirements.",
  },
  {
    question: "How do I access the workshop materials?",
    answer: "All workshop materials, including slides and video recordings, are available on this website. Click on any workshop card to access the detailed content, slides, and related resources. Materials are free and accessible to everyone.",
  },
  {
    question: "Is there a deadline for completing the challenges?",
    answer: "The coding challenges are self-paced, allowing you to work on them at your own speed. However, we recommend completing them within the hackathon timeline to receive feedback and support from mentors and the community.",
  },
  {
    question: "Where can I get help if I'm stuck?",
    answer: "We have an active community on Discord where you can ask questions, get help from mentors, and collaborate with other participants. You can also refer to the Polkadot Education Hub at learn.openguild.wtf for additional resources and documentation.",
  },
  {
    question: "What tools and technologies will I use?",
    answer: "You'll work with modern blockchain development tools including Hardhat, Foundry, Scaffold DOT, XCM, Hyperbridge, Polkadot Agent Kit, and various Polkadot SDKs. We'll guide you through setting up your development environment in the workshops.",
  },
  {
    question: "Are there any prerequisites or requirements?",
    answer: "You'll need a computer with internet access and the ability to install development tools. Familiarity with Git, command line interfaces, and at least one programming language is recommended. All software tools we use are free and open-source.",
  },
  {
    question: "Can I work on challenges as a team?",
    answer: "Yes! We encourage collaboration. Many of our coding challenges are designed to be tackled by teams. Working with others is a great way to learn and build something more ambitious.",
  },
  {
    question: "What happens after I complete the program?",
    answer: "After completing the workshops and challenges, you'll have the skills and portfolio projects to continue building in the Polkadot ecosystem. You can apply for grants through the Polkadot treasury, join hackathons, contribute to existing projects, or start your own parachain project.",
  },
];

