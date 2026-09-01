export const cat11SecurityCloud = [
  {
    id: "q11_1",
    category: "Category 11: Security & Cloud Infrastructure",
    subcategory: "Secrets Management",
    question: "How do you secure environment secrets and API keys in cloud deployments?",
    whatHREvaluates: "Secrets management practices, secret leaks prevention, and environment isolation.",
    sampleAnswer: "I never commit secrets to Git. I use managed secrets stores like AWS Secrets Manager, HashiCorp Vault, or Vercel Environment Variables, injecting them into runtime containers at launch with strict IAM access policies.",
    remember: "Mention pre-commit hooks (`git-leaks`) to prevent committing API keys locally before pushing.",
    answerMayVary: "Small startups use managed platform secrets (Vercel/Render); enterprises use Vault with dynamic secret rotation."
  },
  {
    id: "q11_2",
    category: "Category 11: Security & Cloud Infrastructure",
    subcategory: "Security Architecture",
    question: "What is the Zero Trust security model and how do you apply it to APIs?",
    whatHREvaluates: "Modern security architecture, authentication, and network isolation.",
    sampleAnswer: "Zero Trust assumes no network location is inherently safe. Every request — whether internal or external — must be explicitly authenticated (mTLS/JWT), authorized (RBAC), and encrypted in transit.",
    remember: "Never rely on 'internal network perimeter security' alone.",
    answerMayVary: "Microservices use mTLS via service meshes (Istio) for internal service-to-service Zero Trust authentication."
  },
  {
    id: "q11_3",
    category: "Category 11: Security & Cloud Infrastructure",
    subcategory: "Incident Response",
    question: "How do you handle a production data breach or security incident?",
    whatHREvaluates: "Incident containment, triage, communication, and post-mortem analysis.",
    sampleAnswer: "1. Containment (revoke compromised keys, isolate affected nodes). 2. Assessment (determine scope via logs). 3. Communication (notify stakeholders & legal). 4. Remediation & Post-mortem (patch root flaw, implement regression guards).",
    remember: "Containment comes BEFORE long-term investigation.",
    answerMayVary: "Regulated industries (HIPAA, GDPR) have strict mandatory incident notification timelines (e.g. 72 hours)."
  },
  {
    id: "q11_4",
    category: "Category 11: Security & Cloud Infrastructure",
    subcategory: "Cloud Hosting",
    question: "How do you choose between AWS, GCP, Azure, and PaaS like Vercel/Render?",
    whatHREvaluates: "Cloud architecture evaluation, team capacity, and cost optimization.",
    sampleAnswer: "PaaS (Vercel/Render) for fast MVPs and web frontends to minimize DevOps overhead. AWS/GCP for complex microservices requiring custom network topology, managed Kubernetes, or custom compliance controls.",
    remember: "Match the cloud complexity to your team's operational bandwidth.",
    answerMayVary: "PaaS is favored by fast-moving startup teams; AWS/Azure by enterprise infrastructure teams."
  }
];
