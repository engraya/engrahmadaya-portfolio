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
        I&apos;m a <span className="font-medium">Fullstack Engineer</span> passionate
        about building scalable, high-performance web applications and{" "}
        <span className="font-medium">AI-powered products</span> that solve real-world
        problems.{" "}
        <span className="italic">I enjoy</span> turning ambiguous ideas into
        maintainable, production-ready systems with clean architecture and excellent
        user experience.
      </p>
      <p className="mb-3 text-gray-700 dark:text-gray-200">
        I specialize in building AI-powered web applications using{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Node.js, and Tailwind CSS
        </span>
        , delivering everything from modern frontend systems to scalable backend APIs
        and intelligent automation workflows. My work spans SaaS platforms, dashboards,
        document automation systems, recruitment platforms, and AI-integrated
        applications.
      </p>
      <p className="mb-3 text-gray-700 dark:text-gray-200">
        Recently, I&apos;ve worked as a{" "}
        <span className="font-bold italic">Frontend Developer</span> at{" "}
        <span className="font-bold italic">DAXAP AS</span> and as an{" "}
        <span className="font-bold italic">Associate Software Engineer</span> at{" "}
        <span className="font-bold italic">T40 Technologies</span>, collaborating with
        teams to ship high-performance products with strong focus on performance
        optimization, scalability, and code quality.
      </p>
      <p className="mb-3 text-gray-700 dark:text-gray-200">
        I care deeply about collaboration, developer experience, scalable system design,
        and building software that creates real user impact.
      </p>
    </motion.section>
  )
}

export default About
