// Section: The Workaround
const Workaround = () => {
  const items = window.WR_DATA.workarounds;
  const [open, setOpen] = React.useState(null);
  const { FolderCover, Sketch, Stamp } = window.WRPaper;

  return (
    <div className="section" data-screen-label="02 Workaround" style={{ "--accent": "var(--c-workaround)" }}>
      <FolderCover
        hospital="The Ward Round · Filed Notes"
        sectionRoman="II"
        sectionTitle="The <em>Workaround</em>"
        surname="Anonymous field notes from clinical HCI"
        flagText="Anonymous · No names recorded"
        accent="var(--c-workaround)"
        digits={["0", "2"]}
        stampText="Anonymous · Filed"
        meta="A real problem a member hit doing HCI research in a clinical setting, and how they navigated it. Attributed by role and context only — never by name."
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 40, alignItems: "start", marginBottom: 26 }} className="wa-meta">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
          <span className="attr">{items.length} entries on file · Most recent first</span>
          <span className="attr" style={{ color: "var(--c-workaround)" }}>Click any sheet to read in full →</span>
        </div>
        <Sketch kind="form" height={120} accent="var(--c-workaround)" label={<><span>Form D — sample</span><span>fig. ii</span></>} />
      </div>

      {/* Bold pull-quote + photo */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginBottom: 56, alignItems: "center" }} className="wa-pull">
        <p className="marquee" style={{ fontSize: "clamp(34px, 4vw, 56px)" }}>
          The thing that <em>worked</em><br/>was almost never<br/>the thing in the protocol.
        </p>
        <window.WRPhoto kind="corridor" height={300} accent="var(--c-workaround)" tag="Plate ii" caption="Day shift, ward 4" tilt="l" />
      </div>
      <style>{`@media (max-width: 880px) { .wa-pull { grid-template-columns: 1fr !important; } }`}</style>



      {/* CARDS TEMPORARILY HIDDEN - UNCOMMENT TO SHOW AGAIN
      <div className="tile-grid">
        {items.map((it, i) => (
          <article key={it.id}
            className={`doc filed-paper ${i % 3 === 0 ? "tilt-l" : i % 3 === 1 ? "" : "tilt-r"}`}
            onClick={() => setOpen(i)}
            style={{ minHeight: 260 }}
          >
            <span className="clip" />
            <div className="doc-meta">
              <span className="doc-id">{it.id}</span>
              <span className="doc-date">{it.date}</span>
            </div>
            <h4>{it.title}</h4>
            <p>{it.excerpt}</p>
            <div className="doc-foot">
              <span className="attr" style={{ fontStyle: "normal" }}>{it.attribution}</span>
              <span className="attr" style={{ color: "var(--accent)" }}>Read →</span>
            </div>
          </article>
        ))}
      </div>
      */}

      {/* Submit a workaround */}
      <div style={{ maxWidth: 720, margin: "80px auto 80px", padding: "32px", background: "color-mix(in oklch, var(--c-workaround) 8%, transparent)", border: "2px solid var(--c-workaround)" }}>
        <div className="kicker" style={{ marginBottom: 16 }}>
          <span className="dot" /><span>Share your workaround</span>
        </div>
        <h3 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>
          Have a story from the field?
        </h3>
        <p className="body-text" style={{ fontSize: 16, marginBottom: 20, color: "var(--ink)" }}>
          We're looking for real problems you've encountered doing HCI research in clinical settings — and how you navigated them. 200-300 words, attributed by role only (e.g., "A PhD student in a UK hospital"). Anonymous submissions welcome.
        </p>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: "var(--f-label)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 8 }}>
            What to include:
          </div>
          <ul style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)", paddingLeft: 20 }}>
            <li>The problem you faced</li>
            <li>What you tried that didn't work</li>
            <li>What you changed or learned</li>
          </ul>
        </div>
        <a 
          href="mailto:thewardround.hci@gmail.com?subject=Workaround Submission&body=Title:%0D%0A%0D%0AAttribution (e.g., 'A PhD student at...'):%0D%0A%0D%0AThe problem:%0D%0A%0D%0AWhat I tried:%0D%0A%0D%0AWhat worked:" 
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "var(--c-workaround)",
            color: "var(--paper)",
            fontFamily: "var(--f-label)",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "none",
            cursor: "pointer",
            transition: "transform 150ms ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          Submit via Email →
        </a>
      </div>

      {open !== null && (
        <WorkaroundSheet item={items[open]} onClose={() => setOpen(null)} />
      )}

      <style>{`
        @media (max-width: 880px) { .wa-meta { grid-template-columns: 1fr !important; } }
        .filed-paper.tilt-l:hover, .filed-paper.tilt-r:hover, .filed-paper:hover { transform: translateY(-3px) rotate(0deg) !important; }
      `}</style>
    </div>
  );
};

const WorkaroundSheet = ({ item, onClose }) => {
  const { Stamp } = window.WRPaper;
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()} style={{ "--accent": "var(--c-workaround)" }}>
        <button className="close" onClick={onClose}>Close ×</button>
        <div style={{ position: "absolute", top: 22, left: 24 }}>
          <Stamp text={`Filed · ${item.id}`} accent="var(--c-workaround)" rotate={-4} />
        </div>
        <div className="kicker" style={{ marginBottom: 22, marginTop: 38 }}>
          <span className="dot" />
          The Workaround · {item.id} · {item.date}
        </div>
        <h3 style={{ fontFamily: "var(--f-display)", fontSize: 38, fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.012em", margin: "0 0 14px", textWrap: "balance" }}>
          {item.title}
        </h3>
        <div className="attr" style={{ marginBottom: 28 }}>{item.attribution}</div>
        <hr className="rule soft" style={{ marginBottom: 24 }} />
        {item.body.map((p, i) => (
          <p key={i} style={{ fontSize: 17.5, lineHeight: 1.7, marginBottom: 18, color: "var(--ink)" }}>{p}</p>
        ))}
        <hr className="rule soft" style={{ margin: "28px 0 18px" }} />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {item.tags.map(t => <span key={t} className="pill">{t}</span>)}
        </div>
      </div>
    </div>
  );
};

window.Workaround = Workaround;
