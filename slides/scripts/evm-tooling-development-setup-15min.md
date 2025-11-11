# EVM on Polkadot - Toolings and Development Setup - 15 Minute Script

**Total Duration: ~15 minutes**
**Pace: ~150 words per minute**
**Total Words: ~2250**

---

## Opening (0:00 - 0:45) [110 words]

Hello and welcome to EVM on Polkadot: Toolings and Development Setup. I'm Tin, and today we're doing a hands-on workshop to get your development environment ready for building on Polkadot.

This is a practical session focused on setup and configuration. By the end, you'll understand dual VM architecture on Polkadot, have a complete development environment configured with DevContainer, Foundry, and Hardhat, and you'll deploy your first smart contract to a Polkadot EVM parachain.

We're covering everything you need to start building today. This workshop assumes basic command line knowledge and some familiarity with smart contract development. Let's get your environment ready.

---

## Understanding Dual VM Architecture (0:45 - 2:00) [190 words]

First, let's understand what makes Polkadot Hub unique: the dual VM architecture with REVM and PolkaVM.

A virtual machine executes smart contract code in an isolated environment with deterministic execution. Traditional blockchains use a single VM. Polkadot Hub supports two VMs through pallet-revive, a unified smart contract framework.

The dual VM strategy: REVM is the primary production VM - it's a one hundred percent EVM-compatible Rust implementation that powers Foundry and Reth. It's battle-tested and launching December twenty twenty-five. Deploy any Solidity contract unchanged. All Ethereum tooling works: Hardhat, Foundry, Remix, MetaMask, Web3.js, and Ethers.

PolkaVM is the future preview VM - register-based RISC-V architecture with multi-language support, not just Solidity. It launches in preview alongside REVM in December twenty twenty-five, optimized for Polkadot's cross-chain features.

Both VMs share infrastructure through pallet-revive: storage, gas metering, precompiles, and events.

Polkadot Hub runs on Asset Hub, Polkadot's system parachain. This gives you zero deployment costs, Asset Hub security through Polkadot, native XCM access for cross-chain operations, and access to Asset Hub's native runtime functions from your smart contracts.

For testing today, we'll use Westend Hub testnet with free faucet tokens.

---

## Development Environment Overview (2:00 - 3:15) [190 words]

Let's look at what we're setting up today. We need eight components for a complete environment.

First, Node.js and npm for running JavaScript tools. Second, VS Code with essential extensions for Solidity development. Third, DevContainer with Docker for consistent team environments. Fourth, Foundry tools for blazing-fast Rust-based development. Fifth, Hardhat framework for JavaScript-based workflows. Sixth, Scaffold DOT for rapid full-stack prototyping. Seventh, MetaMask wallet for transaction signing. Eighth, RPC configuration for connecting to Polkadot networks.

Prerequisites you need: a computer with eight gigabytes RAM minimum, twenty gigabytes free disk space, stable internet connection, and basic command line knowledge. Recommended for smooth experience: sixteen gigabytes RAM, SSD storage, and some JavaScript or Solidity knowledge.

The good news: if you've built on Ethereum before, this will feel completely familiar. The tools are the same. The workflow is the same. The only difference is you're deploying to Polkadot parachains with additional superpowers like native XCM for cross-chain operations.

Let's start setting up each component.

---

## Base System Setup (3:15 - 4:30) [190 words]

Starting with the foundation: Node.js installation.

The recommended approach is using NVM, Node Version Manager. Install NVM with curl, restart your terminal, then install Node eighteen, set it as default, and verify the installation. You should see version eighteen or higher.

Alternative: download directly from nodejs dot org and install the LTS version - either eighteen or twenty.

Next, install Yarn as your package manager. It's optional but recommended for better dependency management. Install globally with npm, then verify the installation.

Finally, install Git for version control. On macOS, use Homebrew with brew install git. On Linux, use apt-get on Ubuntu or Debian, or dnf on Fedora. On Windows, download from git-scm dot com and use Git Bash for commands.

These three tools - Node, Yarn, and Git - are the foundation. Everything else builds on top. Take a moment to verify each installation before moving forward. Run node version, yarn version, and git version to confirm everything is working.

Once you see all three commands returning version numbers, you're ready for the next step.

---

## VS Code and Extensions Setup (4:30 - 5:45) [190 words]

Now let's set up your code editor. Visual Studio Code is the recommended IDE.

Download from code dot visualstudio dot com for your operating system, install and launch it. Once running, you need five essential extensions.

First, Solidity by Juan Blanco for syntax highlighting, code completion, and linting. Second, Hardhat Solidity by Nomic Foundation for enhanced Solidity support and Hardhat integration. Third, Dev Containers by Microsoft for DevContainer support and Docker integration. Fourth, ESLint for JavaScript linting and code quality. Fifth, Prettier for code formatting and consistent style.

Recommended additional extensions include GitLens for better git integration, Thunder Client for API testing, Error Lens for inline error display, and Path Intellisense for autocomplete.

Configure VS Code by creating a settings.json file in the dot vscode folder. Set Solidity compiler to version zero point eight point twenty, enable format on save, and set Prettier as default formatter with special handling for Solidity files.

These settings ensure consistent code formatting across your team and catch common errors before compilation. Your IDE is now optimized for Solidity development on Polkadot.

---

## Docker and DevContainer (5:45 - 7:00) [190 words]

DevContainers solve the "works on my machine" problem by creating consistent environments.

Install Docker Desktop. On macOS, use Homebrew or download Docker Desktop directly. On Linux, install docker dot io and docker-compose, start the service, and add your user to the docker group - remember to log out and back in. On Windows, download Docker Desktop and enable WSL2 backend.

Verify installation with docker version and docker-compose version.

Now configure your DevContainer. Create a devcontainer.json file in the dot devcontainer folder. Use the TypeScript Node eighteen image as base, add Rust and Docker-in-Docker features, install VS Code extensions automatically, run post-create commands to install Yarn and Foundry, forward ports three thousand and eighty-five forty-five for your app and local blockchain, and set the remote user to node.

Using the DevContainer is simple. Open your folder in VS Code, press Command or Control plus Shift plus P, select "Dev Containers: Reopen in Container", wait for the container to build, and you're in an isolated environment.

Everyone on your team gets the exact same setup. No more dependency conflicts.

---

## Foundry Installation and Setup (7:00 - 8:30) [220 words]

Foundry is a blazing-fast Ethereum toolkit written in Rust. It has four components: Forge for testing, Cast for RPC interaction, Anvil for local testnet, and Chisel as a Solidity REPL.

Why Foundry? It's super fast because it's written in Rust. You test in Solidity with no context switching. Gas reports are built-in. Fuzz testing is included. It has the best developer experience available.

Install with one command: curl the Foundry installer and pipe to bash. Restart your terminal, run foundryup to install all tools, then verify with forge version, cast version, anvil version, and chisel version.

Create your first project with forge init. This generates a complete project structure with src for contracts, test for tests, script for deployment, lib for dependencies, and foundry.toml for configuration.

Configure Foundry by editing the toml file. Set Solidity version to zero point eight point twenty. Add RPC endpoints for Polkadot Hub testnet at westend-hub dot polkadot dot io. Mainnet will be available December twenty twenty-five. Add Ethereum endpoints for reference.

Create a simple Counter contract in src. Write comprehensive tests in the test folder. Run tests with forge test. Use gas-report flag for optimization insights. Use match-test to run specific tests. Use four v flags for maximum verbosity when debugging.

---

## Hardhat Installation and Configuration (8:30 - 10:00) [220 words]

Hardhat is the JavaScript alternative to Foundry. It offers TypeScript support, a flexible plugin system, built-in local network, console.log in Solidity, and an extensive ecosystem.

Create a project directory, initialize npm with npm init, install Hardhat as a dev dependency, run npx hardhat init, select TypeScript project, and install dependencies when prompted.

Configure Hardhat by editing hardhat.config.ts. Import the hardhat toolbox. Set Solidity to zero point eight point twenty. Configure networks: local hardhat network with chain ID thirteen thirty-seven, Polkadot Hub testnet pointing to Westend Hub, and Polkadot Hub mainnet coming December twenty twenty-five.

For environment variables, create a dot env file with your private key and API keys. Never commit this file - add it to gitignore. Create a dot env dot example as a template for your team. Install dotenv package and import in your config.

Create an ERC20 token contract importing from OpenZeppelin. Install OpenZeppelin contracts with npm. Compile with npx hardhat compile. Write TypeScript tests using Chai and Ethers. Deploy with scripts using async await syntax. Wait for confirmations before proceeding.

Hardhat's JavaScript ecosystem makes it perfect for web developers transitioning to Web3. The debugging tools are exceptional.

---

## Wallet Setup and Network Configuration (10:00 - 11:15) [190 words]

MetaMask is your gateway to interacting with Polkadot EVM chains.

Install MetaMask from metamask dot io. Download the browser extension. Create a new wallet or import existing. Backup your seed phrase - this is critical. Store it securely offline.

Add Polkadot networks manually. For Moonbase Alpha testnet: network name Moonbase Alpha, RPC URL at rpc dot api dot moonbase dot moonbeam dot network, chain ID twelve eighty-seven, currency symbol DEV, block explorer at moonbase dot moonscan dot io.

For Moonbeam mainnet: RPC at rpc dot api dot moonbeam dot network, chain ID twelve eighty-four, currency GLMR, explorer at moonscan dot io.

For Shibuya Astar testnet: RPC at evm dot shibuya dot astar dot network, chain ID eighty-one, currency SBY.

For Astar mainnet: RPC at evm dot astar dot network, chain ID five ninety-two, currency ASTR.

Get testnet tokens from faucets. Visit faucet dot moonbeam dot network for DEV tokens. Visit portal dot astar dot network for SBY tokens. Connect your wallet and request tokens. Wait about thirty seconds. Alternatively, use Discord faucet bots in respective Discord servers.

---

## Deploying Your First Contract (11:15 - 12:30) [190 words]

Now for the exciting part - deploying to a real network.

With Foundry, set your private key as environment variable. Deploy using forge create with the contract path, RPC URL, and private key. You'll get the deployed contract address. Interact using cast send for transactions and cast call for view functions.

With Hardhat, ensure your network is configured in hardhat config. Run your deployment script with the network flag. The script deploys your token, waits for confirmation, and logs the address. Verify on the block explorer with hardhat verify, passing the network, contract address, and constructor arguments.

With Scaffold DOT, configure the network in hardhat config. Run yarn deploy with the network flag. Contract addresses automatically update in the frontend deployed contracts file. Update MetaMask to the correct network, refresh your frontend, and contracts are auto-detected. Your full-stack dApp is now live.

Common issues: insufficient funds means get testnet tokens. Nonce too high means reset MetaMask account in settings. Contract deployment failed means check gas price with cast or increase gas limit. RPC connection error means test the endpoint with curl.

---

## Best Practices and Security (12:30 - 13:30) [150 words]

Follow these best practices for production-ready code.

For code organization, keep contracts in src or contracts folder, tests with eighty percent plus coverage, deployment scripts separate, dependencies in lib or node_modules, environment template in dot env dot example, gitignore for sensitive files, and comprehensive README documentation.

Security checklist: never commit private keys, use dot env for secrets, add dot env to gitignore, use hardware wallet for mainnet, test extensively on testnet, get security audit before mainnet, use recent Solidity version, import from trusted libraries like OpenZeppelin, handle edge cases properly, and emit events for important actions.

For testing, write comprehensive tests covering happy path, edge cases, failure scenarios, and fuzz testing. Use forge's built-in fuzz testing for random input testing.

For gas optimization, use events instead of storage when possible, pack variables efficiently, use immutable for deploy-time constants, and cache storage reads in loops.

---

## Next Steps and Resources (13:30 - 14:30) [150 words]

Practice with beginner projects: simple ERC20 token, basic NFT contract, counter with events, and simple storage contract. Intermediate: ERC20 with mint burn and pause, NFT marketplace, simple DAO, and staking contract. Advanced: cross-chain bridge, DEX like Uniswap V2, lending protocol, and options protocol.

Essential documentation: Foundry Book at book dot getfoundry dot sh, Hardhat Docs at hardhat dot org, Moonbeam Docs at docs dot moonbeam dot network, and Astar Docs at docs dot astar dot network.

Learning resources: Polkadot Education Hub at learn dot openguild dot wtf, Scaffold DOT examples, OpenZeppelin contracts, and Solidity by Example.

Join communities: Moonbeam Discord, Astar Discord, Foundry Telegram, and Hardhat Discord.

The hands-on exercise: build a simple token faucet where users request tokens once per day, receive one hundred tokens per request, owner can fund faucet, and track total distributed. Starter code provided. Time: forty-five minutes.

---

## Summary and Call to Action (14:30 - 15:00) [110 words]

Let's recap what we covered. You now understand dual VM architecture on Polkadot EVM parachains. You have a complete development environment with Foundry and Hardhat configured. You can use DevContainer for team consistency. You've configured wallets and connected to networks. You deployed your first contract and learned debugging techniques. You know security best practices.

Your homework before next workshop: complete environment setup, deploy a simple contract, try Scaffold DOT for full-stack development, read XCM documentation, and join Moonbeam or Astar Discord.

Next workshop is Cross-chain DeFi Primitives covering XCM deep dive, Hyperbridge SDK, cross-chain asset transfers, building cross-chain dApps, and DeFi use cases with Bifrost.

See you there. Happy building!
