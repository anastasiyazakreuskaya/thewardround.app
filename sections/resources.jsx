// Section: Resources
const Resources = () => {
  const items = window.WR_DATA.resources;
  const [idx, setIdx] = React.useState(0);
  const r = items[idx];
  const { FolderCover, Sketch, Stamp } = window.WRPaper;

  return (
    <div className="section" data-screen-label="05 Resources" style={{ "--accent": "var(--c-resources)" }}>
      <FolderCover
        hospital="The Ward Round · Reference"
        volume="Vol. II / 2026"
        sectionRoman="V"
        sectionTitle="The <em>Resource</em>"
        surname="Annotated picks"
        given="One per month"
        unit="WR-R / 36 on file"
        dob={r.month}
        period="Curated by members"
        flagText="Annotation required"
        accent="var(--c-resources)"
        digits={["0", "5"]}
        stampText="Reference"
        meta="Each month a member of the Round annotates one paper, tool, or method. The annotation is the point. We do not link without comment."
      />

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 56, alignItems: "start" }} className="rsc-layout">
        <aside style={{ minWidth: 220, display: "grid", gap: 24 }}>
          <Sketch kind="form" height={170} accent="var(--c-resources)" label={<><span>Annotation slip</span><span>fig. v</span></>} />
          <div>
            <div className="attr" style={{ marginBottom: 14 }}>On file</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--rule-soft)" }}>
              {items.map((it, i) => (
                <li key={i}>
                  <button onClick={() => setIdx(i)}
                    style={{
                      display: "block", width: "100%", textAlign: "left",
                      padding: "14px 0", borderBottom: "1px solid var(--rule-soft)",
                      color: i === idx ? "var(--c-resources)" : "var(--ink-2)",
                      transition: "color 200ms ease",
                    }}>
                    <div className="attr" style={{ marginBottom: 4, color: "inherit" }}>{it.month}</div>
                    <div style={{ fontFamily: "var(--f-display)", fontSize: 16, lineHeight: 1.3, color: i === idx ? "var(--ink)" : "var(--ink-2)" }}>{it.kind}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="rsc-doc" key={r.month}>
          <div style={{ position: "absolute", top: 24, right: 28 }}>
            <Stamp text={`${r.kind} · ${r.month}`} accent="var(--c-resources)" rotate={-5} />
          </div>
          <div className="kicker" style={{ marginBottom: 18 }}>
            <span className="dot" />
            Pick of the month
          </div>
          <h3 style={{ fontFamily: "var(--f-display)", fontWeight: 500, fontSize: 28, lineHeight: 1.18, letterSpacing: "-0.008em", margin: "0 0 18px", color: "var(--ink)", textWrap: "balance" }}>
            {r.title}
          </h3>
          <div style={{ margin: "8px 0 22px" }}>
            <window.WRPhoto kind="notes" height={220} accent="var(--c-resources)" tag="Plate v" caption={`${r.kind} · annotated`} />
          </div>
          <hr className="rule soft" style={{ margin: "0 0 18px" }} />
          <div className="rsc-row"><div className="k">Where</div><div className="v">{r.where}</div></div>
          <div className="rsc-row"><div className="k">Annotated by</div><div className="v">{r.annotator} — <span style={{ color: "var(--ink-3)", fontStyle: "italic" }}>{r.annotatorRole}</span></div></div>
          <div className="rsc-row"><div className="k">For whom</div><div className="v">{r.forWhom}</div></div>
          <div className="rsc-row"><div className="k">Time</div><div className="v">{r.readTime}</div></div>
          <hr className="rule soft" style={{ margin: "26px 0 22px" }} />
          <div className="attr" style={{ marginBottom: 14, color: "var(--c-resources)" }}>Why we are filing it</div>
          <p style={{ fontFamily: "var(--f-body)", fontSize: 18, lineHeight: 1.7, color: "var(--ink)", margin: 0, textWrap: "pretty" }}>{r.why}</p>
        </article>
      </div>

      <style>{`@media (max-width: 880px) { .rsc-layout { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
    </div>
  );
};

window.Resources = Resources;
