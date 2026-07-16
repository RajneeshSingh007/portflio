"use client";

import { projects } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Work() {
  const reduce = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-sakura">Work</p>
          <h2 className="display mt-2 text-4xl font-black sm:text-5xl">
            Things I&apos;ve shipped
          </h2>
          <p className="mt-3 max-w-lg text-ink-soft">
            A few projects I&apos;m happy to walk through — migrations, product
            apps, and one indie success.
          </p>
        </motion.div>

        <motion.article
          className="manga-panel mt-12 grid overflow-hidden bg-gradient-to-br from-white/95 to-[#ffe9f4]/70 lg:grid-cols-[1.15fr_0.85fr]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        >
          <div className="p-7 sm:p-9">
            <span className="chip !bg-sakura !text-white !border-sakura-bright">
              Featured · {featured.year}
            </span>
            <h3 className="display mt-5 text-3xl font-black sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {featured.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="chip !text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex min-h-[200px] items-end justify-center bg-gradient-to-t from-ice/25 via-lilac/10 to-transparent p-6 lg:min-h-full">
            <div className="text-center">
              <p className="display text-[4.5rem] font-black leading-none text-sakura/30 sm:text-[6rem]">
                01
              </p>
              <p className="mt-2 text-sm font-bold text-ink/50">Cordova → RN</p>
            </div>
          </div>
        </motion.article>

        <ul className="mt-5 grid gap-5 sm:grid-cols-3">
          {rest.map((project, i) => (
            <motion.li
              key={project.title}
              className="manga-panel group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,107,168,0.2)]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: reduce ? 0 : i * 0.06 }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="display text-3xl font-black text-ice/50">
                  0{i + 2}
                </span>
                <span className="chip !bg-ice/15 !text-xs">{project.year}</span>
              </div>
              <h3 className="display mt-4 text-2xl font-black">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {project.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip !px-2 !py-0.5 !text-[0.65rem]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
