"use client";

import type { GitHubRepo } from "@/lib/github";
import { projects } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

type WorkClientProps = {
  repos: GitHubRepo[];
  profileUrl: string;
};

export function WorkClient({ repos, profileUrl }: WorkClientProps) {
  const reduce = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <>
      <section id="work" className="relative py-24 sm:py-32">
        <div className="shell">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Work</p>
            <h2 className="display mt-4 text-4xl font-bold text-ink sm:text-5xl">
              Work projects
            </h2>
            <p className="mt-4 max-w-lg text-ink-muted">
              Production apps and migrations I&apos;ve led or shipped with product
              teams.
            </p>
          </motion.div>

          <motion.article
            className="relative mt-14 grid overflow-hidden rounded-[1.5rem] border border-sky-200/80 bg-gradient-to-br from-[#f8fbff] via-[#eef4ff] to-[#f3f0ff] shadow-[0_24px_60px_rgba(7,16,31,0.08)] lg:grid-cols-[1.15fr_0.85fr]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />

            <div className="relative z-10 p-8 sm:p-10">
              <span className="chip !border-sky-300/70 !bg-sky-100/80 !text-sky-800">
                Featured · {featured.year}
              </span>
              <h3 className="display mt-6 text-3xl font-bold text-ink sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                {featured.blurb}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="chip !text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex min-h-[220px] flex-col justify-end border-t border-sky-200/80 bg-gradient-to-br from-sky-100/60 to-indigo-100/40 p-8 lg:min-h-full lg:border-l lg:border-t-0">
              <p className="mono text-sky-700/80">Migration</p>
              <p className="display mt-3 text-4xl font-bold text-ink sm:text-5xl">
                Cordova
                <span className="mx-2 text-sky-600">→</span>
                RN
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                Government permitting & licensing at scale
              </p>
            </div>
          </motion.article>

          <ul className="mt-5 grid gap-5 sm:grid-cols-3">
            {rest.map((project, i) => (
              <motion.li
                key={project.title}
                className="surface group flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(7,16,31,0.1)]"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: reduce ? 0 : i * 0.06 }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="display text-3xl font-bold text-teal/35 transition group-hover:text-teal/55">
                    0{i + 2}
                  </span>
                  <span className="chip !text-xs">{project.year}</span>
                </div>
                <h3 className="display mt-5 text-2xl font-bold text-ink">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip !px-2.5 !py-0.5 !text-[0.65rem]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section id="personal" className="relative pb-24 sm:pb-32">
        <div className="shell">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label">Personal</p>
                <h2 className="display mt-3 text-3xl font-bold text-ink sm:text-4xl">
                  Personal projects
                </h2>
                <p className="mt-3 max-w-lg text-ink-muted">
                  Open-source and side projects from my GitHub.
                </p>
              </div>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring btn btn-secondary text-sm"
              >
                View on GitHub →
              </a>
            </div>
          </motion.div>

          {repos.length === 0 ? (
            <p className="surface mt-8 p-6 text-sm text-ink-muted">
              Couldn&apos;t load repositories right now.{" "}
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal underline underline-offset-2"
              >
                Open GitHub profile
              </a>
            </p>
          ) : (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <motion.li
                  key={repo.id}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: reduce ? 0 : i * 0.04 }}
                >
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface focus-ring group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_40px_rgba(7,16,31,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="display text-lg font-bold text-ink group-hover:text-teal">
                        {repo.name}
                      </h3>
                      <span className="shrink-0 font-mono text-xs text-ink-muted">
                        ★ {repo.stars}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line pt-4">
                      {repo.language ? (
                        <span className="chip !text-xs">{repo.language}</span>
                      ) : null}
                      {repo.topics.slice(0, 2).map((topic) => (
                        <span key={topic} className="chip !text-xs">
                          {topic}
                        </span>
                      ))}
                      {repo.forks > 0 ? (
                        <span className="ml-auto font-mono text-[0.65rem] text-ink-muted">
                          {repo.forks} forks
                        </span>
                      ) : null}
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
