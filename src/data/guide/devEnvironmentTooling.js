export const devEnvironmentToolingDomain = {
  domain: "Developer Tools & Environment Reference",
  color: "#475569",
  entries: [
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
