"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ToolkitCard } from "./AiToolkit";
import { howIWorkItems } from "@lib/constants";
import { useSectionInView } from "@/lib/hooks";

export default function HowIWork() {
  const { ref } = useSectionInView("Workflow");

  return (
    <motion.section
      id="how-i-work"
      ref={ref}
      className="mb-20 w-full max-w-[56rem] scroll-mt-28 px-1 text-center sm:mb-28"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading>How I work</SectionHeading>
      <p className="-mt-4 mx-auto mb-8 max-w-2xl text-sm text-gray-600 sm:text-base dark:text-gray-300">
        Built for distributed engineering teams. Remote-friendly, async-first,
        English-fluent, and focused on shipping reliable software with clear
        communication and measurable outcomes.
      </p>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 text-left sm:grid-cols-2">
        {howIWorkItems.map((item, index) => (
          <ToolkitCard key={item.id} item={item} index={index} />
        ))}
      </ul>
    </motion.section>
  );
}
