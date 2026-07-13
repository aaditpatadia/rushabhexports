"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/siteConfig";
import ArrowIcon from "@/components/ArrowIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-forest/75 shadow-sm shadow-black/10 backdrop-blur-md" : "bg-forest"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logos/re-mark-white.png"
            alt="Rushabh Enterprise"
            width={40}
            height={40}
            className="h-9 w-9"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-sand">Rushabh</span>
            <span className="block font-display text-sm font-normal text-sand/80">enterprise</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 text-sm font-medium transition-colors ${
                  active
                    ? "border-b-2 border-rust text-sand"
                    : "border-b-2 border-transparent text-sand/75 hover:text-sand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group flex items-center gap-3 rounded-full border border-rust/60 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-sand transition-colors hover:border-rust"
          >
            Get a Quote
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rust text-sand transition-colors group-hover:bg-rust-dark">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand/30 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-sand transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-sand transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-sand transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-sand/10 bg-forest lg:hidden">
          <nav className="container-re flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-sand hover:bg-sand/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-rust px-5 py-3 text-center text-sm font-semibold text-sand"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
