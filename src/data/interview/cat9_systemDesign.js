export const cat9SystemDesign = [
  {
    id: "q9_1",
    category: "Category 9: System Design & Architecture",
    subcategory: "Scalability & Load Balancing",
    question: "How would you design a URL shortener like Bitly?",
    whatHREvaluates: "System architecture breakdown, database choice, hashing algorithms, and caching.",
    sampleAnswer: "I'd design a shortener with a REST API layer, a Base62 encoding algorithm for 6-character short codes, an in-memory Redis cache for top 20% hot links, and a horizontally scalable PostgreSQL or Cassandra database.",
    remember: "Start high-level: Requirement gathering (reads vs writes) → API design → Data storage -> Scaling & caching.",
    answerMayVary: "Junior roles focus on hashing logic (Base62 vs MD5); senior roles focus on global CDN caching and multi-region DB replication."
  },
  {
    id: "q9_2",
    category: "Category 9: System Design & Architecture",
    subcategory: "Scalability & Load Balancing",
    question: "How would you scale a web application from 1,000 to 1,000,000 active users?",
    whatHREvaluates: "Progressive architecture bottlenecks, stateless web servers, DB replicas, and CDN caching.",
    sampleAnswer: "1K: Single server + DB. 10K: Separate DB server + CDN. 100K: Load balancer + stateless app servers + DB read replicas. 1M: Redis caching layer + DB sharding + asynchronous queue workers (Kafka/RabbitMQ).",
    remember: "Walk through progressive evolution steps rather than jumping straight to hyper-complex microservices.",
    answerMayVary: "Always ground scaling decisions in actual bottleneck metrics (CPU vs Memory vs Network I/O vs DB Locks)."
  },
  {
    id: "q9_3",
    category: "Category 9: System Design & Architecture",
    subcategory: "Database & Storage",
    question: "How do you handle database migrations without causing downtime?",
    whatHREvaluates: "Zero-downtime deployment patterns, backward compatibility, and schema migrations.",
    sampleAnswer: "I use a multi-step expansion-and-contraction pattern: Add new nullable columns first → Deploy app code writing to both columns → Backfill historical data → Update code to read from new column → Drop old column.",
    remember: "Never drop or rename a production column in a single breaking migration step.",
    answerMayVary: "Relational DBs require careful locks monitoring; NoSQL document DBs handle lazy schema migrations in application code."
  },
  {
    id: "q9_4",
    category: "Category 9: System Design & Architecture",
    subcategory: "Caching Strategies",
    question: "What is your approach to caching strategies (Cache-Aside, Write-Through, Write-Behind)?",
    whatHREvaluates: "Data consistency tradeoffs, cache invalidation, and latency optimization.",
    sampleAnswer: "For read-heavy apps, I prefer Cache-Aside (Look-Aside) where the application reads from Redis first, falling back to DB on miss. For high-write volume, Write-Behind queues writes asynchronously.",
    remember: "Mention cache invalidation strategies (TTL expiration, event-driven invalidation) and the risk of cache stampedes.",
    answerMayVary: "Financial data demands strict consistency (Write-Through); analytics dashboards benefit from Cache-Aside."
  },
  {
    id: "q9_5",
    category: "Category 9: System Design & Architecture",
    subcategory: "API & Concurrency",
    question: "How do you choose between SQL and NoSQL for a new microservice?",
    whatHREvaluates: "Data structure requirements, ACID compliance needs, and scaling constraints.",
    sampleAnswer: "I pick SQL (PostgreSQL) if the data is highly relational, requires strict ACID transactions (billing, orders), and complex joins. I pick NoSQL (MongoDB/DynamoDB) if data is document-based with high write velocity and flexible schemas.",
    remember: "Default to PostgreSQL unless there is a specific, compelling reason for NoSQL.",
    answerMayVary: "Modern PostgreSQL handles JSONB documents well, blurring the line between pure SQL and NoSQL."
  }
];
