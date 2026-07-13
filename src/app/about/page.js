import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Rushabh Enterprise is a precision engineering company based in Rajkot, India, manufacturing lubrication and fastening components inspired by the principles of Kalpavriksha: growth, continuity, and abundance.",
};

const values = [
  {
    title: "Precision",
    body: "Every dimension held to a named standard, not an approximation. Tolerances are checked, not assumed.",
  },
  {
    title: "Strength",
    body: "Materials and finishes selected for the environment a component will actually serve in, not the cheapest option that fits.",
  },
  {
    title: "Reliability",
    body: "The same specification, batch after batch, so the order you reorder is the order you already trust.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest py-16 text-sand md:py-24">
        <div className="container-re grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-clay">About Us</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl">
              Precision engineering, grown with the same patience as the things it borrows from.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/75">
              Rushabh Enterprise is a precision engineering company rooted in the belief that the
              greatest systems are built by observing nature. Based in Rajkot, India&apos;s
              engineering hub, we manufacture precision lubrication and fastening components
              that support industries around the world.
            </p>
          </div>
          <div className="flex aspect-square items-center justify-center rounded-3xl bg-sand/5 border border-sand/10">
            <Image src="/logos/re-mark-white.png" alt="Rushabh Enterprise mark" width={260} height={260} className="h-48 w-48 opacity-90 sm:h-56 sm:w-56" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-re grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Our Philosophy</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
              Kalpavriksha: growth, continuity, abundance.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-forest/75">
              Our name and mark are inspired by the timeless principles of Kalpavriksha, the tree
              of life in Jain philosophy, a symbol of growth, continuity, and abundance. We
              approach manufacturing with the same respect for balance, precision, and purposeful
              creation. Every decision we make is guided by the understanding that lasting
              progress comes from thoughtful design and uncompromising quality, not shortcuts.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-forest/75">
              While our expertise lies in engineering, our vision extends far beyond products.
              We are building a legacy driven by craftsmanship, innovation, and a commitment to
              creating solutions that endure, evolve, and contribute to a better future for the
              customers we serve and the industries we support.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl bg-forest p-8 text-sand">
              <p className="font-display text-lg leading-snug">
                &ldquo;Lasting progress comes from thoughtful design and uncompromising quality.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl bg-rust p-6 text-sand">
              <p className="font-display text-2xl font-semibold">7</p>
              <p className="mt-1 text-xs text-sand/85">Product lines, one facility</p>
            </div>
            <div className="rounded-2xl bg-clay p-6 text-sand">
              <p className="font-display text-2xl font-semibold">3</p>
              <p className="mt-1 text-xs text-sand/85">Thread standards served</p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-sand-light py-16 md:py-24">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Our Story</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
            From a Rajkot workshop to an export-ready manufacturer.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-paper p-7">
              <span className="font-display text-3xl font-semibold text-rust/40">01</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-forest">Origin</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                Rushabh Enterprise was founded in Rajkot, Gujarat, one of India&apos;s foremost
                precision engineering hubs, with a singular focus: components for the
                lubrication and fastening points that keep industrial equipment running.
              </p>
            </div>
            <div className="rounded-2xl bg-paper p-7">
              <span className="font-display text-3xl font-semibold text-rust/40">02</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-forest">Capability</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                Today we manufacture seven product lines: grease nipples, grease nipple caps,
                oil cups, grease cups, aluminium oil level indicators, industrial nylon knobs, and
                copper rivets, from one integrated facility, reducing vendor count for buyers who
                would otherwise source each category separately.
              </p>
            </div>
            <div className="rounded-2xl bg-paper p-7">
              <span className="font-display text-3xl font-semibold text-rust/40">03</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-forest">Ambition</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                We are building our export footprint across Germany, the Middle East, and within
                India, bringing Rajkot precision to buyers who have always relied on Indian
                manufacturing, but rarely had a supplier who documented it to the standard global
                procurement teams expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">What Guides Us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
            Precision. Strength. Reliability.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-clay/15 bg-sand-light/60 p-7">
                <h3 className="font-display text-lg font-semibold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 text-sand">
        <div className="container-re flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Evaluating Rushabh as a supplier?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-sand/80">
            Speak directly with our export desk about specifications, certifications, or a first
            sample order.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-rust px-8 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-rust-dark"
          >
            Contact the Export Desk
          </Link>
        </div>
      </section>
    </>
  );
}
