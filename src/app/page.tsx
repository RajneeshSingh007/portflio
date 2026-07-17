import { About } from "@/components/About";
import { Atmosphere } from "@/components/Atmosphere";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Life } from "@/components/Life";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { getPublicRepos } from "@/lib/github";

export default async function Home() {
  const repos = await getPublicRepos(6);

  return (
    <>
      <Atmosphere />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero repos={repos} />
          <About />
          <Experience />
          <Work repos={repos} />
          <Skills />
          <Life />
          <Contact />
        </main>
      </div>
    </>
  );
}
