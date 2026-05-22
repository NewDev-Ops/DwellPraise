import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.instagram.com/dwellpraise",
    label: "Instagram",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    ),
  },
  {
    href: "https://www.threads.net/@dwellpraise",
    label: "Threads",
    icon: (
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.473 12.06v-.12c.027-3.526.877-6.38 2.522-8.43C5.845 1.205 8.598.024 12.18 0h.014c2.746.018 5.064.769 6.886 2.233 1.803 1.447 2.939 3.495 3.376 6.086l-2.468.405c-.74-4.461-3.892-6.354-7.807-6.38-2.909.02-5.11.894-6.54 2.598-1.41 1.681-2.134 4.125-2.157 7.265v.1c.023 3.14.747 5.584 2.157 7.265 1.43 1.704 3.631 2.578 6.54 2.598 1.62-.012 3.08-.312 4.28-.974 1.498-.826 2.378-2.047 2.616-3.629.175-1.156.127-2.602-.152-3.954-.367-1.758-1.257-3.077-2.583-3.816-.406 2.408-1.32 4.208-2.72 5.354-1.352 1.108-3.072 1.536-5.108 1.272-1.555-.202-2.874-.832-3.815-1.825-.996-1.051-1.5-2.46-1.432-3.97.066-1.489.706-2.818 1.8-3.74 1.073-.906 2.543-1.357 4.248-1.303 1.25.04 2.374.312 3.35.812-.125-.669-.315-1.258-.577-1.757-.467-.887-1.188-1.41-2.14-1.555-1.636-.25-3.02.364-3.852 1.69l-2.077-1.387C7.52 3.576 9.574 2.636 12.1 3.038c1.735.265 3.08 1.177 3.895 2.74.495.94.795 2.082.914 3.465.517.437.977.94 1.37 1.507 1.167 1.69 1.769 3.8 1.769 6.09 0 .386-.024.767-.073 1.136-.366 2.432-1.677 4.33-3.79 5.49-1.51.834-3.323 1.254-5.383 1.271zM11.44 11.42c-.967-.013-1.756.218-2.348.689-.569.454-.882 1.083-.914 1.817-.032.723.206 1.342.69 1.849.51.536 1.25.871 2.2.997 1.43.185 2.629-.125 3.563-.921.854-.73 1.457-1.9 1.793-3.477-.63-.397-1.374-.68-2.213-.84a8.05 8.05 0 0 0-.75-.098 7.8 7.8 0 0 0-.765-.016h-.256z" />
    ),
  },
  {
    href: "https://substack.com/@dwellpraise",
    label: "Substack",
    icon: (
      <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.881H22.54v2.836H1.46v-2.836zM1.46 16.356h21.078v7.644L12 18.73l-10.54 5.27v-7.644z" />
    ),
  },
  {
    href: "https://x.com/dwellpraise",
    label: "X (Twitter)",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    href: "https://whatsapp.com/channel/0029Vb8ASUxC6ZvcQiTnL83a",
    label: "WhatsApp",
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
  },
  {
    href: "https://m.youtube.com/@dwellpraise",
    label: "YouTube",
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="bg-surface-container-lowest w-full border-t border-outline-variant/20 mt-auto"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 gap-8 max-w-[1440px] mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-on-surface">
          DwellPraise
          <sup className="text-[0.5em] align-top ml-0.5 opacity-70">™</sup>
        </div>

        <div aria-label="Social media links" className="flex items-center gap-4" role="list">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              aria-label={`Follow us on ${social.label}`}
              className="text-on-surface-variant hover:text-primary social-icon icon-hover tooltip"
              data-tooltip={social.label}
              href={social.href}
              rel="noopener noreferrer"
              role="listitem"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/contact#privacy"
            className="text-on-surface-variant hover:text-primary transition-colors uppercase font-label-bold text-caption"
          >
            Privacy
          </Link>
          <Link
            href="/contact#terms"
            className="text-on-surface-variant hover:text-primary transition-colors uppercase font-label-bold text-caption"
          >
            Terms
          </Link>
          <Link
            href="/media"
            className="text-primary font-bold uppercase font-label-bold text-caption"
          >
            Social Hub
          </Link>
        </div>

        <div className="text-on-surface-variant text-sm text-center md:text-right">
          &copy; {year} DwellPraise
          <sup className="text-[0.5em] align-top ml-0.5 opacity-70">™</sup>.
          All rights reserved. Nevertheless the Gospel shall be preached.
        </div>
      </div>
    </footer>
  );
}
