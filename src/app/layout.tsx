import type { Metadata } from "next";
import { IBM_Plex_Mono, M_PLUS_Rounded_1c, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zen = Zen_Maru_Gothic({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const mplus = M_PLUS_Rounded_1c({
  variable: "--font-mplus",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Rajneesh Kamlesh Singh — Senior Software Engineer",
  description:
    "Senior Software Engineer — React Native, TypeScript, Android, and AI-assisted shipping.",
  icons: {
    icon: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajneesh Kamlesh Singh",
  jobTitle: "Senior Software Engineer",
  email: "mailto:manish.rajneesh@gmail.com",
  telephone: "+918169186245",
  sameAs: [
    "https://www.linkedin.com/in/rajneesh-s-6bb228120",
    "https://github.com/rajneeshsingh007",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zen.variable} ${mplus.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <a href="#top" className="skip-link focus-ring">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
