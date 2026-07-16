"use client";

import { life } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

const accents = ["#ff6ba8", "#6eb6ff", "#a78bfa", "#ffc4b0"] as const;

export function Life() {
  const reduce = useReducedMotion();

  return (
    <section id="life" className="relative py-20 sm:py-28">
      <div className="shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-sakura">Outside work</p>
          <h2 className="display mt-2 text-4xl font-black sm:text-5xl">
            When I&apos;m not coding
          </h2>
          <p className="mt-3 max-w-lg text-ink-soft">
            Chess boards, binge watches, anime seasons, and badminton on the
            weekend.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {life.map((item, i) => (
            <motion.li
              key={item.title}
              className="manga-panel p-6"
              style={{
                boxShadow: `0 14px 32px ${accents[i % accents.length]}33`,
              }}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <h3 className="display text-2xl font-black sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.detail}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
