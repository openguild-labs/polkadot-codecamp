export interface Challenge {
  id: string;
  title: string;
  description: string;
  pic: string;
  deliverables: string;
  githubUrl: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const challenges: Challenge[] = [
  {
    id: "1",
    title: "Cross-chain Solidity Smart Contract with XCM + Hyperbridge",
    description:
      "Walk through XCM and Hyperbridge and how to use them on the smart contract side. Learn to build cross-chain applications that communicate across different parachains.",
    pic: "Dustin",
    deliverables:
      "Deploy a cross-chain smart contract using XCM and Hyperbridge on Polkadot testnet",
    githubUrl:
      "https://github.com/openguild-labs/polkadot-codecamp-challenges/tree/main/1-xcm-hyperbridge",
    difficulty: "Advanced",
  },
  {
    id: "2",
    title: "Building a Polkadot AI app with Polkadot Agent Kit",
    description:
      "Using the polkadot-agent-kit tool to build AI-powered cross-chain applications. Integrate AI capabilities with Polkadot blockchain functionality.",
    pic: "Dustin",
    deliverables:
      "Coding challenge repo with tests + template setup. Builders need to deploy a new agent built using the agent kit",
    githubUrl:
      "https://github.com/openguild-labs/polkadot-codecamp-challenges/tree/main/2-polkadot-agent-kit",
    difficulty: "Intermediate",
  },
  {
    id: "3",
    title: "Full-stack development with Scaffold DOT",
    description:
      "Guide participants to build and deploy a full-stack Polkadot application using Scaffold-DOT and deploy on Polkadot testnet. Build modern web3 interfaces quickly.",
    pic: "Scaffold-DOT Team",
    deliverables:
      "Functional application built on top of Scaffold DOT - add new features on top of the boilerplate and deploy",
    githubUrl:
      "https://github.com/openguild-labs/polkadot-codecamp-challenges/tree/main/3-fullstack-scaffold-dot",
    difficulty: "Beginner",
  },
  {
    id: "4",
    title: "Building a Uniswap V2 DEX on Polkadot Hub",
    description:
      "Give reference to the existing Uniswap V2 contracts and guide users to build a Uniswap V2 DEX with UI + contracts. Create a fully functional decentralized exchange.",
    pic: "Dustin",
    deliverables:
      "Coding challenge repo with tests + template setup. Builders need to complete the Uniswap V2 contract and deploy on testnet with UI (can reuse the Scaffold-DOT)",
    githubUrl:
      "https://github.com/openguild-labs/polkadot-codecamp-challenges/tree/main/4-uniswapv2",
    difficulty: "Advanced",
  },
];
