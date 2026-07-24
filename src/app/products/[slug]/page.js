import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GreaseNippleExplorer from "@/components/GreaseNippleExplorer";
import ProductGallery from "@/components/ProductGallery";
import { products, getProduct, getCoverImage } from "@/lib/products";
import FlagshipBadge from "@/components/FlagshipBadge";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.intro} Manufactured in Rajkot, India. ${product.threadOptions
      .map((t) => t.standard)
      .join(", ")}.`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const isGreaseNipple = product.slug === "grease-nipples";
  const heroImage = getCoverImage(product);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="bg-forest py-16 text-sand md:py-20">
        <div className="container-re grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Link href="/products" className="text-xs font-semibold uppercase tracking-[0.2em] text-clay hover:text-rust">
              &larr; All Products
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl">
                {product.name}
              </h1>
              {product.flagship && <FlagshipBadge />}
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand/75">{product.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.industries.map((ind) => (
                <span key={ind.name} className="rounded-full border border-sand/25 px-4 py-1.5 text-xs font-medium text-sand/85">
                  {ind.name}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-white justify-self-center lg:justify-self-end">
            <Image src={heroImage} alt={product.name} fill className="object-contain p-4" sizes="160px" />
          </div>
        </div>
      </section>

      {/* MAIN: variants + gallery + specs */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re">
          {isGreaseNipple ? (
            <>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Select a Type</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
                Six angles, one precision standard
              </h2>
              <div className="mt-8">
                <GreaseNippleExplorer variants={product.variants} />
              </div>
            </>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
              <ProductGallery images={product.images} alt={product.name} />
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
                  {product.variants[0].name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-forest/75">{product.variants[0].desc}</p>
                <div className="mt-5 rounded-2xl border-l-4 border-rust bg-sand-light/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-rust">Application</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest/75">{product.application}</p>
                </div>
                {product.materialStory && (
                  <div className="mt-5 space-y-3 rounded-2xl bg-forest p-6 text-sand">
                    <p className="text-xs font-semibold uppercase tracking-wider text-clay">
                      {product.materialStory.heading}
                    </p>
                    {product.materialStory.body.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed text-sand/85">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SHARED SPEC TABLE */}
      <section className="bg-sand-light py-16 md:py-20">
        <div className="container-re grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Thread Standards</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
              Available in this range
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-clay/20 bg-paper">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-forest text-xs uppercase tracking-wider text-sand">
                    <th className="px-5 py-3 font-semibold">Standard</th>
                    <th className="px-5 py-3 font-semibold">Sizes</th>
                  </tr>
                </thead>
                <tbody>
                  {product.threadOptions.map((t) => (
                    <tr key={t.standard} className="border-t border-clay/10">
                      <td className="px-5 py-4 font-semibold text-forest">{t.standard}</td>
                      <td className="px-5 py-4 text-forest/70">{t.sizes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-clay">Materials</p>
                <ul className="mt-2 space-y-1 text-sm text-forest/75">
                  {product.materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-clay">Finishes</p>
                <ul className="mt-2 space-y-1 text-sm text-forest/75">
                  {product.finishes.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Specification</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
              Performance data
            </h2>
            <dl className="mt-6 divide-y divide-clay/15 rounded-2xl border border-clay/20 bg-paper">
              <div className="flex justify-between gap-4 px-5 py-4">
                <dt className="text-sm font-medium text-forest/60">Working Pressure</dt>
                <dd className="text-right text-sm font-semibold text-forest">{product.spec.workingPressure}</dd>
              </div>
              <div className="flex justify-between gap-4 px-5 py-4">
                <dt className="text-sm font-medium text-forest/60">Temperature Range</dt>
                <dd className="text-right text-sm font-semibold text-forest">{product.spec.temperatureRange}</dd>
              </div>
              <div className="flex justify-between gap-4 px-5 py-4">
                <dt className="text-sm font-medium text-forest/60">Sealing / Type</dt>
                <dd className="text-right text-sm font-semibold text-forest">{product.spec.sealingType}</dd>
              </div>
            </dl>

            {product.precisionNote && (
              <div className="mt-6 rounded-2xl border border-clay/20 bg-forest p-6 text-sand">
                <p className="text-xs font-semibold uppercase tracking-wider text-clay">Precision, in Practice</p>
                <p className="mt-2 text-sm leading-relaxed text-sand/85">{product.precisionNote}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INDUSTRIES & APPLICATIONS */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Where It&apos;s Used</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
            Industries &amp; Applications
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.industries.map((ind) => (
              <div key={ind.name} className="rounded-2xl border border-clay/15 bg-sand-light/60 p-6">
                <h3 className="font-display text-base font-semibold text-forest">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/65">{ind.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDERING */}
      <section className="bg-forest py-16 text-sand md:py-20">
        <div className="container-re grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-clay">
              Ordering Information
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-sand sm:text-3xl">
              Placing a first order
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-sand/60">MOQ</p>
                <p className="mt-1 text-sm font-semibold text-sand">{product.ordering.moq}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-sand/60">Standard Pack</p>
                <p className="mt-1 text-sm font-semibold text-sand">{product.ordering.pack}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-sand/60">Lead Time</p>
                <p className="mt-1 text-sm font-semibold text-sand">{product.ordering.leadTime}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="rounded-full bg-rust px-7 py-3.5 text-center text-sm font-semibold text-sand transition-colors hover:bg-rust-dark"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-sand/30 px-7 py-3.5 text-center text-sm font-semibold text-sand transition-colors hover:border-sand"
            >
              Request Samples
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">More From Rushabh</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => {
              const img = getCoverImage(p);
              return (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group rounded-2xl border border-clay/15 bg-sand-light/60 p-6 transition-colors hover:border-rust/40 hover:bg-sand-light"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white">
                    <Image src={img} alt={p.name} fill className="object-contain p-2" sizes="96px" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-forest">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/65">{p.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
