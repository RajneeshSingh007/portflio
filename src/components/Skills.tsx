"use client";

import { skillGroups } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="shell">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="section-label">Skills</p>
            <h2 className="display mt-4 text-4xl font-bold text-ink sm:text-5xl">
              Technical toolkit
            </h2>
          </div>
          <p className="max-w-sm text-ink-muted">
            The stack I use to design, build, and ship mobile apps in production.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="surface overflow-hidden p-6 sm:p-7"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="display text-xl font-bold text-ink">{group.title}</h3>
                <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
