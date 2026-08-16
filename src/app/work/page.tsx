import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import CaseStudies from "@/components/sections/CaseStudies";
import Footer from "@/components/Footer";

const title = "Our Work — Kreetiv Media";
const description =
  "Real results from Kreetiv Media: social media management, UGC/EGC content, and website & SEO case studies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://kreetiv.media/work",
  },
  openGraph: {
    title,
    description,
    url: "https://kreetiv.media/work",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kreetiv Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: "https://kreetiv.media/work",
  isPartOf: {
    "@type": "WebSite",
    name: "Kreetiv Media",
    url: "https://kreetiv.media",
  },
};

export default function WorkPage() {
  return (
    <main className="flex flex-1 flex-col bg-void">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <SiteHeader />
      <CaseStudies headingLevel="h1" />
      <Footer />
    </main>
  );
}
