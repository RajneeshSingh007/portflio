export const site = {
  name: "Rajneesh Kamlesh Singh",
  shortName: "Rajneesh Singh",
  role: "Senior Software Engineer",
  location: "Mumbai, India",
  headline: "Senior engineer who ships React Native and web apps end to end.",
  summary:
    "I'm a senior software engineer with 9+ years in mobile and web. Most of my work is React Native, TypeScript, and Android — plus React when the product needs it. I enjoy modernizing older apps, setting up solid architecture, and helping teams move faster with tools like Cursor and Copilot.",
  email: "manish.rajneesh@gmail.com",
  phoneHref: "tel:+918169186245",
  callLabel: "Call me",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rajneesh-s-6bb228120",
    },
    {
      label: "GitHub",
      href: "https://github.com/rajneeshsingh007",
    },
  ],
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Outside work", href: "#life" },
  { label: "Contact", href: "#contact" },
] as const;

export const experience = [
  {
    company: "Granicus",
    role: "Senior Software Engineer 4",
    period: "Jan 2025 — Present",
    highlights: [
      "Leading SmartGov's move from Cordova to React Native for government permitting and licensing workflows.",
      "Driving mobile architecture and feature delivery with the team — from data layer choices to release-ready screens.",
      "Used AI-assisted workflows (Cursor, Copilot) on the Amanda migration after taking part in AI Forge.",
    ],
  },
  {
    company: "EPAM Systems",
    role: "Software Engineer 2",
    period: "Jun 2022 — Dec 2024",
    highlights: [
      "Front-end lead on Syngenta Cropwise Grower — a production AgTech app used globally.",
      "Shipped Connect Retail features around loyalty and retail operations for enterprise customers.",
    ],
  },
  {
    company: "Godrej Infotech Ltd",
    role: "Application Developer",
    period: "May 2021 — Apr 2022",
    highlights: [
      "Migrated internal apps (Go Turf, MyConnect, Bills Tracker) to React Native and improved day-to-day usability.",
    ],
  },
  {
    company: "Weblusion Infotech",
    role: "Application Developer",
    period: "Jan 2021 — Apr 2021",
    highlights: [
      "Built screens for ERP/fintech flows and helped improve the Taste for Life ecommerce experience.",
    ],
  },
  {
    company: "MarvyTech",
    role: "Founder",
    period: "Jan 2020 — Dec 2020",
    highlights: [
      "Started a small digital studio — scoped, designed, and shipped MVPs for local SMEs.",
    ],
  },
  {
    company: "Techstrock",
    role: "Android Developer",
    period: "Jun 2019 — Oct 2019",
    highlights: [
      "Built native Android apps with live location and routing features.",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jan 2016 — May 2019",
    highlights: [
      "Created MusicX, grew it on the Play Store, and later sold the product.",
      "Handled full web and mobile builds for 10+ clients.",
    ],
  },
] as const;

export const projects = [
  {
    title: "SmartGov",
    year: "2025",
    blurb:
      "Rewriting a large Cordova government app in React Native — clearer structure, better UX, and a codebase the team can keep extending.",
    tags: ["React Native", "TypeScript", "Architecture"],
  },
  {
    title: "Amanda migration",
    year: "2025",
    blurb:
      "Helped move a legacy Cordova product to React Native with Cursor and Copilot after AI Forge — more throughput, same bar for quality.",
    tags: ["Cursor", "React Native", "Legacy"],
  },
  {
    title: "Cropwise Grower",
    year: "2022–24",
    blurb:
      "Led front-end work on Syngenta's grower platform — real production UI, real users, real release pressure.",
    tags: ["React", "TypeScript", "AgTech"],
  },
  {
    title: "MusicX",
    year: "2016–19",
    blurb:
      "An indie Play Store music app I built myself. It gained traction, trended, and I sold it.",
    tags: ["Android", "Indie"],
  },
] as const;

export const skillGroups = [
  {
    title: "Mobile & Web",
    items: [
      "React Native",
      "Android (Kotlin/Java)",
      "React",
      "TypeScript",
      "JavaScript",
      "Cordova",
    ],
  },
  {
    title: "Platform & data",
    items: [
      "App architecture",
      "WatermelonDB / SQLite",
      "Firebase",
      "REST APIs",
      "State management",
    ],
  },
  {
    title: "AI day-to-day",
    items: [
      "Cursor",
      "GitHub Copilot",
      "MCP",
      "Prompting",
      "AI Forge",
    ],
  },
  {
    title: "Toolbox",
    items: [
      "Git",
      "CI/CD",
      "Android Studio",
      "Gradle",
      "Postman",
      "Jira",
    ],
  },
] as const;

export const life = [
  {
    title: "Chess",
    detail: "I play often — quiet evenings, lunch breaks, wherever I can sneak in a game.",
  },
  {
    title: "Movies & series",
    detail: "There's always a show open. Weekends are usually a long watch with snacks.",
  },
  {
    title: "Anime",
    detail: "Big anime fan. New seasons when they drop, and I've got a long backlog of classics.",
  },
  {
    title: "Badminton",
    detail: "Best reset after work — outdoor courts, a few games, then I'm good again.",
  },
] as const;

export const education = {
  school: "Shree L. R. Tiwari College of Engineering",
  degree: "B.E. Computer Engineering",
  period: "2013 — 2019",
} as const;
