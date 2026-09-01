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
