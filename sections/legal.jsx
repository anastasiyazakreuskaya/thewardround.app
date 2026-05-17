// Section: Legal Notice / Impressum
const Legal = () => {
  const { FolderCover } = window.WRPaper;

  return (
    <div className="section" data-screen-label="05 Legal" style={{ "--accent": "var(--ink)" }}>
      <FolderCover
        hospital="The Ward Round · Legal"
        sectionRoman="V"
        sectionTitle="Legal <em>Notice</em>"
        surname="Impressum · Information pursuant to law"
        flagText="Required"
        accent="var(--ink)"
        digits={["0", "5"]}
        stampText="Legal"
        meta="Legal information required under German (§ 5 TMG) and French (Article 6 LCEN) law."
      />

      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          <span className="dot" /><span>Impressum</span>
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 32 }}>
          Information pursuant to § 5 TMG (Germany) and Article 6 LCEN (France)
        </p>

        {/* Responsible for Content */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--f-label)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
            Responsible for content
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink)" }}>
            <p style={{ margin: "0 0 16px" }}>
              Anastasiya Zakreuskaya<br/>
              {/* TODO: Add your address */}
              [Your Street and Number]<br/>
              [Postal Code City]<br/>
              [Country]
            </p>
          </div>
        </div>

        {/* Contact */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "var(--f-label)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
            Contact
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink)" }}>
            <p style={{ margin: 0 }}>
              Email: <a href="mailto:thewardround.hci@gmail.com" style={{ color: "var(--ink)", textDecoration: "underline" }}>thewardround.hci@gmail.com</a>
            </p>
          </div>
        </div>

        <hr className="rule" style={{ margin: "40px 0" }} />

        {/* Disclaimer - Liability for Content */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--f-label)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
            Liability for content
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", margin: 0 }}>
            The content of this website has been compiled with meticulous care and to the best of our knowledge. However, no warranty can be given for the accuracy, completeness, or timeliness of the content. According to statutory provisions, we are responsible for our own content on these web pages. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
          </p>
        </div>

        {/* Disclaimer - Liability for Links */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--f-label)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
            Liability for links
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", margin: 0 }}>
            This website contains links to external third-party websites, over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
          </p>
        </div>

        {/* Copyright */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--f-label)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
            Copyright
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", margin: 0 }}>
            The content and works created by the site operators on this website are subject to copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
          </p>
        </div>

        {/* Privacy / Data Protection */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "var(--f-label)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
            Data protection
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", margin: 0 }}>
            This website does not collect, store, or process personal data. We do not use cookies, analytics, or tracking tools. Email communication occurs directly through your email client when you contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

window.Legal = Legal;
