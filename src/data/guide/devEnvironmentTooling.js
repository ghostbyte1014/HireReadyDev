export const devEnvironmentToolingDomain = {
  domain: "Developer Tools & Environment Reference",
  color: "#475569",
  entries: [
    {
      term: "Agentic AI Coding Platforms & IDEs",
      slug: "agentic-ai-coding-platforms-ides",
      meaning: "Next-generation IDEs and CLI agents that use LLM codebase indexing to autonomously inspect files, write multi-file edits, and run terminal commands.",
      purpose: "Accelerate software engineering velocity with autonomous multi-file edits and terminal command execution.",
      starter: {
        summary: "Cursor AI & Windsurf (AI-native IDE forks), Antigravity & Claude Code / agy CLI (terminal agentic coding assistants), Copilot & Supermaven (inline autocomplete).",
        coreConcept: "Codebase-wide vector indexing + agentic tool execution loop.",
        quickExample: "Cmd+K / Composer -> 'Add OAuth 2.0 PKCE authentication flow across backend and frontend'"
      },
      deeper: {
        tradeoffs: "Agentic IDEs eliminate tedious boilerplate writing and refactoring; however, developers MUST review generated code diffs carefully for subtle logic bugs or security leaks.",
        edgeCases: "Stale vector index caches causing AI agents to reference deleted function signatures."
      },
      functions: [
        "🚦 Decision Matrix: Use Cursor/Windsurf for multi-file codebase refactoring; use Copilot/Supermaven for fast sub-100ms inline line completions; use Antigravity/Claude Code CLI for terminal-driven autonomous execution.",
        "💣 Production Gotcha: Blindly accepting large multi-file agentic code generation without running tests can introduce hidden breaking changes in untested edge cases.",
        "Cursor AI — VS Code fork featuring @codebase semantic vector search, Cmd+K inline editing, and Composer multi-file agentic generation",
        "Windsurf (Codeium Cascade) — AI-native IDE with deep execution state awareness and multi-file cascade editing",
        "Antigravity & Claude Code / agy CLI — Terminal agentic coding assistants executing shell commands, file edits, subagent orchestration, and browser verification",
        "GitHub Copilot & Supermaven — High-speed sub-100ms inline autocomplete extensions powered by specialized LLMs",
        "Devin & Cognition AI — Autonomous AI software engineer platform resolving end-to-end GitHub issues autonomously",
        "Zed & Neovim — High-performance Rust-written modal editors with native Language Server Protocol (LSP) and AI integration"
      ],
      objectives: [
        "Configure `@codebase` indexing and `.cursorignore` files to exclude secrets and heavy build directories from AI context",
        "Utilize terminal agentic CLIs to automate multi-file bug fixes and unit test generation"
      ],
      keyPoints: [
        "Cursor's `@codebase` indexes your entire repository into vector embeddings for accurate context retrieval",
        "Supermaven delivers 250,000+ token context windows at sub-100ms autocomplete speeds"
      ],
      examples: [
        { isCode: true, language: "json", text: "// .cursorignore / .gitignore\nnode_modules/\ndist/\n.env*\n*.log" }
      ],
      sources: [
        { label: "Cursor AI Docs", url: "https://docs.cursor.com/", type: "Official Docs" },
        { label: "Windsurf IDE", url: "https://codeium.com/windsurf", type: "Official Site" },
        { label: "Antigravity Agentic Platform", url: "https://antigravity.google.com/", type: "Official Docs" },
        { label: "Claude Code CLI Docs", url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview", type: "Official Docs" },
        { label: "GitHub Copilot Documentation", url: "https://docs.github.com/en/copilot", type: "Official Docs" },
        { label: "Supermaven Autocomplete", url: "https://supermaven.com/", type: "Official Site" },
        { label: "Cognition AI (Devin)", url: "https://www.cognition.ai/", type: "Official Site" },
        { label: "Zed Editor", url: "https://zed.dev/", type: "Official Site" }
      ]
    },
    {
      term: "Modern Python Backend Stack (FastAPI, Pydantic, SQLAlchemy, Celery)",
      slug: "modern-python-backend-stack",
      meaning: "The industry-standard high-performance async Python backend ecosystem for building REST APIs, background task workers, and real-time WebSockets.",
      purpose: "Build type-safe, auto-documenting, production-grade microservices and backend APIs in Python.",
      starter: {
        summary: "FastAPI (async web server), Pydantic (data validation), PostgreSQL + SQLAlchemy (relational database ORM), Redis (caching & rate limiting), Celery (background job queue).",
        coreConcept: "Async Python web server + Pydantic schema validation + Redis background queue.",
        quickExample: "FastAPI REST API -> Pydantic Model -> SQLAlchemy Async DB -> Redis Rate Limiter -> Celery Worker"
      },
      deeper: {
        tradeoffs: "FastAPI + Pydantic provides auto-generated OpenAPI (Swagger) interactive docs and sub-millisecond async performance; however, developers must manage async DB connection pools properly.",
        edgeCases: "Mixing blocking synchronous calls (e.g. `requests.get()`) inside async FastAPI endpoint handlers freezing the main Event Loop."
      },
      functions: [
        "🚦 Decision Matrix: Use FastAPI for high-performance Python microservices, ML model inference APIs, and async WebSockets; use Django when built-in admin panel and batteries-included auth are required.",
        "💣 Production Gotcha: Invoking blocking sync libraries inside `async def` endpoints will block all concurrent HTTP requests across your single worker process.",
        "FastAPI — High-performance Python 3.8+ framework built on Starlette and Pydantic with automatic interactive Swagger docs",
        "Pydantic v2 — Rust-accelerated runtime type validation enforcing strict data schemas and settings management",
        "PostgreSQL & SQLAlchemy 2.0 — Relational database ORM supporting async connection pools and Alembic schema migrations",
        "Redis Caching & Rate Limiting — In-memory data store for sliding-window rate limiters, session storage, and cache-aside patterns",
        "Celery Distributed Worker — Asynchronous task queue offloading long processing jobs (PDF generation, emails) to Redis/RabbitMQ brokers",
        "WebSockets — Full-duplex bidirectional TCP connections for real-time live streaming"
      ],
      objectives: [
        "Build an async FastAPI POST endpoint with Pydantic request body validation",
        "Configure Celery background workers with Redis broker for asynchronous PDF generation"
      ],
      keyPoints: [
        "FastAPI automatically generates interactive Swagger UI at `/docs` from Pydantic type annotations",
        "Pydantic v2 is rewritten in Rust, achieving 5x–20x faster data validation speeds"
      ],
      examples: [
        { isCode: true, language: "python", text: "# FastAPI + Pydantic Async Endpoint Example\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel, EmailStr\n\napp = FastAPI(title='HireReady API')\n\nclass UserSignup(BaseModel):\n    email: EmailStr\n    username: str\n\n@app.post('/api/users')\nasync def create_user(user: UserSignup):\n    # Pydantic validates request JSON automatically!\n    return {'status': 'success', 'user': user.username}" }
      ],
      sources: [
        { label: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/", type: "Official Docs" },
        { label: "Pydantic Documentation", url: "https://docs.pydantic.dev/", type: "Official Docs" },
        { label: "SQLAlchemy 2.0 Docs", url: "https://docs.sqlalchemy.org/", type: "Official Docs" },
        { label: "Redis Official Site & Commands", url: "https://redis.io/", type: "Official Site" },
        { label: "Celery Task Queue Docs", url: "https://docs.celeryq.dev/", type: "Official Docs" },
        { label: "FastAPI WebSockets Guide", url: "https://fastapi.tiangolo.com/advanced/websockets/", type: "Guide" }
      ]
    },
    {
      term: "Editors & IDE Recommendations",
      slug: "editors-ides-reference",
      meaning: "The software workbench where code is written, debugged, and refactored.",
      purpose: "Provide developer environment recommendations across different languages and project scales.",
      starter: {
        summary: "VS Code (universal web/backend), JetBrains (heavy enterprise), Visual Studio (.NET), Neovim (terminal SSH).",
        coreConcept: "Choose editors based on extension ecosystem vs deep out-of-the-box language refactoring.",
        quickExample: "VS Code for JS/TS; IntelliJ for Java; PyCharm for Python"
      },
      deeper: {
        tradeoffs: "VS Code is lightweight & free with plugins; JetBrains IDEs cost money but offer superior index-based refactoring and database integration.",
        edgeCases: "Heavy VS Code extension lag, memory overhead in IntelliJ on 8GB RAM machines."
      },
      functions: [
        "Visual Studio Code — extensible, free, language-agnostic industry standard (JS/TS, Python, Go)",
        "IntelliJ IDEA / PyCharm / WebStorm — JetBrains deep AST refactoring tools for Java, Python, and Enterprise JS",
        "Visual Studio — complete IDE for C# and Windows .NET development",
        "Neovim — modal terminal editing for high-speed SSH remote server development"
      ],
      objectives: [
        "Configure VS Code settings and extension packs for TypeScript/Python development",
        "Utilize keybindings for fast multi-cursor editing and file switching"
      ],
      keyPoints: [
        "Language Server Protocol (LSP) powers autocomplete across modern editors",
        "Keep editor extensions lean to avoid IDE slow-downs"
      ],
      examples: [
        { isCode: true, language: "json", text: "// .vscode/settings.json\n{\n  \"editor.formatOnSave\": true,\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"\n}" }
      ],
      sources: [
        { label: "VS Code Documentation", url: "https://code.visualstudio.com/docs", type: "Official Docs" },
        { label: "JetBrains Developer Tools", url: "https://www.jetbrains.com/", type: "Official Guide" },
        { label: "Neovim Interactive Guide", url: "https://neovim.io/doc/", type: "Official Docs" }
      ]
    },
    {
      term: "Version Control & Collaboration Tools",
      slug: "version-control-tools-reference",
      meaning: "The software tools teams use to track code history, review pull requests, and manage issues.",
      purpose: "Enable safe multi-developer collaboration without code overwrites.",
      starter: {
        summary: "Git CLI (local version control tracking), GitHub / GitLab / Bitbucket (remote cloud hosting & PR reviews).",
        coreConcept: "Distributed version control and pull request code review workflows.",
        quickExample: "git clone -> git checkout -b feature -> Pull Request"
      },
      deeper: {
        tradeoffs: "Git CLI gives maximum command power; GUI clients (Tower, GitKraken) simplify branch visualization.",
        edgeCases: "Merge conflicts in lockfiles during concurrent pull requests."
      },
      functions: [
        "Git CLI — clone, commit, push, pull, rebase, cherry-pick",
        "GitHub / GitLab — remote repositories, Pull Requests, code review comments, and issue boards"
      ],
      objectives: [
        "Open a clear Pull Request with reproduction steps and screenshot context",
        "Rebase feature branches onto main to maintain linear commit history"
      ],
      keyPoints: [
        "Never push directly to main branch in team repositories; always use Pull Requests"
      ],
      examples: [
        { isCode: true, language: "bash", text: "git checkout -b feature/auth\ngit commit -m \"feat: add login page\"\ngit push origin feature/auth" }
      ],
      sources: [
        { label: "Pro Git Book", url: "https://git-scm.com/book/en/v2", type: "Official Guide" },
        { label: "GitHub Documentation", url: "https://docs.github.com/", type: "Official Docs" },
        { label: "GitLab Docs", url: "https://docs.gitlab.com/", type: "Official Docs" }
      ]
    },
    {
      term: "Build & Dependency Management Tools",
      slug: "build-dependency-management-reference",
      meaning: "Language-specific librarians that install third-party libraries and pin exact versions via lockfiles.",
      purpose: "Guarantee reproducible application builds across developer machines and production servers.",
      starter: {
        summary: "JS (npm/pnpm), Python (pip/poetry), Java (Maven/Gradle), Go (go.mod), Rust (Cargo).",
        coreConcept: "Package declaration files + exact version lockfiles.",
        quickExample: "package.json + package-lock.json (Node) / poetry.lock (Python)"
      },
      deeper: {
        tradeoffs: "pnpm saves gigabytes of disk space by hard-linking packages; npm is universal without extra setup.",
        edgeCases: "Breaking dependency updates caused by missing lockfiles."
      },
      functions: [
        "JavaScript/Node: npm, Yarn, pnpm (package-lock.json / pnpm-lock.yaml)",
        "Python: pip, Poetry, Pipenv (poetry.lock / Pipfile.lock)",
        "Java/JVM: Maven (pom.xml), Gradle (build.gradle)",
        "Go & Rust: Go Modules (go.mod), Cargo (Cargo.toml)"
      ],
      objectives: [
        "Identify the programming language and build system from repository config files",
        "Explain why lockfiles MUST be committed to Git"
      ],
      keyPoints: [
        "Lockfiles prevent 'works on my machine' version drift across environments"
      ],
      examples: [
        { isCode: true, language: "bash", text: "pnpm install   # Fast JS package install\npoetry install # Isolated Python virtualenv install" }
      ],
      sources: [
        { label: "npm Docs", url: "https://docs.npmjs.com/", type: "Official Docs" },
        { label: "Python Poetry Documentation", url: "https://python-poetry.org/docs/", type: "Official Docs" },
        { label: "Cargo (Rust) Documentation", url: "https://doc.rust-lang.org/cargo/", type: "Official Docs" }
      ]
    },
    {
      term: "Testing & Quality Assurance Tooling",
      slug: "testing-qa-tooling-reference",
      meaning: "Software suites that verify your code behaves correctly before users find bugs in production.",
      purpose: "Automate code quality, unit verification, E2E browser testing, and formatting enforcement.",
      starter: {
        summary: "Unit (Jest/Vitest/PyTest), E2E (Playwright/Cypress), Linters (ESLint/Prettier/Black).",
        coreConcept: "Automated test runners, linters, and formatters.",
        quickExample: "npm test (Jest/Vitest) && npx eslint ."
      },
      deeper: {
        tradeoffs: "Vitest uses Vite for ultra-fast ESM unit testing; Jest remains the legacy standard.",
        edgeCases: "Flaky E2E browser tests failing CI builds due to network latency."
      },
      functions: [
        "Unit Testing: Jest / Vitest (JS/TS), PyTest (Python), JUnit 5 (Java), Go test (Go)",
        "E2E & Integration: Playwright, Cypress, Testcontainers (Docker DB tests)",
        "Linters & Formatters: ESLint, Prettier, Black (Python), gofmt, rustfmt, SonarQube"
      ],
      objectives: [
        "Set up pre-commit git hooks using Husky to run linters before commits",
        "Write Playwright tests for critical user login and checkout flows"
      ],
      keyPoints: [
        "Linters catch syntax & code quality issues; formatters enforce consistent indent style"
      ],
      examples: [
        { isCode: true, language: "bash", text: "npx vitest run          # Run fast unit tests\nnpx playwright test     # Run E2E browser tests" }
      ],
      sources: [
        { label: "Vitest Documentation", url: "https://vitest.dev/", type: "Official Docs" },
        { label: "Playwright Documentation", url: "https://playwright.dev/docs/intro", type: "Official Docs" },
        { label: "ESLint Documentation", url: "https://eslint.org/docs/latest/", type: "Official Docs" }
      ]
    },
    {
      term: "DevOps & Containerization Tooling",
      slug: "devops-containerization-tooling-reference",
      meaning: "Software tools that package applications into isolated containers and deploy them automatically.",
      purpose: "Package, orchestrate, and deploy application workloads reliably across cloud infrastructure.",
      starter: {
        summary: "Docker (containerization), Kubernetes & Helm (container orchestration), GitHub Actions (CI/CD).",
        coreConcept: "Container shipping and automated deployment pipelines.",
        quickExample: "docker-compose up -d && kubectl apply -f deployment.yaml"
      },
      deeper: {
        tradeoffs: "Docker Compose is simple for local multi-container dev; Kubernetes is required for production auto-scaling.",
        edgeCases: "Un-cached Docker build layers inflating CI build times."
      },
      functions: [
        "Docker & Docker Compose — package app and services into reproducible containers",
        "Kubernetes & Helm — orchestrate container pods, load balancing, and self-healing across nodes",
        "CI/CD Automation — GitHub Actions, GitLab CI, Jenkins pipelines automating shipping"
      ],
      objectives: [
        "Write Docker Compose files to spin up local Postgres + Redis + API environments with 1 command",
        "Configure GitHub Actions workflows to deploy docker images on push to main"
      ],
      keyPoints: [
        "Docker Compose is for local multi-container dev; Kubernetes is for production cluster scaling"
      ],
      examples: [
        { isCode: true, language: "yaml", text: "version: '3.8'\nservices:\n  web: { build: '.', ports: ['3000:3000'] }\n  db: { image: 'postgres:15-alpine' }" }
      ],
      sources: [
        { label: "Docker Docs", url: "https://docs.docker.com/", type: "Official Docs" },
        { label: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/", type: "Official Docs" },
        { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "Official Docs" }
      ]
    },
    {
      term: "Database Clients & ORMs",
      slug: "database-clients-orms-reference",
      meaning: "Tools and software layers for querying databases and mapping rows to programming objects.",
      purpose: "Interface with SQL & NoSQL databases cleanly using GUIs or type-safe object mappers.",
      starter: {
        summary: "GUI Clients: DBeaver, pgAdmin, Compass | JS ORMs: Prisma, TypeORM | Python ORMs: SQLAlchemy, Django ORM.",
        coreConcept: "ORMs map DB tables to code classes; Raw SQL gives maximum query control.",
        quickExample: "const users = await prisma.user.findMany()"
      },
      deeper: {
        tradeoffs: "ORMs accelerate development and prevent SQL injection, but complex ORM queries can trigger N+1 performance pitfalls.",
        edgeCases: "Schema migration conflicts in multi-developer teams."
      },
      functions: [
        "DBeaver / TablePlus / pgAdmin — universal GUI clients for querying databases",
        "Prisma / SQLAlchemy / Hibernate — Object-Relational Mappers (ORMs)",
        "Alembic / Flyway / Liquibase — database schema migration versioning tools"
      ],
      objectives: [
        "Execute raw SQL queries using DBeaver or pgAdmin",
        "Manage database schema migrations versioned in Git"
      ],
      keyPoints: [
        "Never run destructive migrations on production without backup snapshots",
        "Prisma provides auto-generated type-safe TypeScript query clients"
      ],
      examples: [
        { isCode: true, language: "typescript", text: "// Prisma ORM query\nconst user = await prisma.user.findUnique({\n  where: { email: 'ana@example.com' },\n  include: { posts: true }\n});" }
      ],
      sources: [
        { label: "Prisma Docs", url: "https://www.prisma.io/docs", type: "Official Docs" },
        { label: "SQLAlchemy Documentation", url: "https://docs.sqlalchemy.org/", type: "Official Docs" },
        { label: "DBeaver Community Docs", url: "https://dbeaver.com/", type: "Official Docs" }
      ]
    }
  ]
};
