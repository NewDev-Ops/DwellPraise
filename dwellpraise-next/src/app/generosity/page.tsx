import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Encounter Generosity - DwellPraise",
  description:
    "DwellPraise's arm to the people. Free generosity empowering businesses, relieving urgent needs, and building sustainable kingdom impact.",
  openGraph: {
    title: "Encounter Generosity - DwellPraise",
    description:
      "Our arm to the people. Free generosity empowering businesses, relieving urgent needs, and building sustainable kingdom impact.",
    url: "https://dwellpraise.gt.tc/generosity",
    type: "website",
  },
  alternates: {
    canonical: "https://dwellpraise.gt.tc/generosity",
  },
};

const impactRecords = [
  {
    date: "22 Feb 2026",
    recipient: "Encounter To Worship Harvest Ministries",
    icon: "music_note",
    tags: [
      { label: "Tithe", color: "text-primary", bg: "bg-primary/10" },
      { label: "Worship Ministry Support", color: "text-tertiary", bg: "bg-tertiary/10" },
    ],
    description:
      "Funds directed to support Encounter To Worship Harvest Ministries, enabling their worship operations and ministry outreach.",
  },
  {
    date: "25 Mar 2026",
    recipient: "St. Valentine Choir",
    icon: "groups",
    tags: [
      { label: "Tithe", color: "text-primary", bg: "bg-primary/10" },
      { label: "Choir Support", color: "text-tertiary", bg: "bg-tertiary/10" },
    ],
    description:
      "Tithe sent to Missional Worship Harvest Ministries. Generosity portion distributed to support St. Valentine Choir operations and ministry activities.",
  },
];

export default function GenerosityPage() {
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
        name: "About",
        item: "https://dwellpraise.gt.tc/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Encounter Generosity",
        item: "https://dwellpraise.gt.tc/generosity",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-background w-full border-b border-outline-variant/10"
      >
        <div className="flex items-center gap-2 px-margin-mobile md:px-margin-desktop py-3 max-w-[1440px] mx-auto text-sm">
          <Link
            href="/"
            className="text-on-surface-variant hover:text-blue transition-colors"
          >
            Home
          </Link>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-xs text-outline-variant"
          >
            chevron_right
          </span>
          <Link
            href="/about"
            className="text-on-surface-variant hover:text-blue transition-colors"
          >
            About
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
            Encounter Generosity
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient-gen min-h-[70vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-block-gap-lg text-center border-b border-outline-variant/20">
        <div className="max-w-[900px] mx-auto flex flex-col items-center gap-block-gap-sm">
          <Reveal>
            <span className="inline-block bg-blue text-on-blue font-label-bold text-label-bold uppercase px-4 py-2 mb-8">
              A Gospel Giving Movement
            </span>
          </Reveal>
          <h1 className="hero-headline font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface uppercase leading-none reveal">
            <span>Encounter</span>
            <span className="text-blue">Generosity</span>
          </h1>
          <p className="hero-subtitle font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-6">
            Our Arm to the People. Free generosity to the people.
          </p>
          <div className="hero-cta mt-10">
            <Link
              href="#ecosystem"
              className="inline-block bg-tertiary text-on-tertiary px-8 py-4 font-label-bold text-label-bold uppercase tracking-wider hover:bg-tertiary-fixed transition-colors border border-tertiary btn-shimmer btn-hover ripple"
            >
              Explore Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="w-full bg-surface-container-high py-block-gap-sm px-margin-mobile md:px-margin-desktop border-b border-outline-variant/20">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-4xl mb-6 block mx-auto text-blue pulse-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              church
            </span>
            <blockquote className="font-headline-md text-headline-md leading-tight mb-8">
              The vision for Encounter Generosity is to plant churches that
              change their communities.
            </blockquote>
            <div className="w-16 h-px bg-blue/30 mx-auto" />
          </Reveal>
        </div>
      </section>

      {/* Kingdom Ecosystem */}
      <section
        id="ecosystem"
        className="w-full px-margin-mobile md:px-margin-desktop py-block-gap-lg max-w-[1440px] mx-auto"
      >
        <div className="text-center mb-16">
          <Reveal>
            <span className="inline-block bg-blue text-on-blue font-label-bold text-label-bold uppercase px-4 py-2 mb-6">
              The Financial Engine
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface uppercase mb-4">
              The Kingdom Ecosystem
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Pray daily, Collect daily, distribute monthly. Built for
              sustainable impact.
            </p>
          </Reveal>
        </div>

        {/* Allocation Rings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
          <Reveal delay={100}>
            <div className="bg-surface-container border border-outline-variant/20 p-8 text-center card-lift">
              <div className="pct-ring-blue mb-6">
                <svg viewBox="0 0 120 120">
                  <circle className="ring-bg-blue" cx="60" cy="60" r="54" />
                  <circle
                    className="ring-fill-blue"
                    cx="60"
                    cy="60"
                    r="54"
                    style={{ strokeDashoffset: 101.788 }}
                  />
                </svg>
                <div className="ring-value-blue">70%</div>
              </div>
              <h3 className="font-headline-md text-headline-md text-blue uppercase mb-3">
                Reinvest
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                Dedicated to building future holding capacity and longevity.
                Strengthening the foundation for greater kingdom deployment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-surface-container border border-outline-variant/20 p-8 text-center card-lift">
              <div className="pct-ring-tertiary mb-6">
                <svg viewBox="0 0 120 120">
                  <circle className="ring-bg-tertiary" cx="60" cy="60" r="54" />
                  <circle
                    className="ring-fill-tertiary"
                    cx="60"
                    cy="60"
                    r="54"
                    style={{ strokeDashoffset: 271.434 }}
                  />
                </svg>
                <div className="ring-value-tertiary">20%</div>
              </div>
              <h3 className="font-headline-md text-headline-md text-tertiary uppercase mb-3">
                Generous
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                Distributed into community execution. Empowering businesses,
                kingdom ideas, and providing relief for urgent needs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-surface-container border border-outline-variant/20 p-8 text-center card-lift">
              <div className="pct-ring-primary mb-6">
                <svg viewBox="0 0 120 120">
                  <circle className="ring-bg-primary" cx="60" cy="60" r="54" />
                  <circle
                    className="ring-fill-primary"
                    cx="60"
                    cy="60"
                    r="54"
                    style={{ strokeDashoffset: 305.363 }}
                  />
                </svg>
                <div className="ring-value-primary">10%</div>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary uppercase mb-3">
                Tithe
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                Devoted from collections. Honoring the firstfruits principle and
                sustaining the spiritual covering of this work.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Under Generous */}
        <div>
          <div className="flex justify-between items-end mb-12 border-b border-outline-variant/20 pb-4 section-divider">
            <Reveal>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                Under The Generous Portion
              </h3>
            </Reveal>
            <span className="font-label-bold text-label-bold text-on-surface-variant uppercase text-sm">
              How the 20% is distributed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-5xl mx-auto">
            <Reveal delay={100}>
              <div className="bg-surface-container-high border border-outline-variant/20 p-8 card-lift">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue/10 flex items-center justify-center border border-blue/20">
                      <span
                        className="material-symbols-outlined text-blue text-3xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        rocket_launch
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-headline-md text-headline-md text-blue uppercase">
                        Enablement
                      </h4>
                      <span className="font-headline-md text-headline-md text-blue">
                        75%
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                      Empowering businesses, kingdom ideas, and creative visions.
                      We prioritize disciples within the Church family first,
                      providing capital, mentorship, and structural support to
                      launch sustainable ventures.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-surface-container-high border border-outline-variant/20 p-8 card-lift">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                      <span
                        className="material-symbols-outlined text-tertiary text-3xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        volunteer_activism
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-headline-md text-headline-md text-tertiary uppercase">
                        Relief
                      </h4>
                      <span className="font-headline-md text-headline-md text-tertiary">
                        25%
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                      Providing immediate support for urgent and critical needs.
                      From medical emergencies to food insecurity, we respond
                      swiftly to the cries within our community and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Impact & Goals */}
      <section className="w-full bg-surface-container-high py-block-gap-lg border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block bg-blue text-on-blue font-label-bold text-label-bold uppercase px-4 py-2 mb-6">
                Milestones
              </span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface uppercase">
                Impact & Goals
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-5xl mx-auto mb-16">
            <Reveal delay={100}>
              <div className="bg-surface-container border border-outline-variant/20 p-10 text-center card-lift">
                <div className="mb-6">
                  <span
                    className="material-symbols-outlined text-blue text-5xl mb-4 block mx-auto"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    autorenew
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">
                  Sustainable Giving
                </h3>
                <div className="w-16 h-px bg-blue/30 mx-auto mb-4" />
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-sm mx-auto">
                  We want to be able to give today, and tomorrow and onwards
                  without having to think about it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-surface-container border border-outline-variant/20 p-10 text-center card-lift">
                <div className="mb-6">
                  <span
                    className="material-symbols-outlined text-blue text-5xl mb-4 block mx-auto"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    savings
                  </span>
                </div>
                <div className="font-headline-xl text-headline-lg-mobile md:text-headline-lg text-blue uppercase leading-none mb-4">
                  KES 30,000+
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">
                  Total Generosity & Investments
                </h3>
                <div className="w-16 h-px bg-blue/30 mx-auto mb-4" />
                <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed max-w-sm mx-auto">
                  And growing. Every contribution fuels the next wave of kingdom
                  impact.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Impact Records */}
          <div>
            <div className="flex justify-between items-end mb-12 border-b border-outline-variant/20 pb-4 section-divider">
              <Reveal>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase">
                  Impact Records
                </h3>
              </Reveal>
              <span className="font-label-bold text-label-bold text-on-surface-variant uppercase text-sm">
                Who we&apos;ve given to
              </span>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {impactRecords.map((record, index) => (
                <Reveal key={record.date} delay={index * 100}>
                  <div className="bg-surface-container border border-outline-variant/20 p-6 md:p-8 impact-card-blue card-lift">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 border border-blue/20">
                        <span
                          className="material-symbols-outlined text-blue text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {record.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
                            {record.recipient}
                          </h4>
                          <span className="font-label-bold text-label-bold text-on-surface-variant uppercase text-sm whitespace-nowrap">
                            {record.date}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-3">
                          {record.tags.map((tag) => (
                            <span
                              key={tag.label}
                              className={`inline-block ${tag.bg} ${tag.color} font-label-bold text-label-bold uppercase px-3 py-1 text-xs`}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                          {record.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* April 2026 Report */}
              <Reveal delay={300}>
                <div className="bg-surface-container border border-outline-variant/20 p-6 md:p-8 impact-card-blue card-lift">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <span
                        className="material-symbols-outlined text-primary text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        receipt_long
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h4 className="font-headline-md text-headline-md text-on-surface uppercase">
                          April 2026 — Monthly Distribution
                        </h4>
                        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase text-sm whitespace-nowrap">
                          23 Apr 2026
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant/70 text-sm mb-6">
                        Total inflows allocated across Tithe (10%), Generosity
                        (20%), and Reinvestment (70%).
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-surface-container-high rounded p-6 border border-outline-variant/10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
                              <span
                                className="material-symbols-outlined text-blue text-xl"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                rocket_launch
                              </span>
                            </div>
                            <div>
                              <span className="font-label-bold text-label-bold text-on-surface uppercase text-xs">
                                Enablement
                              </span>
                              <span className="font-label-bold text-label-bold text-blue block text-sm">
                                Looming Crafts
                              </span>
                            </div>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                            Business capital provided to a newly started
                            handmade crafts enterprise specializing in
                            fingerless gloves and related products. The support
                            helped the owner navigate a temporary project pause
                            and align production with customer demand.
                          </p>
                        </div>

                        <div className="bg-surface-container-high rounded p-6 border border-outline-variant/10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                              <span
                                className="material-symbols-outlined text-tertiary text-xl"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                build
                              </span>
                            </div>
                            <div>
                              <span className="font-label-bold text-label-bold text-on-surface uppercase text-xs">
                                Relief
                              </span>
                              <span className="font-label-bold text-label-bold text-tertiary block text-sm">
                                Zen Motor&apos;s — Pastor Chongo
                              </span>
                            </div>
                          </div>
                          <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                            Bike repair subsidy provided for a business
                            overhaul that had completely drained the
                            owner&apos;s cash reserves. The timely support saved
                            their business from further damaging expenses and
                            kept daily operations running.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-6">
                    <span
                      className="material-symbols-outlined text-blue text-xl flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    <p className="font-body-md text-body-md text-on-surface-variant/70 text-sm">
                      All distributions verified and documented. Tithe paid to
                      Worship Harvest Ministries.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer & Partnership CTA */}
      <section
        id="partner"
        className="w-full px-margin-mobile md:px-margin-desktop py-block-gap-lg max-w-[1440px] mx-auto"
      >
        <div className="bg-surface-container border border-outline-variant/20 p-10 md:p-16 text-center">
          <Reveal>
            <span className="inline-block bg-blue/10 text-blue font-label-bold text-label-bold uppercase px-4 py-2 mb-8">
              A Request to Our Givers
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface uppercase mb-6">
              Pray for the <span className="text-blue">Initiative</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-4">
              Before the partnership doors open, we ask every giver to carry
              this vision in prayer. Pray that God establishes the foundation,
              opens the right doors, and raises the right people for this work.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/70 italic mb-12 max-w-xl mx-auto">
              &quot;Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves a
              cheerful giver.&quot; — 2 Corinthians 9:7
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://chat.whatsapp.com/Lk91qB7GRUs4M2MENKcGcA?s=sh&p=a&ilr=2"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-blue text-on-blue font-label-bold text-label-bold uppercase px-10 py-4 hover:bg-blue-fixed transition-colors inline-flex items-center gap-3 btn-shimmer btn-hover ripple"
              >
                <span>Join the Group</span>
                <span className="material-symbols-outlined text-sm">group</span>
              </a>
              <span className="font-label-bold text-label-bold text-on-surface-variant uppercase text-sm">
                Coming Soon — Full Partnership
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
