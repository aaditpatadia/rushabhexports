import Link from "next/link";

function Eyebrow({ children, light = false }) {
  return (
    <p className={`font-display text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-clay" : "text-rust"}`}>
      {children}
    </p>
  );
}

function Heading({ children, light = false }) {
  return (
    <h2
      className={`mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl ${
        light ? "text-sand" : "text-forest"
      }`}
    >
      {children}
    </h2>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-forest/75">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PointsOfUse({ guide }) {
  if (!guide?.applications?.length) return null;
  return (
    <div className="mt-14">
      <h3 className="font-display text-lg font-semibold text-forest">Typical points of use</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-forest/65">
        The equipment and positions where this component is normally found.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guide.applications.map((a) => (
          <div key={a.name} className="rounded-2xl border border-clay/15 bg-paper p-6">
            <h4 className="font-display text-base font-semibold text-forest">{a.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-forest/65">{a.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductGuide({ guide, productName }) {
  if (!guide) return null;

  return (
    <>
      {/* UNDERSTAND THE PRODUCT */}
      <section className="bg-sand-light py-16 md:py-20">
        <div className="container-re">
          <Eyebrow>Product Guide</Eyebrow>
          <Heading>Understanding {productName}</Heading>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-forest/75">{guide.summary}</p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-semibold text-forest">What it is</h3>
              <div className="mt-4 space-y-4">
                {guide.whatItIs.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-forest/75">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-forest">How it works</h3>
              <ol className="mt-4 space-y-3">
                {guide.howItWorks.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm leading-relaxed text-forest/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-semibold text-sand">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-clay/20 bg-paper p-7">
              <h3 className="font-display text-lg font-semibold text-forest">Why it is used</h3>
              <Bullets items={guide.whyUsed} />
            </div>
            <div className="rounded-2xl border border-rust/30 bg-paper p-7">
              <h3 className="font-display text-lg font-semibold text-forest">Why buy from Rushabh</h3>
              <Bullets items={guide.whyBuy} />
            </div>
          </div>

          {guide.partner && (
            <div className="mt-6 rounded-2xl bg-forest p-7 text-sand sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-wider text-clay">Working together</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-sand">{guide.partner.heading}</h3>
              <div className="mt-4 max-w-3xl space-y-3">
                {guide.partner.body.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-sand/85">
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href={guide.partner.linkHref}
                className="mt-5 inline-block rounded-full bg-rust px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-rust-dark"
              >
                {guide.partner.linkLabel} &rarr;
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* BUYING GUIDE + CARE */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>Buying Guide</Eyebrow>
            <Heading>How to choose the right one</Heading>
            <dl className="mt-6 divide-y divide-clay/15 rounded-2xl border border-clay/20 bg-sand-light/60">
              {guide.selection.map((s) => (
                <div key={s.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[150px_1fr] sm:gap-5">
                  <dt className="text-sm font-semibold text-forest">{s.label}</dt>
                  <dd className="text-sm leading-relaxed text-forest/70">{s.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <Eyebrow>Good Practice</Eyebrow>
            <Heading>Care and limits</Heading>
            <Bullets items={guide.care} />
          </div>
        </div>
      </section>

      {/* TECHNICAL BACKGROUND */}
      <section className="bg-sand-light py-16 md:py-20">
        <div className="container-re">
          <Eyebrow>For Engineers and Researchers</Eyebrow>
          <Heading>Technical background</Heading>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {guide.technical.map((t) => (
              <div key={t.label} className="rounded-2xl border border-clay/15 bg-paper p-6">
                <dt className="text-xs font-semibold uppercase tracking-wider text-clay">{t.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-forest/75">{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re max-w-4xl lg:mx-0">
          <Eyebrow>Questions</Eyebrow>
          <Heading>Frequently asked questions</Heading>
          <div className="mt-8 divide-y divide-clay/15 rounded-2xl border border-clay/20 bg-sand-light/60">
            {guide.faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-forest [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-lg leading-none text-rust transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-forest/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
