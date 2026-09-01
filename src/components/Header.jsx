import React, { useState, useEffect } from 'react';
import { BookOpen, HelpCircle, Download, Github, Wifi, WifiOff, Shield, RefreshCw, Menu, CheckCircle2, Moon, Sun, FileText, MessageSquare } from 'lucide-react';

export function Header({
  activeMode,
  setActiveMode,
  totalGuideCount,
  totalQACount,
  masteredCount,
  installPrompt,
  handleInstallClick,
  onHomeClick,
  setIsMobileOpen,
  theme,
  toggleTheme,
  handlePrintStudySheet,
  onOpenFeedback
}) {
  const [isOnline, setIsOnline] = useState(() => (typeof navigator !== 'undefined' ? navigator.onLine : true));
  const [showInstallHelp, setShowInstallHelp] = useState(false);
  const [showSyncToast, setShowSyncToast] = useState(false);
  const [showPdfTip, setShowPdfTip] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const onInstallBtnClick = () => {
    if (installPrompt) {
      handleInstallClick();
    } else {
      setShowInstallHelp((prev) => !prev);
    }
  };

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setShowSyncToast(true);
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  const onPdfClick = () => {
    setShowPdfTip(true);
    setTimeout(() => {
      handlePrintStudySheet();
      setTimeout(() => setShowPdfTip(false), 3000);
    }, 400);
  };

  return (
    <header
      className="fg-sans fg-no-print"
      style={{
        borderBottom: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
        padding: "10px 16px",
        background: isDark ? '#1F2937' : '#EDE9DE',
        color: isDark ? '#EDE9DE' : '#22262B',
        display: "flex",
        flexDirection: "column",
        gap: 8,
        position: "relative"
      }}
    >
      {/* Top Banner & Title Row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* MOBILE SIDEBAR DRAWER TOGGLE BUTTON */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="fg-mobile-only"
            title="Open Topics Drawer"
            style={{
              border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
              background: isDark ? '#374151' : '#22262B',
              color: "#F8F5EE",
              borderRadius: 6,
              padding: "7px 10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 700
            }}
          >
            <Menu size={16} /> Topics
          </button>

          {/* Logo Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={onHomeClick}>
            {!imgError ? (
              <img
                src="/icon-192.png?v=2"
                alt="HireReady Dev Logo"
                onError={() => setImgError(true)}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 7,
                  objectFit: "cover",
                  border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.12)"
                }}
              />
            ) : (
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 7,
                  background: "#22262B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`
                }}
              >
                <Shield size={18} color="#33417A" />
              </div>
            )}

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: -0.2, color: isDark ? '#FFF' : '#22262B' }}>
                  HireReady Dev
                </div>
                <span className="fg-desktop-only" style={{ fontSize: 10.5, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', background: isDark ? '#374151' : '#E3DECD', padding: "1px 6px", borderRadius: 4, border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}` }}>
                  The Developer's IT Compendium
                </span>
                <a
                  href="https://github.com/ghostbyte1014"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  title="GitHub Creator Profile"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: isDark ? '#EDE9DE' : '#22262B',
                    background: isDark ? '#374151' : '#E3DECD',
                    padding: "1px 6px",
                    borderRadius: 4,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`
                  }}
                >
                  <Github size={10} /> by ghostbyte
                </a>
              </div>
              <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#5B5A52', fontWeight: 500, display: "flex", alignItems: "center", gap: 6, marginTop: 1 }}>
                <span>
                  {activeMode === "guide" && `${totalGuideCount} Topics`}
                  {activeMode === "interview" && `${totalQACount} Interview Q&As (${masteredCount}/${totalQACount})`}
                  {activeMode === "home" && `Welcome Landing Dashboard`}
                </span>

                {/* Online / Offline Status Badge */}
                <span
                  style={{
                    fontSize: 9.5,
                    fontWeight: 700,
                    padding: "1px 5px",
                    borderRadius: 3,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 3,
                    background: isOnline ? (isDark ? "#064E3B" : "#D1FAE5") : (isDark ? "#7F1D1D" : "#FEF2F2"),
                    color: isOnline ? (isDark ? "#A7F3D0" : "#065F46") : (isDark ? "#FCA5A5" : "#991B1B"),
                    border: `1px solid ${isOnline ? (isDark ? "#047857" : "#A7F3D0") : (isDark ? "#991B1B" : "#FCA5A5")}`
                  }}
                >
                  {isOnline ? <Wifi size={9} /> : <WifiOff size={9} />}
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Mode Switcher & Action Buttons */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          {/* FEEDBACK BUTTON */}
          <button
            onClick={onOpenFeedback}
            title="Send anonymous feedback to author"
            style={{
              padding: "6px 9px",
              borderRadius: 6,
              background: isDark ? "#374151" : "#F8F5EE",
              color: isDark ? "#EDE9DE" : "#22262B",
              border: `1px solid ${isDark ? "#4B5563" : "#CFC7B0"}`,
              fontWeight: 600,
              fontSize: 12,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <MessageSquare size={13} color={isDark ? '#60A5FA' : '#33417A'} />
            Feedback
          </button>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Warm Paper Mode" : "Switch to Dark Mode"}
            style={{
              padding: "6px 9px",
              borderRadius: 6,
              background: isDark ? "#374151" : "#F8F5EE",
              color: isDark ? "#FDE047" : "#22262B",
              border: `1px solid ${isDark ? "#4B5563" : "#CFC7B0"}`,
              fontWeight: 600,
              fontSize: 12,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            {isDark ? <Sun size={13} /> : <Moon size={13} />}
            {isDark ? "Warm Mode" : "Dark Mode"}
          </button>

          {/* SAVE TOPIC AS PDF BUTTON (Hidden on Home Landing Page) */}
          {activeMode !== "home" && (
            <button
              onClick={onPdfClick}
              title="Save current topic or study sheet as PDF"
              style={{
                padding: "6px 9px",
                borderRadius: 6,
                background: isDark ? "#1E3A8A" : "#EFF6FF",
                color: isDark ? "#93C5FD" : "#1D4ED8",
                border: `1px solid ${isDark ? "#3B82F6" : "#BFDBFE"}`,
                fontWeight: 700,
                fontSize: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4
              }}
            >
              <FileText size={13} /> Save PDF
            </button>
          )}

          <button
            onClick={onInstallBtnClick}
            className="mode-tab"
            style={{ background: "#059669", color: "#FFF", border: "1px solid #047857", padding: "6px 10px", fontSize: 12 }}
          >
            <Download size={14} /> Install App
          </button>

          <button
            onClick={handleManualRefresh}
            title="Refresh app to sync latest topics & updates"
            style={{
              padding: "6px 9px",
              borderRadius: 6,
              background: isDark ? "#374151" : "#F8F5EE",
              color: isDark ? "#EDE9DE" : "#22262B",
              border: `1px solid ${isDark ? "#4B5563" : "#CFC7B0"}`,
              fontWeight: 600,
              fontSize: 12,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <RefreshCw size={13} className={isRefreshing ? "spin" : ""} />
            Sync
          </button>

          <button
            onClick={() => setActiveMode("guide")}
            className={`mode-tab ${activeMode === "guide" ? "mode-tab-active" : "mode-tab-inactive"}`}
            style={{ padding: "6px 10px", fontSize: 12 }}
          >
            <BookOpen size={14} />
            Compendium
          </button>

          <button
            onClick={() => setActiveMode("interview")}
            className={`mode-tab ${activeMode === "interview" ? "mode-tab-active" : "mode-tab-inactive"}`}
            style={{ padding: "6px 10px", fontSize: 12 }}
          >
            <HelpCircle size={14} />
            Interview Q&A
          </button>
        </div>
      </div>

      {/* Precise Banner Note */}
      <div
        style={{
          fontSize: 10.5,
          background: isDark ? "#111827" : "#F8F5EE",
          border: `1px solid ${isDark ? "#374151" : "#CFC7B0"}`,
          borderRadius: 4,
          padding: "4px 8px",
          color: isDark ? "#9CA3AF" : "#5B5A52",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4
        }}
      >
        <span>
          ⚡ <strong>Offline Ready:</strong> Install app to study offline without Wi-Fi. 💡 <em>Click <strong>Sync</strong> anytime to check for new topics & updates.</em>
        </span>
        <span style={{ fontSize: 10, color: isDark ? "#6B7280" : "#8A8474" }}>
          🌐 External links require internet
        </span>
      </div>

      {/* PDF DOWNLOAD INSTRUCTION TOAST */}
      {showPdfTip && (
        <div
          style={{
            position: "absolute",
            top: 54,
            right: 180,
            background: "#22262B",
            color: "#EDE9DE",
            padding: "8px 14px",
            borderRadius: 6,
            boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            zIndex: 99999,
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 6
          }}
        >
          <CheckCircle2 size={15} color="#3B82F6" />
          <span>💡 Select <strong>"Save as PDF"</strong> under Destination in your print window!</span>
        </div>
      )}

      {/* SYNC TOAST CONFIRMATION */}
      {showSyncToast && (
        <div
          style={{
            position: "absolute",
            top: 54,
            right: 120,
            background: "#22262B",
            color: "#EDE9DE",
            padding: "8px 14px",
            borderRadius: 6,
            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
            zIndex: 99999,
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 6
          }}
        >
          <CheckCircle2 size={15} color="#059669" />
          <span>Syncing latest topics & interview updates...</span>
        </div>
      )}

      {/* PWA INSTALLATION HELP POPOVER */}
      {showInstallHelp && (
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 16,
            background: "#22262B",
            color: "#EDE9DE",
            padding: "12px 16px",
            borderRadius: 6,
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            zIndex: 99999,
            maxWidth: 300,
            fontSize: 11.5,
            lineHeight: 1.45
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>📲 How to Install App</span>
            <span style={{ cursor: "pointer", opacity: 0.7 }} onClick={() => setShowInstallHelp(false)}>✕</span>
          </div>
          <p style={{ color: "#CFC7B0" }}>
            To install <strong>HireReady Dev</strong> for offline access:
          </p>
          <ul style={{ paddingLeft: 16, marginTop: 4 }}>
            <li><strong>Chrome / Edge:</strong> Click install icon in address bar or menu (⋮) → "Install HireReady Dev".</li>
            <li><strong>iOS Safari:</strong> Tap Share button (↑) → "Add to Home Screen".</li>
          </ul>
        </div>
      )}
    </header>
  );
}
