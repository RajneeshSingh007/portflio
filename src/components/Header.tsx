"use client";

import { nav, site } from "@/lib/content";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3">
      <div
        className={`shell flex items-center justify-between gap-2 rounded-full border px-3 py-2.5 transition-all duration-300 sm:gap-3 sm:px-6 sm:py-3 ${
          scrolled
            ? "border-line bg-white/85 shadow-[0_12px_40px_rgba(7,16,31,0.08)] backdrop-blur-xl"
            : "border-white/40 bg-white/45 backdrop-blur-md"
        }`}
      >
        <a
          href="#top"
          className="focus-ring display text-base font-bold tracking-tight text-ink sm:text-lg"
        >
          <span className="sm:hidden">Rajneesh</span>
          <span className="hidden sm:inline">{site.shortName}</span>
          <span className="text-teal">.</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm font-medium text-ink-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="focus-ring btn btn-teal !px-3 !py-1.5 text-xs sm:!px-4 sm:!py-2 sm:text-sm"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
