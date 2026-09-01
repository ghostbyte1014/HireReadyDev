export const webDevelopmentDomain = {
  domain: "Web Development",
  color: "#5B7A4C",
  entries: [
    {
      term: "API",
      slug: "api-fundamentals",
      meaning: "A menu at a restaurant — you order what you want, without needing to know how the kitchen prepares it.",
      purpose: "A contract that lets two software systems communicate without exposing internal implementation details.",
      starter: {
        summary: "REST (resources), GraphQL (custom client queries), gRPC (fast binary over HTTP/2), SOAP (older XML).",
        coreConcept: "Contract-based client-server interaction.",
        quickExample: "GET /api/users/42"
      },
      deeper: {
        tradeoffs: "REST offers rich browser caching; GraphQL eliminates over-fetching; gRPC maximizes microservice speed.",
        edgeCases: "Breaking API changes without versioning."
      },
      functions: ["REST — HTTP verbs + URIs", "GraphQL — declarative queries", "gRPC — Protobuf over HTTP/2"],
      objectives: ["Select the right API style for mobile vs microservice workloads"],
      keyPoints: ["A well-designed API hides backend implementation details"],
      examples: [{ isCode: true, language: "json", text: "GET /api/users/42\n// → { \"id\": 42, \"name\": \"Ana\" }" }],
      sources: [
        { label: "MDN: Web APIs", url: "https://developer.mozilla.org/en-US/docs/Web/API", type: "Official Docs" },
        { label: "GraphQL Official Docs", url: "https://graphql.org/learn/", type: "Official Docs" },
        { label: "gRPC Official Docs", url: "https://grpc.io/docs/", type: "Official Docs" }
      ]
    },
    {
      term: "HTTP methods & status codes",
      slug: "http-methods-status-codes",
      meaning: "The shared vocabulary browsers and servers use to request actions and report results.",
      purpose: "Standardize request intentions (GET, POST, PUT, DELETE) and status responses (2xx, 3xx, 4xx, 5xx).",
      starter: {
        summary: "GET (read), POST (create), PUT (replace), DELETE. 2xx Success, 4xx Client Error, 5xx Server Error.",
        coreConcept: "Standardized web status communication.",
        quickExample: "200 OK, 201 Created, 401 Unauthorized, 404 Not Found"
      },
      deeper: {
        tradeoffs: "401 means Authentication required (who are you?); 403 means Forbidden (authenticated, but lacking permissions).",
        edgeCases: "429 Too Many Requests rate limit handling."
      },
      functions: ["2xx — Success (200, 201, 204)", "3xx — Redirection (301, 302)", "4xx — Client Error (400, 401, 403, 404)", "5xx — Server Error (500, 502, 503)"],
      objectives: ["Select the exact status code for API responses"],
      keyPoints: ["401 = Not Logged In; 403 = Logged In, Not Authorized"],
      examples: [{ isCode: true, language: "http", text: "GET /api/secret\nHTTP/1.1 401 Unauthorized" }],
      sources: [
        { label: "MDN: HTTP Status Codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status", type: "Official Docs" },
        { label: "MDN: HTTP Request Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods", type: "Official Docs" },
        { label: "HTTP Status Dogs Reference", url: "https://http.dog/", type: "Interactive Guide" }
      ]
    },
    {
      term: "API gateway",
      slug: "api-gateway",
      meaning: "A single front door for a building full of separate offices (microservices).",
      purpose: "Centralize entry, routing, authentication, and rate limiting in microservice architectures.",
      starter: {
        summary: "Routes incoming client requests to backend services while handling auth and logging centrally.",
        coreConcept: "Single entry point for client requests.",
        quickExample: "/api/orders/* -> orders-service:8080"
      },
      deeper: {
        tradeoffs: "Gateways centralize cross-cutting concerns (auth, rate limits), but can become a single point of failure if not scaled.",
        edgeCases: "Gateway timeouts on long-running backend microservice calls."
      },
      functions: ["Request Routing", "Centralized Authentication", "Rate Limiting", "Request Transformation"],
      objectives: ["Explain the difference between a load balancer and an API gateway"],
      keyPoints: ["Gateways absorb edge security concerns so microservices stay lean"],
      examples: [{ isCode: false, text: "Mobile app calls 1 gateway URL; gateway aggregates data from 3 internal microservices." }],
      sources: [
        { label: "AWS API Gateway", url: "https://aws.amazon.com/api-gateway/", type: "Guide" },
        { label: "Kong API Gateway Docs", url: "https://docs.konghq.com/", type: "Official Docs" },
        { label: "NGINX API Gateway Pattern", url: "https://www.nginx.com/blog/building-microservices-using-an-api-gateway/", type: "Guide" }
      ]
    },
    {
      term: "CORS",
      slug: "cors-cross-origin-resource-sharing",
      meaning: "A browser's bouncer checking if website A is allowed to call website B's API.",
      purpose: "Restrict cross-origin HTTP requests made by client JavaScript for browser security.",
      starter: {
        summary: "Browser sends `Origin` header; server responds with `Access-Control-Allow-Origin`.",
        coreConcept: "Browser security mechanism preventing malicious site AJAX requests.",
        quickExample: "Access-Control-Allow-Origin: https://myapp.com"
      },
      deeper: {
        tradeoffs: "CORS protects users in browsers; it does NOT block server-to-server or Postman requests.",
        edgeCases: "Preflight `OPTIONS` request failures on custom HTTP headers."
      },
      functions: ["Origin Header", "Access-Control-Allow-Origin Header", "OPTIONS Preflight Requests"],
      objectives: ["Diagnose 'blocked by CORS policy' browser errors"],
      keyPoints: ["CORS is enforced strictly by the BROWSER, not the server"],
      examples: [{ isCode: true, language: "http", text: "Access-Control-Allow-Origin: https://myapp.com\nAccess-Control-Allow-Methods: GET, POST" }],
      sources: [
        { label: "MDN: CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS", type: "Official Docs" },
        { label: "web.dev: CORS Guide", url: "https://web.dev/same-site-same-origin/", type: "Guide" },
        { label: "Auth0: What is CORS?", url: "https://auth0.com/blog/cors-tutorial-what-is-cors-and-how-to-use-it/", type: "Guide" }
      ]
    },
    {
      term: "API versioning & idempotency",
      slug: "api-versioning-idempotency",
      meaning: "Versioning labels your API rulebook so updates don't break old apps; idempotency means repeating a request causes no extra harm.",
      purpose: "Evolve APIs safely and handle network retry duplicates.",
      starter: {
        summary: "Versioning (/api/v1/ vs /api/v2/). Idempotency (GET, PUT, DELETE produce same result on retry; POST does not).",
        coreConcept: "Safe retries and backward-compatible API updates.",
        quickExample: "POST /api/payments Header: Idempotency-Key: xyz123"
      },
      deeper: {
        tradeoffs: "Idempotency keys require storing request hashes (e.g. in Redis) to prevent duplicate payments on retries.",
        edgeCases: "Double-charging customers when retrying non-idempotent POST requests during network timeouts."
      },
      functions: ["URI Versioning (/v1/)", "Header Versioning", "Idempotent HTTP verbs (GET, PUT, DELETE)", "Idempotency Keys for POST"],
      objectives: ["Explain why payment POST endpoints require idempotency keys"],
      keyPoints: ["PUT is idempotent; POST is NOT idempotent by default"],
      examples: [{ isCode: true, language: "http", text: "POST /api/payments\nIdempotency-Key: 8f14e45f" }],
      sources: [
        { label: "Stripe Idempotent Requests", url: "https://docs.stripe.com/api/idempotent_requests", type: "Guide" },
        { label: "MDN: Idempotent HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent", type: "Official Docs" },
        { label: "AWS: Building Idempotent APIs", url: "https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/", type: "Guide" }
      ]
    },
    {
      term: "Web accessibility (a11y)",
      slug: "web-accessibility-a11y",
      meaning: "Building websites that work for everyone, including people using screen readers or keyboard navigation.",
      purpose: "Ensure web applications are usable by people with disabilities.",
      starter: {
        summary: "Semantic HTML (<button>, <main>), Image alt text, Keyboard tab navigation, WCAG contrast ratios.",
        coreConcept: "Web access for all users.",
        quickExample: "<button onClick={...}>Submit</button> (not <div onClick>) "
      },
      deeper: {
        tradeoffs: "Building accessible components requires ARIA state management but ensures legal compliance and superior UX.",
        edgeCases: "Custom dropdowns missing ARIA expanded/controls tags."
      },
      functions: ["Semantic HTML", "ARIA Roles & Attributes", "Keyboard Focus Indicators", "Color Contrast Ratios"],
      objectives: ["Tab through web pages using only the keyboard"],
      keyPoints: ["Real <button> elements get keyboard focus and spacebar/enter clicks for free"],
      examples: [{ isCode: true, language: "html", text: "<img src=\"chart.png\" alt=\"Revenue grew 20% in Q3\" />" }],
      sources: [
        { label: "W3C WCAG Guidelines", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", type: "Standard" },
        { label: "MDN: Accessibility", url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility", type: "Official Docs" },
        { label: "web.dev: Learn Accessibility", url: "https://web.dev/learn/accessibility/", type: "Guide" }
      ]
    },
    {
      term: "Rendering strategies: SSR vs CSR vs SSG",
      slug: "rendering-strategies-ssr-csr-ssg",
      meaning: "Where does page HTML get built — on the server per request (SSR), in the browser (CSR), or ahead of time at deploy (SSG)?",
      purpose: "Optimize load speed, SEO ranking, and server costs based on page requirements.",
      starter: {
        summary: "CSR (React SPA), SSR (Next.js server-rendered per request), SSG (Static site generated at build).",
        coreConcept: "Tradeoffs between load latency, server costs, and SEO.",
        quickExample: "Next.js: getStaticProps (SSG) vs getServerSideProps (SSR)"
      },
      deeper: {
        tradeoffs: "SSG delivers instant CDN cached speeds; SSR allows fresh personalized data with good SEO; CSR saves server compute but hurts initial SEO.",
        edgeCases: "Hydration mismatch errors in SSR frameworks."
      },
      functions: ["CSR (Client-Side Rendering)", "SSR (Server-Side Rendering)", "SSG (Static Site Generation)", "ISR (Incremental Static Regeneration)"],
      objectives: ["Select rendering strategy for marketing page (SSG) vs dashboard (CSR) vs e-commerce (SSR)"],
      keyPoints: ["SSG is fastest because HTML is pre-rendered at build time and cached on CDNs"],
      examples: [{ isCode: false, text: "Blog = SSG. E-commerce product page = SSR. Logged-in analytics dashboard = CSR." }],
      sources: [
        { label: "web.dev: Rendering on Web", url: "https://web.dev/articles/rendering-on-the-web", type: "Guide" },
        { label: "Next.js Rendering Docs", url: "https://nextjs.org/docs/app/building-your-application/rendering", type: "Official Docs" },
        { label: "Vercel: Rendering Modes", url: "https://vercel.com/blog/rendering-modes", type: "Guide" }
      ]
    },
    {
      term: "WebSockets & real-time communication",
      slug: "websockets-realtime-communication",
      meaning: "A persistent phone call instead of sending letters — keeps an open connection for instant two-way communication.",
      purpose: "Enable instant two-way messaging for chat, live sports, stock tickers, and multi-player apps.",
      starter: {
        summary: "A single persistent TCP connection opened once. Either client or server can push messages instantly.",
        coreConcept: "Persistent two-way TCP connection.",
        quickExample: "const socket = new WebSocket('wss://chat.com');"
      },
      deeper: {
        tradeoffs: "WebSockets eliminate HTTP polling overhead for high-frequency updates, but load balancers must support stateful persistent connections.",
        edgeCases: "Connection drops requiring client heartbeat ping/pong and auto-reconnect logic."
      },
      functions: ["Full-duplex persistent connection", "Server push messages", "ws:// and wss:// protocols"],
      objectives: ["Explain why WebSockets beat HTTP polling every 2 seconds for chat apps"],
      keyPoints: ["Use Server-Sent Events (SSE) if you only need one-way server-to-client updates"],
      examples: [{ isCode: true, language: "javascript", text: "const socket = new WebSocket(\"wss://chat.example.com\");\nsocket.onmessage = (event) => console.log(event.data);" }],
      sources: [
        { label: "MDN: WebSockets API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", type: "Official Docs" },
        { label: "Socket.io Documentation", url: "https://socket.io/docs/v4/", type: "Official Docs" },
        { label: "Ably: What are WebSockets?", url: "https://ably.com/topic/websockets", type: "Guide" }
      ]
    },
    {
      term: "Web performance optimization",
      slug: "web-performance-optimization",
      meaning: "Making a website feel fast — trimming bundle sizes, lazy loading images, and caching assets.",
      purpose: "Improve user conversion rates, Core Web Vitals, and search engine SEO rankings.",
      starter: {
        summary: "Lazy loading, minification, code splitting, image optimization (WebP/AVIF), CDN caching.",
        coreConcept: "Fast load times and responsive UI interactions.",
        quickExample: "<img src='photo.webp' loading='lazy' />"
      },
      deeper: {
        tradeoffs: "Code splitting reduces initial bundle size but creates additional dynamic HTTP chunk requests.",
        edgeCases: "Layout shifts (CLS) caused by images without explicit height/width attributes."
      },
      functions: ["LCP (Largest Contentful Paint)", "FID/INP (Interactivity)", "CLS (Cumulative Layout Shift)", "Code Splitting & Lazy Loading"],
      objectives: ["Diagnose performance bottlenecks using Chrome DevTools Lighthouse"],
      keyPoints: ["Core Web Vitals measure real user loading, interactivity, and visual stability"],
      examples: [{ isCode: true, language: "html", text: "<img src=\"photo.jpg\" loading=\"lazy\" width=\"600\" height=\"400\" />" }],
      sources: [
        { label: "web.dev: Fast load times", url: "https://web.dev/fast/", type: "Guide" },
        { label: "Google Core Web Vitals Guide", url: "https://web.dev/vitals/", type: "Official Guide" },
        { label: "MDN: Performance Optimization", url: "https://developer.mozilla.org/en-US/docs/Learn/Performance", type: "Official Docs" }
      ]
    },
    {
      term: "Serialization formats: JSON, XML, Protobuf",
      slug: "serialization-formats-json-xml-protobuf",
      meaning: "Packaging data so it can travel between different systems and be understood on the other end.",
      purpose: "Exchange structured data reliably across network boundaries.",
      starter: {
        summary: "JSON (human-readable web standard), XML (older verbose enterprise), Protobuf (compact binary for gRPC).",
        coreConcept: "Data serialization for transmission.",
        quickExample: "JSON.stringify(data) vs binary Protobuf"
      },
      deeper: {
        tradeoffs: "JSON is human-readable and universal; Protobuf is 5-10x smaller and faster to parse but requires compiled schema files.",
        edgeCases: "Date object serialization in JSON."
      },
      functions: ["JSON — text key-value format", "XML — markup tag format", "Protobuf — binary schema format"],
      objectives: ["Choose between JSON and Protobuf based on performance vs readability needs"],
      keyPoints: ["Protobuf requires predefined `.proto` schema definitions"],
      examples: [{ isCode: true, language: "json", text: "{\n  \"name\": \"Ana\",\n  \"age\": 30\n}" }],
      sources: [
        { label: "Protobuf Docs", url: "https://protobuf.dev/", type: "Official Docs" },
        { label: "MDN: Working with JSON", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON", type: "Official Docs" },
        { label: "W3C XML Standard Overview", url: "https://www.w3.org/XML/", type: "Standard" }
      ]
    },
    {
      term: "Types of tech stacks",
      slug: "types-of-tech-stacks",
      meaning: "The three layers of any software system: Presentation (UI), Application (Logic), and Data (Storage).",
      purpose: "Structure multi-tier applications into decoupled functional layers.",
      starter: {
        summary: "Presentation layer (Frontend) → Application logic layer (Backend API) → Data layer (Database).",
        coreConcept: "Separation of concerns across application tiers.",
        quickExample: "React → Node API → PostgreSQL DB"
      },
      deeper: {
        tradeoffs: "Decoupling layers allows swapping out frontends without rewriting backend database logic.",
        edgeCases: "Tightly coupled database queries inside UI components."
      },
      functions: ["Presentation Tier (UI)", "Application Tier (Business Logic)", "Data Tier (Data Storage)"],
      objectives: ["Identify which tier a technology belongs to in an architecture diagram"],
      keyPoints: ["Keep business logic out of the presentation layer"],
      examples: [{ isCode: false, text: "Online store: React (Presentation), Node.js API (Application), Postgres (Data)." }],
      sources: [
        { label: "MDN: Client-Server Overview", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview", type: "Guide" },
        { label: "AWS: What is a Web Application?", url: "https://aws.amazon.com/what-is/web-application/", type: "Guide" },
        { label: "IBM: Three-tier Architecture", url: "https://www.ibm.com/topics/three-tier-architecture", type: "Guide" }
      ]
    },
    {
      term: "Types of full stacks",
      slug: "types-of-full-stacks",
      meaning: "Pre-packaged combinations of frontend + backend + database that earned common acronyms.",
      purpose: "Standardize tech stack selection for web applications.",
      starter: {
        summary: "MERN (Mongo, Express, React, Node), LAMP (Linux, Apache, MySQL, PHP), JAMstack (JS, APIs, Markup).",
        coreConcept: "Common technology stack templates.",
        quickExample: "MERN = MongoDB + Express + React + Node"
      },
      deeper: {
        tradeoffs: "MERN uses one language (JavaScript) across the entire stack, simplifying developer hiring.",
        edgeCases: "Using heavy full-stack frameworks for simple static content sites."
      },
      functions: ["MERN / MEAN / MEVN", "LAMP stack", "JAMstack"],
      objectives: ["Pick a full stack template suited to project requirements"],
      keyPoints: ["Stack acronyms are starting templates, not rigid rules"],
      examples: [{ isCode: false, text: "JAMstack for static blogs; MERN for real-time web apps." }],
      sources: [
        { label: "MDN: How the Web Works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works", type: "Guide" },
        { label: "MongoDB MERN Stack Tutorial", url: "https://www.mongodb.com/languages/mern-stack-tutorial", type: "Official Guide" },
        { label: "Jamstack Official Site", url: "https://jamstack.org/", type: "Official Guide" }
      ]
    },
    {
      term: "Cookies",
      slug: "http-cookies",
      meaning: "A sticky note the browser keeps for a specific website, attaching it automatically to every request.",
      purpose: "Maintain state, session IDs, and authentication across HTTP requests.",
      starter: {
        summary: "Small key-value pairs stored by browser and attached to HTTP request headers.",
        coreConcept: "Automatic browser credential attachment.",
        quickExample: "Set-Cookie: session_id=xyz; HttpOnly; Secure; SameSite=Strict"
      },
      deeper: {
        tradeoffs: "Cookies are sent automatically with matching requests — making them great for session auth but vulnerable to CSRF if SameSite isn't set.",
        edgeCases: "Exceeding 4KB cookie storage limit."
      },
      functions: ["HttpOnly (prevents JS access)", "Secure (HTTPS only)", "SameSite=Strict/Lax (prevents CSRF)"],
      objectives: ["Set secure cookie attributes for authentication tokens"],
      keyPoints: ["Always use HttpOnly flag on auth session cookies to block XSS theft"],
      examples: [{ isCode: true, language: "http", text: "Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Strict" }],
      sources: [
        { label: "MDN: Using HTTP Cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies", type: "Official Docs" },
        { label: "OWASP: Session Management", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html", type: "Security Standard" },
        { label: "web.dev: SameSite Cookies", url: "https://web.dev/samesite-cookies-explained/", type: "Guide" }
      ]
    },
    {
      term: "Local storage",
      slug: "browser-local-storage",
      meaning: "A persistent client-side key-value notebook in the browser that survives closing the browser.",
      purpose: "Store non-sensitive UI state (theme preferences, draft text) in client memory.",
      starter: {
        summary: "Key-value client storage (~5MB limit). Data stays until explicitly cleared by code.",
        coreConcept: "Persistent client-side key-value store.",
        quickExample: "localStorage.setItem('theme', 'dark')"
      },
      deeper: {
        tradeoffs: "localStorage is easy to use but accessible by ANY client-side JavaScript, making it vulnerable to XSS script theft.",
        edgeCases: "Never store JWT auth tokens in localStorage if XSS vulnerability exists."
      },
      functions: ["setItem(key, value)", "getItem(key)", "removeItem(key)", "clear()"],
      objectives: ["Decide when data belongs in localStorage vs cookies"],
      keyPoints: ["Never store secret keys or JWT tokens in localStorage"],
      examples: [{ isCode: true, language: "javascript", text: "localStorage.setItem(\"theme\", \"dark\");\nconst theme = localStorage.getItem(\"theme\");" }],
      sources: [
        { label: "MDN: Window.localStorage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage", type: "Official Docs" },
        { label: "W3Schools: Web Storage API", url: "https://www.w3schools.com/html/html5_webstorage.asp", type: "Interactive Guide" },
        { label: "LogRocket: LocalStorage Guide", url: "https://blog.logrocket.com/localstorage-javascript-complete-guide/", type: "Guide" }
      ]
    },
    {
      term: "Session storage",
      slug: "browser-session-storage",
      meaning: "Local storage's short-lived sibling — cleared the instant the browser tab is closed.",
      purpose: "Store temporary data scoped to a single browser tab session.",
      starter: {
        summary: "Same API as localStorage, but automatically deleted when the tab closes.",
        coreConcept: "Tab-scoped temporary client storage.",
        quickExample: "sessionStorage.setItem('form_step', '2')"
      },
      deeper: {
        tradeoffs: "Data is completely isolated per tab; opening the same page in two tabs creates two independent sessionStorages.",
        edgeCases: "Expecting data to persist across new tab navigation."
      },
      functions: ["Tab-scoped lifetime", "Automatic cleanup on tab close"],
      objectives: ["Use sessionStorage for multi-step form progress"],
      keyPoints: ["Use for temporary state that shouldn't survive closing the tab"],
      examples: [{ isCode: true, language: "javascript", text: "sessionStorage.setItem(\"draft_step\", \"2\");" }],
      sources: [
        { label: "MDN: Window.sessionStorage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage", type: "Official Docs" },
        { label: "W3Schools: sessionStorage Property", url: "https://www.w3schools.com/jsref/prop_win_sessionstorage.asp", type: "Interactive Guide" },
        { label: "GeeksforGeeks: SessionStorage vs LocalStorage", url: "https://www.geeksforgeeks.org/difference-between-localstorage-and-sessionstorage/", type: "Tutorial" }
      ]
    }
  ]
};
