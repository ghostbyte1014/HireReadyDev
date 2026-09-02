import React, { useState } from 'react';
import { Eye, EyeOff, Bookmark, Clock, Play, Pause, RefreshCw, Edit3, Check, UserCheck } from 'lucide-react';

export function InterviewQADetail({
  selectedQAItem,
  practiceMode,
  setPracticeMode,
  bookmarks,
  toggleBookmark,
  timerSeconds,
  timerRunning,
  startTimer,
  setTimerRunning,
  resetTimer,
  revealedAnswers,
  toggleRevealAnswer,
  revealedNotes,
  toggleRevealNotes,
  qaStatus,
  setQuestionProgress,
  userNotes,
  handleSaveUserNote,
  theme,
  onOpenAtsResume
}) {
  const [noteSavedToast, setNoteSavedToast] = useState(false);
  const isDark = theme === 'dark';

  if (!selectedQAItem) return null;

  const currentNote = userNotes[selectedQAItem.id] || '';

  const handleNoteChange = (e) => {
    handleSaveUserNote(selectedQAItem.id, e.target.value);
    setNoteSavedToast(true);
    setTimeout(() => setNoteSavedToast(false), 1500);
  };

  return (
    <div style={{ maxWidth: 720 }}>
      {/* ATS RESUME PROMO STRIP IN INTERVIEW Q&A */}
      <div
        style={{
          background: isDark ? "#064E3B" : "#ECFDF5",
          border: `1px solid ${isDark ? "#047857" : "#A7F3D0"}`,
          borderRadius: 8,
          padding: "10px 14px",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <UserCheck size={18} color={isDark ? "#A7F3D0" : "#065F46"} />
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: isDark ? "#A7F3D0" : "#065F46" }}>
              Single-Column ATS Resume Builder & Masterclass
            </div>
            <div style={{ fontSize: 11, color: isDark ? "#D1D5DB" : "#047857" }}>
              Pass ATS screening software (Workday/Greenhouse) with 99%+ parsing accuracy.
            </div>
          </div>
        </div>

        <button
          onClick={onOpenAtsResume}
          style={{
            padding: "6px 12px",
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
          <UserCheck size={13} /> Open ATS Resume Builder
        </button>
      </div>

      {/* Q&A Header Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: isDark ? "#60A5FA" : "#33417A", background: isDark ? "#1F2937" : "#E3DECD", padding: "2px 8px", borderRadius: 4 }}>
            {selectedQAItem.category}
          </span>
          <span style={{ fontSize: 11, color: isDark ? "#9CA3AF" : "#5B5A52", marginLeft: 8 }}>
            {selectedQAItem.subcategory}
          </span>
        </div>

        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button
            onClick={() => toggleBookmark(selectedQAItem.id)}
            style={{
              padding: "4px 8px",
              borderRadius: 4,
              border: `1px solid ${isDark ? "#4B5563" : "#CFC7B0"}`,
              background: bookmarks.includes(selectedQAItem.id) ? "#D97706" : (isDark ? "#1F2937" : "#F8F5EE"),
              color: bookmarks.includes(selectedQAItem.id) ? "#FFF" : (isDark ? "#EDE9DE" : "#22262B"),
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <Bookmark size={12} />
            {bookmarks.includes(selectedQAItem.id) ? "Saved" : "Bookmark"}
          </button>

          <button
            onClick={() => setPracticeMode(!practiceMode)}
            style={{
              padding: "4px 8px",
              borderRadius: 4,
              border: `1px solid ${isDark ? "#4B5563" : "#CFC7B0"}`,
              background: practiceMode ? "#059669" : (isDark ? "#1F2937" : "#F8F5EE"),
              color: practiceMode ? "#FFF" : (isDark ? "#EDE9DE" : "#22262B"),
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            {practiceMode ? "Practice Mode" : "Study Mode"}
          </button>
        </div>
      </div>

      {/* QUESTION TITLE */}
      <h1 style={{ fontSize: 22, fontWeight: 800, color: isDark ? "#FFF" : "#22262B", marginBottom: 16, lineHeight: 1.3 }}>
        Q: {selectedQAItem.question}
      </h1>

      {/* WHAT HR EVALUATES */}
      <div style={{ background: isDark ? "#1E3A8A" : "#EFF6FF", borderLeft: `4px solid ${isDark ? "#3B82F6" : "#2563EB"}`, padding: "12px 16px", borderRadius: "0 6px 6px 0", marginBottom: 20 }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: isDark ? "#93C5FD" : "#1D4ED8", textTransform: "uppercase", marginBottom: 2 }}>
          Recruiter & Technical Evaluation Criteria
        </div>
        <div style={{ fontSize: 13, color: isDark ? "#DBEAFE" : "#1E40AF", lineHeight: 1.45 }}>
          {selectedQAItem.whatHREvaluates}
        </div>
      </div>

      {/* TIMER & PRACTICE TOOLS */}
      {practiceMode && (
        <div style={{ background: isDark ? "#1F2937" : "#F8F5EE", border: `1px solid ${isDark ? "#374151" : "#CFC7B0"}`, borderRadius: 6, padding: 12, marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Clock size={16} color={timerSeconds < 10 ? "#DC2626" : (isDark ? "#60A5FA" : "#33417A")} />
            <span style={{ fontSize: 14, fontWeight: 800, fontFamily: "monospace", color: timerSeconds < 10 ? "#DC2626" : (isDark ? "#FFF" : "#22262B") }}>
              00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
            </span>
            <span style={{ fontSize: 11, color: isDark ? "#9CA3AF" : "#5B5A52" }}>(60s Practice Answer Timer)</span>
          </div>

          <div style={{ display: "flex", gap: 6 }}>
            {!timerRunning ? (
              <button onClick={() => startTimer(60)} style={{ padding: "4px 8px", background: "#059669", color: "#FFF", border: "none", borderRadius: 4, fontSize: 11, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                <Play size={11} /> Start Timer
              </button>
            ) : (
              <button onClick={() => setTimerRunning(false)} style={{ padding: "4px 8px", background: "#DC2626", color: "#FFF", border: "none", borderRadius: 4, fontSize: 11, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                <Pause size={11} /> Pause
              </button>
            )}
            <button onClick={resetTimer} style={{ padding: "4px 8px", background: isDark ? "#374151" : "#E3DECD", color: isDark ? "#EDE9DE" : "#22262B", border: "none", borderRadius: 4, fontSize: 11, fontWeight: 600, cursor: "pointer" }}>
              <RefreshCw size={11} /> Reset
            </button>
          </div>
        </div>
      )}

      {/* SAMPLE ANSWER */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h2 style={{ fontSize: 13, textTransform: "uppercase", fontWeight: 700, color: isDark ? "#60A5FA" : "#33417A" }}>
            Recommended Answer Structure
          </h2>
          {practiceMode && (
            <button onClick={() => toggleRevealAnswer(selectedQAItem.id)} style={{ border: "none", background: "transparent", color: isDark ? "#60A5FA" : "#33417A", cursor: "pointer", fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
              {revealedAnswers[selectedQAItem.id] ? <EyeOff size={13} /> : <Eye size={13} />}
              {revealedAnswers[selectedQAItem.id] ? "Hide Answer" : "Reveal Answer"}
            </button>
          )}
        </div>

        {(!practiceMode || revealedAnswers[selectedQAItem.id]) ? (
          <div style={{ background: isDark ? "#111827" : "#F8F5EE", border: `1px solid ${isDark ? "#374151" : "#CFC7B0"}`, borderRadius: 6, padding: 14, fontSize: 13.5, lineHeight: 1.55, color: isDark ? "#EDE9DE" : "#22262B" }}>
            "{selectedQAItem.sampleAnswer}"
          </div>
        ) : (
          <div style={{ background: isDark ? "#111827" : "#E3DECD", borderRadius: 6, padding: 16, textAlign: "center", color: isDark ? "#9CA3AF" : "#5B5A52", fontSize: 12, fontStyle: "italic", border: `1px dashed ${isDark ? "#374151" : "#CFC7B0"}` }}>
            Answer hidden during Practice Mode. Formulate your response before revealing.
          </div>
        )}
      </div>

      {/* COACHING TIPS */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 13, textTransform: "uppercase", fontWeight: 700, color: "#D97706", marginBottom: 6 }}>
          Technical Strategy Tip
        </h2>
        <div style={{ background: isDark ? "#1F2937" : "#FEF3C7", border: `1px solid ${isDark ? "#374151" : "#FCD34D"}`, borderRadius: 6, padding: 12, fontSize: 12.5, color: isDark ? "#EDE9DE" : "#92400E", lineHeight: 1.5 }}>
          {selectedQAItem.remember}
        </div>
      </div>

      {/* QUESTION MASTERY STATUS */}
      <div style={{ background: isDark ? "#111827" : "#F8F5EE", border: `1px solid ${isDark ? "#374151" : "#CFC7B0"}`, borderRadius: 6, padding: 14, marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: isDark ? "#9CA3AF" : "#5B5A52", marginBottom: 8 }}>
          Track Readiness Status
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {['unstudied', 'review', 'mastered'].map((st) => (
            <button
              key={st}
              onClick={() => setQuestionProgress(selectedQAItem.id, st)}
              style={{
                padding: "6px 12px",
                borderRadius: 4,
                border: "none",
                fontSize: 11.5,
                fontWeight: 700,
                cursor: "pointer",
                textTransform: "capitalize",
                background: qaStatus[selectedQAItem.id] === st
                  ? (st === 'mastered' ? '#059669' : st === 'review' ? '#D97706' : '#475569')
                  : (isDark ? '#374151' : '#E3DECD'),
                color: qaStatus[selectedQAItem.id] === st ? '#FFF' : (isDark ? '#EDE9DE' : '#22262B')
              }}
            >
              {st === 'mastered' ? 'Verified' : st === 'review' ? 'Requires Review' : 'Unreviewed'}
            </button>
          ))}
        </div>
      </div>

      {/* MY PERSONAL STUDY NOTES */}
      <div style={{ background: isDark ? "#1F2937" : "#F8F5EE", border: `1px solid ${isDark ? "#374151" : "#CFC7B0"}`, borderRadius: 8, padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: isDark ? "#60A5FA" : "#33417A", fontWeight: 700, fontSize: 13 }}>
            <Edit3 size={15} />
            <span>My Personal Study Notes</span>
          </div>
          {noteSavedToast && (
            <span style={{ fontSize: 10.5, color: "#059669", fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}>
              <Check size={12} /> Saved to device
            </span>
          )}
        </div>
        <textarea
          value={currentNote}
          onChange={handleNoteChange}
          placeholder="Type your personal answer notes, key keywords to remember, or real past interview experience..."
          rows={3}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 6,
            border: `1px solid ${isDark ? "#4B5563" : "#CFC7B0"}`,
            background: isDark ? "#111827" : "#FFF",
            color: isDark ? "#EDE9DE" : "#22262B",
            fontSize: 12.5,
            fontFamily: "inherit",
            outline: "none",
            resize: "vertical"
          }}
        />
      </div>
    </div>
  );
}
