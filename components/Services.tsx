type Item = { name: string; price: string };
type Section = { heading: string; items: Item[] };

const pricing: Section[] = [
  {
    heading: "Cuts",
    items: [
      { name: "Haircut, dry styling included", price: "from $65" },
      { name: "Cut + blowout", price: "from $85" },
      { name: "Long hair, cut + style", price: "from $95" },
    ],
  },
  {
    heading: "Color",
    items: [
      { name: "Single process color", price: "from $120" },
      { name: "Double process", price: "from $185" },
      { name: "Color + cut", price: "from $195" },
      { name: "Color correction", price: "from $220" },
    ],
  },
  {
    heading: "Balayage & Highlights",
    items: [
      { name: "Partial balayage", price: "from $180" },
      { name: "Full balayage", price: "from $220" },
      { name: "Full highlights", price: "from $210" },
      { name: "Balayage + cut + toner", price: "from $260" },
    ],
  },
  {
    heading: "Blowouts",
    items: [
      { name: "Blowout", price: "$55" },
      { name: "Blowout, iron finish", price: "$65" },
    ],
  },
  {
    heading: "Bridal & Events",
    items: [
      { name: "Bridal hair", price: "by consultation" },
      { name: "Event styling", price: "by consultation" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-cream-deep">
      <div className="max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20">
          <p className="font-sans font-light text-[0.6rem] tracking-[0.38em] uppercase text-gold mb-5">
            Services
          </p>
          <h2
            className="font-serif font-light text-ink leading-none"
            style={{ fontSize: "clamp(2.6rem, 5vw, 3.8rem)" }}
          >
            Pricing
          </h2>
        </div>

        {/* Price list sections */}
        <div className="space-y-14">
          {pricing.map((section) => (
            <div key={section.heading}>
              <h3 className="font-serif italic text-gold text-xl mb-6 pb-3 border-b border-gold/20">
                {section.heading}
              </h3>

              <div className="space-y-3.5">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-baseline gap-2">
                    <span className="font-serif italic text-ink text-[1.05rem] shrink-0">
                      {item.name}
                    </span>
                    {/* Leader dots */}
                    <span
                      className="flex-1 min-w-[1rem]"
                      style={{
                        borderBottom: "1px dotted rgba(26,24,20,0.18)",
                        marginBottom: "3px",
                      }}
                    />
                    <span className="font-sans font-light text-[0.82rem] text-ink-soft whitespace-nowrap tracking-wide">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 font-serif italic text-sm text-ink/45">
          Pricing starts at; final quote given in person.
        </p>
      </div>
    </section>
  );
}
