export default function BookingCTA() {
  return (
    <section id="book" className="py-32 bg-ink-true">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <p className="font-sans font-light text-[0.6rem] tracking-[0.38em] uppercase text-gold mb-7">
          Appointments
        </p>
        <h2
          className="font-serif font-normal text-cream leading-[1.08] mb-7"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
        >
          New clients welcome
          <br />
          by waitlist.
        </h2>
        <p className="font-serif italic text-[1.05rem] text-cream/48 leading-[1.75] max-w-sm mx-auto mb-14">
          I typically respond within a few days. If the timing and the work feel
          like a good match, we&apos;ll set up a first appointment.
        </p>
        <a
          href="mailto:hello@marenstudio.com"
          className="inline-block font-sans font-light text-[0.68rem] tracking-[0.22em] uppercase bg-gold text-cream px-11 py-4 rounded-full hover:bg-gold-light transition-colors duration-300"
        >
          Request an appointment
        </a>
      </div>
    </section>
  );
}
