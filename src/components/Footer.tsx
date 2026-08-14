import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/kreetivmedia", label: "Instagram" },
  { href: "https://www.tiktok.com/@kreetivmedia.mv", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="border-t border-void/10 bg-ivory px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center">
          <Image
            src="/kreetiv-mark.png"
            alt="Kreetiv Media"
            width={313}
            height={235}
            className="h-16 w-auto"
          />
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-1 sm:gap-x-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center font-sans text-sm font-light text-ash transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 sm:gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-sans text-sm font-light text-ash transition-colors hover:text-gold"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl font-sans text-xs font-light text-ash">
        © {new Date().getFullYear()} Kreetiv Media. All rights reserved.
      </p>
    </footer>
  );
}
