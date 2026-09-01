export const securityAuthenticationDomain = {
  domain: "Security & Authentication",
  color: "#9C3F3F",
  entries: [
    {
      term: "JWT (JSON Web Tokens)",
      slug: "jwt-json-web-tokens",
      meaning: "A digitally signed, self-contained passport that proves who you are without requiring database lookups on every request.",
      purpose: "Enable stateless authentication across distributed APIs and microservices.",
      starter: {
        summary: "JWT consists of Header.Payload.Signature. The server verifies the signature using a secret key.",
        coreConcept: "Stateless — payload contains user identity claims (id, role), verified cryptographically without DB queries.",
        quickExample: "Authorization: Bearer eyJhbGciOi..."
      },
      deeper: {
        tradeoffs: "JWTs eliminate session DB lookups, but cannot be easily revoked before expiration without maintaining a token revocation blacklist.",
        edgeCases: "Storing sensitive data in unencrypted base64 payload, using weak HMAC secret keys."
      },
      functions: [
        "Header — specifies algorithm (HS256, RS256) and token type",
        "Payload — stores user identity claims (sub, role, exp)",
        "Signature — created by hashing Header + Payload with server secret"
      ],
      objectives: [
        "Explain why JWT payloads are readable by anyone (base64) unless encrypted",
        "Implement short-lived access tokens paired with secure httpOnly refresh cookies"
      ],
      keyPoints: [
        "JWTs are SIGNED to prevent tampering; they are NOT ENCRYPTED by default",
        "Never store sensitive data (passwords, SSNs) inside JWT payloads"
      ],
      examples: [
        { isCode: true, language: "json", text: "// Decoded JWT Payload\n{\n  \"sub\": \"user_123\",\n  \"name\": \"Ana\",\n  \"role\": \"admin\",\n  \"exp\": 1712000000\n}" }
      ],
      sources: [
        { label: "JWT.io Introduction", url: "https://jwt.io/introduction", type: "Official Spec" },
        { label: "OWASP JWT Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html", type: "Security Standard" },
        { label: "MDN: HTTP Authorization Header", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization", type: "Official Docs" }
      ]
    },
    {
      term: "Common Web Vulnerabilities (OWASP Top 10)",
      slug: "common-web-vulnerabilities",
      meaning: "The standard list of the most critical security flaws found in web applications.",
      purpose: "Understand how attackers exploit web apps and how to defend against SQL Injection, XSS, and CSRF.",
      starter: {
        summary: "SQLi (injecting database commands), XSS (injecting malicious JS), CSRF (tricking browser into unwanted requests).",
        coreConcept: "Never trust user input. Always sanitize, escape, and parameterize queries.",
        quickExample: "SELECT * FROM users WHERE input = ? (Safe parameterized query)"
      },
      deeper: {
        tradeoffs: "Security controls add development overhead and input validation rules, but prevent catastrophic data breaches.",
        edgeCases: "DOM-based XSS bypassing server-side sanitizers, SSRF (Server-Side Request Forgery) in cloud metadata endpoints."
      },
      functions: [
        "SQL Injection (SQLi) — user input executed as raw SQL commands",
        "Cross-Site Scripting (XSS) — attacker scripts executed in victim's browser",
        "Cross-Site Request Forgery (CSRF) — unauthorized commands transmitted from a trusted user"
      ],
      objectives: [
        "Prevent SQL Injection by strictly using Parameterized Queries / ORMs",
        "Prevent XSS by escaping HTML output and setting Content Security Policy (CSP) headers"
      ],
      keyPoints: [
        "Always use `HttpOnly` and `SameSite=Strict` flags on authentication cookies to mitigate XSS & CSRF",
        "OWASP is the gold standard reference for application security"
      ],
      examples: [
        { isCode: true, language: "python", text: "# Vulnerable to SQLi:\ndb.execute(f\"SELECT * FROM users WHERE name = '{user_input}'\")\n\n# Safe (Parameterized):\ndb.execute(\"SELECT * FROM users WHERE name = %s\", (user_input,))" }
      ],
      sources: [
        { label: "OWASP Top 10 Official Site", url: "https://owasp.org/www-project-top-ten/", type: "Security Standard" },
        { label: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", type: "Free Interactive Labs" },
        { label: "MDN: Web Security", url: "https://developer.mozilla.org/en-US/docs/Web/Security", type: "Official Docs" }
      ]
    }
  ]
};
