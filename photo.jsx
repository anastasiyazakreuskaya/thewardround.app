// Photo-style placeholder — gradient + abstract scene SVG with section accent.
// Looks like a desaturated documentary photo, not literal medical imagery.
const Photo = ({ kind = "ward", height = 280, accent, tag = "Photograph", caption, tilt }) => {
  const tiltClass = tilt === "l" ? "tilt-l" : tilt === "r" ? "tilt-r" : "";
  return (
    <figure className={`photo ${tiltClass}`} style={{ "--accent": accent, height, margin: 0 }}>
      <span className="photo-cap">{caption}</span>
      <span className="photo-tag">{tag}</span>
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
        {kind === "ward" && <PhotoWard accent={accent} />}
        {kind === "desk" && <PhotoDesk accent={accent} />}
        {kind === "corridor" && <PhotoCorridor accent={accent} />}
        {kind === "people" && <PhotoPeople accent={accent} />}
        {kind === "notes" && <PhotoNotes accent={accent} />}
        {kind === "window" && <PhotoWindow accent={accent} />}
      </svg>
    </figure>
  );
};

// Abstract "long corridor with figures" — silhouettes only, no medical signifiers
const PhotoWard = () => (
  <g>
    <rect x="0" y="0" width="600" height="400" fill="oklch(0.30 0.012 60 / 0.28)" />
    {/* receding floor */}
    <polygon points="0,400 600,400 360,260 240,260" fill="oklch(0.18 0.010 60 / 0.55)" />
    {/* receding walls */}
    <polygon points="0,0 240,260 240,400 0,400" fill="oklch(0.22 0.010 60 / 0.25)" />
    <polygon points="600,0 360,260 360,400 600,400" fill="oklch(0.22 0.010 60 / 0.25)" />
    {/* far doorway / light */}
    <rect x="270" y="200" width="60" height="80" fill="oklch(0.96 0.020 80 / 0.85)" />
    {/* hanging lights */}
    {[80, 200, 320, 420, 520].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="0" x2={x - (300 - x) * 0.05} y2="60" stroke="oklch(0.30 0.010 60 / 0.55)" strokeWidth="1" />
        <ellipse cx={x - (300 - x) * 0.05} cy="60" rx="14" ry="4" fill="oklch(0.95 0.020 80 / 0.55)" />
      </g>
    ))}
    {/* two figures, far */}
    <g fill="oklch(0.16 0.010 60 / 0.85)">
      <ellipse cx="285" cy="248" rx="6" ry="7" />
      <path d="M 279 254 L 279 290 L 291 290 L 291 254 Z" />
      <ellipse cx="316" cy="252" rx="5" ry="6" />
      <path d="M 311 257 L 311 290 L 321 290 L 321 257 Z" />
    </g>
    {/* one figure mid, blurred */}
    <g fill="oklch(0.16 0.010 60 / 0.55)">
      <ellipse cx="200" cy="288" rx="11" ry="13" />
      <path d="M 188 298 L 188 388 L 212 388 L 212 298 Z" />
    </g>
  </g>
);

// Abstract desk — papers, mug, lamp glow
const PhotoDesk = ({ accent }) => (
  <g>
    <rect x="0" y="0" width="600" height="400" fill="oklch(0.34 0.014 70 / 0.35)" />
    {/* desk surface */}
    <rect x="0" y="240" width="600" height="160" fill="oklch(0.46 0.030 65 / 0.55)" />
    {/* lamp pool */}
    <radialGradient id="dl" cx="50%" cy="50%" r="50%">
      <stop offset="0" stopColor="oklch(0.94 0.080 80 / 0.7)" />
      <stop offset="1" stopColor="oklch(0.94 0.080 80 / 0)" />
    </radialGradient>
    <ellipse cx="300" cy="260" rx="220" ry="80" fill="url(#dl)" />
    {/* papers stacked, slight tilt */}
    <g transform="translate(140, 220) rotate(-4)">
      <rect width="180" height="120" fill="oklch(0.95 0.012 78 / 0.95)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1="14" y1={22 + i * 14} x2={150 - i * 6} y2={22 + i * 14} stroke="oklch(0.30 0.010 60 / 0.55)" strokeWidth="1.2" />
      ))}
    </g>
    <g transform="translate(310, 232) rotate(3)">
      <rect width="180" height="120" fill="oklch(0.92 0.014 76 / 0.92)" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={i} x1="14" y1={22 + i * 16} x2={150 - i * 8} y2={22 + i * 16} stroke="oklch(0.30 0.010 60 / 0.45)" strokeWidth="1" />
      ))}
    </g>
    {/* mug */}
    <g transform="translate(490, 250)">
      <rect width="56" height="64" rx="2" fill="oklch(0.30 0.040 30 / 0.85)" />
      <ellipse cx="28" cy="6" rx="26" ry="6" fill="oklch(0.20 0.010 60 / 0.85)" />
      <path d="M 56 16 q 16 6 0 30" fill="none" stroke="oklch(0.30 0.040 30 / 0.85)" strokeWidth="6" />
    </g>
    {/* pen */}
    <line x1="200" y1="350" x2="280" y2="356" stroke={accent || "oklch(0.20 0.010 60)"} strokeWidth="3" strokeLinecap="round" />
  </g>
);

const PhotoCorridor = () => (
  <g>
    <rect width="600" height="400" fill="oklch(0.40 0.014 70 / 0.30)" />
    {/* doorways receding */}
    {[1,2,3,4].map(i => {
      const x = 60 * i;
      const y = 80 + i * 22;
      const w = 60 - i * 6;
      const h = 200 - i * 32;
      return <rect key={i} x={x} y={y} width={w} height={h} fill="oklch(0.20 0.010 60 / 0.55)" />;
    })}
    {[1,2,3,4].map(i => {
      const x = 600 - 60 * i - (60 - i * 6);
      const y = 80 + i * 22;
      const w = 60 - i * 6;
      const h = 200 - i * 32;
      return <rect key={i} x={x} y={y} width={w} height={h} fill="oklch(0.20 0.010 60 / 0.55)" />;
    })}
    {/* end of corridor light */}
    <rect x="270" y="160" width="60" height="120" fill="oklch(0.96 0.030 80 / 0.85)" />
    {/* floor reflection */}
    <rect x="0" y="320" width="600" height="80" fill="oklch(0.50 0.020 70 / 0.30)" />
    <line x1="280" y1="280" x2="290" y2="320" stroke="oklch(0.96 0.030 80 / 0.55)" strokeWidth="22" />
  </g>
);

const PhotoPeople = ({ accent }) => (
  <g>
    <rect width="600" height="400" fill={`color-mix(in oklch, ${accent} 22%, oklch(0.40 0.012 70))`} />
    {/* group of three silhouettes around a table */}
    <ellipse cx="300" cy="290" rx="220" ry="44" fill="oklch(0.18 0.010 60 / 0.55)" />
    <g fill="oklch(0.16 0.010 60)">
      <ellipse cx="160" cy="200" rx="26" ry="30" />
      <path d="M 130 224 Q 160 250 190 224 L 200 320 L 120 320 Z" />
      <ellipse cx="300" cy="180" rx="28" ry="32" />
      <path d="M 268 208 Q 300 240 332 208 L 346 320 L 254 320 Z" />
      <ellipse cx="440" cy="200" rx="26" ry="30" />
      <path d="M 410 224 Q 440 250 470 224 L 480 320 L 400 320 Z" />
    </g>
    {/* papers on table */}
    <rect x="240" y="296" width="80" height="40" fill="oklch(0.95 0.012 78 / 0.95)" transform="rotate(-3 280 316)" />
    <rect x="320" y="298" width="60" height="36" fill="oklch(0.92 0.014 76 / 0.95)" transform="rotate(2 350 316)" />
  </g>
);

const PhotoNotes = ({ accent }) => (
  <g>
    <rect width="600" height="400" fill="oklch(0.92 0.020 76)" />
    {/* a notebook spread */}
    <rect x="60" y="40" width="480" height="320" fill="oklch(0.95 0.014 78)" />
    <line x1="300" y1="40" x2="300" y2="360" stroke="oklch(0.30 0.010 60 / 0.35)" strokeWidth="1.2" />
    {/* ruled lines */}
    {Array.from({ length: 16 }).map((_, i) => (
      <g key={i}>
        <line x1="80" y1={70 + i * 18} x2="280" y2={70 + i * 18} stroke="oklch(0.30 0.010 60 / 0.30)" strokeWidth="0.8" />
        <line x1="320" y1={70 + i * 18} x2="520" y2={70 + i * 18} stroke="oklch(0.30 0.010 60 / 0.30)" strokeWidth="0.8" />
      </g>
    ))}
    {/* handwritten-ish marks in accent */}
    <path d="M 90 90 q 30 -8 60 0 t 60 4 t 60 -2" fill="none" stroke={accent} strokeWidth="2" opacity="0.8" />
    <path d="M 90 130 q 40 -4 80 2 t 80 -4" fill="none" stroke={accent} strokeWidth="1.6" opacity="0.7" />
    <ellipse cx="170" cy="172" rx="62" ry="14" fill="none" stroke={accent} strokeWidth="1.6" opacity="0.85" />
    <path d="M 320 90 q 30 0 60 4 t 60 -4 t 50 4" fill="none" stroke="oklch(0.20 0.010 60 / 0.7)" strokeWidth="1.2" />
    <path d="M 320 130 q 40 -4 80 2" fill="none" stroke="oklch(0.20 0.010 60 / 0.7)" strokeWidth="1.2" />
    <line x1="400" y1="240" x2="500" y2="240" stroke={accent} strokeWidth="3" opacity="0.85" />
    {/* pen */}
    <line x1="500" y1="320" x2="560" y2="340" stroke="oklch(0.18 0.010 60)" strokeWidth="4" strokeLinecap="round" />
  </g>
);

const PhotoWindow = () => (
  <g>
    <rect width="600" height="400" fill="oklch(0.34 0.014 70 / 0.55)" />
    {/* window frame */}
    <rect x="80" y="40" width="440" height="320" fill="oklch(0.94 0.030 80 / 0.92)" />
    <rect x="80" y="40" width="440" height="320" fill="none" stroke="oklch(0.20 0.010 60 / 0.7)" strokeWidth="6" />
    <line x1="300" y1="40" x2="300" y2="360" stroke="oklch(0.20 0.010 60 / 0.7)" strokeWidth="6" />
    <line x1="80" y1="200" x2="520" y2="200" stroke="oklch(0.20 0.010 60 / 0.7)" strokeWidth="6" />
    {/* sill plant silhouettes */}
    <path d="M 120 360 q 0 -40 30 -50 q -10 30 0 50" fill="oklch(0.20 0.010 60 / 0.85)" />
    <path d="M 460 360 q 0 -40 30 -50 q -10 30 0 50" fill="oklch(0.20 0.010 60 / 0.85)" />
    {/* light bloom */}
    <radialGradient id="wl" cx="50%" cy="40%" r="50%">
      <stop offset="0" stopColor="oklch(1.00 0.040 80 / 0.6)" />
      <stop offset="1" stopColor="oklch(1.00 0.040 80 / 0)" />
    </radialGradient>
    <rect x="80" y="40" width="440" height="320" fill="url(#wl)" />
  </g>
);

window.WRPhoto = Photo;
