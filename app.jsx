// App shell: tab rail, masthead, section router
const SECTIONS = [
  { key: "home",       label: "Home",         num: "I",   digit: "1", accent: "var(--c-home)",       comp: "Home" },
  { key: "workaround", label: "Workaround",   num: "II",  digit: "2", accent: "var(--c-workaround)", comp: "Workaround" },
  { key: "essays",     label: "Essays",       num: "III", digit: "3", accent: "var(--c-essays)",     comp: "Essays" },
  { key: "archive",    label: "Archive",      num: "IV",  digit: "4", accent: "var(--c-archive)",    comp: "Archive" },
  { key: "resources",  label: "Resources",    num: "V",   digit: "5", accent: "var(--c-resources)",  comp: "Resources" },
  { key: "join",       label: "Join",         num: "VI",  digit: "6", accent: "var(--c-join)",       comp: "Join" },
];

const App = () => {
  const [section, setSection] = React.useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return SECTIONS.find(s => s.key === h) ? h : "home";
  });

  React.useEffect(() => {
    window.location.hash = section;
    if (window.parent) {
      const idx = SECTIONS.findIndex(s => s.key === section);
      try { window.parent.postMessage({ slideIndexChanged: idx }, "*"); } catch (e) {}
    }
  }, [section]);

  const goTo = (k) => setSection(k);
  const current = SECTIONS.find(s => s.key === section);
  const Section = window[current.comp];

  return (
    <div className="app" style={{ "--accent": current.accent }}>
      <header className="masthead">
        <span className="mark">The Ward Round<em>.</em></span>
        <span className="meta">A working group · Vol. ii · 2026</span>
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
        <span>· {current.num} of VI</span>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
