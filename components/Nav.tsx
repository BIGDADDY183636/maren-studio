"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "services", href: "#services" },
  { label: "about", href: "#about" },
  { label: "visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-terra/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="font-serif text-terra text-[1.4rem] tracking-tight leading-none"
          style={{ fontVariationSettings: '"opsz" 24, "WONK" 0.5' }}
        >
          maren
        </a>

        {/* Links + CTA */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-[0.75rem] font-medium text-ink/60 hover:text-terra transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="#book"
            className="font-sans text-[0.72rem] font-medium bg-terra text-cream px-4 py-2 rounded-full hover:bg-terra-deep transition-colors duration-200 tracking-wide"
          >
            book a chair
          </a>
        </div>
      </nav>
    </header>
  );
}
