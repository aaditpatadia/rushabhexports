import Link from "next/link";
import Image from "next/image";
import { products, getCoverImage } from "@/lib/products";

export const metadata = {
  title: "Products",
  description:
    "Grease nipples, grease nipple caps, oil cups, grease cups, aluminium oil level indicators, industrial nylon knobs, and copper rivets, manufactured in Rajkot, India to Metric, BSP and NPT standards.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-forest py-16 text-sand md:py-20">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-clay">
            Products
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl">
            Seven precision component lines, manufactured in Rajkot.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-sand/75 sm:text-base">
            Every line below is available in Metric (DIN 71412), BSP (BS 1486), or NPT (SAE J534)
            thread standards, across a specified material and finish range. Open any product for
            full dimensional specifications, ordering information, and application notes.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-re grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-clay/15 bg-sand-light/60 p-7 transition-colors hover:border-rust/40 hover:bg-sand-light"
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-xl bg-white">
                <Image src={getCoverImage(p)} alt={p.name} fill className="object-contain p-3" sizes="112px" />
              </div>
              <h2 className="mt-5 font-display text-lg font-semibold text-forest">{p.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest/65">{p.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.materials.slice(0, 3).map((m) => (
                  <span key={m} className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-clay">
                    {m}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-block text-sm font-semibold text-rust">
                View specifications &rarr;
              </span>
            </Link>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-clay/30 bg-transparent p-7">
            <h2 className="font-display text-lg font-semibold text-forest">Need a custom specification?</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest/65">
              Non-standard thread, material, or finish combinations are evaluated case by case.
              Tell our export desk what your equipment requires.
            </p>
            <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-rust hover:text-rust-dark">
              Talk to the Export Desk &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
