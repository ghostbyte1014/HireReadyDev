import React, { useState } from 'react';
import { FileText, Download, X, CheckCircle2, AlertCircle, Info, Sparkles, Copy, Printer } from 'lucide-react';

export function AtsResumeModal({ onClose, theme }) {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('template'); // 'template' | 'guidance' | 'samples'

  // Interactive State for Resume Fields
  const [resumeData, setResumeData] = useState({
    fullName: "Alex Rivera",
    targetTitle: "Full-Stack Software Engineer",
    email: "alex.rivera@example.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    github: "github.com/alexrivera-dev",
    linkedin: "linkedin.com/in/alexrivera-dev",
    
    // Skills Matrix
    skillsLanguages: "TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3",
    skillsFrameworks: "React, Next.js, FastAPI, Node.js, Express, Tailwind CSS",
    skillsCloudDevOps: "Docker, Kubernetes, AWS (S3, Lambda, EC2), GitHub Actions, Terraform",
    skillsDatabases: "PostgreSQL, Redis, MongoDB, SQLAlchemy, Prisma ORM",
    skillsTools: "Git, VS Code, Cursor, Postman, Linux (Bash), Jest, Playwright",

    // Work Experience
    exp1Company: "TechScale Solutions",
    exp1Role: "Senior Full-Stack Engineer",
    exp1Dates: "2023 – Present",
    exp1Location: "San Francisco, CA",
    exp1Bullet1: "Engineered scalable REST APIs using FastAPI and PostgreSQL, reducing average P99 endpoint latency by 42%.",
    exp1Bullet2: "Architected event-driven microservices using Apache Kafka and Redis, processing 2M+ daily transaction logs with 99.99% uptime.",
    exp1Bullet3: "Migrated legacy 2-column frontend to a responsive React single-page PWA, boosting Lighthouse performance scores from 64 to 98.",

    exp2Company: "CloudByte Systems",
    exp2Role: "Software Engineer",
    exp2Dates: "2021 – 2023",
    exp2Location: "San Jose, CA",
    exp2Bullet1: "Implemented OAuth 2.0 PKCE authentication flow and JWT session rotation, securing 150k active user accounts against XSS/CSRF.",
    exp2Bullet2: "Optimized PostgreSQL database queries by adding multi-column B-Tree indexes, cutting slow query logs by 65%.",
    exp2Bullet3: "Automated CI/CD deployment pipelines via GitHub Actions and Docker, reducing build-to-production deployment times from 45m to 8m.",

    // Projects
    proj1Name: "HireReady Dev — Offline-First IT Compendium PWA",
    proj1Tech: "React, Vite, PWA Service Worker, LocalStorage, Tailwind CSS",
    proj1Bullet: "Built a 100% offline-ready developer reference platform serving 16 IT domains, 80+ topics, interactive live code sandboxes, and PDF export.",

    // Education & Certifications
    eduDegree: "B.S. in Computer Science",
    eduSchool: "University of California, Berkeley",
    eduYear: "2021",
    certifications: "AWS Certified Solutions Architect – Associate | Certified Kubernetes Application Developer (CKAD)"
  });

  const handleInputChange = (field, value) => {
    setResumeData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownloadPdf = () => {
    const targetElement = document.getElementById('ats-resume-print-area');
    if (!targetElement) return;

    const filename = `${resumeData.fullName.replace(/[^a-zA-Z0-9]/g, '_')}_ATS_Resume.pdf`;

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

  return (
    <div
      className="fg-sans fg-no-print"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        padding: 16
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: isDark ? '#1F2937' : '#F8F5EE',
          border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
          color: isDark ? '#EDE9DE' : '#22262B',
          borderRadius: 10,
          maxWidth: 960,
          width: "100%",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
          overflow: "hidden"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
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
            <FileText size={20} color="#60A5FA" />
            <div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>
                Single-Column ATS Resume Builder & Masterclass
              </div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                HireReady Dev &bull; Optimized for Workday, Greenhouse, Lever, & Taleo ATS Scanners
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={handleDownloadPdf}
              style={{
                padding: "7px 14px",
                borderRadius: 6,
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
              <Download size={14} /> Export ATS PDF
            </button>
            <button
              onClick={onClose}
              style={{ background: "transparent", border: "none", color: "#9CA3AF", cursor: "pointer", padding: 4 }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* TAB NAVIGATION BAR */}
        <div
          style={{
            display: "flex",
            gap: 4,
            padding: "8px 16px",
            background: isDark ? '#111827' : '#E3DECD',
            borderBottom: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`
          }}
        >
          <button
            onClick={() => setActiveTab('template')}
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "none",
              background: activeTab === 'template' ? (isDark ? '#3B82F6' : '#22262B') : 'transparent',
              color: activeTab === 'template' ? '#FFF' : (isDark ? '#9CA3AF' : '#5B5A52'),
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            📄 Interactive 1-Column Builder
          </button>
          <button
            onClick={() => setActiveTab('guidance')}
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "none",
              background: activeTab === 'guidance' ? (isDark ? '#3B82F6' : '#22262B') : 'transparent',
              color: activeTab === 'guidance' ? '#FFF' : (isDark ? '#9CA3AF' : '#5B5A52'),
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            🎓 Why 1-Column Beats 2-Column (Educational Notes)
          </button>
        </div>

        {/* MODAL BODY CONTENT */}
        <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
          {/* TAB 1: INTERACTIVE BUILDER + PREVIEW */}
          {activeTab === 'template' && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {/* LEFT COLUMN: EDITABLE INPUT FORM */}
              <div className="fg-scroll" style={{ maxHeight: "72vh", overflowY: "auto", paddingRight: 8 }}>
                <h3 style={{ fontSize: 13, textTransform: "uppercase", fontWeight: 800, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 12 }}>
                  ✏️ Edit Your Resume Details
                </h3>

                {/* Personal Information */}
                <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Header & Contact Info</div>
                  <input type="text" value={resumeData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} placeholder="Full Name" style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                  <input type="text" value={resumeData.targetTitle} onChange={e => handleInputChange('targetTitle', e.target.value)} placeholder="Target Role Title" style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
                    <input type="text" value={resumeData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="Email" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                    <input type="text" value={resumeData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="Phone" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                    <input type="text" value={resumeData.github} onChange={e => handleInputChange('github', e.target.value)} placeholder="GitHub URL" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                    <input type="text" value={resumeData.linkedin} onChange={e => handleInputChange('linkedin', e.target.value)} placeholder="LinkedIn URL" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                  </div>
                </div>

                {/* Technical Skills Matrix */}
                <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Technical Skills Keywords Matrix</div>
                  <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 2 }}>Languages</label>
                  <input type="text" value={resumeData.skillsLanguages} onChange={e => handleInputChange('skillsLanguages', e.target.value)} style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11.5 }} />
                  <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 2 }}>Frameworks & Libraries</label>
                  <input type="text" value={resumeData.skillsFrameworks} onChange={e => handleInputChange('skillsFrameworks', e.target.value)} style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11.5 }} />
                  <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 2 }}>Cloud & DevOps</label>
                  <input type="text" value={resumeData.skillsCloudDevOps} onChange={e => handleInputChange('skillsCloudDevOps', e.target.value)} style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11.5 }} />
                  <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 2 }}>Databases & Caching</label>
                  <input type="text" value={resumeData.skillsDatabases} onChange={e => handleInputChange('skillsDatabases', e.target.value)} style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11.5 }} />
                </div>

                {/* Work Experience Bullets */}
                <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Experience #1 (Google X-Y-Z Formula Bullets)</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
                    <input type="text" value={resumeData.exp1Company} onChange={e => handleInputChange('exp1Company', e.target.value)} placeholder="Company" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                    <input type="text" value={resumeData.exp1Role} onChange={e => handleInputChange('exp1Role', e.target.value)} placeholder="Role Title" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                  </div>
                  <textarea value={resumeData.exp1Bullet1} onChange={e => handleInputChange('exp1Bullet1', e.target.value)} rows={2} style={{ width: "100%", padding: 6, marginBottom: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                  <textarea value={resumeData.exp1Bullet2} onChange={e => handleInputChange('exp1Bullet2', e.target.value)} rows={2} style={{ width: "100%", padding: 6, marginBottom: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                  <textarea value={resumeData.exp1Bullet3} onChange={e => handleInputChange('exp1Bullet3', e.target.value)} rows={2} style={{ width: "100%", padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                </div>
              </div>

              {/* RIGHT COLUMN: LIVE 1-COLUMN ATS PRINT CANVAS */}
              <div className="fg-scroll" style={{ maxHeight: "72vh", overflowY: "auto", background: "#787C80", padding: 16, borderRadius: 6 }}>
                <div
                  id="ats-resume-print-area"
                  style={{
                    background: "#FFFFFF",
                    color: "#000000",
                    padding: "36px 40px",
                    borderRadius: 4,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "10.5pt",
                    lineHeight: "1.4",
                    maxWidth: "100%"
                  }}
                >
                  {/* RESUME HEADER */}
                  <div style={{ textAlign: "center", borderBottom: "1.5px solid #000", paddingBottom: 8, marginBottom: 14 }}>
                    <h1 style={{ fontSize: "18pt", fontWeight: "bold", textTransform: "uppercase", margin: 0, letterSpacing: "0.5px", color: "#000" }}>
                      {resumeData.fullName}
                    </h1>
                    <div style={{ fontSize: "10.5pt", fontWeight: "bold", color: "#333", marginTop: 2 }}>
                      {resumeData.targetTitle}
                    </div>
                    <div style={{ fontSize: "9pt", color: "#444", marginTop: 4 }}>
                      {resumeData.email} | {resumeData.phone} | {resumeData.location}
                    </div>
                    <div style={{ fontSize: "8.5pt", color: "#1D4ED8", marginTop: 2 }}>
                      {resumeData.github} | {resumeData.linkedin}
                    </div>
                  </div>

                  {/* TECHNICAL SKILLS MATRIX */}
                  <div style={{ marginBottom: 14 }}>
                    <h2 style={{ fontSize: "11pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: 2, marginBottom: 6, color: "#000" }}>
                      TECHNICAL SKILLS
                    </h2>
                    <div style={{ fontSize: "9.5pt" }}>
                      <div><strong>Languages:</strong> {resumeData.skillsLanguages}</div>
                      <div><strong>Frameworks & Libraries:</strong> {resumeData.skillsFrameworks}</div>
                      <div><strong>Cloud & DevOps:</strong> {resumeData.skillsCloudDevOps}</div>
                      <div><strong>Databases & Caching:</strong> {resumeData.skillsDatabases}</div>
                      <div><strong>Tools & Platforms:</strong> {resumeData.skillsTools}</div>
                    </div>
                  </div>

                  {/* WORK EXPERIENCE */}
                  <div style={{ marginBottom: 14 }}>
                    <h2 style={{ fontSize: "11pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: 2, marginBottom: 6, color: "#000" }}>
                      PROFESSIONAL EXPERIENCE
                    </h2>

                    {/* Job 1 */}
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "10pt" }}>
                        <span>{resumeData.exp1Role} — {resumeData.exp1Company}</span>
                        <span>{resumeData.exp1Dates}</span>
                      </div>
                      <ul style={{ paddingLeft: 18, marginTop: 4, margin: 0, fontSize: "9.5pt" }}>
                        <li style={{ marginBottom: 3 }}>{resumeData.exp1Bullet1}</li>
                        <li style={{ marginBottom: 3 }}>{resumeData.exp1Bullet2}</li>
                        <li style={{ marginBottom: 3 }}>{resumeData.exp1Bullet3}</li>
                      </ul>
                    </div>

                    {/* Job 2 */}
                    <div style={{ marginBottom: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "10pt" }}>
                        <span>{resumeData.exp2Role} — {resumeData.exp2Company}</span>
                        <span>{resumeData.exp2Dates}</span>
                      </div>
                      <ul style={{ paddingLeft: 18, marginTop: 4, margin: 0, fontSize: "9.5pt" }}>
                        <li style={{ marginBottom: 3 }}>{resumeData.exp2Bullet1}</li>
                        <li style={{ marginBottom: 3 }}>{resumeData.exp2Bullet2}</li>
                        <li style={{ marginBottom: 3 }}>{resumeData.exp2Bullet3}</li>
                      </ul>
                    </div>
                  </div>

                  {/* KEY PROJECTS */}
                  <div style={{ marginBottom: 14 }}>
                    <h2 style={{ fontSize: "11pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: 2, marginBottom: 6, color: "#000" }}>
                      KEY TECHNICAL PROJECTS
                    </h2>
                    <div style={{ fontWeight: "bold", fontSize: "10pt" }}>
                      {resumeData.proj1Name}
                    </div>
                    <div style={{ fontSize: "8.5pt", fontStyle: "italic", color: "#333", marginBottom: 3 }}>
                      Technologies: {resumeData.proj1Tech}
                    </div>
                    <ul style={{ paddingLeft: 18, marginTop: 2, margin: 0, fontSize: "9.5pt" }}>
                      <li>{resumeData.proj1Bullet}</li>
                    </ul>
                  </div>

                  {/* EDUCATION & CERTIFICATIONS */}
                  <div>
                    <h2 style={{ fontSize: "11pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: "1px solid #000", paddingBottom: 2, marginBottom: 6, color: "#000" }}>
                      EDUCATION & CERTIFICATIONS
                    </h2>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "9.5pt" }}>
                      <span>{resumeData.eduDegree} — {resumeData.eduSchool}</span>
                      <span>{resumeData.eduYear}</span>
                    </div>
                    <div style={{ fontSize: "9pt", marginTop: 4 }}>
                      <strong>Certifications:</strong> {resumeData.certifications}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EDUCATIONAL NOTES ON WHY 1-COLUMN BEATS 2-COLUMN */}
          {activeTab === 'guidance' && (
            <div style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
              <div style={{ background: isDark ? '#111827' : '#FEF3C7', border: `1px solid ${isDark ? '#374151' : '#FCD34D'}`, borderRadius: 8, padding: 18, marginBottom: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: isDark ? '#FDE047' : '#92400E', marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
                  🎓 Why Single-Column Resumes Beat 2-Column Templates
                </h3>
                <p style={{ fontSize: 13, color: isDark ? '#D1D5DB' : '#78350F' }}>
                  Many job seekers pick fancy 2-column graphics templates thinking they look stylish. However, modern automated Applicant Tracking Systems (ATS) reject or mangle 80%+ of 2-column resumes!
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                {/* 1-COLUMN PROS */}
                <div style={{ background: isDark ? '#064E3B' : '#ECFDF5', border: `1px solid ${isDark ? '#047857' : '#A7F3D0'}`, borderRadius: 8, padding: 16 }}>
                  <div style={{ fontWeight: 800, color: isDark ? '#A7F3D0' : '#065F46', marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                    <CheckCircle2 size={18} /> ✅ Single-Column Layout (ATS Safe)
                  </div>
                  <ul style={{ fontSize: 12, paddingLeft: 16, color: isDark ? '#D1D5DB' : '#047857', lineHeight: 1.5 }}>
                    <li style={{ marginBottom: 6 }}><strong>100% Linear ATS Parsing:</strong> Reads top-to-bottom without line jumping.</li>
                    <li style={{ marginBottom: 6 }}><strong>Standardized Headers:</strong> Scanners cleanly capture Skills, Experience, and Education.</li>
                    <li style={{ marginBottom: 6 }}><strong>6-Second Recruiter Skim:</strong> Human eyes scan down the left margin effortlessly.</li>
                    <li><strong>99%+ Keyword Extraction:</strong> Captures all programming languages & framework keywords cleanly.</li>
                  </ul>
                </div>

                {/* 2-COLUMN CONS */}
                <div style={{ background: isDark ? '#7F1D1D' : '#FEF2F2', border: `1px solid ${isDark ? '#991B1B' : '#FCA5A5'}`, borderRadius: 8, padding: 16 }}>
                  <div style={{ fontWeight: 800, color: isDark ? '#FCA5A5' : '#991B1B', marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                    <AlertCircle size={18} /> ❌ 2-Column / Graphics Templates (High Risk)
                  </div>
                  <ul style={{ fontSize: 12, paddingLeft: 16, color: isDark ? '#D1D5DB' : '#991B1B', lineHeight: 1.5 }}>
                    <li style={{ marginBottom: 6 }}><strong>Column Merging Collisions:</strong> ATS reads across columns horizontally, mixing skill lists into company names.</li>
                    <li style={{ marginBottom: 6 }}><strong>Progress Bar Rejection:</strong> Skill bars ("Python 80%") cannot be parsed by text engines.</li>
                    <li style={{ marginBottom: 6 }}><strong>Text Box Isolation:</strong> Information in side column text boxes is completely ignored by Taleo & Workday.</li>
                    <li><strong>Font Icon Corruptions:</strong> Custom icon fonts render as unreadable garbage characters.</li>
                  </ul>
                </div>
              </div>

              {/* GOOGLE X-Y-Z FORMULA GUIDANCE */}
              <div style={{ background: isDark ? '#111827' : '#FFF', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, borderRadius: 8, padding: 18 }}>
                <h4 style={{ fontSize: 14, fontWeight: 800, color: isDark ? '#60A5FA' : '#33417A', marginBottom: 6 }}>
                  🚀 Google's X-Y-Z Formula for Winning Experience Bullets
                </h4>
                <p style={{ fontSize: 12.5, color: isDark ? '#D1D5DB' : '#374151', marginBottom: 10 }}>
                  Never write passive job descriptions like <em>"Responsible for writing code"</em>. Instead, use Google's proven formula:
                </p>
                <div style={{ background: isDark ? '#1F2937' : '#F8F5EE', padding: 12, borderRadius: 6, fontSize: 13, fontWeight: 700, borderLeft: "4px solid #059669", color: isDark ? '#FFF' : '#22262B' }}>
                  "Accomplished [X], as measured by [Y], by doing [Z]"
                </div>
                <div style={{ fontSize: 12, marginTop: 10, color: isDark ? '#9CA3AF' : '#5B5A52' }}>
                  <strong>Example:</strong> <em>"Reduced database endpoint latency by 42% (Y) across 2M daily users (X) by implementing Redis Cache-Aside pattern (Z)."</em>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
