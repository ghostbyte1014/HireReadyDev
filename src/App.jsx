import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FieldGuideDetail } from './components/FieldGuideDetail';
import { InterviewQADetail } from './components/InterviewQADetail';
import { LandingView } from './components/LandingView';
import { Footer } from './components/Footer';
import { PdfPreviewModal } from './components/PdfPreviewModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FeedbackModal } from './components/FeedbackModal';
import { AtsResumeModal } from './components/AtsResumeModal';

import { DOMAINS, ALL_GUIDE_ENTRIES } from './data/guide/index.js';
import { INTERVIEW_QUESTIONS } from './data/interview/index.js';

export function App() {
  // Navigation & Mode: 'home' | 'guide' | 'interview'
  const [activeMode, setActiveMode] = useState('home');
  const [depthLevel, setDepthLevel] = useState('starter'); // 'starter' | 'deeper'
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showPdfPreviewModal, setShowPdfPreviewModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showAtsResumeModal, setShowAtsResumeModal] = useState(false);

  // Theme State: 'warm' | 'dark'
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('hireready_theme') || 'warm';
    } catch {
      return 'warm';
    }
  });

  // Guide State
  const [query, setQuery] = useState('');
  const [activeDomain, setActiveDomain] = useState(null);
  const [selectedTermKey, setSelectedTermKey] = useState(null);
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);

  // Interview Q&A State
  const [activeQACategory, setActiveQACategory] = useState(null);
  const [selectedQAId, setSelectedQAId] = useState(null);
  const [practiceMode, setPracticeMode] = useState(false);
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [revealedNotes, setRevealedNotes] = useState({});

  // PWA Deferred Install Prompt State
  const [installPrompt, setInstallPrompt] = useState(null);

  // User Progress & Personal Notes (LocalStorage synced)
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('it_fg_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [qaStatus, setQaStatus] = useState(() => {
    try {
      const saved = localStorage.getItem('it_fg_qa_status');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [userNotes, setUserNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('hireready_user_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Practice Timer State
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);

  // Save LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('hireready_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('it_fg_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('it_fg_qa_status', JSON.stringify(qaStatus));
    } catch (e) {
      console.error(e);
    }
  }, [qaStatus]);

  useEffect(() => {
    try {
      localStorage.setItem('hireready_user_notes', JSON.stringify(userNotes));
    } catch (e) {
      console.error(e);
    }
  }, [userNotes]);

  // PWA Install Prompt Listener
  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    installPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        setInstallPrompt(null);
      }
    });
  };

  // Timer Tick Effect
  useEffect(() => {
    let interval = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  // Filter Guide Domains
  const filteredDomains = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DOMAINS.map((d) => {
      if (activeDomain && d.domain !== activeDomain) return { ...d, entries: [] };
      const entries = d.entries.filter((e) => {
        if (showBookmarkedOnly && !bookmarks.includes(e.term)) return false;
        if (!q) return true;
        const hay = [
          e.term,
          d.domain,
          e.meaning,
          e.purpose,
          e.starter?.summary || '',
          ...(e.functions || []),
          ...(e.objectives || []),
          ...(e.keyPoints || []),
          ...((e.examples || []).map((x) => x.text))
        ]
          .join(' ')
          .toLowerCase();
        return hay.includes(q);
      });
      return { ...d, entries };
    }).filter((d) => d.entries.length > 0);
  }, [query, activeDomain, showBookmarkedOnly, bookmarks]);

  const selectedGuideEntry = useMemo(() => {
    if (!selectedTermKey) return ALL_GUIDE_ENTRIES[0];
    return (
      ALL_GUIDE_ENTRIES.find((e) => e.term === selectedTermKey) ||
      filteredDomains[0]?.entries[0] ||
      ALL_GUIDE_ENTRIES[0]
    );
  }, [selectedTermKey, filteredDomains]);

  // Filter Interview Q&As
  const filteredQAs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INTERVIEW_QUESTIONS.filter((item) => {
      if (activeQACategory && item.category !== activeQACategory) return false;
      if (showBookmarkedOnly && !bookmarks.includes(item.id)) return false;
      if (!q) return true;
      const hay = [
        item.question,
        item.category,
        item.subcategory,
        item.whatHREvaluates,
        item.sampleAnswer,
        item.remember
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, activeQACategory, showBookmarkedOnly, bookmarks]);

  const selectedQAItem = useMemo(() => {
    if (!selectedQAId) return INTERVIEW_QUESTIONS[0];
    return (
      INTERVIEW_QUESTIONS.find((q) => q.id === selectedQAId) ||
      filteredQAs[0] ||
      INTERVIEW_QUESTIONS[0]
    );
  }, [selectedQAId, filteredQAs]);

  const qaCategories = useMemo(() => {
    return Array.from(new Set(INTERVIEW_QUESTIONS.map((q) => q.category)));
  }, []);

  const toggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const setQuestionProgress = (id, status) => {
    setQaStatus((prev) => ({ ...prev, [id]: status }));
  };

  const handleSaveUserNote = (key, text) => {
    setUserNotes((prev) => ({
      ...prev,
      [key]: text
    }));
  };

  const toggleRevealAnswer = (id) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleRevealNotes = (id) => {
    setRevealedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const startTimer = (secs = 60) => {
    setTimerSeconds(secs);
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(60);
  };

  const masteredCount = useMemo(() => {
    return Object.values(qaStatus).filter((s) => s === 'mastered').length;
  }, [qaStatus]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'warm' ? 'dark' : 'warm'));
  };

  const onHomeClick = () => {
    setActiveMode('home');
  };

  const handleSelectTerm = (termKey) => {
    setSelectedTermKey(termKey);
    setActiveMode('guide');
    setIsMobileOpen(false);
  };

  const handleSelectQA = (qaId) => {
    setSelectedQAId(qaId);
    setActiveMode('interview');
    setIsMobileOpen(false);
  };

  // Export User Data Backup (.json)
  const handleExportBackup = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      bookmarks,
      qaStatus,
      userNotes,
      exportedAt: new Date().toISOString()
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `hireready_dev_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import User Data Backup (.json)
  const handleImportBackup = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed.bookmarks) setBookmarks(parsed.bookmarks);
          if (parsed.qaStatus) setQaStatus(parsed.qaStatus);
          if (parsed.userNotes) setUserNotes(parsed.userNotes);
          alert("✓ Backup successfully restored!");
        } catch {
          alert("❌ Error: Invalid backup JSON file.");
        }
      };
    }
  };

  // Trigger PDF Preview Modal
  const handleOpenPdfPreview = () => {
    setShowPdfPreviewModal(true);
  };

  // Execute Direct PDF Download from Preview Canvas
  const handleDownloadPdfFile = () => {
    const targetElement = document.getElementById('pdf-preview-content');
    if (!targetElement) return;

    const topicName = activeMode === 'guide'
      ? (selectedGuideEntry?.term || 'Topic')
      : (selectedQAItem?.subcategory || 'Interview_QA');
    const filename = `HireReady_Dev_${topicName.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;

    if (window.html2pdf) {
      const opt = {
        margin: 0.3,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      window.html2pdf().set(opt).from(targetElement).save();
    } else {
      window.print();
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        fontFamily: "Georgia, 'Iowan Old Style', 'Palatino Linotype', serif",
        background: isDark ? '#14171A' : '#EDE9DE',
        color: isDark ? '#EDE9DE' : '#22262B',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Dynamic CSS styles, Themes & Mobile Responsiveness */}
      <style>{`
        .fg-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .fg-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
        .fg-scroll::-webkit-scrollbar { width: 7px; }
        .fg-scroll::-webkit-scrollbar-thumb { background: ${isDark ? '#374151' : '#CFC7B0'}; border-radius: 4px; }
        .fg-row:hover { background: ${isDark ? '#2D3748' : '#E3DECD'}; }
        .fg-row-active { background: ${isDark ? '#3B82F6' : '#22262B'} !important; color: #EDE9DE !important; }
        input::placeholder { color: ${isDark ? '#9CA3AF' : '#8A8474'}; }
        .fg-chip { cursor: pointer; border: 1px solid ${isDark ? '#4B5563' : '#CFC7B0'}; background: ${isDark ? '#1F2937' : '#F8F5EE'}; transition: all 0.15s ease; color: ${isDark ? '#EDE9DE' : '#22262B'}; }
        .fg-chip:hover { background: ${isDark ? '#374151' : '#E3DECD'}; }
        .fg-chip-active { background: ${isDark ? '#3B82F6' : '#22262B'} !important; color: #EDE9DE !important; border-color: ${isDark ? '#3B82F6' : '#22262B'} !important; }
        .fg-link { color: inherit; text-decoration: none; border-bottom: 1px solid ${isDark ? '#4B5563' : '#CFC7B0'}; }
        .fg-link:hover { border-bottom-color: ${isDark ? '#EDE9DE' : '#22262B'}; }
        .mode-tab { padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; border: 1px solid transparent; display: flex; align-items: center; gap: 6px; }
        .mode-tab-active { background: ${isDark ? '#3B82F6' : '#22262B'}; color: #EDE9DE; }
        .mode-tab-inactive { background: ${isDark ? '#1F2937' : '#F8F5EE'}; color: ${isDark ? '#D1D5DB' : '#5B5A52'}; border-color: ${isDark ? '#374151' : '#CFC7B0'}; }
        .mode-tab-inactive:hover { background: ${isDark ? '#374151' : '#E3DECD'}; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Print styles for PDF Study Sheet */
        @media print {
          header, aside, footer, .mode-tab, .fg-no-print { display: none !important; }
          main { padding: 0 !important; overflow: visible !important; }
          body, div { background: #FFF !important; color: #000 !important; }
        }

        /* Responsive Breakpoints */
        .fg-mobile-only { display: none !important; }
        .fg-desktop-only { display: inline-flex !important; }

        @media (max-width: 768px) {
          .fg-desktop-sidebar { display: none !important; }
          .fg-mobile-only { display: flex !important; }
          .fg-desktop-only { display: none !important; }
          main.fg-main-panel { padding: 18px 14px 75px !important; }
          footer.fg-no-print { padding-bottom: 70px !important; }
        }
      `}</style>

      {/* HEADER */}
      <Header
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        totalGuideCount={ALL_GUIDE_ENTRIES.length}
        totalQACount={INTERVIEW_QUESTIONS.length}
        masteredCount={masteredCount}
        installPrompt={installPrompt}
        handleInstallClick={handleInstallClick}
        onHomeClick={onHomeClick}
        setIsMobileOpen={setIsMobileOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        handlePrintStudySheet={handleOpenPdfPreview}
        onOpenFeedback={() => setShowFeedbackModal(true)}
        onOpenAtsResume={() => setShowAtsResumeModal(true)}
      />

      {/* MAIN CONTAINER */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* SIDEBAR */}
        <Sidebar
          activeMode={activeMode === 'home' ? 'guide' : activeMode}
          query={query}
          setQuery={setQuery}
          DOMAINS={DOMAINS}
          filteredDomains={filteredDomains}
          activeDomain={activeDomain}
          setActiveDomain={setActiveDomain}
          selectedGuideEntry={selectedGuideEntry}
          setSelectedTermKey={handleSelectTerm}
          qaCategories={qaCategories}
          filteredQAs={filteredQAs}
          activeQACategory={activeQACategory}
          setActiveQACategory={setActiveQACategory}
          selectedQAItem={selectedQAItem}
          setSelectedQAId={handleSelectQA}
          qaStatus={qaStatus}
          bookmarks={bookmarks}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
          showBookmarkedOnly={showBookmarkedOnly}
          setShowBookmarkedOnly={setShowBookmarkedOnly}
          theme={theme}
        />

        {/* MAIN PANEL */}
        <main className="fg-scroll fg-main-panel" style={{ flex: 1, overflowY: 'auto', padding: '32px 40px 40px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            {activeMode === 'home' && (
              <LandingView
                setActiveMode={setActiveMode}
                setSelectedTermKey={handleSelectTerm}
                setSelectedQAId={handleSelectQA}
                handleInstallClick={handleInstallClick}
                installPrompt={installPrompt}
                theme={theme}
              />
            )}

            {activeMode === 'guide' && (
              <FieldGuideDetail
                selectedGuideEntry={selectedGuideEntry}
                depthLevel={depthLevel}
                setDepthLevel={setDepthLevel}
                bookmarks={bookmarks}
                toggleBookmark={toggleBookmark}
                userNotes={userNotes}
                handleSaveUserNote={handleSaveUserNote}
                theme={theme}
              />
            )}

            {activeMode === 'interview' && (
              <InterviewQADetail
                selectedQAItem={selectedQAItem}
                practiceMode={practiceMode}
                setPracticeMode={setPracticeMode}
                bookmarks={bookmarks}
                toggleBookmark={toggleBookmark}
                timerSeconds={timerSeconds}
                timerRunning={timerRunning}
                startTimer={startTimer}
                setTimerRunning={setTimerRunning}
                resetTimer={resetTimer}
                revealedAnswers={revealedAnswers}
                toggleRevealAnswer={toggleRevealAnswer}
                revealedNotes={revealedNotes}
                toggleRevealNotes={toggleRevealNotes}
                qaStatus={qaStatus}
                setQuestionProgress={setQuestionProgress}
                userNotes={userNotes}
                handleSaveUserNote={handleSaveUserNote}
                theme={theme}
                onOpenAtsResume={() => setShowAtsResumeModal(true)}
              />
            )}
          </div>
        </main>
      </div>

      {/* FOOTER & READERS GUIDE */}
      <Footer
        theme={theme}
        handleExportBackup={handleExportBackup}
        handleImportBackup={handleImportBackup}
      />

      {/* STICKY MOBILE BOTTOM QUICK ACTION NAVIGATION BAR */}
      <MobileBottomNav
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        onHomeClick={onHomeClick}
        setIsMobileOpen={setIsMobileOpen}
        handlePrintStudySheet={handleOpenPdfPreview}
        onOpenAtsResume={() => setShowAtsResumeModal(true)}
        theme={theme}
      />

      {/* INTERACTIVE PDF PREVIEW MODAL */}
      {showPdfPreviewModal && (
        <PdfPreviewModal
          selectedGuideEntry={selectedGuideEntry}
          selectedQAItem={selectedQAItem}
          activeMode={activeMode}
          depthLevel={depthLevel}
          userNotes={userNotes}
          onClose={() => setShowPdfPreviewModal(false)}
          onDownloadPdf={handleDownloadPdfFile}
          theme={theme}
        />
      )}

      {/* FEEDBACK MODAL */}
      {showFeedbackModal && (
        <FeedbackModal
          onClose={() => setShowFeedbackModal(false)}
          theme={theme}
        />
      )}

      {/* ATS RESUME BUILDER & MASTERCLASS MODAL */}
      {showAtsResumeModal && (
        <AtsResumeModal
          onClose={() => setShowAtsResumeModal(false)}
          theme={theme}
        />
      )}
    </div>
  );
}
export default App;
