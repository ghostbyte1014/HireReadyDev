export const languageEcosystemsDomain = {
  domain: "Programming Languages & Ecosystems",
  color: "#2563EB",
  entries: [
    {
      term: "Python Ecosystem & Frameworks",
      slug: "python-ecosystem",
      meaning: "A versatile, beginner-friendly language famous for Data Science, Machine Learning, and rapid backend API development.",
      purpose: "Provide standard tooling and web/ML frameworks in Python.",
      starter: {
        summary: "Web: FastAPI / Django | Data/ML: Pandas, NumPy, PyTorch | Async: asyncio | Package: pip / Poetry.",
        coreConcept: "Readable syntax, huge scientific package ecosystem, dynamically typed.",
        quickExample: "@app.get('/') def root(): return {'status': 'ok'}"
      },
      deeper: {
        tradeoffs: "Global Interpreter Lock (GIL) limits multi-threaded CPU execution; performance is slower than compiled languages like Go/C++, but compensated by C-extensions (NumPy).",
        edgeCases: "Virtual environment fragmentation (venv vs conda vs poetry), GIL CPU bottlenecks."
      },
      functions: [
        "FastAPI — modern, fast async web framework with automatic OpenAPI docs",
        "Django — full-stack 'batteries included' framework with built-in ORM & admin UI",
        "Pandas & NumPy — high-performance data manipulation and numeric array computation",
        "PyTorch & TensorFlow — deep learning framework powerhouses"
      ],
      objectives: [
        "Build async REST APIs using FastAPI and Pydantic validation models",
        "Choose between Django (full monolith) and FastAPI (microservice)"
      ],
      keyPoints: [
        "Python 3.11+ delivers significant runtime speed improvements",
        "Always use virtual environments (`python -m venv venv`) to isolate dependencies"
      ],
      examples: [
        { isCode: true, language: "python", text: "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/api/health\")\ndef health():\n    return {\"status\": \"healthy\"}" }
      ],
      sources: [
        { label: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/", type: "Official Docs" },
        { label: "Python Official Docs", url: "https://docs.python.org/3/", type: "Official Specs" },
        { label: "Django Project Documentation", url: "https://docs.djangoproject.com/", type: "Official Docs" }
      ]
    },
    {
      term: "JavaScript & TypeScript Ecosystem",
      slug: "javascript-typescript-ecosystem",
      meaning: "The language of the web (JS) combined with static type safety (TS) for scalable frontend and Node.js backend development.",
      purpose: "Build full-stack applications with unified language tooling across browser and server.",
      starter: {
        summary: "Frontend: React, Vue, Next.js | Backend: Node.js, Express, NestJS | Package: npm, pnpm.",
        coreConcept: "TypeScript compiles down to plain JavaScript, catching type errors at compile time.",
        quickExample: "interface User { id: number; name: string; }"
      },
      deeper: {
        tradeoffs: "TypeScript adds compile-time type safety and supreme IDE autocomplete, but requires build step configuration and type definition maintenance.",
        edgeCases: "Any type escape hatches bypassing type checks, ESM vs CommonJS module resolution issues."
      },
      functions: [
        "React & Next.js — UI component library & SSR full-stack framework",
        "Node.js & Express — event-driven async server runtime and API framework",
        "NestJS — enterprise TypeScript backend framework inspired by Angular architecture",
        "pnpm / npm — package managers managing module node_modules"
      ],
      objectives: [
        "Migrate plain JavaScript apps to type-safe TypeScript codebases",
        "Build full-stack Next.js applications with React Server Components"
      ],
      keyPoints: [
        "TypeScript types are erased at runtime — they exist purely for compile-time safety",
        "Node.js uses the V8 engine and event loop for non-blocking I/O"
      ],
      examples: [
        { isCode: true, language: "typescript", text: "type User = { id: number; email: string; };\nconst fetchUser = async (id: number): Promise<User> => {\n  const res = await fetch(`/api/users/${id}`);\n  return res.json();\n};" }
      ],
      sources: [
        { label: "TypeScript Documentation", url: "https://www.typescriptlang.org/docs/", type: "Official Docs" },
        { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "Official Docs" },
        { label: "Node.js Official Documentation", url: "https://nodejs.org/en/docs/", type: "Official Specs" }
      ]
    },
    {
      term: "Java & Spring Boot Ecosystem",
      slug: "java-spring-boot-ecosystem",
      meaning: "The enterprise workhorse language running on the JVM, powered by Spring Boot for scalable microservices.",
      purpose: "Build high-throughput, strongly-typed backend applications for banking, healthcare, and enterprise platforms.",
      starter: {
        summary: "Framework: Spring Boot | ORM: Hibernate/JPA | Build: Maven (pom.xml) / Gradle | Testing: JUnit 5.",
        coreConcept: "Object-oriented, compiled to JVM bytecode, strong static typing, enterprise ecosystem.",
        quickExample: "@RestController public class Controller { @GetMapping('/api') ... }"
      },
      deeper: {
        tradeoffs: "JVM memory footprint and start time are larger than Go/Rust, but JVM JIT compiler optimizes long-running server throughput exceptionally well.",
        edgeCases: "JVM Garbage Collection pause spikes (GC pauses), memory leaks in static fields."
      },
      functions: [
        "Spring Boot — convention-over-configuration enterprise web framework",
        "Hibernate & JPA — Object-Relational Mapping for relational databases",
        "Maven & Gradle — dependency management and build lifecycle orchestration",
        "JUnit 5 & Mockito — standard Java unit and mock testing suite"
      ],
      objectives: [
        "Build REST microservices using Spring Boot annotations (@Service, @Repository)",
        "Configure Maven dependencies and application.properties configs"
      ],
      keyPoints: [
        "Virtual Threads (Project Loom in Java 21) enable massive lightweight concurrency",
        "Spring Dependency Injection (@Autowired) decouples components for testing"
      ],
      examples: [
        { isCode: true, language: "java", text: "@RestController\n@RequestMapping(\"/api\")\npublic class HelloController {\n    @GetMapping(\"/greet\")\n    public String greet() { return \"Hello Enterprise\"; }\n}" }
      ],
      sources: [
        { label: "Spring Boot Reference Guide", url: "https://spring.io/projects/spring-boot", type: "Official Docs" },
        { label: "Oracle Java Documentation", url: "https://docs.oracle.com/en/java/", type: "Official Specs" },
        { label: "Baeldung Spring Tutorials", url: "https://www.baeldung.com/", type: "Free Guide" }
      ]
    },
    {
      term: "Go (Golang) Ecosystem",
      slug: "go-golang-ecosystem",
      meaning: "A lightweight, compiled language designed by Google for high-performance cloud infrastructure and microservices.",
      purpose: "Build fast, single-binary microservices and DevOps tools with minimal memory footprint.",
      starter: {
        summary: "Frameworks: Gin, Echo | Concurrency: Goroutines & Channels | Build: `go build` single binary.",
        coreConcept: "Simplicity, fast compilation, built-in concurrency (`go func()`), single static binary deployment.",
        quickExample: "go func() { ch <- fetch() }()"
      },
      deeper: {
        tradeoffs: "Go lacks complex OOP features (no inheritance, simple interface implementation), making it incredibly easy to read but requiring explicit error checks `if err != nil`.",
        edgeCases: "Goroutine memory leaks from unclosed channels."
      },
      functions: [
        "Goroutines — lightweight green threads managed by Go runtime (~2KB stack overhead)",
        "Channels — typed conduits for synchronizing communication between goroutines",
        "Standard Library — industry-standard built-in HTTP server (`net/http`)",
        "Go Modules — dependency manager (`go.mod` / `go.sum`)"
      ],
      objectives: [
        "Build concurrent web services using Goroutines and Channels",
        "Compile cross-platform single binaries using `GOOS=linux go build`"
      ],
      keyPoints: [
        "Docker, Kubernetes, Terraform, and Prometheus are all written in Go",
        "Go compiles directly to machine code with zero external runtime dependencies"
      ],
      examples: [
        { isCode: true, language: "go", text: "package main\nimport (\"fmt\"; \"net/http\")\n\nfunc main() {\n    http.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) {\n        fmt.Fprintf(w, \"Hello Go!\")\n    })\n    http.ListenAndServe(\":8080\", nil)\n}" }
      ],
      sources: [
        { label: "Go Official Documentation", url: "https://go.dev/doc/", type: "Official Docs" },
        { label: "Go by Example", url: "https://gobyexample.com/", type: "Interactive Guide" },
        { label: "Effective Go", url: "https://go.dev/doc/effective_go", type: "Official Guide" }
      ]
    },
    {
      term: "Rust Ecosystem",
      slug: "rust-ecosystem",
      meaning: "A modern systems programming language offering C-level speed and guaranteed memory safety without a garbage collector.",
      purpose: "Build performance-critical systems, web browsers, cryptography, and WebAssembly modules safely.",
      starter: {
        summary: "Frameworks: Actix-web, Axum, Tokio (async) | Package: Cargo (`Cargo.toml`) | Memory: Ownership & Borrow Checker.",
        coreConcept: "Ownership system enforces memory safety at compile time, eliminating null pointers and data races.",
        quickExample: "let msg = String::from('hello');"
      },
      deeper: {
        tradeoffs: "Steep learning curve due to strict compile-time borrow checker, but eliminates whole classes of memory corruption CVEs.",
        edgeCases: "Fight with the borrow checker when constructing complex cyclic graph structures."
      },
      functions: [
        "Ownership & Borrowing — compiler checks variable lifetime & mutability",
        "Cargo — integrated package manager, test runner, and build tool",
        "Tokio — asynchronous runtime for high-throughput network applications",
        "WebAssembly (Wasm) — compile Rust code to run near native speed in browsers"
      ],
      objectives: [
        "Explain how Rust guarantees memory safety without garbage collection overhead",
        "Build async web services using Axum or Actix-web"
      ],
      keyPoints: [
        "Voted most loved language by developers for years",
        "Zero-cost abstractions: high-level syntax with zero runtime overhead"
      ],
      examples: [
        { isCode: true, language: "rust", text: "// Basic Rust Function\nfn main() {\n    let name = \"Rust\";\n    println!(\"Hello, {}!\", name);\n}" }
      ],
      sources: [
        { label: "The Rust Programming Language Book", url: "https://doc.rust-lang.org/book/", type: "Official Guide" },
        { label: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/", type: "Interactive Guide" },
        { label: "Tokio Async Documentation", url: "https://tokio.rs/tokio/tutorial", type: "Official Docs" }
      ]
    }
  ]
};
