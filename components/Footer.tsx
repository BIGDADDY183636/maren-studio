export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-14 px-6 border-t border-cream/[0.06]">
      <div className="max-w-5xl mx-auto">
        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              className="font-serif text-terra text-[1.6rem] tracking-tight leading-none mb-3"
              style={{ fontVariationSettings: '"opsz" 24, "WONK" 0.5' }}
            >
              maren
            </p>
            <p className="font-sans text-[0.82rem] text-cream/40 leading-relaxed">
              Hair, color, conversations.
              <br />
              Lincoln Square, Chicago.
            </p>
          </div>

          {/* Address + hours */}
          <div>
            <p className="font-sans text-[0.62rem] font-medium tracking-[0.18em] uppercase text-terra/70 mb-4">
              visit
            </p>
            <p className="font-sans text-[0.88rem] text-cream/60 leading-relaxed">
              4844 N Lincoln Ave
              <br />
              Chicago, IL 60625
            </p>
            <p className="font-sans text-[0.8rem] text-cream/35 mt-3 leading-relaxed">
              tues–sat, 10–6
              <br />
              by appointment
            </p>
          </div>

          {/* Instagram */}
          <div>
            <p className="font-sans text-[0.62rem] font-medium tracking-[0.18em] uppercase text-terra/70 mb-4">
              follow
            </p>
            <p className="font-sans text-[0.88rem] text-cream/60">@maren.studio</p>
          </div>
        </div>

        {/* Fine print */}
        <div className="border-t border-cream/[0.07] pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[0.6rem] text-cream/20 tracking-wide uppercase">
            © 2025 Maren Studio · Lincoln Square, Chicago
          </p>
          <p className="font-sans text-[0.6rem] text-cream/20 italic">
            made with care in chicago
          </p>
        </div>
      </div>
    </footer>
  );
}
