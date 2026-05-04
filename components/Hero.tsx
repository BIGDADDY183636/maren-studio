export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream">
      {/* Faint organic arcs — drawn in gold, barely there */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Primary sweeping arc */}
        <path
          d="M -60 680 Q 380 220 820 500 Q 1080 660 1500 360"
          fill="none"
          stroke="#b8924a"
          strokeWidth="1.2"
          opacity="0.17"
        />
        {/* Secondary whisper */}
        <path
          d="M 260 840 Q 640 600 1140 730 Q 1340 790 1520 710"
          fill="none"
          stroke="#b8924a"
          strokeWidth="0.7"
          opacity="0.11"
        />
        {/* Small flourish, upper right */}
        <path
          d="M 940 60 Q 1140 130 1380 50"
          fill="none"
          stroke="#b8924a"
          strokeWidth="0.9"
          opacity="0.14"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-8 pt-28 pb-20 w-full">
        {/* Eyebrow */}
        <p className="font-sans font-light text-[0.6rem] tracking-[0.38em] uppercase text-gold mb-10">
          Independent Stylist&ensp;·&ensp;Lincoln Square, Chicago
        </p>

        {/* Display wordmark */}
        <h1
          className="font-serif font-light text-ink select-none"
          style={{
            fontSize: "clamp(5.5rem, 15vw, 14rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
          }}
        >
          Maren
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic text-ink-soft leading-snug mt-9"
          style={{ fontSize: "clamp(1.15rem, 2.3vw, 1.65rem)" }}
        >
          Cuts, color, and slow afternoons.
        </p>

        {/* Gold rule + date mark */}
        <div className="mt-16 flex items-center gap-5">
          <div className="w-14 h-px bg-gold opacity-45" />
          <span className="font-sans font-light text-[0.58rem] tracking-[0.22em] uppercase text-gold/55">
            Est. 2016
          </span>
        </div>
      </div>
    </section>
  );
}
