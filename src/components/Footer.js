import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/siteConfig";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-forest text-sand">
      <div className="container-re grid gap-x-12 gap-y-12 py-20 md:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr] md:gap-x-16 lg:gap-x-20">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logos/re-mark-white.png" alt="Rushabh Enterprise" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-lg font-semibold text-sand">Rushabh Enterprise</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/70">
            Precision lubrication and fastening components manufactured in Rajkot, India,
            for industries that keep the world moving, exported to Germany, the Middle East,
            and beyond.
          </p>
          <p className="mt-6 font-display text-sm tracking-wide text-clay">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand">Navigate</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-rust">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand">Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand/70">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="transition-colors hover:text-rust">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand/70">
            <li>{siteConfig.location}</li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-rust">
                {siteConfig.email}
              </a>
            </li>
            <li>FOB Mundra Port, Gujarat</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="container-re flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Rushabh Enterprise. All rights reserved.</p>
          <p>Manufactured in Rajkot, India · Built for Reliability.</p>
        </div>
      </div>
    </footer>
  );
}
