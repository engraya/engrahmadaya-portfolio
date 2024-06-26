"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// type ProjectProps = (typeof projectsData)[number];

type ProjectProps = {
  title : string
  description  :string
  tags : string[]
  imageUrl :  any
}

function Project({
    title,
    description,
    tags,
    imageUrl,
  }: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-4 last:mb-0"
    >
      <section className="bg-sky-100 max-w-[42rem] border border-black/5 shadow-2xl shadow-cyan-500/50  rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <h3 className="text-xl font-semibold whitespace-nowrap m-4">{title}</h3>
        <div className="pt-4 pb-7 px-1 sm:pl-6 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="text-xs leading-relaxed   text-gray-700 dark:text-white/70">
            {description}
            <div className="flex justify-center items-center mt-1">
            <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-1 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
            </div>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={500}
          height={500}
          className="absolute hidden sm:block top-16 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}

export default Project
