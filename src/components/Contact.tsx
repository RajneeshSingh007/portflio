"use client";

import { site } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative pb-14 pt-24 sm:pt-32">
      <div className="shell">
        <motion.div
          className="relative overflow-hidden rounded-[1.5rem] border border-sky-200/80 bg-gradient-to-br from-[#f8fbff] via-[#eef4ff] to-[#f3f0ff] px-8 py-12 shadow-[0_24px_60px_rgba(7,16,31,0.08)] sm:px-12 sm:py-16"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-teal/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl">
            <p className="section-label !text-sky-700">Contact</p>
            <h2 className="display mt-4 text-4xl font-bold text-ink sm:text-6xl">
              Let&apos;s build the next release
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Open to senior mobile / React Native roles, architecture discussions, or
              products that need someone who&apos;s shipped production apps before.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="focus-ring btn btn-primary break-all sm:break-normal"
              >
                Email me
              </a>
              <a href={site.phoneHref} className="focus-ring btn btn-secondary">
                {site.callLabel}
              </a>
            </div>

            <p className="mt-5 text-sm text-ink-muted">
              Or write directly:{" "}
              <a
                href={`mailto:${site.email}`}
                className="focus-ring font-medium text-ink underline decoration-sky-300 underline-offset-2 hover:text-sky-700"
              >
                {site.email}
              </a>
            </p>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-sky-200/80 pt-8">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring text-sm font-medium text-ink-muted transition hover:text-sky-700"
                >
                  {social.label} →
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </section>
  );
}
