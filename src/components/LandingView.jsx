import React, { useState } from 'react';
import { BookOpen, HelpCircle, Wrench, ArrowRight, ShieldCheck, Globe, Github, UserCheck, ExternalLink, X } from 'lucide-react';
import { DOMAINS, ALL_GUIDE_ENTRIES } from '../data/guide/index.js';
import { INTERVIEW_QUESTIONS } from '../data/interview/index.js';

export function LandingView({ setActiveMode, setSelectedTermKey, setSelectedQAId, handleInstallClick, installPrompt, theme, onOpenAtsResume }) {
  const isDark = theme === 'dark';
  const [showLinksModal, setShowLinksModal] = useState(false);
  const [linksFilter, setLinksFilter] = useState('');

  const totalDomains = DOMAINS.length;
  const totalTopics = ALL_GUIDE_ENTRIES.length;
  const totalQAs = INTERVIEW_QUESTIONS.length;
  const totalCategories = Array.from(new Set(INTERVIEW_QUESTIONS.map(q => q.category))).length;

  // Aggregate all official source links across all topics
  const allVerifiedSources = ALL_GUIDE_ENTRIES.flatMap(e => 
    (e.sources || []).map(s => ({ ...s, topic: e.term, domain: e.domain || 'IT Compendium' }))
  );

  const filteredVerifiedSources = allVerifiedSources.filter(s => {
    if (!linksFilter.trim()) return true;
    const q = linksFilter.toLowerCase();
    return s.label.toLowerCase().includes(q) || s.topic.toLowerCase().includes(q) || s.url.toLowerCase().includes(q);
  });

  const onInstallCardClick = () => {
    if (installPrompt) {
      handleInstallClick();
    } else {
      alert("📲 To install HireReady Dev:\n• Chrome/Edge: Click the Install button in your address bar or browser menu.\n• iOS Safari: Tap Share (↑) -> 'Add to Home Screen'.");
    }
  };

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
            <span style={{ fontSize: 10.5, fontWeight: 700, background: "#059669", color: "#F8F5EE", padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>
              v1.0.9 — Sep 2026
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

      {/* DYNAMIC QUICK STATS STRIP WITH INTERACTIVE CLICK HANDLERS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 28 }}>
        {/* CARD 1: CORE IT DOMAINS & TOPICS */}
        <div
          onClick={() => setActiveMode('guide')}
          title="Click to open IT Compendium Topics"
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 14,
            cursor: "pointer",
            transition: "all 0.15s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = isDark ? '#60A5FA' : '#33417A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = isDark ? '#374151' : '#CFC7B0';
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: isDark ? '#60A5FA' : '#33417A', marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <BookOpen size={16} />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{totalDomains} Core IT Domains</span>
            </div>
            <ArrowRight size={13} />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>{totalTopics}+ Topics</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>Click to Browse Compendium →</div>
        </div>

        {/* CARD 2: Q&A CATEGORIES */}
        <div
          onClick={() => setActiveMode('interview')}
          title="Click to start Interview Q&A Practice"
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 14,
            cursor: "pointer",
            transition: "all 0.15s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = "#059669";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = isDark ? '#374151' : '#CFC7B0';
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#059669", marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <HelpCircle size={16} />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{totalCategories} Q&A Categories</span>
            </div>
            <ArrowRight size={13} />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>{totalQAs}+ Q&As</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>Click to Practice Answers →</div>
        </div>

        {/* CARD 3: VERIFIED LINKS DIRECTORY */}
        <div
          onClick={() => setShowLinksModal(true)}
          title="Click to view 350+ Verified Documentation Links"
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 14,
            cursor: "pointer",
            transition: "all 0.15s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = "#D97706";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = isDark ? '#374151' : '#CFC7B0';
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#D97706", marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Globe size={16} />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{allVerifiedSources.length}+ Verified Links</span>
            </div>
            <ArrowRight size={13} />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>100% Free</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>Click for Docs Directory →</div>
        </div>

        {/* CARD 4: OFFLINE PWA INSTALL */}
        <div
          onClick={onInstallCardClick}
          title="Click to Install Offline App"
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 14,
            cursor: "pointer",
            transition: "all 0.15s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = isDark ? '#9CA3AF' : '#475569';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.borderColor = isDark ? '#374151' : '#CFC7B0';
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: isDark ? '#9CA3AF' : '#475569', marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <ShieldCheck size={16} />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>Offline Ready</span>
            </div>
            <ArrowRight size={13} />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>Install App</div>
          <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', marginTop: 2 }}>Click for PWA Setup →</div>
        </div>
      </div>

      {/* ATS RESUME FEATURE PROMO BANNER */}
      <div
        style={{
          background: isDark ? '#064E3B' : '#ECFDF5',
          border: `1px solid ${isDark ? '#047857' : '#A7F3D0'}`,
          borderRadius: 8,
          padding: "16px 20px",
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ background: "#059669", color: "#FFF", padding: 10, borderRadius: "50%" }}>
            <UserCheck size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: isDark ? '#A7F3D0' : '#065F46', marginBottom: 2 }}>
              📄 1-Column ATS Single-Column Resume Builder & Educational Notes
            </h3>
            <p style={{ fontSize: 12, color: isDark ? '#D1D5DB' : '#047857', margin: 0 }}>
              Build ATS-friendly single-column resumes that pass Workday, Greenhouse, Lever, and Taleo scanners with 99%+ parsing accuracy.
            </p>
          </div>
        </div>

        {onOpenAtsResume && (
          <button
            onClick={onOpenAtsResume}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              background: "#059669",
              color: "#FFF",
              border: "none",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6
            }}
          >
            Open Resume Builder <ArrowRight size={14} />
          </button>
        )}
      </div>

      {/* NAVIGATION CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
        <div
          onClick={() => setActiveMode('guide')}
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 20,
            cursor: "pointer",
            transition: "transform 0.15s ease, boxShadow 0.15s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: isDark ? '#60A5FA' : '#33417A', fontWeight: 800, fontSize: 16 }}>
              <BookOpen size={20} />
              <span>IT Field Guide Compendium</span>
            </div>
            <ArrowRight size={16} color={isDark ? '#9CA3AF' : '#8A8474'} />
          </div>
          <p style={{ fontSize: 12.5, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.45, marginBottom: 12 }}>
            Explore {totalTopics}+ technical topics spanning {totalDomains} core IT domains. Dives into Starter concepts, Deeper tradeoffs, functions, objectives, and live code sandboxes.
          </p>
          <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A' }}>
            Browse {totalTopics}+ IT Topics →
          </div>
        </div>

        <div
          onClick={() => setActiveMode('interview')}
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 8,
            padding: 20,
            cursor: "pointer",
            transition: "transform 0.15s ease, boxShadow 0.15s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#059669", fontWeight: 800, fontSize: 16 }}>
              <HelpCircle size={20} />
              <span>Interview Q&A Practice</span>
            </div>
            <ArrowRight size={16} color={isDark ? '#9CA3AF' : '#8A8474'} />
          </div>
          <p style={{ fontSize: 12.5, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.45, marginBottom: 12 }}>
            Practice {totalQAs}+ real-world HR and technical interview questions across {totalCategories} categories. Dives into what recruiters evaluate, sample answers, and 60s answer timers.
          </p>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#059669" }}>
            Start Interview Practice →
          </div>
        </div>
      </div>

      {/* VERIFIED DOCUMENTATION LINKS MODAL */}
      {showLinksModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999999,
            padding: 20
          }}
          onClick={() => setShowLinksModal(false)}
        >
          <div
            style={{
              background: isDark ? '#1F2937' : '#F8F5EE',
              border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
              color: isDark ? '#EDE9DE' : '#22262B',
              borderRadius: 10,
              maxWidth: 680,
              width: "100%",
              maxHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              overflow: "hidden"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "16px 20px", background: isDark ? '#111827' : '#22262B', color: "#EDE9DE", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Globe size={20} color="#D97706" />
                <span style={{ fontWeight: 800, fontSize: 16 }}>Verified Documentation Links Index</span>
              </div>
              <button onClick={() => setShowLinksModal(false)} style={{ background: "transparent", border: "none", color: "#9CA3AF", cursor: "pointer" }}><X size={20} /></button>
            </div>

            <div style={{ padding: 16, borderBottom: `1px solid ${isDark ? '#374151' : '#CFC7B0'}` }}>
              <input
                type="text"
                value={linksFilter}
                onChange={e => setLinksFilter(e.target.value)}
                placeholder="Filter links by topic (e.g., Docker, React, FastAPI, Python, Redis)..."
                style={{ width: "100%", padding: 8, borderRadius: 6, border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`, background: isDark ? '#111827' : '#FFF', color: isDark ? '#FFF' : '#000', fontSize: 12.5 }}
              />
            </div>

            <div className="fg-scroll" style={{ flex: 1, overflowY: "auto", padding: 20 }}>
              <div style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#5B5A52', marginBottom: 12 }}>
                Showing {filteredVerifiedSources.length} of {allVerifiedSources.length} verified official documentation & spec links:
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {filteredVerifiedSources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: isDark ? '#111827' : '#FFF',
                      border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
                      borderRadius: 6,
                      padding: 10,
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', textTransform: "uppercase" }}>{src.topic}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: isDark ? '#FFF' : '#22262B', margin: "2px 0" }}>{src.label}</div>
                    </div>
                    <div style={{ fontSize: 10, color: "#D97706", display: "flex", alignItems: "center", gap: 4, marginTop: 6 }}>
                      <span>{src.type || 'Official Docs'}</span> <ExternalLink size={10} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
