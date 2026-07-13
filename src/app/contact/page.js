import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { products } from "@/lib/products";

export const metadata = {
  title: "Contact",
  description:
    "Contact the Rushabh Enterprise export desk for product specifications, sample requests, or a quote. Email rushabhexports.re@gmail.com.",
};

const whatWeSupply = [
  { label: "Product Range", value: "7 product lines", note: "Grease nipples, caps, oil cups, grease cups, level indicators, nylon knobs, copper rivets." },
  { label: "Thread Standards", value: "Metric, BSP & NPT", note: "DIN 71412, BS 1486, and SAE J534, all from one facility." },
  { label: "Trial Order MOQ", value: "From 500 units", note: "Per SKU, scaling to full container loads." },
  { label: "Lead Time", value: "21 working days", note: "From confirmed PO, FOB Mundra Port, Gujarat." },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest py-16 text-sand md:py-20">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-clay">Contact</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl">
            Talk to the export desk.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-sand/75 sm:text-base">
            Specifications, samples, or a first quote. We typically reply within one business day.
          </p>
        </div>
      </section>

      {/* WHAT WE SUPPLY */}
      <section className="bg-sand-light py-12 md:py-14">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">
            What You&apos;re Talking To
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeSupply.map((f) => (
              <div key={f.label} className="rounded-2xl bg-paper p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-clay">{f.label}</p>
                <p className="mt-1 font-display text-xl font-semibold text-forest">{f.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-forest/60">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-re grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-clay/15 bg-sand-light/40 p-7 sm:p-9">
            <h2 className="font-display text-lg font-semibold text-forest">Reach the Export Desk</h2>
            <p className="mt-2 text-sm leading-relaxed text-forest/65">
              Tell us what you need. The more detail you give (thread standard, quantity, target
              country) the faster we can quote accurately, so answer what you can below.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-forest p-7 text-sand">
              <h2 className="font-display text-lg font-semibold">Export Desk</h2>
              <ul className="mt-4 space-y-3 text-sm text-sand/80">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-sand/50">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="font-semibold hover:text-rust">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-sand/50">Location</span>
                  {siteConfig.location}
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-sand/50">Shipping</span>
                  FOB Mundra Port, Gujarat
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-clay/15 bg-sand-light/60 p-7">
              <h2 className="font-display text-lg font-semibold text-forest">Office Hours</h2>
              <p className="mt-3 text-sm leading-relaxed text-forest/70">
                10:00 AM – 9:00 PM IST, Monday – Saturday
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-clay/15 pt-4 text-sm text-forest/70">
                <div>
                  <p className="text-xs uppercase tracking-wider text-clay">Germany (CET/CEST)</p>
                  <p className="mt-1 font-semibold text-forest">~5:30 AM – 5:00 PM</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-clay">Middle East (GST)</p>
                  <p className="mt-1 font-semibold text-forest">~8:30 AM – 7:30 PM</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-forest/50">
                Outside these hours, email or WhatsApp reach us fastest. We respond as soon as
                the desk opens.
              </p>
            </div>

            <div className="rounded-2xl border border-clay/15 bg-sand-light/60 p-7">
              <h2 className="font-display text-lg font-semibold text-forest">Prefer WhatsApp?</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                Use the WhatsApp button in the corner of every page for the fastest response on
                quick specification questions.
              </p>
            </div>

            <div className="rounded-2xl border border-clay/15 bg-sand-light/60 p-7">
              <h2 className="font-display text-lg font-semibold text-forest">Not Sure Where to Start?</h2>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                If you don&apos;t have a part number or drawing yet, describe the equipment or
                application in the message field. Our export desk will help match the right
                product, thread standard, and material before you commit to an order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK PRODUCT REFERENCE */}
      <section className="bg-sand-light py-16 md:py-20">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-rust">Quick Reference</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
            What Rushabh manufactures
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.slug} className="rounded-2xl bg-paper p-5">
                <p className="font-display text-sm font-semibold text-forest">{p.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-forest/60">{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
