import type { GitHubRepo } from "@/lib/github";
import { currentOrg, projects, site } from "@/lib/content";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

type Screen = "home" | "work" | "personal" | "contact";

type PhoneMockProps = {
  repos: GitHubRepo[];
};

const tabs: { id: Screen; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "personal", label: "Personal" },
  { id: "contact", label: "Contact" },
];

function ScreenShell({
  children,
  reduce,
  screenKey,
}: {
  children: ReactNode;
  reduce: boolean | null;
  screenKey: string;
}) {
  return (
    <motion.div
      key={screenKey}
      className="flex h-full min-h-0 flex-col"
      initial={reduce ? false : { opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? undefined : { opacity: 0, x: -12 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function PhoneMock({ repos }: PhoneMockProps) {
  const reduce = useReducedMotion();
  const [screen, setScreen] = useState<Screen>("home");
  const interactive = screen !== "home";

  return (
    <div
      className={`relative mx-auto w-full max-w-[220px] sm:max-w-[260px] ${
        reduce || interactive ? "" : "device-float"
      }`}
    >
      <div className="pulse-ring pointer-events-none absolute left-1/2 top-1/2 hidden h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-sky-200/60 sm:block" />
      <div
        className="pulse-ring pointer-events-none absolute left-1/2 top-1/2 hidden h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-[3.5rem] border border-indigo-200/40 sm:block"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto overflow-hidden rounded-[1.75rem] border-[2.5px] border-ink/90 bg-ink shadow-[0_20px_50px_rgba(7,16,31,0.28)] sm:rounded-[2.1rem] sm:border-[3px]">
        <div className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-ink sm:top-2.5 sm:h-5 sm:w-24" />

        <div className="relative aspect-[9/18.5] overflow-hidden bg-[#f4f8ff] sm:aspect-[9/19]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(186,230,253,0.95),transparent_42%),radial-gradient(circle_at_90%_70%,rgba(224,231,255,0.9),transparent_48%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_55%,#f5f3ff_100%)]" />

          <div className="relative z-10 flex h-full flex-col px-2.5 pb-2.5 pt-8 sm:px-3.5 sm:pb-3 sm:pt-9">
            <div className="min-h-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                {screen === "home" ? (
                  <ScreenShell reduce={reduce} screenKey="home">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-mono text-[0.5rem] uppercase tracking-[0.12em] text-sky-600/80">
                          Current org
                        </p>
                        <p className="mt-0.5 truncate font-[family-name:var(--font-syne)] text-[0.8rem] font-semibold text-ink sm:text-sm">
                          {currentOrg.company}
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-[0.58rem] leading-snug text-ink-muted">
                          {currentOrg.role}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-100 px-1.5 py-0.5 font-mono text-[0.5rem] text-emerald-700">
                        Now
                      </span>
                    </div>

                    <div className="mt-2.5 min-h-0 flex-1 space-y-1.5 overflow-y-auto pb-1">
                      <div className="rounded-lg border border-sky-200/80 bg-gradient-to-br from-sky-100 to-indigo-100 p-2 shadow-sm sm:rounded-xl sm:p-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-[0.65rem] font-semibold text-ink">
                            {currentOrg.product}
                          </p>
                          <span className="shrink-0 rounded-full bg-amber-100 px-1.5 py-0.5 font-mono text-[0.45rem] text-amber-700">
                            WIP
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-[0.55rem] leading-snug text-ink-muted">
                          {currentOrg.focus}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-[0.55rem] text-ink-muted">Development</span>
                          <span className="font-[family-name:var(--font-syne)] text-[0.7rem] font-bold text-sky-700">
                            68%
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/70">
                          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-sky-300 to-indigo-300" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          type="button"
                          onClick={() => setScreen("work")}
                          className="focus-ring rounded-lg border border-sky-200/80 bg-white/85 p-2 text-left shadow-sm"
                        >
                          <p className="font-mono text-[0.45rem] text-sky-700">Work</p>
                          <p className="mt-0.5 text-[0.62rem] font-semibold text-ink">Projects</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setScreen("personal")}
                          className="focus-ring rounded-lg border border-sky-200/80 bg-white/85 p-2 text-left shadow-sm"
                        >
                          <p className="font-mono text-[0.45rem] text-sky-700">GitHub</p>
                          <p className="mt-0.5 text-[0.62rem] font-semibold text-ink">Personal</p>
                        </button>
                      </div>

                      <a
                        href="#experience"
                        className="focus-ring block rounded-lg border border-sky-200/80 bg-white/85 px-2 py-1.5 text-center text-[0.6rem] font-semibold text-sky-800 shadow-sm"
                      >
                        Career timeline
                      </a>

                      <button
                        type="button"
                        onClick={() => setScreen("contact")}
                        className="focus-ring w-full rounded-lg border border-sky-200/80 bg-white/85 p-2 text-left shadow-sm"
                      >
                        <p className="font-mono text-[0.45rem] text-sky-700">Say hi</p>
                        <p className="mt-0.5 text-[0.62rem] font-semibold text-ink">Contact →</p>
                      </button>
                    </div>
                  </ScreenShell>
                ) : null}

                {screen === "work" ? (
                  <ScreenShell reduce={reduce} screenKey="work">
                    <div className="mb-2 flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-sky-700/80">
                          Work projects
                        </p>
                        <p className="mt-0.5 font-[family-name:var(--font-syne)] text-sm font-bold text-ink">
                          Production work
                        </p>
                      </div>
                      <a
                        href="#work"
                        className="focus-ring font-mono text-[0.5rem] text-sky-700"
                      >
                        Open →
                      </a>
                    </div>
                    <ul className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-0.5">
                      {projects.map((project) => (
                        <li
                          key={project.title}
                          className="rounded-xl border border-sky-200/80 bg-white/85 p-2.5 shadow-sm"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-[0.75rem] font-semibold text-ink">{project.title}</p>
                            <span className="font-mono text-[0.5rem] text-ink-muted">
                              {project.year}
                            </span>
                          </div>
                          <p className="mt-1 line-clamp-2 text-[0.58rem] leading-relaxed text-ink-muted">
                            {project.blurb}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </ScreenShell>
                ) : null}

                {screen === "personal" ? (
                  <ScreenShell reduce={reduce} screenKey="personal">
                    <div className="mb-2 flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-sky-700/80">
                          Personal projects
                        </p>
                        <p className="mt-0.5 font-[family-name:var(--font-syne)] text-sm font-bold text-ink">
                          From GitHub
                        </p>
                      </div>
                      <a
                        href="#personal"
                        className="focus-ring font-mono text-[0.5rem] text-sky-700"
                      >
                        Open →
                      </a>
                    </div>
                    <ul className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-0.5">
                      {repos.length === 0 ? (
                        <li className="rounded-xl border border-sky-200/80 bg-white/85 p-2.5 text-[0.65rem] text-ink-muted">
                          No repos loaded. Check GitHub.
                        </li>
                      ) : (
                        repos.slice(0, 5).map((repo) => (
                          <li key={repo.id}>
                            <a
                              href={repo.htmlUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="focus-ring block rounded-xl border border-sky-200/80 bg-white/85 p-2.5 shadow-sm"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <p className="truncate text-[0.75rem] font-semibold text-ink">
                                  {repo.name}
                                </p>
                                <span className="shrink-0 font-mono text-[0.5rem] text-ink-muted">
                                  ★ {repo.stars}
                                </span>
                              </div>
                              <p className="mt-1 line-clamp-2 text-[0.58rem] leading-relaxed text-ink-muted">
                                {repo.description || "No description"}
                              </p>
                            </a>
                          </li>
                        ))
                      )}
                    </ul>
                  </ScreenShell>
                ) : null}

                {screen === "contact" ? (
                  <ScreenShell reduce={reduce} screenKey="contact">
                    <p className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-sky-700/80">
                      Contact
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-syne)] text-sm font-bold text-ink">
                      Let&apos;s connect
                    </p>
                    <div className="mt-3 space-y-2 overflow-y-auto">
                      <a
                        href={`mailto:${site.email}`}
                        className="focus-ring block rounded-xl border border-sky-300/80 bg-gradient-to-br from-sky-100 to-indigo-100 px-3 py-2.5 text-center text-[0.7rem] font-semibold text-ink shadow-sm"
                      >
                        Email me
                      </a>
                      <a
                        href={site.phoneHref}
                        className="focus-ring block rounded-xl border border-sky-200/80 bg-white/90 px-3 py-2.5 text-center text-[0.7rem] font-semibold text-ink shadow-sm"
                      >
                        {site.callLabel}
                      </a>
                      {site.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring block rounded-xl border border-sky-200/80 bg-white/85 px-3 py-2 text-center text-[0.65rem] font-medium text-ink-soft shadow-sm"
                        >
                          {social.label} →
                        </a>
                      ))}
                      <a
                        href="#contact"
                        className="focus-ring block text-center font-mono text-[0.55rem] text-sky-700"
                      >
                        Open full contact section
                      </a>
                    </div>
                  </ScreenShell>
                ) : null}
              </AnimatePresence>
            </div>

            <nav
              aria-label="Phone app navigation"
              className="mt-1.5 flex items-center justify-between gap-0.5 rounded-lg border border-sky-200/70 bg-white/80 px-1 py-1 shadow-sm sm:mt-2 sm:rounded-xl sm:px-1.5 sm:py-1.5"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setScreen(tab.id)}
                  className={`focus-ring min-w-0 flex-1 rounded-md px-1 py-1.5 text-[0.5rem] font-medium transition sm:rounded-lg sm:px-2 sm:text-[0.55rem] ${
                    screen === tab.id
                      ? "bg-sky-100 text-sky-800"
                      : "text-ink-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <p className="mt-2 text-center font-mono text-[0.6rem] tracking-wide text-ink-muted sm:mt-3 sm:text-[0.65rem]">
        Tap tabs inside the phone
      </p>
    </div>
  );
}
