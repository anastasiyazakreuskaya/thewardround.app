// Section: Meetups — first meeting info
const Meetups = () => {
  const { FolderCover, Tickbox } = window.WRPaper;
  
  // Speaker info - edit this for each meetup
  const speaker = {
    name: "Your Speaker Name",
    affiliation: "Their Institution",
    topic: "Talk Title Here",
    bio: "Brief bio about the speaker and what they'll cover...",
  };

  return (
    <div className="section" data-screen-label="04 Meetups" style={{ "--accent": "var(--c-archive)" }}>
      <FolderCover
        hospital="The Ward Round · Meetups"
        sectionRoman="IV"
        sectionTitle="Monthly <em>Meetups</em>"
        surname="Last Thursday of each month · 17:00 BST"
        flagText="Open"
        accent="var(--c-archive)"
        digits={["0", "4"]}
        stampText="Monthly"
        meta="Members share work in progress, and we make sure no one has to figure it out alone."
      />

      {/* First Meeting - May 28 */}
      <div style={{ maxWidth: 800, margin: "0 auto 56px" }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          <span className="dot" /><span>First meetup — May 28, 2026</span>
        </div>
        <div className="block" style={{ "--accent": "var(--c-archive)", marginBottom: 0 }}>
          <div style={{ fontFamily: "var(--f-display)", fontSize: 32, fontWeight: 500, lineHeight: 1.2, color: "var(--paper)", marginBottom: 16 }}>
            Wednesday, 28 May 2026<br/>
            <span style={{ fontSize: 24, opacity: 0.85 }}>17:00–18:30 BST</span>
          </div>
          
          {/* Speaker Info */}
          <div style={{ marginBottom: 24, padding: "20px", background: "color-mix(in oklch, var(--paper) 15%, transparent)", borderLeft: "3px solid var(--paper)" }}>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 500, color: "var(--paper)", marginBottom: 8 }}>
              {speaker.topic}
            </div>
            <div style={{ fontSize: 16, color: "color-mix(in oklch, var(--paper) 85%, transparent)", marginBottom: 12 }}>
              {speaker.name} — {speaker.affiliation}
            </div>
            <p className="body-text" style={{ fontSize: 15, color: "color-mix(in oklch, var(--paper) 90%, transparent)", margin: 0 }}>
              {speaker.bio}
            </p>
          </div>
          
          <div style={{ marginBottom: 24 }}>
            <div className="kicker" style={{ marginBottom: 12, color: "color-mix(in oklch, var(--paper) 75%, transparent)" }}>
              <span className="dot" style={{ background: "var(--paper)" }} /><span>Agenda</span>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              <Tickbox checked label="Welcome & introductions" light />
              <Tickbox checked label="Featured presentation (30 min)" light />
              <Tickbox checked label="Open discussion & questions" light />
              <Tickbox label="Optional: Share your current challenges (5 min each)" light />
            </div>
          </div>

          <div className="attr" style={{ color: "color-mix(in oklch, var(--paper) 75%, transparent)" }}>
            Link shared with members via email
          </div>
        </div>
      </div>

      {/* How to update speaker info */}
      <div style={{ maxWidth: 720, margin: "0 auto 56px", padding: "20px", border: "1px dashed var(--rule)", background: "color-mix(in oklch, var(--c-archive) 5%, transparent)" }}>
        <div className="kicker" style={{ marginBottom: 12 }}>
          <span className="dot" /><span>💡 To update speaker info</span>
        </div>
        <p style={{ fontSize: 14, color: "var(--ink-2)", margin: 0 }}>
          Edit <code style={{ fontFamily: "var(--f-label)", fontSize: 12, background: "var(--rule)", padding: "2px 6px" }}>sections/meetups.jsx</code> — Update the <code style={{ fontFamily: "var(--f-label)", fontSize: 12, background: "var(--rule)", padding: "2px 6px" }}>speaker</code> object at the top (lines 4-9) with name, affiliation, topic, and bio.
        </p>
      </div>

      {/* What to expect */}
      <div style={{ maxWidth: 720, margin: "0 auto 56px" }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          <span className="dot" /><span>What to expect</span>
        </div>
        <p className="body-text" style={{ fontSize: 18, color: "var(--ink)", marginBottom: 20 }}>
          This is our first time meeting together. We'll keep it informal — introductions, sharing what brought us here, and setting the rhythm for future sessions.
        </p>
        <p className="body-text" style={{ fontSize: 18, color: "var(--ink)" }}>
          Future meetups will feature member presentations, work-in-progress discussions, and practical sessions on navigating HCI research in clinical settings.
        </p>
      </div>

      <hr className="rule" style={{ margin: "56px 0 36px" }} />

      {/* Past Sessions - Starting with upcoming speaker as placeholder */}
      <div className="kicker" style={{ marginBottom: 22 }}>
        <span className="dot" />Session recaps
      </div>

      <div style={{ marginBottom: 40 }}>
        {/* Upcoming session - will become a recap after May 28 */}
        <div style={{ 
          padding: "24px 0",
          borderBottom: "1px solid var(--rule)",
          display: "grid",
          gridTemplateColumns: "120px 1fr",
          gap: 24,
          alignItems: "start"
        }}>
          <div className="attr">May 2026</div>
          <div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 20, fontWeight: 500, marginBottom: 8, color: "var(--ink)" }}>
              {speaker.topic}
            </div>
            <div className="attr" style={{ marginBottom: 10 }}>
              {speaker.name} — {speaker.affiliation}
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink)", marginBottom: 10 }}>
              {speaker.bio}
            </p>
            <div style={{ padding: "12px 16px", background: "color-mix(in oklch, var(--c-archive) 8%, transparent)", borderLeft: "3px solid var(--c-archive)", marginTop: 16 }}>
              <div className="attr" style={{ marginBottom: 6, color: "var(--c-archive)" }}>📝 Add recap after session</div>
              <p style={{ fontSize: 14, color: "var(--ink-2)", margin: 0 }}>
                After May 28, replace this note with key takeaways, attendance, and discussion highlights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* After the meetup, we'll show recap here */}
      <div style={{ maxWidth: 720, margin: "0 auto 40px", padding: "24px", border: "1px dashed var(--rule)", borderRadius: "4px", background: "color-mix(in oklch, var(--rule) 5%, transparent)" }}>
        <div className="attr" style={{ marginBottom: 12 }}>💡 How to add more recaps</div>
        <p style={{ fontSize: 16, color: "var(--ink)" }}>
          After each session, copy the recap format above. Add new sessions to <code style={{ fontFamily: "var(--f-label)", fontSize: 13, background: "var(--rule)", padding: "2px 6px" }}>data.js</code> in the <code>speakers</code> array, or duplicate the div structure here.
        </p>
      </div>
    </div>
  );
};

window.Meetups = Meetups;
