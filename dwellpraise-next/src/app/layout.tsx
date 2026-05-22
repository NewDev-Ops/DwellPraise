import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { SkipLink } from "@/components/SkipLink";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dwellpraise.gt.tc"),
  title: {
    default: "DwellPraise - One Gospel Many Platforms",
    template: "%s - DwellPraise",
  },
  description:
    "A ministry cultivating dwelling places for God through structured, intentional content. One Gospel, Many Platforms.",
  keywords: [
    "DwellPraise",
    "gospel",
    "ministry",
    "digital ministry",
    "worship",
    "sermons",
    "christian content",
    "Encounter Generosity",
  ],
  authors: [{ name: "DwellPraise Ministries" }],
  creator: "DwellPraise",
  publisher: "DwellPraise Ministries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dwellpraise.gt.tc",
    title: "DwellPraise - One Gospel Many Platforms",
    description:
      "A ministry cultivating dwelling places for God through structured, intentional content.",
    siteName: "DwellPraise",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "DwellPraise Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DwellPraise - One Gospel Many Platforms",
    description:
      "A ministry cultivating dwelling places for God through structured, intentional content.",
    site: "@dwellpraise",
    creator: "@dwellpraise",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "religion",
  alternates: {
    canonical: "https://dwellpraise.gt.tc",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121414" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "DwellPraise",
    alternateName: "DwellPraise™",
    url: "https://dwellpraise.gt.tc",
    logo: "https://dwellpraise.gt.tc/logo.png",
    description:
      "A ministry cultivating dwelling places for God through structured, intentional content.",
    trademark: "DwellPraise",
    sameAs: [
      "https://www.instagram.com/dwellpraise",
      "https://www.threads.net/@dwellpraise",
      "https://substack.com/@dwellpraise",
      "https://x.com/dwellpraise",
      "https://whatsapp.com/channel/0029Vb8ASUxC6ZvcQiTnL83a",
      "https://m.youtube.com/@dwellpraise",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "dwellpraiseministries@gmail.com",
      telephone: "+254-743-962-639",
      contactType: "customer support",
    },
    hasPart: [
      {
        "@type": "WebPage",
        name: "About Us",
        url: "https://dwellpraise.gt.tc/about",
        description:
          "Learn about DwellPraise's vision, mission, and digital ministry approach.",
      },
      {
        "@type": "WebPage",
        name: "Media & Resources",
        url: "https://dwellpraise.gt.tc/media",
        description:
          "Sermons, worship sessions, podcasts, and community stories.",
      },
      {
        "@type": "WebPage",
        name: "Encounter Generosity",
        url: "https://dwellpraise.gt.tc/generosity",
        description:
          "DwellPraise's arm to the people - free generosity empowering businesses and relieving urgent needs.",
      },
      {
        "@type": "WebPage",
        name: "Contact Us",
        url: "https://dwellpraise.gt.tc/contact",
        description:
          "Reach out with questions, testimonies, or to connect with our community.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <meta name="copyright" content="DwellPraise is a trademark of DwellPraise Ministries. All rights reserved." />
        <meta name="expires" content="1 day" />
        <meta name="revisit-after" content="1 day" />
      </head>
      <body className="bg-background text-on-surface font-sans antialiased min-h-screen flex flex-col selection:bg-secondary selection:text-on-secondary page-enter">
        <SkipLink />
        <Navbar />
        <main className="flex-grow" id="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
