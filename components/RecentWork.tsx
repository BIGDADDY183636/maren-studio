const works = [
  { bg: "#d4846a", caption: "summer balayage",       aspect: "4 / 5" },
  { bg: "#e8d5c4", caption: "lived-in blonde",        aspect: "3 / 4" },
  { bg: "#8a9978", caption: "soft chop",              aspect: "5 / 7" },
  { bg: "#9c4a2a", caption: "warm copper",            aspect: "4 / 5" },
  { bg: "#c4b09a", caption: "babylights",             aspect: "3 / 4" },
  { bg: "#2a2220", caption: "her bridesmaid color",   aspect: "5 / 6" },
];

export default function RecentWork() {
  return (
    <section className="py-24 bg-cream-deep">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-terra mb-4">
            lately
          </p>
          <h2
            className="font-serif text-ink leading-tight"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontVariationSettings: '"opsz" 36, "WONK" 0.4',
            }}
          >
            From the chair.
          </h2>
        </div>

        {/* Grid — varied aspect ratios, warm tones */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {works.map((w, i) => (
            <div key={i}>
              <div
                className="w-full rounded-md"
                style={{ aspectRatio: w.aspect, backgroundColor: w.bg }}
              />
              <p className="mt-2.5 font-sans text-[0.8rem] text-ink/60 lowercase">
                {w.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
