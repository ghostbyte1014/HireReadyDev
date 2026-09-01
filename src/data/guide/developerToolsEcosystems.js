export const developerToolsEcosystemsDomain = {
  domain: "Developer Tools",
  color: "#6B6558",
  entries: [
    {
      term: "Git",
      slug: "git-version-control",
      meaning: "A time machine for your code — every commit is a save point you can return to or branch off from.",
      purpose: "Track code changes over time and collaborate safely across branches.",
      starter: {
        summary: "Working Directory → Staging (`git add`) → Commit (`git commit`) → Remote (`git push`).",
        coreConcept: "Distributed version control system.",
        quickExample: "git checkout -b feature/auth"
      },
      deeper: {
        tradeoffs: "Rebase keeps linear commit history clean; Merge preserves true chronological branch graphs.",
        edgeCases: "Detached HEAD states, complex merge conflicts."
      },
      functions: ["Commit snapshots", "Branch isolation", "Merge / Rebase", "Remote Push/Pull"],
      objectives: ["Resolve Git merge conflicts confidently"],
      keyPoints: ["Commit early and often with clear messages"],
      examples: [{ isCode: true, language: "bash", text: "git checkout -b feature/login\ngit commit -m \"feat: add login form\"\ngit push origin feature/login" }],
      sources: [
        { label: "Pro Git Book", url: "https://git-scm.com/book/en/v2", type: "Official Guide" },
        { label: "Atlassian Git Tutorial", url: "https://www.atlassian.com/git/tutorials", type: "Guide" },
        { label: "Git Documentation", url: "https://git-scm.com/docs", type: "Official Docs" }
      ]
    },
    {
      term: "GitHub",
      slug: "github-collaboration-platform",
      meaning: "Google Docs for code — Git tracks history locally, GitHub hosts it in the cloud for team collaboration.",
      purpose: "Host Git repositories remotely with code reviews, pull requests, and CI/CD pipelines.",
      starter: {
        summary: "Remote repo hosting, Pull Requests for code review, GitHub Actions for CI/CD.",
        coreConcept: "Cloud Git collaboration and code review platform.",
        quickExample: "Open Pull Request for code review"
      },
      deeper: {
        tradeoffs: "Public GitHub repos foster open-source contributions; private repos require team access permissions.",
        edgeCases: "Accidentally committing secret API keys to public GitHub repositories."
      },
      functions: ["Pull Requests", "Code Review Comments", "GitHub Actions CI/CD", "Issue Tracking"],
      objectives: ["Open a pull request with a clear description"],
      keyPoints: ["Forks give you your own copy of someone else's public repository"],
      examples: [{ isCode: false, text: "Fork a repo → make changes on feature branch → open Pull Request for review." }],
      sources: [
        { label: "GitHub Docs", url: "https://docs.github.com/", type: "Official Docs" },
        { label: "GitHub Skills Interactive Labs", url: "https://skills.github.com/", type: "Interactive Guide" },
        { label: "FreeCodeCamp: GitHub Tutorial", url: "https://www.freecodecamp.org/news/introduction-to-git-and-github/", type: "Tutorial" }
      ]
    },
    {
      term: "npm",
      slug: "npm-package-manager",
      meaning: "A librarian for JavaScript code — install and manage third-party open-source libraries.",
      purpose: "Manage dependencies and scripts in Node.js and browser JavaScript projects.",
      starter: {
        summary: "package.json lists top dependencies; package-lock.json pins exact versions.",
        coreConcept: "JavaScript package manager.",
        quickExample: "npm install express"
      },
      deeper: {
        tradeoffs: "package-lock.json guarantees identical builds across environments, but outdated dependencies risk security CVEs.",
        edgeCases: "Version mismatch between dev and production due to missing lockfiles."
      },
      functions: ["package.json declaration", "package-lock.json exact pinning", "Semantic Versioning (^, ~)"],
      objectives: ["Explain why lockfiles MUST be committed to Git"],
      keyPoints: ["Always commit package-lock.json to version control"],
      examples: [{ isCode: true, language: "json", text: "\"dependencies\": { \"express\": \"^4.18.2\" }" }],
      sources: [
        { label: "npm Documentation", url: "https://docs.npmjs.com/", type: "Official Docs" },
        { label: "MDN: Package management", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", type: "Official Docs" },
        { label: "NodeJS: An Introduction to the npm package manager", url: "https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager", type: "Official Guide" }
      ]
    },
    {
      term: "npx",
      slug: "npx-package-runner",
      meaning: "Borrowing a tool for one job without permanently buying and installing it in your toolbox.",
      purpose: "Run a Node package CLI command temporarily without global installation.",
      starter: {
        summary: "Downloads and executes a Node package command on demand, then cleans it up.",
        coreConcept: "On-demand package command execution.",
        quickExample: "npx create-react-app my-app"
      },
      deeper: {
        tradeoffs: "npx keeps your global npm environment clean, but requires an internet fetch when executing un-cached commands.",
        edgeCases: "Accidentally running outdated package versions if `@latest` isn't specified."
      },
      functions: ["One-off Command Execution", "Executes local node_modules/.bin binaries"],
      objectives: ["Use npx instead of global installs for starter commands"],
      keyPoints: ["Keeps your global environment free from global CLI bloat"],
      examples: [{ isCode: true, language: "bash", text: "npx create-vite@latest my-app --template react" }],
      sources: [
        { label: "npm docs: npx", url: "https://docs.npmjs.com/cli/v10/commands/npx", type: "Official Docs" },
        { label: "FreeCodeCamp: What is npx?", url: "https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/", type: "Guide" },
        { label: "NodeJS npx Overview", url: "https://nodejs.dev/en/learn/the-npx-nodejs-package-runner/", type: "Guide" }
      ]
    },
    {
      term: "Semantic versioning",
      slug: "semantic-versioning-semver",
      meaning: "A version number that tells a story: MAJOR (breaking), MINOR (new feature), PATCH (bug fix).",
      purpose: "Communicate the impact of package updates using standard MAJOR.MINOR.PATCH rules.",
      starter: {
        summary: "v1.4.2 → Major (1) = Breaking changes; Minor (4) = New feature; Patch (2) = Bug fix.",
        coreConcept: "MAJOR.MINOR.PATCH dependency rules.",
        quickExample: "1.4.2 -> 2.0.0 (Major breaking release)"
      },
      deeper: {
        tradeoffs: "Caret `^1.2.3` auto-upgrades minor/patch versions; tilde `~1.2.3` auto-upgrades patch versions only.",
        edgeCases: "Accidental breaking changes in minor semver package releases."
      },
      functions: ["MAJOR — breaking API changes", "MINOR — backward-compatible features", "PATCH — backward-compatible bug fixes"],
      objectives: ["Decide whether upgrading a package version requires testing before deployment"],
      keyPoints: ["A MAJOR version bump signals reading changelogs for breaking changes before upgrading"],
      examples: [{ isCode: true, language: "text", text: "1.4.2 → 1.4.3 (Patch fix)\n1.4.2 → 2.0.0 (Major breaking)" }],
      sources: [
        { label: "Semantic Versioning Spec", url: "https://semver.org/", type: "Standard" },
        { label: "npm Semver Calculator", url: "https://semver.npmjs.com/", type: "Tool" },
        { label: "GeeksforGeeks: Semantic Versioning", url: "https://www.geeksforgeeks.org/semantic-versioning/", type: "Guide" }
      ]
    },
    {
      term: "Package managers across languages",
      slug: "package-managers-across-languages",
      meaning: "Every programming language has its own version of 'npm' for managing third-party libraries.",
      purpose: "Manage dependencies reproducibly across different language ecosystems.",
      starter: {
        summary: "JS (npm/pnpm), Python (pip/poetry), Java (Maven/Gradle), Rust (Cargo), Go (go modules).",
        coreConcept: "Language-specific package management.",
        quickExample: "pip install -r requirements.txt (Python)"
      },
      deeper: {
        tradeoffs: "Cargo and Go modules build dependencies directly into compiled binaries; pip and npm rely on dynamic runtimes.",
        edgeCases: "Conflicting global vs local virtual environment package installs in Python."
      },
      functions: ["Python: pip / poetry", "PHP: Composer", "Java: Maven / Gradle", "Rust: Cargo"],
      objectives: ["Recognize a project's language from its package configuration file"],
      keyPoints: ["All package managers solve the same core job: reproducible dependency trees"],
      examples: [{ isCode: true, language: "bash", text: "pip install -r requirements.txt # Python\ncomposer install                  # PHP\ncargo build                       # Rust" }],
      sources: [
        { label: "pip Documentation", url: "https://pip.pypa.io/en/stable/", type: "Official Docs" },
        { label: "Cargo Documentation (Rust)", url: "https://doc.rust-lang.org/cargo/", type: "Official Docs" },
        { label: "Composer Documentation (PHP)", url: "https://getcomposer.org/doc/", type: "Official Docs" }
      ]
    },
    {
      term: "Terminal / CLI basics",
      slug: "terminal-cli-basics",
      meaning: "Talking directly to the computer with typed text commands instead of clicking icons.",
      purpose: "Execute file operations, system administration, and developer scripts quickly.",
      starter: {
        summary: "Navigation (pwd, ls, cd), Operations (cp, mv, rm), Inspection (cat, grep, find).",
        coreConcept: "Command line shell interaction.",
        quickExample: "grep -r 'TODO' ./src"
      },
      deeper: {
        tradeoffs: "CLI commands can be combined with pipes (`|`) for powerful scripting, but destructive commands like `rm -rf` have no undo trash bin.",
        edgeCases: "Accidental recursive directory deletion (`rm -rf /`)."
      },
      functions: ["pwd / ls / cd — navigation", "cp / mv / rm — file management", "cat / grep — text filtering", "Piping `|` — chain command outputs"],
      objectives: ["Find all occurrences of a word across files using `grep`"],
      keyPoints: ["`rm` has no trash bin — double check paths before running `rm -rf`"],
      examples: [{ isCode: true, language: "bash", text: "cat logs.txt | grep \"ERROR\" > errors.log" }],
      sources: [
        { label: "The Linux Command Line Book", url: "https://linuxcommand.org/tlcl.php", type: "Book Reference" },
        { label: "Ubuntu CLI Basics", url: "https://ubuntu.com/tutorials/command-line-for-beginners", type: "Tutorial" },
        { label: "MDN: Command line crash course", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line", type: "Official Docs" }
      ]
    },
    {
      term: "Types of IDEs",
      slug: "types-of-ides",
      meaning: "The software workshop you build code in — from lightweight text editors to full enterprise suites.",
      purpose: "Select software editors matched to language workflows and hardware specs.",
      starter: {
        summary: "VS Code (extensible lightweight), JetBrains (heavy enterprise), Vim/Neovim (terminal modal), Visual Studio (.NET).",
        coreConcept: "Developer workspace selection.",
        quickExample: "VS Code for React; IntelliJ for Java"
      },
      deeper: {
        tradeoffs: "IDEs offer out-of-the-box refactoring and debugging tools, but require more RAM/CPU than plain text editors.",
        edgeCases: "Slow IDE startup times on large monorepos."
      },
      functions: ["Code Autocomplete (LSP)", "Integrated Debugger", "Git GUI Controls"],
      objectives: ["Explain the difference between a plain text editor and a full IDE"],
      keyPoints: ["The 'best' editor fits your language ecosystem and workflow"],
      examples: [{ isCode: false, text: "IntelliJ IDEA for Java refactoring; VS Code for web frontend." }],
      sources: [
        { label: "VS Code Docs", url: "https://code.visualstudio.com/docs", type: "Official Docs" },
        { label: "JetBrains IDE Overview", url: "https://www.jetbrains.com/products/", type: "Official Guide" },
        { label: "Neovim Documentation", url: "https://neovim.io/doc/", type: "Official Docs" }
      ]
    },
    {
      term: "File extensions",
      slug: "file-extensions-reference",
      meaning: "A file's name tag hinting at what format is inside before you open it.",
      purpose: "Recognize source code, configuration, data, and documentation formats.",
      starter: {
        summary: "Code (.js, .py, .ts), Data (.json, .csv, .yaml), Config (.env, .toml), Docs (.md).",
        coreConcept: "Filename extension conventions.",
        quickExample: "docker-compose.yml, .env, package.json"
      },
      deeper: {
        tradeoffs: "Extensions are conventions; altering an extension does NOT convert the underlying binary format.",
        edgeCases: "Hidden `.env` files not showing up in default file explorers."
      },
      functions: ["Code extensions", "Data format extensions", "Config extensions"],
      objectives: ["Recognize an unfamiliar project's tech stack from its file extensions"],
      keyPoints: ["Seeing `.env`, `Dockerfile`, and `package.json` signals a Dockerized Node project"],
      examples: [{ isCode: false, text: "notes.md = Markdown document; config.json = JSON data." }],
      sources: [
        { label: "Wikipedia: Filename Extension", url: "https://en.wikipedia.org/wiki/Filename_extension", type: "Reference" },
        { label: "FileInfo: Developer Files", url: "https://fileinfo.com/filetypes/developer", type: "Lookup Tool" },
        { label: "MDN: Common MIME types", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types", type: "Official Docs" }
      ]
    },
    {
      term: "Essential tech resources",
      slug: "essential-tech-resources",
      meaning: "Knowing where to look up authoritative answers is as important as memorizing concepts.",
      purpose: "Navigate documentation, Stack Overflow, and technical roadmaps effectively.",
      starter: {
        summary: "Official Documentation (primary source), MDN (Web), DevDocs.io (unified docs), roadmap.sh (learning paths).",
        coreConcept: "Authoritative documentation lookup.",
        quickExample: "MDN Web Docs for JavaScript API specs"
      },
      deeper: {
        tradeoffs: "Official docs are the most accurate and up-to-date; random blog posts can contain outdated or deprecated code examples.",
        edgeCases: "Copying outdated Stack Overflow answers that reference deprecated framework methods."
      },
      functions: ["MDN Web Docs", "Official Framework Documentation", "roadmap.sh Developer Paths"],
      objectives: ["Build a habit of checking official documentation first"],
      keyPoints: ["Official 'Getting Started' docs are almost always more current than third-party blog posts"],
      examples: [{ isCode: false, text: "Use devdocs.io to search offline documentation for multiple languages." }],
      sources: [
        { label: "roadmap.sh", url: "https://roadmap.sh/", type: "Guide" },
        { label: "DevDocs API Documentation", url: "https://devdocs.io/", type: "Documentation Aggregator" },
        { label: "MDN Web Docs", url: "https://developer.mozilla.org/", type: "Official Docs" }
      ]
    }
  ]
};
