export const processPracticeDomain = {
  domain: "Process & Practice",
  color: "#7A5C8A",
  entries: [
    {
      term: "Software development life cycle",
      slug: "sdlc-software-development-life-cycle",
      meaning: "The full journey a feature takes from an initial idea to production maintenance.",
      purpose: "Structure software delivery phases from requirements gathering to maintenance.",
      starter: {
        summary: "Requirements → Design → Implementation → Testing → Deployment → Maintenance.",
        coreConcept: "Structured software delivery lifecycle.",
        quickExample: "Two-week Agile Sprint workflow"
      },
      deeper: {
        tradeoffs: "Waterfall suits fixed-requirement projects (flight software); Agile suits evolving consumer applications.",
        edgeCases: "Scope creep altering sprint goals."
      },
      functions: ["Requirements Gathering", "System Design", "Implementation", "Testing & QA", "Deployment & Maintenance"],
      objectives: ["Explain why Agile suits evolving requirements while Waterfall suits fixed specifications"],
      keyPoints: ["A sprint ends with a working software increment, not just a status report"],
      examples: [{ isCode: false, text: "Sprint planning on Monday → build all week → Friday demo → retrospective." }],
      sources: [
        { label: "Wikipedia: SDLC", url: "https://en.wikipedia.org/wiki/Systems_development_life_cycle", type: "Reference" },
        { label: "AWS: What is SDLC?", url: "https://aws.amazon.com/what-is/sdlc/", type: "Official Guide" },
        { label: "Atlassian Agile Guide", url: "https://www.atlassian.com/agile", type: "Guide" }
      ]
    },
    {
      term: "Kanban vs Scrum",
      slug: "kanban-vs-scrum",
      meaning: "Two rhythms for managing work — Scrum in fixed time-boxed sprints; Kanban in continuous flow.",
      purpose: "Select Agile project management frameworks matched to team workflow.",
      starter: {
        summary: "Scrum (2-week fixed sprints, standups, retros). Kanban (continuous flow board with WIP limits).",
        coreConcept: "Time-boxed sprints (Scrum) vs continuous flow (Kanban).",
        quickExample: "Feature team = Scrum; Support/Ops team = Kanban"
      },
      deeper: {
        tradeoffs: "Scrum provides predictable sprint commitments; Kanban handles unexpected incoming support tickets gracefully.",
        edgeCases: "Violating Work-In-Progress (WIP) limits in Kanban boards."
      },
      functions: ["Scrum Sprints & Ceremonies", "Kanban Work-In-Progress (WIP) limits"],
      objectives: ["Decide whether Scrum or Kanban fits a team's actual workload"],
      keyPoints: ["Kanban WIP limits force teams to finish existing tasks before starting new ones"],
      examples: [{ isCode: false, text: "Support team fixing incoming bug tickets uses Kanban with WIP limit of 3." }],
      sources: [
        { label: "Atlassian: Kanban vs Scrum", url: "https://www.atlassian.com/agile/kanban/kanban-vs-scrum", type: "Guide" },
        { label: "Scrum.org: What is Scrum?", url: "https://www.scrum.org/resources/what-is-scrum", type: "Official Guide" },
        { label: "Kanban University Guide", url: "https://kanban.university/kanban-guide/", type: "Official Guide" }
      ]
    },
    {
      term: "Testing types",
      slug: "testing-types",
      meaning: "Different zoom levels for verifying software quality — Unit (single function), Integration (modules), E2E (browser).",
      purpose: "Catch bugs at the right level of abstraction.",
      starter: {
        summary: "Testing Pyramid: Many fast Unit tests, moderate Integration tests, few slow E2E tests.",
        coreConcept: "Multi-tier testing strategy.",
        quickExample: "expect(add(2, 3)).toBe(5)"
      },
      deeper: {
        tradeoffs: "E2E tests catch real browser interaction bugs, but are slow and brittle.",
        edgeCases: "Flaky E2E tests failing CI builds."
      },
      functions: ["Unit Testing", "Integration Testing", "End-to-End (E2E) Testing", "Regression Testing"],
      objectives: ["Select appropriate test types for bug prevention"],
      keyPoints: ["Unit tests execute in milliseconds; E2E tests take seconds or minutes"],
      examples: [{ isCode: true, language: "javascript", text: "test(\"adds numbers\", () => {\n  expect(add(2, 3)).toBe(5);\n});" }],
      sources: [
        { label: "Martin Fowler: Test Pyramid", url: "https://martinfowler.com/bliki/TestPyramid.html", type: "Industry Standard" },
        { label: "MDN: Automated testing", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", type: "Official Docs" },
        { label: "Jest Documentation", url: "https://jestjs.io/docs/getting-started", type: "Official Docs" }
      ]
    },
    {
      term: "Code review practices",
      slug: "code-review-practices",
      meaning: "A second pair of eyes reviewing code before shipping to catch mistakes and share knowledge.",
      purpose: "Maintain code quality standards, security, and team knowledge sharing.",
      starter: {
        summary: "Review pull requests for correctness, readability, test coverage, and feedback clarity.",
        coreConcept: "Peer code inspection before merging.",
        quickExample: "Nit: consider renaming `x` to `userCount`"
      },
      deeper: {
        tradeoffs: "Thorough code reviews prevent production bugs, but huge PRs (>500 lines) rarely get thorough reviews.",
        edgeCases: "Personal attacks in code review comments."
      },
      functions: ["Pull Request Code Reviews", "Actionable Constructive Feedback", "Automated Linter Checks"],
      objectives: ["Give actionable feedback on Pull Requests"],
      keyPoints: ["Keep Pull Requests small (<200 lines) for thorough reviews"],
      examples: [{ isCode: false, text: "'This loop re-fetches user data on every iteration — can we fetch once outside?'" }],
      sources: [
        { label: "Google Engineering Code Review", url: "https://google.github.io/eng-practices/review/", type: "Standard" },
        { label: "Palantir Code Review Guidelines", url: "https://github.com/palantir/blueprint/wiki/Code-Review-Guidelines", type: "Guide" },
        { label: "Awesome Code Review Practices", url: "https://github.com/joho/awesome-code-review", type: "Curated Resource" }
      ]
    },
    {
      term: "Feature flags",
      slug: "feature-flags-toggles",
      meaning: "A light switch inside your code for a feature — flip it on or off without deploying new code.",
      purpose: "Decouple code deployment from feature release risk.",
      starter: {
        summary: "Wrap new logic in conditional flag checks. Toggle per-user, per-percentage, or globally.",
        coreConcept: "Runtime feature toggling.",
        quickExample: "if (flags.isEnabled('new_ui')) return renderNewUI();"
      },
      deeper: {
        tradeoffs: "Feature flags allow instant remote kill-switches, but create technical debt if old flags aren't cleaned up.",
        edgeCases: "Stale unused feature flags cluttering codebase logic."
      },
      functions: ["Boolean Feature Switches", "Percentage Rollouts (Canary)", "User Targeting Flags"],
      objectives: ["Explain how feature flags enable emergency remote kill-switches"],
      keyPoints: ["Clean up old feature flags once a rollout hits 100%"],
      examples: [{ isCode: true, language: "javascript", text: "if (featureFlags.isEnabled(\"new_checkout\", user)) {\n  return renderNewCheckout();\n}" }],
      sources: [
        { label: "Martin Fowler: Feature Toggles", url: "https://martinfowler.com/articles/feature-toggles.html", type: "Guide" },
        { label: "LaunchDarkly Feature Flag Guide", url: "https://launchdarkly.com/blog/what-are-feature-flags/", type: "Guide" },
        { label: "Unleash Open Source Feature Flags", url: "https://www.getunleash.io/docs", type: "Official Docs" }
      ]
    },
    {
      term: "Technical documentation",
      slug: "technical-documentation",
      meaning: "Writing down what the code doesn't say out loud — the 'why' and 'how to set up'.",
      purpose: "Make codebases usable and maintainable for developers who didn't write them.",
      starter: {
        summary: "README (setup instructions), API docs (OpenAPI/Swagger), ADRs (Architecture Decision Records).",
        coreConcept: "Developer onboarding and architecture documentation.",
        quickExample: "README.md setup instructions"
      },
      deeper: {
        tradeoffs: "Documentation makes onboarding seamless, but outdated documentation is worse than none because it misleads.",
        edgeCases: "Stale README instructions referencing old environment variables."
      },
      functions: ["README.md Setup Guides", "API Reference Docs", "Architecture Decision Records (ADRs)"],
      objectives: ["Write a README that lets a new developer run the project independently"],
      keyPoints: ["Keep documentation co-located with code in Git"],
      examples: [{ isCode: true, language: "markdown", text: "## Setup\n1. `npm install` \n2. `cp .env.example .env` \n3. `npm run dev`" }],
      sources: [
        { label: "Google Technical Writing", url: "https://developers.google.com/tech-writing", type: "Course" },
        { label: "Write the Docs Community", url: "https://www.writethedocs.org/guide/", type: "Guide" },
        { label: "Make a README Guide", url: "https://www.makeareadme.com/", type: "Guide" }
      ]
    }
  ]
};
