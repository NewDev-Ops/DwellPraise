"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
  { href: "/generosity", label: "Generosity" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    setCurrentPage(window.location.pathname || "/");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`bg-background w-full top-0 border-b border-outline-variant/20 sticky z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
      role="navigation"
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-[1440px] mx-auto">
        <Link
          href="/"
          aria-label="DwellPraise Home"
          className="flex items-center gap-4 group"
        >
          <Image
            alt="DwellPraise Logo"
            className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 logo-glow"
            height={40}
            src="/logo.png"
            width={40}
            priority
          />
          <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
            DwellPraise
            <sup className="text-[0.5em] align-top ml-0.5 opacity-70">™</sup>
          </span>
        </Link>

        <div
          className="hidden md:flex items-center gap-8 font-label-bold text-label-bold uppercase tracking-widest"
          role="menubar"
        >
          {navLinks.map((link) => {
            const isActive =
              currentPage === link.href ||
              (currentPage === "" && link.href === "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-on-surface transition-colors hover:bg-surface-variant/10 nav-link"
                } px-4 py-2`}
                role="menuitem"
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-secondary text-on-secondary font-label-bold text-label-bold uppercase px-8 py-4 hover:bg-secondary-fixed transition-colors inline-block btn-shimmer btn-hover ripple"
          >
            Connect
          </Link>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden text-on-surface p-2 rounded focus-visible:outline-2 focus-visible:outline-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
        >
          <span
            className={`material-symbols-outlined text-3xl menu-btn-icon ${
              mobileOpen ? "open" : ""
            }`}
          >
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div
        aria-hidden={!mobileOpen}
        className={`mobile-nav md:hidden bg-surface-container border-b border-outline-variant/20 px-margin-mobile ${
          mobileOpen ? "open" : ""
        }`}
        role="menu"
      >
        <div className="flex flex-col gap-4 py-4">
          {navLinks.map((link) => {
            const isActive =
              currentPage === link.href ||
              (currentPage === "" && link.href === "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${
                  isActive
                    ? "text-primary pb-2 uppercase border-b border-outline-variant/20"
                    : "text-on-surface-variant hover:text-on-surface pb-2 uppercase border-b border-outline-variant/20"
                }`}
                role="menuitem"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
