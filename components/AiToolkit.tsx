"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
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
  return (
    <div
      id="ai-tools"
      className="mt-14 w-full scroll-mt-28 px-1 text-center sm:mt-16"
    >
      <SectionHeading>AI &amp; dev workflow</SectionHeading>
      <p className="-mt-4 mx-auto mb-8 max-w-2xl text-sm text-gray-600 sm:text-base dark:text-gray-300">
        How I use modern AI—models, assistants, and automation—to ship faster without
        sacrificing architecture, tests, or UX.
      </p>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 text-left sm:grid-cols-2">
        {aiToolkitItems.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.li
              key={item.id}
              className="group rounded-2xl border border-gray-200/80 bg-white/60 px-4 py-4 shadow-sm backdrop-blur-sm transition-colors hover:border-emerald-400/40 hover:bg-white/90 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-lg dark:shadow-emerald-500/5 dark:hover:border-emerald-400/30 dark:hover:bg-white/[0.08] sm:px-5 sm:py-5"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-40px" }}
              custom={index}
            >
              <div className="flex gap-3 items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/25 to-blue-500/25 text-emerald-800 ring-1 ring-gray-200/80 dark:text-emerald-200 dark:ring-white/10">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-emerald-800 sm:text-sm dark:text-emerald-300">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
