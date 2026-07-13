"use client";

import { useState } from "react";
import ProductGallery from "@/components/ProductGallery";

export default function GreaseNippleExplorer({ variants }) {
  const [activeKey, setActiveKey] = useState(variants[0].key);
  const variant = variants.find((v) => v.key === activeKey) || variants[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {variants.map((v) => (
          <button
            key={v.key}
            type="button"
            onClick={() => setActiveKey(v.key)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              activeKey === v.key
                ? "border-rust bg-rust text-sand"
                : "border-clay/25 bg-paper text-forest hover:border-rust/50"
            }`}
          >
            {v.name}
            {v.angle !== "N/A" && <span className="ml-1.5 opacity-70">{v.angle}</span>}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[420px_1fr]">
        <ProductGallery
          key={variant.key}
          images={variant.images}
          alt={`Rushabh Enterprise grease nipple, ${variant.name}`}
        />

        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-display text-2xl font-semibold text-forest">{variant.name}</h3>
            {variant.angle !== "N/A" && (
              <span className="rounded-full bg-forest px-3 py-1 text-xs font-semibold text-sand">{variant.angle}</span>
            )}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-forest/75">{variant.desc}</p>

          <div className="mt-5 rounded-2xl border-l-4 border-rust bg-sand-light/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-rust">Application</p>
            <p className="mt-1.5 text-sm leading-relaxed text-forest/75">{variant.application}</p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-clay">Dimensions</p>
            {variant.dimensions ? (
              <div className="mt-3 overflow-x-auto rounded-xl border border-clay/20">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead>
                    <tr className="bg-forest text-xs uppercase tracking-wider text-sand">
                      {variant.dimensions.columns.map((c) => (
                        <th key={c} className="px-4 py-2.5 font-semibold">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {variant.dimensions.rows.map((row, i) => (
                      <tr key={i} className={i % 2 ? "bg-sand-light/40" : "bg-paper"}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-2.5 text-forest/75">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mt-2 text-sm italic text-forest/55">{variant.dimensionNote}</p>
            )}
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-clay">Thread Sizes in This Type</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {variant.threadSizes.map((t) => (
                <span
                  key={t.thread}
                  className="rounded-full border border-clay/25 bg-paper px-3.5 py-1.5 text-xs font-medium text-forest"
                  title={t.type}
                >
                  {t.thread} <span className="text-forest/50">· Hex {t.hex}</span>
                </span>
              ))}
            </div>
          </div>

          {variant.industries && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-clay">Industries for This Type</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {variant.industries.map((ind) => (
                  <div key={ind.name} className="rounded-xl bg-sand-light/60 p-4">
                    <p className="text-sm font-semibold text-forest">{ind.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-forest/65">{ind.use}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
