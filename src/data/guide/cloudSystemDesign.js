export const cloudSystemDesignDomain = {
  domain: "Cloud & System Design",
  color: "#3D7A6E",
  entries: [
    {
      term: "Cloud Computing Models (IaaS, PaaS, SaaS)",
      slug: "cloud-computing-models",
      meaning: "A spectrum of 'how much do I manage myself' vs 'how much does the cloud provider manage for me'.",
      purpose: "Classify cloud services based on control vs operational responsibility.",
      starter: {
        summary: "IaaS (AWS EC2 - rent virtual server), PaaS (Heroku/Vercel - deploy code), SaaS (Gmail/Slack - use app).",
        coreConcept: "Higher abstraction = less server maintenance, but less low-level system control.",
        quickExample: "AWS EC2 (IaaS) vs Vercel (PaaS) vs Google Workspace (SaaS)"
      },
      deeper: {
        tradeoffs: "IaaS gives complete OS-level control but requires patch management; PaaS accelerates shipping code but locks you into platform paradigms.",
        edgeCases: "Cloud vendor lock-in, unexpected egress data bandwidth charges."
      },
      functions: [
        "IaaS (Infrastructure as a Service) — raw VMs, networks, and storage",
        "PaaS (Platform as a Service) — managed runtimes to deploy code directly",
        "SaaS (Software as a Service) — end-user ready software applications"
      ],
      objectives: [
        "Categorize cloud services accurately (AWS EC2 vs Firebase vs Gmail)",
        "Select the right cloud model based on team operational capacity"
      ],
      keyPoints: [
        "Shared Responsibility Model: Cloud manages hardware security; you manage data & code security",
        "PaaS is ideal for fast MVPs; IaaS is ideal for custom kernel/network control"
      ],
      examples: [
        { isCode: false, text: "Renting an empty apartment (IaaS) vs staying in a furnished hotel (PaaS) vs ordering takeout (SaaS)." }
      ],
      sources: [
        { label: "NIST Cloud Computing Definition", url: "https://www.nist.gov/publications/nist-definition-cloud-computing", type: "Standard" },
        { label: "AWS: What is Cloud Computing?", url: "https://aws.amazon.com/what-is-cloud-computing/", type: "Official Guide" },
        { label: "Cloudflare: IaaS vs PaaS vs SaaS", url: "https://www.cloudflare.com/learning/cloud/iaas-paas-saas/", type: "Guide" }
      ]
    },
    {
      term: "Serverless Computing",
      slug: "serverless-computing",
      meaning: "Renting execution time by the millisecond — code runs in response to events without running servers 24/7.",
      purpose: "Run event-driven backend functions that automatically scale from zero to high volume with zero idle server cost.",
      starter: {
        summary: "Functions-as-a-Service (FaaS like AWS Lambda / Vercel Functions) execute code on demand.",
        coreConcept: "Pay only for millisecond execution time when your code actually runs.",
        quickExample: "exports.handler = async (event) => { return { statusCode: 200 }; }"
      },
      deeper: {
        tradeoffs: "Serverless scales instantly with zero idle costs, but suffers from 'cold start' latency on idle functions and execution duration limits (~15 mins).",
        edgeCases: "Database connection pool exhaustion when serverless functions burst to 1,000 instances simultaneously."
      },
      functions: [
        "FaaS (Functions as a Service) — discrete code handlers invoked by events",
        "Event Sources — HTTP gateway, S3 upload, DB row change, SQS queue item",
        "Auto-scaling — scales automatically from 0 to thousands of concurrent executions"
      ],
      objectives: [
        "Identify workloads ideal for serverless (image processing, webhooks) vs bad fits (long cron jobs)",
        "Mitigate cold start latency using provisioned concurrency or lightweight runtimes"
      ],
      keyPoints: [
        "Serverless doesn't mean no servers exist — it means you don't manage them",
        "Ideal for unpredictable or spike-heavy traffic workloads"
      ],
      examples: [
        { isCode: true, language: "javascript", text: "// AWS Lambda Handler\nexports.handler = async (event) => {\n  const body = JSON.parse(event.body);\n  return { statusCode: 200, body: JSON.stringify({ message: \"Hello \" + body.name }) };\n};" }
      ],
      sources: [
        { label: "AWS Lambda Documentation", url: "https://aws.amazon.com/lambda/", type: "Official Docs" },
        { label: "Serverless Framework Guide", url: "https://www.serverless.com/framework/docs", type: "Guide" },
        { label: "Cloudflare Workers Docs", url: "https://developers.cloudflare.com/workers/", type: "Official Docs" }
      ]
    }
  ]
};
