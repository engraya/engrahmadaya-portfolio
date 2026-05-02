"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {

  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-gray-700 dark:text-gray-200">
        After a degree in{" "}
        <span className="font-medium">Civil Engineering</span>, I moved into software
        engineering—the same discipline applied differently: clear requirements, solid
        structure, and reliable delivery.{" "}
        <span className="italic">What I enjoy most</span> is narrowing down ambiguous
        problems and shipping maintainable solutions. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, and Tailwind CSS
        </span>
        , with experience across frontend, backend, DevOps, and AI-assisted workflows.
        Recent work includes{" "}
        <span className="font-bold italic">Frontend Developer</span> at{" "}
        <span className="font-bold italic">DAXAP AS</span>; I am also an{" "}
        <span className="font-bold italic">Associate Software Engineer</span> at{" "}
        <span className="font-bold italic">T40 Technologies</span>. I care about
        collaboration, code quality, and user-visible outcomes.
      </p>
    </motion.section>
  )
}

export default About
