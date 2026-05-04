export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream">
      {/* Organic arcs — slightly more present with the deeper gold */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -60 680 Q 380 220 820 500 Q 1080 660 1500 360"
          fill="none"
          stroke="#a47e3a"
          strokeWidth="1.2"
          opacity="0.2"
        />
        <path
          d="M 260 840 Q 640 600 1140 730 Q 1340 790 1520 710"
          fill="none"
          stroke="#a47e3a"
          strokeWidth="0.7"
          opacity="0.13"
        />
        <path
          d="M 940 60 Q 1140 130 1380 50"
          fill="none"
          stroke="#a47e3a"
          strokeWidth="0.9"
          opacity="0.16"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-8 pt-28 pb-20 w-full">
        {/* Eyebrow */}
        <p className="font-sans font-light text-[0.6rem] tracking-[0.38em] uppercase text-gold mb-10">
          Independent Stylist&ensp;·&ensp;Lincoln Square, Chicago
        </p>

        {/* Display wordmark — weight 600, stamped onto the page */}
        <h1
          className="font-serif font-semibold text-ink-true select-none"
          style={{
            fontSize: "clamp(6.5rem, 17vw, 16rem)",
            lineHeight: 0.84,
            letterSpacing: "-0.025em",
          }}
        >
          Maren
        </h1>

        {/* Thin gold editorial rule beneath wordmark */}
        <div
          className="mt-6 h-px bg-gold"
          style={{ width: "clamp(120px, 18vw, 220px)" }}
        />

        {/* Tagline */}
        <p
          className="font-serif italic text-ink-soft leading-snug mt-7"
          style={{ fontSize: "clamp(1.15rem, 2.3vw, 1.65rem)" }}
        >
          Cuts, color, and slow afternoons.
        </p>

        {/* Ornament — rule · glyph · rule */}
        <div className="mt-16 flex items-center gap-4">
          <div className="w-12 h-px bg-gold opacity-55" />
          <span
            className="text-gold/50 text-[0.7rem] leading-none select-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            ✦
          </span>
          <div className="w-12 h-px bg-gold opacity-55" />
        </div>
      </div>
    </section>
  );
}
