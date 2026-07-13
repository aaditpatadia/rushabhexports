"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setExpanded(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [expanded, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded(true)}
        aria-label="Expand image"
        className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-clay/15 bg-white"
      >
        <Image
          key={images[active]}
          src={images[active]}
          alt={alt}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 480px, 90vw"
          priority
        />
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-forest/80 text-sand opacity-0 transition-opacity group-hover:opacity-100">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
          </svg>
        </span>
      </button>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border bg-white transition-colors ${
                active === i ? "border-rust" : "border-clay/20 hover:border-clay/40"
              }`}
            >
              <Image src={src} alt="" fill className="object-contain p-1.5" sizes="64px" />
            </button>
          ))}
        </div>
      )}

      {expanded && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-dark/95 p-4 sm:p-10"
          onClick={() => setExpanded(false)}
        >
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-sand/30 text-sand transition-colors hover:border-sand sm:right-8 sm:top-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image key={images[active]} src={images[active]} alt={alt} fill className="object-contain" sizes="90vw" />
          </div>

          {images.length > 1 && (
            <div className="mt-6 flex gap-3" onClick={(e) => e.stopPropagation()}>
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border-2 bg-white transition-colors sm:h-16 sm:w-16 ${
                    active === i ? "border-rust" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-contain p-1.5" sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
