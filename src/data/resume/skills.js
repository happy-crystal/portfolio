const skills = [
  {
    title: 'Solidity',
    competency: 5,
    category: ['Blockchain', 'Languages'],
  },
  {
    title: 'Rust',
    competency: 5,
    category: ['Blockchain', 'Languages'],
  },
  {
    title: 'Move',
    competency: 5,
    category: ['Blockchain', 'Languages'],
  },
  {
    title: 'Ethereum Smart Contracts',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'Solana Smart Contracts',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'XRPL Smart Contracts',
    competency: 4,
    category: ['Blockchain'],
  },
  {
    title: 'Web3.js',
    competency: 5,
    category: ['Blockchain', 'Javascript'],
  },
  {
    title: 'Ethers.js',
    competency: 5,
    category: ['Blockchain', 'Javascript'],
  },
  {
    title: 'Anchor',
    competency: 4,
    category: ['Blockchain', 'Rust'],
  },
  {
    title: 'Hardhat',
    competency: 5,
    category: ['Blockchain', 'Tools'],
  },
  {
    title: 'Foundry',
    competency: 4,
    category: ['Blockchain', 'Tools'],
  },
  {
    title: 'Metaplex',
    competency: 4,
    category: ['Blockchain', 'Solana'],
  },
  {
    title: 'Next.js',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node.js',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['DevOps', 'Cloud'],
  },
  {
    title: 'CI/CD (GitHub Actions, Jenkins)',
    competency: 4,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'IPFS',
    competency: 4,
    category: ['Blockchain', 'Decentralized Storage'],
  },
  {
    title: 'Arweave',
    competency: 3,
    category: ['Blockchain', 'Decentralized Storage'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Tailwind CSS',
    competency: 5,
    category: ['Web Development', 'CSS'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
