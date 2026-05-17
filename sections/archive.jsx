// Section: Speaker Archive
const Archive = () => {
  const speakers = window.WR_DATA.speakers;
  const [view, setView] = React.useState("cards");
  const { FolderCover, Sketch } = window.WRPaper;

  return (
    <div className="section" data-screen-label="04 Archive" style={{ "--accent": "var(--c-archive)" }}>
      <FolderCover
        hospital="The Ward Round · Records"
        volume="Vol. II / 2026"
        sectionRoman="IV"
        sectionTitle="Speaker <em>Archive</em>"
        surname="Recaps"
        given="From the monthly Round"
        unit="WR-S / 18 sessions"
        dob="2024–"
        period="Last Thursday of each month"
        flagText="Open record · No embargo"
        accent="var(--c-archive)"
        digits={["0", "4"]}
        stampText="On file"
        meta="Each month a member of the Round, or an invited speaker, presents work in progress. We keep short recaps so the archive is browseable, not buried."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 40, alignItems: "start", marginBottom: 26 }} className="ar-meta">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
          <span className="attr">Eighteen sessions on file · Showing seven most recent</span>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span className="attr">View</span>
            <ViewToggle value={view} onChange={setView} accent="var(--c-archive)" />
          </div>
        </div>
        <Sketch kind="chart" height={130} accent="var(--c-archive)" label={<><span>Attendance · 24 mo</span><span>fig. iv</span></>} />
      </div>

      {/* Bold pull-quote + photo row */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 36, marginBottom: 56, alignItems: "center" }} className="ar-pull">
        <window.WRPhoto kind="people" height={300} accent="var(--c-archive)" tag="Plate iv" caption="Round 17 · in session" tilt="r" />
        <p className="marquee" style={{ fontSize: "clamp(30px, 3.4vw, 48px)" }}>
          A room of <em>twelve</em>,<br/>once a month,<br/>since 2024.
        </p>
      </div>
      <style>{`@media (max-width: 880px) { .ar-pull { grid-template-columns: 1fr !important; } }`}</style>

      {view === "cards" ? (
        <div className="tile-grid">
          {speakers.map((s, i) => (
            <article key={i} className="doc filed-paper" style={{ minHeight: 240, cursor: "default" }}>
              <span className="clip" />
              <div className="doc-meta">
                <span className="doc-id">No. {String(speakers.length - i).padStart(2, "0")}</span>
                <span className="doc-date">{s.date}</span>
              </div>
              <h4 style={{ fontSize: 22 }}>{s.topic}</h4>
              <p>{s.summary}</p>
              <div className="doc-foot" style={{ flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
                <div>
                  <div style={{ fontFamily: "var(--f-display)", fontSize: 16, color: "var(--ink)", marginBottom: 2 }}>{s.name}</div>
                  <div className="attr" style={{ fontStyle: "normal" }}>{s.affiliation}</div>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div>
          {speakers.map((s, i) => (
            <div key={i} className="index-strip">
              <div className="ix-num">{String(speakers.length - i).padStart(3, "0")}</div>
              <div>
                <div className="ix-title">{s.topic}</div>
                <div className="ix-sub">{s.name} — {s.affiliation}</div>
              </div>
              <div className="ix-meta">{s.date}</div>
            </div>
          ))}
        </div>
      )}

      <hr className="rule soft" style={{ margin: "48px 0 24px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
        <span className="attr">Eighteen sessions on file</span>
        <a href="#" className="link-muted" style={{ "--accent": "var(--c-archive)" }}>View full archive →</a>
      </div>

      <style>{`@media (max-width: 880px) { .ar-meta { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};

const ViewToggle = ({ value, onChange, accent }) => (
  <div style={{ display: "inline-flex", border: "1px solid var(--rule)" }}>
    {[["cards", "Cards"], ["index", "Index"]].map(([k, l]) => (
      <button key={k} onClick={() => onChange(k)}
        style={{
          padding: "6px 14px",
          fontFamily: "var(--f-label)", fontSize: 10,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: value === k ? "var(--paper)" : "var(--ink-3)",
          background: value === k ? accent : "transparent",
          transition: "background 200ms ease, color 200ms ease",
          borderRight: k === "cards" ? "1px solid var(--rule)" : 0,
        }}>{l}</button>
    ))}
  </div>
);

window.Archive = Archive;
