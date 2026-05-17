// Shared paper-record visual primitives.
// Folder cover, form-field strips, "CONFIDENTIAL" stamp, chart-tab edge,
// hand-drawn-feeling sketch placeholders.

const Stamp = ({ text = "Confidential", rotate = -6, accent }) => (
  <div style={{
    display: "inline-block",
    fontFamily: "var(--f-label)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: accent || "var(--c-workaround)",
    border: `1.5px solid ${accent || "var(--c-workaround)"}`,
    padding: "5px 12px 4px",
    transform: `rotate(${rotate}deg)`,
    opacity: 0.78,
    background: "transparent",
    boxShadow: "inset 0 0 0 1px " + (accent || "var(--c-workaround)"),
    borderRadius: 1,
  }}>{text}</div>
);

// Faux form-field — label above, ruled blank line below, optionally with a value
const FormBlank = ({ label, value, width = "auto" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0, width }}>
    <span style={{
      fontFamily: "var(--f-label)",
      fontSize: 8.5,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--ink-3)",
    }}>{label}</span>
    <span style={{
      borderBottom: "1px solid var(--ink)",
      minHeight: 22,
      paddingBottom: 1,
      fontFamily: "var(--f-body)",
      fontSize: 14,
      color: "var(--ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}>{value || "\u00A0"}</span>
  </div>
);

// Tickable box — empty by default, can show a checkmark
const Tickbox = ({ checked, label, width = 14 }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <span style={{
      width, height: width,
      border: "1.2px solid var(--ink)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--f-label)",
      fontSize: 11,
      lineHeight: 1,
      color: "var(--ink)",
    }}>{checked ? "×" : ""}</span>
    {label && <span style={{ fontFamily: "var(--f-label)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-2)" }}>{label}</span>}
  </span>
);

// Numbered chart-tab strip — like the colored numbered tags on a manila folder
const ChartTab = ({ digit, accent, height = 38, width = 28 }) => (
  <span style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width, height,
    background: accent,
    color: "white",
    fontFamily: "var(--f-display)",
    fontWeight: 600,
    fontSize: 19,
    letterSpacing: 0,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.10), 0 1px 0 0 rgba(0,0,0,0.06)",
    flex: "0 0 auto",
  }}>{digit}</span>
);

// Folder cover — the "patient chart" header for each section.
// Has a faux record header, form blanks, CONFIDENTIAL stamp,
// chart-tab digits at top-right, and a corner punch-hole.
const FolderCover = ({
  hospital,        // small uppercase hospital-style line
  volume,          // e.g. "Vol. II"
  sectionRoman,    // e.g. "II"
  sectionTitle,    // big title, may include <em>
  surname, given, unit, dob, period,
  accent,
  digits = ["0", "0"],   // 2-digit chart tab
  stampText = "Confidential",
  flagText,        // optional small black flag, like the "Patient Alert Label" box
  meta,            // small line for "ANONYMOUS — REDACTED" etc
  children,        // body — the lede etc
}) => {
  return (
    <div className="folder-cover" style={{ "--accent": accent }}>
      {/* Top strip: hospital, volume, chart tabs */}
      <div className="fc-top">
        <div className="fc-hospital">
          <span style={{ display: "inline-block", width: 10, height: 10, background: "var(--ink)", marginRight: 10, transform: "translateY(1px)" }} />
          <span>{hospital}</span>
        </div>
        <div className="fc-vol">{volume}</div>
        <div className="fc-tabs">
          {digits.map((d, i) => (
            <ChartTab key={i} digit={d} accent={accent} />
          ))}
        </div>
      </div>

      <hr className="fc-rule" />

      {/* Identifier row — surname / given / unit number */}
      <div className="fc-blanks">
        <FormBlank label="Surname" value={surname} />
        <FormBlank label="Given names" value={given} />
        <FormBlank label="Unit record №" value={unit} />
      </div>

      <div className="fc-blanks-2">
        {dob && <FormBlank label="Date of filing" value={dob} />}
        {period && <FormBlank label="Reporting period" value={period} />}
        {flagText && (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{
              fontFamily: "var(--f-label)", fontSize: 8.5, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--ink-3)",
            }}>Alert label</span>
            <span style={{
              border: "1px solid var(--ink)",
              padding: "4px 10px",
              fontFamily: "var(--f-label)",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink)",
              alignSelf: "flex-start",
              whiteSpace: "nowrap",
              background: "color-mix(in oklch, var(--ink) 6%, transparent)",
            }}>{flagText}</span>
          </div>
        )}
      </div>

      <hr className="fc-rule soft" />

      {/* Headline area: section roman + title + stamp */}
      <div className="fc-head">
        <div>
          <div className="fc-roman">Section · {sectionRoman}</div>
          <h2 className="h-section" style={{ marginTop: 8 }} dangerouslySetInnerHTML={{ __html: sectionTitle }} />
          {meta && <div className="fc-meta" style={{ marginTop: 14 }}>{meta}</div>}
        </div>
        <div className="fc-stamp">
          <Stamp text={stampText} accent={accent} rotate={-7} />
        </div>
      </div>

      {children && <div className="fc-body">{children}</div>}

      {/* Punch-hole at left — like a 2-hole filing punch */}
      <span className="fc-hole" style={{ top: 32 }} />
      <span className="fc-hole" style={{ bottom: 32 }} />
    </div>
  );
};

// "Sketch" — a hand-drawn-feeling SVG placeholder with crosshatching, ruled grid,
// or a gentle illustrative shape. No medical iconography.
const Sketch = ({ kind = "rules", height = 220, accent, label }) => {
  const a = accent || "var(--ink-3)";
  return (
    <figure className="sketch-fig" style={{ "--accent": accent }}>
      <div className="sketch-frame" style={{ height }}>
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs>
            <pattern id={`pp-${kind}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke={a} strokeWidth="0.5" opacity="0.35" />
            </pattern>
          </defs>
          {kind === "rules" && <RulesSketch accent={a} />}
          {kind === "chart" && <ChartSketch accent={a} />}
          {kind === "form"  && <FormSketch accent={a} />}
          {kind === "annotate" && <AnnotateSketch accent={a} />}
          {kind === "envelope" && <EnvelopeSketch accent={a} />}
        </svg>
      </div>
      {label && <figcaption className="sketch-cap">{label}</figcaption>}
    </figure>
  );
};

const RulesSketch = ({ accent }) => (
  <g>
    {/* ruled-page sketch */}
    <rect x="0" y="0" width="400" height="300" fill="transparent" />
    {Array.from({ length: 14 }).map((_, i) => (
      <line key={i} x1="36" y1={36 + i * 18} x2="364" y2={36 + i * 18} stroke="var(--ink)" strokeWidth="0.6" opacity="0.55" />
    ))}
    <line x1="60" y1="20" x2="60" y2="290" stroke={accent} strokeWidth="0.8" opacity="0.7" />
    {/* a couple of "annotations" — short scribble marks */}
    <path d="M 80 70 q 30 -8 60 0 t 60 0" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
    <path d="M 80 124 q 40 -6 90 0 t 80 4" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
    <path d="M 80 178 q 50 0 110 -4" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
    <path d="M 80 232 q 60 -2 140 2" fill="none" stroke="var(--ink)" strokeWidth="1" opacity="0.7" />
    <circle cx="340" cy="60" r="14" fill="none" stroke={accent} strokeWidth="1.3" />
  </g>
);

const ChartSketch = ({ accent }) => (
  <g>
    {/* abstract trend chart — no medical signifiers */}
    <rect x="0" y="0" width="400" height="300" fill="transparent" />
    {/* faint grid */}
    {Array.from({ length: 9 }).map((_, i) => (
      <line key={i} x1="40" y1={40 + i * 28} x2="370" y2={40 + i * 28} stroke="var(--ink)" strokeWidth="0.4" opacity="0.25" />
    ))}
    {Array.from({ length: 11 }).map((_, i) => (
      <line key={i} x1={40 + i * 33} y1="40" x2={40 + i * 33} y2="264" stroke="var(--ink)" strokeWidth="0.4" opacity="0.25" />
    ))}
    {/* x/y axes */}
    <line x1="40" y1="40" x2="40" y2="264" stroke="var(--ink)" strokeWidth="1" />
    <line x1="40" y1="264" x2="370" y2="264" stroke="var(--ink)" strokeWidth="1" />
    {/* trend line — irregular, like a hand-drawn curve */}
    <path d="M 50 220 Q 90 200 120 210 T 180 170 T 240 130 T 300 115 T 360 90"
      fill="none" stroke={accent} strokeWidth="2.2" strokeLinecap="round" />
    {/* ticks */}
    {[0, 1, 2, 3, 4].map(i => (
      <line key={i} x1={60 + i * 70} y1="264" x2={60 + i * 70} y2="270" stroke="var(--ink)" strokeWidth="0.8" />
    ))}
    {/* dotted threshold */}
    <line x1="40" y1="150" x2="370" y2="150" stroke="var(--ink)" strokeWidth="0.7" strokeDasharray="2 3" opacity="0.7" />
    <text x="48" y="146" fontFamily="var(--f-label)" fontSize="8" fill="var(--ink-3)" letterSpacing="1">THRESHOLD</text>
  </g>
);

const FormSketch = ({ accent }) => (
  <g>
    {/* a faux clinical form — boxes and ruled blanks */}
    <rect x="20" y="20" width="360" height="260" fill="transparent" stroke="var(--ink)" strokeWidth="0.6" opacity="0.35" />
    {/* header band */}
    <rect x="20" y="20" width="360" height="28" fill="none" stroke="var(--ink)" strokeWidth="0.8" opacity="0.6" />
    <text x="32" y="38" fontFamily="var(--f-label)" fontSize="9" letterSpacing="2" fill="var(--ink-2)">FIELD NOTE — Form D</text>
    {/* tick boxes row */}
    {[0,1,2,3,4].map(i => (
      <g key={i} transform={`translate(${36 + i*70}, 64)`}>
        <rect x="0" y="0" width="12" height="12" fill="none" stroke="var(--ink)" strokeWidth="0.9" />
        <text x="18" y="10" fontFamily="var(--f-label)" fontSize="7.5" letterSpacing="1.4" fill="var(--ink-3)">ITEM {i+1}</text>
      </g>
    ))}
    {/* ruled blanks */}
    {Array.from({ length: 6 }).map((_, i) => (
      <g key={i}>
        <text x="36" y={104 + i * 26} fontFamily="var(--f-label)" fontSize="7" letterSpacing="1.3" fill="var(--ink-3)">{["NAME","ROLE","WARD","DATE","NOTE","SIGN"][i]}</text>
        <line x1="80" y1={106 + i * 26} x2="364" y2={106 + i * 26} stroke="var(--ink)" strokeWidth="0.8" opacity="0.65" />
      </g>
    ))}
    {/* signature scribble */}
    <path d="M 220 248 q 14 -10 28 0 t 30 -2 q 10 8 22 0" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.85" />
    <line x1="200" y1="262" x2="364" y2="262" stroke="var(--ink)" strokeWidth="0.6" opacity="0.5" />
  </g>
);

const AnnotateSketch = ({ accent }) => (
  <g>
    {/* margin-note style: a paragraph of fake prose lines on left, arrows / circles on right */}
    {Array.from({ length: 10 }).map((_, i) => (
      <line key={i} x1="32" y1={50 + i * 20} x2={i % 3 === 2 ? 200 : 220} y2={50 + i * 20} stroke="var(--ink)" strokeWidth="0.7" opacity="0.55" />
    ))}
    {/* circled passage */}
    <ellipse cx="120" cy="130" rx="80" ry="22" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.85" />
    {/* arrow to margin note */}
    <path d="M 200 130 C 240 124, 270 110, 300 116" fill="none" stroke={accent} strokeWidth="1.2" opacity="0.85" />
    <path d="M 296 112 l 8 4 l -7 5" fill="none" stroke={accent} strokeWidth="1.2" opacity="0.85" />
    {/* margin scribble */}
    <path d="M 290 70 q 30 -4 60 6" fill="none" stroke="var(--ink)" strokeWidth="0.9" opacity="0.55" />
    <path d="M 290 86 q 30 -2 50 4" fill="none" stroke="var(--ink)" strokeWidth="0.9" opacity="0.55" />
    <text x="290" y="160" fontFamily="var(--f-label)" fontSize="8" letterSpacing="1.4" fill={accent} opacity="0.9">SEE OVER →</text>
    {/* underline */}
    <line x1="32" y1="232" x2="180" y2="232" stroke={accent} strokeWidth="1.3" opacity="0.85" />
  </g>
);

const EnvelopeSketch = ({ accent }) => (
  <g>
    {/* manila envelope outline with diagonal flap */}
    <rect x="40" y="60" width="320" height="200" fill="none" stroke="var(--ink)" strokeWidth="1" />
    <path d="M 40 60 L 200 170 L 360 60" fill="none" stroke="var(--ink)" strokeWidth="1" />
    {/* string / button ties */}
    <circle cx="120" cy="170" r="6" fill="none" stroke="var(--ink)" strokeWidth="1" />
    <circle cx="280" cy="170" r="6" fill="none" stroke="var(--ink)" strokeWidth="1" />
    <path d="M 126 170 q 60 -10 148 0" fill="none" stroke="var(--ink)" strokeWidth="0.7" strokeDasharray="2 2" />
    {/* stamp */}
    <rect x="280" y="80" width="60" height="38" fill="none" stroke={accent} strokeWidth="1.4" />
    <text x="310" y="104" fontFamily="var(--f-label)" fontSize="9" letterSpacing="2" textAnchor="middle" fill={accent}>FILED</text>
  </g>
);

window.WRPaper = { Stamp, FormBlank, Tickbox, ChartTab, FolderCover, Sketch };
