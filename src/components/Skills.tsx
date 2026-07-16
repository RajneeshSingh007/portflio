"use client";

import { skillGroups } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-sakura">Skills</p>
          <h2 className="display mt-2 text-4xl font-black sm:text-5xl">
            What I reach for
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="manga-panel p-5"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <h3 className="text-sm font-bold text-sakura">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip !text-xs">
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
