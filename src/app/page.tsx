import About from "@components/About";
import Introduction from "@components/Introduction";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import Contact from "@components/Contact";
import SectionDivider from "@components/SectionDivider";

export default function Home() {
  return (
    <main className="">
    <Introduction />
    <SectionDivider />
    {/* <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact /> */}
    </main>
  );
}
