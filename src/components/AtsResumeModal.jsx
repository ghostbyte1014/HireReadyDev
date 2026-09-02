import React, { useState, useEffect } from 'react';
import { FileText, Download, X, CheckCircle2, AlertCircle, Info, Sparkles, Copy, Printer, UserCheck, Layout, Palette, AlignLeft, AlignCenter, Plus, Trash2, Monitor, Smartphone } from 'lucide-react';

export function AtsResumeModal({ onClose, theme }) {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('template'); // 'template' | 'guidance'
  const [selectedTemplate, setSelectedTemplate] = useState('standard'); // 'standard' | 'modern' | 'harvard' | 'compact' | 'projects'

  // Mobile Device Screen Detection
  const [isMobileScreen, setIsMobileScreen] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false));

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Header Styling Controls
  const [headerAlign, setHeaderAlign] = useState('center'); // 'center' | 'left'
  const [accentColor, setAccentColor] = useState('#000000'); // '#000000' | '#1E3A8A' | '#334155' | '#065F46' | '#7C2D12'
  const [fontFamily, setFontFamily] = useState('Arial, Helvetica, sans-serif'); // Arial | Georgia | Calibri | Times

  // Dynamic Personal Header State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Alex Rivera",
    targetTitle: "Full-Stack Software Engineer",
    summary: "Passionate Full-Stack Software Engineer with 4+ years of experience building high-throughput microservices, responsive web applications, and resilient cloud architectures.",
    email: "alex.rivera@example.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    github: "github.com/alexrivera-dev",
    linkedin: "linkedin.com/in/alexrivera-dev"
  });

  // Dynamic Skills Array State
  const [skills, setSkills] = useState([
    { id: 1, category: "Languages", items: "TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3" },
    { id: 2, category: "Frameworks & Libraries", items: "React, Next.js, FastAPI, Node.js, Express, Tailwind CSS" },
    { id: 3, category: "Cloud & DevOps", items: "Docker, Kubernetes, AWS (S3, Lambda, EC2), GitHub Actions, Terraform" },
    { id: 4, category: "Databases & Caching", items: "PostgreSQL, Redis, MongoDB, SQLAlchemy, Prisma ORM" },
    { id: 5, category: "Tools & Platforms", items: "Git, VS Code, Cursor, Postman, Linux (Bash), Jest, Playwright" }
  ]);

  // Dynamic Experiences Array State
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "TechScale Solutions",
      role: "Senior Full-Stack Engineer",
      dates: "2023 – Present",
      location: "San Francisco, CA",
      bullets: [
        "Engineered scalable REST APIs using FastAPI and PostgreSQL, reducing average P99 endpoint latency by 42%.",
        "Architected event-driven microservices using Apache Kafka and Redis, processing 2M+ daily logs with 99.99% uptime.",
        "Migrated legacy frontend to a responsive React PWA, boosting Lighthouse performance scores from 64 to 98."
      ]
    },
    {
      id: 2,
      company: "CloudByte Systems",
      role: "Software Engineer",
      dates: "2021 – 2023",
      location: "San Jose, CA",
      bullets: [
        "Implemented OAuth 2.0 PKCE authentication flow and JWT session rotation, securing 150k active user accounts.",
        "Optimized PostgreSQL database queries by adding compound B-Tree indexes, cutting slow query logs by 65%.",
        "Automated CI/CD deployment pipelines via GitHub Actions and Docker, reducing deployment times from 45m to 8m."
      ]
    }
  ]);

  // Dynamic Projects Array State
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "HireReady Dev — Offline-First IT Compendium PWA",
      tech: "React, Vite, PWA Service Worker, LocalStorage, Tailwind CSS",
      bullets: [
        "Built an offline-ready developer reference platform serving 16 IT domains, 86+ topics, live sandboxes, and PDF export."
      ]
    },
    {
      id: 2,
      name: "FastAPI Redis Rate Limiter Middleware",
      tech: "Python, FastAPI, Redis Sorted Sets, Docker",
      bullets: [
        "Created a sliding-window rate limiting middleware package handling 10,000+ requests/sec with atomic Redis scripts."
      ]
    }
  ]);

  // Dynamic Education Array State
  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "B.S. in Computer Science",
      school: "University of California, Berkeley",
      year: "2021"
    }
  ]);

  const [certifications, setCertifications] = useState(
    "AWS Certified Solutions Architect – Associate | Certified Kubernetes Application Developer (CKAD)"
  );

  // Handlers for Personal Info
  const handlePersonalChange = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  // Handlers for Skills
  const addSkillCategory = () => {
    setSkills(prev => [...prev, { id: Date.now(), category: "New Skill Category", items: "Item 1, Item 2, Item 3" }]);
  };
  const removeSkillCategory = (id) => {
    setSkills(prev => prev.filter(s => s.id !== id));
  };
  const updateSkillCategory = (id, field, value) => {
    setSkills(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  // Handlers for Experience
  const addExperience = () => {
    setExperiences(prev => [
      ...prev,
      {
        id: Date.now(),
        company: "Company Name",
        role: "Job Title",
        dates: "2024 – Present",
        location: "City, State",
        bullets: ["Accomplished [X], as measured by [Y], by doing [Z]."]
      }
    ]);
  };
  const removeExperience = (id) => {
    setExperiences(prev => prev.filter(e => e.id !== id));
  };
  const updateExperience = (id, field, value) => {
    setExperiences(prev => prev.map(e => e.id === id ? { ...e, [field]: value } : e));
  };
  const addExpBullet = (expId) => {
    setExperiences(prev => prev.map(e => {
      if (e.id === expId) {
        return { ...e, bullets: [...e.bullets, "New quantifiable achievement bullet point."] };
      }
      return e;
    }));
  };
  const removeExpBullet = (expId, bulletIdx) => {
    setExperiences(prev => prev.map(e => {
      if (e.id === expId) {
        return { ...e, bullets: e.bullets.filter((_, idx) => idx !== bulletIdx) };
      }
      return e;
    }));
  };
  const updateExpBullet = (expId, bulletIdx, value) => {
    setExperiences(prev => prev.map(e => {
      if (e.id === expId) {
        const newBullets = [...e.bullets];
        newBullets[bulletIdx] = value;
        return { ...e, bullets: newBullets };
      }
      return e;
    }));
  };

  // Handlers for Projects
  const addProject = () => {
    setProjects(prev => [
      ...prev,
      {
        id: Date.now(),
        name: "Project Name",
        tech: "Tech Stack Used",
        bullets: ["Key feature or architectural achievement."]
      }
    ]);
  };
  const removeProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };
  const updateProject = (id, field, value) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
  };
  const updateProjectBullet = (projId, value) => {
    setProjects(prev => prev.map(p => p.id === projId ? { ...p, bullets: [value] } : p));
  };

  // Handlers for Education
  const addEducation = () => {
    setEducation(prev => [
      ...prev,
      { id: Date.now(), degree: "Degree / Certificate", school: "University / Institution", year: "2024" }
    ]);
  };
  const removeEducation = (id) => {
    setEducation(prev => prev.filter(ed => ed.id !== id));
  };
  const updateEducation = (id, field, value) => {
    setEducation(prev => prev.map(ed => ed.id === id ? { ...ed, [field]: value } : ed));
  };

  const handleDownloadPdf = () => {
    const targetElement = document.getElementById('ats-resume-print-canvas');
    if (!targetElement) return;

    const filename = `${personalInfo.fullName.replace(/[^a-zA-Z0-9]/g, '_')}_ATS_Resume.pdf`;

    if (window.html2pdf) {
      const opt = {
        margin: [0.3, 0.4, 0.3, 0.4],
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      window.html2pdf().set(opt).from(targetElement).save();
    } else {
      window.print();
    }
  };

  // Apply Template Presets
  const applyTemplatePreset = (presetKey) => {
    setSelectedTemplate(presetKey);
    if (presetKey === 'standard') {
      setHeaderAlign('center');
      setAccentColor('#000000');
      setFontFamily('Arial, Helvetica, sans-serif');
    } else if (presetKey === 'modern') {
      setHeaderAlign('left');
      setAccentColor('#1E3A8A');
      setFontFamily('system-ui, -apple-system, sans-serif');
    } else if (presetKey === 'harvard') {
      setHeaderAlign('center');
      setAccentColor('#000000');
      setFontFamily('Georgia, serif');
    } else if (presetKey === 'compact') {
      setHeaderAlign('center');
      setAccentColor('#334155');
      setFontFamily('Calibri, sans-serif');
    } else if (presetKey === 'projects') {
      setHeaderAlign('left');
      setAccentColor('#065F46');
      setFontFamily('Arial, Helvetica, sans-serif');
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
          maxWidth: 1120,
          width: "100%",
          maxHeight: "94vh",
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
            <UserCheck size={22} color="#60A5FA" />
            <div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>
                Single-Column ATS Resume Builder & Masterclass
              </div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>
                HireReady Dev &bull; Optimized for Workday, Greenhouse, Lever, & Taleo Scanners
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {!isMobileScreen && (
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
            )}
            <button
              onClick={onClose}
              style={{ background: "transparent", border: "none", color: "#9CA3AF", cursor: "pointer", padding: 4 }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* MOBILE SCREEN DEVICE RESTRICTION NOTICE */}
        {isMobileScreen ? (
          <div style={{ padding: "36px 24px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ background: isDark ? '#374151' : '#E3DECD', width: 64, height: 64, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Monitor size={32} color={isDark ? '#60A5FA' : '#33417A'} />
            </div>

            <h2 style={{ fontSize: 20, fontWeight: 800, color: isDark ? '#FFF' : '#22262B', marginBottom: 8 }}>
              🖥️ Desktop Device Recommended
            </h2>

            <p style={{ fontSize: 13, color: isDark ? '#D1D5DB' : '#5B5A52', lineHeight: 1.55, maxWidth: 460, marginBottom: 20 }}>
              The Single-Column ATS Resume Builder and Live PDF Canvas require a laptop or desktop screen ($ \ge 768\text{px} $) for side-by-side form editing and 1-to-1 letter page rendering.
            </p>

            <div style={{ background: isDark ? '#111827' : '#FFF', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, borderRadius: 8, padding: 16, maxWidth: 440, width: "100%", textTransform: "none", textAlign: "left", marginBottom: 24, fontSize: 12 }}>
              <ul style={{ paddingLeft: 18, margin: 0, color: isDark ? '#9CA3AF' : '#5B5A52', lineHeight: 1.5 }}>
                <li>Open <strong>hireready-dev.vercel.app</strong> on your laptop or desktop browser.</li>
                <li>Live side-by-side editing canvas requires a wide viewport.</li>
                <li>Ensures standard Letter PDF page boundaries without clipping.</li>
                <li>Your saved study notes and bookmarks remain 100% synced!</li>
              </ul>
            </div>

            <button
              onClick={onClose}
              style={{
                padding: "10px 24px",
                borderRadius: 6,
                background: isDark ? '#374151' : '#22262B',
                color: "#FFF",
                border: "none",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              Got it, Close Notice
            </button>
          </div>
        ) : (
          <>
            {/* TEMPLATE PRESET SELECTOR STRIP */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                background: isDark ? '#111827' : '#E3DECD',
                borderBottom: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
                flexWrap: "wrap"
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, color: isDark ? '#9CA3AF' : '#5B5A52', display: "flex", alignItems: "center", gap: 4 }}>
                <Layout size={14} /> 5 ATS Templates:
              </div>

              <button
                onClick={() => applyTemplatePreset('standard')}
                style={{
                  padding: "4px 10px",
                  borderRadius: 5,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: `1px solid ${selectedTemplate === 'standard' ? '#3B82F6' : (isDark ? '#374151' : '#CFC7B0')}`,
                  background: selectedTemplate === 'standard' ? (isDark ? '#3B82F6' : '#22262B') : (isDark ? '#1F2937' : '#F8F5EE'),
                  color: selectedTemplate === 'standard' ? '#FFF' : (isDark ? '#EDE9DE' : '#22262B')
                }}
              >
                1. Standard Tech
              </button>

              <button
                onClick={() => applyTemplatePreset('modern')}
                style={{
                  padding: "4px 10px",
                  borderRadius: 5,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: `1px solid ${selectedTemplate === 'modern' ? '#3B82F6' : (isDark ? '#374151' : '#CFC7B0')}`,
                  background: selectedTemplate === 'modern' ? (isDark ? '#3B82F6' : '#22262B') : (isDark ? '#1F2937' : '#F8F5EE'),
                  color: selectedTemplate === 'modern' ? '#FFF' : (isDark ? '#EDE9DE' : '#22262B')
                }}
              >
                2. Modern Slate
              </button>

              <button
                onClick={() => applyTemplatePreset('harvard')}
                style={{
                  padding: "4px 10px",
                  borderRadius: 5,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: `1px solid ${selectedTemplate === 'harvard' ? '#3B82F6' : (isDark ? '#374151' : '#CFC7B0')}`,
                  background: selectedTemplate === 'harvard' ? (isDark ? '#3B82F6' : '#22262B') : (isDark ? '#1F2937' : '#F8F5EE'),
                  color: selectedTemplate === 'harvard' ? '#FFF' : (isDark ? '#EDE9DE' : '#22262B')
                }}
              >
                3. Harvard Academic
              </button>

              <button
                onClick={() => applyTemplatePreset('compact')}
                style={{
                  padding: "4px 10px",
                  borderRadius: 5,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: `1px solid ${selectedTemplate === 'compact' ? '#3B82F6' : (isDark ? '#374151' : '#CFC7B0')}`,
                  background: selectedTemplate === 'compact' ? (isDark ? '#3B82F6' : '#22262B') : (isDark ? '#1F2937' : '#F8F5EE'),
                  color: selectedTemplate === 'compact' ? '#FFF' : (isDark ? '#EDE9DE' : '#22262B')
                }}
              >
                4. Compact Dev
              </button>

              <button
                onClick={() => applyTemplatePreset('projects')}
                style={{
                  padding: "4px 10px",
                  borderRadius: 5,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: `1px solid ${selectedTemplate === 'projects' ? '#3B82F6' : (isDark ? '#374151' : '#CFC7B0')}`,
                  background: selectedTemplate === 'projects' ? (isDark ? '#3B82F6' : '#22262B') : (isDark ? '#1F2937' : '#F8F5EE'),
                  color: selectedTemplate === 'projects' ? '#FFF' : (isDark ? '#EDE9DE' : '#22262B')
                }}
              >
                5. Project-First
              </button>

              <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                <button
                  onClick={() => setActiveTab('template')}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 5,
                    border: "none",
                    background: activeTab === 'template' ? (isDark ? '#374151' : '#22262B') : 'transparent',
                    color: activeTab === 'template' ? '#FFF' : (isDark ? '#9CA3AF' : '#5B5A52'),
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: "pointer"
                  }}
                >
                  📄 Builder
                </button>
                <button
                  onClick={() => setActiveTab('guidance')}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 5,
                    border: "none",
                    background: activeTab === 'guidance' ? (isDark ? '#374151' : '#22262B') : 'transparent',
                    color: activeTab === 'guidance' ? '#FFF' : (isDark ? '#9CA3AF' : '#5B5A52'),
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: "pointer"
                  }}
                >
                  🎓 ATS Guidance
                </button>
              </div>
            </div>

            {/* MODAL BODY CONTENT */}
            <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
              {activeTab === 'template' && (
                <div style={{ display: "grid", gridTemplateColumns: "450px 1fr", gap: 20 }}>
                  {/* LEFT COLUMN: EDITABLE DYNAMIC CONTROLS & FORM */}
                  <div className="fg-scroll" style={{ maxHeight: "74vh", overflowY: "auto", paddingRight: 8 }}>
                    {/* HEADER CUSTOMIZATION TOOLBAR */}
                    <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: isDark ? '#60A5FA' : '#33417A', marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                        <Palette size={14} /> Customize Resume Header & Styling
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 8 }}>
                        <div>
                          <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 3, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Header Alignment</label>
                          <div style={{ display: "flex", gap: 4 }}>
                            <button
                              onClick={() => setHeaderAlign('center')}
                              style={{
                                flex: 1,
                                padding: 4,
                                borderRadius: 4,
                                border: "1px solid #D1D5DB",
                                fontSize: 10.5,
                                fontWeight: 700,
                                background: headerAlign === 'center' ? (isDark ? '#374151' : '#22262B') : 'transparent',
                                color: headerAlign === 'center' ? '#FFF' : 'inherit',
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 3
                              }}
                            >
                              <AlignCenter size={12} /> Center
                            </button>
                            <button
                              onClick={() => setHeaderAlign('left')}
                              style={{
                                flex: 1,
                                padding: 4,
                                borderRadius: 4,
                                border: "1px solid #D1D5DB",
                                fontSize: 10.5,
                                fontWeight: 700,
                                background: headerAlign === 'left' ? (isDark ? '#374151' : '#22262B') : 'transparent',
                                color: headerAlign === 'left' ? '#FFF' : 'inherit',
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 3
                              }}
                            >
                              <AlignLeft size={12} /> Left
                            </button>
                          </div>
                        </div>

                        <div>
                          <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 3, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Accent Divider Color</label>
                          <select
                            value={accentColor}
                            onChange={e => setAccentColor(e.target.value)}
                            style={{ width: "100%", padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11, background: isDark ? '#1F2937' : '#FFF', color: isDark ? '#FFF' : '#000' }}
                          >
                            <option value="#000000">Classic Black (#000000)</option>
                            <option value="#1E3A8A">Navy Blue (#1E3A8A)</option>
                            <option value="#334155">Dark Slate (#334155)</option>
                            <option value="#065F46">Forest Green (#065F46)</option>
                            <option value="#7C2D12">Burgundy (#7C2D12)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 3, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Typography Family</label>
                        <select
                          value={fontFamily}
                          onChange={e => setFontFamily(e.target.value)}
                          style={{ width: "100%", padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11, background: isDark ? '#1F2937' : '#FFF', color: isDark ? '#FFF' : '#000' }}
                        >
                          <option value="Arial, Helvetica, sans-serif">Arial / Helvetica (Standard Tech)</option>
                          <option value="system-ui, -apple-system, sans-serif">System Sans-Serif (Modern Clean)</option>
                          <option value="Georgia, serif">Georgia (Harvard Academic Serif)</option>
                          <option value="Calibri, sans-serif">Calibri (Condensed Executive)</option>
                        </select>
                      </div>
                    </div>

                    {/* PERSONAL HEADER INFO */}
                    <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Header & Contact Info</div>
                      <input type="text" value={personalInfo.fullName} onChange={e => handlePersonalChange('fullName', e.target.value)} placeholder="Full Name" style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                      <input type="text" value={personalInfo.targetTitle} onChange={e => handlePersonalChange('targetTitle', e.target.value)} placeholder="Target Role Title" style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                      <textarea value={personalInfo.summary} onChange={e => handlePersonalChange('summary', e.target.value)} placeholder="Professional Summary (Optional 2-sentence summary)" rows={2} style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                      
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
                        <input type="text" value={personalInfo.email} onChange={e => handlePersonalChange('email', e.target.value)} placeholder="Email" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                        <input type="text" value={personalInfo.phone} onChange={e => handlePersonalChange('phone', e.target.value)} placeholder="Phone" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                      </div>
                      <input type="text" value={personalInfo.location} onChange={e => handlePersonalChange('location', e.target.value)} placeholder="City, State / Country" style={{ width: "100%", padding: 6, marginBottom: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                      
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                        <input type="text" value={personalInfo.github} onChange={e => handlePersonalChange('github', e.target.value)} placeholder="GitHub URL" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                        <input type="text" value={personalInfo.linkedin} onChange={e => handlePersonalChange('linkedin', e.target.value)} placeholder="LinkedIn URL" style={{ padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 12 }} />
                      </div>
                    </div>

                    {/* DYNAMIC SKILLS MATRIX SECTION */}
                    <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Technical Skills Keyword Matrix</div>
                        <button
                          onClick={addSkillCategory}
                          style={{ padding: "3px 8px", background: "#059669", color: "#FFF", border: "none", borderRadius: 4, fontSize: 10.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}
                        >
                          <Plus size={12} /> Add Category
                        </button>
                      </div>

                      {skills.map((s) => (
                        <div key={s.id} style={{ borderBottom: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`, paddingBottom: 8, marginBottom: 8 }}>
                          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                            <input
                              type="text"
                              value={s.category}
                              onChange={e => updateSkillCategory(s.id, 'category', e.target.value)}
                              placeholder="Category Title (e.g. Languages)"
                              style={{ flex: 1, padding: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11, fontWeight: "bold" }}
                            />
                            <button
                              onClick={() => removeSkillCategory(s.id)}
                              title="Remove Skill Category"
                              style={{ background: "transparent", border: "none", color: "#DC2626", cursor: "pointer", padding: 2 }}
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                          <input
                            type="text"
                            value={s.items}
                            onChange={e => updateSkillCategory(s.id, 'items', e.target.value)}
                            placeholder="Comma-separated skills (e.g. React, Next.js, FastAPI)"
                            style={{ width: "100%", padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* DYNAMIC WORK EXPERIENCE SECTION */}
                    <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Work Experience Entries</div>
                        <button
                          onClick={addExperience}
                          style={{ padding: "3px 8px", background: "#059669", color: "#FFF", border: "none", borderRadius: 4, fontSize: 10.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}
                        >
                          <Plus size={12} /> Add Experience
                        </button>
                      </div>

                      {experiences.map((exp, expIdx) => (
                        <div key={exp.id} style={{ background: isDark ? '#1F2937' : '#F8F5EE', padding: 10, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 12 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontSize: 11, fontWeight: 800, color: isDark ? '#60A5FA' : '#33417A' }}>Job #{expIdx + 1}</span>
                            <button
                              onClick={() => removeExperience(exp.id)}
                              style={{ background: "transparent", border: "none", color: "#DC2626", cursor: "pointer", padding: 2, fontSize: 10.5, fontWeight: 700, display: "flex", alignItems: "center", gap: 2 }}
                            >
                              <Trash2 size={12} /> Remove Job
                            </button>
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 }}>
                            <input type="text" value={exp.company} onChange={e => updateExperience(exp.id, 'company', e.target.value)} placeholder="Company Name" style={{ padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                            <input type="text" value={exp.role} onChange={e => updateExperience(exp.id, 'role', e.target.value)} placeholder="Role Title" style={{ padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
                            <input type="text" value={exp.dates} onChange={e => updateExperience(exp.id, 'dates', e.target.value)} placeholder="Dates (e.g. 2023 – Present)" style={{ padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                            <input type="text" value={exp.location} onChange={e => updateExperience(exp.id, 'location', e.target.value)} placeholder="Location" style={{ padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                          </div>

                          <div style={{ fontSize: 10.5, fontWeight: 700, marginBottom: 4, color: isDark ? '#9CA3AF' : '#5B5A52', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>Bullet Points (Google X-Y-Z Formula):</span>
                            <button
                              onClick={() => addExpBullet(exp.id)}
                              style={{ background: "transparent", border: "none", color: "#059669", cursor: "pointer", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", gap: 2 }}
                            >
                              <Plus size={11} /> Add Bullet
                            </button>
                          </div>

                          {exp.bullets.map((bText, bIdx) => (
                            <div key={bIdx} style={{ display: "flex", gap: 4, alignItems: "flex-start", marginBottom: 4 }}>
                              <textarea
                                value={bText}
                                onChange={e => updateExpBullet(exp.id, bIdx, e.target.value)}
                                rows={2}
                                style={{ flex: 1, padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 10.5 }}
                              />
                              <button
                                onClick={() => removeExpBullet(exp.id, bIdx)}
                                style={{ background: "transparent", border: "none", color: "#DC2626", cursor: "pointer", padding: 2, marginTop: 4 }}
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* DYNAMIC KEY PROJECTS SECTION */}
                    <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Technical Projects</div>
                        <button
                          onClick={addProject}
                          style={{ padding: "3px 8px", background: "#059669", color: "#FFF", border: "none", borderRadius: 4, fontSize: 10.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}
                        >
                          <Plus size={12} /> Add Project
                        </button>
                      </div>

                      {projects.map((proj, projIdx) => (
                        <div key={proj.id} style={{ background: isDark ? '#1F2937' : '#F8F5EE', padding: 10, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 10 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                            <span style={{ fontSize: 11, fontWeight: 800, color: isDark ? '#60A5FA' : '#33417A' }}>Project #{projIdx + 1}</span>
                            <button
                              onClick={() => removeProject(proj.id)}
                              style={{ background: "transparent", border: "none", color: "#DC2626", cursor: "pointer", padding: 2 }}
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                          <input type="text" value={proj.name} onChange={e => updateProject(proj.id, 'name', e.target.value)} placeholder="Project Name" style={{ width: "100%", padding: 5, marginBottom: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11, fontWeight: "bold" }} />
                          <input type="text" value={proj.tech} onChange={e => updateProject(proj.id, 'tech', e.target.value)} placeholder="Technologies Used" style={{ width: "100%", padding: 5, marginBottom: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                          <textarea value={proj.bullets[0] || ''} onChange={e => updateProjectBullet(proj.id, e.target.value)} placeholder="Project achievement bullet" rows={2} style={{ width: "100%", padding: 5, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 10.5 }} />
                        </div>
                      ))}
                    </div>

                    {/* DYNAMIC EDUCATION & CERTIFICATIONS */}
                    <div style={{ background: isDark ? '#111827' : '#FFF', padding: 12, borderRadius: 6, border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`, marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Education</div>
                        <button
                          onClick={addEducation}
                          style={{ padding: "3px 8px", background: "#059669", color: "#FFF", border: "none", borderRadius: 4, fontSize: 10.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 3 }}
                        >
                          <Plus size={12} /> Add Education
                        </button>
                      </div>

                      {education.map((ed) => (
                        <div key={ed.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 60px 24px", gap: 6, alignItems: "center", marginBottom: 6 }}>
                          <input type="text" value={ed.degree} onChange={e => updateEducation(ed.id, 'degree', e.target.value)} placeholder="Degree" style={{ padding: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                          <input type="text" value={ed.school} onChange={e => updateEducation(ed.id, 'school', e.target.value)} placeholder="University / School" style={{ padding: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                          <input type="text" value={ed.year} onChange={e => updateEducation(ed.id, 'year', e.target.value)} placeholder="Year" style={{ padding: 4, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                          <button onClick={() => removeEducation(ed.id)} style={{ background: "transparent", border: "none", color: "#DC2626", cursor: "pointer" }}><Trash2 size={12} /></button>
                        </div>
                      ))}

                      <div style={{ marginTop: 8 }}>
                        <label style={{ fontSize: 10.5, fontWeight: 700, display: "block", marginBottom: 2, color: isDark ? '#9CA3AF' : '#5B5A52' }}>Certifications</label>
                        <input type="text" value={certifications} onChange={e => setCertifications(e.target.value)} placeholder="AWS Certified, CKAD, CISSP..." style={{ width: "100%", padding: 6, borderRadius: 4, border: "1px solid #D1D5DB", fontSize: 11 }} />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: LIVE 1-COLUMN ATS PRINT CANVAS WITH FORMAL SPACING */}
                  <div className="fg-scroll" style={{ maxHeight: "74vh", overflowY: "auto", background: "#64748B", padding: 20, borderRadius: 6 }}>
                    <div
                      id="ats-resume-print-canvas"
                      style={{
                        background: "#FFFFFF",
                        color: "#111827",
                        padding: selectedTemplate === 'compact' ? "32px 36px" : "40px 44px",
                        borderRadius: 2,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        fontFamily: fontFamily,
                        fontSize: selectedTemplate === 'compact' ? "9.5pt" : "10pt",
                        lineHeight: "1.4",
                        maxWidth: "100%",
                        boxSizing: "border-box"
                      }}
                    >
                      {/* RESUME HEADER (FORMAL CLEAN SPACING) */}
                      <div
                        style={{
                          textAlign: headerAlign,
                          borderBottom: `2px solid ${accentColor}`,
                          paddingBottom: 10,
                          marginBottom: 14
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "20pt",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            margin: 0,
                            letterSpacing: "0.5px",
                            color: accentColor,
                            lineHeight: 1.1
                          }}
                        >
                          {personalInfo.fullName}
                        </h1>

                        <div style={{ fontSize: "11pt", fontWeight: "bold", color: "#374151", marginTop: 4 }}>
                          {personalInfo.targetTitle}
                        </div>

                        {/* CONTACT INFORMATION ROW WITH SEAMLESS FLEX FLOW */}
                        <div
                          style={{
                            fontSize: "9pt",
                            color: "#4B5563",
                            marginTop: 6,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: headerAlign === 'center' ? 'center' : 'flex-start',
                            gap: "6px 12px",
                            lineHeight: 1.3
                          }}
                        >
                          {personalInfo.email && <span>{personalInfo.email}</span>}
                          {personalInfo.email && personalInfo.phone && <span>&bull;</span>}
                          {personalInfo.phone && <span>{personalInfo.phone}</span>}
                          {personalInfo.phone && personalInfo.location && <span>&bull;</span>}
                          {personalInfo.location && <span>{personalInfo.location}</span>}
                        </div>

                        <div
                          style={{
                            fontSize: "8.5pt",
                            color: "#1D4ED8",
                            marginTop: 4,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: headerAlign === 'center' ? 'center' : 'flex-start',
                            gap: "6px 12px"
                          }}
                        >
                          {personalInfo.github && <span>{personalInfo.github}</span>}
                          {personalInfo.github && personalInfo.linkedin && <span>&bull;</span>}
                          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
                        </div>

                        {/* PROFESSIONAL SUMMARY (IF PRESENT) */}
                        {personalInfo.summary && (
                          <div style={{ fontSize: "9pt", fontStyle: "italic", color: "#374151", marginTop: 8, textAlign: headerAlign === 'center' ? 'center' : 'left', lineHeight: 1.35 }}>
                            {personalInfo.summary}
                          </div>
                        )}
                      </div>

                      {/* PROJECT-FIRST TEMPLATE LAYOUT BRANCH */}
                      {selectedTemplate === 'projects' ? (
                        <>
                          {/* TECHNICAL SKILLS MATRIX */}
                          {skills.length > 0 && (
                            <div style={{ marginBottom: 12 }}>
                              <h2 style={{ fontSize: "10.5pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6, color: accentColor, letterSpacing: "0.5px" }}>
                                TECHNICAL SKILLS
                              </h2>
                              <div style={{ fontSize: "9pt", lineHeight: 1.4 }}>
                                {skills.map(s => (
                                  <div key={s.id}><strong>{s.category}:</strong> {s.items}</div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* FEATURED PROJECTS (HIGHLIGHTED AT TOP) */}
                          {projects.length > 0 && (
                            <div style={{ marginBottom: 12 }}>
                              <h2 style={{ fontSize: "10.5pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6, color: accentColor, letterSpacing: "0.5px" }}>
                                KEY TECHNICAL PROJECTS
                              </h2>

                              {projects.map(proj => (
                                <div key={proj.id} style={{ marginBottom: 8 }}>
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontWeight: "bold", fontSize: "9.5pt" }}>
                                    <span>{proj.name}</span>
                                  </div>
                                  <div style={{ fontSize: "8.5pt", fontStyle: "italic", color: "#4B5563", marginBottom: 2 }}>
                                    Technologies: {proj.tech}
                                  </div>
                                  <ul style={{ paddingLeft: 16, marginTop: 2, margin: 0, fontSize: "9pt" }}>
                                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* WORK EXPERIENCE */}
                          {experiences.length > 0 && (
                            <div style={{ marginBottom: 12 }}>
                              <h2 style={{ fontSize: "10.5pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6, color: accentColor, letterSpacing: "0.5px" }}>
                                PROFESSIONAL EXPERIENCE
                              </h2>

                              {experiences.map(exp => (
                                <div key={exp.id} style={{ marginBottom: 8 }}>
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "9.5pt", marginBottom: 3 }}>
                                    <span style={{ fontWeight: "bold" }}>
                                      {exp.role} <span style={{ fontWeight: "normal", color: "#374151" }}>| {exp.company}</span>
                                    </span>
                                    <span style={{ fontSize: "8.5pt", color: "#4B5563", fontWeight: "bold" }}>{exp.dates}</span>
                                  </div>
                                  <ul style={{ paddingLeft: 16, marginTop: 2, margin: 0, fontSize: "9pt", lineHeight: 1.35 }}>
                                    {exp.bullets.map((bText, idx) => (
                                      <li key={idx} style={{ marginBottom: 3 }}>{bText}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {/* STANDARD / MODERN / HARVARD / COMPACT LAYOUT */}
                          {/* TECHNICAL SKILLS MATRIX */}
                          {skills.length > 0 && (
                            <div style={{ marginBottom: 12 }}>
                              <h2 style={{ fontSize: "10.5pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6, color: accentColor, letterSpacing: "0.5px" }}>
                                TECHNICAL SKILLS
                              </h2>
                              <div style={{ fontSize: "9pt", lineHeight: 1.4 }}>
                                {skills.map(s => (
                                  <div key={s.id}><strong>{s.category}:</strong> {s.items}</div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* PROFESSIONAL EXPERIENCE */}
                          {experiences.length > 0 && (
                            <div style={{ marginBottom: 12 }}>
                              <h2 style={{ fontSize: "10.5pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6, color: accentColor, letterSpacing: "0.5px" }}>
                                PROFESSIONAL EXPERIENCE
                              </h2>

                              {experiences.map(exp => (
                                <div key={exp.id} style={{ marginBottom: 8 }}>
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "9.5pt", marginBottom: 3 }}>
                                    <span style={{ fontWeight: "bold" }}>
                                      {exp.role} <span style={{ fontWeight: "normal", color: "#374151" }}>| {exp.company}</span>
                                    </span>
                                    <span style={{ fontSize: "8.5pt", color: "#4B5563", fontWeight: "bold" }}>{exp.dates}</span>
                                  </div>
                                  <ul style={{ paddingLeft: 16, marginTop: 2, margin: 0, fontSize: "9pt", lineHeight: 1.35 }}>
                                    {exp.bullets.map((bText, idx) => (
                                      <li key={idx} style={{ marginBottom: 3 }}>{bText}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* KEY PROJECTS */}
                          {projects.length > 0 && (
                            <div style={{ marginBottom: 12 }}>
                              <h2 style={{ fontSize: "10.5pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6, color: accentColor, letterSpacing: "0.5px" }}>
                                KEY TECHNICAL PROJECTS
                              </h2>

                              {projects.map(proj => (
                                <div key={proj.id} style={{ marginBottom: 6 }}>
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontWeight: "bold", fontSize: "9.5pt" }}>
                                    <span>{proj.name}</span>
                                  </div>
                                  <div style={{ fontSize: "8.5pt", fontStyle: "italic", color: "#4B5563", marginBottom: 2 }}>
                                    Technologies: {proj.tech}
                                  </div>
                                  <ul style={{ paddingLeft: 16, marginTop: 2, margin: 0, fontSize: "9pt" }}>
                                    {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}

                      {/* EDUCATION & CERTIFICATIONS */}
                      {(education.length > 0 || certifications) && (
                        <div>
                          <h2 style={{ fontSize: "10.5pt", fontWeight: "bold", textTransform: "uppercase", borderBottom: `1px solid ${accentColor}`, paddingBottom: 2, marginBottom: 6, color: accentColor, letterSpacing: "0.5px" }}>
                            EDUCATION & CERTIFICATIONS
                          </h2>
                          {education.map(ed => (
                            <div key={ed.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontWeight: "bold", fontSize: "9pt", marginBottom: 2 }}>
                              <span>{ed.degree} — {ed.school}</span>
                              <span>{ed.year}</span>
                            </div>
                          ))}
                          {certifications && (
                            <div style={{ fontSize: "8.5pt", marginTop: 4 }}>
                              <strong>Certifications:</strong> {certifications}
                            </div>
                          )}
                        </div>
                      )}
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
          </>
        )}
      </div>
    </div>
  );
}
