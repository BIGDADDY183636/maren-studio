const hours = [
  { day: "tues – sat", time: "10 – 6" },
  { day: "sun + mon", time: "closed" },
];

function FakeMap() {
  return (
    <div className="w-full h-full min-h-[280px] rounded-lg overflow-hidden border border-terra/15">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        aria-label="Map showing Maren Studio at 4844 N Lincoln Ave, Chicago"
      >
        {/* Road base */}
        <rect width="400" height="300" fill="#f5efe6" />

        {/* City blocks */}
        {/* Row 0 */}
        <rect x="0"   y="0"   width="82"  height="68" fill="#ede4d8" />
        <rect x="96"  y="0"   width="82"  height="68" fill="#ede4d8" />
        <rect x="192" y="0"   width="82"  height="68" fill="#ede4d8" />
        <rect x="288" y="0"   width="112" height="68" fill="#ede4d8" />
        {/* Row 1 */}
        <rect x="0"   y="80"  width="82"  height="64" fill="#ede4d8" />
        <rect x="96"  y="80"  width="82"  height="64" fill="#ede4d8" />
        <rect x="192" y="80"  width="82"  height="64" fill="#ede4d8" />
        <rect x="288" y="80"  width="112" height="64" fill="#ede4d8" />
        {/* Row 2 */}
        <rect x="0"   y="156" width="82"  height="64" fill="#ede4d8" />
        <rect x="96"  y="156" width="82"  height="64" fill="#ede4d8" />
        <rect x="192" y="156" width="82"  height="64" fill="#ede4d8" />
        <rect x="288" y="156" width="112" height="64" fill="#ede4d8" />
        {/* Row 3 */}
        <rect x="0"   y="232" width="82"  height="68" fill="#ede4d8" />
        <rect x="96"  y="232" width="82"  height="68" fill="#ede4d8" />
        <rect x="192" y="232" width="82"  height="68" fill="#ede4d8" />
        <rect x="288" y="232" width="112" height="68" fill="#ede4d8" />

        {/* Lincoln Ave diagonal */}
        <line x1="10" y1="300" x2="390" y2="0" stroke="#f5efe6" strokeWidth="16" />
        <line x1="10" y1="300" x2="390" y2="0" stroke="#c4633a" strokeWidth="0.8" opacity="0.2" />

        {/* Street labels */}
        <text x="4" y="77"  fontSize="5" fill="#9a8a76" fontFamily="system-ui" letterSpacing="0.06em">LELAND AVE</text>
        <text x="4" y="153" fontSize="5" fill="#9a8a76" fontFamily="system-ui" letterSpacing="0.06em">GUNNISON ST</text>
        <text x="4" y="229" fontSize="5" fill="#9a8a76" fontFamily="system-ui" letterSpacing="0.06em">CARMEN AVE</text>
        <text x="92"  y="295" fontSize="5" fill="#9a8a76" fontFamily="system-ui" letterSpacing="0.06em" textAnchor="middle">WESTERN AVE</text>
        <text x="188" y="295" fontSize="5" fill="#9a8a76" fontFamily="system-ui" letterSpacing="0.06em" textAnchor="middle">DAMEN AVE</text>
        <text x="305" y="58" fontSize="5" fill="#9a8a76" fontFamily="system-ui" letterSpacing="0.06em" transform="rotate(-36, 305, 58)">LINCOLN AVE</text>

        {/* Sage pin — the one sage moment */}
        <circle cx="196" cy="153" r="6" fill="#8a9978" opacity="0.3" className="pulse-ring" />
        <circle cx="196" cy="153" r="4" fill="#8a9978" />

        {/* Address callout */}
        <rect x="206" y="142" width="94" height="17" rx="2.5" fill="#f5efe6" opacity="0.93" />
        <text x="253" y="153.5" fontSize="5.8" fill="#1a1614" fontFamily="system-ui" textAnchor="middle" letterSpacing="0.03em">
          4844 N Lincoln Ave
        </text>
      </svg>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-terra mb-14">
          come hang
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-serif text-ink leading-tight mb-10"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontVariationSettings: '"opsz" 36, "WONK" 0.4',
              }}
            >
              Come by.
            </h2>

            {/* Hours */}
            <div className="mb-8">
              <p className="font-sans text-[0.65rem] font-medium tracking-[0.18em] uppercase text-terra/80 mb-3">
                hours
              </p>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-baseline">
                    <span className="font-sans text-[0.95rem] text-ink/75">{h.day}</span>
                    <span className="font-sans text-[0.88rem] font-medium text-ink/55">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[0.78rem] text-ink/40 mt-2 italic">
                by appointment, plus chill walk-ins on slow days
              </p>
            </div>

            {/* Address */}
            <div className="mb-8">
              <p className="font-sans text-[0.65rem] font-medium tracking-[0.18em] uppercase text-terra/80 mb-3">
                address
              </p>
              <p className="font-sans text-[0.95rem] text-ink/75 leading-relaxed">
                4844 N Lincoln Ave
                <br />
                Chicago, IL 60625
              </p>
              <p className="font-sans text-[0.75rem] text-ink/35 mt-1">Lincoln Square</p>
            </div>

            {/* Instagram */}
            <div className="mb-10">
              <p className="font-sans text-[0.65rem] font-medium tracking-[0.18em] uppercase text-terra/80 mb-2">
                instagram
              </p>
              <p className="font-sans text-[0.95rem] text-ink/75">@maren.studio</p>
            </div>

            {/* Now playing */}
            <div className="inline-flex items-start gap-3 bg-cream-warm px-5 py-4 rounded-xl">
              <span className="text-terra text-base mt-0.5 leading-none select-none">♪</span>
              <div>
                <p className="font-sans text-[0.6rem] font-medium tracking-[0.15em] uppercase text-ink/35 mb-1">
                  now playing
                </p>
                <p className="font-sans text-[0.88rem] text-ink/70 font-medium">
                  &ldquo;Spinning&rdquo; — Yves Tumor
                </p>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="h-80 md:h-auto md:min-h-[360px]">
            <FakeMap />
          </div>
        </div>
      </div>
    </section>
  );
}
