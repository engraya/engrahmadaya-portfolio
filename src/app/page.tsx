"use client"

import About from "@components/About";
import Introduction from "@components/Introduction";
import Experience from "@components/others/Experience"
import Skills from "@components/Skills";
import Contact from "@components/Contact";
import SectionDivider from "@components/SectionDivider";
import GotoProjects from "@components/GotoProjects";
import styled from "styled-components";
import Membership from "@components/others/Memberships"
// import Certificates from "@components/others/Certifications";
import GotoCertificates from "@components/GotoCertificates";
import NextExperience from "@components/others/Experience/NextExperience";
import Education from "@components/others/Education";
import NextEducation from "@components/others/Education/NextEducationCard";

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(49, 84, 88) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  align-items : center;
  justify-content : center;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Introduction />
    <SectionDivider />
    <About />
    <GotoProjects />
    <Skills />
    <NextExperience />
    <GotoCertificates />
    <Education />
    <Membership/>
    <Contact />
    {/* <Wrapper>

    </Wrapper> */}

    </main>
  );
}






{/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}