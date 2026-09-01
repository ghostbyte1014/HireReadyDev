import React, { useState } from 'react';
import { ExternalLink, WifiOff, X, Wifi, Edit3, Bookmark, Play, Check } from 'lucide-react';

export function FieldGuideDetail({
  selectedGuideEntry,
  depthLevel,
  setDepthLevel,
  bookmarks,
  toggleBookmark,
  userNotes,
  handleSaveUserNote,
  theme
}) {
  const [offlineModalUrl, setOfflineModalUrl] = useState(null);
  const [activeCodePreview, setActiveCodePreview] = useState(null);
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  const isDark = theme === 'dark';

  if (!selectedGuideEntry) return null;

  const currentNote = userNotes[selectedGuideEntry.term] || '';
  const isBookmarked = bookmarks?.includes(selectedGuideEntry.term);

  const handleLinkClick = (e, url) => {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      e.preventDefault();
      setOfflineModalUrl(url);
    }
  };

  const handleNoteChange = (e) => {
    handleSaveUserNote(selectedGuideEntry.term, e.target.value);
    setNoteSavedToast(true);
    setTimeout(() => setNoteSavedToast(false), 1500);
  };

  const getIframeSrcDoc = (code) => {
    if (!code) return '';
    const safeCode = code.replace(/console\.log\((.*?)\)/g, 'document.body.innerHTML += "<p style=\'font-family:monospace;color:#10B981;\'>" + ($1) + "</p>";');
    return `<!DOCTYPE html><html><body style="background:#000;color:#FFF;margin:8px;">
<script>
try {
  ${safeCode}
} catch(e) {
  document.body.innerHTML += "<p style='color:#F87171;font-family:monospace;'>Error: " + e.message + "</p>";
}
</script>
</body></html>`;
  };

  return (
    <div style={{ maxWidth: 720 }}>
      {/* Header Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            className="fg-sans"
            style={{
              fontSize: 11.5,
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: 3,
              color: "#F8F5EE",
              background: selectedGuideEntry.color
            }}
          >
            {selectedGuideEntry.domain}
          </div>

          <button
            onClick={() => toggleBookmark(selectedGuideEntry.term)}
            style={{
              border: `1px solid ${isBookmarked ? '#D97706' : (isDark ? '#4B5563' : '#CFC7B0')}`,
              background: isBookmarked ? (isDark ? '#78350F' : '#FEF3C7') : 'transparent',
              color: isBookmarked ? '#D97706' : (isDark ? '#9CA3AF' : '#5B5A52'),
              padding: "3px 8px",
              borderRadius: 4,
              fontSize: 11.5,
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <Bookmark size={12} fill={isBookmarked ? "#D97706" : "none"} />
            {isBookmarked ? "Saved to Favorites" : "Save Bookmark"}
          </button>
        </div>

        {/* Depth Toggle (Starter vs Deeper) */}
        <div style={{ display: "flex", background: isDark ? "#1F2937" : "#E3DECD", borderRadius: 4, padding: 2 }} className="fg-sans">
          <button
            onClick={() => setDepthLevel("starter")}
            style={{
              border: "none",
              padding: "4px 10px",
              fontSize: 11.5,
              borderRadius: 3,
              cursor: "pointer",
              background: depthLevel === "starter" ? (isDark ? "#3B82F6" : "#22262B") : "transparent",
              color: depthLevel === "starter" ? "#EDE9DE" : (isDark ? "#9CA3AF" : "#5B5A52"),
              fontWeight: 600
            }}
          >
            🌱 Starter View
          </button>
          <button
            onClick={() => setDepthLevel("deeper")}
            style={{
              border: "none",
              padding: "4px 10px",
              fontSize: 11.5,
              borderRadius: 3,
              cursor: "pointer",
              background: depthLevel === "deeper" ? (isDark ? "#3B82F6" : "#22262B") : "transparent",
              color: depthLevel === "deeper" ? "#EDE9DE" : (isDark ? "#9CA3AF" : "#5B5A52"),
              fontWeight: 600
            }}
          >
            🔬 Deeper View
          </button>
        </div>
      </div>

      <h1 style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.2, marginBottom: 10, color: isDark ? '#FFF' : '#22262B' }}>
        {selectedGuideEntry.term}
      </h1>

      <p
        className="fg-sans"
        style={{
          fontSize: 14.5,
          fontStyle: "italic",
          lineHeight: 1.55,
          color: isDark ? '#9CA3AF' : '#5B5A52',
          marginBottom: 20
        }}
      >
        "{selectedGuideEntry.meaning}"
      </p>

      {/* STARTER VS DEEPER DYNAMIC CONTENT CALLOUT */}
      {depthLevel === "starter" && selectedGuideEntry.starter && (
        <div
          className="fg-sans"
          style={{
            background: isDark ? '#1F2937' : '#F8F5EE',
            borderLeft: `4px solid ${selectedGuideEntry.color}`,
            borderRadius: "0 6px 6px 0",
            padding: "14px 18px",
            marginBottom: 24
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", marginBottom: 4 }}>
            Quick Summary (30-Second Skim)
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, color: isDark ? '#EDE9DE' : '#22262B', fontWeight: 500, marginBottom: 8 }}>
            {selectedGuideEntry.starter.summary}
          </div>
          {selectedGuideEntry.starter.quickExample && (
            <div className="fg-mono" style={{ background: "#22262B", color: "#E7E2D3", padding: "6px 10px", borderRadius: 4, fontSize: 12 }}>
              {selectedGuideEntry.starter.quickExample}
            </div>
          )}
        </div>
      )}

      {depthLevel === "deeper" && selectedGuideEntry.deeper && (
        <div
          className="fg-sans"
          style={{
            background: isDark ? '#1F2937' : '#F1EDE0',
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            borderRadius: 6,
            padding: "14px 18px",
            marginBottom: 24
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", marginBottom: 6 }}>
            Architectural Tradeoffs & Edge Cases
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: isDark ? '#D1D5DB' : '#3A3D34', marginBottom: 6 }}>
            <strong>Tradeoffs:</strong> {selectedGuideEntry.deeper.tradeoffs}
          </div>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#F87171" }}>
            <strong>Gotchas / Edge Cases:</strong> {selectedGuideEntry.deeper.edgeCases}
          </div>
        </div>
      )}

      {/* Purpose Section */}
      <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>
        Purpose & Core Use Case
      </div>
      <p
        style={{
          fontSize: 16.5,
          lineHeight: 1.6,
          color: isDark ? '#D1D5DB' : '#3A3D34',
          marginBottom: 24,
          borderLeft: `2px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
          paddingLeft: 16
        }}
      >
        {selectedGuideEntry.purpose}
      </p>

      {/* Functions / How It Works */}
      {selectedGuideEntry.functions && (
        <>
          <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
            How It Works / Core Mechanisms
          </div>
          <ul style={{ marginBottom: 24, paddingLeft: 0, listStyle: "none" }}>
            {selectedGuideEntry.functions.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, marginBottom: 8, color: isDark ? '#D1D5DB' : '#22262B' }}>
                <span style={{ color: selectedGuideEntry.color, flexShrink: 0 }}>—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Learning Objectives */}
      {selectedGuideEntry.objectives && (
        <>
          <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
            Learning Objectives
          </div>
          <ul style={{ marginBottom: 24, paddingLeft: 0, listStyle: "none" }}>
            {selectedGuideEntry.objectives.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, marginBottom: 8, color: isDark ? '#D1D5DB' : '#22262B' }}>
                <span style={{ color: selectedGuideEntry.color, flexShrink: 0 }}>✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Key Takeaways */}
      {selectedGuideEntry.keyPoints && (
        <>
          <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
            Key Points to Remember
          </div>
          <div style={{ marginBottom: 26, display: "flex", flexDirection: "column", gap: 8 }}>
            {selectedGuideEntry.keyPoints.map((p, i) => (
              <div
                key={i}
                className="fg-sans"
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  background: isDark ? '#1F2937' : '#F8F5EE',
                  border: `1px solid ${isDark ? '#374151' : '#E3DECD'}`,
                  color: isDark ? '#D1D5DB' : '#22262B',
                  borderRadius: 4,
                  padding: "8px 12px"
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Code / Practical Examples with Interactive Code Runner */}
      {selectedGuideEntry.examples && selectedGuideEntry.examples.length > 0 && (
        <div style={{ marginBottom: 26 }}>
          <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
            Practical Examples
          </div>
          {selectedGuideEntry.examples.map((ex, i) =>
            ex.isCode ? (
              <div key={i} style={{ marginBottom: 12, position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1E2227", padding: "6px 12px", borderTopLeftRadius: 6, borderTopRightRadius: 6, borderBottom: "1px solid #333" }}>
                  <span style={{ fontSize: 10.5, color: "#9CA3AF", fontFamily: "monospace" }}>JavaScript Example</span>
                  <button
                    onClick={() => setActiveCodePreview(ex.text)}
                    style={{
                      padding: "2px 8px",
                      borderRadius: 3,
                      background: "#059669",
                      color: "#FFF",
                      border: "none",
                      fontSize: 10.5,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 4
                    }}
                  >
                    <Play size={10} /> ▶ Run Code
                  </button>
                </div>
                <pre
                  className="fg-mono"
                  style={{
                    background: "#22262B",
                    color: "#E7E2D3",
                    fontSize: 12.5,
                    lineHeight: 1.55,
                    padding: "14px 16px",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    overflowX: "auto",
                    margin: 0
                  }}
                >
                  {ex.text}
                </pre>
              </div>
            ) : (
              <p
                key={i}
                className="fg-sans"
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: isDark ? '#D1D5DB' : '#3A3D34',
                  marginBottom: 12,
                  background: isDark ? '#1F2937' : '#F1EDE0',
                  borderRadius: 6,
                  padding: "10px 14px"
                }}
              >
                {ex.text}
              </p>
            )
          )}
        </div>
      )}

      {/* PERSONAL STUDY NOTES SECTION */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
            <Edit3 size={14} color="#33417A" /> My Personal Study Notes (Saved to Device)
          </div>
          {noteSavedToast && (
            <span style={{ fontSize: 10.5, color: "#059669", fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}>
              <Check size={12} /> Auto-saved
            </span>
          )}
        </div>
        <textarea
          value={currentNote}
          onChange={handleNoteChange}
          placeholder="Write your personal study reminders, code notes, or interview prep thoughts here..."
          rows={3}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 6,
            border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
            background: isDark ? '#1F2937' : '#F8F5EE',
            color: isDark ? '#EDE9DE' : '#22262B',
            fontSize: 13,
            fontFamily: "inherit",
            resize: "vertical",
            outline: "none"
          }}
        />
      </div>

      {/* Authoritative Sources & External Links */}
      {selectedGuideEntry.sources && selectedGuideEntry.sources.length > 0 && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700 }}>
              Authoritative Sources & Documentation
            </div>
            <span className="fg-sans" style={{ fontSize: 10.5, color: isDark ? '#9CA3AF' : '#8A8474', fontStyle: "italic" }}>
              🌐 External links require Wi-Fi / Data
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {selectedGuideEntry.sources.map((l, i) => (
              <a
                key={i}
                href={l.url}
                onClick={(e) => handleLinkClick(e, l.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="fg-sans fg-link"
                style={{ fontSize: 13.5, display: "inline-flex", alignItems: "center", gap: 6, width: "fit-content" }}
              >
                <ExternalLink size={12} />
                <span>{l.label}</span>
                <span style={{ fontSize: 10, background: isDark ? '#374151' : '#CFC7B0', padding: "1px 5px", borderRadius: 3, textTransform: "uppercase" }}>{l.type}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* INTERACTIVE LIVE CODE RUNNER MODAL */}
      {activeCodePreview && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: 20
          }}
          onClick={() => setActiveCodePreview(null)}
        >
          <div
            className="fg-sans"
            style={{
              background: "#1E2227",
              color: "#EDE9DE",
              borderRadius: 8,
              maxWidth: 640,
              width: "100%",
              padding: 20,
              boxShadow: "0 14px 32px rgba(0,0,0,0.4)",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 6 }}>
                <Play size={16} color="#10B981" /> Interactive Code Runner
              </div>
              <button onClick={() => setActiveCodePreview(null)} style={{ background: "transparent", border: "none", color: "#FFF", cursor: "pointer" }}>
                <X size={18} />
              </button>
            </div>

            <pre className="fg-mono" style={{ background: "#14171A", padding: 12, borderRadius: 6, fontSize: 12, color: "#E7E2D3", overflowX: "auto", maxHeight: 180, marginBottom: 14 }}>
              {activeCodePreview}
            </pre>

            <div style={{ fontSize: 12, fontWeight: 700, color: "#10B981", marginBottom: 6 }}>
              Preview Output:
            </div>
            <iframe
              title="Code Preview Sandbox"
              srcDoc={getIframeSrcDoc(activeCodePreview)}
              style={{ width: "100%", height: 140, background: "#000", border: "1px solid #333", borderRadius: 6 }}
            />
          </div>
        </div>
      )}

      {/* OFFLINE MODAL */}
      {offlineModalUrl && (
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
          onClick={() => setOfflineModalUrl(null)}
        >
          <div
            className="fg-sans"
            style={{
              background: isDark ? '#1F2937' : '#F8F5EE',
              border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
              color: isDark ? '#EDE9DE' : '#22262B',
              borderRadius: 8,
              maxWidth: 480,
              width: "100%",
              padding: 24,
              boxShadow: "0 12px 28px -6px rgba(0,0,0,0.25)",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOfflineModalUrl(null)}
              style={{ position: "absolute", top: 14, right: 14, border: "none", background: "transparent", cursor: "pointer" }}
            >
              <X size={18} color="#5B5A52" />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ background: "#FEF2F2", padding: 10, borderRadius: "50%", border: "1px solid #FCA5A5" }}>
                <WifiOff size={24} color="#DC2626" />
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#991B1B" }}>
                  Wi-Fi Connection Required
                </h3>
                <span style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', fontWeight: 600 }}>
                  Offline Mode Active
                </span>
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.5, color: isDark ? '#D1D5DB' : '#3A3D34', marginBottom: 14 }}>
              You are currently offline. All <strong>HireReady Dev</strong> topics, interview Q&As, practice timers, and notes are saved locally and accessible 100% offline!
            </p>

            <div style={{ background: isDark ? '#374151' : '#E3DECD', padding: 12, borderRadius: 6, fontSize: 12, color: isDark ? '#EDE9DE' : '#22262B', marginBottom: 16, borderLeft: "3px solid #33417A" }}>
              <strong>External Resource:</strong> <span className="fg-mono" style={{ fontSize: 11.5, wordBreak: "break-all" }}>{offlineModalUrl}</span>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => {
                  if (navigator.onLine) {
                    window.open(offlineModalUrl, '_blank');
                    setOfflineModalUrl(null);
                  } else {
                    alert("Still offline. Please connect to Wi-Fi first!");
                  }
                }}
                style={{
                  flex: 1,
                  padding: "9px",
                  background: "#059669",
                  color: "#FFF",
                  border: "none",
                  borderRadius: 5,
                  fontWeight: 600,
                  fontSize: 12.5,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6
                }}
              >
                <Wifi size={14} /> Retry / Open Link
              </button>

              <button
                onClick={() => setOfflineModalUrl(null)}
                style={{
                  padding: "9px 14px",
                  background: "#22262B",
                  color: "#F8F5EE",
                  border: "none",
                  borderRadius: 5,
                  fontWeight: 600,
                  fontSize: 12.5,
                  cursor: "pointer"
                }}
              >
                Study Offline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
