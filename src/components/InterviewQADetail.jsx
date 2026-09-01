import React, { useState } from 'react';
import { Eye, EyeOff, Bookmark, Clock, Play, Pause, RefreshCw, Edit3, Check } from 'lucide-react';

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
  theme
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
      {/* Q&A Header Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 10 }}>
        <div className="fg-sans" style={{ fontSize: 11.5, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A' }}>
          {selectedQAItem.category} &bull; {selectedQAItem.subcategory}
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="fg-sans">
          {/* Practice Mode Toggle */}
          <button
            onClick={() => setPracticeMode(!practiceMode)}
            style={{
              border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
              background: practiceMode ? (isDark ? '#3B82F6' : '#22262B') : (isDark ? '#1F2937' : '#F8F5EE'),
              color: practiceMode ? '#EDE9DE' : (isDark ? '#D1D5DB' : '#22262B'),
              padding: "4px 10px",
              borderRadius: 4,
              fontSize: 11.5,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4
            }}
          >
            {practiceMode ? <EyeOff size={13} /> : <Eye size={13} />}
            {practiceMode ? "Practice Mode ON" : "Practice Mode OFF"}
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmark(selectedQAItem.id)}
            style={{
              border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
              background: isDark ? '#1F2937' : '#F8F5EE',
              padding: "4px 8px",
              borderRadius: 4,
              cursor: "pointer"
            }}
            title="Bookmark Question"
          >
            <Bookmark
              size={14}
              fill={bookmarks.includes(selectedQAItem.id) ? "#D97706" : "none"}
              color={bookmarks.includes(selectedQAItem.id) ? "#D97706" : (isDark ? "#9CA3AF" : "#5B5A52")}
            />
          </button>
        </div>
      </div>

      {/* Question Title */}
      <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.25, marginBottom: 16, color: isDark ? '#FFF' : '#22262B' }}>
        Q: {selectedQAItem.question}
      </h1>

      {/* HR Intent Box */}
      <div
        className="fg-sans"
        style={{
          background: isDark ? '#1F2937' : '#F8F5EE',
          borderLeft: `4px solid ${isDark ? '#60A5FA' : '#33417A'}`,
          borderRadius: "0 6px 6px 0",
          padding: "12px 16px",
          marginBottom: 20
        }}
      >
        <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A', textTransform: "uppercase", marginBottom: 3 }}>
          What HR / Interviewer Evaluates:
        </div>
        <div style={{ fontSize: 14, color: isDark ? '#EDE9DE' : '#22262B', fontWeight: 500 }}>
          {selectedQAItem.whatHREvaluates}
        </div>
      </div>

      {/* Practice Timer Controls */}
      <div
        className="fg-sans"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: isDark ? '#1F2937' : '#E7E2D3',
          border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
          borderRadius: 6,
          padding: "10px 14px",
          marginBottom: 24
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Clock size={16} color={isDark ? '#60A5FA' : '#33417A'} />
          <span style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#EDE9DE' : '#22262B' }}>Response Timer:</span>
          <span className="fg-mono" style={{ fontSize: 16, fontWeight: 700, color: timerSeconds < 10 ? "#DC2626" : (isDark ? '#EDE9DE' : '#22262B') }}>
            00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
          </span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {!timerRunning ? (
            <button
              onClick={() => startTimer(60)}
              style={{ border: "none", background: isDark ? '#3B82F6' : '#33417A', color: "#FFF", padding: "4px 10px", borderRadius: 4, fontSize: 11.5, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
            >
              <Play size={12} /> Start 60s
            </button>
          ) : (
            <button
              onClick={() => setTimerRunning(false)}
              style={{ border: "none", background: "#DC2626", color: "#FFF", padding: "4px 10px", borderRadius: 4, fontSize: 11.5, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
            >
              <Pause size={12} /> Pause
            </button>
          )}
          <button
            onClick={resetTimer}
            style={{ border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`, background: isDark ? '#374151' : '#F8F5EE', color: isDark ? '#EDE9DE' : '#22262B', padding: "4px 8px", borderRadius: 4, fontSize: 11.5, cursor: "pointer" }}
          >
            <RefreshCw size={12} />
          </button>
        </div>
      </div>

      {/* Sample Winning Answer */}
      <div style={{ marginBottom: 24 }}>
        <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
          <span>Sample Winning Answer</span>
          {practiceMode && (
            <button
              onClick={() => toggleRevealAnswer(selectedQAItem.id)}
              style={{ border: "none", background: "transparent", color: isDark ? '#60A5FA' : '#33417A', cursor: "pointer", fontSize: 11, fontWeight: 600 }}
            >
              {revealedAnswers[selectedQAItem.id] ? "Hide Answer" : "Reveal Answer"}
            </button>
          )}
        </div>

        {(!practiceMode || revealedAnswers[selectedQAItem.id]) ? (
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: isDark ? '#EDE9DE' : '#22262B',
              background: isDark ? '#1F2937' : '#F8F5EE',
              border: `1px solid ${isDark ? '#374151' : '#E3DECD'}`,
              borderRadius: 6,
              padding: "16px",
              fontStyle: "normal"
            }}
          >
            "{selectedQAItem.sampleAnswer}"
          </p>
        ) : (
          <div
            onClick={() => toggleRevealAnswer(selectedQAItem.id)}
            style={{
              background: isDark ? '#1F2937' : '#E7E2D3',
              border: `2px dashed ${isDark ? '#4B5563' : '#CFC7B0'}`,
              borderRadius: 6,
              padding: "24px",
              textAlign: "center",
              cursor: "pointer",
              color: isDark ? '#9CA3AF' : '#5B5A52'
            }}
            className="fg-sans"
          >
            🔒 Answer hidden in Practice Mode. Click to reveal when ready!
          </div>
        )}
      </div>

      {/* Coaching Notes / Tips */}
      <div style={{ marginBottom: 24 }}>
        <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
          <span>Coaching Notes & Strategy</span>
          {practiceMode && (
            <button
              onClick={() => toggleRevealNotes(selectedQAItem.id)}
              style={{ border: "none", background: "transparent", color: isDark ? '#60A5FA' : '#33417A', cursor: "pointer", fontSize: 11, fontWeight: 600 }}
            >
              {revealedNotes[selectedQAItem.id] ? "Hide Notes" : "Reveal Notes"}
            </button>
          )}
        </div>

        {(!practiceMode || revealedNotes[selectedQAItem.id]) ? (
          <div
            className="fg-sans"
            style={{
              fontSize: 14,
              lineHeight: 1.55,
              color: isDark ? '#D1D5DB' : '#3A3D34',
              background: isDark ? '#1F2937' : '#F1EDE0',
              borderRadius: 6,
              padding: "14px 16px"
            }}
          >
            💡 {selectedQAItem.remember}
          </div>
        ) : (
          <div
            onClick={() => toggleRevealNotes(selectedQAItem.id)}
            style={{
              background: isDark ? '#1F2937' : '#E7E2D3',
              border: `1px dashed ${isDark ? '#4B5563' : '#CFC7B0'}`,
              borderRadius: 6,
              padding: "16px",
              textAlign: "center",
              cursor: "pointer",
              color: isDark ? '#9CA3AF' : '#8A8474',
              fontSize: 13
            }}
            className="fg-sans"
          >
            🔒 Coaching tips hidden. Click to reveal!
          </div>
        )}
      </div>

      {/* Context Variance Note */}
      {selectedQAItem.answerMayVary && (
        <div
          className="fg-sans"
          style={{
            fontSize: 13,
            lineHeight: 1.5,
            color: "#92400E",
            background: "#FEF3C7",
            border: "1px solid #FCD34D",
            borderRadius: 6,
            padding: "12px 14px",
            marginBottom: 28
          }}
        >
          <strong>■ Answer May Vary:</strong> {selectedQAItem.answerMayVary}
        </div>
      )}

      {/* PERSONAL STUDY NOTES SECTION */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div className="fg-sans" style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#8A8474', textTransform: "uppercase", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
            <Edit3 size={14} color={isDark ? '#60A5FA' : '#33417A'} /> My Personal Answer & Notes (Saved to Device)
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
          placeholder="Write your customized personal answer response, key talking points, or experience notes here..."
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

      {/* Progress Tracking Bar */}
      <div
        className="fg-sans"
        style={{
          borderTop: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
          paddingTop: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10
        }}
      >
        <span style={{ fontSize: 12.5, fontWeight: 600, color: isDark ? '#9CA3AF' : '#5B5A52' }}>
          Mark Question Progress:
        </span>
        <div style={{ display: "flex", gap: 6 }}>
          <button
            onClick={() => setQuestionProgress(selectedQAItem.id, "unstudied")}
            style={{
              border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
              background: qaStatus[selectedQAItem.id] === "unstudied" ? "#22262B" : (isDark ? '#1F2937' : '#F8F5EE'),
              color: qaStatus[selectedQAItem.id] === "unstudied" ? "#FFF" : (isDark ? '#EDE9DE' : '#22262B'),
              fontSize: 11,
              padding: "4px 8px",
              borderRadius: 3,
              cursor: "pointer"
            }}
          >
            Unstudied
          </button>
          <button
            onClick={() => setQuestionProgress(selectedQAItem.id, "review")}
            style={{
              border: "1px solid #F59E0B",
              background: qaStatus[selectedQAItem.id] === "review" ? "#F59E0B" : "#FEF3C7",
              color: qaStatus[selectedQAItem.id] === "review" ? "#FFF" : "#92400E",
              fontSize: 11,
              padding: "4px 8px",
              borderRadius: 3,
              cursor: "pointer"
            }}
          >
            Review Needed
          </button>
          <button
            onClick={() => setQuestionProgress(selectedQAItem.id, "mastered")}
            style={{
              border: "1px solid #059669",
              background: qaStatus[selectedQAItem.id] === "mastered" ? "#059669" : "#D1FAE5",
              color: qaStatus[selectedQAItem.id] === "mastered" ? "#FFF" : "#065F46",
              fontSize: 11,
              padding: "4px 8px",
              borderRadius: 3,
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            ✓ Mastered
          </button>
        </div>
      </div>
    </div>
  );
}
