export const aiAgenticSystemsDomain = {
  domain: "AI & Agentic Systems",
  color: "#4A5FA0",
  entries: [
    {
      term: "LLM",
      slug: "llm-large-language-models",
      meaning: "A very well-read autocomplete — learned language patterns so well it predicts the likely next token.",
      purpose: "Generate, summarize, transform, and reason over text and code.",
      starter: {
        summary: "Transformer-based neural network trained on internet-scale text to predict tokens.",
        coreConcept: "Next-token prediction at massive scale.",
        quickExample: "Prompt → LLM → Predicted Response"
      },
      deeper: {
        tradeoffs: "LLMs reason flexibly over open-ended text, but can hallucinate confident false answers and have finite context windows.",
        edgeCases: "Hallucinated citations, knowledge cutoff limitations."
      },
      functions: ["Text Generation", "Summarization", "Code Generation & Debugging", "Reasoning & Translation"],
      objectives: ["Explain why LLMs hallucinate plausible-sounding errors"],
      keyPoints: ["LLMs predict probability distributions over tokens; they don't look up live truth unless given tools"],
      examples: [{ isCode: false, text: "Asking an LLM for a citation it hasn't seen may generate a plausible fake author and paper title." }],
      sources: [
        { label: "Wikipedia: Large Language Model", url: "https://en.wikipedia.org/wiki/Large_language_model", type: "Reference" },
        { label: "Anthropic Documentation", url: "https://docs.claude.com/", type: "Official Docs" },
        { label: "OpenAI Platform Guide", url: "https://platform.openai.com/docs/introduction", type: "Official Docs" }
      ]
    },
    {
      term: "Prompt / context / harness",
      slug: "prompt-context-harness",
      meaning: "Three concentric circles: what you asked right now (prompt), everything available to read (context), and the surrounding app code (harness).",
      purpose: "Understand the execution environment of AI application engineering.",
      starter: {
        summary: "Prompt = immediate instruction. Context = system message + chat history + retrieved docs. Harness = surrounding application code.",
        coreConcept: "Application architecture surrounding AI models.",
        quickExample: "Harness wraps System Context + User Prompt -> LLM API"
      },
      deeper: {
        tradeoffs: "Most AI engineering effort lives in the harness (tool calling, state management, retry logic), not in prompt text.",
        edgeCases: "Context window overflow cutting off early conversation history."
      },
      functions: ["Prompt Layer", "Context Layer", "Application Harness Orchestration"],
      objectives: ["Explain why the same LLM behaves completely differently across two products"],
      keyPoints: ["The app harness handles tool execution and system guardrails"],
      examples: [{ isCode: false, text: "Coding assistant vs support chatbot powered by same model — difference is harness code." }],
      sources: [
        { label: "Anthropic Prompt Engineering", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview", type: "Guide" },
        { label: "OpenAI Prompt Engineering", url: "https://platform.openai.com/docs/guides/prompt-engineering", type: "Official Guide" },
        { label: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction", type: "Official Docs" }
      ]
    },
    {
      term: "Prompt engineering",
      slug: "prompt-engineering",
      meaning: "Asking an AI model in structured ways that reliably produce the output format you want.",
      purpose: "Improve LLM response quality, format consistency, and accuracy without modifying model weights.",
      starter: {
        summary: "Clear constraints, few-shot examples, step-by-step reasoning instructions.",
        coreConcept: "Input text design for optimal model outputs.",
        quickExample: "Summarize in 3 bullet points under 50 words each."
      },
      deeper: {
        tradeoffs: "Detailed system prompts improve output formatting but consume valuable context window tokens.",
        edgeCases: "Prompt injection attacks overriding system instructions."
      },
      functions: ["Role Definition", "Few-Shot Prompting (examples)", "Chain-of-Thought Reasoning", "Structured JSON Constraints"],
      objectives: ["Turn vague requests into deterministic prompt instructions"],
      keyPoints: ["Giving 2 example input/output pairs (few-shot) drastically improves formatting reliability"],
      examples: [{ isCode: true, language: "text", text: "Vague: \"Summarize this\"\nBetter: \"Summarize in 3 bullet points, focused on financial metrics.\"" }],
      sources: [
        { label: "Anthropic Prompt Guide", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview", type: "Guide" },
        { label: "Prompt Engineering Guide (DAIR.AI)", url: "https://www.promptingguide.ai/", type: "Free Interactive Guide" },
        { label: "OpenAI Prompt Engineering Best Practices", url: "https://platform.openai.com/docs/guides/prompt-engineering", type: "Official Guide" }
      ]
    },
    {
      term: "AI agents (agentic AI)",
      slug: "ai-agents",
      meaning: "The difference between a calculator answering once and an assistant using tools in a loop to complete goals.",
      purpose: "Execute multi-step workflows autonomously by planning, executing tools, and evaluating outcomes.",
      starter: {
        summary: "Goal → Reasoning Loop → Tool Execution → Observation → Goal Accomplished.",
        coreConcept: "Autonomous loop using external tools.",
        quickExample: "while (!done) { action = decide(); result = runTool(action); }"
      },
      deeper: {
        tradeoffs: "Agentic autonomy increases problem-solving flexibility but multiplies latency, API costs, and risk of non-deterministic failure loops.",
        edgeCases: "Infinite loops in reasoning, hallucinated tool parameters."
      },
      functions: ["Perceive Goal", "Task Decomposition", "Tool Invocation", "Self-Reflection & Adjustment"],
      objectives: ["Explain the difference between a chatbot and an agentic loop"],
      keyPoints: ["Agents rely on structured tool calling outputs"],
      examples: [{ isCode: true, language: "typescript", text: "while (!goalAchieved) {\n  const step = await llm.plan(context);\n  const result = await tools.execute(step.tool, step.args);\n}" }],
      sources: [
        { label: "Anthropic: Building Effective Agents", url: "https://www.anthropic.com/research/building-effective-agents", type: "Research Paper" },
        { label: "LangGraph Documentation", url: "https://langchain-ai.github.io/langgraph/", type: "Official Docs" },
        { label: "AutoGPT Project", url: "https://github.com/Significant-Gravitas/AutoGPT", type: "Open Source Repo" }
      ]
    },
    {
      term: "Tool use & function calling",
      slug: "tool-use-function-calling",
      meaning: "Giving an AI model buttons it's allowed to press — search, calculator, DB query, email.",
      purpose: "Enable LLMs to perform real actions and fetch up-to-date facts beyond memorized training data.",
      starter: {
        summary: "Model receives tool schemas (JSON) -> outputs structured tool call JSON -> application executes tool -> returns result.",
        coreConcept: "Structured tool execution via application harness.",
        quickExample: "{ 'tool': 'get_weather', 'args': { 'city': 'Manila' } }"
      },
      deeper: {
        tradeoffs: "Function calling grounds LLMs in real data, but requires strict validation of generated tool arguments before execution.",
        edgeCases: "Invalid parameter types generated in function call JSON."
      },
      functions: ["Tool Schema Declaration", "Structured JSON Call Generation", "Tool Result Injection"],
      objectives: ["Explain why tool use yields accurate live stock prices instead of guesses"],
      keyPoints: ["The model outputs the tool intent; your application harness executes the code"],
      examples: [{ isCode: true, language: "json", text: "{ \"tool\": \"search_database\", \"args\": { \"query\": \"user_42\" } }" }],
      sources: [
        { label: "Anthropic Tool Use", url: "https://docs.claude.com/en/docs/build-with-claude/tool-use/overview", type: "Official Docs" },
        { label: "OpenAI Function Calling Guide", url: "https://platform.openai.com/docs/guides/function-calling", type: "Official Docs" },
        { label: "Vercel AI SDK Tools", url: "https://sdk.vercel.ai/docs", type: "Official Docs" }
      ]
    },
    {
      term: "RAG (Retrieval-Augmented Generation)",
      slug: "rag-retrieval-augmented-generation",
      meaning: "Giving an LLM an open-book exam by retrieving relevant document snippets and inserting them into the prompt.",
      purpose: "Ground AI responses in specific, private, or up-to-date data without expensive model re-training.",
      starter: {
        summary: "User Question → Search Vector DB for relative chunks → Inject chunks into LLM prompt → Accurately answered response.",
        coreConcept: "Combine information retrieval with text generation.",
        quickExample: "context = vectorDb.search(query); llm.generate(prompt + context)"
      },
      deeper: {
        tradeoffs: "RAG saves re-training costs but depends heavily on chunking quality and embedding model precision.",
        edgeCases: "Retrieval failure yielding irrelevant chunks."
      },
      functions: ["Chunking", "Embedding Generation", "Vector Similarity Search", "Prompt Context Augmentation"],
      objectives: ["Design a complete RAG pipeline for internal enterprise knowledge bases"],
      keyPoints: ["RAG drastically reduces hallucinations but does not remove them 100%"],
      examples: [{ isCode: true, language: "python", text: "docs = vector_db.similarity_search(query, k=3)\ncontext = '\\n'.join([d.page_content for d in docs])\nresponse = llm.predict(f'Answer based on:\\n{context}\\nQuestion: {query}')" }],
      sources: [
        { label: "Retrieval-Augmented Generation Paper", url: "https://arxiv.org/abs/2005.11401", type: "Paper" },
        { label: "Pinecone: What is RAG?", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/", type: "Guide" },
        { label: "LlamaIndex Documentation", url: "https://docs.llamaindex.ai/", type: "Official Docs" }
      ]
    },
    {
      term: "Embeddings & vector databases",
      slug: "embeddings-vector-databases",
      meaning: "Turning words into numbers positioned so similar meanings end up physically close together in vector space.",
      purpose: "Enable semantic search by meaning rather than exact keyword matches.",
      starter: {
        summary: "Embedding model converts text to high-dimensional floating point numbers. Vector DBs index vectors for fast nearest-neighbor search.",
        coreConcept: "Semantic meaning representation in vector space.",
        quickExample: "embed('affordable laptop') ≈ embed('budget notebook')"
      },
      deeper: {
        tradeoffs: "Vector search captures semantic meaning, but requires HNSW index building in vector DBs (Pinecone, Qdrant, PGVector).",
        edgeCases: "Keyword exact match failures in pure semantic vector search."
      },
      functions: ["Text Embeddings", "Vector Similarity Metrics (Cosine, Dot Product)", "Nearest-Neighbor Vector Indexing"],
      objectives: ["Explain why 'budget laptop' matches 'cheap notebook' in vector search"],
      keyPoints: ["Embeddings power semantic search, recommendations, and RAG retrieval"],
      examples: [{ isCode: true, language: "python", text: "vec1 = model.encode(\"cheap laptop\")\nvec2 = model.encode(\"budget notebook\")\nsimilarity = cosine_similarity(vec1, vec2) # High similarity" }],
      sources: [
        { label: "Wikipedia: Word Embedding", url: "https://en.wikipedia.org/wiki/Word_embedding", type: "Reference" },
        { label: "Pinecone Vector Database Guide", url: "https://www.pinecone.io/learn/vector-database/", type: "Guide" },
        { label: "Qdrant Vector Database Docs", url: "https://qdrant.tech/documentation/", type: "Official Docs" }
      ]
    },
    {
      term: "Multi-agent systems & orchestration",
      slug: "multi-agent-systems-orchestration",
      meaning: "Splitting work across several specialized AI agents that hand off to each other, like a team of specialists.",
      purpose: "Break complex tasks into specialized roles to improve task accuracy.",
      starter: {
        summary: "Orchestrator breaks goal into tasks → Researcher Agent → Writer Agent → Reviewer Agent.",
        coreConcept: "Specialized agent role collaboration.",
        quickExample: "orchestrator.assign('research', searchAgent)"
      },
      deeper: {
        tradeoffs: "Multi-agent systems improve role focus, but multiply latency, token costs, and coordination overhead.",
        edgeCases: "Agent-to-agent communication deadlocks or infinite handoff loops."
      },
      functions: ["Orchestrator Coordinator", "Specialized Agent Roles", "Inter-agent Message Handoff"],
      objectives: ["Identify scenarios where specialized agents beat a single generalist prompt"],
      keyPoints: ["More agents equal more places for errors to compound"],
      examples: [{ isCode: true, language: "typescript", text: "orchestrator.assign(\"research\", researchAgent);\norchestrator.assign(\"write_draft\", writerAgent);" }],
      sources: [
        { label: "Wikipedia: Multi-agent System", url: "https://en.wikipedia.org/wiki/Multi-agent_system", type: "Reference" },
        { label: "CrewAI Framework Docs", url: "https://docs.crewai.com/", type: "Official Docs" },
        { label: "Microsoft AutoGen Docs", url: "https://microsoft.github.io/autogen/", type: "Official Docs" }
      ]
    },
    {
      term: "Fine-tuning vs prompting vs RAG",
      slug: "fine-tuning-vs-prompting-vs-rag",
      meaning: "Three ways to customize AI: teaching it permanently (fine-tuning), asking it well (prompting), or giving it reference docs on the spot (RAG).",
      purpose: "Select the optimal model customization approach based on cost, speed, and data recency.",
      starter: {
        summary: "Prompting (fastest/cheapest), RAG (dynamic live data retrieval), Fine-tuning (retrain weights for style/format).",
        coreConcept: "Customization spectrum for AI capabilities.",
        quickExample: "Legal regulations = RAG; Brand voice style = Fine-tuning"
      },
      deeper: {
        tradeoffs: "Fine-tuning bakes style into model weights but requires data collection and cannot update live knowledge; RAG provides current data instantly.",
        edgeCases: "Fine-tuning an LLM to memorize facts leads to hallucinated out-of-date information."
      },
      functions: ["Prompt Engineering", "RAG Data Retrieval", "Fine-Tuning Weight Retraining"],
      objectives: ["Select customization strategy based on budget and data update frequency"],
      keyPoints: ["Reach for Prompting first, RAG second, Fine-Tuning last"],
      examples: [{ isCode: false, text: "Legal assistant needing latest laws = RAG. Bot needing specific medical tone = Fine-tuning." }],
      sources: [
        { label: "OpenAI Fine-Tuning Guide", url: "https://platform.openai.com/docs/guides/fine-tuning", type: "Guide" },
        { label: "Anyscale: Fine-tuning vs RAG", url: "https://www.anyscale.com/blog/fine-tuning-is-not-rag", type: "Guide" },
        { label: "Hugging Face Transformers Docs", url: "https://huggingface.co/docs/transformers/", type: "Official Docs" }
      ]
    },
    {
      term: "AI guardrails & responsible AI",
      slug: "ai-guardrails-responsible-ai",
      meaning: "The seatbelts and speed limits for an AI system — rules that keep it safe and predictable.",
      purpose: "Prevent toxic outputs, prompt injection exploits, and unauthorized high-risk actions.",
      starter: {
        summary: "Input/Output filters, Human-in-the-loop approvals for payments or file deletions.",
        coreConcept: "Safety boundaries and oversight for AI autonomy.",
        quickExample: "if (action.type === 'delete') requireHumanApproval();"
      },
      deeper: {
        tradeoffs: "Strict guardrails increase system safety and compliance, but add input checking latency.",
        edgeCases: "Jailbreak prompts bypassing system safety classifiers."
      },
      functions: ["Input Moderation", "Output Content Filtering", "Action Scope Controls", "Human-in-the-loop Confirmation"],
      objectives: ["Design human-in-the-loop guardrails for non-reversible agent actions"],
      keyPoints: ["More capability and autonomy must come with more oversight"],
      examples: [{ isCode: true, language: "javascript", text: "if (action.type === \"delete\" || action.type === \"payment\") {\n  requireHumanApproval(action);\n}" }],
      sources: [
        { label: "Anthropic Responsible Scaling", url: "https://www.anthropic.com/rsp", type: "Standard" },
        { label: "NVIDIA Guardrails (NeMo)", url: "https://github.com/NVIDIA/NeMo-Guardrails", type: "Official Docs" },
        { label: "OWASP Top 10 for LLMs", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/", type: "Security Standard" }
      ]
    },
    {
      term: "How MCP works (Model Context Protocol)",
      slug: "how-mcp-works",
      meaning: "A universal USB-C standard for connecting AI assistants to data sources and tools without custom integrations for every app.",
      purpose: "Provide a standard client-server protocol over JSON-RPC for AI tools, prompts, and resources.",
      starter: {
        summary: "MCP servers expose tools and data; MCP clients (like AI assistants) connect to them through standard JSON-RPC.",
        coreConcept: "Universal standard for AI tools & data.",
        quickExample: "{ 'jsonrpc': '2.0', 'method': 'tools/call', 'params': { 'name': 'queryDB' } }"
      },
      deeper: {
        tradeoffs: "Standardizes tool distribution across ecosystems but requires secure local stdio or SSE transport handling.",
        edgeCases: "Transport disconnects, permission scoping for local file system resources."
      },
      functions: ["Expose Resources", "Expose Tools", "Expose Prompts", "Transport via stdio / SSE"],
      objectives: ["Build a custom MCP server exposing developer tools"],
      keyPoints: ["Open standard initiated by Anthropic for universal AI integration"],
      examples: [{ isCode: true, language: "json", text: "{\n  \"jsonrpc\": \"2.0\",\n  \"method\": \"tools/list\",\n  \"params\": {}\n}" }],
      sources: [
        { label: "Model Context Protocol Official Docs", url: "https://modelcontextprotocol.io/", type: "Official Docs" },
        { label: "MCP Specification", url: "https://github.com/modelcontextprotocol/specification", type: "Official Spec" },
        { label: "Anthropic MCP Announcement", url: "https://www.anthropic.com/news/model-context-protocol", type: "Official Guide" }
      ]
    }
  ]
};
