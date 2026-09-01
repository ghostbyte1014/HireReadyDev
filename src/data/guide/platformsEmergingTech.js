export const platformsEmergingTechDomain = {
  domain: "Platforms & Emerging Tech",
  color: "#7A4C6E",
  entries: [
    {
      term: "Mobile app development",
      slug: "mobile-app-development",
      meaning: "Building applications for mobile devices — native OS code vs cross-platform single codebases.",
      purpose: "Select the optimal mobile architecture based on team budget, device API access, and performance requirements.",
      starter: {
        summary: "Native (Swift/Kotlin), Cross-Platform (React Native/Flutter), PWA (Installable Web App).",
        coreConcept: "Build speed (cross-platform) vs deep OS hardware integration (native).",
        quickExample: "React Native: <View><Text>Hello</Text></View>"
      },
      deeper: {
        tradeoffs: "Cross-platform cuts development costs by 50%, but complex native Bluetooth/camera APIs can require custom native bridges.",
        edgeCases: "App Store review guidelines rejecting web wrappers."
      },
      functions: ["Native — Swift/Kotlin", "Cross-Platform — React Native/Flutter", "PWA — Web Standards"],
      objectives: ["Choose between Native, React Native, and PWA for an MVP"],
      keyPoints: ["React Native compiles to real native UI views, not webviews"],
      examples: [{ isCode: true, language: "javascript", text: "import { Text, View } from 'react-native';\nexport default () => <View><Text>Mobile App</Text></View>;" }],
      sources: [
        { label: "React Native Docs", url: "https://reactnative.dev/", type: "Official Docs" },
        { label: "Flutter Documentation", url: "https://docs.flutter.dev/", type: "Official Docs" },
        { label: "Apple Developer Guides", url: "https://developer.apple.com/documentation/swiftui", type: "Official Spec" }
      ]
    },
    {
      term: "Blockchain & Web3 basics",
      slug: "blockchain-web3-basics",
      meaning: "A shared, tamper-resistant digital ledger that many computers keep an identical copy of without a central authority.",
      purpose: "Enable trustless, decentralized data verification and smart contracts.",
      starter: {
        summary: "Cryptographically linked blocks of transactions verified via consensus (Proof of Stake / Proof of Work).",
        coreConcept: "Decentralized consensus without central servers.",
        quickExample: "Smart contract execution on Ethereum"
      },
      deeper: {
        tradeoffs: "Blockchains provide tamper-proof decentralized trust, but suffer from high transaction gas fees and low throughput compared to traditional SQL DBs.",
        edgeCases: "Immutability means smart contract bugs cannot be patched after deployment without complex proxy upgrades."
      },
      functions: ["Cryptographic Hash Linking", "Consensus Mechanisms (PoW/PoS)", "Smart Contracts (Solidity)"],
      objectives: ["Explain why altering past blockchain records requires controlling over 50% of the network"],
      keyPoints: ["Blockchain solves trust without a central authority — it is NOT a replacement for general SQL databases"],
      examples: [{ isCode: true, language: "solidity", text: "// Solidity Smart Contract\nfunction transfer(address to, uint amount) public {\n  require(balances[msg.sender] >= amount);\n  balances[msg.sender] -= amount;\n  balances[to] += amount;\n}" }],
      sources: [
        { label: "Ethereum Documentation", url: "https://ethereum.org/en/what-is-ethereum/", type: "Official Guide" },
        { label: "Bitcoin Whitepaper (Nakamoto)", url: "https://bitcoin.org/bitcoin.pdf", type: "Original Paper" },
        { label: "Solidity Official Documentation", url: "https://docs.soliditylang.org/", type: "Official Docs" }
      ]
    }
  ]
};
