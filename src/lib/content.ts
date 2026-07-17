export const site = {
  name: "Rajneesh Singh",
  shortName: "Rajneesh Singh",
  role: "Mobile Software Engineer",
  location: "Mumbai, India",
  headline:
    "I build and ship React Native and Android apps — from architecture to App Store releases.",
  summary:
    "I'm a mobile software engineer with 9+ years building production apps. Most of my work is React Native, TypeScript, and Android — with React when the product needs it. I focus on solid architecture, polished UX, and codebases teams can maintain long-term.",
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
      href: "https://github.com/RajneeshSingh007",
    },
  ],
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Personal", href: "#personal" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Outside work", href: "#life" },
  { label: "Contact", href: "#contact" },
] as const;

export const currentOrg = {
  company: "Granicus",
  role: "Senior Software Engineer 4",
  period: "Jan 2025 — Present",
  product: "SmartGov Mobile",
  focus: "Cordova → React Native migration",
  stack: ["React Native", "TypeScript", "WatermelonDB"],
} as const;

export const experience = [
  {
    company: "Granicus",
    role: "Senior Software Engineer 4",
    period: "Jan 2025 — Present",
    location: "Remote · India",
    summary:
      "Leading mobile modernization for government permitting and licensing products — architecture, delivery, and AI-assisted migration work.",
    tech: ["React Native", "TypeScript", "Cordova", "Cursor", "WatermelonDB"],
    highlights: [
      "Leading SmartGov's move from Cordova to React Native for government permitting and licensing workflows used by public-sector teams.",
      "Owning mobile architecture decisions with the team — data layer, navigation, offline patterns, and release-ready screen delivery.",
      "Driving the Amanda migration with AI-assisted workflows (Cursor, Copilot) after taking part in AI Forge, keeping quality bars high while increasing throughput.",
      "Partnering with product and QA on phased cutovers so field users keep a stable experience during the rewrite.",
    ],
  },
  {
    company: "EPAM Systems",
    role: "Software Engineer 2",
    period: "Jun 2022 — Dec 2024",
    location: "India",
    summary:
      "Front-end lead on global AgTech and retail products — production React apps with enterprise release pressure.",
    tech: ["React", "TypeScript", "AgTech", "Enterprise"],
    highlights: [
      "Front-end lead on Syngenta Cropwise Grower — a production AgTech platform used by growers globally.",
      "Owned feature delivery across seasons: planning, code reviews, performance fixes, and release coordination with distributed teams.",
      "Shipped Connect Retail features around loyalty programs and retail operations for enterprise customers.",
      "Improved component reuse and TypeScript coverage so new screens landed faster without regressing core flows.",
    ],
  },
  {
    company: "Godrej Infotech Ltd",
    role: "Application Developer",
    period: "May 2021 — Apr 2022",
    location: "Mumbai, India",
    summary:
      "Migrated internal workplace apps to React Native and raised day-to-day usability for employees.",
    tech: ["React Native", "Android", "Internal tools"],
    highlights: [
      "Migrated internal apps (Go Turf, MyConnect, Bills Tracker) from older stacks to React Native.",
      "Redesigned key flows for booking, connectivity, and expense tracking so employees could finish tasks with fewer taps.",
      "Worked with stakeholders to prioritize bugs and enhancements based on real usage feedback.",
    ],
  },
  {
    company: "Weblusion Infotech",
    role: "Application Developer",
    period: "Jan 2021 — Apr 2021",
    location: "India",
    summary:
      "Built mobile screens for ERP/fintech workflows and improved an ecommerce experience.",
    tech: ["React Native", "ERP", "Ecommerce"],
    highlights: [
      "Built screens for ERP and fintech flows — forms, status tracking, and transaction summaries.",
      "Helped improve the Taste for Life ecommerce experience with clearer product browsing and checkout steps.",
      "Collaborated closely with designers to match production UI to approved mocks under tight timelines.",
    ],
  },
  {
    company: "MarvyTech",
    role: "Founder",
    period: "Jan 2020 — Dec 2020",
    location: "Mumbai, India",
    summary:
      "Ran a small digital studio end to end — discovery, design, and shipping MVPs for local SMEs.",
    tech: ["Android", "React Native", "Web", "MVP"],
    highlights: [
      "Started a small digital studio focused on fast MVPs for local small and mid-size businesses.",
      "Scoped requirements, designed UI, and shipped web and mobile builds with lean budgets.",
      "Handled client communication, delivery timelines, and post-launch fixes without a large team.",
    ],
  },
  {
    company: "Techstrock",
    role: "Android Developer",
    period: "Jun 2019 — Oct 2019",
    location: "India",
    summary:
      "Built native Android apps with live location, maps, and routing features.",
    tech: ["Android", "Kotlin", "Java", "Maps"],
    highlights: [
      "Built native Android apps with live location tracking and turn-by-turn routing.",
      "Integrated map SDKs and background location updates for field-facing use cases.",
      "Shipped stable builds through Play Store pipelines with crash monitoring in place.",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jan 2016 — May 2019",
    location: "Remote · India",
    summary:
      "Shipped MusicX on the Play Store, sold the product, and delivered full web/mobile builds for 10+ clients.",
    tech: ["Android", "Web", "Play Store", "Full stack"],
    highlights: [
      "Created MusicX, grew it on the Play Store through organic traction, and later sold the product.",
      "Handled full web and mobile builds for 10+ clients — from first wireframe to production release.",
      "Learned end-to-end ownership early: product decisions, UI, backend hooks, and store submissions.",
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

export const stats = [
  { value: "9+", label: "Years experience" },
  { value: "10+", label: "Apps shipped" },
  { value: "3", label: "Platforms" },
] as const;
