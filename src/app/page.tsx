import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/Footer";
import { FAQ_ITEMS } from "@/content/faq";

const SERVICES = [
  "Social Media Management",
  "UGC/EGC Content",
  "Website & SEO",
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Social Media Marketing",
  provider: {
    "@type": "Organization",
    name: "Kreetiv Media",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: SERVICES.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />
      <Services />
      <Testimonial />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}
