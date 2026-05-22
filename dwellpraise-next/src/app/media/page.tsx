import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Media & Resources - DwellPraise",
  description:
    "Sermons, worship sessions, podcasts, and community stories from DwellPraise.",
  openGraph: {
    title: "Media & Resources - DwellPraise",
    description: "Sermons, worship sessions, podcasts, and community stories.",
    url: "https://dwellpraise.gt.tc/media",
    type: "website",
  },
  alternates: {
    canonical: "https://dwellpraise.gt.tc/media",
  },
};

const socialPlatforms = [
  {
    name: "YouTube",
    href: "https://m.youtube.com/@dwellpraise",
    icon: "play_circle",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    description: "Sermons, worship sessions, and teaching videos.",
    label: "Watch",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dwellpraise",
    icon: "photo_camera",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    description: "Daily inspiration, behind-the-scenes, and community moments.",
    label: "Follow",
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@dwellpraise",
    icon: "forum",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
    border: "border-tertiary/20",
    description: "Conversations about faith, life, and the Gospel.",
    label: "Join",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/dwellpraise",
    icon: "tag",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    description: "Quick thoughts, scripture, and ministry updates.",
    label: "Follow",
  },
  {
    name: "Substack",
    href: "https://substack.com/@dwellpraise",
    icon: "article",
    color: "text-blue",
    bg: "bg-blue/10",
    border: "border-blue/20",
    description: "Long-form reflections, devotionals, and ministry insights.",
    label: "Read",
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb8ASUxC6ZvcQiTnL83a",
    icon: "chat",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    description: "Direct updates, prayer requests, and community connection.",
    label: "Join",
  },
];

export default function MediaPage() {
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
        name: "Media & Resources",
        item: "https://dwellpraise.gt.tc/media",
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
            Media & Resources
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-block-gap-lg text-center border-b border-outline-variant/20">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-block-gap-sm">
          <Reveal>
            <span className="inline-block bg-secondary text-on-secondary font-label-bold text-label-bold uppercase px-4 py-2 mb-8">
              Social Hub
            </span>
            <h1 className="hero-headline font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface uppercase leading-none">
              <span>One Gospel</span>
              <span className="text-tertiary">Many Platforms</span>
            </h1>
            <p className="hero-subtitle font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-6">
              Find us wherever you are. The Gospel reaches you through every
              channel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Platform Grid */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-block-gap-lg max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {socialPlatforms.map((platform, index) => (
            <Reveal key={platform.name} delay={index * 100}>
              <a
                href={platform.href}
                rel="noopener noreferrer"
                target="_blank"
                className={`border border-outline-variant/20 ${platform.bg} p-8 card-lift block group hover:${platform.border} transition-colors`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-full ${platform.bg} flex items-center justify-center border ${platform.border}`}
                  >
                    <span
                      className={`material-symbols-outlined ${platform.color} text-3xl`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {platform.icon}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`font-headline-md text-headline-md ${platform.color} uppercase mb-2`}
                    >
                      {platform.name}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed mb-4">
                      {platform.description}
                    </p>
                    <span
                      className={`${platform.color} font-label-bold text-label-bold text-sm uppercase flex items-center gap-2 group-hover:gap-3 transition-all`}
                    >
                      {platform.label}{" "}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-surface-container-high py-block-gap-sm border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-center">
          <Reveal>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-4xl mb-6 block mx-auto text-secondary pulse-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              campaign
            </span>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">
              Stay Connected
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              Follow us on any platform and be part of a growing community
              seeking God&apos;s presence through praise.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary text-on-secondary font-label-bold text-label-bold uppercase px-10 py-4 hover:bg-secondary-fixed transition-colors btn-shimmer btn-hover ripple"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
