"use client";

import { useForm, ValidationError } from "@formspree/react";
import { products } from "@/lib/products";

const inputClass =
  "mt-2 w-full rounded-xl border border-clay/25 bg-paper px-4 py-3 text-sm text-forest outline-none focus:border-rust";
const labelClass = "text-xs font-semibold uppercase tracking-wider text-clay";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mzdnbevb");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-clay/20 bg-sand-light/60 p-8 text-center">
        <h3 className="font-display text-lg font-semibold text-forest">Message sent.</h3>
        <p className="mt-2 text-sm text-forest/70">
          Thank you. Our export desk will review your query and reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input id="company" name="company" required className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-rust" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input id="country" name="country" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="product" className={labelClass}>
            Product of Interest
          </label>
          <select id="product" name="product" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a product
            </option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="threadStandard" className={labelClass}>
            Thread Standard
          </label>
          <select id="threadStandard" name="threadStandard" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a standard
            </option>
            <option value="Metric (DIN 71412)">Metric (DIN 71412)</option>
            <option value="BSP (BS 1486)">BSP (BS 1486)</option>
            <option value="NPT (SAE J534)">NPT (SAE J534)</option>
            <option value="Not sure, need guidance">Not sure, need guidance</option>
          </select>
        </div>
        <div>
          <label htmlFor="orderType" className={labelClass}>
            What Are You Looking For?
          </label>
          <select id="orderType" name="orderType" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select an option
            </option>
            <option value="Sample request">Sample request</option>
            <option value="Trial order (500 to 1,000 units)">Trial order (500 to 1,000 units)</option>
            <option value="Bulk / container order (10,000+ units)">Bulk / container order (10,000+ units)</option>
            <option value="Just exploring / researching suppliers">Just exploring / researching suppliers</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell Us What You Need
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Thread size, quantity, target price, delivery timeline, or anything else our export desk should know."
          className={`${inputClass} resize-none`}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-rust" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-full bg-rust px-7 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-rust-dark disabled:opacity-60"
      >
        {state.submitting ? "Sending..." : "Send to the Export Desk"}
      </button>

      {state.errors && state.errors.getAllFieldErrors().length > 0 && (
        <p className="text-sm text-rust">
          Something needs a second look above. If the problem continues, email us directly at{" "}
          <a href="mailto:rushabhexports.re@gmail.com" className="font-semibold underline">
            rushabhexports.re@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
