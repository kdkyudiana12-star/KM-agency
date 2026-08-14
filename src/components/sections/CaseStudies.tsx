"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldRule from "@/components/GoldRule";

type Stat = { value: string; label: string };

type Proof = {
  src: string;
  alt: string;
  caption: string;
};

type CaseStudy = {
  client: string;
  location: string;
  category: string;
  context: string;
  approach: string;
  headlineStat: Stat;
  stats: Stat[];
  highlights?: Stat[];
  proof?: Proof[];
  outcome: string;
  placeholder?: boolean;
  liveUrl?: string;
};

const SOCIAL_MEDIA_MANAGEMENT_STUDIES: CaseStudy[] = [
  {
    client: "The Den",
    location: "Malé, Maldives",
    category: "Social Media Management",
    context:
      "The first authentic Indonesian restaurant in the Maldives — a rich-flavor kitchen paired with sheesha and karaoke — with barely any social presence to match the concept.",
    approach:
      "Ran full social media management: a consistent content calendar, on-the-ground filming, and community replies that turned casual scrollers into paying customers.",
    headlineStat: { value: "+2,300%", label: "Content interactions" },
    stats: [
      { value: "445.1K", label: "Views, up 393%" },
      { value: "908", label: "New follows, up 773%" },
      { value: "197 → 1,273", label: "Followers" },
      { value: "225.0K", label: "Views on top single post" },
    ],
    highlights: [
      { value: "179.9K", label: "Viral TikTok #1" },
      { value: "36.8K", label: "Viral TikTok #2" },
      { value: "17.3K", label: "Viral TikTok #3" },
    ],
    proof: [
      {
        src: "/case-studies/the-den-stats.png",
        alt: "Instagram Insights showing views up 393% and follows up 773% for The Den",
        caption: "Official Instagram Insights for the campaign period",
      },
      {
        src: "/case-studies/the-den-dm.png",
        alt: "Customer DM asking for karaoke and sheesha pricing",
        caption: "A real customer DM asking about karaoke & sheesha pricing",
      },
    ],
    outcome:
      "The content didn't just get watched — it got people messaging in for delivery, karaoke pricing, and menu availability, turning the account into a direct sales channel.",
  },
  {
    client: "Subcontinental Kitchen",
    location: "Maldives",
    category: "Social Media Management",
    context:
      "A subcontinent-cuisine restaurant with a loyal but small following, looking to turn everyday dishes into content that felt native to the feed rather than like ads.",
    approach:
      "Produced creator-style UGC/EGC content — handheld, native-feeling clips of the kitchen and dishes — built for both organic reach and future ad creative.",
    headlineStat: { value: "+122%", label: "Instagram views in 28 days" },
    stats: [
      { value: "12.4K", label: "Reach, up 168%" },
      { value: "349", label: "Content interactions, up 148%" },
      { value: "178 → 234", label: "Followers" },
      { value: "19.2K", label: "Views on top single post" },
    ],
    proof: [
      {
        src: "/case-studies/subcontinental-stats.png",
        alt: "Instagram Insights showing reach up 168% and content interactions up 148% for Subcontinental Kitchen",
        caption: "Official Instagram Insights, 28-day window",
      },
      {
        src: "/case-studies/subcontinental-dm.png",
        alt: "Customer DM placing a full food order for Hyderabadi biryani, chicken karahi, garlic naan, and steamed chicken momos",
        caption: "A real customer DM placing a full order straight from the content",
      },
    ],
    outcome:
      "Content built to look native did more than get watched — customers started DMing in full orders directly off the back of it.",
  },
];

const WEBSITE_SEO_STUDIES: CaseStudy[] = [
  {
    client: "Brie Restaurant",
    location: "Ubud, Bali",
    category: "Website & SEO",
    context:
      "A restaurant with no real technical SEO foundation — thin metadata, no structured data, and a site structure that made it hard for search engines to understand the business.",
    approach:
      "Handled SEO strategy, technical implementation, and content: meta tags, JSON-LD schema markup, and site structure improvements built to earn rich results and get found without paid ads. Scope covered strategy, implementation, and content — not hosting or deployment.",
    headlineStat: { value: "SEO", label: "" },
    stats: [],
    outcome:
      "Most guests decide on a restaurant before they ever call — a slow or confusing site loses that booking before the conversation starts. Schema markup is what lets a business show up in Google with its rating, menu, and hours already visible, and technical SEO is what makes it discoverable without paying for reach every time.",
    placeholder: true,
    liveUrl: "https://brie-web.vercel.app/",
  },
];

function CaseStudyBlock({
  study,
  HeadingTag,
}: {
  study: CaseStudy;
  HeadingTag: "h2" | "h3";
}) {
  return (
    <article>
      <span className="font-sans text-xs font-extralight uppercase tracking-[0.28em] text-gold">
        {study.category}
      </span>
      <HeadingTag className="mt-3 font-display text-3xl font-normal md:text-4xl">
        {study.client}
      </HeadingTag>
      <p className="mt-1 font-sans text-sm font-light text-ash">
        {study.location}
      </p>

      <p className="mt-6 max-w-2xl font-sans text-base font-light leading-[1.8] text-ivory/70">
        {study.context}
      </p>
      <p className="mt-4 max-w-2xl font-sans text-base font-light leading-[1.8] text-ivory/70">
        {study.approach}
      </p>

      <div className="mt-10 font-display text-5xl font-normal text-gold md:text-6xl">
        {study.headlineStat.value}
      </div>
      {study.headlineStat.label && (
        <p className="mt-2 font-sans text-sm uppercase tracking-[0.1em] text-ash">
          {study.headlineStat.label}
        </p>
      )}

      {study.placeholder ? null : (
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {study.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-normal text-ivory">
                {stat.value}
              </div>
              <div className="mt-1 font-sans text-xs font-light leading-snug text-ash">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {study.highlights && study.highlights.length > 0 && (
        <div className="mt-8">
          <p className="font-sans text-xs uppercase tracking-[0.1em] text-ash">
            Viral moments
          </p>
          <div className="mt-3 grid grid-cols-3 gap-6">
            {study.highlights.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl font-normal text-ivory">
                  {stat.value}
                </div>
                <div className="mt-1 font-sans text-xs font-light leading-snug text-ash">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {study.liveUrl && (
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-fit items-center gap-2 font-sans text-sm text-gold transition-colors hover:text-ivory"
        >
          Visit live site
          <span aria-hidden="true">→</span>
        </a>
      )}

      {study.proof && study.proof.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {study.proof.map((item) => (
            <figure key={item.src}>
              <div className="overflow-hidden rounded-lg border border-ivory/15">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-2.5 font-sans text-xs font-light text-ash">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <p className="mt-10 max-w-2xl font-sans text-base font-medium leading-[1.8] text-ivory">
        {study.outcome}
      </p>
    </article>
  );
}

// 4 slots for EGC/UGC reel highlights — drop a local file path or embed link
// here and this grid switches from a placeholder into a playable one.
const VIDEO_SLOTS: (string | null)[] = [
  "/videos/ugc-1.mp4",
  "/videos/ugc-2.mp4",
  "/videos/ugc-3.mp4",
  "/videos/ugc-4.mp4",
];

function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      src={inView ? src : undefined}
      autoPlay={inView}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}

function VideoPlaceholderGrid({ slots }: { slots: (string | null)[] }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {slots.map((src, index) =>
        src ? (
          <div
            key={index}
            className="aspect-[9/16] overflow-hidden rounded-lg border border-ivory/15 bg-obsidian"
          >
            <LazyVideo src={src} />
          </div>
        ) : (
          <div
            key={index}
            className="flex aspect-[9/16] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-ivory/15 bg-obsidian/50 text-center"
          >
            <Play className="h-6 w-6 text-ivory/40" aria-hidden="true" />
            <span className="font-sans text-xs uppercase tracking-[0.15em] text-ash">
              Add video
            </span>
          </div>
        )
      )}
    </div>
  );
}

function UgcShowcaseBlock({ HeadingTag }: { HeadingTag: "h2" | "h3" }) {
  return (
    <article>
      <span className="font-sans text-xs font-extralight uppercase tracking-[0.28em] text-gold">
        UGC/EGC Content
      </span>
      <HeadingTag className="mt-3 font-display text-3xl font-normal md:text-4xl">
        Why native-feeling content wins right now.
      </HeadingTag>

      <p className="mt-6 max-w-2xl font-sans text-base font-light leading-[1.8] text-ivory/70">
        UGC and EGC content reads as real, not as an ad. It&apos;s shot like
        something a friend would send you, not something a brand paid for —
        and for hospitality especially, that&apos;s the difference between
        getting skipped and getting watched.
      </p>
      <p className="mt-4 max-w-2xl font-sans text-base font-light leading-[1.8] text-ivory/70">
        It&apos;s also what the algorithm rewards. TikTok and Instagram Reels
        push native-feeling content further than polished ads, because
        that&apos;s what keeps people watching — which means the same clip earns
        more reach for less spend.
      </p>
      <p className="mt-4 max-w-2xl font-sans text-base font-light leading-[1.8] text-ivory/70">
        And it builds proof, not just views. Real customer and staff moments
        do the convincing that a brand voice can&apos;t — which is exactly how
        The Den and Subcontinental Kitchen turned scrollers into DMs asking
        about delivery, pricing, and full orders, shown above.
      </p>

      <VideoPlaceholderGrid slots={VIDEO_SLOTS} />
    </article>
  );
}

export default function CaseStudies({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const TitleTag = headingLevel;
  const SubheadingTag = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      ref={ref}
      id="work"
      aria-label="Case studies"
      className={`bg-void px-6 py-28 text-ivory transition-all duration-700 ease-out md:px-12 md:py-36 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <span className="font-sans text-xs font-extralight uppercase tracking-[0.28em] text-ash">
          Case Studies
        </span>
        <TitleTag className="mt-5 max-w-xl font-display text-4xl font-normal md:text-[44px]">
          Results, not promises.
        </TitleTag>

        <div className="mt-20 flex flex-col gap-20 md:gap-24">
          <div id="work-social" className="flex scroll-mt-24 flex-col gap-20 md:gap-24">
            {SOCIAL_MEDIA_MANAGEMENT_STUDIES.map((study, index) => (
              <div key={study.client}>
                {index > 0 && <GoldRule className="mb-20 md:mb-24" />}
                <CaseStudyBlock study={study} HeadingTag={SubheadingTag} />
              </div>
            ))}
          </div>

          <div id="work-ugc" className="scroll-mt-24">
            <GoldRule className="mb-20 md:mb-24" />
            <UgcShowcaseBlock HeadingTag={SubheadingTag} />
          </div>

          <div id="work-seo" className="flex scroll-mt-24 flex-col gap-20 md:gap-24">
            {WEBSITE_SEO_STUDIES.map((study) => (
              <div key={study.client}>
                <GoldRule className="mb-20 md:mb-24" />
                <CaseStudyBlock study={study} HeadingTag={SubheadingTag} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
