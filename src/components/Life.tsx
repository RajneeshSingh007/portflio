"use client";

import { life } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Life() {
  const reduce = useReducedMotion();

  return (
    <section id="life" className="relative py-24 sm:py-32">
      <div className="shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Outside work</p>
          <h2 className="display mt-4 text-4xl font-bold text-ink sm:text-5xl">
            Life beyond the IDE
          </h2>
          <p className="mt-4 max-w-lg text-ink-muted">
            How I recharge — chess, good shows, and time on the court.
          </p>
        </motion.div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {life.map((item, i) => (
            <motion.li
              key={item.title}
              className="group relative overflow-hidden rounded-[1.25rem] border border-line bg-gradient-to-br from-white/90 to-teal-mist/60 p-7 transition duration-300 hover:border-teal/30"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/10 blur-2xl transition group-hover:bg-teal/20" />
              <span className="font-mono text-xs text-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-3 text-2xl font-bold text-ink sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.detail}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
