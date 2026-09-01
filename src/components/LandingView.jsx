import React from 'react';
import { BookOpen, HelpCircle, Wrench, ArrowRight, ShieldCheck, Globe, Github } from 'lucide-react';

export function LandingView({ setActiveMode, setSelectedTermKey, setSelectedQAId, handleInstallClick, installPrompt, theme }) {
  const isDark = theme === 'dark';

  return (
    <div style={{ maxWidth: 880, margin: "0 auto" }} className="fg-sans fg-landing-view fg-no-print">
      {/* HERO BANNER CARD */}
      <div
        style={{
          position: "relative",
          borderRadius: 12,
          overflow: "hidden",
          border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
          boxShadow: "0 10px 28px -6px rgba(0,0,0,0.2)",
          marginBottom: 28,
          background: "#22262B",
          minHeight: 180
        }}
      >
        <img
          src="/hero-banner.jpg?v=2"
          alt="HireReady Dev Hero Background"
          style={{ width: "100%", height: 210, objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to right, rgba(34,38,43,0.92) 0%, rgba(34,38,43,0.7) 60%, rgba(34,38,43,0.4) 100%)",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#EDE9DE"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 10.5, fontWeight: 700, background: "#33417A", color: "#F8F5EE", padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>
              WELCOME TO
            </span>
            <a
              href="https://github.com/ghostbyte1014"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 11, fontWeight: 700, color: "#EDE9DE", textDecoration: "none", opacity: 0.85, display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.1)", padding: "2px 8px", borderRadius: 4 }}
            >
              <Github size={12} /> by ghostbyte
            </a>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.4, color: "#FFFFFF", marginBottom: 6, lineHeight: 1.2 }}>
            HireReady Dev — The Developer's IT Compendium
          </h1>
          <p style={{ fontSize: 13.5, opacity: 0.9, color: "#CFC7B0", maxWidth: 640, lineHeight: 1.5 }}>
            The ultimate offline-first web application for full-stack IT knowledge, system design architecture, dev toolchains, and job interview readiness.
          </p>
        </div>
      </div>

      {/* QUICK STATS STRIP */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 28 }}>
        <div style={{ background: isDark ? '#1F2937' : '#F8F5EE', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, borderRadius: 8, padding: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 4 }}>
            <BookOpen size={16} />
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>16 Core IT Domains</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>80+ Topics</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>From Syntax to Architecture</div>
        </div>

        <div style={{ background: isDark ? '#1F2937' : '#F8F5EE', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, borderRadius: 8, padding: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#059669", marginBottom: 4 }}>
            <HelpCircle size={16} />
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>13 Categories</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>70+ Q&As</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>HR & Technical Practice</div>
        </div>

        <div style={{ background: isDark ? '#1F2937' : '#F8F5EE', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, borderRadius: 8, padding: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#D97706", marginBottom: 4 }}>
            <Globe size={16} />
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>300+ Verified Links</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>100% Free</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>MDN, W3C, Official Specs</div>
        </div>

        <div style={{ background: isDark ? '#1F2937' : '#F8F5EE', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, borderRadius: 8, padding: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: isDark ? '#9CA3AF' : '#475569', marginBottom: 4 }}>
            <ShieldCheck size={16} />
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Offline Ready</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>Install App</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>Study Anywhere without Wi-Fi</div>
        </div>
      </div>

      {/* PRIMARY ACTION CARDS */}
      <h2 style={{ fontSize: 16, fontWeight: 700, color: isDark ? '#FFF' : '#22262B', marginBottom: 12 }}>
        🚀 What would you like to study today?
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 32 }}>
        {/* CARD 1: FIELD GUIDE */}
        <div
          onClick={() => {
            setActiveMode("guide");
            setSelectedTermKey("REST vs GraphQL vs gRPC");
          }}
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 18,
            cursor: "pointer",
            transition: "all 0.15s ease"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ background: "#33417A", color: "#FFF", padding: 8, borderRadius: 6 }}>
              <BookOpen size={18} />
            </div>
            <ArrowRight size={16} color={isDark ? "#60A5FA" : "#33417A"} />
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: isDark ? '#FFF' : '#22262B', marginBottom: 4 }}>
            Explore IT Compendium
          </h3>
          <p style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.45 }}>
            Master core fundamentals, algorithms, system design, databases, security, and AI agentic engineering.
          </p>
        </div>

        {/* CARD 2: INTERVIEW PRACTICE */}
        <div
          onClick={() => {
            setActiveMode("interview");
            setSelectedQAId("q9_1");
          }}
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 18,
            cursor: "pointer",
            transition: "all 0.15s ease"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ background: "#059669", color: "#FFF", padding: 8, borderRadius: 6 }}>
              <HelpCircle size={18} />
            </div>
            <ArrowRight size={16} color="#059669" />
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: isDark ? '#FFF' : '#22262B', marginBottom: 4 }}>
            Start Interview Practice
          </h3>
          <p style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.45 }}>
            Practice real technical & HR interview questions with hidden sample answers, 60s timer, and mastery tracking.
          </p>
        </div>

        {/* CARD 3: TOOLING ROADMAP */}
        <div
          onClick={() => {
            setActiveMode("guide");
            setSelectedTermKey("Editors & IDE Recommendations");
          }}
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 18,
            cursor: "pointer",
            transition: "all 0.15s ease"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div style={{ background: "#475569", color: "#FFF", padding: 8, borderRadius: 6 }}>
              <Wrench size={18} />
            </div>
            <ArrowRight size={16} color={isDark ? "#9CA3AF" : "#475569"} />
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: isDark ? '#FFF' : '#22262B', marginBottom: 4 }}>
            Dev Toolchain Reference
          </h3>
          <p style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.45 }}>
            Recommended IDE setups, package managers (pnpm/poetry), unit test runners, Docker, and DB client tools.
          </p>
        </div>
      </div>

      {/* POPULAR TOPIC QUICK CHIPS */}
      <h2 style={{ fontSize: 14, fontWeight: 700, color: isDark ? '#FFF' : '#22262B', marginBottom: 10 }}>
        🔥 Popular Topics & High-Frequency Interview Questions
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
        {[
          { label: "🌐 REST vs GraphQL vs gRPC", key: "REST vs GraphQL vs gRPC" },
          { label: "⚡ System Design: Bitly Shortener", mode: "interview", qaId: "q9_1" },
          { label: "🤖 AI Agents & Agentic Loops", key: "AI agents (agentic AI)" },
          { label: "🐳 Docker & Kubernetes Pods", key: "Docker & containers" },
          { label: "🔑 JWT vs Session Cookies", key: "Authentication & Authorization (AuthN vs AuthZ)" },
          { label: "📊 PostgreSQL ACID Transactions", key: "ACID transactions & WAL" },
          { label: "📦 Model Context Protocol (MCP)", key: "How MCP works (Model Context Protocol)" }
        ].map((chip, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (chip.mode === "interview") {
                setActiveMode("interview");
                setSelectedQAId(chip.qaId);
              } else {
                setActiveMode("guide");
                setSelectedTermKey(chip.key);
              }
            }}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
              background: isDark ? '#1F2937' : '#F8F5EE',
              fontSize: 12,
              fontWeight: 600,
              color: isDark ? '#EDE9DE' : '#22262B',
              cursor: "pointer"
            }}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
}
