const hours = [
  { day: "Tuesday – Saturday", time: "10 am – 6 pm" },
  { day: "Sunday – Monday", time: "Closed" },
];

function FakeMap() {
  return (
    <div className="w-full h-full min-h-[280px] rounded-[3px] overflow-hidden border border-gold/[0.25]">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        aria-label="Map showing Maren Studio at 4844 N Lincoln Ave, Chicago"
      >
        {/* Road base */}
        <rect width="400" height="300" fill="#f5f0e8" />

        {/* City blocks — 4 rows × 4 columns */}
        {/* Row 0 */}
        <rect x="0"   y="0"   width="82"  height="68" fill="#ece4d8" />
        <rect x="96"  y="0"   width="82"  height="68" fill="#ece4d8" />
        <rect x="192" y="0"   width="82"  height="68" fill="#ece4d8" />
        <rect x="288" y="0"   width="112" height="68" fill="#ece4d8" />

        {/* Row 1 */}
        <rect x="0"   y="80"  width="82"  height="64" fill="#ece4d8" />
        <rect x="96"  y="80"  width="82"  height="64" fill="#ece4d8" />
        <rect x="192" y="80"  width="82"  height="64" fill="#ece4d8" />
        <rect x="288" y="80"  width="112" height="64" fill="#ece4d8" />

        {/* Row 2 */}
        <rect x="0"   y="156" width="82"  height="64" fill="#ece4d8" />
        <rect x="96"  y="156" width="82"  height="64" fill="#ece4d8" />
        <rect x="192" y="156" width="82"  height="64" fill="#ece4d8" />
        <rect x="288" y="156" width="112" height="64" fill="#ece4d8" />

        {/* Row 3 */}
        <rect x="0"   y="232" width="82"  height="68" fill="#ece4d8" />
        <rect x="96"  y="232" width="82"  height="68" fill="#ece4d8" />
        <rect x="192" y="232" width="82"  height="68" fill="#ece4d8" />
        <rect x="288" y="232" width="112" height="68" fill="#ece4d8" />

        {/* Lincoln Ave — diagonal road */}
        <line x1="10"  y1="300" x2="390" y2="0"  stroke="#f5f0e8" strokeWidth="16" />
        <line x1="10"  y1="300" x2="390" y2="0"  stroke="#a47e3a" strokeWidth="0.8" opacity="0.22" />

        {/* Street labels */}
        <text x="4" y="77"  fontSize="5" fill="#9a8a72" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">LELAND AVE</text>
        <text x="4" y="153" fontSize="5" fill="#9a8a72" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">GUNNISON ST</text>
        <text x="4" y="229" fontSize="5" fill="#9a8a72" fontFamily="system-ui, sans-serif" letterSpacing="0.06em">CARMEN AVE</text>
        <text x="92"  y="295" fontSize="5" fill="#9a8a72" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" textAnchor="middle">WESTERN AVE</text>
        <text x="188" y="295" fontSize="5" fill="#9a8a72" fontFamily="system-ui, sans-serif" letterSpacing="0.06em" textAnchor="middle">DAMEN AVE</text>
        <text
          x="305" y="58" fontSize="5" fill="#9a8a72"
          fontFamily="system-ui, sans-serif" letterSpacing="0.06em"
          transform="rotate(-36, 305, 58)"
        >
          LINCOLN AVE
        </text>

        {/* Pulse ring + pin */}
        <circle cx="196" cy="153" r="6" fill="#a47e3a" opacity="0.28" className="pulse-ring" />
        <circle cx="196" cy="153" r="4" fill="#a47e3a" />

        {/* Address callout */}
        <rect x="206" y="142" width="94" height="17" rx="2.5" fill="#f0eae0" opacity="0.92" />
        <text
          x="253" y="153.5" fontSize="5.8" fill="#0a0907"
          fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="0.03em"
        >
          4844 N Lincoln Ave
        </text>
      </svg>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="py-28 bg-cream-deep">
      <div className="max-w-5xl mx-auto px-8">
        <p className="font-sans font-light text-[0.6rem] tracking-[0.38em] uppercase text-gold mb-20">
          Visit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <h2
              className="font-serif font-normal text-ink-true leading-none mb-14"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.2rem)" }}
            >
              Come in.
            </h2>

            {/* Hours */}
            <div className="mb-10">
              <p className="font-sans font-light text-[0.58rem] tracking-[0.24em] uppercase text-gold mb-3">
                Hours
              </p>
              <p className="font-serif italic text-sm text-ink/45 mb-4">
                By appointment only.
              </p>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-ink text-[1rem]">{h.day}</span>
                    <span className="font-sans font-light text-[0.82rem] text-ink-soft whitespace-nowrap">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="mb-9">
              <p className="font-sans font-light text-[0.58rem] tracking-[0.24em] uppercase text-gold mb-3">
                Address
              </p>
              <p className="font-serif text-ink leading-relaxed">
                4844 N Lincoln Ave
                <br />
                Chicago, IL 60625
              </p>
              <p className="font-sans font-light text-[0.7rem] text-ink/38 mt-1 tracking-wide">
                Lincoln Square
              </p>
            </div>

            {/* Instagram */}
            <div>
              <p className="font-sans font-light text-[0.58rem] tracking-[0.24em] uppercase text-gold mb-3">
                Instagram
              </p>
              <p className="font-serif italic text-ink">@marenstudio</p>
            </div>
          </div>

          {/* Right: map */}
          <div className="h-80 md:h-auto md:min-h-[340px]">
            <FakeMap />
          </div>
        </div>
      </div>
    </section>
  );
}
