import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "DwellPraise - One Gospel Many Platforms",
  description:
    "A ministry cultivating dwelling places for God through structured, intentional content. One Gospel, Many Platforms.",
  openGraph: {
    title: "DwellPraise - One Gospel Many Platforms",
    description:
      "A ministry cultivating dwelling places for God through structured, intentional content.",
    url: "https://dwellpraise.gt.tc",
    type: "website",
  },
};

export default function HomePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dwellpraise.gt.tc",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section
        aria-label="Hero"
        className="hero-gradient min-h-[80vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-block-gap-lg text-center border-b border-outline-variant/20"
      >
        <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-block-gap-sm">
          <h1 className="hero-headline font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface uppercase leading-none">
            <span>One Gospel</span>
            <span>Many Platforms</span>
          </h1>
          <p className="hero-subtitle font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
            The Lord Makes His Home in the Praises of His People
          </p>
          <div className="hero-cta mt-8">
            <Link
              href="/about"
              className="inline-block bg-tertiary text-on-tertiary px-8 py-4 font-label-bold text-label-bold uppercase tracking-wider hover:bg-tertiary-fixed transition-colors border border-tertiary btn-shimmer btn-hover ripple"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Social Hub Bento Grid */}
      <section
        aria-label="Social media feeds"
        className="px-margin-mobile md:px-margin-desktop py-block-gap-lg max-w-[1440px] mx-auto"
      >
        <div className="flex justify-between items-end mb-12 border-b border-outline-variant/20 pb-4 section-divider">
          <Reveal>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">
              Social Hub
            </h2>
          </Reveal>
          <Link
            href="/media"
            className="font-label-bold text-label-bold text-secondary uppercase hover:text-secondary-fixed flex items-center gap-2 view-all-arrow"
          >
            View All{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px]">
          {/* YouTube Card */}
          <Reveal delay={100}>
            <a
              href="https://m.youtube.com/@dwellpraise"
              aria-label="Latest YouTube video"
              className="md:col-span-8 row-span-2 relative group overflow-hidden border border-outline-variant/20 bg-surface-container card-image-zoom block"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-tertiary/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-8xl text-secondary/30 group-hover:text-secondary/50 transition-colors duration-500">
                  play_circle
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="inline-block bg-secondary text-on-secondary px-3 py-1 font-label-bold text-caption uppercase mb-4">
                  Latest Video
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">
                  The Architecture of Faith
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Exploring structural integrity in modern spiritual practices.
                </p>
              </div>
            </a>
          </Reveal>

          {/* Threads Card */}
          <Reveal delay={200}>
            <a
              href="https://www.threads.net/@dwellpraise"
              aria-label="Latest Threads post"
              className="md:col-span-4 row-span-1 border border-outline-variant/20 bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors duration-300 card-lift"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3 text-tertiary">
                <span className="material-symbols-outlined">forum</span>
                <span className="font-label-bold text-caption uppercase">
                  Threads
                </span>
              </div>
              <div>
                <p className="font-body-lg text-body-lg text-on-surface italic">
                  &quot;God can change your situation&quot;
                </p>
                <span className="font-label-bold text-caption text-on-surface-variant uppercase mt-4 block">
                  @dwellpraise
                </span>
              </div>
            </a>
          </Reveal>

          {/* Instagram Card */}
          <Reveal delay={300}>
            <a
              href="https://www.instagram.com/dwellpraise"
              aria-label="Latest Instagram post"
              className="md:col-span-4 row-span-1 border border-outline-variant/20 bg-surface-container-high p-6 flex flex-col justify-between hover:bg-surface-bright transition-colors duration-300 card-lift overflow-hidden"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined">photo_camera</span>
                <span className="font-label-bold text-caption uppercase">
                  Instagram
                </span>
              </div>
              <div className="mt-4 flex-1 min-h-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-secondary/30">
                  image
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Magazine Block */}
      <section
        aria-label="Scripture quote"
        className="bg-secondary text-on-secondary py-block-gap-lg px-margin-mobile md:px-margin-desktop text-center"
      >
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-4xl mb-6 block mx-auto pulse-icon"
            >
              format_quote
            </span>
            <blockquote className="font-headline-md text-headline-md leading-tight mb-8">
              And they went out and preached everywhere, the Lord working with
              them and confirming the word through the accompanying signs. Amen.
            </blockquote>
            <cite className="font-label-bold text-label-bold uppercase tracking-widest border-t-2 border-on-secondary/30 pt-4 inline-block not-italic">
              Mark 16:20
            </cite>
          </div>
        </Reveal>
      </section>
    </>
  );
}
