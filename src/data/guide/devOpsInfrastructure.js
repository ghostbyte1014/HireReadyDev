export const devOpsInfrastructureDomain = {
  domain: "DevOps & Infrastructure",
  color: "#A0654A",
  entries: [
    {
      term: "Docker",
      slug: "docker",
      meaning: "A standardized shipping container for software — wraps your app and dependencies so it runs identically anywhere.",
      purpose: "Eliminate the 'works on my machine' bug by packaging code, runtime, and OS libraries together.",
      starter: {
        summary: "Images are immutable blueprints; Containers are running instances of images.",
        coreConcept: "Containers share the host OS kernel, making them much faster and lighter than Virtual Machines.",
        quickExample: "docker run -p 8080:80 nginx"
      },
      deeper: {
        tradeoffs: "Containers offer near-instant startup (~1s) and high density compared to VMs, but share kernel vulnerabilities if container permissions aren't isolated.",
        edgeCases: "Zombie processes in containers without init systems (tini), un-pruned dangling images eating host disk space."
      },
      functions: [
        "Dockerfile — script defining step-by-step image creation",
        "Image — read-only package containing code, runtime, libraries, environment",
        "Container — isolated runtime process instance of an image",
        "Docker Compose — tool for defining & running multi-container applications"
      ],
      objectives: [
        "Write multi-stage Dockerfiles to produce minimal production image sizes",
        "Orchestrate local database and app service containers using Docker Compose"
      ],
      keyPoints: [
        "Containers start in seconds; Virtual Machines take minutes",
        "Use multi-stage builds to exclude build tools (compilers, npm devDeps) from production images"
      ],
      examples: [
        { isCode: true, language: "dockerfile", text: "FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install --production\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]" }
      ],
      sources: [
        { label: "Docker Official Docs", url: "https://docs.docker.com/", type: "Official Docs" },
        { label: "Docker Curriculum Tutorial", url: "https://docker-curriculum.com/", type: "Free Tutorial" },
        { label: "FreeCodeCamp: Docker for Beginners", url: "https://www.freecodecamp.org/news/docker-simplified-a-hands-on-guide-for-beginners/", type: "Guide" }
      ]
    },
    {
      term: "Kubernetes",
      slug: "kubernetes",
      meaning: "An automated captain for a fleet of container ships — schedules containers across cluster nodes, scales them, and auto-heals crashed ones.",
      purpose: "Orchestrate containerized microservices across dozens or thousands of machines automatically.",
      starter: {
        summary: "Kubernetes manages Pods (containers) across Nodes (servers), ensuring high availability and auto-scaling.",
        coreConcept: "Declarative configuration: you specify desired state, Kubernetes continuously reconciles reality to match it.",
        quickExample: "kubectl apply -f deployment.yaml"
      },
      deeper: {
        tradeoffs: "Kubernetes delivers enterprise-scale auto-healing and zero-downtime rolling updates, but introduces massive operational complexity.",
        edgeCases: "OOMKilled pods exceeding memory limits, CrashLoopBackOff loops."
      },
      functions: [
        "Pod — smallest deployable unit (wraps one or more co-located containers)",
        "Deployment — manages pod replicas, rolling updates, and rollbacks",
        "Service — stable network entry point & internal load balancer for pods",
        "Ingress — manages external HTTP/HTTPS routing into cluster services"
      ],
      objectives: [
        "Explain how Kubernetes auto-heals a crashed application container",
        "Define deployment manifests with CPU/RAM resource requests and limits"
      ],
      keyPoints: [
        "You declare the desired state in YAML; the control loop works to match it",
        "Pods are ephemeral and can be destroyed/rescheduled at any time"
      ],
      examples: [
        { isCode: true, language: "yaml", text: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web" }
      ],
      sources: [
        { label: "Kubernetes Official Docs", url: "https://kubernetes.io/docs/home/", type: "Official Docs" },
        { label: "Kubernetes Basics Interactive", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/", type: "Interactive Tutorial" },
        { label: "DigitalOcean: An Introduction to Kubernetes", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-kubernetes", type: "Guide" }
      ]
    },
    {
      term: "CI/CD & Automated Pipelines",
      slug: "ci-cd-pipelines",
      meaning: "An automated assembly line for code — every commit gets built, tested, scanned, and shipped automatically.",
      purpose: "Deliver code changes frequently and reliably without manual error-prone deployment steps.",
      starter: {
        summary: "CI (Continuous Integration) tests every commit. CD (Continuous Delivery/Deployment) automates production releases.",
        coreConcept: "Push code → Run linter/tests → Build artifact → Deploy to production.",
        quickExample: "GitHub Actions / GitLab CI yaml workflow"
      },
      deeper: {
        tradeoffs: "Automated pipelines enable shipping code multiple times a day with confidence, but broken pipeline logic can block team deployments.",
        edgeCases: "Flaky unit tests failing pipeline builds, leaked environment secrets in CI logs."
      },
      functions: [
        "CI (Continuous Integration) — automated build & test execution per commit",
        "CD (Continuous Delivery) — automated staging deployment requiring approval",
        "CD (Continuous Deployment) — direct automated deployment to production"
      ],
      objectives: [
        "Write GitHub Actions workflow YAML files to test PRs automatically",
        "Implement secret masking in pipeline runner logs"
      ],
      keyPoints: [
        "Catch bugs minutes after commit rather than weeks later in production",
        "Store pipeline configs (`.github/workflows`) directly alongside code in Git"
      ],
      examples: [
        { isCode: true, language: "yaml", text: "name: CI Pipeline\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm install && npm test" }
      ],
      sources: [
        { label: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions", type: "Official Docs" },
        { label: "GitLab CI/CD Documentation", url: "https://docs.gitlab.com/ee/ci/", type: "Official Docs" },
        { label: "Red Hat: What is CI/CD?", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd", type: "Guide" }
      ]
    }
  ]
};
