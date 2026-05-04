export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <p className="font-serif font-light text-[1.85rem] tracking-wide text-cream leading-none mb-4">
              Maren
            </p>
            <p className="font-serif italic text-sm text-cream/45 leading-relaxed">
              Cuts, color, and slow afternoons.
            </p>
          </div>

          {/* Address + hours */}
          <div>
            <p className="font-sans font-light text-[0.58rem] tracking-[0.24em] uppercase text-gold mb-4">
              Visit
            </p>
            <p className="font-serif text-cream/75 leading-relaxed">
              4844 N Lincoln Ave
              <br />
              Chicago, IL 60625
            </p>
            <p className="font-serif italic text-sm text-cream/38 mt-4 leading-relaxed">
              By appointment only
              <br />
              Tue – Sat, 10 am – 6 pm
            </p>
          </div>

          {/* Follow */}
          <div>
            <p className="font-sans font-light text-[0.58rem] tracking-[0.24em] uppercase text-gold mb-4">
              Follow
            </p>
            <p className="font-serif italic text-cream/75">@marenstudio</p>
          </div>
        </div>

        {/* Rule + fine print */}
        <div className="border-t border-cream/[0.08] pt-8">
          <p className="font-sans font-light text-[0.54rem] tracking-[0.16em] uppercase text-cream/22">
            © 2025 Maren Studio &nbsp;·&nbsp; Lincoln Square, Chicago &nbsp;·&nbsp; All appointments by request
          </p>
        </div>
      </div>
    </footer>
  );
}
