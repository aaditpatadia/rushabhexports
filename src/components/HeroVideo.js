"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React does not reliably render the `muted` attribute, and iOS Safari
    // needs it set as a property before autoplay is allowed.
    video.muted = true;

    // Visitors who ask for reduced motion get the poster plus native controls, no autoplay.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      return;
    }

    video.play().catch(() => {});

    // Pause while off-screen so audio never keeps playing after the visitor scrolls away.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next) video.play().catch(() => {});
  }

  return (
    <div className="w-full bg-[#0f0b08]">
      <div className="relative mx-auto w-full md:w-[min(100%,calc((100svh_-_5rem)*16/9))]">
      <video
        ref={videoRef}
        className="block aspect-video w-full object-contain"
        poster="/video/poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Rushabh Enterprise brand film"
      >
        <source src="/video/rushabh-hero.webm" type="video/webm" />
        <source src="/video/rushabh-hero.mp4" type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-sand/40 bg-forest-dark/70 text-sand backdrop-blur-sm transition-colors hover:bg-forest-dark motion-reduce:hidden sm:bottom-5 sm:right-5 sm:h-11 sm:w-11"
      >
        {muted ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="m16 9 5 6M21 9l-5 6" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        )}
      </button>
      </div>
    </div>
  );
}
