export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-cream">
      {/* Terracotta squiggles — felt-tip, imperfect, alive */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Main loose wave */}
        <path
          d="M -60 480 C 80 430, 180 510, 300 465 C 420 420, 500 490, 640 455 C 780 420, 860 480, 1000 448 C 1100 425, 1180 460, 1260 440"
          fill="none"
          stroke="#c4633a"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        {/* Upper accent arc */}
        <path
          d="M 700 100 C 800 60, 920 85, 980 150 C 1010 185, 1005 230, 980 265"
          fill="none"
          stroke="#c4633a"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* Small bottom squiggle */}
        <path
          d="M 60 680 C 120 660, 175 690, 245 672 C 315 654, 355 678, 415 665"
          fill="none"
          stroke="#c4633a"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Eyebrow */}
        <p className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-ink/40 mb-6">
          lincoln square · chicago
        </p>

        {/* Wordmark — Fraunces at full character */}
        <h1
          className="font-serif text-ink"
          style={{
            fontSize: "clamp(4.5rem, 10vw, 9rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            fontVariationSettings: '"opsz" 72, "WONK" 1',
          }}
        >
          Maren
        </h1>

        {/* Tagline */}
        <p className="font-sans text-[1.05rem] font-normal text-ink/65 mt-5 max-w-sm leading-relaxed">
          Hair, color, conversations.{" "}
          <span className="text-ink/40">Lincoln Square.</span>
        </p>

        {/* Handwritten script note */}
        <p
          className="font-script text-terra mt-6 text-[1.3rem]"
          style={{ transform: "rotate(-1.5deg)", display: "inline-block" }}
        >
          currently booking June ↗
        </p>

        {/* Sage CTA — the one sage moment on the page */}
        <div className="mt-10">
          <a
            href="#book"
            className="inline-block font-sans text-[0.75rem] font-medium bg-sage text-cream px-6 py-3 rounded-full hover:bg-sage-light transition-colors duration-200 tracking-wide"
          >
            get on the list
          </a>
        </div>
      </div>
    </section>
  );
}
