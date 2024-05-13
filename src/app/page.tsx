"use client"

import About from "@components/About";
import Introduction from "@components/Introduction";
import Experience from "@components/others/Experience"
import Skills from "@components/Skills";
import Contact from "@components/Contact";
import SectionDivider from "@components/SectionDivider";
import GotoProjects from "@components/GotoProjects";
import styled from "styled-components";
import Education from "@components/others/Education"
import Membership from "@components/others/Memberships"
import Certificates from "@components/others/Certifications";
import GotoCertificates from "@components/GotoCertificates";


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(49, 84, 88) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
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
    <Experience />
    <GotoCertificates />
    <Wrapper>
      <Education />
      <Membership/>
    </Wrapper>
    <Contact />
    </main>
  );
}
