"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HashLink from "@/components/HashLink";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-20 bg-void">
      <header className="flex w-full items-center justify-between border-b border-ivory/10 px-6 py-[18px] md:px-12">
        <Link href="/" className="inline-flex items-center text-ivory">
          <Image
            src="/kreetiv-logo-full.png"
            alt="Kreetiv Media"
            width={321}
            height={244}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-9 font-sans text-xs font-extralight uppercase tracking-[0.18em] text-ivory/80 md:flex"
          aria-label="Main menu"
        >
          {NAV_LINKS.filter((link) => link.label !== "FAQ").map((link) =>
            link.href.startsWith("/#") ? (
              <HashLink key={link.href} href={link.href} className="transition-colors hover:text-gold">
                {link.label}
              </HashLink>
            ) : (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">
                {link.label}
              </Link>
            )
          )}
        </nav>
        <HashLink
          href="/#contact"
          className="hidden rounded-full border border-ivory px-[22px] py-2.5 font-sans text-xs font-normal text-ivory transition-colors hover:border-gold hover:text-gold md:inline-flex"
        >
          Contact
        </HashLink>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-void/95 backdrop-blur-sm transition-all duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          className="min-h-0 overflow-hidden border-b border-ivory/10 px-6 py-2"
          aria-label="Mobile menu"
        >
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/#") ? (
              <HashLink
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-ivory/10 py-4 font-sans text-sm uppercase tracking-[0.18em] text-ivory/85 transition-colors last:border-none hover:text-gold"
              >
                {link.label}
              </HashLink>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-ivory/10 py-4 font-sans text-sm uppercase tracking-[0.18em] text-ivory/85 transition-colors last:border-none hover:text-gold"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
