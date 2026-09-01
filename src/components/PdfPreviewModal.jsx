import React from 'react';
import { Download, X, FileText } from 'lucide-react';

export function PdfPreviewModal({
  selectedGuideEntry,
  selectedQAItem,
  activeMode,
  depthLevel,
  userNotes,
  onClose,
  onDownloadPdf,
  theme
}) {
  const isDark = theme === 'dark';
  const topicTitle = activeMode === 'guide' ? selectedGuideEntry?.term : selectedQAItem?.question;
  const noteContent = activeMode === 'guide' ? userNotes[selectedGuideEntry?.term] : userNotes[selectedQAItem?.id];

  return (
    <div
      className="fg-sans fg-no-print"
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
      onClick={onClose}
    >
      <div
        style={{
          background: isDark ? '#1F2937' : '#F8F5EE',
          border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
          color: isDark ? '#EDE9DE' : '#22262B',
          borderRadius: 10,
          maxWidth: 720,
          width: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          overflow: "hidden"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER TOOLBAR */}
        <div
          style={{
            padding: "14px 20px",
            background: isDark ? '#111827' : '#22262B',
            color: "#EDE9DE",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1px solid ${isDark ? '#374151' : '#33417A'}`
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FileText size={18} color="#60A5FA" />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>
                PDF Document Preview
              </div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                HireReady Dev &bull; Created by <strong>ghostbyte</strong>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={onDownloadPdf}
              style={{
                padding: "7px 14px",
                borderRadius: 5,
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
              <Download size={14} /> Download PDF File
            </button>
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "none",
                color: "#9CA3AF",
                cursor: "pointer",
                padding: 4
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* DOCUMENT PREVIEW CANVAS (Target for html2pdf generation) */}
        <div style={{ flex: 1, overflowY: "auto", padding: 24, background: isDark ? '#14171A' : '#FAF8F5' }}>
          <div
            id="pdf-preview-content"
            style={{
              background: "#FFF",
              color: "#22262B",
              padding: 32,
              borderRadius: 6,
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
              border: "1px solid #E5E7EB",
              fontSize: 13.5,
              lineHeight: 1.55
            }}
          >
            {/* BRANDED PDF DOCUMENT HEADER */}
            <div
              style={{
                borderBottom: "2px solid #33417A",
                paddingBottom: 12,
                marginBottom: 20,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#22262B", letterSpacing: "-0.2px" }}>
                  HireReady Dev
                </div>
                <div style={{ fontSize: 11, color: "#33417A", fontWeight: 700 }}>
                  The Developer's IT Compendium & Interview Masterclass
                </div>
              </div>
              <div style={{ textAlign: "right", fontSize: 11, color: "#4B5563" }}>
                <div>Author: <strong>ghostbyte</strong></div>
              </div>
            </div>

            {/* FIELD GUIDE ENTRY PREVIEW */}
            {activeMode === 'guide' && selectedGuideEntry && (
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: selectedGuideEntry.color, textTransform: "uppercase", marginBottom: 4 }}>
                  {selectedGuideEntry.domain} &bull; {depthLevel === 'starter' ? '🌱 Starter View' : '🔬 Deeper View'}
                </div>
                <h1 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 8, lineHeight: 1.2 }}>
                  {selectedGuideEntry.term}
                </h1>
                <p style={{ fontSize: 13, fontStyle: "italic", color: "#4B5563", marginBottom: 16 }}>
                  "{selectedGuideEntry.meaning}"
                </p>

                <div style={{ background: "#F9FAFB", borderLeft: `4px solid ${selectedGuideEntry.color}`, padding: "10px 14px", marginBottom: 16, borderRadius: "0 4px 4px 0" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", marginBottom: 2 }}>Core Purpose</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#1F2937" }}>{selectedGuideEntry.purpose}</div>
                </div>

                {selectedGuideEntry.starter && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", textTransform: "uppercase", marginBottom: 4 }}>Quick Summary</div>
                    <p style={{ fontSize: 12.5, color: "#1F2937" }}>{selectedGuideEntry.starter.summary}</p>
                  </div>
                )}

                {selectedGuideEntry.keyPoints && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", textTransform: "uppercase", marginBottom: 6 }}>Key Takeaways</div>
                    {selectedGuideEntry.keyPoints.map((pt, i) => (
                      <div key={i} style={{ fontSize: 12, background: "#F3F4F6", padding: "6px 10px", borderRadius: 4, marginBottom: 4, color: "#1F2937" }}>
                        &bull; {pt}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* INTERVIEW Q&A ENTRY PREVIEW */}
            {activeMode === 'interview' && selectedQAItem && (
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: "#33417A", textTransform: "uppercase", marginBottom: 4 }}>
                  {selectedQAItem.category} &bull; {selectedQAItem.subcategory}
                </div>
                <h1 style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 12, lineHeight: 1.25 }}>
                  Q: {selectedQAItem.question}
                </h1>

                <div style={{ background: "#EFF6FF", borderLeft: "4px solid #3B82F6", padding: "10px 14px", marginBottom: 16, borderRadius: "0 4px 4px 0" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#1D4ED8", textTransform: "uppercase", marginBottom: 2 }}>What HR / Interviewer Evaluates</div>
                  <div style={{ fontSize: 13, color: "#1E40AF" }}>{selectedQAItem.whatHREvaluates}</div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", textTransform: "uppercase", marginBottom: 4 }}>Sample Winning Answer</div>
                  <div style={{ fontSize: 13, background: "#F9FAFB", padding: 12, borderRadius: 6, border: "1px solid #E5E7EB", fontStyle: "italic" }}>
                    "{selectedQAItem.sampleAnswer}"
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#374151", textTransform: "uppercase", marginBottom: 4 }}>Strategy & Coaching Tip</div>
                  <div style={{ fontSize: 12.5, color: "#374151", background: "#FEF3C7", padding: 10, borderRadius: 6, border: "1px solid #FCD34D" }}>
                    💡 {selectedQAItem.remember}
                  </div>
                </div>
              </div>
            )}

            {/* PERSONAL STUDY NOTES IN PREVIEW */}
            {noteContent && (
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px dashed #D1D5DB" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#059669", textTransform: "uppercase", marginBottom: 4 }}>
                  📝 My Personal Study Notes
                </div>
                <div style={{ fontSize: 12.5, background: "#ECFDF5", padding: 10, borderRadius: 6, border: "1px solid #A7F3D0", color: "#065F46", whiteSpace: "pre-wrap" }}>
                  {noteContent}
                </div>
              </div>
            )}

            {/* BRANDED PDF FOOTER */}
            <div
              style={{
                marginTop: 28,
                paddingTop: 10,
                borderTop: "1px solid #E5E7EB",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 10,
                color: "#6B7280"
              }}
            >
              <span>HireReady Dev &bull; The Developer's IT Compendium</span>
              <span>Created by <strong>ghostbyte</strong></span>
            </div>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div
          style={{
            padding: "12px 20px",
            background: isDark ? '#111827' : '#E3DECD',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <span style={{ fontSize: 11.5, color: isDark ? '#9CA3AF' : '#5B5A52' }}>
            Click <strong>Download PDF File</strong> to save this document to your device.
          </span>

          <button
            onClick={onDownloadPdf}
            style={{
              padding: "7px 16px",
              borderRadius: 5,
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
            <Download size={14} /> Download PDF File
          </button>
        </div>
      </div>
    </div>
  );
}
