export const cat13AiAgenticEngineering = [
  {
    id: "q13_1",
    category: "Category 13: AI & Agentic Engineering",
    subcategory: "Hallucination & Reliability",
    question: "How do you evaluate and prevent hallucinations in LLM production applications?",
    whatHREvaluates: "AI application reliability, RAG evaluation frameworks, and guardrails.",
    sampleAnswer: "I ground LLMs using RAG with verifiable reference chunks, set temperature to 0 for deterministic outputs, validate JSON outputs against Pydantic/Zod schemas, and run continuous evaluation test suites using benchmark datasets.",
    remember: "Lowering model temperature and enforcing structured schema validation drastically reduces hallucinations.",
    answerMayVary: "Financial/Medical AI requires human-in-the-loop validation; customer support AI relies on strict RAG chunk retrieval."
  },
  {
    id: "q13_2",
    category: "Category 13: AI & Agentic Engineering",
    subcategory: "RAG & Vector Architecture",
    question: "What is your approach to designing a Retrieval-Augmented Generation (RAG) pipeline?",
    whatHREvaluates: "Chunking strategies, embedding selection, vector DB indexing, and reranking.",
    sampleAnswer: "1. Document Parsing & Chunking (hierarchical recursive splitting). 2. Embeddings (OpenAI / Cohere). 3. Vector Storage (Pinecone / PGVector). 4. Retrieval & Cohere Reranking. 5. Context-augmented LLM generation.",
    remember: "Reranking retrieved chunks using a cross-encoder model drastically improves precision.",
    answerMayVary: "Small document sets can use in-memory vector search; large enterprise doc sets require distributed vector DBs."
  },
  {
    id: "q13_3",
    category: "Category 13: AI & Agentic Engineering",
    subcategory: "Customization Tradeoffs",
    question: "How do you choose between Fine-tuning, RAG, and System Prompting for an AI feature?",
    whatHREvaluates: "AI system design decision-making, cost vs accuracy tradeoffs.",
    sampleAnswer: "I start with System Prompting. If fresh/private domain data is needed, I build RAG. If custom tone, style, or strict output format is required without external retrieval, I fine-tune.",
    remember: "Rule of thumb: RAG gives external knowledge; Fine-tuning teaches internal style and structure.",
    answerMayVary: "Always prototype with prompting & RAG before committing to fine-tuning dataset preparation."
  },
  {
    id: "q13_4",
    category: "Category 13: AI & Agentic Engineering",
    subcategory: "AI Security & MCP",
    question: "What is the Model Context Protocol (MCP) and how does it standardize AI tool integration?",
    whatHREvaluates: "Modern AI agent standards, protocol design, and tool integrations.",
    sampleAnswer: "MCP is an open standard that decouples AI models from tool integrations. An MCP server exposes local files, databases, or APIs through standard JSON-RPC, allowing any MCP client (like an AI agent) to interact securely.",
    remember: "MCP acts like 'USB-C for AI applications' — write an integration once, run it across any supported AI client.",
    answerMayVary: "Local desktop agents use stdio transport; cloud microservice agents use Server-Sent Events (SSE) transport."
  }
];
