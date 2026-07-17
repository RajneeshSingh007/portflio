"use client";

import { education, site, stats } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">About</p>
          <h2 className="display mt-4 text-4xl font-bold text-ink sm:text-5xl">
            Building mobile products that last
          </h2>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="stat-value text-3xl font-bold text-ink sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-ink-muted sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="surface p-7 sm:p-9 lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">{site.summary}</p>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Earlier on I founded a small studio, shipped an indie music app, and built a
            lot of native Android. These days I care most about clear architecture, smooth
            UX, and leaving teammates a codebase they won&apos;t dread opening.
          </p>
          <p className="mt-8 border-t border-line pt-6 font-mono text-xs tracking-wide text-ink-muted">
            {education.degree} · {education.school} · {education.period}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
