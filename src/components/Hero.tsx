"use client";

import { site } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const marquee = [
  "React Native",
  "TypeScript",
  "Android",
  "React",
  "Cursor",
  "Architecture",
  "Product",
  "AI tools",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pb-4 pt-8">
      <div className="shell relative z-10 grid min-h-[calc(100svh-6rem)] items-center gap-8 py-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-6 xl:col-span-7">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-sakura/30 bg-white/80 px-4 py-1.5 text-sm font-bold text-ink/70"
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <span className="text-sakura">✦</span>
            {site.role} · {site.location}
          </motion.p>

          <h1 className="mt-6">
            <span className="sr-only">{site.name}</span>
            <motion.span
              aria-hidden
              className="display block text-[clamp(2.8rem,9vw,5.8rem)] font-black text-night"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.05 }}
            >
              Rajneesh
            </motion.span>
            <motion.span
              aria-hidden
              className="display block text-[clamp(2.8rem,9vw,5.8rem)] font-black"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.14 }}
            >
              <span className="bg-gradient-to-r from-sakura via-[#ff6b9d] to-ice bg-clip-text text-transparent">
                Kamlesh Singh
              </span>
            </motion.span>
          </h1>

          <motion.div
            className="speech mt-8 max-w-xl p-5 sm:p-6"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28, type: "spring", stiffness: 160, damping: 18 }}
          >
            <p className="text-lg font-medium leading-relaxed text-ink-soft sm:text-xl">
              {site.headline}
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#work" className="focus-ring btn-anime btn-sakura">
              See my work
            </a>
            <a href="#contact" className="focus-ring btn-anime btn-ghost-anime">
              Say hi
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative lg:col-span-6 xl:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.2 }}
        >
          <div className="manga-panel relative mx-auto max-w-md overflow-visible !pb-0">
            <div className="absolute left-4 top-4 z-20 chip !bg-white/95 shadow-sm">
              9+ yrs
            </div>

            <div className="relative px-4 pt-12 sm:px-6">
              <div
                className={`relative mx-auto h-[280px] w-full max-w-[280px] sm:h-[320px] sm:max-w-[300px] ${reduce ? "" : "character-float"}`}
              >
                <div className="absolute inset-x-8 bottom-2 h-10 rounded-[100%] bg-sakura/20 blur-xl" />
                <Image
                  src="/anime-character.png"
                  alt="Anime-style character representing Rajneesh"
                  width={300}
                  height={320}
                  priority
                  className="relative z-10 mx-auto h-full w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(42,31,85,0.2)]"
                />
              </div>
            </div>

            <div className="border-t border-sakura/20 bg-white/70 px-4 py-3">
              <div className="flex flex-wrap justify-center gap-2">
                {["React Native", "TypeScript", "Android"].map((tag) => (
                  <span key={tag} className="chip !text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="speech absolute -bottom-1 left-0 z-30 hidden max-w-[190px] p-3 text-sm font-semibold sm:block"
            initial={reduce ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            Let's build something good.
          </motion.div>
        </motion.div>
      </div>

      <div className="marquee-anime mt-10" aria-hidden>
        <div className="marquee-anime-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item} <span className="text-sakura">✿</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
