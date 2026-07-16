"use client";

import { site } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden pb-12 pt-20 sm:pt-28">
      <div className="shell relative z-10">
        <motion.div
          className="manga-panel relative grid items-center gap-8 overflow-hidden bg-gradient-to-br from-white via-[#fff0f7] to-[#eaf2ff] p-8 sm:p-10 lg:grid-cols-[1fr_auto]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
        >
          <div className="relative z-10 min-w-0">
            <p className="text-sm font-bold text-sakura">Contact</p>
            <h2 className="display mt-3 text-4xl font-black text-night sm:text-5xl">
              Let&apos;s talk
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              Open to senior mobile / React Native roles, architecture chats, or
              a product that needs someone who&apos;s already shipped a few
              times.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="focus-ring btn-anime btn-sakura break-all sm:break-normal"
              >
                Email me
              </a>
              <a href={site.phoneHref} className="focus-ring btn-anime btn-ice">
                {site.callLabel}
              </a>
            </div>

            <p className="mt-3 text-sm text-ink/45">
              Or write directly:{" "}
              <a
                href={`mailto:${site.email}`}
                className="focus-ring font-semibold text-ink/70 underline decoration-sakura/40 underline-offset-2 hover:text-sakura"
              >
                {site.email}
              </a>
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring font-bold text-ink/55 transition hover:text-sakura"
                >
                  {social.label} →
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[220px] w-[180px] shrink-0 sm:h-[260px] sm:w-[210px]">
            <Image
              src="/anime-character.png"
              alt="Portfolio character waving hello"
              width={210}
              height={260}
              className="h-full w-full object-contain object-bottom drop-shadow-lg"
            />
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-ink/40">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </section>
  );
}
