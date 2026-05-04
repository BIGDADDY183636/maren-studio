export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-terra mb-14">
          about
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 md:gap-20 items-start">
          {/* Portrait placeholder — terracotta-toned */}
          <div>
            <div
              className="w-full rounded-lg"
              style={{
                aspectRatio: "3 / 4",
                background:
                  "linear-gradient(160deg, #d97a52 0%, #c4633a 50%, #7a3a1c 100%)",
              }}
            />
            <p className="mt-3 font-sans text-[0.58rem] tracking-[0.18em] uppercase text-ink/25 text-center">
              — portrait —
            </p>
          </div>

          {/* Bio */}
          <div>
            <h2
              className="font-serif text-ink leading-tight mb-8"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontVariationSettings: '"opsz" 36, "WONK" 0.5',
              }}
            >
              Hey, I&apos;m Maren.
            </h2>

            <div className="space-y-5 font-sans text-[0.95rem] leading-[1.8] text-ink/70">
              <p>
                I cut hair on the North Side. Trained in Chicago, spent three
                years in LA, came back for the pizza (and the people, but mostly
                the pizza). I&apos;ve been in Lincoln Square for four years now
                and it still feels like a neighborhood, which is the whole point.
              </p>
              <p>
                I take a small number of clients each week so we actually have
                time to talk. No rushing, no double-booking, no one hollering
                from the next station. Just good music, a good cut, and you
                leaving with hair you like.
              </p>
              <p>
                New clients come in through the waitlist or a referral. If
                someone sent you, great — that&apos;s how I like to meet people.
                If not, fill out the form and I&apos;ll reach out when there&apos;s
                a good fit.{" "}
                <span className="font-script text-terra text-[1.05rem]" style={{ fontStyle: "normal" }}>
                  (ask me about my dog)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
