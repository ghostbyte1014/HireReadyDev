import React from 'react';
import { Home, Menu, BookOpen, HelpCircle, UserCheck } from 'lucide-react';

export function MobileBottomNav({
  activeMode,
  setActiveMode,
  onHomeClick,
  setIsMobileOpen,
  handlePrintStudySheet,
  onOpenAtsResume,
  theme
}) {
  const isDark = theme === 'dark';

  return (
    <nav
      className="fg-sans fg-mobile-only fg-no-print"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        background: isDark ? '#1F2937' : '#EDE9DE',
        borderTop: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 99999,
        boxShadow: "0 -4px 16px rgba(0,0,0,0.12)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)"
      }}
    >
      {/* 1. HOME TAB */}
      <button
        onClick={onHomeClick}
        style={{
          border: "none",
          background: "transparent",
          color: activeMode === 'home' ? (isDark ? '#60A5FA' : '#33417A') : (isDark ? '#9CA3AF' : '#5B5A52'),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          fontSize: 10,
          fontWeight: activeMode === 'home' ? 700 : 500,
          cursor: "pointer"
        }}
      >
        <Home size={18} color={activeMode === 'home' ? (isDark ? '#60A5FA' : '#33417A') : (isDark ? '#9CA3AF' : '#5B5A52')} />
        <span>Home</span>
      </button>

      {/* 2. TOPICS DRAWER TOGGLE TAB */}
      <button
        onClick={() => setIsMobileOpen(true)}
        style={{
          border: "none",
          background: "transparent",
          color: isDark ? '#9CA3AF' : '#5B5A52',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          fontSize: 10,
          fontWeight: 500,
          cursor: "pointer"
        }}
      >
        <Menu size={18} color={isDark ? '#9CA3AF' : '#5B5A52'} />
        <span>Topics</span>
      </button>

      {/* 3. COMPENDIUM TAB */}
      <button
        onClick={() => setActiveMode('guide')}
        style={{
          border: "none",
          background: "transparent",
          color: activeMode === 'guide' ? (isDark ? '#60A5FA' : '#33417A') : (isDark ? '#9CA3AF' : '#5B5A52'),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          fontSize: 10,
          fontWeight: activeMode === 'guide' ? 700 : 500,
          cursor: "pointer"
        }}
      >
        <BookOpen size={18} color={activeMode === 'guide' ? (isDark ? '#60A5FA' : '#33417A') : (isDark ? '#9CA3AF' : '#5B5A52')} />
        <span>Compendium</span>
      </button>

      {/* 4. INTERVIEW Q&A TAB */}
      <button
        onClick={() => setActiveMode('interview')}
        style={{
          border: "none",
          background: "transparent",
          color: activeMode === 'interview' ? (isDark ? '#60A5FA' : '#33417A') : (isDark ? '#9CA3AF' : '#5B5A52'),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          fontSize: 10,
          fontWeight: activeMode === 'interview' ? 700 : 500,
          cursor: "pointer"
        }}
      >
        <HelpCircle size={18} color={activeMode === 'interview' ? (isDark ? '#60A5FA' : '#33417A') : (isDark ? '#9CA3AF' : '#5B5A52')} />
        <span>Practice</span>
      </button>

      {/* 5. ATS RESUME TAB */}
      <button
        onClick={onOpenAtsResume}
        style={{
          border: "none",
          background: "transparent",
          color: isDark ? '#A7F3D0' : '#065F46',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          fontSize: 10,
          fontWeight: 700,
          cursor: "pointer"
        }}
      >
        <UserCheck size={18} color={isDark ? '#A7F3D0' : '#065F46'} />
        <span>ATS CV</span>
      </button>
    </nav>
  );
}
