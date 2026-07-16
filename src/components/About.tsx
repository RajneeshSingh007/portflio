"use client";

import { education, site } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="shell grid gap-10 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-4"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-sakura">About</p>
          <h2 className="display mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">
            A bit about me
          </h2>
        </motion.div>

        <motion.div
          className="speech p-5 sm:p-8 lg:col-span-8"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <p className="text-base font-medium leading-relaxed sm:text-xl lg:text-2xl">
            {site.summary}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:mt-6 sm:text-base">
            Earlier on I founded a small studio, shipped an indie music app, and
            built a lot of native Android. These days I care most about clear
            architecture, smooth UX, and leaving teammates a codebase they
            won&apos;t dread opening.
          </p>
          <p className="mt-6 text-xs font-semibold text-ink/45 sm:mt-8 sm:text-sm">
            {education.degree} · {education.school} · {education.period}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
