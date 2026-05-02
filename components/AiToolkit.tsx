"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { aiToolkitItems } from "@lib/constants";
import {
  Brain,
  Sparkles,
  Terminal,
  Workflow,
  Search,
  Wand2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<(typeof aiToolkitItems)[number]["icon"], LucideIcon> = {
  brain: Brain,
  sparkles: Sparkles,
  terminal: Terminal,
  workflow: Workflow,
  search: Search,
  wand: Wand2,
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * index, duration: 0.35 },
  }),
};

export default function AiToolkit() {
  const { ref } = useSectionInView("AI tools");

  return (
    <section
      id="ai-tools"
      ref={ref}
      className="mb-16 max-w-[56rem] scroll-mt-28 text-center sm:mb-20 px-1"
    >
      <SectionHeading>AI &amp; dev workflow</SectionHeading>
      <p className="-mt-4 mb-8 max-w-2xl mx-auto text-sm sm:text-base text-emerald-100/90 dark:text-white/75">
        How I use modern AI—models, assistants, and automation—to ship faster without
        sacrificing architecture, tests, or UX.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left list-none p-0 m-0">
        {aiToolkitItems.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.li
              key={item.id}
              className="group rounded-2xl border border-white/10 bg-white/5 dark:bg-white/[0.06] backdrop-blur-sm px-4 py-4 sm:px-5 sm:py-5 shadow-lg shadow-emerald-500/5 hover:border-emerald-400/30 hover:bg-white/[0.08] transition-colors"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              custom={index}
            >
              <div className="flex gap-3 items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/25 to-blue-500/25 text-emerald-700 dark:text-emerald-200 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-700/90 dark:text-emerald-300/90 mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-white/70 mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
