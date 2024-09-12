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
      <p className="mb-3 text-emerald-100">
        After graduating with a degree in{" "}
        <span className="font-medium">Civil Engineering</span>, I decided to pursue my
        passion for software engineering & programming.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am familiar with the latest trends of Frontend, Backend and DevOps. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, Django, Express, Python, Javascript Typescript and TailwindCSS
        </span>
        .I am always looking forward to explore, 
        learn and get hands-on new technologies and aspects of solutions. Contributing and collaboration have been my hurrah, I am currently working{" "}
        <span className="font-bold italic">with T40 Technologies</span> as a <span className="font-bold italic">Frontend Engineer</span> .
      </p>
    </motion.section>
  )
}

export default About
