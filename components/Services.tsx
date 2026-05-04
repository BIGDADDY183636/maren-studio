const services = [
  {
    name: "Cuts",
    desc: "a real cut, not a 15-minute trim. dry styling always included.",
    price: "from $65",
  },
  {
    name: "Color",
    desc: "single process, double process, corrections. i'll tell you what i actually think.",
    price: "from $120",
  },
  {
    name: "Balayage & Highlights",
    desc: "lived-in color that doesn't need a salon every 6 weeks.",
    price: "from $180",
  },
  {
    name: "Blowouts",
    desc: "a good blowout is genuinely one of life's pleasures.",
    price: "$55",
  },
  {
    name: "Bridal & Events",
    desc: "weddings, bridesmaid days, that fancy dinner. dm me first.",
    price: "let's talk",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-warm">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-terra mb-4">
            what i do
          </p>
          <h2
            className="font-serif text-ink leading-tight"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontVariationSettings: '"opsz" 36, "WONK" 0.4',
            }}
          >
            The services.
          </h2>
          <p className="font-sans text-[0.95rem] text-ink/55 mt-4 max-w-sm leading-relaxed">
            Pricing is honest. No upsells, no surprise add-ons, no pressure.
          </p>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-ink/8">
          {services.map((s) => (
            <div key={s.name} className="py-6 flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3
                  className="font-serif text-ink text-[1.35rem] leading-tight"
                  style={{ fontVariationSettings: '"opsz" 20, "WONK" 0.2' }}
                >
                  {s.name}
                </h3>
                <p className="font-sans text-[0.82rem] text-ink/50 mt-1 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <span className="font-sans font-bold text-[0.88rem] text-terra whitespace-nowrap pt-0.5">
                {s.price}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 font-sans text-[0.78rem] text-ink/40 italic">
          Final quote in person. Deposit required to hold your spot.
        </p>
      </div>
    </section>
  );
}
