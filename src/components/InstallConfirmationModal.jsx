import React from 'react';
import { Download, X, ShieldCheck, Wifi, CheckCircle2 } from 'lucide-react';

export function InstallConfirmationModal({ onClose, onConfirm, installPrompt, theme }) {
  const isDark = theme === 'dark';

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
          maxWidth: 440,
          width: "100%",
          padding: 24,
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 16, right: 16, border: "none", background: "transparent", cursor: "pointer", color: isDark ? '#9CA3AF' : '#5B5A52' }}
        >
          <X size={20} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ background: "#059669", color: "#FFF", padding: 12, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Download size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: isDark ? '#FFF' : '#22262B', margin: 0 }}>
              Install HireReady Dev App?
            </h2>
            <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#5B5A52', marginTop: 2 }}>
              100% Offline-First IT Compendium & Interview Guide
            </div>
          </div>
        </div>

        <p style={{ fontSize: 13, color: isDark ? '#D1D5DB' : '#374151', lineHeight: 1.5, marginBottom: 16 }}>
          Installing HireReady Dev adds a standalone desktop or mobile app icon to your device. Study all 86+ IT topics and 70+ interview Q&As anytime without an internet connection!
        </p>

        <div style={{ background: isDark ? '#111827' : '#E3DECD', borderRadius: 6, padding: 12, marginBottom: 20, fontSize: 12 }}>
          <div style={{ fontWeight: 700, color: isDark ? '#A7F3D0' : '#065F46', marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
            <CheckCircle2 size={15} /> Benefits of Installing:
          </div>
          <ul style={{ paddingLeft: 16, margin: 0, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.45 }}>
            <li>Study offline on airplanes, subways, or weak Wi-Fi networks</li>
            <li>Instant 1-click launch from Home Screen / Taskbar</li>
            <li>Zero battery overhead & sub-second page loads</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onConfirm}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: 6,
              background: "#059669",
              color: "#FFF",
              border: "none",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6
            }}
          >
            <Download size={15} /> Yes, Install App Now
          </button>

          <button
            onClick={onClose}
            style={{
              padding: "10px 16px",
              borderRadius: 6,
              background: isDark ? '#374151' : '#E3DECD',
              color: isDark ? '#EDE9DE' : '#22262B',
              border: "none",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
