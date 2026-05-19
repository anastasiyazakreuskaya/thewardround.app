// Section: Meetups — Monthly invited speaker series
const Meetups = () => {
  const { FolderCover } = window.WRPaper;
  const [speakers, setSpeakers] = React.useState([]);
  
  React.useEffect(() => {
    if (window.WR_CONTENT.loaded) {
      setSpeakers(window.WR_CONTENT.speakers);
    } else {
      // Wait for content to load
      const checkLoaded = setInterval(() => {
        if (window.WR_CONTENT.loaded) {
          setSpeakers(window.WR_CONTENT.speakers);
          clearInterval(checkLoaded);
        }
      }, 100);
      return () => clearInterval(checkLoaded);
    }
  }, []);
  
  // Get upcoming and past speakers
  const upcoming = speakers.filter(s => s.status === "upcoming")[0];
  const past = speakers.filter(s => s.status === "past").sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  if (!upcoming) {
    return <div className="section">Loading...</div>;
  }
  
  const speaker = upcoming.speaker;
  const talk = upcoming.talk;

  return (
    <div className="section" data-screen-label="04 Meetups" style={{ "--accent": "var(--c-archive)" }}>
      <FolderCover
        hospital="The Ward Round · Meetups"
        sectionRoman="IV"
        sectionTitle="Monthly <em>Meetups</em>"
        surname="Last Thursday of each month · Invited speakers"
        flagText="Open"
        accent="var(--c-archive)"
        digits={["0", "4"]}
        stampText="Monthly"
        meta="Monthly sessions with invited speakers on topics in clinical HCI research. Members share work in progress, methods, and hard-won lessons from the field."
      />

      {/* Next Meeting Announcement */}
      <div style={{ maxWidth: 800, margin: "0 auto 56px" }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          <span className="dot" /><span>Next meetup — {upcoming.date}</span>
        </div>
        <div className="block" style={{ "--accent": "var(--c-archive)", marginBottom: 0 }}>
          <div style={{ fontFamily: "var(--f-display)", fontSize: 32, fontWeight: 500, lineHeight: 1.2, color: "var(--paper)", marginBottom: 24 }}>
            {upcoming.date}
          </div>
          
          {/* Speaker Card */}
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, marginBottom: 20, padding: "24px", background: "color-mix(in oklch, var(--paper) 12%, transparent)", borderRadius: "4px" }}>
            <img 
              src={speaker.photo} 
              alt={speaker.name}
              style={{ width: 120, height: 120, objectFit: "cover", borderRadius: "2px", border: "2px solid var(--paper)" }}
            />
            <div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 500, color: "var(--paper)", marginBottom: 6, lineHeight: 1.2 }}>
                {talk.title}
              </div>
              <div style={{ fontSize: 16, color: "color-mix(in oklch, var(--paper) 85%, transparent)", marginBottom: 14 }}>
                {speaker.name} — {speaker.affiliation}
              </div>
              <p className="body-text" style={{ fontSize: 15, lineHeight: 1.65, color: "color-mix(in oklch, var(--paper) 90%, transparent)", margin: 0 }}>
                {talk.abstract}
              </p>
            </div>
          </div>

          <div className="attr" style={{ color: "color-mix(in oklch, var(--paper) 75%, transparent)" }}>
            Time and link shared with members via email
          </div>
        </div>
      </div>

      <hr className="rule" style={{ margin: "56px 0 36px" }} />

      {/* Session Recaps */}
      <div className="kicker" style={{ marginBottom: 22 }}>
        <span className="dot" />Session recaps
      </div>

      <div style={{ marginBottom: 40 }}>
        {/* Show upcoming session first (before it happens) */}
        {upcoming && (
          <div style={{ 
            padding: "24px 0",
            borderBottom: "1px solid var(--rule)",
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: 32,
            alignItems: "start"
          }}>
            {/* Left column: Date + Image */}
            <div>
              <div className="attr" style={{ marginBottom: 12 }}>{upcoming.date}</div>
              <img 
                src={speaker.photo} 
                alt={speaker.name}
                style={{ width: "100%", aspectRatio: "1", objectFit: "cover", border: "2px solid var(--rule)" }}
              />
            </div>
            
            {/* Right column: Speaker info + recap */}
            <div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 500, marginBottom: 8, color: "var(--ink)" }}>
                {talk.title}
              </div>
              <div className="attr" style={{ marginBottom: 14 }}>
                {speaker.name} — {speaker.affiliation}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 18 }}>
                {talk.abstract}
              </p>
              {upcoming.recap ? (
                <div style={{ padding: "18px 20px", background: "color-mix(in oklch, var(--c-archive) 8%, transparent)", borderLeft: "3px solid var(--c-archive)" }}>
                  <div className="attr" style={{ marginBottom: 10, color: "var(--c-archive)" }}>📝 Session recap</div>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>
                    {upcoming.recap}
                  </p>
                </div>
              ) : (
                <div style={{ padding: "18px 20px", background: "color-mix(in oklch, var(--c-archive) 8%, transparent)", borderLeft: "3px solid var(--c-archive)" }}>
                  <div className="attr" style={{ marginBottom: 10, color: "var(--c-archive)" }}>📝 Recap pending</div>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", margin: 0, fontStyle: "italic" }}>
                    Session recap will be added after {upcoming.date}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Past sessions */}
        {past.map((session) => (
          <div key={session.id} style={{ 
            padding: "24px 0",
            borderBottom: "1px solid var(--rule)",
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: 32,
            alignItems: "start"
          }}>
            <div>
              <div className="attr" style={{ marginBottom: 12 }}>{session.date}</div>
              <img 
                src={session.speaker.photo} 
                alt={session.speaker.name}
                style={{ width: "100%", aspectRatio: "1", objectFit: "cover", border: "2px solid var(--rule)" }}
              />
            </div>
            
            <div>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, fontWeight: 500, marginBottom: 8, color: "var(--ink)" }}>
                {session.talk.title}
              </div>
              <div className="attr" style={{ marginBottom: 14 }}>
                {session.speaker.name} — {session.speaker.affiliation}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)", marginBottom: 18 }}>
                {session.talk.abstract}
              </p>
              {session.recap && (
                <div style={{ padding: "18px 20px", background: "color-mix(in oklch, var(--c-archive) 8%, transparent)", borderLeft: "3px solid var(--c-archive)" }}>
                  <div className="attr" style={{ marginBottom: 10, color: "var(--c-archive)" }}>📝 Session recap</div>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>
                    {session.recap}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.Meetups = Meetups;
