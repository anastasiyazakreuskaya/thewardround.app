// App shell: tab rail, masthead, section router
const SECTIONS = [
  { key: "home",       label: "Home",         num: "I",   digit: "1", accent: "var(--c-home)",       comp: "Home" },
  { key: "workaround", label: "Workaround",   num: "II",  digit: "2", accent: "var(--c-workaround)", comp: "Workaround" },
  { key: "resources",  label: "Resources",    num: "III", digit: "3", accent: "var(--c-resources)",  comp: "Resources" },
  { key: "meetups",    label: "Meetups",      num: "IV",  digit: "4", accent: "var(--c-archive)",    comp: "Meetups" },
];

// Legal page accessible via footer link only
const LEGAL_SECTION = { key: "legal", label: "Legal", num: "V", digit: "5", accent: "var(--ink)", comp: "Legal" };
const ALL_SECTIONS = [...SECTIONS, LEGAL_SECTION];

const App = () => {
  const [section, setSection] = React.useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return ALL_SECTIONS.find(s => s.key === h) ? h : "home";
  });
  const [legalHover, setLegalHover] = React.useState(false);

  React.useEffect(() => {
    window.location.hash = section;
    if (window.parent) {
      const idx = ALL_SECTIONS.findIndex(s => s.key === section);
      try { window.parent.postMessage({ slideIndexChanged: idx }, "*"); } catch (e) {}
    }
  }, [section]);

  React.useEffect(() => {
    const handleHashChange = () => {
      const h = (window.location.hash || "").replace("#", "");
      if (ALL_SECTIONS.find(s => s.key === h)) {
        setSection(h);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goTo = (k) => setSection(k);
  const current = ALL_SECTIONS.find(s => s.key === section);
  const Section = window[current.comp];

  return (
    <div className="app" style={{ "--accent": current.accent }}>
      <header className="masthead">
        <span className="mark">The Ward Round<em>.</em></span>
        <span className="meta">A working group · 2026</span>
      </header>

      <main className="page">
        <Section key={section} goTo={goTo} />
      </main>

      <nav className="rail" aria-label="Sections">
        {SECTIONS.map(s => (
          <button
            key={s.key}
            className={`tab ${section === s.key ? "active" : ""}`}
            style={{ "--accent": s.accent }}
            onClick={() => setSection(s.key)}
            aria-current={section === s.key ? "page" : undefined}
          >
            <span className="num">{s.digit}</span>
            <span className="label">
              <span>{s.label}</span>
            </span>
          </button>
        ))}
      </nav>

      <div className="folio">
        <span className="sig" />
        <span>The Ward Round</span>
        <span>· Filed {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()}</span>
        <span>· {section === "legal" ? "Legal" : `${current.num} of IV`}</span>
        <span>·</span>
        <a 
          href="#legal"
          onMouseEnter={() => setLegalHover(true)}
          onMouseLeave={() => setLegalHover(false)}
          style={{
            color: "inherit",
            font: "inherit",
            fontSize: "inherit",
            textDecoration: "underline",
            opacity: legalHover ? 1 : 0.6,
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            padding: "4px 8px",
            margin: "-4px -8px",
            display: "inline-block",
            pointerEvents: "auto",
          }}
        >
          LEGAL
        </a>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
