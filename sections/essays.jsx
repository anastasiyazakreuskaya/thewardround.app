// Section: Invited Essays
const Essays = () => {
  const essays = window.WR_DATA.essays;
  const [idx, setIdx] = React.useState(0);
  const e = essays[idx];
  const { FolderCover, Sketch } = window.WRPaper;

  const renderTitle = (s) => {
    const parts = s.split(/(\*[^*]+\*)/g);
    return parts.map((p, i) =>
      p.startsWith("*") && p.endsWith("*")
        ? <em key={i}>{p.slice(1, -1)}</em>
        : <span key={i}>{p}</span>
    );
  };

  return (
    <div className="section" data-screen-label="03 Essays" style={{ "--accent": "var(--c-essays)" }}>
      <FolderCover
        hospital="The Ward Round · Editorial"
        volume="Vol. II / 2026"
        sectionRoman="III"
        sectionTitle="Invited <em>Essays</em>"
        surname="Long-form"
        given="Signed, by invitation"
        unit={e.id}
        dob={e.issue}
        period={`Read time · ${e.readTime}`}
        flagText="Signed · Editorial review"
        accent="var(--c-essays)"
        digits={["0", "3"]}
        stampText="Editorial"
        meta="Longer, signed pieces. Published once or twice a year. We commission slowly."
      />

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 36 }}>
        <span className="attr">Showing {String(idx + 1).padStart(2, "0")} of {String(essays.length).padStart(2, "0")} on file</span>
        <div className="paginator">
          <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} aria-label="Newer">←</button>
          <span>Issue {String(idx + 1).padStart(2, "0")}</span>
          <button onClick={() => setIdx(Math.min(essays.length - 1, idx + 1))} disabled={idx === essays.length - 1} aria-label="Older">→</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 56, alignItems: "start" }} className="essay-layout">
        <aside style={{ position: "sticky", top: 110, alignSelf: "start", display: "grid", gap: 22 }}>
          <Sketch kind="envelope" height={150} accent="var(--c-essays)" label={<><span>Manuscript · {e.id}</span><span>fig. iii</span></>} />
          <div>
            <div className="attr" style={{ marginBottom: 6 }}>By</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 19, color: "var(--ink)", lineHeight: 1.25, marginBottom: 18 }}>{e.author}</div>
            <div className="attr" style={{ marginBottom: 6 }}>Read time</div>
            <div style={{ fontFamily: "var(--f-body)", fontSize: 15, color: "var(--ink-2)", marginBottom: 22 }}>{e.readTime}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--ink-3)", fontStyle: "italic" }}>{e.bio}</div>
          </div>
        </aside>

        <article className="essay" key={e.id}>
          <div className="kicker" style={{ marginBottom: 22 }}>
            <span className="dot" />
            <span>{e.id} · {e.issue}</span>
          </div>
          <h2>{renderTitle(e.title)}</h2>
          <p className="standfirst">{e.standfirst}</p>
          <div style={{ margin: "30px 0 30px" }}>
            <window.WRPhoto kind="desk" height={260} accent="var(--c-essays)" tag="Plate iii" caption="Author's desk · Manchester" tilt="r" />
          </div>
          {e.body.map((p, i) => (
            <p key={i}>
              {p}
              {i === e.body.length - 1 ? <span className="endmark" /> : null}
            </p>
          ))}

          <div style={{ margin: "36px 0 8px" }}>
            <Sketch kind="rules" height={200} accent="var(--c-essays)" label={<><span>From the author's notebook</span><span>plate i</span></>} />
          </div>

          <hr className="rule soft" style={{ margin: "32px 0 22px" }} />
          <div className="attr">— {e.author}, {e.issue}</div>
        </article>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .essay-layout { grid-template-columns: 1fr !important; gap: 28px !important; }
          .essay-layout aside { position: static !important; }
        }
      `}</style>
    </div>
  );
};

window.Essays = Essays;
