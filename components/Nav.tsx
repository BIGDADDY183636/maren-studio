"use client";

import { useState, useEffect } from "react";

const links = ["Services", "About", "Visit"] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-gold/10 shadow-[0_1px_12px_rgba(26,24,20,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-serif font-light text-[1.65rem] tracking-wide text-ink leading-none select-none"
        >
          Maren
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="font-sans font-light text-[0.64rem] tracking-[0.22em] uppercase text-ink-soft hover:text-gold transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#book"
            className="font-sans font-light text-[0.64rem] tracking-[0.16em] uppercase bg-gold text-cream px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors duration-200"
          >
            Book
          </a>
        </div>
      </nav>
    </header>
  );
}
