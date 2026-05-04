export default function BookingCTA() {
  return (
    <section id="book" className="py-28 bg-ink">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-terra mb-6">
          appointments
        </p>
        <h2
          className="font-serif text-cream leading-tight mb-6"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
            fontVariationSettings: '"opsz" 48, "WONK" 0.6',
          }}
        >
          Need a{" "}
          <span className="text-terra">chair?</span>
          <br />
          Get on the list.
        </h2>
        <p className="font-sans text-[0.92rem] text-cream/45 leading-relaxed max-w-xs mx-auto mb-12">
          I&apos;ll reach out when there&apos;s a slot that makes sense. Usually
          within a few days.
        </p>
        <a
          href="mailto:hello@marenstudio.com"
          className="inline-flex items-center gap-2 font-sans text-[0.82rem] font-medium bg-terra text-cream px-8 py-3.5 rounded-full hover:bg-terra-deep transition-colors duration-200 tracking-wide"
        >
          Reach out →
        </a>
      </div>
    </section>
  );
}
