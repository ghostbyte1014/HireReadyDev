export const networkingDomain = {
  domain: "Networking",
  color: "#6B4C6E",
  entries: [
    {
      term: "OSI model & TCP/IP",
      slug: "osi-model-tcp-ip",
      meaning: "A layered map of everything that has to happen for one computer's message to reach another.",
      purpose: "A layered mental model for how data actually travels from one machine to another.",
      starter: {
        summary: "OSI has 7 theoretical layers (Application down to Physical). TCP/IP is the practical 4-layer internet stack.",
        coreConcept: "Each layer adds header information (encapsulation) on the way down, and strips it off on the way up.",
        quickExample: "HTTP (App) → TCP (Transport) → IP (Network) → Ethernet (Link)"
      },
      deeper: {
        tradeoffs: "TCP guarantees reliable, ordered packet delivery with handshake overhead; UDP drops overhead for raw speed (video streaming, gaming).",
        edgeCases: "Packet loss, MTU fragmentation, SYN flood DDoS attacks."
      },
      functions: [
        "OSI 7 Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application",
        "TCP/IP Stack: Link, Internet, Transport, Application",
        "Encapsulation — data wrapped in headers at each descending layer"
      ],
      objectives: [
        "Place familiar concepts (IP address, HTTP, TCP handshake, MAC address) at the correct layer",
        "Explain the difference between connection-oriented TCP and connectionless UDP"
      ],
      keyPoints: [
        "TCP handles ordered delivery & error checking; IP handles routing addresses",
        "Port numbers (e.g., 80, 443, 22) route traffic to specific applications on a machine"
      ],
      examples: [
        { isCode: true, language: "bash", text: "curl -v https://example.com # Traces Application -> Transport -> Network" },
        { isCode: false, text: "Postal mail: Envelope address = IP routing, Mail truck = Link layer, Letter content = Application layer." }
      ],
      sources: [
        { label: "Cloudflare: OSI Model Explained", url: "https://www.cloudflare.com/learning/network/what-is-the-osi-model/", type: "Official Guide" },
        { label: "MDN: World Wide Web & Protocols", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work", type: "Official Docs" },
        { label: "GeeksforGeeks: TCP/IP Model", url: "https://www.geeksforgeeks.org/tcp-ip-model/", type: "Tutorial" }
      ]
    },
    {
      term: "DNS",
      slug: "dns",
      meaning: "The internet's phone book — turns human-rememberable names into computer IP addresses.",
      purpose: "Map domain names (example.com) to numeric IP addresses (93.184.216.34).",
      starter: {
        summary: "Your browser asks a DNS resolver for an IP. The resolver checks caches and authoritative servers, then returns the IP.",
        coreConcept: "Hierarchical lookup: Root -> TLD (.com) -> Authoritative Nameserver.",
        quickExample: "example.com → 93.184.216.34"
      },
      deeper: {
        tradeoffs: "DNS caching speeds up browsing, but TTL (Time-To-Live) delays mean IP updates take time to propagate globally.",
        edgeCases: "DNS cache poisoning, TTL propagation delays, split-horizon DNS in private VPN networks."
      },
      functions: [
        "A Record — maps domain to IPv4 address",
        "AAAA Record — maps domain to IPv6 address",
        "CNAME Record — aliases one domain name to another",
        "MX Record — specifies mail servers for the domain",
        "TXT Record — stores arbitrary text (SPF, DKIM domain verification)"
      ],
      objectives: [
        "Configure DNS records for custom web domain deployment",
        "Troubleshoot DNS propagation issues using `dig` or `nslookup`"
      ],
      keyPoints: [
        "DNS results are cached heavily across browser, OS, ISP, and resolver levels",
        "Changing DNS A records can take anywhere from minutes to 48 hours based on TTL"
      ],
      examples: [
        { isCode: true, language: "bash", text: "dig example.com A +short\n# Output: 93.184.216.34" }
      ],
      sources: [
        { label: "Cloudflare: What is DNS?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/", type: "Official Guide" },
        { label: "MDN: What is a Domain Name?", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name", type: "Official Docs" },
        { label: "DigitalOcean: Introduction to DNS", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts", type: "Guide" }
      ]
    },
    {
      term: "HTTPS & TLS",
      slug: "https-tls",
      meaning: "A locked, sealed envelope instead of an open postcard for internet communication.",
      purpose: "Encrypt traffic between client and server so hackers cannot intercept or tamper with it in transit.",
      starter: {
        summary: "HTTPS is HTTP running over TLS (Transport Layer Security) encryption. Certificates verify server identity.",
        coreConcept: "Asymmetric encryption verifies identity and exchanges a shared symmetric key for fast session encryption.",
        quickExample: "https:// (padlock icon) vs http:// (insecure warning)"
      },
      deeper: {
        tradeoffs: "TLS 1.3 reduced handshake latency from 2 round-trips to 1 round-trip (0-RTT resumption), making HTTPS nearly as fast as HTTP.",
        edgeCases: "Expired SSL certificates causing browser blocking, mixed-content security warnings on web pages."
      },
      functions: [
        "TLS Handshake — authenticates server identity via X.509 certificates",
        "Symmetric Encryption — encrypts actual HTTP payload data quickly",
        "Certificate Authorities (CAs) — trusted 3rd parties (Let's Encrypt) signing SSL certs"
      ],
      objectives: [
        "Explain why public Wi-Fi eavesdropping is prevented by HTTPS",
        "Provision free auto-renewing TLS certificates using Let's Encrypt / Certbot"
      ],
      keyPoints: [
        "HTTPS encrypts data in transit; it does not protect against database leaks on the server",
        "Modern web browsers mark plain HTTP sites as 'Not Secure'"
      ],
      examples: [
        { isCode: true, language: "bash", text: "certbot --nginx -d example.com # Auto-provisions free TLS cert" }
      ],
      sources: [
        { label: "Let's Encrypt Documentation", url: "https://letsencrypt.org/docs/", type: "Official Specs" },
        { label: "Cloudflare: What is HTTPS?", url: "https://www.cloudflare.com/learning/ssl/what-is-https/", type: "Official Guide" },
        { label: "MDN: What is HTTPS?", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS", type: "Official Docs" }
      ]
    },
    {
      term: "CDN (Content Delivery Network)",
      slug: "cdn-content-delivery-network",
      meaning: "Storing copies of static web files in edge servers worldwide so visitors download from the closest server.",
      purpose: "Drastically reduce page load times and origin server bandwidth by serving assets from geographical edge nodes.",
      starter: {
        summary: "CDNs cache static assets (images, CSS, JS) on servers closest to end users globally.",
        coreConcept: "User in Tokyo fetches assets from Tokyo edge server instead of US origin server.",
        quickExample: "https://cdn.example.com/assets/app.js"
      },
      deeper: {
        tradeoffs: "CDNs drastically cut origin server load and absorb DDoS attacks, but require cache invalidation strategies when deploying updates.",
        edgeCases: "Stale asset cache hits after new code releases without cache busting hashes."
      },
      functions: [
        "Edge Caching — store static assets at point-of-presence (PoP) locations",
        "DDoS Shielding — absorb massive malicious traffic surges before hitting origin",
        "Anycast Routing — route user DNS queries to physically nearest edge node"
      ],
      objectives: [
        "Implement cache invalidation and cache-busting filename hashing",
        "Configure Cloudflare or AWS CloudFront for web application speed"
      ],
      keyPoints: [
        "Use `Cache-Control: public, max-age=31536000, immutable` for hashed static assets",
        "CDNs are essential for modern global web performance"
      ],
      examples: [
        { isCode: true, language: "html", text: "<script src=\"https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js\"></script>" }
      ],
      sources: [
        { label: "Cloudflare CDN Guide", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/", type: "Official Guide" },
        { label: "AWS: What is a CDN?", url: "https://aws.amazon.com/what-is/cdn/", type: "Guide" },
        { label: "MDN: CDN Glossary", url: "https://developer.mozilla.org/en-US/docs/Glossary/CDN", type: "Official Docs" }
      ]
    }
  ]
};
