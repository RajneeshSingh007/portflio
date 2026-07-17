"use client";

import { PhoneMock } from "@/components/PhoneMock";
import type { GitHubRepo } from "@/lib/github";
import { site } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

const marquee = [
  "React Native",
  "TypeScript",
  "Android",
  "Kotlin",
  "Architecture",
  "Performance",
  "CI/CD",
  "App Store",
];

type HeroProps = {
  repos: GitHubRepo[];
};

export function Hero({ repos }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-2 pt-4 sm:pt-6">
      <div className="shell relative z-10 grid items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-7">
          <motion.p
            className="section-label text-[0.62rem] sm:text-[0.7rem]"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="sm:hidden">{site.role}</span>
            <span className="hidden sm:inline">
              {site.role} · {site.location}
            </span>
          </motion.p>

          <h1 className="mt-3 sm:mt-5">
            <span className="sr-only">{site.name}</span>
            <motion.span
              aria-hidden
              className="display block text-[clamp(2rem,9vw,6.2rem)] font-extrabold leading-[1.05] text-ink"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.05 }}
            >
              Rajneesh
            </motion.span>
            <motion.span
              aria-hidden
              className="display mt-0.5 block text-[clamp(2rem,9vw,6.2rem)] font-extrabold leading-[1.05]"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.14 }}
            >
              <span className="bg-gradient-to-r from-teal-deep via-teal to-teal-glow bg-clip-text text-transparent">
                Singh
              </span>
            </motion.span>
          </h1>

          <motion.p
            className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:mt-7 sm:text-lg lg:text-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            {site.headline}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 sm:mt-9"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
          >
            <a href="#personal" className="focus-ring btn btn-primary">
              View projects
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative flex w-full justify-center overflow-visible lg:col-span-5 lg:justify-end"
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 110, damping: 16, delay: 0.18 }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.55),transparent_65%)] blur-xl sm:h-72 sm:w-72" />
          <PhoneMock repos={repos} />
        </motion.div>
      </div>

      <div className="marquee mt-4" aria-hidden>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item}
              <span className="mx-3 text-teal">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
