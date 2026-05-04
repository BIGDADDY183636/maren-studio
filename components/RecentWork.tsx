const works = [
  { bg: "#c9a96a", caption: "Textured bob, grown-out nape",         aspect: "4 / 5" },
  { bg: "#c4b49a", caption: "Curtain fringe, balayage grow-out",    aspect: "3 / 4" },
  { bg: "#b8a081", caption: "Single process, deep espresso",        aspect: "5 / 7" },
  { bg: "#ddd0bc", caption: "Full highlights, fine hair",           aspect: "4 / 5" },
  { bg: "#d4c4a4", caption: "Lived-in balayage, warm ends",         aspect: "3 / 4" },
  { bg: "#e4d8c4", caption: "Natural wave, dry cut",                aspect: "5 / 6" },
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
            className="font-serif font-normal text-ink-true leading-none"
            style={{ fontSize: "clamp(2.6rem, 5vw, 3.8rem)" }}
          >
            From the chair.
          </h2>
        </div>

        {/* 2×3 grid — varied aspect ratios, gold hairline borders */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {works.map((work, i) => (
            <div key={i}>
              <div
                className="w-full rounded-[2px] border border-gold/[0.35]"
                style={{
                  aspectRatio: work.aspect,
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
