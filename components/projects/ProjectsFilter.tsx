"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@lib/constants";
import type { ProjectKind } from "@lib/content/projects";
import ProjectCard from "@components/ProjectCard";

type FilterKey = "all" | ProjectKind;

const TABS: { readonly key: FilterKey; readonly label: string }[] = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Fullstack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
];

export default function ProjectsFilter() {
  const [active, setActive] = useState<FilterKey>("all");

  const counts = useMemo(() => {
    const c = { all: projects.length, frontend: 0, backend: 0, fullstack: 0 };
    for (const p of projects) {
      c[p.kind] += 1;
    }
    return c;
  }, []);

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.kind === active);
  }, [active]);

  return (
    <>
      <div
        className="-mx-1 mt-10 flex justify-center gap-1 overflow-x-auto pb-2 sm:mt-12 sm:gap-2"
        role="tablist"
        aria-label="Filter projects by type"
      >
        {TABS.map((tab) => {
          const count = counts[tab.key];
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              className="relative shrink-0 rounded-full px-3 py-2 text-sm font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950 sm:px-4"
            >
              <span
                className={
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400"
                }
              >
                {tab.label}{" "}
                <span className="tabular-nums opacity-80">({count})</span>
              </span>
              {isActive ? (
                <motion.span
                  layoutId="projectsKindTab"
                  className="absolute inset-0 -z-10 rounded-full bg-gray-200/95 dark:bg-gray-700"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            id={project.id}
            tags={project.tags}
            imageUrl={project.image}
            kind={project.kind}
            endpoints={"endpoints" in project ? project.endpoints : undefined}
            index={index}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          No projects in this category yet.
        </p>
      ) : null}
    </>
  );
}
