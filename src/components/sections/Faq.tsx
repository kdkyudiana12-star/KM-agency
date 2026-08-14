"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GoldRule from "@/components/GoldRule";
import { FAQ_ITEMS } from "@/content/faq";

export default function Faq() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      id="faq"
      aria-label="Frequently asked questions"
      className={`px-6 pb-28 pt-16 md:pb-36 md:pt-20 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="font-sans text-[11px] font-extralight tracking-[0.2em] uppercase text-gold">
            FAQ
          </span>
          <GoldRule className="mx-auto mt-4 w-10" />
          <h2 className="mt-6 font-display text-4xl font-light text-void md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <dl className="mt-16 divide-y divide-void/10 border-t border-b border-void/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-sans text-base font-semibold text-void"
                  >
                    {item.question}
                    <span aria-hidden="true" className="text-gold">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${index}`}
                  className={`grid overflow-hidden font-sans text-sm font-light leading-relaxed text-ash transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="min-h-0 overflow-hidden">{item.answer}</div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
