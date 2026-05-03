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
    <GotoCertificates />
    <Education />
    <Membership/>
    {/* <Contact /> */}
    </main>
  );
}






{/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}