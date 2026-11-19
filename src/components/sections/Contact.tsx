"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldRule from "@/components/GoldRule";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/SocialIcons";

const PLATFORMS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kreetivmedia",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kreetivmedia.mv",
    icon: TikTokIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9607708368",
    icon: WhatsAppIcon,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [instagram, tiktok, whatsapp] = PLATFORMS;

  return (
    <section
      ref={ref}
      id="contact"
      aria-label="Contact"
      className={`bg-ivory px-6 pb-16 pt-28 text-center text-void transition-all duration-700 ease-out md:pb-20 md:pt-36 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="font-sans text-xs font-extralight uppercase tracking-[0.28em] text-ash">
        Contact
      </span>
      <GoldRule className="mx-auto mt-4 w-10" />
      <h2 className="mt-6 font-display text-5xl font-normal md:text-[60px]">
        Let&apos;s create something great.
      </h2>

      <div className="mx-auto mt-16 flex w-fit flex-col items-center gap-5">
        <a
          href={instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={instagram.label}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-void transition-colors hover:border-gold hover:text-gold"
        >
          <instagram.icon />
        </a>
        <div className="flex gap-5">
          <a
            href={tiktok.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tiktok.label}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-void transition-colors hover:border-gold hover:text-gold"
          >
            <tiktok.icon />
          </a>
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={whatsapp.label}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-void transition-colors hover:border-gold hover:text-gold"
          >
            <whatsapp.icon />
          </a>
        </div>
      </div>

      <a
        href="tel:+9607708368"
        className="mt-16 inline-block border-b border-void font-display text-[34px] font-normal transition-colors hover:border-gold hover:text-gold"
      >
        +960 770-8368
      </a>

      <div className="mx-auto mt-16 max-w-3xl border-t border-gold" />
    </section>
  );
}
