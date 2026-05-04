export default function About() {
  return (
    <section id="about" className="py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-8">
        <p className="font-sans font-light text-[0.6rem] tracking-[0.38em] uppercase text-gold mb-20">
          About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-14 md:gap-20 items-start">
          {/* Portrait placeholder */}
          <div>
            <div
              className="w-full rounded-[3px]"
              style={{
                aspectRatio: "3 / 4",
                background:
                  "linear-gradient(155deg, #c9a96a 0%, #b8924a 45%, #96762e 100%)",
              }}
            />
            <p className="mt-4 font-sans font-light text-[0.55rem] tracking-[0.22em] uppercase text-ink/28 text-center">
              — portrait —
            </p>
          </div>

          {/* Bio */}
          <div className="md:pt-3">
            <h2
              className="font-serif font-light text-ink leading-none mb-10"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)" }}
            >
              Maren
            </h2>

            <div className="space-y-6 font-serif text-[1.06rem] leading-[1.75] text-ink-soft">
              <p>
                I trained at the Atelier Renault in Paris — a small, old school
                where you cut hair on real people from your second week. No
                mannequins, no hand-holding. It ruined me for shortcuts. I came
                to Chicago eight years ago for a person, stayed for the city, and
                eventually opened this studio in Lincoln Square because the light
                here is good and the neighborhood still feels like a neighborhood.
              </p>
              <p>
                I take a small number of clients each week so every appointment
                feels unrushed. There&apos;s no front desk, no receptionist, no
                other stylists moving around behind you. It&apos;s just us, a
                good playlist, and enough time to get it right. Color is my
                favorite. Blowouts are my meditation.
              </p>
              <p>
                New clients come in by referral or waitlist. If you found me
                through someone whose hair you love, that&apos;s usually how it
                works. If you didn&apos;t, the waitlist form is worth filling
                out — I move people through when the fit feels right.
              </p>
            </div>

            <div className="mt-10 w-10 h-px bg-gold opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
