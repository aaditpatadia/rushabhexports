import Link from "next/link";
import Image from "next/image";
import { products, getCoverImage } from "@/lib/products";
import { GearIcon, ShieldIcon, CalendarIcon, DocumentCheckIcon } from "@/components/StatIcons";
import FlagshipBadge from "@/components/FlagshipBadge";

const flagshipProduct = products.find((p) => p.flagship);
const rangeProducts = [...products].sort((a, b) => (b.flagship ? 1 : 0) - (a.flagship ? 1 : 0));

const stats = [
  { value: "7+", label: "Product Lines", icon: GearIcon },
  { value: "3", label: "Thread Standards", icon: ShieldIcon },
  { value: "21-Day", label: "Lead Time, FOB Mundra", icon: CalendarIcon },
  { value: "100%", label: "Batch-Documented", icon: DocumentCheckIcon },
];

const pillars = [
  {
    title: "One Source, Full Stack",
    body:
      "Grease nipples, caps, oil cups, grease cups, level indicators, nylon knobs, and copper rivets, from a single Rajkot facility. One purchase order covers an entire lubrication and fastening requirement.",
  },
  {
    title: "Metric, BSP & NPT",
    body:
      "DIN 71412, BS 1486, and SAE J534 threads manufactured from one facility, serving European, Commonwealth, and North American equipment specifications without a second supplier.",
  },
  {
    title: "Material Flexibility",
    body:
      "Mild Steel, Brass, Stainless Steel, Aluminium, Industrial Nylon, and solid Copper, specified to the environment, from standard industrial duty to marine-grade corrosion resistance.",
  },
  {
    title: "Documented Quality",
    body:
      "Every production batch is tracked by lot number, with dimensional inspection against DIN tolerance and test reports available on request. Built for buyers who need to qualify a supplier, not just price one.",
  },
];

const industries = [
  "Automotive",
  "Construction",
  "Agriculture",
  "Mining",
  "Marine",
  "Electrical & Fabrication",
  "Gearboxes",
  "General Machinery",
];

const threadStandards = [
  { standard: "DIN 71412", origin: "Germany", type: "Metric parallel", markets: "Europe & India" },
  { standard: "BS 1486", origin: "United Kingdom", type: "BSP taper", markets: "UK, Middle East, Commonwealth" },
  { standard: "SAE J534", origin: "USA", type: "NPT taper", markets: "North America" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest text-sand">
        <div className="relative h-[70vh] min-h-[420px] max-h-[820px] w-full">
          <Image
            src="/hero/export-warehouse.png"
            alt="Rushabh Enterprise export warehouse: precision, quality, reliability worldwide"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 border-y border-rust/30">
          <div className="container-wide grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="h-8 w-8 flex-shrink-0 text-rust" />
                <div>
                  <p className="font-display text-2xl font-semibold text-sand sm:text-3xl">{s.value}</p>
                  <p className="mt-0.5 text-xs text-sand/70 sm:text-sm">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP SPOTLIGHT */}
      {flagshipProduct && (
        <section className="bg-sand-light py-20 md:py-28">
          <div className="container-re grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
              <Image
                src={getCoverImage(flagshipProduct)}
                alt={flagshipProduct.name}
                fill
                className="object-contain p-12"
                sizes="(min-width: 1024px) 50vw, 90vw"
              />
            </div>
            <div>
              <FlagshipBadge />
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
                {flagshipProduct.name}
              </h2>
              <p className="mt-3 text-sm font-medium text-clay">{flagshipProduct.tagline}</p>
              {flagshipProduct.materialStory && (
                <div className="mt-6 rounded-2xl bg-forest p-7 text-sand">
                  <p className="text-xs font-semibold uppercase tracking-wider text-clay">
                    {flagshipProduct.materialStory.heading}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-sand/85">
                    {flagshipProduct.materialStory.body}
                  </p>
                </div>
              )}
              <Link
                href={`/products/${flagshipProduct.slug}`}
                className="mt-6 inline-block text-sm font-semibold text-rust hover:text-rust-dark"
              >
                View full specifications &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PRODUCT RANGE */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-re">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">
                The Range
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
                Seven product lines, one manufacturer.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-forest/70">
              Every category below is manufactured in-house in Rajkot, to full dimensional
              specification, with materials and finishes selected for your operating environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rangeProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className={`group rounded-2xl border p-6 transition-colors ${
                  p.flagship
                    ? "border-rust/50 bg-sand-light hover:border-rust"
                    : "border-clay/15 bg-sand-light/60 hover:border-rust/40 hover:bg-sand-light"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-white">
                    <Image src={getCoverImage(p)} alt={p.name} fill className="object-contain p-2" sizes="80px" />
                  </div>
                  {p.flagship && <FlagshipBadge />}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-forest">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/65">{p.tagline}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-rust">
                  View specifications &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RUSHABH */}
      <section className="bg-sand-light py-20 md:py-28">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Why Rushabh</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
            Built the way growth is meant to happen: rooted, then compounding.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="flex gap-5 rounded-2xl bg-paper p-7">
                <span className="font-display text-3xl font-semibold text-rust/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-forest">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/70">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Industries We Serve</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
            Built for the equipment that cannot stop.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-clay/25 bg-sand-light/50 px-5 py-2.5 text-sm font-medium text-forest"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THREAD STANDARDS TEASER */}
      <section className="bg-forest py-20 text-sand md:py-28">
        <div className="container-re grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-clay">
              Quality &amp; Standards
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sand sm:text-4xl">
              The thread reference your engineers already check.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-sand/70">
              Every fitting is machined to a named standard, never a generic approximation.
              Cross-check the standard your equipment specifies against what we manufacture.
            </p>
            <Link
              href="/quality"
              className="mt-7 inline-block rounded-full bg-rust px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-rust-dark"
            >
              View Full Quality Standards
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sand/15">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-sand/10 text-xs uppercase tracking-wider text-sand/70">
                  <th className="px-5 py-3 font-semibold">Standard</th>
                  <th className="px-5 py-3 font-semibold">Origin</th>
                  <th className="px-5 py-3 font-semibold">Thread Type</th>
                  <th className="px-5 py-3 font-semibold">Primary Markets</th>
                </tr>
              </thead>
              <tbody>
                {threadStandards.map((row) => (
                  <tr key={row.standard} className="border-t border-sand/10">
                    <td className="px-5 py-4 font-semibold text-rust">{row.standard}</td>
                    <td className="px-5 py-4 text-sand/80">{row.origin}</td>
                    <td className="px-5 py-4 text-sand/80">{row.type}</td>
                    <td className="px-5 py-4 text-sand/80">{row.markets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HERITAGE TEASER */}
      <section className="bg-sand-light py-20 md:py-28">
        <div className="container-re grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative flex aspect-[4/3] items-center justify-center rounded-3xl bg-forest">
            <Image
              src="/logos/re-mark-white.png"
              alt="Rushabh Enterprise mark"
              width={260}
              height={260}
              className="h-48 w-48 opacity-90 sm:h-56 sm:w-56"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Our Roots</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
              Inspired by Kalpavriksha: growth, continuity, abundance.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-forest/70">
              Rushabh Enterprise is built on the belief that the greatest systems are grown, not
              forced, the same principle behind Kalpavriksha, the tree of life in Jain
              philosophy. Based in Rajkot, India&apos;s precision engineering hub, we bring that
              same patience and balance to every batch of components we manufacture.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-rust hover:text-rust-dark"
            >
              Read our story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-rust py-16 text-sand">
        <div className="container-re flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to qualify Rushabh as a supplier?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-sand/85">
            Request product specifications, a sample kit, or a quote from our export desk.
            We typically respond within one business day.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-forest-dark"
          >
            Talk to the Export Desk
          </Link>
        </div>
      </section>
    </>
  );
}
