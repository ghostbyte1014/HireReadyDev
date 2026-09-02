import React, { useState } from 'react';
import { BookOpen, HelpCircle, UserCheck, ShieldCheck, ArrowRight, ArrowLeft, X, Sparkles, CheckCircle2, Bookmark, Edit3, Search, Clock, Download, Upload, Layers, Cpu } from 'lucide-react';

export function OnboardingTutorialModal({ onClose, onComplete, theme }) {
  const isDark = theme === 'dark';
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Welcome to HireReady Dev",
      subtitle: "The Developer's IT Compendium & Interview Masterclass",
      icon: <Sparkles size={26} color="#60A5FA" />,
      content: (
        <div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#374151', marginBottom: 14 }}>
            HireReady Dev is an <strong>offline-first Progressive Web App (PWA)</strong> engineered to take software engineers, IT professionals, and students from syntax fundamentals to system design mastery and interview readiness.
          </p>
          <div style={{ background: isDark ? '#111827' : '#F8F5EE', padding: 14, borderRadius: 8, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12.5 }}>
            <div style={{ fontWeight: 800, color: isDark ? '#A7F3D0' : '#065F46', marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
              <CheckCircle2 size={15} /> Core Capabilities:
            </div>
            <ul style={{ paddingLeft: 18, margin: 0, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.5 }}>
              <li><strong>16 Core IT Domains & 86+ Topics:</strong> Deep dives, Starter vs Deeper levels, and live JS sandboxes.</li>
              <li><strong>70+ Interview Q&As:</strong> HR & technical practice, 60s answer timers, and recruiter evaluation breakdown.</li>
              <li><strong>Single-Column ATS Resume Builder:</strong> 5 ATS-compliant templates, custom styling, & PDF export.</li>
              <li><strong>100% Offline Capability:</strong> Study anywhere on subways or flights without Wi-Fi.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "IT Field Guide & Sandboxes",
      subtitle: "Explore 16 Core IT Domains & Live Code Execution",
      icon: <BookOpen size={26} color="#60A5FA" />,
      content: (
        <div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#374151', marginBottom: 14 }}>
            Browse structured IT topics spanning Programming Fundamentals, Web Development, Databases, DevOps, Microservices, and System Architecture.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12 }}>
              <div style={{ fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <Layers size={13} /> Starter vs Deeper
              </div>
              <div style={{ color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.4 }}>Toggle between high-level executive summaries and deep technical trade-off analyses.</div>
            </div>
            <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12 }}>
              <div style={{ fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <Cpu size={13} /> Live Sandboxes
              </div>
              <div style={{ color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.4 }}>Test live JavaScript code snippets directly in your browser with real console output.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Bookmarks, Favorites & Personal Notes",
      subtitle: "Save Topics & Keep Your Own Study Notebook",
      icon: <Bookmark size={26} color="#F59E0B" />,
      content: (
        <div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#374151', marginBottom: 14 }}>
            Customize your learning experience by saving key topics and taking private notes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12 }}>
              <div style={{ fontWeight: 700, color: "#F59E0B", marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <Bookmark size={14} /> Bookmarks & Favorites
              </div>
              <div style={{ color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.4 }}>
                Click the bookmark star on any topic or Q&A. Filter bookmarked items anytime using the <strong>Bookmarked Only</strong> filter chip in the sidebar drawer!
              </div>
            </div>
            <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12 }}>
              <div style={{ fontWeight: 700, color: "#3B82F6", marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <Edit3 size={14} /> Personal Study Notes
              </div>
              <div style={{ color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.4 }}>
                Write your own custom notes on any topic or question. Notes are automatically saved locally and included when downloading PDFs or JSON backups!
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Technical Interview Q&A Practice",
      subtitle: "Master Real HR & Technical Questions with 60s Timers",
      icon: <HelpCircle size={26} color="#059669" />,
      content: (
        <div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#374151', marginBottom: 14 }}>
            Practice 70+ categorized interview questions with sample answers, recruiter evaluation notes, and interactive practice tools.
          </p>
          <div style={{ background: isDark ? '#111827' : '#F8F5EE', padding: 12, borderRadius: 8, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12.5 }}>
            <div style={{ fontWeight: 700, color: "#059669", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
              <Clock size={14} /> Interactive Practice Tools:
            </div>
            <ul style={{ paddingLeft: 18, margin: 0, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.5 }}>
              <li><strong>60s Practice Answer Timer:</strong> Simulate real interview pressure.</li>
              <li><strong>Self-Evaluation Tracking:</strong> Mark questions as <em>Review Needed</em>, <em>Practicing</em>, or <em>Mastered</em>.</li>
              <li><strong>HR & Recruiter Notes:</strong> Reveal what hiring managers evaluate during answers.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "1-Column ATS Resume Builder",
      subtitle: "Build Resumes That Beat Automated Scanners",
      icon: <UserCheck size={26} color="#3B82F6" />,
      content: (
        <div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#374151', marginBottom: 14 }}>
            Create single-column resumes optimized for Workday, Greenhouse, Lever, and Taleo ATS scanners with <strong>99%+ parsing accuracy</strong>.
          </p>
          <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 8, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12 }}>
            <div style={{ fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 4 }}>5 ATS Templates & Custom Styling</div>
            <p style={{ color: isDark ? '#9CA3AF' : '#5B5A52', margin: 0, lineHeight: 1.45 }}>
              Choose from Standard Tech, Modern Slate, Harvard Academic, Compact Dev, and Project-First templates. Customize header alignment, colors, and export to PDF in 1 click!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Offline PWA, Backups & Docs Index",
      subtitle: "Study Anywhere & Keep Data Backed Up",
      icon: <ShieldCheck size={26} color="#D97706" />,
      content: (
        <div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#374151', marginBottom: 14 }}>
            Install HireReady Dev on your home screen or desktop taskbar to access all IT topics offline without internet.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12 }}>
              <div style={{ fontWeight: 700, color: "#D97706", marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <Search size={14} /> 350+ Verified Links
              </div>
              <div style={{ color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.4 }}>Browse official specs for MDN, W3C, Docker, Python, FastAPI, and PostgreSQL.</div>
            </div>
            <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, fontSize: 12 }}>
              <div style={{ fontWeight: 700, color: "#D97706", marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <Download size={14} /> JSON Backup & Restore
              </div>
              <div style={{ color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.4 }}>Export and import your study bookmarks and personal notes anytime in the footer.</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const step = tutorialSteps[currentStep];

  return (
    <div
      className="fg-sans fg-no-print"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        padding: 16
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: isDark ? '#1F2937' : '#F8F5EE',
          border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
          color: isDark ? '#EDE9DE' : '#22262B',
          borderRadius: 12,
          maxWidth: 540,
          width: "100%",
          padding: 24,
          boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 16, right: 16, border: "none", background: "transparent", cursor: "pointer", color: isDark ? '#9CA3AF' : '#5B5A52' }}
        >
          <X size={20} />
        </button>

        {/* STEP HEADER */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
          <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: "50%", border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {step.icon}
          </div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: isDark ? '#FFF' : '#22262B', margin: 0 }}>
              {step.title}
            </h2>
            <div style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#5B5A52', marginTop: 2 }}>
              {step.subtitle}
            </div>
          </div>
        </div>

        {/* STEP CONTENT BODY */}
        <div style={{ minHeight: 220, marginBottom: 20 }}>
          {step.content}
        </div>

        {/* PROGRESS DOTS STRIP */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 20 }}>
          {tutorialSteps.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentStep(idx)}
              style={{
                width: currentStep === idx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: currentStep === idx ? '#3B82F6' : (isDark ? '#374151' : '#CFC7B0'),
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            />
          ))}
        </div>

        {/* FOOTER ACTIONS ROW */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: isDark ? '#9CA3AF' : '#5B5A52',
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Skip Tutorial
          </button>

          <div style={{ display: "flex", gap: 8 }}>
            {currentStep > 0 && (
              <button
                onClick={handlePrev}
                style={{
                  padding: "8px 14px",
                  borderRadius: 6,
                  background: isDark ? '#374151' : '#E3DECD',
                  color: isDark ? '#EDE9DE' : '#22262B',
                  border: "none",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                }}
              >
                <ArrowLeft size={14} /> Previous
              </button>
            )}

            <button
              onClick={handleNext}
              style={{
                padding: "8px 18px",
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
              {currentStep === tutorialSteps.length - 1 ? (
                <>Finish & Start Exploring <ArrowRight size={14} /></>
              ) : (
                <>Next Step <ArrowRight size={14} /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
