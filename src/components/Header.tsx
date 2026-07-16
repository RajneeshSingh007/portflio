"use client";

import { nav, site } from "@/lib/content";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`shell flex items-center justify-between gap-3 rounded-full border border-sakura/25 px-4 py-3 transition-all sm:px-6 ${
          scrolled
            ? "bg-white/90 shadow-[0_10px_30px_rgba(255,107,168,0.15)] backdrop-blur-xl"
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
        <a href="#top" className="focus-ring display text-lg font-black">
          {site.shortName}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-bold text-ink/65 transition hover:text-sakura"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="focus-ring btn-anime btn-sakura !px-4 !py-2 text-sm">
          Contact
        </a>
      </div>
    </header>
  );
}
