export const TOOLING_REFERENCE = [
  {
    category: "Editor & IDE Recommendations",
    icon: "Code2",
    tools: [
      { name: "Visual Studio Code", desc: "Lightweight, highly extensible, ubiquitous across frontend, backend, and cloud development.", bestFor: "General Web, JS/TS, Python, Go" },
      { name: "JetBrains Suite (IntelliJ, PyCharm, WebStorm)", desc: "Deep code analysis, powerful refactoring, built-in database tools, and superior JVM/Python support.", bestFor: "Java, Python, Enterprise JS" },
      { name: "Visual Studio", desc: "Full-featured IDE built for Windows, .NET Framework, C#, and Azure integrations.", bestFor: ".NET / C#" },
      { name: "Vim / Neovim", desc: "Keyboard-driven modal editor running inside SSH terminals for extreme speed and remote server editing.", bestFor: "DevOps, Remote SSH, Systems" }
    ]
  },
  {
    category: "Version Control & Collaboration",
    icon: "GitBranch",
    tools: [
      { name: "Git CLI", desc: "Distributed version control system. Essential commands: clone, commit, push, pull, rebase, cherry-pick.", bestFor: "All Software Engineering" },
      { name: "GitHub / GitLab / Bitbucket", desc: "Cloud platforms providing pull requests, code reviews, CI/CD runners, and issue tracking.", bestFor: "Team Collaboration" }
    ]
  },
  {
    category: "Build & Dependency Management",
    icon: "Package",
    tools: [
      { name: "JavaScript / TypeScript", desc: "npm, Yarn, pnpm (lockfile: package-lock.json / pnpm-lock.yaml)", bestFor: "Node.js & Web Frontend" },
      { name: "Python", desc: "pip, Poetry, Pipenv (lockfile: poetry.lock / Pipfile.lock)", bestFor: "Data Science & Python Web" },
      { name: "Java / JVM", desc: "Maven (pom.xml), Gradle (build.gradle)", bestFor: "JVM Applications & Microservices" },
      { name: "Go & Rust", desc: "Go Modules (go.mod), Cargo (Cargo.toml)", bestFor: "Cloud Native & Systems" }
    ]
  },
  {
    category: "Testing & Quality Assurance",
    icon: "ShieldCheck",
    tools: [
      { name: "Unit Testing", desc: "Jest / Vitest (JS/TS), PyTest (Python), JUnit 5 (Java), Go test (Go)", bestFor: "Fast Isolated Logic Verification" },
      { name: "E2E & Integration", desc: "Playwright, Cypress, Testcontainers (Docker-backed DB tests)", bestFor: "Browser & Database Flows" },
      { name: "Linters & Formatters", desc: "ESLint, Prettier, Black (Python), gofmt, rustfmt, SonarQube", bestFor: "Code Quality & Style Rules" }
    ]
  },
  {
    category: "DevOps & Containerization",
    icon: "Layers",
    tools: [
      { name: "Docker & Docker Compose", desc: "Containerize applications with all system dependencies to ensure identical execution across dev and production.", bestFor: "Local & Server Environments" },
      { name: "Kubernetes & Helm", desc: "Container orchestration platform for scaling, self-healing, and managing pod deployments across cluster nodes.", bestFor: "Cloud-Scale Microservices" },
      { name: "CI/CD Automations", desc: "GitHub Actions, GitLab CI, Jenkins pipelines automating build -> test -> lint -> deploy.", bestFor: "Automated Shipping" }
    ]
  }
];
