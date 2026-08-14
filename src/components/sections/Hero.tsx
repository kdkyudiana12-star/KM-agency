import Link from "next/link";
import HashLink from "@/components/HashLink";
import SiteHeader from "@/components/SiteHeader";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-void"
      aria-label="Kreetiv Media introduction"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-bg.mp4"
        poster="/hero-bg-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-void/65" />

      <SiteHeader />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <span className="mb-7 font-sans text-xs font-extralight uppercase tracking-[0.28em] text-ivory/70">
          Social Media Marketing Agency
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-normal leading-[1.08] text-ivory sm:text-6xl lg:text-[78px] lg:leading-[1.06]">
          Your audience is
          <br />
          worth more than likes.
        </h1>
        <p className="mx-auto mt-7 max-w-[460px] font-sans text-base font-light leading-relaxed text-ivory/72 sm:text-lg">
          Ride along as we show you what we build.
        </p>

        <div className="mt-11 flex w-full max-w-sm flex-col items-center gap-4 font-sans font-semibold sm:max-w-none sm:flex-row sm:justify-center">
          <HashLink
            href="/#contact"
            className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-ivory px-8 py-4 text-[13px] uppercase tracking-[0.06em] text-void transition-colors hover:bg-gold sm:w-auto"
          >
            Start a project
          </HashLink>
          <Link
            href="/work"
            className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border border-ivory/30 px-8 py-4 text-[13px] uppercase tracking-[0.06em] text-ivory transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
