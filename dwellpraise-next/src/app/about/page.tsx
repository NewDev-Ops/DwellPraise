import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About - DwellPraise",
  description:
    "Cultivating a dwelling place for God through structured, intentional digital ministry content and physical church planting.",
  openGraph: {
    title: "About - DwellPraise",
    description:
      "Learn about DwellPraise's vision, mission, and digital ministry approach to spreading the Gospel.",
    url: "https://dwellpraise.gt.tc/about",
    type: "website",
  },
  alternates: {
    canonical: "https://dwellpraise.gt.tc/about",
  },
};

export default function AboutPage() {
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://dwellpraise.gt.tc/about",
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About DwellPraise™",
    description:
      "Learn about DwellPraise's vision, mission, and digital ministry approach to spreading the Gospel.",
    url: "https://dwellpraise.gt.tc/about",
    mainEntity: {
      "@type": "NGO",
      name: "DwellPraise",
      alternateName: "DwellPraise™",
      trademark: "DwellPraise",
      description:
        "A Gospel Living Movement cultivating a dwelling place for God through digital ministry and physical church planting.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-background w-full border-b border-outline-variant/10"
      >
        <div className="flex items-center gap-2 px-margin-mobile md:px-margin-desktop py-3 max-w-[1440px] mx-auto text-sm">
          <Link
            href="/"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-xs text-outline-variant"
          >
            chevron_right
          </span>
          <span
            className="text-on-surface font-label-bold text-label-bold"
            aria-current="page"
          >
            About
          </span>
        </div>
      </nav>

      {/* Vision Section */}
      <section
        aria-label="Our vision"
        className="w-full px-margin-mobile md:px-margin-desktop py-block-gap-lg max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter items-center">
          <div className="col-span-4 md:col-span-8 flex flex-col gap-6">
            <Reveal>
              <span className="bg-secondary text-on-secondary font-label-bold text-label-bold uppercase px-4 py-2 self-start inline-block">
                The Vision
              </span>
              <h1 className="hero-headline font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary uppercase">
                <span>One Church</span>
                <span className="text-tertiary">Many Locations</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-secondary pl-6 py-2">
                We are confident that God is actively at work just like he was
                yesterday, and He continues to do so today. This is what
                DwellPraise is all about. It has evolved from the prayers of two
                individuals into an international body that lives out and
                reflects His Word. Our dream today is to have thriving churches
                planted in the nations, where the Lord truly resides in our
                praises.
              </p>
            </Reveal>
          </div>
          <div className="col-span-4 md:col-span-4 mt-8 md:mt-0 flex justify-center md:justify-end">
            <Reveal delay={200}>
              <div className="w-full max-w-sm aspect-square bg-surface-container flex items-center justify-center p-8 relative overflow-hidden group gentle-float">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="w-full h-full flex items-center justify-center relative z-10 drop-shadow-[0_0_15px_rgba(255,182,140,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(255,182,140,0.35)] transition-all duration-500">
                  <span className="material-symbols-outlined text-[120px] text-tertiary/40">
                    church
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Digital Philosophy */}
      <section
        aria-label="Our digital philosophy"
        className="w-full bg-surface-container-high py-block-gap-lg border-y border-outline-variant/20"
      >
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter">
            <div className="col-span-4 md:col-span-12 flex justify-between items-end border-b border-outline-variant/20 pb-8 mb-8 section-divider">
              <Reveal>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary uppercase">
                  One Post.
                  <br />
                  <span className="text-tertiary">One Soul.</span>
                </h2>
              </Reveal>
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-tertiary text-6xl hidden md:block pulse-icon"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                all_inclusive
              </span>
            </div>
            <div className="col-span-4 md:col-span-6 pr-0 md:pr-12">
              <Reveal delay={100}>
                <p className="font-body-lg text-body-lg text-on-surface mb-6">
                  We are busy sharing the Good News through the internet on
                  various platforms including Substack, Threads, Instagram, and
                  Twitter. We want to plant a seed in your life that God can
                  increase to change another&apos;s life.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We are swapping the infinite scroll for something more
                  profound, that can&apos;t be given by people but by God — an
                  opportunity to grow and give thyself wholly to His purpose.
                </p>
              </Reveal>
            </div>
            <div className="col-span-4 md:col-span-6 mt-8 md:mt-0 bg-surface p-8 border border-outline-variant/20 card-lift">
              <Reveal delay={200}>
                <h3 className="font-headline-md text-headline-md text-secondary uppercase mb-6 border-b border-outline-variant/20 pb-4">
                  Our Digital Vision
                </h3>
                <ul className="flex flex-col" role="list">
                  <li className="py-4 border-b border-outline-variant/20 flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-secondary mt-1"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      eco
                    </span>
                    <div>
                      <span className="font-label-bold text-label-bold block mb-1">
                        Organic Reach over Artificial Virality
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Trusting the Spirit to amplify the message to the right
                        hearts.
                      </span>
                    </div>
                  </li>
                  <li className="py-4 border-b border-outline-variant/20 flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-secondary mt-1"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      architecture
                    </span>
                    <div>
                      <span className="font-label-bold text-label-bold block mb-1">
                        Architectural Clarity
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Designing spaces that remove distraction and center the
                        Gospel.
                      </span>
                    </div>
                  </li>
                  <li className="py-4 flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-secondary mt-1"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      volunteer_activism
                    </span>
                    <div>
                      <span className="font-label-bold text-label-bold block mb-1">
                        Relentless Reverence
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        Approaching digital creation as an act of worship.
                      </span>
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Arms */}
      <section
        aria-label="Our Ministry Arms"
        className="w-full px-margin-mobile md:px-margin-desktop py-block-gap-lg max-w-[1440px] mx-auto"
      >
        <div className="mb-12">
          <Reveal>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary uppercase">
              A Gospel Living{" "}
              <span className="text-secondary">Movement.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-4">
              This is only the beginning of our digital reach. DwellPraise is
              built on a structure that includes physical arms which will help us
              grow, sustain operations, and increase our physical reach not just
              in our communities, but all over the world.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link
            href="/generosity"
            className="bg-surface-container border border-outline-variant/20 p-8 group card-lift hover:border-secondary transition-colors block"
          >
            <Reveal delay={100}>
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-secondary text-5xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                diversity_1
              </span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-3">
                Encounter Generosity
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Our arm to the people, focused on free generosity. We dedicate
                funds to enable the businesses, ideas, and visions of our
                community, while also providing immediate relief for daily needs.
              </p>
              <span className="text-secondary font-label-bold text-label-bold text-sm uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </Reveal>
          </Link>

          <div className="bg-surface-container border border-outline-variant/20 p-8 group card-lift hover:border-secondary transition-colors">
            <Reveal delay={200}>
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-secondary text-5xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                settings
              </span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-3">
                Rise Operations
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                The core engine handling the physical needs of our ministry,
                from rent and transport to the acquisition of essential
                structural and media equipment. Through our Ventures initiative,
                we focus on gaining equity and building self-sustaining
                businesses that support our tent making ministry.
              </p>
            </Reveal>
          </div>

          <div className="bg-surface-container border border-outline-variant/20 p-8 group card-lift hover:border-secondary transition-colors">
            <Reveal delay={300}>
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-secondary text-5xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_city
              </span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-3">
                DwellRise
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Our mandate is to Arise & Build. DwellRise exists to increase
                DwellPraise locations worldwide. We do this by actively buying
                land in strategic locations and constructing structures, such as
                Reasonable Cheaper Service Units (RCSU), to plant thriving
                physical churches.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
