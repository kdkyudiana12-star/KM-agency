"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    num: "01",
    title: "Social Media Management",
    desc: "Turn scrollers into regulars with content that shows up every day, everywhere they're already looking.",
    tags: ["Strategy", "Content Calendar", "Community", "Analytics"],
    anchor: "work-social",
  },
  {
    num: "02",
    title: "UGC/EGC Content",
    desc: "Content that doesn't look like an ad — so it doesn't get skipped like one. Built to convert on sight.",
    tags: ["Creator Sourcing", "Short-form Video", "Ad Creative"],
    anchor: "work-ugc",
  },
  {
    num: "03",
    title: "Website & SEO",
    desc: "A site that closes the sale and ranks high enough that the right people actually find it first.",
    tags: ["Web Design", "On-page SEO", "Performance"],
    anchor: "work-seo",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) return 1;
    return hoveredIndex === index ? 2 : 0.5;
  };

  return (
    <section
      ref={ref}
      id="services"
      aria-label="Services"
      className={`bg-ivory py-28 text-void transition-all duration-700 ease-out md:py-36 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <span className="font-sans text-xs font-extralight uppercase tracking-[0.28em] text-ash">
          Services
        </span>
        <h2 className="mt-5 max-w-xl font-display text-4xl font-normal md:text-[44px]">
          Built to turn attention into revenue.
        </h2>

        <div className="mt-14 flex flex-col gap-6 md:mt-20 md:h-[480px] md:flex-row md:gap-2">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.num}
              className="flex min-w-0 flex-col overflow-hidden border-t border-void pt-7 md:border-t-0 md:border-l md:pl-7 md:pt-0"
              style={{ flex: 1 }}
              animate={{ flex: getFlexValue(index) }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="font-display text-5xl font-normal text-gold">
                {service.num}
              </div>
              <h3 className="mt-4 font-sans text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3.5 font-sans text-base font-light leading-[1.8] text-graphite">
                {service.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-void px-4 py-2 font-sans text-xs font-extralight tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/work#${service.anchor}`}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-void px-5 py-2.5 font-sans text-xs uppercase tracking-[0.1em] transition-colors hover:border-gold hover:text-gold"
              >
                View Case Study
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
