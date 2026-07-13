import Link from "next/link";

export const metadata = {
  title: "Export & Logistics",
  description:
    "MOQ, lead times, payment terms, and freight timelines from FOB Mundra to Germany, the Middle East, and within India. How to place a first order with Rushabh Enterprise.",
};

const freight = [
  { region: "Middle East (Jebel Ali / Dubai)", transit: "5 – 9 days", note: "Our most established export lane." },
  { region: "Germany (Hamburg / Bremerhaven)", transit: "18 – 24 days", note: "Standard sea freight, FOB Mundra." },
  { region: "Within India", transit: "3 – 7 days", note: "By road or rail freight, depending on destination." },
];

const orderSteps = [
  {
    title: "Share your specification",
    body: "Send us the thread standard, size, material, and finish you need, or a part number/drawing if you have one. No specification yet? Our export desk will help you match one.",
  },
  {
    title: "Request a sample",
    body: "We can dispatch a sample kit for qualification before you commit to a trial order, so your team can verify fit and finish first-hand.",
  },
  {
    title: "Confirm your order",
    body: "Once specifications are confirmed, we issue a proforma invoice covering MOQ, pricing, and lead time for your sign-off.",
  },
  {
    title: "Production & dispatch",
    body: "Your order enters production against its batch number, and is packed and dispatched FOB Mundra Port, Gujarat, on the agreed lead time.",
  },
];

export default function ExportLogisticsPage() {
  return (
    <>
      <section className="bg-forest py-16 text-sand md:py-20">
        <div className="container-re">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-clay">
            Export &amp; Logistics
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-sand sm:text-5xl">
            Everything you need to know before you place a first order.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-sand/75 sm:text-base">
            We currently serve buyers in Germany, the Middle East, and across India, shipping
            FOB Mundra Port, Gujarat. Below is the ordering and logistics information our export
            buyers ask for most.
          </p>
        </div>
      </section>

      {/* TERMS */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-clay/15 bg-sand-light/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-rust">Trial Order MOQ</p>
            <p className="mt-2 text-sm text-forest/75">
              From 500 units per SKU, varying by product line. See individual product pages for
              exact minimums.
            </p>
          </div>
          <div className="rounded-2xl border border-clay/15 bg-sand-light/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-rust">Lead Time</p>
            <p className="mt-2 text-sm text-forest/75">
              21 working days from confirmed purchase order and deposit, FOB Mundra.
            </p>
          </div>
          <div className="rounded-2xl border border-clay/15 bg-sand-light/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-rust">Payment Terms</p>
            <p className="mt-2 text-sm text-forest/75">
              New customers: 50% advance, balance before shipment. Terms extend for established
              distributors after initial orders.
            </p>
          </div>
          <div className="rounded-2xl border border-clay/15 bg-sand-light/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-rust">Sample Requests</p>
            <p className="mt-2 text-sm text-forest/75">
              Available for qualified distributors and OEM buyers. Ask our export desk about
              current sample terms for your product of interest.
            </p>
          </div>
        </div>
      </section>

      {/* FREIGHT */}
      <section className="bg-sand-light py-16 md:py-20">
        <div className="container-re">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
            Freight Timelines from FOB Mundra
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-clay/20 bg-paper">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-forest text-xs uppercase tracking-wider text-sand">
                  <th className="px-5 py-3 font-semibold">Destination</th>
                  <th className="px-5 py-3 font-semibold">Typical Sea Transit</th>
                  <th className="px-5 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {freight.map((row, i) => (
                  <tr key={row.region} className={i % 2 ? "border-t border-clay/10 bg-sand-light/40" : "border-t border-clay/10"}>
                    <td className="px-5 py-4 font-semibold text-forest">{row.region}</td>
                    <td className="px-5 py-4 text-forest/75">{row.transit}</td>
                    <td className="px-5 py-4 text-forest/75">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-forest/50">
            Transit times are typical estimates and are confirmed at the time of booking with
            your freight forwarder. Air freight is available for urgent sample shipments.
          </p>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="bg-paper py-16 md:py-20">
        <div className="container-re">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
            Placing Your First Order
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {orderSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5 rounded-2xl border border-clay/15 bg-sand-light/50 p-6">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-forest font-display text-sm font-semibold text-sand">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-forest">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/70">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rust py-16 text-sand">
        <div className="container-re flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to start a conversation?
          </h2>
          <Link
            href="/contact"
            className="rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-forest-dark"
          >
            Contact the Export Desk
          </Link>
        </div>
      </section>
    </>
  );
}
