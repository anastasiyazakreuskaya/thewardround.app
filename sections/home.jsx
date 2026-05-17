// Section: Home — with visual depth and photos
const Home = ({ goTo }) => {
  const { FolderCover, Tickbox } = window.WRPaper;
  const Photo = window.WRPhoto;

  return (
    <div className="section" data-screen-label="01 Home" style={{ "--accent": "var(--c-home)" }}>
      <FolderCover
        hospital="The Ward Round · Working Group"
        sectionRoman="I"
        sectionTitle="Notes from the <em>ward</em>, filed by the people who took them."
        surname="A working group for early-career HCI researchers in clinical settings"
        flagText="Open"
        accent="var(--c-home)"
        digits={["0", "1"]}
        stampText="Open Group"
        meta="PhD students, postdocs, and practitioners who design, study, and build with clinicians."
      />

      {/* Photo-led split */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "start", marginBottom: 64 }} className="home-split">
        <div>
          <div className="kicker" style={{ marginBottom: 20 }}>
            <span className="dot" /><span>About</span>
          </div>
          <p className="marquee" style={{ marginBottom: 32 }}>
            For the people doing HCI <em>inside</em> hospitals — and finding it lonely.
          </p>
          <p className="body-text" style={{ fontSize: 18, color: "var(--ink)" }}>
            The Ward Round brings together PhD students, postdocs, and practitioners who design, study, and build with clinicians. We meet monthly, share research, and make sure no one has to figure it out alone.
          </p>
          <div style={{ marginTop: 24, display: "grid", gap: 10 }}>
            <Tickbox checked label="Monthly meetup — last Thursday" />
            <Tickbox checked label="Anonymous workarounds on file" />
            <Tickbox checked label="Monthly newsletter — open to all" />
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

      {/* Signup Form */}
      <div style={{ maxWidth: 600, margin: "0 auto 64px" }}>
        <div className="kicker" style={{ marginBottom: 20, textAlign: "center" }}>
          <span className="dot" /><span>Join the conversation</span>
        </div>
        <iframe 
          width="100%" 
          height="505" 
          src="https://06d7f9e8.sibforms.com/serve/MUIFAEpFh4ZIXQB4Al3S3OCFS2-GwCH6bVLBaK9w5z3GO2w-F-htO9t2kFLRja49LWuei-ZuqW1BxSYwzDJXuBfqLpCeoljVBk_vTKGD1W92SMCjyt8iElxsCLcjTiP3eTtTYSdettmrd02tr0OVWcIG1LxZTs5KXqJcF4RDHFJiqAQDM2NduQIm_whc15p39_3DitckJBRBOcjCbA==" 
          frameBorder="0" 
          scrolling="auto" 
          allowFullScreen 
          style={{ display: "block", margin: "0 auto", maxWidth: "100%", border: "1px solid var(--rule)" }}
        />
      </div>

      <hr className="rule" style={{ margin: "56px 0 36px" }} />

      {/* Navigate to sections - with visual depth */}
      <div className="kicker" style={{ marginBottom: 22 }}>
        <span className="dot" />Explore
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)" }} className="sections-summary">
        <NavCard 
          digits={["0","2"]} 
          accent="var(--c-workaround)" 
          label="The Workaround"
          count="Field notes on file" 
          desc="Anonymous stories — a real problem, and how someone navigated it."
          onClick={() => goTo("workaround")} 
        />
        <NavCard 
          digits={["0","3"]} 
          accent="var(--c-resources)" 
          label="Resources" 
          count="Tools & readings" 
          desc="Papers, methods, and tools for doing HCI in clinical settings."
          onClick={() => goTo("resources")} 
        />
        <NavCard 
          digits={["0","4"]} 
          accent="var(--c-archive)" 
          label="Meetups"
          count="Next session & recaps" 
          desc="Monthly meetups — last Thursday. Next session and past recaps."
          onClick={() => goTo("meetups")} 
        />
      </div>

      <style>{`
        @media (max-width: 980px) { 
          .home-split { grid-template-columns: 1fr !important; } 
        }
        @media (max-width: 880px) { 
          .sections-summary { grid-template-columns: 1fr !important; } 
        }
      `}</style>
    </div>
  );
};

const NavCard = ({ accent, label, count, desc, onClick, digits }) => {
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
        display: "flex", 
        flexDirection: "column", 
        gap: 12, 
        minHeight: 230,
        background: "transparent",
        cursor: "pointer",
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
