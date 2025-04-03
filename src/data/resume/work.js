/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Freelance',
    position: 'Blockchain Developer',
    startDate: 'TBD',
    summary:
      'Developed and optimized smart contracts for various blockchain use cases, including DeFi, DAOs, and identity minting. Built Web3 integrations and decentralized trading systems for enhanced blockchain interactions.',
    highlights: [
      'Developed Solana smart contracts, including staking, identity minting, and DAO voting.',
      'Built and optimized DeFi smart contracts for staking, yield farming, and slashing mechanisms.',
      'Integrated Web3 front-end solutions with advanced smart contract functionalities.',
      'Developed a decentralized order-book trading system with efficient order execution.',
      'Designed APIs and SDKs to streamline third-party integrations with Web3 platforms.',
      'Led audits and security reviews for smart contract deployments.',
    ],
  },
  {
    name: 'Web3 Startup',
    position: 'Solana & Ethereum Smart Contract Developer',
    startDate: 'TBD',
    summary:
      'Engineered and deployed high-performance smart contracts on Solana and Ethereum, enhancing blockchain governance, staking mechanisms, and decentralized identity solutions.',
    highlights: [
      'Improved DAO voting mechanisms and governance decentralization.',
      'Developed minting identity contracts to establish verifiable on-chain identities.',
      'Built a robust staking and slashing system for decentralized protocols.',
      'Implemented Web3 portals, protocol dashboards, and trader portals.',
      'Designed APIs and SDKs to streamline third-party integrations with Web3 platforms.',
    ],
  },
  {
    name: 'Decentralized TaskEngine for AI Agents',
    position: 'Project Lead',
    startDate: 'TBD',
    summary:
      'Built a Solana-based decentralized task execution and payment system to enable AI agents to interact and transact autonomously.',
    highlights: [
      'Designed smart contracts for task execution and payments on Solana.',
      'Optimized decentralized workflows for AI-driven automation.',
    ],
  },
  {
    name: 'DeFi Staking & Yield Contracts',
    position: 'Smart Contract Developer',
    startDate: 'TBD',
    summary:
      'Developed and optimized DeFi staking and yield optimization contracts, ensuring secure and efficient fund management.',
    highlights: [
      'Implemented staking and slashing mechanisms for decentralized finance.',
      'Optimized yield farming strategies and automated rewards distribution.',
    ],
  },
  {
    name: 'Web3 Identity Minting',
    position: 'Blockchain Developer',
    startDate: 'TBD',
    summary:
      'Created a decentralized identity verification system, enabling users to establish verifiable on-chain identities.',
    highlights: [
      'Engineered identity minting smart contracts for secure, on-chain verification.',
      'Ensured compliance with decentralized identity standards.',
    ],
  },
  {
    name: 'Order-Book DEX Optimization',
    position: 'Blockchain Developer',
    startDate: 'TBD',
    summary:
      'Enhanced decentralized trading efficiency by optimizing order execution mechanisms.',
    highlights: [
      'Designed and deployed smart contracts for high-performance order execution.',
      'Improved matching engine efficiency for decentralized order-book trading.',
    ],
  },
  {
    name: 'TaskNet Oracles',
    position: 'Blockchain Developer',
    startDate: 'TBD',
    summary:
      'Developed secure oracle solutions that integrate external data sources with blockchain protocols.',
    highlights: [
      'Designed and deployed secure oracles for decentralized applications.',
      'Ensured data integrity and reliability for smart contract interactions.',
    ],
  },
  {
    name: 'ZkTLS Solutions',
    position: 'Blockchain Security Developer',
    startDate: 'TBD',
    summary:
      'Implemented privacy-preserving security features to enhance blockchain transactions with zero-knowledge proofs.',
    highlights: [
      'Developed ZkTLS-based encryption mechanisms for secure blockchain interactions.',
      'Enhanced transaction privacy while maintaining cryptographic integrity.',
    ],
  },
  {
    name: 'Dune Analytics & Web3 Portals',
    position: 'Blockchain Data Engineer',
    startDate: 'TBD',
    summary:
      'Designed dashboards and portals for protocol transparency, analytics, and monitoring.',
    highlights: [
      'Built Dune Analytics dashboards for real-time blockchain data insights.',
      'Developed Web3 portals for seamless user interaction with blockchain protocols.',
    ],
  },
];

export default work;
