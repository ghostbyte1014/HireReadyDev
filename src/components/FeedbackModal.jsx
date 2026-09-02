import React, { useState } from 'react';
import { Send, X, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

export function FeedbackModal({ onClose, theme }) {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const isDark = theme === 'dark';

  // WEB3FORMS ACCESS KEY
  const ACCESS_KEY = "f75234fa-7659-4666-b357-60a921c93659";

  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Check 1-week cooldown in LocalStorage to preserve Web3Forms quota
    const lastSent = localStorage.getItem('hireready_last_feedback_time');
    if (lastSent) {
      const elapsed = Date.now() - parseInt(lastSent, 10);
      if (elapsed < ONE_WEEK_MS) {
        const remainingMs = ONE_WEEK_MS - elapsed;
        const remainingDays = Math.ceil(remainingMs / (24 * 60 * 60 * 1000));
        setStatus('error');
        setErrorMessage(`To preserve feedback quota, submissions are limited to 1 per week. You can submit again in ${remainingDays} day${remainingDays > 1 ? 's' : ''}.`);
        return;
      }
    }

    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New User Feedback - HireReady Dev",
          message: message,
          replyto: email.trim() ? email.trim() : "anonymous@hireready.dev",
          from_name: "HireReady Dev Reader"
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        localStorage.setItem('hireready_last_feedback_time', Date.now().toString());
        setTimeout(() => {
          onClose();
        }, 2200);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Error submitting feedback. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection.');
    }
  };

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
          maxWidth: 480,
          width: "100%",
          padding: 24,
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
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

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ background: isDark ? '#374151' : '#33417A', color: "#FFF", padding: 10, borderRadius: "50%" }}>
            <MessageSquare size={20} />
          </div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: isDark ? '#FFF' : '#22262B' }}>
              Send Feedback to Author
            </h2>
            <div style={{ fontSize: 11, color: isDark ? '#9CA3AF' : '#5B5A52' }}>
              Created by <strong>ghostbyte</strong> &bull; <em>1 submission per week per user</em>
            </div>
          </div>
        </div>

        {status === 'success' ? (
          <div style={{ textAlign: "center", padding: "20px 10px" }}>
            <CheckCircle2 size={42} color="#059669" style={{ margin: "0 auto 10px" }} />
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#059669", marginBottom: 4 }}>
              Feedback Sent Successfully!
            </h3>
            <p style={{ fontSize: 12, color: isDark ? '#9CA3AF' : '#5B5A52' }}>
              Thank you for helping improve HireReady Dev.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 4, color: isDark ? '#D1D5DB' : '#374151' }}>
                Your Message / Suggestion *
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts, report a broken link, or suggest a new IT topic or interview question..."
                rows={4}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 6,
                  border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
                  background: isDark ? '#111827' : '#FFF',
                  color: isDark ? '#EDE9DE' : '#22262B',
                  fontSize: 13,
                  fontFamily: "inherit",
                  outline: "none",
                  resize: "vertical"
                }}
              />
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 4, color: isDark ? '#D1D5DB' : '#374151' }}>
                Reply Email <span style={{ fontWeight: 400, opacity: 0.7 }}>(Optional - Leave blank to stay 100% Anonymous)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: 6,
                  border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
                  background: isDark ? '#111827' : '#FFF',
                  color: isDark ? '#EDE9DE' : '#22262B',
                  fontSize: 13,
                  outline: "none"
                }}
              />
            </div>

            {status === 'error' && (
              <div style={{ fontSize: 12, color: "#DC2626", background: "#FEF2F2", padding: "8px 12px", borderRadius: 5, marginBottom: 14, display: "flex", alignItems: "center", gap: 6, border: "1px solid #FCA5A5" }}>
                <AlertCircle size={15} color="#DC2626" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 6,
                background: "#059669",
                color: "#FFF",
                border: "none",
                fontSize: 13,
                fontWeight: 700,
                cursor: status === 'sending' ? 'wait' : 'pointer',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6
              }}
            >
              <Send size={15} /> {status === 'sending' ? 'Sending Message...' : 'Send Anonymous Feedback'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
