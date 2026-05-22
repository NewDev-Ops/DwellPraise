import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us - DwellPraise",
  description:
    "Reach out with questions, testimonies, or to connect with our community.",
  openGraph: {
    title: "Contact Us - DwellPraise",
    description: "Reach out with questions, testimonies, or to connect with our community.",
    url: "https://dwellpraise.gt.tc/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://dwellpraise.gt.tc/contact",
  },
};

export default function ContactPage() {
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
        name: "Contact Us",
        item: "https://dwellpraise.gt.tc/contact",
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
            Contact
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop py-block-gap-lg text-center border-b border-outline-variant/20">
        <div className="max-w-[800px] mx-auto flex flex-col items-center gap-block-gap-sm">
          <Reveal>
            <span className="inline-block bg-tertiary text-on-tertiary font-label-bold text-label-bold uppercase px-4 py-2 mb-8">
              Connect With Us
            </span>
            <h1 className="hero-headline font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface uppercase leading-none">
              <span>Let&apos;s</span>
              <span className="text-tertiary">Connect</span>
            </h1>
            <p className="hero-subtitle font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-6">
              We&apos;d love to hear from you. Whether you have questions,
              testimonies, or want to partner with us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-block-gap-lg max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-5xl mx-auto">
          <Reveal delay={100}>
            <div className="bg-surface-container border border-outline-variant/20 p-8 card-lift">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-secondary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">
                Email
              </h3>
              <a
                href="mailto:dwellpraiseministries@gmail.com"
                className="text-tertiary hover:text-tertiary-fixed transition-colors font-body-lg"
              >
                dwellpraiseministries@gmail.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-surface-container border border-outline-variant/20 p-8 card-lift">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-secondary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">
                Phone
              </h3>
              <a
                href="tel:+254743962639"
                className="text-tertiary hover:text-tertiary-fixed transition-colors font-body-lg"
              >
                +254 743 962 639
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-surface-container border border-outline-variant/20 p-8 card-lift">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-secondary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                group
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">
                WhatsApp Group
              </h3>
              <a
                href="https://chat.whatsapp.com/Lk91qB7GRUs4M2MENKcGcA?s=sh&p=a&ilr=2"
                rel="noopener noreferrer"
                target="_blank"
                className="text-tertiary hover:text-tertiary-fixed transition-colors font-body-lg"
              >
                Join the Community
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="bg-surface-container border border-outline-variant/20 p-8 card-lift">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-secondary text-4xl mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                public
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">
                Social Media
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Follow us on Instagram, Threads, X, YouTube, or Substack.
              </p>
              <Link
                href="/media"
                className="text-tertiary hover:text-tertiary-fixed transition-colors font-label-bold text-label-bold text-sm uppercase mt-2 inline-block"
              >
                View All Platforms
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Privacy Policy */}
      <section
        id="privacy"
        className="w-full bg-surface-container-high py-block-gap-sm border-y border-outline-variant/20"
      >
        <div className="px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-6">
              Privacy Policy
            </h2>
            <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>
                At DwellPraise, we respect your privacy and are committed to
                protecting your personal information. This policy outlines how we
                handle any data you share with us.
              </p>
              <h3 className="font-label-bold text-label-bold text-on-surface uppercase mt-6">
                Information We Collect
              </h3>
              <p>
                We may collect information you voluntarily provide when
                contacting us, such as your name, email address, and message
                content. We do not sell, trade, or rent your personal
                information to third parties.
              </p>
              <h3 className="font-label-bold text-label-bold text-on-surface uppercase mt-6">
                How We Use Your Information
              </h3>
              <p>
                Information collected is used solely to respond to your
                inquiries, provide ministry support, and improve our services.
                We may use anonymized, aggregated data for analytics purposes.
              </p>
              <h3 className="font-label-bold text-label-bold text-on-surface uppercase mt-6">
                Data Security
              </h3>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Terms of Service */}
      <section
        id="terms"
        className="w-full px-margin-mobile md:px-margin-desktop py-block-gap-sm max-w-4xl mx-auto"
      >
        <Reveal>
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-6">
            Terms of Service
          </h2>
          <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
            <p>
              By accessing and using the DwellPraise website and services, you
              agree to be bound by these terms.
            </p>
            <h3 className="font-label-bold text-label-bold text-on-surface uppercase mt-6">
              Content
            </h3>
            <p>
              All content on this website, including text, images, logos, and
              media, is the property of DwellPraise Ministries and is protected
              by copyright law. You may not reproduce, distribute, or modify any
              content without express written permission.
            </p>
            <h3 className="font-label-bold text-label-bold text-on-surface uppercase mt-6">
              Use of Services
            </h3>
            <p>
              Our digital ministry services are provided free of charge. We
              reserve the right to modify, suspend, or discontinue any aspect of
              our services at any time.
            </p>
            <h3 className="font-label-bold text-label-bold text-on-surface uppercase mt-6">
              Trademark
            </h3>
            <p>
              DwellPraise™ is a trademark of DwellPraise Ministries. All rights
              reserved. Unauthorized use of our trademark is strictly prohibited.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
