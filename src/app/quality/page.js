import Link from "next/link";

export const metadata = {
  title: "Quality & Standards",
  description:
    "Thread standards, materials and finishes guide, and the quality assurance process behind every Rushabh Enterprise component: DIN 71412, BS 1486, and SAE J534.",
};

const threadStandards = [
  {
    standard: "DIN 71412",
    fullName: "German metric grease fitting standard",
    origin: "Germany",
    type: "Metric parallel",
    sizes: "M6, M8, M10, M12",
    markets: "Germany, wider Europe, India",
  },
  {
    standard: "BS 1486",
    fullName: "British standard grease nipple",
    origin: "United Kingdom",
    type: "BSP taper",
    sizes: "1/8\" BSP, 1/4\" BSP, 3/8\" BSP",
    markets: "Middle East, UK, Commonwealth",
  },
  {
    standard: "SAE J534",
    fullName: "Society of Automotive Engineers standard",
    origin: "USA",
    type: "NPT taper",
    sizes: "1/8\" NPT, 1/4\" NPT",
    markets: "North America",
  },
];

const materials = [
  { name: "Mild Steel", note: "Standard industrial duty, cost-efficient, zinc or nickel plated for corrosion resistance." },
  { name: "Brass", note: "Corrosion resistant, non-sparking, common in manual grease and oil delivery components." },
  { name: "Stainless Steel (SS 304 / SS 316)", note: "Specified for marine, food-grade, and high-corrosion environments." },
  { name: "Aluminium", note: "Lightweight, corrosion resistant, used for oil level indicator bodies." },
  { name: "Industrial Nylon", note: "Impact and heat resistant, used for knobs, caps, and insulated handling points." },
  { name: "Solid Copper", note: "Electrically conductive, corrosion resistant, non-sparking, used for rivets and bonding applications." },
];

const process = [
  {
    title: "Incoming Material Inspection",
    body: "Raw material batches are checked against specification before they enter production: grade, dimension, and surface condition.",
  },
  {
    title: "In-Process Dimensional Checks",
    body: "Components are checked at set intervals through the production run, not only at the final stage, to catch drift early.",
  },
  {
    title: "Final Batch Inspection",
    body: "Finished components are sampled against dimensional and finish tolerances before packaging and release.",
  },
  {
    title: "Batch Traceability",
    body: "Every production run is recorded against a lot number, so a specific shipment can always be traced back to its production batch.",
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="bg-forest py-16 text-sand md:py-20">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-clay">Quality &amp; Standards</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl">
            The reference page your engineers will actually use.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-sand/75 sm:text-base">
            Every Rushabh fitting is machined to a named international standard, never a
            generic approximation. Cross-check the standard your equipment specifies against
            what we manufacture below.
          </p>
        </div>
      </section>

      {/* THREAD STANDARDS */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
            Thread Standards Reference
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-clay/20">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-forest text-xs uppercase tracking-wider text-sand">
                  <th className="px-5 py-3 font-semibold">Standard</th>
                  <th className="px-5 py-3 font-semibold">Full Name</th>
                  <th className="px-5 py-3 font-semibold">Origin</th>
                  <th className="px-5 py-3 font-semibold">Thread Type</th>
                  <th className="px-5 py-3 font-semibold">Common Sizes</th>
                  <th className="px-5 py-3 font-semibold">Primary Markets</th>
                </tr>
              </thead>
              <tbody>
                {threadStandards.map((row, i) => (
                  <tr key={row.standard} className={i % 2 ? "bg-sand-light/40" : "bg-paper"}>
                    <td className="px-5 py-4 font-semibold text-rust">{row.standard}</td>
                    <td className="px-5 py-4 text-forest/75">{row.fullName}</td>
                    <td className="px-5 py-4 text-forest/75">{row.origin}</td>
                    <td className="px-5 py-4 text-forest/75">{row.type}</td>
                    <td className="px-5 py-4 text-forest/75">{row.sizes}</td>
                    <td className="px-5 py-4 text-forest/75">{row.markets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-forest/50">
            Buyers frequently arrive with a part number or a standard reference rather than a
            drawing. This table lets you self-match before contacting our export desk.
          </p>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-sand-light py-16 md:py-20">
        <div className="container-re">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
            Materials &amp; Finishes Guide
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-forest/70">
            Material selection changes with the operating environment. Use this guide to
            self-specify, or ask our export desk to recommend a material for your application.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((m) => (
              <div key={m.name} className="rounded-2xl bg-paper p-6">
                <h3 className="font-display text-base font-semibold text-forest">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/65">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA PROCESS */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
            Our Quality Assurance Process
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {process.map((step, i) => (
              <div key={step.title} className="flex gap-5 rounded-2xl border border-clay/15 bg-sand-light/50 p-6">
                <span className="font-display text-2xl font-semibold text-rust/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-forest">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/70">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-rust bg-sand-light/60 p-7">
            <h3 className="font-display text-base font-semibold text-forest">Certification &amp; Test Reports</h3>
            <p className="mt-2 text-sm leading-relaxed text-forest/70">
              We are actively formalising third-party dimensional and material test reporting for
              our export range, alongside ISO 9001 certification. Current test documentation and
              certification status are available on request from our export desk. Ask for the
              latest status for the product line you are evaluating.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-sand">
        <div className="container-re flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Need a specific certification confirmed before you order?
          </h2>
          <Link
            href="/contact"
            className="rounded-full bg-rust px-8 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-rust-dark"
          >
            Ask the Export Desk
          </Link>
        </div>
      </section>
    </>
  );
}
