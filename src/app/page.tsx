import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Life } from "@/components/Life";
import { SakuraField } from "@/components/SakuraField";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <SakuraField />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Work />
          <Skills />
          <Life />
          <Contact />
        </main>
      </div>
    </>
  );
}
