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
  // Spans the full row of the proof grid, for wide images like a video grid.
  wide?: boolean;
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
      { value: "142.8K", label: "Instagram views, latest 30 days" },
      { value: "57.4K", label: "Instagram viewers, latest 30 days" },
      { value: "1,508", label: "Interactions, latest 30 days" },
      { value: "+189", label: "Net followers, latest 30 days" },
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
        src: "/case-studies/the-den-ig-30-days.png",
        alt: "Instagram Insights showing 142,784 views, 189 net followers, and 1,508 interactions in 30 days",
        caption: "Official Instagram Insights, Sep 21 – Oct 20",
      },
      {
        src: "/case-studies/the-den-ig-top-content.png",
        alt: "Instagram views by content type: 43K from reels, 26K from posts, 12K from stories, and top posts at 5.9K, 4.3K, 4.1K, and 3.8K views",
        caption: "57,388 viewers in 30 days, led by reels",
      },
      {
        src: "/case-studies/the-den-dm.png",
        alt: "Customer DM asking for karaoke and sheesha pricing",
        caption: "A real customer DM asking about karaoke & sheesha pricing",
      },
      {
        src: "/case-studies/the-den-dm-order.png",
        alt: "Customer DM asking for delivery and to place an order for tonight",
        caption: "A customer DM placing a delivery order for that night",
      },
      {
        src: "/case-studies/the-den-dm-abroad.png",
        alt: "Indonesian-language DM from someone in Indonesia asking to order chicken satay delivered to a friend in Malé",
        caption: "Reach beyond the Maldives: a follower in Indonesia trying to order for a friend in Malé",
      },
      {
        src: "/case-studies/the-den-tiktok-grid.png",
        alt: "Nine of The Den's TikTok videos, each with over 2,000 views, ranging from 2,026 to 18.9K",
        caption: "Nine TikToks, every one past 2K views — consistent reach, not one-off luck",
        wide: true,
      },
    ],
    outcome:
      "The content didn't just get watched — it got people messaging in for delivery, karaoke pricing, and menu availability, turning the account into a direct sales channel.",
  },
  {
    client: "White Mangrove",
    location: "Maldives",
    category: "Social Media Management",
    context:
      "A café concept built around specialty coffee and quiet indulgence, starting from a small early audience with almost no consistent content presence.",
    approach:
      "Ran ongoing content and community management across Instagram and TikTok — behind-the-bar clips, staff POVs, drink features, and fast replies to DMs and comments — to build a following that actually orders, not just scrolls.",
    headlineStat: { value: "178.5K", label: "Instagram views" },
    stats: [
      { value: "48.6K", label: "TikTok viewers in 28 days, up 132%" },
      { value: "18.8K", label: "New TikTok viewers, up 85%" },
      { value: "1.9K", label: "Instagram content interactions" },
      { value: "44", label: "Messaging contacts from content" },
    ],
    highlights: [
      { value: "45.2K", label: "Viral TikTok #1" },
      { value: "15.6K", label: "Viral TikTok #2" },
      { value: "5,825", label: "Viral TikTok #3" },
    ],
    proof: [
      {
        src: "/case-studies/white-mangrove-tiktok-stats.png",
        alt: "TikTok analytics showing total viewers up 132% and new viewers up 85% for White Mangrove",
        caption: "Official TikTok Analytics, Sep 23 – Oct 20",
      },
      {
        src: "/case-studies/white-mangrove-viral.png",
        alt: "White Mangrove's two viral TikTok videos, at 45.2K and 15.6K views",
        caption: "The two viral TikToks: 45.2K and 15.6K views",
      },
      {
        src: "/case-studies/white-mangrove-comments.png",
        alt: "TikTok comments joking about a drink video, including one asking where the passion fruit drink is",
        caption: "Viewers joking along in the comments — and asking for a drink by name",
      },
      {
        src: "/case-studies/white-mangrove-dm.png",
        alt: "Customer DM asking about delivery options",
        caption: "A real customer DM asking about delivery",
      },
    ],
    outcome:
      "Consistent behind-the-scenes content turned a quiet page into one customers actually message — asking about delivery, hours, and what's on the bar that day.",
  },
  {
    client: "Karak",
    location: "Malé, Maldives",
    category: "Social Media Management",
    context:
      "A boba, momo, and Asian rice bowl spot on Majeedhee Magu with great food and drinks, but a TikTok account that wasn't reaching anyone beyond its regulars.",
    approach:
      "Built a TikTok content engine around what makes Karak craveable — pours, pulls, and close-up food clips with relatable, meme-style hooks made to be shared, not just watched.",
    headlineStat: { value: "+305%", label: "TikTok post views in 28 days" },
    stats: [
      { value: "94.7K", label: "Post views" },
      { value: "149", label: "Shares, up 645%" },
      { value: "1.7K", label: "Likes, up 174%" },
      { value: "1.1K", label: "Profile views, up 228%" },
    ],
    highlights: [{ value: "59.6K", label: "Views on top single video" }],
    proof: [
      {
        src: "/case-studies/karak-stats.png",
        alt: "TikTok analytics showing post views up 305% and shares up 645% for Karak",
        caption: "Official TikTok Analytics, Sep 23 – Oct 20",
      },
      {
        src: "/case-studies/karak-before-after.png",
        alt: "Before: a polished momo graphic post with 411 views. After: a native-style food video with 59.6K views",
        caption: "Before: a polished ad-style post at 411 views. After: native content at 59.6K",
      },
      {
        src: "/case-studies/karak-comments.png",
        alt: "TikTok comments asking where Karak is located, with Karak replying with its address",
        caption: "Viewers asking where to find Karak, straight from the comments",
      },
      {
        src: "/case-studies/karak-dm.png",
        alt: "Customer DM calling themselves a loyal customer and asking Karak to add a banana milkshake to the menu",
        caption: "A self-described loyal customer asking for a new menu item",
      },
    ],
    outcome:
      "Shares grew faster than any other metric — people sent the videos to friends, then asked in the comments where to find the place. Reach that turns into footfall, plus regulars invested enough to request what goes on the menu next.",
  },
  {
    client: "Kayo",
    location: "Maldives",
    category: "Social Media Management",
    context:
      "An online-only Maldivian clothing brand — shirts, tees, and polos sold through kayo.mv — with no physical store and a small social audience, so every sale had to start on the feed.",
    approach:
      "Ran product-led content across TikTok and Instagram built to reach beyond existing followers, and handled the inbox so every price, size, and stock question got a fast reply with a direct checkout link.",
    headlineStat: { value: "+755%", label: "TikTok post views in 28 days" },
    stats: [
      { value: "37.7K", label: "TikTok post views" },
      { value: "1.7K", label: "TikTok likes, up 2,296%" },
      { value: "162", label: "Shares, up 1,520%" },
      { value: "15.8K", label: "New TikTok viewers, up 1,092%" },
      { value: "58.1K", label: "Instagram views, latest 30 days" },
      { value: "81.8%", label: "Instagram views from non-followers" },
      { value: "559", label: "Instagram interactions" },
      { value: "1.1K", label: "TikTok profile views, up 727%" },
    ],
    proof: [
      {
        src: "/case-studies/kayo-tiktok-stats.png",
        alt: "TikTok analytics showing post views up 755%, likes up 2,296%, and shares up 1,520% for Kayo",
        caption: "Official TikTok Analytics, Sep 23 – Oct 20",
      },
      {
        src: "/case-studies/kayo-ig-stats.png",
        alt: "Instagram Insights showing 58,108 views in 30 days, 81.8% from non-followers",
        caption: "Official Instagram Insights — 81.8% of views from non-followers",
      },
      {
        src: "/case-studies/kayo-comments.png",
        alt: "TikTok comments on Kayo posts, including an excited reaction and a question about price",
        caption: "Viewers reacting to new drops and asking about price",
      },
      {
        src: "/case-studies/kayo-dms.png",
        alt: "Six customer DMs to Kayo asking about price, sizes, and stock, each answered with a price or a checkout link to kayo.mv",
        caption: "Real customer DMs: price, size, and stock questions — each answered with a price or a direct checkout link",
        wide: true,
      },
    ],
    outcome:
      "For an online-only brand, the inbox is the storefront. The content now brings in a steady flow of buyers asking what things cost, what sizes are left, and when restocks land — and every one of them gets sent straight to checkout.",
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
        <div
          className={`mt-10 grid grid-cols-1 gap-4 ${
            study.proof.filter((item) => !item.wide).length % 3 === 0
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2"
          }`}
        >
          {study.proof.map((item) => (
            <figure key={item.src} className={item.wide ? "sm:col-span-full" : undefined}>
              {/* Wide collages are unreadable squeezed to phone width, so they
                  keep a readable size and scroll sideways until sm. */}
              <div
                className={
                  item.wide
                    ? "-mx-6 overflow-x-auto px-6 sm:mx-0 sm:overflow-visible sm:px-0"
                    : undefined
                }
              >
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open full-size image: ${item.alt}`}
                  className={`block cursor-zoom-in overflow-hidden rounded-lg border border-ivory/15 transition-colors hover:border-gold/60 ${
                    item.wide ? "min-w-[720px] sm:min-w-0" : ""
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    sizes={item.wide ? "(min-width: 1024px) 1024px, 720px" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                    className="h-auto w-full"
                  />
                </a>
              </div>
              <figcaption className="mt-2.5 font-sans text-xs font-light text-ash">
                {item.caption}
                <span className="sm:hidden">
                  {item.wide ? " · Swipe to see all, tap to enlarge" : " · Tap to enlarge"}
                </span>
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
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const TitleTag = headingLevel;
  const SubheadingTag = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="work"
      aria-label="Case studies"
      className="bg-void px-6 py-28 text-ivory md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-5xl">
        {/* Only the intro animates: fading the whole section makes it one
            layer taller than browsers will paint on phones, which blanks
            the bottom case studies. */}
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-sans text-xs font-extralight uppercase tracking-[0.28em] text-ash">
            Case Studies
          </span>
          <TitleTag className="mt-5 max-w-xl font-display text-4xl font-normal md:text-[44px]">
            Results, not promises.
          </TitleTag>
        </div>

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
