import React, { useState } from 'react';
import { ExternalLink, WifiOff, X, Wifi, Edit3, Bookmark, Play, Check, Code, Terminal } from 'lucide-react';

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
  const [activeCodeIndex, setActiveCodeIndex] = useState(null);
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

  const detectLanguage = (codeText) => {
    if (!codeText) return 'Code Spec';
    const code = codeText.trim();
    if (code.startsWith('apiVersion:') || code.includes('kind:') || code.includes('metadata:')) return 'YAML Spec';
    if (code.includes('class ') || code.includes('def ') || code.includes('import pandas') || code.includes('import numpy') || code.includes('elif ')) return 'Python';
    if (code.startsWith('SELECT') || code.startsWith('INSERT') || code.startsWith('CREATE TABLE') || code.startsWith('UPDATE ') || code.includes('JOIN ')) return 'SQL Query';
    if (code.startsWith('FROM ') || code.startsWith('RUN ') || code.startsWith('docker ') || code.includes('docker-compose')) return 'Docker Config';
    if (code.startsWith('git ') || code.startsWith('kubectl ') || code.startsWith('curl ') || code.startsWith('npm ') || code.startsWith('npx ')) return 'Shell Command';
    if (code.includes('<html') || code.includes('<div') || code.includes('<!DOCTYPE')) return 'HTML Document';
    if (code.includes(' {') && (code.includes('color:') || code.includes('margin:') || code.includes('background:'))) return 'CSS Styles';
    if (
      code.includes('console.log') ||
      code.includes('let ') ||
      code.includes('const ') ||
      code.includes('var ') ||
      code.includes('function') ||
      code.includes('=>') ||
      code.includes('async ') ||
      code.includes('fetch(') ||
      code.includes('JSON.') ||
      code.includes('document.') ||
      code.includes('window.') ||
      code.includes('Math.') ||
      code.includes('for (') ||
      code.includes('if (')
    ) {
      return 'JavaScript';
    }
    return 'Code Spec';
  };

  const isExecutableCode = (codeText) => {
    const lang = detectLanguage(codeText);
    if (lang !== 'JavaScript') return false;
    const code = codeText.trim();
    // Do not attempt to eval YAML specs, Python classes, or colon configs
    if (code.startsWith('apiVersion:') || code.includes('kind:') || code.includes('class ')) return false;
    return true;
  };

  const getIframeSrcDoc = (codeText) => {
    if (!codeText) return '';
    const lang = detectLanguage(codeText);

    let code = codeText;
    if (lang === 'Python') {
      // Transpile basic Python print & control flow syntax for browser JS execution
      code = code
        .replace(/print\((.*?)\)/g, 'console.log($1)')
        .replace(/if\s+(.*?):/g, 'if ($1) {')
        .replace(/elif\s+(.*?):/g, '} else if ($1) {')
        .replace(/else:/g, '} else {')
        .replace(/True/g, 'true')
        .replace(/False/g, 'false');

      const openCount = (code.match(/\{/g) || []).length;
      const closeCount = (code.match(/\}/g) || []).length;
      for (let i = 0; i < openCount - closeCount; i++) {
        code += '\n}';
      }
    }

    return `<!DOCTYPE html><html><head><style>
      body { background: #0F172A; color: #F8FAFC; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; margin: 0; padding: 10px; line-height: 1.5; }
      .log { color: #10B981; margin: 3px 0; white-space: pre-wrap; word-break: break-all; }
      .err { color: #F87171; margin: 3px 0; white-space: pre-wrap; word-break: break-all; }
      .info { color: #64748B; font-style: italic; margin-top: 4px; }
    </style></head><body>
<div id="output"></div>
<script>
(function() {
  var outputEl = document.getElementById('output');
  var logged = false;
  
  function appendLog(msg, isErr, isInfo) {
    logged = true;
    var p = document.createElement('div');
    p.className = isErr ? 'err' : (isInfo ? 'info' : 'log');
    p.textContent = (isErr ? 'Error: ' : (isInfo ? '' : '> ')) + msg;
    outputEl.appendChild(p);
  }

  var customLog = function() {
    var args = Array.prototype.slice.call(arguments).map(function(arg) {
      if (typeof arg === 'object') {
        try { return JSON.stringify(arg, null, 2); } catch(e) { return String(arg); }
      }
      return String(arg);
    }).join(' ');
    appendLog(args, false, false);
  };

  console.log = customLog;
  console.info = customLog;
  console.error = function(msg) {
    appendLog(String(msg), true, false);
  };

  var userScript = ${JSON.stringify(code)};
  try {
    var res = eval(userScript);
    if (!logged) {
      if (res !== undefined && typeof res !== 'function') {
        appendLog(typeof res === 'object' ? JSON.stringify(res, null, 2) : String(res), false, false);
      } else {
        appendLog('✓ Script executed cleanly with 0 errors.', false, true);
      }
    }
  } catch(err) {
    appendLog(err.message, true, false);
  }
})();
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
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <Bookmark size={13} fill={isBookmarked ? '#D97706' : 'none'} />
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>

        {/* Starter vs Deeper Depth Toggle */}
        <div style={{ display: "flex", background: isDark ? '#1F2937' : '#F1EDE0', padding: 2, borderRadius: 4, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}` }}>
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
            Overview
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
            Specifications
          </button>
        </div>
      </div>

      <h1 style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.2, marginBottom: 10, color: isDark ? '#FFF' : '#22262B' }}>
        {selectedGuideEntry.term}
      </h1>

      {/* Meaning Banner */}
      <div
        className="fg-sans"
        style={{
          fontSize: 14.5,
          lineHeight: 1.5,
          fontStyle: "italic",
          background: isDark ? '#1F2937' : '#F1EDE0',
          borderLeft: `4px solid ${selectedGuideEntry.color}`,
          padding: "10px 14px",
          borderRadius: "0 4px 4px 0",
          marginBottom: 20,
          color: isDark ? '#D1D5DB' : '#3A3D34'
        }}
      >
        "{selectedGuideEntry.meaning}"
      </div>

      {/* Purpose Card */}
      <div
        style={{
          background: isDark ? '#111827' : '#F8F5EE',
          border: `1px solid ${isDark ? '#374151' : '#E3DECD'}`,
          borderRadius: 6,
          padding: 16,
          marginBottom: 24
        }}
      >
        <div className="fg-sans" style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>
          Core Objective & Purpose
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: isDark ? '#EDE9DE' : '#22262B', fontWeight: 500 }}>
          {selectedGuideEntry.purpose}
        </div>
      </div>

      {/* DYNAMIC OVERVIEW / STARTER VIEW CONTENT */}
      {depthLevel === 'starter' && (
        <div style={{ marginBottom: 24 }}>
          {selectedGuideEntry.starter?.summary && (
            <>
              <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
                Executive Summary
              </div>
              <p className="fg-sans" style={{ fontSize: 14, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#3A3D34', marginBottom: 16 }}>
                {selectedGuideEntry.starter.summary}
              </p>
            </>
          )}

          {/* Quick Syntax */}
          {selectedGuideEntry.starter?.quickSyntax && (
            <div style={{ marginBottom: 18 }}>
              <div className="fg-sans" style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#8A8474', fontWeight: 700, marginBottom: 6 }}>
                Quick Syntax / Command Pattern:
              </div>
              <pre
                className="fg-mono"
                style={{
                  background: "#22262B",
                  color: "#A7F3D0",
                  padding: "10px 14px",
                  borderRadius: 4,
                  fontSize: 12.5,
                  overflowX: "auto",
                  margin: 0,
                  border: "1px solid #334155"
                }}
              >
                {selectedGuideEntry.starter.quickSyntax}
              </pre>
            </div>
          )}

          {/* Functions List */}
          {selectedGuideEntry.functions && selectedGuideEntry.functions.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div className="fg-sans" style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#8A8474', fontWeight: 700, marginBottom: 6 }}>
                Primary Functions:
              </div>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, lineHeight: 1.55, color: isDark ? '#D1D5DB' : '#3A3D34' }}>
                {selectedGuideEntry.functions.map((fn, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>{fn}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Objectives List */}
          {selectedGuideEntry.objectives && selectedGuideEntry.objectives.length > 0 && (
            <div>
              <div className="fg-sans" style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#8A8474', fontWeight: 700, marginBottom: 6 }}>
                Engineering Objectives:
              </div>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, lineHeight: 1.55, color: isDark ? '#D1D5DB' : '#3A3D34' }}>
                {selectedGuideEntry.objectives.map((obj, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>{obj}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* DYNAMIC SPECIFICATIONS / DEEPER VIEW CONTENT */}
      {depthLevel === 'deeper' && (
        <div style={{ marginBottom: 24 }}>
          {selectedGuideEntry.deeper ? (
            <>
              <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#60A5FA' : '#33417A', textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
                Architectural Deep Dive & Trade-offs
              </div>
              {selectedGuideEntry.deeper.architecture && (
                <p className="fg-sans" style={{ fontSize: 14, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#3A3D34', marginBottom: 16 }}>
                  {selectedGuideEntry.deeper.architecture}
                </p>
              )}

              {/* Gotchas & Edge Cases */}
              {(() => {
                const gotchasList = Array.isArray(selectedGuideEntry.deeper.gotchas)
                  ? selectedGuideEntry.deeper.gotchas
                  : typeof selectedGuideEntry.deeper.gotchas === 'string'
                  ? [selectedGuideEntry.deeper.gotchas]
                  : [];
                if (gotchasList.length === 0) return null;
                return (
                  <div style={{ background: isDark ? '#1F2937' : '#FEF2F2', borderLeft: "4px solid #EF4444", padding: 14, borderRadius: "0 4px 4px 0", marginBottom: 18 }}>
                    <div className="fg-sans" style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", textTransform: "uppercase", marginBottom: 6 }}>
                      Production Gotchas & Failure Modes:
                    </div>
                    <ul style={{ paddingLeft: 16, margin: 0, fontSize: 13, lineHeight: 1.5, color: isDark ? '#FCA5A5' : '#991B1B' }}>
                      {gotchasList.map((g, idx) => (
                        <li key={idx} style={{ marginBottom: 4 }}>{g}</li>
                      ))}
                    </ul>
                  </div>
                );
              })()}

              {/* Trade-offs & Comparisons */}
              {(() => {
                const tradeoffsList = Array.isArray(selectedGuideEntry.deeper.tradeoffs)
                  ? selectedGuideEntry.deeper.tradeoffs
                  : typeof selectedGuideEntry.deeper.tradeoffs === 'string'
                  ? [selectedGuideEntry.deeper.tradeoffs]
                  : [];
                if (tradeoffsList.length === 0) return null;
                return (
                  <div style={{ background: isDark ? '#111827' : '#EFF6FF', borderLeft: "4px solid #3B82F6", padding: 14, borderRadius: "0 4px 4px 0", marginBottom: 18 }}>
                    <div className="fg-sans" style={{ fontSize: 11, fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", marginBottom: 6 }}>
                      Technical Trade-offs:
                    </div>
                    <ul style={{ paddingLeft: 16, margin: 0, fontSize: 13, lineHeight: 1.5, color: isDark ? '#93C5FD' : '#1E40AF' }}>
                      {tradeoffsList.map((t, idx) => (
                        <li key={idx} style={{ marginBottom: 4 }}>{t}</li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </>
          ) : (
            <div style={{ marginBottom: 18, background: isDark ? '#1F2937' : '#F8F5EE', padding: 14, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#E3DECD'}` }}>
              <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#60A5FA' : '#33417A', textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>
                Technical Overview & Specifications
              </div>
              <p className="fg-sans" style={{ fontSize: 13.5, lineHeight: 1.6, color: isDark ? '#D1D5DB' : '#3A3D34', margin: 0 }}>
                {selectedGuideEntry.starter?.summary || selectedGuideEntry.purpose}
              </p>
            </div>
          )}

          {/* Quick Syntax in Specifications */}
          {selectedGuideEntry.starter?.quickSyntax && (
            <div style={{ marginBottom: 18 }}>
              <div className="fg-sans" style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#8A8474', fontWeight: 700, marginBottom: 6 }}>
                Quick Syntax / Command Pattern:
              </div>
              <pre
                className="fg-mono"
                style={{
                  background: "#22262B",
                  color: "#A7F3D0",
                  padding: "10px 14px",
                  borderRadius: 4,
                  fontSize: 12.5,
                  overflowX: "auto",
                  margin: 0,
                  border: "1px solid #334155"
                }}
              >
                {selectedGuideEntry.starter.quickSyntax}
              </pre>
            </div>
          )}

          {/* Functions List in Specifications */}
          {selectedGuideEntry.functions && selectedGuideEntry.functions.length > 0 && (
            <div style={{ marginBottom: 18 }}>
              <div className="fg-sans" style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#8A8474', fontWeight: 700, marginBottom: 6 }}>
                Primary Functions:
              </div>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, lineHeight: 1.55, color: isDark ? '#D1D5DB' : '#3A3D34' }}>
                {selectedGuideEntry.functions.map((fn, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>{fn}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Objectives List in Specifications */}
          {selectedGuideEntry.objectives && selectedGuideEntry.objectives.length > 0 && (
            <div>
              <div className="fg-sans" style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#8A8474', fontWeight: 700, marginBottom: 6 }}>
                Engineering Objectives:
              </div>
              <ul style={{ paddingLeft: 18, margin: 0, fontSize: 13.5, lineHeight: 1.55, color: isDark ? '#D1D5DB' : '#3A3D34' }}>
                {selectedGuideEntry.objectives.map((obj, idx) => (
                  <li key={idx} style={{ marginBottom: 4 }}>{obj}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
            Practical Examples & Code Snippets
          </div>
          {selectedGuideEntry.examples.map((ex, i) => {
            const lang = detectLanguage(ex.text);
            const executable = isExecutableCode(ex.text);

            return ex.isCode ? (
              <div key={i} style={{ marginBottom: 14, position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#1E2227", padding: "6px 12px", borderTopLeftRadius: 6, borderTopRightRadius: 6, borderBottom: "1px solid #333" }}>
                  <span style={{ fontSize: 10.5, color: "#9CA3AF", fontFamily: "monospace", display: "flex", alignItems: "center", gap: 4 }}>
                    <Code size={12} color="#60A5FA" /> {lang} Example
                  </span>
                  
                  {executable ? (
                    <button
                      onClick={() => setActiveCodeIndex(activeCodeIndex === i ? null : i)}
                      style={{
                        padding: "3px 8px",
                        borderRadius: 3,
                        background: activeCodeIndex === i ? "#374151" : "#059669",
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
                      <Play size={10} /> {activeCodeIndex === i ? 'Hide Output' : 'Run Script'}
                    </button>
                  ) : (
                    <span style={{ fontSize: 10, color: "#64748B", fontWeight: 600, background: "#111827", padding: "2px 6px", borderRadius: 3 }}>
                      Reference Code
                    </span>
                  )}
                </div>

                <pre
                  className="fg-mono"
                  style={{
                    background: "#22262B",
                    color: "#E7E2D3",
                    fontSize: 12.5,
                    lineHeight: 1.55,
                    padding: "14px 16px",
                    borderBottomLeftRadius: activeCodeIndex === i ? 0 : 6,
                    borderBottomRightRadius: activeCodeIndex === i ? 0 : 6,
                    overflowX: "auto",
                    margin: 0
                  }}
                >
                  {ex.text}
                </pre>

                {/* LIVE INTERACTIVE CONSOLE OUTPUT WINDOW */}
                {executable && activeCodeIndex === i && (
                  <div style={{ background: "#0F172A", borderBottomLeftRadius: 6, borderBottomRightRadius: 6, border: "1px solid #334155", borderTop: "none", overflow: "hidden" }}>
                    <div style={{ background: "#1E293B", padding: "4px 12px", fontSize: 10.5, fontWeight: 700, color: "#94A3B8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Terminal size={12} color="#10B981" /> Terminal Console Output ({lang})
                      </span>
                      <button onClick={() => setActiveCodeIndex(null)} style={{ background: "transparent", border: "none", color: "#94A3B8", cursor: "pointer", fontSize: 10.5 }}>✕ Close</button>
                    </div>
                    <iframe
                      title="Live Code Execution Console"
                      srcDoc={getIframeSrcDoc(ex.text)}
                      style={{ width: "100%", height: 115, border: "none", display: "block" }}
                    />
                  </div>
                )}
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
            );
          })}
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
              External documentation links require an active network connection
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
              maxWidth: 420,
              width: "100%",
              padding: 20,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <WifiOff size={22} color="#EF4444" />
              <div style={{ fontWeight: 700, fontSize: 15, color: isDark ? '#FFF' : '#22262B' }}>
                Offline Mode Active
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.5, color: isDark ? '#9CA3AF' : '#5B5A52', marginBottom: 16 }}>
              You are currently offline. External documentation links require an active internet connection.
            </p>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setOfflineModalUrl(null)}
                style={{
                  padding: "6px 14px",
                  background: isDark ? '#374151' : '#22262B',
                  color: "#F8F5EE",
                  border: "none",
                  borderRadius: 4,
                  fontWeight: 600,
                  fontSize: 12,
                  cursor: "pointer"
                }}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
