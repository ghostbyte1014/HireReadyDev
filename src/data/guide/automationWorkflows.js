export const automationWorkflowsDomain = {
  domain: "Automation & Modern Workflows",
  color: "#3C6B8A",
  entries: [
    {
      term: "RPA (Robotic Process Automation)",
      slug: "rpa-robotic-process-automation",
      meaning: "Software bots that mimic human clicks and typing across repetitive legacy app screens.",
      purpose: "Automate rule-based repetitive UI steps across legacy applications without APIs.",
      starter: {
        summary: "Bots record and replay user interface actions (clicks, copy-paste, form fills).",
        coreConcept: "UI-level software automation for legacy systems.",
        quickExample: "UiPath bot clicking desktop screen buttons"
      },
      deeper: {
        tradeoffs: "RPA automates legacy software fast without API access, but is extremely fragile to UI layout changes.",
        edgeCases: "RPA script failures when application UI buttons shift position."
      },
      functions: ["UI Interaction Recording", "Form Auto-fill", "Legacy Data Extraction"],
      objectives: ["Recognize when RPA fits (legacy apps without APIs) vs when API integrations are better"],
      keyPoints: ["RPA is fragile to UI visual layout changes"],
      examples: [{ isCode: false, text: "Copying data from an old desktop accounting tool into a spreadsheet using a UiPath bot." }],
      sources: [
        { label: "UiPath: What is RPA?", url: "https://www.uipath.com/rpa/robotic-process-automation", type: "Guide" },
        { label: "IBM: Robotic Process Automation", url: "https://www.ibm.com/topics/rpa", type: "Official Guide" },
        { label: "Automation Anywhere: RPA Overview", url: "https://www.automationanywhere.com/rpa/robotic-process-automation", type: "Guide" }
      ]
    },
    {
      term: "n8n (Fair-Code Workflow Automation)",
      slug: "n8n-workflow-automation",
      meaning: "A self-hostable, node-based visual workflow automation engine with 400+ native connectors and JavaScript code nodes.",
      purpose: "Connect APIs, databases, and AI models visually without monthly per-operation subscription costs.",
      starter: {
        summary: "Build complex multi-step automation flows visually or self-host via Docker on your own server.",
        coreConcept: "Node-based visual API orchestration with embedded custom JS/Python execution.",
        quickExample: "Webhook Trigger -> Extract JSON -> Call LLM API -> Save to Postgres -> Notify Slack"
      },
      deeper: {
        tradeoffs: "n8n gives 100% data privacy and zero per-execution costs when self-hosted; however, you must manage your own server infrastructure and execution logs.",
        edgeCases: "High-frequency webhook triggers filling disk space with un-pruned execution log history."
      },
      functions: [
        "🚦 Decision Matrix: Use n8n for complex multi-branch logic, self-hosted data privacy, and custom JS code nodes; avoid when a simple 2-step no-code Zapier trigger suffices.",
        "💣 Production Gotcha: Heavy webhook traffic without database log pruning will crash your PostgreSQL backend when disk space fills.",
        "400+ Native Integrations (Slack, Postgres, OpenAI, Google Sheets, GitHub)",
        "Embedded Code Node executing inline JavaScript / Python data transformations",
        "Error Trigger Sub-workflows catching failed API executions automatically"
      ],
      objectives: [
        "Self-host n8n using Docker Compose with PostgreSQL backend",
        "Build a resilient webhook workflow with automatic retry and error alert handlers"
      ],
      keyPoints: [
        "n8n offers fair-code self-hosting with full source code visibility on GitHub",
        "Sub-workflows allow breaking complex enterprise logic into modular, reusable nodes"
      ],
      examples: [
        { isCode: true, language: "javascript", text: "// Custom n8n Code Node (JavaScript)\nfor (const item of $input.all()) {\n  item.json.fullName = `${item.json.firstName} ${item.json.lastName}`.toUpperCase();\n  item.json.processedAt = new Date().toISOString();\n}\nreturn $input.all();" }
      ],
      sources: [
        { label: "n8n Official Site", url: "https://n8n.io/", type: "Official Site" },
        { label: "n8n Documentation", url: "https://docs.n8n.io/", type: "Official Docs" },
        { label: "n8n GitHub Repository", url: "https://github.com/n8n-io/n8n", type: "Open Source" },
        { label: "n8n Workflow Templates Library", url: "https://n8n.io/workflows/", type: "Templates" }
      ]
    },
    {
      term: "Make.com (Visual Automation & Scenario Builder)",
      slug: "make-com-automation",
      meaning: "A cloud-based visual automation platform that connects apps through interactive scenarios and visual data mapping.",
      purpose: "Build visual multi-step automation scenarios with drag-and-drop routing without managing infrastructure.",
      starter: {
        summary: "Visual scenario builder featuring multi-branch routers, iterator/aggregator arrays, and real-time payload debugging.",
        coreConcept: "Drag-and-drop cloud visual API integration.",
        quickExample: "Watch Orders -> Router -> Branch A (VIP Customer Slack Alert) / Branch B (Standard Email)"
      },
      deeper: {
        tradeoffs: "Make offers superior visual data mapping and router branching; however, complex loops rapidly consume monthly operation quotas.",
        edgeCases: "Infinite scenario execution loops caused by self-triggering webhooks."
      },
      functions: [
        "🚦 Decision Matrix: Use Make for rapid visual prototyping and complex array mapping; avoid for heavy sub-second database ETL pipelines.",
        "💣 Production Gotcha: Unchecked Array Iterators will exhaust your monthly operation quota in minutes.",
        "Visual Routers & Filter Criteria for branching execution paths",
        "Array Iterators & Aggregators for handling JSON lists cleanly",
        "Built-in Data Store for persistent scenario state retention"
      ],
      objectives: [
        "Construct multi-branch scenarios with fallback error handling routes",
        "Map nested JSON payloads between different third-party REST APIs"
      ],
      keyPoints: [
        "Formerly known as Integromat before rebranding to Make.com",
        "Real-time execution bubbles show live payload data flowing through each module"
      ],
      examples: [
        { isCode: false, text: "Scenario: When new Stripe payment succeeds -> Route by amount -> If > $500: Post urgent Slack notification & Assign account manager in HubSpot." }
      ],
      sources: [
        { label: "Make.com Platform", url: "https://www.make.com/", type: "Official Site" },
        { label: "Make Help Center & Docs", url: "https://www.make.com/en/help", type: "Official Docs" },
        { label: "Make Integration Apps Index", url: "https://www.make.com/en/integrations", type: "App Directory" }
      ]
    },
    {
      term: "Apache Airflow & Prefect (Data Orchestration DAGs)",
      slug: "apache-airflow-prefect-data-dags",
      meaning: "Python-based task orchestration engines that schedule, execute, and monitor complex data processing pipelines as Directed Acyclic Graphs (DAGs).",
      purpose: "Orchestrate large-scale ETL/ELT data pipelines, machine learning training workflows, and warehouse syncs.",
      starter: {
        summary: "Define data pipeline task dependencies in pure Python code (Task A >> Task B >> Task C).",
        coreConcept: "Programmatic Directed Acyclic Graph (DAG) scheduling.",
        quickExample: "@dag def daily_etl(): extract_sql() >> transform_spark() >> load_snowflake()"
      },
      deeper: {
        tradeoffs: "Airflow handles massive enterprise data pipelines with rich UI monitoring; however, setting up Celery/Kubernetes executors requires deep DevOps effort.",
        edgeCases: "Scheduler performance degradation when managing thousands of sub-minute micro-DAGs."
      },
      functions: [
        "🚦 Decision Matrix: Use Airflow/Prefect for complex Python data warehouse ETL pipelines; avoid for lightweight real-time HTTP webhooks.",
        "💣 Production Gotcha: Modifying global DAG code files directly during active execution breaks state idempotency.",
        "Python-as-Code DAG Definitions with explicit dependency operators (`>>`)",
        "Automatic Backfilling & Catchup for failed historical date runs",
        "Rich Monitoring Web UI displaying task duration heatmaps and log outputs"
      ],
      objectives: [
        "Write a Python Airflow DAG with task retries and Slack failure alerts",
        "Differentiate between Airflow (legacy enterprise standard) and Prefect (modern dynamic Python workflow engine)"
      ],
      keyPoints: [
        "Prefect allows dynamic Python code execution without strict static DAG parsing",
        "Airflow is the de-facto standard in enterprise data engineering (AWS MWAA, GCP Cloud Composer)"
      ],
      examples: [
        { isCode: true, language: "python", text: "# Apache Airflow Python DAG Example\nfrom airflow import DAG\nfrom airflow.operators.python import PythonOperator\nfrom datetime import datetime\n\nwith DAG('daily_analytics', start_date=datetime(2026, 1, 1), schedule_interval='0 2 * * *') as dag:\n    extract = PythonOperator(task_id='extract', python_callable=fetch_db_data)\n    transform = PythonOperator(task_id='transform', python_callable=clean_metrics)\n    extract >> transform" }
      ],
      sources: [
        { label: "Apache Airflow Docs", url: "https://airflow.apache.org/docs/", type: "Official Docs" },
        { label: "Prefect Documentation", url: "https://docs.prefect.io/", type: "Official Docs" },
        { label: "Astronomer Airflow Guides", url: "https://www.astronomer.io/guides/", type: "Guides" }
      ]
    },
    {
      term: "Temporal.io (Resilient Code Workflow Execution)",
      slug: "temporal-io-durable-execution",
      meaning: "A stateful, fault-tolerant workflow orchestration engine where code functions automatically resume execution after server crashes or network outages.",
      purpose: "Guarantee 100% completion of long-running business transactions (order fulfillment, multi-day user onboarding) without custom retry state machines.",
      starter: {
        summary: "Write normal code (loops, sleeps, API calls); if your server crashes midway, Temporal restores execution state exactly at the failure point.",
        coreConcept: "Durable execution through event sourcing history replay.",
        quickExample: "await workflow.sleep('3 days'); await sendFollowupEmail();"
      },
      deeper: {
        tradeoffs: "Temporal eliminates complex retry state machines and DB polling loops; however, workflow code MUST be strictly deterministic.",
        edgeCases: "Non-deterministic code changes (e.g. using `Math.random()` or non-versioned API calls) breaking history replay."
      },
      functions: [
        "🚦 Decision Matrix: Use Temporal when business workflows span hours, days, or weeks and CANNOT lose state during infrastructure restarts.",
        "💣 Production Gotcha: Introducing non-deterministic helper calls (`Date.now()`, `Math.random()`) directly in workflow functions will fail event replay validation.",
        "Durable Execution Engine restoring memory state after process crashes",
        "Workflow Versioning API for safe production code updates",
        "Built-in Exponential Backoff Retries for external Activity functions"
      ],
      objectives: [
        "Separate non-deterministic Activity functions (API calls, DB reads) from deterministic Workflow logic",
        "Implement a multi-day trial expiration workflow using Temporal timers"
      ],
      keyPoints: [
        "Used by Netflix, Uber, Coinbase, and Stripe for mission-critical payment and saga workflows",
        "Replaces complex multi-table SQL state machines with clean sequential code"
      ],
      examples: [
        { isCode: true, language: "typescript", text: "// Temporal TypeScript Workflow\nimport { proxyActivities, sleep } from '@temporalio/workflow';\n\nconst { chargeCreditCard, sendWelcomeEmail } = proxyActivities({ startToCloseTimeout: '1 minute' });\n\nexport async function subscriptionWorkflow(userId: string): Promise<void> {\n  await chargeCreditCard(userId);\n  await sendWelcomeEmail(userId);\n  await sleep('7 days'); // Durable sleep across server restarts!\n  await chargeCreditCard(userId);\n}" }
      ],
      sources: [
        { label: "Temporal.io Official Site", url: "https://temporal.io/", type: "Official Site" },
        { label: "Temporal Documentation", url: "https://docs.temporal.io/", type: "Official Docs" },
        { label: "Temporal Learning Portal", url: "https://learn.temporal.io/", type: "Courses" }
      ]
    },
    {
      term: "Webhooks",
      slug: "webhooks",
      meaning: "An automated message sent from one app to another the instant an event happens.",
      purpose: "Enable event-driven integrations between third-party services without polling HTTP endpoints.",
      starter: {
        summary: "Instead of polling GET /status every 5 seconds, a Webhook POSTs event data to your server immediately.",
        coreConcept: "Real-time HTTP POST event callbacks.",
        quickExample: "POST https://myapp.com/webhooks/stripe { 'event': 'payment_success' }"
      },
      deeper: {
        tradeoffs: "Webhooks eliminate wasteful API polling, but your endpoint must be resilient to spikes and idempotent to retries.",
        edgeCases: "Duplicate webhook delivery during network retries."
      },
      functions: ["Event Trigger", "HTTP POST Payload", "HMAC Signature Verification"],
      objectives: ["Build a webhook handler that verifies Stripe signature headers"],
      keyPoints: ["Webhooks push data in real time; polling pulls data on a schedule"],
      examples: [{ isCode: true, language: "javascript", text: "app.post('/webhook', (req, res) => {\n  const sig = req.headers['stripe-signature'];\n  // verify signature & process event\n  res.json({ received: true });\n});" }],
      sources: [
        { label: "Stripe Webhooks Guide", url: "https://docs.stripe.com/webhooks", type: "Official Guide" },
        { label: "GitHub Webhooks Docs", url: "https://docs.github.com/en/webhooks", type: "Official Docs" },
        { label: "Zapier: What are Webhooks?", url: "https://zapier.com/blog/what-are-webhooks/", type: "Guide" }
      ]
    },
    {
      term: "Cron jobs & scheduled automation",
      slug: "cron-jobs-scheduled-automation",
      meaning: "An alarm clock for code — 'run this task every day at 2am' without anyone remembering.",
      purpose: "Automate recurring tasks (backups, reports, cache refreshes) on fixed time schedules.",
      starter: {
        summary: "Cron syntax (minute hour day month weekday) defines recurring execution times.",
        coreConcept: "Time-based scheduled execution.",
        quickExample: "0 2 * * * (Every day at 2:00 AM)"
      },
      deeper: {
        tradeoffs: "Cron jobs schedule recurring work simply, but single-node crons lack distributed locking if multiple server instances run concurrently.",
        edgeCases: "Silent cron failures without log alerting."
      },
      functions: ["5-field Cron Syntax", "Automated Backups", "Nightly Batch Processing"],
      objectives: ["Read and write cron expressions confidently"],
      keyPoints: ["A failed scheduled job fails silently without explicit log monitoring"],
      examples: [{ isCode: true, language: "bash", text: "# Crontab entry:\n0 2 * * * /scripts/backup_db.sh" }],
      sources: [
        { label: "Crontab Guru Interactive", url: "https://crontab.guru/", type: "Tool" },
        { label: "Wikipedia: Cron", url: "https://en.wikipedia.org/wiki/Cron", type: "Reference" },
        { label: "DigitalOcean: How To Use Cron", url: "https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-18-04", type: "Guide" }
      ]
    },
    {
      term: "No-code / low-code platforms",
      slug: "no-code-low-code-platforms",
      meaning: "Building applications and automations by connecting visual blocks instead of typing code lines.",
      purpose: "Enable fast automation and internal app creation without traditional software development.",
      starter: {
        summary: "Zapier/Make (automation workflows), Webflow/Bubble (visual web apps), Airtable (relational spreadsheet).",
        coreConcept: "Visual drag-and-drop workflow development.",
        quickExample: "Trigger: New Google Sheet Row -> Action: Send Slack Message"
      },
      deeper: {
        tradeoffs: "No-code accelerates MVPs and internal tools 10x faster, but hits strict ceilings on complex business logic and vendor pricing at scale.",
        edgeCases: "Vendor lock-in on proprietary low-code platforms."
      },
      functions: ["Visual Workflow Trigger/Action", "Third-party API Connectors", "Internal Dashboard Builders"],
      objectives: ["Identify when a Zapier workflow saves weeks of custom development"],
      keyPoints: ["Great for internal tools and MVPs; hits limits on complex custom algorithms"],
      examples: [{ isCode: false, text: "'When new order arrives in Shopify, add row to Google Sheet and notify Slack' built in 10 minutes." }],
      sources: [
        { label: "Zapier No-Code Guide", url: "https://zapier.com/blog/what-is-no-code/", type: "Guide" },
        { label: "Make.com Platform", url: "https://www.make.com/", type: "Official Site" },
        { label: "Bubble.io Visual Development", url: "https://bubble.io/how-it-works", type: "Official Guide" }
      ]
    },
    {
      term: "Browser & test automation",
      slug: "browser-test-automation",
      meaning: "A robot browser that clicks through your web app like a real user to verify functionality automatically.",
      purpose: "Automate web application regression testing and repetitive web scraping tasks.",
      starter: {
        summary: "Playwright, Cypress, Selenium launch real headless browsers to click, fill forms, and assert UI behavior.",
        coreConcept: "Headless browser automated interaction.",
        quickExample: "await page.goto('/login'); await page.click('#submit');"
      },
      deeper: {
        tradeoffs: "Browser tests verify real end-to-end user flows, but are the slowest and most brittle test type in CI pipelines.",
        edgeCases: "Flaky tests caused by asynchronous element rendering delays."
      },
      functions: ["Headless Browser Control", "DOM Element Selection & Interaction", "Visual Regression Snapshots"],
      objectives: ["Write E2E browser tests for critical checkout or signup flows"],
      keyPoints: ["Playwright and Cypress are modern, fast alternatives to legacy Selenium"],
      examples: [{ isCode: true, language: "javascript", text: "await page.goto(\"https://example.com/login\");\nawait page.fill(\"#email\", \"test@example.com\");\nawait page.click(\"#submit\");" }],
      sources: [
        { label: "Playwright Documentation", url: "https://playwright.dev/docs/intro", type: "Official Docs" },
        { label: "Cypress Documentation", url: "https://docs.cypress.io/", type: "Official Docs" },
        { label: "Selenium Project", url: "https://www.selenium.dev/documentation/", type: "Official Docs" }
      ]
    }
  ]
};
