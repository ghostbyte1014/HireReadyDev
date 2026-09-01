import React, { useState } from 'react';
import { Search, X, Bookmark, CheckCircle2, ChevronRight, ChevronDown, Filter } from 'lucide-react';

export function Sidebar({
  activeMode,
  query,
  setQuery,
  DOMAINS,
  filteredDomains,
  activeDomain,
  setActiveDomain,
  selectedGuideEntry,
  setSelectedTermKey,
  qaCategories,
  filteredQAs,
  activeQACategory,
  setActiveQACategory,
  selectedQAItem,
  setSelectedQAId,
  qaStatus,
  bookmarks,
  isMobileOpen,
  setIsMobileOpen,
  showBookmarkedOnly,
  setShowBookmarkedOnly,
  theme
}) {
  const [expandedCategories, setExpandedCategories] = useState({});

  const isDark = theme === 'dark';

  const toggleCategory = (catName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName]
    }));
  };

  const expandAll = () => {
    const all = {};
    if (activeMode === 'guide') {
      DOMAINS.forEach((d) => (all[d.domain] = true));
    } else {
      qaCategories.forEach((cat) => (all[cat] = true));
    }
    setExpandedCategories(all);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  const handleItemSelect = (action) => {
    action();
    if (setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  const sidebarContent = (
    <aside
      className="fg-sidebar-container"
      style={{
        width: 330,
        minWidth: 260,
        borderRight: `1px solid ${isDark ? '#374151' : '#CFC7B0'}`,
        display: "flex",
        flexDirection: "column",
        background: isDark ? '#1F2937' : '#E7E2D3',
        color: isDark ? '#EDE9DE' : '#22262B',
        height: "100%"
      }}
    >
      {/* Search Header & Global Actions */}
      <div style={{ padding: "14px 14px 10px" }} className="fg-sans">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", flex: 1 }}>
            <Search size={15} color={isDark ? '#9CA3AF' : '#8A8474'} style={{ position: "absolute", left: 10 }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                activeMode === "guide"
                  ? "Search topics & dev tools..."
                  : "Search interview Q&A..."
              }
              style={{
                width: "100%",
                fontSize: 13,
                padding: "8px 10px 8px 30px",
                borderRadius: 4,
                border: `1px solid ${isDark ? '#4B5563' : '#CFC7B0'}`,
                background: isDark ? '#111827' : '#F8F5EE',
                outline: "none",
                color: isDark ? '#EDE9DE' : '#22262B'
              }}
            />
            {query && (
              <X
                size={14}
                color={isDark ? '#9CA3AF' : '#8A8474'}
                onClick={() => setQuery("")}
                style={{ position: "absolute", right: 10, cursor: "pointer" }}
              />
            )}
          </div>
          {setIsMobileOpen && (
            <button
              onClick={() => setIsMobileOpen(false)}
              className="fg-mobile-only"
              style={{
                marginLeft: 8,
                border: "none",
                background: "#22262B",
                color: "#F8F5EE",
                borderRadius: 4,
                padding: 6,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* BOOKMARKED FILTER & EXPAND CONTROLS */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <button
            onClick={() => setShowBookmarkedOnly((prev) => !prev)}
            style={{
              border: `1px solid ${showBookmarkedOnly ? '#D97706' : (isDark ? '#4B5563' : '#CFC7B0')}`,
              background: showBookmarkedOnly ? (isDark ? '#78350F' : '#FEF3C7') : 'transparent',
              color: showBookmarkedOnly ? '#D97706' : (isDark ? '#9CA3AF' : '#5B5A52'),
              fontSize: 10.5,
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: 4,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 4
            }}
          >
            <Bookmark size={11} fill={showBookmarkedOnly ? "#D97706" : "none"} />
            {showBookmarkedOnly ? `Saved (${bookmarks.length})` : `Saved (${bookmarks.length})`}
          </button>

          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={expandAll}
              style={{ border: "none", background: "transparent", fontSize: 10.5, color: isDark ? '#60A5FA' : '#33417A', cursor: "pointer", fontWeight: 600 }}
            >
              Expand All
            </button>
            <span style={{ color: isDark ? '#4B5563' : '#CFC7B0', fontSize: 10 }}>|</span>
            <button
              onClick={collapseAll}
              style={{ border: "none", background: "transparent", fontSize: 10.5, color: isDark ? '#9CA3AF' : '#5B5A52', cursor: "pointer" }}
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Category List */}
      <div className="fg-scroll" style={{ overflowY: "auto", flex: 1, padding: "4px 8px 16px" }}>
        {/* 1. FIELD GUIDE ACCORDION VIEW */}
        {activeMode === "guide" &&
          (filteredDomains.length === 0 ? (
            <div className="fg-sans" style={{ fontSize: 13, color: isDark ? '#9CA3AF' : '#8A8474', padding: "12px 8px" }}>
              {showBookmarkedOnly ? "No bookmarked topics found." : `No topics match "${query}".`}
            </div>
          ) : (
            filteredDomains.map((d) => {
              const isExpanded = query.trim() !== "" || showBookmarkedOnly || expandedCategories[d.domain];

              return (
                <div key={d.domain} style={{ marginBottom: 6, borderRadius: 4, background: isDark ? '#111827' : '#F1EDE0', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}` }}>
                  <button
                    onClick={() => toggleCategory(d.domain)}
                    className="fg-sans"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "8px 10px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      {isExpanded ? <ChevronDown size={15} color={d.color} /> : <ChevronRight size={15} color={d.color} />}
                      <span style={{ fontSize: 12, fontWeight: 700, color: d.color }}>{d.domain}</span>
                    </div>
                    <span style={{ fontSize: 10, background: isDark ? '#374151' : '#CFC7B0', padding: "1px 6px", borderRadius: 10, color: isDark ? '#EDE9DE' : '#22262B', fontWeight: 600 }}>
                      {d.entries.length}
                    </span>
                  </button>

                  {isExpanded && (
                    <div style={{ padding: "0 6px 6px 24px", borderTop: `1px solid ${isDark ? '#1F2937' : '#E3DECD'}` }}>
                      {d.entries.map((e) => {
                        const active = selectedGuideEntry && selectedGuideEntry.term === e.term;
                        const isBookmarked = bookmarks.includes(e.term);
                        return (
                          <button
                            key={e.term}
                            onClick={() => handleItemSelect(() => setSelectedTermKey(e.term))}
                            className={"fg-sans fg-row" + (active ? " fg-row-active" : "")}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                              textAlign: "left",
                              background: "transparent",
                              border: "none",
                              borderRadius: 4,
                              padding: "6px 8px",
                              fontSize: 12.5,
                              lineHeight: 1.3,
                              cursor: "pointer",
                              marginTop: 3,
                              color: active ? '#EDE9DE' : (isDark ? '#D1D5DB' : '#22262B')
                            }}
                          >
                            <span>{e.term}</span>
                            {isBookmarked && <Bookmark size={10} fill="#D97706" color="#D97706" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          ))}

        {/* 2. INTERVIEW Q&A ACCORDION VIEW */}
        {activeMode === "interview" &&
          (qaCategories.length === 0 ? (
            <div className="fg-sans" style={{ fontSize: 13, color: isDark ? '#9CA3AF' : '#8A8474', padding: "12px 8px" }}>
              {showBookmarkedOnly ? "No bookmarked questions found." : `No Q&As match "${query}".`}
            </div>
          ) : (
            qaCategories.map((cat) => {
              const catQAs = filteredQAs.filter((q) => q.category === cat);
              if (catQAs.length === 0) return null;

              const isExpanded = query.trim() !== "" || showBookmarkedOnly || expandedCategories[cat];
              const shortName = cat.replace(/^Category \d+: /, "");

              return (
                <div key={cat} style={{ marginBottom: 6, borderRadius: 4, background: isDark ? '#111827' : '#F1EDE0', border: `1px solid ${isDark ? '#374151' : '#CFC7B0'}` }}>
                  <button
                    onClick={() => toggleCategory(cat)}
                    className="fg-sans"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "8px 10px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      {isExpanded ? <ChevronDown size={15} color={isDark ? '#60A5FA' : '#33417A'} /> : <ChevronRight size={15} color={isDark ? '#60A5FA' : '#33417A'} />}
                      <span style={{ fontSize: 12, fontWeight: 700, color: isDark ? '#60A5FA' : '#33417A' }}>{shortName}</span>
                    </div>
                    <span style={{ fontSize: 10, background: isDark ? '#374151' : '#CFC7B0', padding: "1px 6px", borderRadius: 10, color: isDark ? '#EDE9DE' : '#22262B', fontWeight: 600 }}>
                      {catQAs.length}
                    </span>
                  </button>

                  {isExpanded && (
                    <div style={{ padding: "0 6px 6px 14px", borderTop: `1px solid ${isDark ? '#1F2937' : '#E3DECD'}` }}>
                      {catQAs.map((item) => {
                        const active = selectedQAItem && selectedQAItem.id === item.id;
                        const status = qaStatus[item.id];
                        const isBookmarked = bookmarks.includes(item.id);

                        return (
                          <button
                            key={item.id}
                            onClick={() => handleItemSelect(() => setSelectedQAId(item.id))}
                            className={"fg-sans fg-row" + (active ? " fg-row-active" : "")}
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "left",
                              background: "transparent",
                              border: "none",
                              borderRadius: 4,
                              padding: "7px 8px",
                              fontSize: 12,
                              lineHeight: 1.35,
                              cursor: "pointer",
                              marginTop: 3,
                              color: active ? '#EDE9DE' : (isDark ? '#D1D5DB' : '#22262B')
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                              <span style={{ fontSize: 9.5, fontWeight: 700, opacity: 0.7 }}>{item.subcategory}</span>
                              <div style={{ display: "flex", gap: 4 }}>
                                {isBookmarked && <Bookmark size={10} fill="#D97706" color="#D97706" />}
                                {status === "mastered" && <CheckCircle2 size={10} color="#059669" />}
                              </div>
                            </div>
                            <div style={{ fontWeight: active ? 600 : 500 }}>{item.question}</div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          ))}
      </div>
    </aside>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR VIEW */}
      <div className="fg-desktop-sidebar" style={{ height: "100%" }}>
        {sidebarContent}
      </div>

      {/* MOBILE DRAWER SIDEBAR VIEW */}
      {isMobileOpen && (
        <div
          className="fg-mobile-drawer-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(34, 38, 43, 0.65)",
            backdropFilter: "blur(3px)",
            zIndex: 99999,
            display: "flex"
          }}
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            style={{
              width: "82%",
              maxWidth: 320,
              height: "100%",
              boxShadow: "4px 0 20px rgba(0,0,0,0.3)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
