"use client";

import { experience } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-sakura">Experience</p>
          <h2 className="display mt-2 text-4xl font-black sm:text-5xl">
            Where I&apos;ve been
          </h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            From freelancing and a small studio to larger product teams — mostly
            mobile, always shipping.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              className={`manga-panel p-6 ${
                i === 0 ? "md:col-span-2 bg-gradient-to-br from-white to-[#ffe9f4]/50" : ""
              }`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 160, damping: 18, delay: i * 0.03 }}
              whileHover={reduce ? undefined : { y: -3 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="display text-2xl font-black sm:text-3xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 font-semibold text-ink-soft">{job.role}</p>
                </div>
                <span className="chip !bg-ice/15 !text-xs">{job.period}</span>
              </div>
              <ul className="mt-5 space-y-2 text-ink-soft">
                {job.highlights.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-sakura">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
