import React, { useState } from 'react';
import { BookOpen, Info, X, Github, Download, Upload } from 'lucide-react';

export function Footer({ theme, handleExportBackup, handleImportBackup, onRestartTutorial }) {
  const [showModal, setShowModal] = useState(false);

  const isDark = theme === 'dark';

  return (
    <footer
      className="fg-sans fg-no-print"
      style={{
        borderTop: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
        padding: "12px 24px",
        background: isDark ? '#1F2937' : '#E3DECD',
        fontSize: 12,
        color: isDark ? '#9CA3AF' : '#5B5A52',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span><strong>HireReady Dev</strong> — <em>The Developer's IT Compendium</em> | Created by</span>
        <a
          href="https://github.com/ghostbyte1014"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            fontWeight: 700,
            color: isDark ? '#EDE9DE' : '#22262B',
            textDecoration: "none",
            background: isDark ? '#374151' : '#F8F5EE',
            padding: "2px 8px",
            borderRadius: 4,
            border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`
          }}
        >
          <Github size={13} color={isDark ? '#EDE9DE' : '#22262B'} />
          <span>ghostbyte</span>
        </a>
        <span style={{ fontSize: 10, fontWeight: 700, background: isDark ? '#064E3B' : '#D1FAE5', color: isDark ? '#A7F3D0' : '#065F46', padding: "2px 8px", borderRadius: 4, border: `1px solid ${isDark ? '#047857' : '#A7F3D0'}` }}>
          v1.0.9 &bull; Sep 2026
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button
          onClick={() => setShowModal(true)}
          style={{
            border: "none",
            background: "transparent",
            color: isDark ? '#60A5FA' : '#33417A',
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 4
          }}
        >
          <Info size={14} /> Guide & Legal Notes
        </button>
      </div>

      {/* READERS GUIDE & LEGAL NOTES MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(34, 38, 43, 0.65)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: 20
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: isDark ? '#1F2937' : '#F8F5EE',
              border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
              color: isDark ? '#EDE9DE' : '#22262B',
              borderRadius: 8,
              maxWidth: 620,
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: 0,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HERO BANNER IMAGE HEADER */}
            <div style={{ position: "relative", width: "100%", height: 160, overflow: "hidden", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
              <img
                src="/hero-banner.jpg"
                alt="HireReady Dev Hero Banner"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  border: "none",
                  background: "rgba(34, 38, 43, 0.8)",
                  borderRadius: "50%",
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <X size={16} color="#EDE9DE" />
              </button>
            </div>

            <div style={{ padding: 24 }}>
              {/* AUTHOR CARD BADGE */}
              <div style={{ background: "#22262B", color: "#EDE9DE", padding: 14, borderRadius: 6, marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#33417A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15 }}>
                    GB
                  </div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 700 }}>ghostbyte</div>
                    <div style={{ fontSize: 11, opacity: 0.8 }}>Creator & Developer of HireReady Dev</div>
                  </div>
                </div>

                <a
                  href="https://github.com/ghostbyte1014"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#F8F5EE",
                    color: "#22262B",
                    padding: "5px 11px",
                    borderRadius: 4,
                    fontSize: 11.5,
                    fontWeight: 700,
                    textDecoration: "none"
                  }}
                >
                  <Github size={13} /> Follow @ghostbyte1014
                </a>
              </div>

              {/* PLAIN ENGLISH DATA BACKUP & RESTORE TOOLBAR */}
              <div style={{ background: isDark ? '#111827' : '#E3DECD', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, borderRadius: 6, padding: 14, marginBottom: 18 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 4, textTransform: "uppercase" }}>
                  💾 Save & Restore My Personal Notes
                </div>
                <p style={{ fontSize: 11.5, color: isDark ? '#D1D5DB' : '#5B5A52', marginBottom: 10, lineHeight: 1.45 }}>
                  Your personal study notes and bookmarked topics are saved directly on this device. Use the buttons below to save a backup file to your device or restore notes onto another device.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button
                    onClick={handleExportBackup}
                    title="Download a backup file of your personal notes"
                    style={{
                      padding: "7px 13px",
                      borderRadius: 5,
                      background: "#059669",
                      color: "#FFF",
                      border: "none",
                      fontSize: 11.5,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5
                    }}
                  >
                    <Download size={13} /> Save My Notes Backup
                  </button>

                  <label
                    title="Upload a previously saved notes backup file"
                    style={{
                      padding: "7px 13px",
                      borderRadius: 5,
                      background: isDark ? '#374151' : '#F8F5EE',
                      color: isDark ? '#EDE9DE' : '#22262B',
                      border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
                      fontSize: 11.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5
                    }}
                  >
                    <Upload size={13} /> Load Saved Notes File
                    <input type="file" accept=".json" onChange={handleImportBackup} style={{ display: "none" }} />
                  </label>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <BookOpen size={20} color={isDark ? '#60A5FA' : '#33417A'} />
                <h2 style={{ fontSize: 18, fontWeight: 700, color: isDark ? '#FFF' : '#22262B' }}>
                  Guide & Legal Notes
                </h2>
              </div>

              {/* SECTION 1: STUDY MODES GUIDE */}
              <div style={{ marginBottom: 18 }}>
                <h3 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 6 }}>
                  System Features & Operating Modes
                </h3>
                <ul style={{ paddingLeft: 18, lineHeight: 1.55, fontSize: 12.5, color: isDark ? '#D1D5DB' : '#3A3D34' }}>
                  <li style={{ marginBottom: 4 }}>
                    <strong>Overview Mode:</strong> High-level definitions, core concepts, and syntax reference.
                  </li>
                  <li style={{ marginBottom: 4 }}>
                    <strong>Specifications Mode:</strong> Architectural trade-offs, performance constraints, and production edge cases.
                  </li>
                  <li style={{ marginBottom: 4 }}>
                    <strong>Interview Practice Mode:</strong> Active recall testing with hidden sample answers, 60s practice timer, and readiness tracking.
                  </li>
                  <li style={{ marginBottom: 4 }}>
                    <strong>Personal Study Notes:</strong> Private study notebook attached to every topic & question (persisted locally).
                  </li>
                  <li style={{ marginBottom: 4 }}>
                    <strong>PDF Export:</strong> Click <em>"Save PDF"</em> in the header bar to preview and download any topic or Q&A study sheet as a clean PDF document.
                  </li>
                  <li>
                    <strong>External Documentation:</strong> Authoritative reference links (MDN, W3C, Official Specs) requiring an active network connection.
                  </li>
                </ul>
              </div>

              {/* SECTION 2: COPYRIGHT & ATTRIBUTION */}
              <div style={{ marginBottom: 18, background: isDark ? '#111827' : '#E3DECD', padding: 12, borderRadius: 5 }}>
                <h3 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700, color: isDark ? '#FFF' : '#22262B', marginBottom: 4 }}>
                  © Copyright & Attribution
                </h3>
                <p style={{ fontSize: 12, lineHeight: 1.5, color: isDark ? '#D1D5DB' : '#3A3D34' }}>
                  © 2026 ghostbyte. Free, open educational resource for technical learning and interview preparation.
                </p>
              </div>

              {/* SECTION 3: TRADEMARK DISCLAIMER */}
              <div style={{ marginBottom: 12 }}>
                <h3 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 700, color: isDark ? '#FCA5A5' : '#991B1B', marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}>
                  <Info size={13} /> Legal Disclaimer & Trademarks
                </h3>
                <p style={{ fontSize: 11.5, lineHeight: 1.45, color: isDark ? '#9CA3AF' : '#5B5A52' }}>
                  All product names, trademarks, and logos (Python, React, Docker, Kubernetes, AWS, PostgreSQL, MongoDB, etc.) belong to their respective owners and are referenced under fair use for educational purposes.
                </p>
              </div>

              {/* SECTION 4: RESTART APP TUTORIAL TRIGGER */}
              {onRestartTutorial && (
                <div style={{ marginBottom: 14, paddingTop: 12, borderTop: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <div style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#5B5A52' }}>
                    Need a refresher on all HireReady Dev features?
                  </div>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      onRestartTutorial();
                    }}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 5,
                      background: isDark ? '#065F46' : '#D1FAE5',
                      color: isDark ? '#A7F3D0' : '#065F46',
                      border: `1px solid ${isDark ? '#047857' : '#A7F3D0'}`,
                      fontSize: 11.5,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4
                    }}
                  >
                    <BookOpen size={13} /> Restart App Tour
                  </button>
                </div>
              )}

              <button
                onClick={() => setShowModal(false)}
                style={{
                  width: "100%",
                  padding: "9px",
                  background: isDark ? '#374151' : '#22262B',
                  color: "#F8F5EE",
                  border: "none",
                  borderRadius: 5,
                  fontWeight: 600,
                  fontSize: 12.5,
                  cursor: "pointer",
                  marginTop: 4
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
