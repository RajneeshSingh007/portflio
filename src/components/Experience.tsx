"use client";

import { experience } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Experience</p>
          <h2 className="display mt-4 text-4xl font-bold text-ink sm:text-5xl">
            Career timeline
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            From freelancing and a small studio to larger product teams — mostly mobile,
            always shipping.
          </p>
        </motion.div>

        <div className="relative mt-14 space-y-0 pl-8 sm:pl-10">
          <div className="timeline-line" aria-hidden />

          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              className="relative pb-10 last:pb-0"
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <span
                className={`absolute -left-8 top-2 flex h-3 w-3 items-center justify-center rounded-full sm:-left-10 ${
                  i === 0
                    ? "bg-teal shadow-[0_0_0_6px_rgba(15,154,138,0.18)]"
                    : "bg-line-strong"
                }`}
                aria-hidden
              />

              <div
                className={`surface p-6 sm:p-7 ${
                  i === 0 ? "ring-1 ring-teal/25" : ""
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="display text-2xl font-bold text-ink sm:text-3xl">
                        {job.company}
                      </h3>
                      {i === 0 ? (
                        <span className="rounded-full bg-teal/15 px-2.5 py-0.5 font-mono text-[0.6rem] font-medium tracking-wide text-teal">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 font-medium text-ink-muted">{job.role}</p>
                    <p className="mt-1 text-sm text-ink-muted/80">{job.location}</p>
                  </div>
                  <span className="chip !text-xs">{job.period}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {job.summary}
                </p>

                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {job.highlights.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {job.tech.map((tag) => (
                    <span key={tag} className="chip !text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
