"use client";

import About from "@components/About";
import Introduction from "@components/Introduction";
import Skills from "@components/Skills";
import Contact from "@components/Contact";
import SectionDivider from "@components/SectionDivider";
import GotoProjects from "@components/GotoProjects";
import Membership from "@components/others/Memberships";
import GotoCertificates from "@components/GotoCertificates";
import NextExperience from "@components/others/Experience/NextExperience";
import HowIWork from "@components/HowIWork";
import Education from "@components/others/Education";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Introduction />
    <SectionDivider />
    <About />
    <GotoProjects />
    <Skills />
    <NextExperience />
    <HowIWork />
    {/* <GotoCertificates /> */}
    <Education />
    {/* <Membership/> */}
    {/* <Contact /> */}
    </main>
  );
}

