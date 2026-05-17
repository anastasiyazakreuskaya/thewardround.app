// Section: Join — open + apply, with newsletter as primary
const Join = () => {
  const [stage, setStage] = React.useState("intro");
  const [form, setForm] = React.useState({
    name: "", role: "", affiliation: "", country: "",
    work: "", referral: "", career: "", agree: false,
  });
  const [news, setNews] = React.useState({ email: "", role: "", subscribed: false });
  const { FolderCover, Sketch, Stamp, Tickbox } = window.WRPaper;
  const Photo = window.WRPhoto;

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  const valid = form.name.trim() && form.role.trim() && form.affiliation.trim() && form.work.trim().length > 30 && form.agree;

  return (
    <div className="section" data-screen-label="06 Join" style={{ "--accent": "var(--c-join)" }}>
      <FolderCover
        hospital="The Ward Round · Membership"
        volume="Vol. II / 2026"
        sectionRoman="VI"
        sectionTitle="Join the <em>Round</em>"
        surname="HCI in clinical settings"
        given="PhDs, postdocs, practitioners"
        unit="Open · Reviewed monthly"
        dob="No deadline"
        period="Newsletter or membership"
        flagText="Open to PhDs in HCI & health"
        accent="var(--c-join)"
        digits={["0", "6"]}
        stampText="Open · Apply"
        meta="Open to PhDs in HCI and health, postdocs, and clinical practitioners doing HCI work. Subscribe for the monthly newsletter, or apply for full membership and the monthly meetup."
      />

      {stage === "intro" && (
        <>
          {/* Two big paths, side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 56 }} className="paths">
            {/* Newsletter — primary, color block */}
            <div className="block" style={{ "--accent": "var(--c-join)" }}>
              <span className="num-mark">A</span>
              <div className="kicker" style={{ marginBottom: 16 }}>
                <span className="dot" />Path A — Newsletter
              </div>
              <h3 className="h-section" style={{ fontSize: "clamp(34px, 4vw, 52px)", marginBottom: 16 }}>
                The <em>monthly</em> letter.
              </h3>
              <p className="body-text" style={{ fontSize: 17, marginBottom: 22 }}>
                One short letter per month. The new Workaround, the speaker recap, the resource on file. Open to anyone doing HCI in or near a clinical setting.
              </p>
              {!news.subscribed ? (
                <form onSubmit={(e) => { e.preventDefault(); if (news.email.includes("@")) setNews({ ...news, subscribed: true }); }}
                  style={{ display: "grid", gap: 14 }}>
                  <input type="email" required value={news.email} onChange={(e) => setNews({ ...news, email: e.target.value })}
                    placeholder="your@email"
                    style={{
                      fontFamily: "var(--f-body)", fontSize: 17,
                      background: "transparent", border: 0,
                      borderBottom: "1px solid color-mix(in oklch, var(--paper) 60%, transparent)",
                      color: "var(--paper)", padding: "10px 0", outline: "none",
                    }} />
                  <select value={news.role} onChange={(e) => setNews({ ...news, role: e.target.value })}
                    style={{
                      fontFamily: "var(--f-body)", fontSize: 16,
                      background: "transparent", border: 0,
                      borderBottom: "1px solid color-mix(in oklch, var(--paper) 60%, transparent)",
                      color: "var(--paper)", padding: "10px 0", outline: "none",
                    }}>
                    <option value="" style={{ color: "var(--ink)" }}>You are a…</option>
                    <option style={{ color: "var(--ink)" }}>PhD student</option>
                    <option style={{ color: "var(--ink)" }}>Postdoc</option>
                    <option style={{ color: "var(--ink)" }}>Practitioner / clinician</option>
                    <option style={{ color: "var(--ink)" }}>Faculty</option>
                    <option style={{ color: "var(--ink)" }}>Curious / other</option>
                  </select>
                  <button type="submit" style={{
                    marginTop: 8,
                    fontFamily: "var(--f-display)", fontSize: 18, fontWeight: 500,
                    padding: "14px 22px",
                    background: "var(--paper)", color: "var(--c-join)",
                    border: 0, cursor: "pointer", justifySelf: "start",
                  }}>Subscribe — it's free →</button>
                </form>
              ) : (
                <div style={{ padding: "16px 0", display: "flex", alignItems: "center", gap: 14 }}>
                  <Stamp text="Subscribed" rotate={-5} accent="var(--paper)" />
                  <span style={{ color: "var(--paper)", fontSize: 15 }}>Filed. The next letter goes out 5 May.</span>
                </div>
              )}
            </div>

            {/* Membership — secondary, paper card */}
            <div className="filed-paper" style={{ "--accent": "var(--c-join)", padding: "30px 32px 32px", minHeight: 380 }}>
              <div className="corner-stamp"><Stamp text="Cycle 26.II" accent="var(--c-join)" rotate={-6} /></div>
              <div className="kicker" style={{ marginBottom: 16 }}>
                <span className="dot" />Path B — Membership
              </div>
              <h3 className="h-section" style={{ fontSize: "clamp(34px, 4vw, 52px)", marginBottom: 16, color: "var(--ink)" }}>
                Apply to <em style={{ color: "var(--c-join)" }}>the Round</em>.
              </h3>
              <p className="body-text" style={{ fontSize: 17, marginBottom: 22 }}>
                Members come to the monthly meetup, share their own Workaround, and shape the conversation. Applications are reviewed monthly — not gated, just considered.
              </p>
              <div style={{ display: "grid", gap: 8, marginBottom: 22 }}>
                <Tickbox checked label="Monthly meetup · last Thursday" />
                <Tickbox checked label="Newsletter · always included" />
                <Tickbox checked label="Author at least one Workaround" />
                <Tickbox checked label="Open to PhDs in HCI & health, postdocs, practitioners" />
              </div>
              <button className="cta" onClick={() => setStage("form")} style={{ "--accent": "var(--c-join)" }}>
                <span>Begin application</span>
                <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* Photo + small note */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }} className="join-photo-row">
            <Photo kind="people" height={260} accent="var(--c-join)" tag="Plate vi" caption="Round 17 · Toronto" />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 8px" }}>
              <div className="kicker" style={{ marginBottom: 14 }}>
                <span className="dot" />Who reads this letter
              </div>
              <p className="marquee" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                PhDs, postdocs, and the clinicians who <em>build with us</em>.
              </p>
              <p className="body-text" style={{ marginTop: 14, fontSize: 16 }}>
                You will not be the only one of you in the room. That, mostly, is the point.
              </p>
            </div>
          </div>

          <style>{`
            @media (max-width: 880px) {
              .paths { grid-template-columns: 1fr !important; }
              .join-photo-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </>
      )}

      {stage === "form" && (
        <form onSubmit={(e) => { e.preventDefault(); if (valid) setStage("submitted"); }}
          style={{ maxWidth: 760 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>
            <span className="dot" />Membership application — Cycle 26.II
          </div>
          <h3 className="h-section" style={{ fontSize: "clamp(36px, 4vw, 52px)", marginBottom: 32 }}>
            Tell us <em>who you are</em>.
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 24 }} className="form-grid">
            <FormField label="Full name" value={form.name} onChange={update("name")} required />
            <FormField label="Career stage" value={form.career} onChange={update("career")} hint="PhD year, postdoc, practitioner …" />
            <FormField label="Role" value={form.role} onChange={update("role")} required hint="e.g. PhD student, research fellow" />
            <FormField label="Affiliation" value={form.affiliation} onChange={update("affiliation")} required hint="University, hospital, partnership" />
            <FormField label="Country / region" value={form.country} onChange={update("country")} />
            <FormField label="How did you find us?" value={form.referral} onChange={update("referral")} />
          </div>

          <div className="form-field" style={{ marginBottom: 28 }}>
            <label className="field-label">In one paragraph, what are you working on?</label>
            <textarea value={form.work} onChange={update("work")} rows={5} placeholder="The clinical setting, the question you are sitting with, what would be useful about being in the Round."></textarea>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="help">{form.work.trim().length < 30 ? "Aim for at least a few sentences." : "Thank you."}</span>
              <span className="help">{form.work.length} characters</span>
            </div>
          </div>

          <hr className="rule soft" style={{ margin: "12px 0 24px" }} />

          <label style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 28, cursor: "pointer" }}>
            <input type="checkbox" checked={form.agree} onChange={update("agree")} style={{ marginTop: 4, accentColor: "var(--c-join)" }} />
            <span style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>
              I will turn up to a meeting within my first quarter, or write to say why I cannot.
            </span>
          </label>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <button className="btn" type="submit" disabled={!valid} style={{ "--accent": "var(--c-join)" }}>Submit application</button>
            <button className="btn ghost" type="button" onClick={() => setStage("intro")}>Back</button>
            <span className="attr" style={{ marginLeft: "auto" }}>{valid ? "Ready to file" : "Required fields incomplete"}</span>
          </div>
          <style>{`@media (max-width: 720px) { .form-grid { grid-template-columns: 1fr !important; gap: 22px !important; } }`}</style>
        </form>
      )}

      {stage === "submitted" && (
        <div style={{ maxWidth: 660, position: "relative" }}>
          <div style={{ position: "absolute", top: -10, right: 0 }}>
            <Stamp text="Filed · Cycle 26.II" accent="var(--c-join)" rotate={-7} />
          </div>
          <div className="kicker" style={{ marginBottom: 18 }}>
            <span className="dot" />Filed · Reference {`WR-${Math.floor(Math.random() * 9000) + 1000}`}
          </div>
          <h3 className="h-section" style={{ fontSize: "clamp(40px, 4.6vw, 60px)", marginBottom: 22 }}>
            Thank you, <em style={{ color: "var(--c-join)" }}>{form.name.split(" ")[0] || "friend"}</em>.
          </h3>
          <p className="body-text" style={{ fontSize: 18 }}>
            Your application has been filed. We review applications within four weeks and write back to everyone, accepted or not. In the meantime: the newsletter goes out the first Tuesday of every month — you will be on it.
          </p>
          <hr className="rule soft" style={{ margin: "32px 0 18px" }} />
          <button className="link-muted" onClick={() => { setStage("intro"); setForm({ name: "", role: "", affiliation: "", country: "", work: "", referral: "", career: "", agree: false }); }}>
            ← Return to the start
          </button>
        </div>
      )}
    </div>
  );
};

const FormField = ({ label, value, onChange, required, hint }) => (
  <div className="form-field">
    <label className="field-label">{label}{required ? " *" : ""}</label>
    <input type="text" value={value} onChange={onChange} />
    {hint && <span className="help">{hint}</span>}
  </div>
);

window.Join = Join;
