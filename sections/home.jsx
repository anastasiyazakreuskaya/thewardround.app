// Section: Home — bolder, photo-led
const Home = ({ goTo }) => {
  const { FolderCover, Sketch, Tickbox, Stamp } = window.WRPaper;
  const Photo = window.WRPhoto;

  return (
    <div className="section" data-screen-label="01 Home" style={{ "--accent": "var(--c-home)" }}>
      <FolderCover
        hospital="The Ward Round · Working Group"
        volume="Vol. II / 2026"
        sectionRoman="I"
        sectionTitle="Notes from the <em>ward</em>, filed by the people who took them."
        surname="The Ward Round"
        given="A working group"
        unit="WR–2026–I"
        dob="14 May 2026"
        period="Cycle 26.II"
        flagText="Open · 86 members"
        accent="var(--c-home)"
        digits={["0", "1"]}
        stampText="Open Group"
        meta="A working group for early-career HCI researchers working in clinical settings."
      />

      {/* Photo-led split */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "start", marginBottom: 64 }} className="home-split">
        <div>
          <div className="kicker" style={{ marginBottom: 20 }}>
            <span className="dot" /><span>About — filed under §1.1</span>
          </div>
          <p className="marquee" style={{ marginBottom: 32 }}>
            For the people doing HCI <em>inside</em> hospitals — and finding it lonely.
          </p>
          <p className="body-text" style={{ fontSize: 18, color: "var(--ink)" }}>
            The Ward Round brings together PhD students, postdocs, and practitioners who design, study, and build with clinicians. We meet monthly, share research, and make sure no one has to figure it out alone.
          </p>
          <div style={{ marginTop: 24, display: "grid", gap: 10 }}>
            <Tickbox checked label="Monthly meetup — last Thursday" />
            <Tickbox checked label="Quarterly long-read · Invited Essay" />
            <Tickbox checked label="Monthly newsletter — open to all" />
            <Tickbox label="Hallway track — soon" />
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
            <button className="cta" onClick={() => goTo("join")}>
              <span>Subscribe & apply</span>
              <span className="arrow">→</span>
            </button>
            <span className="attr">Next round · Thu 14 May · 17:00 BST</span>
          </div>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          <Photo kind="ward" height={320} accent="var(--c-home)" tag="Plate i" caption="Ward, dawn" tilt="r" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Photo kind="notes" height={140} accent="var(--c-workaround)" tag="ii" caption="Notebook" />
            <Photo kind="window" height={140} accent="var(--c-archive)" tag="iii" caption="Day room" />
          </div>
        </div>
      </div>

      {/* Big color-block stat */}
      <div className="block" style={{ "--accent": "var(--c-home)", marginBottom: 56 }}>
        <span className="num-mark">86</span>
        <div className="kicker" style={{ marginBottom: 18 }}>
          <span className="dot" />The Round, in numbers
        </div>
        <h3 className="h-section" style={{ marginBottom: 24 }}>
          <em>Eighty-six</em> members.<br/>
          Nine countries.<br/>
          One conversation.
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28, marginTop: 28 }} className="block-stats">
          {[
            ["86", "Members across 9 countries"],
            ["32", "Workarounds on file"],
            ["18", "Speaker sessions since 2024"],
            ["1×", "Newsletter — monthly"],
          ].map(([n, l]) => (
            <div key={l} style={{ borderTop: "1px solid color-mix(in oklch, var(--paper) 40%, transparent)", paddingTop: 16 }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 44, fontWeight: 600, lineHeight: 1, color: "var(--paper)" }}>{n}</div>
              <div className="attr" style={{ marginTop: 8, color: "color-mix(in oklch, var(--paper) 75%, transparent)" }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 720px) { .block-stats { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
      </div>

      <hr className="rule" style={{ margin: "0 0 36px" }} />

      <div className="kicker" style={{ marginBottom: 22 }}>
        <span className="dot" />Filed in this folder
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderTop: "1px solid var(--rule)" }} className="sections-summary">
        <SummaryCard digits={["0","2"]} accent="var(--c-workaround)" label="The Workaround"
          count="32 entries on file" desc="Anonymous field notes — a real problem, and how someone navigated it."
          onClick={() => goTo("workaround")} />
        <SummaryCard digits={["0","3"]} accent="var(--c-essays)" label="Invited Essays"
          count="2 issues · Spring 2026" desc="Longer, signed pieces. Published twice a year."
          onClick={() => goTo("essays")} />
        <SummaryCard digits={["0","4"]} accent="var(--c-archive)" label="Speaker Archive"
          count="Eighteen sessions on file" desc="Recaps from monthly meetups since 2024."
          onClick={() => goTo("archive")} />
      </div>

      <style>{`
        @media (max-width: 980px) { .home-split { grid-template-columns: 1fr !important; } }
        @media (max-width: 880px) { .sections-summary { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
};

const SummaryCard = ({ accent, label, count, desc, onClick, digits }) => {
  const { ChartTab } = window.WRPaper;
  return (
    <button onClick={onClick}
      className="summary-card"
      style={{
        "--accent": accent,
        textAlign: "left",
        padding: "26px 28px 24px",
        borderRight: "1px solid var(--rule-soft)",
        borderBottom: "1px solid var(--rule-soft)",
        transition: "background 240ms ease",
        display: "flex", flexDirection: "column", gap: 12, minHeight: 230,
        background: "transparent",
      }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <span className="attr" style={{ color: accent, fontSize: 11 }}>{label}</span>
        <span style={{ display: "inline-flex" }}>
          {digits.map((d, i) => <ChartTab key={i} digit={d} accent={accent} height={28} width={20} />)}
        </span>
      </div>
      <div style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 500, lineHeight: 1.18, letterSpacing: "-0.01em", color: "var(--ink)", marginTop: 4 }}>
        {desc}
      </div>
      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: 14, borderTop: "1px dashed var(--rule-soft)" }}>
        <span className="attr">{count}</span>
        <span className="attr" style={{ color: accent }}>Open →</span>
      </div>
    </button>
  );
};

window.Home = Home;
