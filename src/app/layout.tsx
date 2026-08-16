import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

const siteUrl = "https://kreetiv.media";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kreetiv Media — Social Media Marketing Agency",
    template: "%s | Kreetiv Media",
  },
  description:
    "Kreetiv Media is a social media marketing agency building intentional, results-driven brand presence. Build smarter. Grow louder.",
  keywords: [
    "social media marketing agency",
    "social media management",
    "UGC content",
    "EGC content",
    "website and SEO",
    "Maldives marketing agency",
  ],
  manifest: "/manifest.json",
  openGraph: {
    title: "Kreetiv Media — Social Media Marketing Agency",
    description:
      "Kreetiv Media is a social media marketing agency building intentional, results-driven brand presence.",
    url: siteUrl,
    siteName: "Kreetiv Media",
    type: "website",
    locale: "en_US",
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
    title: "Kreetiv Media — Social Media Marketing Agency",
    description:
      "Kreetiv Media is a social media marketing agency building intentional, results-driven brand presence.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kreetiv Media",
  url: siteUrl,
  logo: `${siteUrl}/kreetiv-logo-full.png`,
  description:
    "Social media marketing agency offering social media management, UGC/EGC content, and website & SEO.",
  slogan: "Build smarter. Grow louder.",
  sameAs: [
    "https://www.instagram.com/kreetivmedia",
    "https://www.tiktok.com/@kreetivmedia.mv",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-void font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
