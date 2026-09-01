export const databasesSqlDomain = {
  domain: "Databases & SQL",
  color: "#8A5A3C",
  entries: [
    {
      term: "SQL",
      slug: "sql-fundamentals",
      meaning: "The standard language for asking relational databases questions and giving instructions.",
      purpose: "Define schema, query data, and control access in relational databases.",
      starter: {
        summary: "DDL (schema: CREATE), DML (data: SELECT/INSERT/UPDATE), DCL (permissions: GRANT), TCL (transactions: COMMIT).",
        coreConcept: "Declarative query language — specify WHAT data you want, engine handles HOW to get it.",
        quickExample: "SELECT name FROM users WHERE age >= 18;"
      },
      deeper: {
        tradeoffs: "Relational SQL enforces strict consistency and joins, but scaling writes across multi-master clusters is complex.",
        edgeCases: "N+1 query bug executing queries inside loops."
      },
      functions: ["DDL — CREATE, ALTER, DROP", "DML — SELECT, INSERT, UPDATE, DELETE", "DCL — GRANT, REVOKE", "TCL — COMMIT, ROLLBACK"],
      objectives: ["Categorize SQL statements into DDL, DML, DCL, and TCL"],
      keyPoints: ["SQL is declarative; the database query optimizer creates execution plans"],
      examples: [{ isCode: true, language: "sql", text: "SELECT * FROM users WHERE active = true;" }],
      sources: [
        { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/", type: "Official Docs" },
        { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/", type: "Interactive Course" },
        { label: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/", type: "Interactive Guide" }
      ]
    },
    {
      term: "SQL execution order",
      slug: "sql-execution-order",
      meaning: "The database engine processes your SQL queries in a fixed internal order, different from how you write it.",
      purpose: "Understand query behavior, alias scoping, and performance execution.",
      starter: {
        summary: "Order: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT.",
        coreConcept: "WHERE filters rows BEFORE grouping; HAVING filters AFTER aggregation.",
        quickExample: "SELECT col FROM table WHERE x > 5 GROUP BY col HAVING COUNT(*) > 1"
      },
      deeper: {
        tradeoffs: "Filtering early in WHERE reduces rows before grouping, drastically lowering RAM usage.",
        edgeCases: "SELECT aliases are not accessible in WHERE because WHERE runs before SELECT."
      },
      functions: ["FROM & JOIN", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY / LIMIT"],
      objectives: ["Explain why WHERE cannot reference SELECT column aliases"],
      keyPoints: ["HAVING filters groups after aggregation; WHERE filters rows before aggregation"],
      examples: [{ isCode: true, language: "sql", text: "SELECT dept, COUNT(*) AS total FROM employees WHERE status = 'ACTIVE' GROUP BY dept HAVING COUNT(*) > 5;" }],
      sources: [
        { label: "Mode SQL Order of Execution", url: "https://mode.com/sql-tutorial/sql-order-of-operations/", type: "Guide" },
        { label: "PostgreSQL Query Execution", url: "https://www.postgresql.org/docs/current/queries.html", type: "Official Docs" },
        { label: "SQLBolt: SQL Order of Execution", url: "https://sqlbolt.com/", type: "Interactive Tutorial" }
      ]
    },
    {
      term: "Queries: basic to advanced",
      slug: "sql-queries-ladder",
      meaning: "A skill ladder from single-table SELECTs to multi-table JOINs, subqueries, and window functions.",
      purpose: "Query relational data efficiently across multiple joined tables.",
      starter: {
        summary: "Basic (SELECT, WHERE), Intermediate (JOINs, GROUP BY), Advanced (Window functions, CTEs).",
        coreConcept: "Progressive SQL techniques for complex data analysis.",
        quickExample: "RANK() OVER (PARTITION BY category ORDER BY sales DESC)"
      },
      deeper: {
        tradeoffs: "Window functions compute aggregates without collapsing rows; subqueries can lead to redundant table scans if not rewritten as JOINs or CTEs.",
        edgeCases: "Un-indexed JOIN columns causing full table scans."
      },
      functions: ["JOIN types (INNER, LEFT, RIGHT, FULL)", "Aggregations (SUM, AVG, COUNT)", "Window functions (RANK, ROW_NUMBER)"],
      objectives: ["Optimize slow queries by checking EXPLAIN execution plans"],
      keyPoints: ["N+1 queries waste network round-trips; fetch data in single batched JOIN queries"],
      examples: [{ isCode: true, language: "sql", text: "SELECT id, RANK() OVER (PARTITION BY user_id ORDER BY order_date) FROM orders;" }],
      sources: [
        { label: "PostgreSQL SELECT Reference", url: "https://www.postgresql.org/docs/current/sql-select.html", type: "Official Docs" },
        { label: "LeetCode SQL Study Plan", url: "https://leetcode.com/studyplan/top-sql-50/", type: "Practice Platform" },
        { label: "SQLZoo Interactive Practice", url: "https://sqlzoo.net/", type: "Interactive Tutorial" }
      ]
    },
    {
      term: "Common table expression (CTE)",
      slug: "common-table-expression-cte",
      meaning: "A named temporary result set defined with `WITH` that makes complex queries readable.",
      purpose: "Break complex queries into readable top-to-bottom steps.",
      starter: {
        summary: "WITH cte_name AS (SELECT ...) SELECT * FROM cte_name;",
        coreConcept: "Temporary query blocks scoped to a single query.",
        quickExample: "WITH active_users AS (SELECT * FROM users WHERE active = true) SELECT * FROM active_users;"
      },
      deeper: {
        tradeoffs: "CTEs improve query readability dramatically; recursive CTEs enable walking hierarchical tree structures (org charts).",
        edgeCases: "Infinite loops in recursive CTEs without termination conditions."
      },
      functions: ["WITH clause definition", "Recursive CTEs for tree data"],
      objectives: ["Refactor nested subqueries into readable CTE blocks"],
      keyPoints: ["CTEs are temporary and disappear after query execution"],
      examples: [{ isCode: true, language: "sql", text: "WITH high_earners AS (\n  SELECT * FROM employees WHERE salary > 100000\n)\nSELECT dept, COUNT(*) FROM high_earners GROUP BY dept;" }],
      sources: [
        { label: "PostgreSQL WITH Queries", url: "https://www.postgresql.org/docs/current/queries-with.html", type: "Official Docs" },
        { label: "Modern SQL: CTE Guide", url: "https://modern-sql.com/feature/with", type: "Guide" },
        { label: "GeeksforGeeks SQL CTE", url: "https://www.geeksforgeeks.org/cte-in-sql/", type: "Tutorial" }
      ]
    },
    {
      term: "Data modeling concepts",
      slug: "data-modeling-concepts",
      meaning: "Designing the blueprint of your data — entities, columns, relationships — before building tables.",
      purpose: "Structure relational schemas to prevent data redundancy and maintain data integrity.",
      starter: {
        summary: "Entities (Tables), Primary Keys (Unique ID), Foreign Keys (Relationships), Normalization (1NF-3NF).",
        coreConcept: "Eliminate duplicate data through relational foreign key references.",
        quickExample: "orders table references customer_id FK"
      },
      deeper: {
        tradeoffs: "Normalized schemas (3NF) eliminate data duplication but require multi-table JOINs; denormalization speeds up reads at the cost of duplicate data.",
        edgeCases: "Orphaned rows from missing cascading foreign key deletes."
      },
      functions: ["Primary & Foreign Keys", "Normalization 1NF-3NF", "Cardinality (1:1, 1:N, N:M)"],
      objectives: ["Design a normalized schema for a domain with junction tables for N:M relations"],
      keyPoints: ["Junction tables resolve Many-to-Many (N:M) relationships"],
      examples: [{ isCode: true, language: "sql", text: "CREATE TABLE order_items (\n  order_id INT REFERENCES orders(id),\n  product_id INT REFERENCES products(id)\n);" }],
      sources: [
        { label: "Wikipedia: Data Modeling", url: "https://en.wikipedia.org/wiki/Data_modeling", type: "Reference" },
        { label: "Database Normalization Guide (1NF-3NF)", url: "https://www.guru99.com/database-normalization.html", type: "Guide" },
        { label: "Lucidchart Data Modeling Basics", url: "https://www.lucidchart.com/pages/database-diagram/database-design", type: "Guide" }
      ]
    },
    {
      term: "SQL vs NoSQL",
      slug: "sql-vs-nosql",
      meaning: "Filing cabinets with strict labeled tables (SQL) vs flexible documents and key-value stores (NoSQL).",
      purpose: "Select database engines based on data structure rigidity vs horizontal scaling flexibility.",
      starter: {
        summary: "SQL: Fixed schema, ACID, Relational. NoSQL: Flexible schema (Document, Key-Value, Graph), Horizontal scaling.",
        coreConcept: "ACID consistency (SQL) vs horizontal scalability (NoSQL).",
        quickExample: "PostgreSQL (SQL) vs MongoDB (NoSQL Document)"
      },
      deeper: {
        tradeoffs: "SQL guarantees strict consistency and complex joins; NoSQL provides flexible schema-less JSON storage and painless multi-node sharding.",
        edgeCases: "Handling complex join queries in NoSQL client code."
      },
      functions: ["Relational (Postgres, MySQL)", "Document (MongoDB)", "Key-Value (Redis)", "Graph (Neo4j)"],
      objectives: ["Choose database types based on workload constraints"],
      keyPoints: ["Many modern architectures use both SQL (core data) and NoSQL (cache/analytics)"],
      examples: [{ isCode: false, text: "Banking ledger = SQL. Product catalog with varying attributes = NoSQL Document." }],
      sources: [
        { label: "MongoDB: SQL vs NoSQL", url: "https://www.mongodb.com/resources/basics/databases/nosql-explained/nosql-vs-sql", type: "Guide" },
        { label: "AWS: Differences Between SQL and NoSQL", url: "https://aws.amazon.com/compare/the-difference-between-nosql-and-sql/", type: "Official Guide" },
        { label: "Cloudflare: SQL vs NoSQL", url: "https://www.cloudflare.com/learning/databases/sql-vs-nosql/", type: "Guide" }
      ]
    },
    {
      term: "ACID properties",
      slug: "acid-properties",
      meaning: "Four guarantees that ensure database transactions process reliably without data corruption.",
      purpose: "Protect financial, inventory, and critical data integrity during operations or crashes.",
      starter: {
        summary: "Atomicity (all or nothing), Consistency (valid state), Isolation (independent transactions), Durability (persisted).",
        coreConcept: "A transaction either completely succeeds or leaves data untouched.",
        quickExample: "BEGIN; UPDATE balance...; COMMIT;"
      },
      deeper: {
        tradeoffs: "Strict ACID guarantees lower write throughput due to locking and logging mechanisms.",
        edgeCases: "Dirty reads, non-repeatable reads, phantom reads under weak isolation levels."
      },
      functions: ["Atomicity", "Consistency", "Isolation", "Durability"],
      objectives: ["Explain why bank transfers require atomic execution"],
      keyPoints: ["Write-Ahead Logging (WAL) powers durability"],
      examples: [{ isCode: true, language: "sql", text: "BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;" }],
      sources: [
        { label: "PostgreSQL ACID Documentation", url: "https://www.postgresql.org/docs/current/wal-intro.html", type: "Official Docs" },
        { label: "Wikipedia: ACID Guarantees", url: "https://en.wikipedia.org/wiki/ACID", type: "Reference" },
        { label: "Databricks: What is ACID?", url: "https://www.databricks.com/glossary/acid-transactions", type: "Guide" }
      ]
    },
    {
      term: "Database transactions & isolation levels",
      slug: "database-isolation-levels",
      meaning: "Rules for how much one in-progress transaction is allowed to see of another concurrent transaction.",
      purpose: "Balance data correctness against performance when multiple transactions run concurrently.",
      starter: {
        summary: "Read Uncommitted < Read Committed < Repeatable Read < Serializable.",
        coreConcept: "Higher isolation = higher safety, but lower transaction throughput.",
        quickExample: "SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;"
      },
      deeper: {
        tradeoffs: "Serializable isolation prevents all concurrency anomalies but uses heavy locking / multi-version concurrency control (MVCC).",
        edgeCases: "Dirty reads (reading uncommitted data that rolls back)."
      },
      functions: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
      objectives: ["Explain what a dirty read is and which isolation level prevents it"],
      keyPoints: ["Read Committed is the default in PostgreSQL"],
      examples: [{ isCode: true, language: "sql", text: "SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;" }],
      sources: [
        { label: "PostgreSQL Transaction Isolation", url: "https://www.postgresql.org/docs/current/transaction-iso.html", type: "Official Docs" },
        { label: "Wikipedia: Isolation (database systems)", url: "https://en.wikipedia.org/wiki/Isolation_(database_systems)", type: "Reference" },
        { label: "GeeksforGeeks Transaction Isolation", url: "https://www.geeksforgeeks.org/transaction-isolation-levels-dbms/", type: "Guide" }
      ]
    },
    {
      term: "Database indexing",
      slug: "database-indexing",
      meaning: "Like the index at the back of a textbook — jump straight to the right page without reading every page.",
      purpose: "Speed up query lookups from O(n) full table scans to O(log n) tree jumps.",
      starter: {
        summary: "B-Tree indexes speed up SELECT WHERE queries, but add overhead to INSERT/UPDATE writes.",
        coreConcept: "Trade storage and write speed for ultra-fast SELECT queries.",
        quickExample: "CREATE INDEX idx_users_email ON users(email);"
      },
      deeper: {
        tradeoffs: "Indexes drastically accelerate reads, but every write operation (INSERT/DELETE) must update all indexes on that table.",
        edgeCases: "Unused indexes degrading write performance; composite index column order mismatch."
      },
      functions: ["B-Tree indexes (default)", "Hash indexes (exact match)", "Composite multi-column indexes"],
      objectives: ["Decide which columns deserve an index based on EXPLAIN output"],
      keyPoints: ["Missing index on filtered column is the #1 cause of slow SQL queries"],
      examples: [{ isCode: true, language: "sql", text: "CREATE INDEX idx_orders_customer ON orders(customer_id);" }],
      sources: [
        { label: "PostgreSQL Indexes", url: "https://www.postgresql.org/docs/current/indexes.html", type: "Official Docs" },
        { label: "Use The Index, Luke!", url: "https://use-the-index-luke.com/", type: "Free Book Reference" },
        { label: "MongoDB Indexes Overview", url: "https://www.mongodb.com/docs/manual/indexes/", type: "Official Docs" }
      ]
    },
    {
      term: "Ways to scale a database",
      slug: "ways-to-scale-a-database",
      meaning: "Techniques for when one database server can no longer handle traffic or data volume.",
      purpose: "Scale databases vertically (bigger server) or horizontally (replicas, sharding, caching).",
      starter: {
        summary: "Vertical scaling (RAM/CPU), Read Replicas (offload reads), Sharding (split tables across DBs), Caching (Redis).",
        coreConcept: "Separate read traffic (replicas) from write volume (sharding).",
        quickExample: "Primary DB (writes) -> Read Replicas (reads)"
      },
      deeper: {
        tradeoffs: "Sharding enables massive write volume but breaks multi-shard joins and transactions.",
        edgeCases: "Replication lag causing stale read query hits on replicas."
      },
      functions: ["Vertical Scaling (bigger VM)", "Read Replicas", "Sharding / Horizontal Partitioning", "In-memory Caching"],
      objectives: ["Given a DB bottleneck, select the appropriate scaling technique"],
      keyPoints: ["Sharding solves write volume; Read Replicas solve read traffic"],
      examples: [{ isCode: false, text: "Shard database by user_id so user 1-1M is on DB 1, user 1M-2M is on DB 2." }],
      sources: [
        { label: "Wikipedia: Sharding", url: "https://en.wikipedia.org/wiki/Shard_(database_architecture)", type: "Reference" },
        { label: "AWS Database Scaling Strategies", url: "https://aws.amazon.com/blogs/database/three-design-patterns-for-scaling-your-relational-database/", type: "Guide" },
        { label: "DigitalOcean: How to Scale Databases", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding", type: "Guide" }
      ]
    },
    {
      term: "Redis",
      slug: "redis-in-memory-store",
      meaning: "An in-memory key-value store that lives in RAM for extreme speed.",
      purpose: "Caching, session storage, rate limiting, and pub/sub message brokering.",
      starter: {
        summary: "RAM-based data store with sub-millisecond read/write latencies.",
        coreConcept: "Cache slow database queries in fast RAM.",
        quickExample: "SET session:123 'user_42' EX 3600"
      },
      deeper: {
        tradeoffs: "Redis delivers extreme speed (~1ms), but data is stored in RAM which is volatile if persistence (RDB/AOF) isn't configured.",
        edgeCases: "Redis RAM exhaustion causing key eviction policies (LRU) to drop cached keys."
      },
      functions: ["Key-Value storage", "Hashes, Lists, Sets, Sorted Sets", "TTL key expiration", "Pub/Sub messaging"],
      objectives: ["Implement Redis caching for slow database queries"],
      keyPoints: ["Never treat Redis as your only copy of critical persistent data"],
      examples: [{ isCode: true, language: "redis", text: "SET user:100 \"{\\\"name\\\": \\\"Ana\\\"}\" EX 600\nGET user:100" }],
      sources: [
        { label: "Redis Official Docs", url: "https://redis.io/docs/", type: "Official Docs" },
        { label: "Redis University Courses", url: "https://university.redis.io/", type: "Free Interactive Courses" },
        { label: "AWS: What is Redis?", url: "https://aws.amazon.com/redis/", type: "Official Guide" }
      ]
    }
  ]
};
