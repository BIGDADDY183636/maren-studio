const works = [
  { bg: "#c9a96a", caption: "Textured bob, grown-out nape" },
  { bg: "#c4b49a", caption: "Curtain fringe, balayage grow-out" },
  { bg: "#b8a081", caption: "Single process, deep espresso" },
  { bg: "#ddd0bc", caption: "Full highlights, fine hair" },
  { bg: "#d4c4a4", caption: "Lived-in balayage, warm ends" },
  { bg: "#e4d8c4", caption: "Natural wave, dry cut" },
];

export default function RecentWork() {
  return (
    <section className="py-28 bg-cream-light">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-sans font-light text-[0.6rem] tracking-[0.38em] uppercase text-gold mb-5">
            Recent Work
          </p>
          <h2
            className="font-serif font-light text-ink leading-none"
            style={{ fontSize: "clamp(2.6rem, 5vw, 3.8rem)" }}
          >
            From the chair.
          </h2>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {works.map((work, i) => (
            <div key={i}>
              <div
                className="w-full rounded-[2px] border border-ink/[0.05]"
                style={{
                  aspectRatio: "4 / 5",
                  backgroundColor: work.bg,
                }}
              />
              <p className="mt-3 font-serif italic text-sm text-ink-soft leading-snug">
                {work.caption}
              </p>
              <p className="mt-0.5 font-sans font-light text-[0.58rem] tracking-[0.18em] uppercase text-ink/35">
                by Maren
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
