import React from 'react';

export function ToolingDetail({ selectedToolingCategory }) {
  if (!selectedToolingCategory) return null;

  return (
    <div style={{ maxWidth: 680 }}>
      <div
        className="fg-sans"
        style={{
          fontSize: 11.5,
          fontWeight: 700,
          color: "#33417A",
          textTransform: "uppercase",
          marginBottom: 8
        }}
      >
        Development Tooling & Environment Reference
      </div>

      <h1 style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
        {selectedToolingCategory.category}
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {selectedToolingCategory.tools.map((t, i) => (
          <div
            key={i}
            className="fg-sans"
            style={{
              background: "#F8F5EE",
              border: "1px solid #E3DECD",
              borderRadius: 6,
              padding: "16px"
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 700, color: "#22262B", marginBottom: 4 }}>
              {t.name}
            </div>
            <div style={{ fontSize: 14, color: "#3A3D34", lineHeight: 1.5, marginBottom: 8 }}>
              {t.desc}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#33417A" }}>
              <strong>Optimal Use Case:</strong> {t.bestFor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
