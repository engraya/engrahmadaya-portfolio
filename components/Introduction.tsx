"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ImDownload } from "react-icons/im";
import { SiWechat } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@context/ActiveSectionContext";
import ayaPassport from "@public/ayaPassport.png";
function Introduction() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ayaPassport}
              alt="Portrait of Ahmad Yakubu Ahmad"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] text-gray-800 sm:text-4xl dark:text-gray-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&rsquo;m Ahmad, </span>a{" "}
        <span className="font-bold">Fullstack Engineer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">robust, scalable products</span>. My stack is{" "}
        <span className="underline">
          React, Next.js, TypeScript, Node.js, Express, Postgres & TailwindCSS
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-r from-emerald-300 to-blue-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 motion-safe:hover:scale-105 motion-safe:active:scale-100 dark:ring-offset-gray-900"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <SiWechat className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-gradient-to-r from-emerald-300 to-blue-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 motion-safe:hover:scale-105 dark:ring-offset-gray-900"
          href="/AHMAD_YAKUBU_AHMAD_CV.pdf"
          download
        >
          Download CV{" "}
          <ImDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  )
}

export default Introduction
