"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldRule from "@/components/GoldRule";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.16.55.55.9 1.11 1.16 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.16-1.77a4.9 4.9 0 0 1 1.77-1.16c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.41.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.53 4.27 8.86 4.27 12s.01 3.47.06 4.51c.04.87.18 1.34.3 1.65.16.41.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.41-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.04.06-1.37.06-4.51s-.01-3.47-.06-4.51c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.66-1.02 2.7 2.7 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm5.35-1.98a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M16.6 2h-3.2v13.4a2.9 2.9 0 1 1-2.05-2.77v-3.28a6.13 6.13 0 1 0 5.25 6.05V8.6a7.9 7.9 0 0 0 4.6 1.47V6.85a4.65 4.65 0 0 1-4.6-4.85Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.02 2C6.5 2 2 6.48 2 11.98c0 1.83.5 3.55 1.36 5.03L2 22l5.13-1.34a10 10 0 0 0 4.89 1.25h.01c5.5 0 10-4.48 10-9.98A9.94 9.94 0 0 0 12.02 2Zm0 18.15h-.01c-1.6 0-3.13-.43-4.47-1.24l-.32-.19-3.05.8.81-2.96-.21-.31a8.15 8.15 0 0 1-1.26-4.35c0-4.53 3.7-8.22 8.25-8.22a8.2 8.2 0 0 1 8.24 8.22c0 4.53-3.7 8.25-8.25 8.25Z" />
    </svg>
  );
}

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
