export const cat12DevopsReliability = [
  {
    id: "q12_1",
    category: "Category 12: DevOps, CI/CD & Site Reliability",
    subcategory: "Deployment Strategies",
    question: "How do you achieve zero-downtime deployments using Blue-Green or Canary strategies?",
    whatHREvaluates: "Zero-downtime release engineering, traffic routing, and automated rollback.",
    sampleAnswer: "Blue-Green deploys a new environment alongside the old one and switches the router instantly. Canary shifts 5% of real user traffic to the new release, monitoring error rates before rolling out to 100%.",
    remember: "Blue-Green enables instant rollback by switching the router back to Blue if errors spike.",
    answerMayVary: "Canary deployments are essential for large-scale applications serving millions of active connections."
  },
  {
    id: "q12_2",
    category: "Category 12: DevOps, CI/CD & Site Reliability",
    subcategory: "SRE Metrics",
    question: "What is the difference between SLA, SLO, and SLI in site reliability engineering?",
    whatHREvaluates: "SRE fundamentals, service availability targets, and contractual commitments.",
    sampleAnswer: "SLI (Indicator) is the actual real-time metric (e.g. 99.92% HTTP 200 responses). SLO (Objective) is the team's target goal (e.g. 99.9% uptime). SLA (Agreement) is the legal contract with customers with financial penalties if missed.",
    remember: "SLI measures reality; SLO sets target goals; SLA defines business consequences.",
    answerMayVary: "Internal services have SLOs but no customer SLAs."
  },
  {
    id: "q12_3",
    category: "Category 12: DevOps, CI/CD & Site Reliability",
    subcategory: "Production Debugging",
    question: "How do you debug a production memory leak or CPU spike in a containerized app?",
    whatHREvaluates: "Production troubleshooting, metrics analysis, heap profiling, and log analysis.",
    sampleAnswer: "1. Inspect metrics (Grafana/Datadog) to isolate which service node is spiking. 2. Capture a heap dump or CPU profile without killing the process. 3. Analyze thread dumps for deadlocks or un-garbage-collected objects. 4. Roll back if impacting users.",
    remember: "Never restart a crashing node without taking a thread/heap dump first if you want to find root cause.",
    answerMayVary: "Node.js heap snapshots vs JVM GC logs vs Go pprof profiles."
  },
  {
    id: "q12_4",
    category: "Category 12: DevOps, CI/CD & Site Reliability",
    subcategory: "Infrastructure as Code",
    question: "How do you automate infrastructure using Infrastructure-as-Code (Terraform/CloudFormation)?",
    whatHREvaluates: "Declarative infrastructure management, state file handling, and versioning.",
    sampleAnswer: "I declare cloud resources in version-controlled Terraform HCL files. We store state remotely with state locking (S3 + DynamoDB) and run `terraform plan` in CI PR checks before applying changes.",
    remember: "Never edit cloud resources manually via the web GUI console in production environments.",
    answerMayVary: "Terraform is cloud-agnostic; CloudFormation / CDK is AWS-native."
  }
];
