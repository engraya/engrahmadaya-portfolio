import Link from "next/link";
import React from "react";
import { projects } from "@lib/constants";
import ProjectCard from "@components/ProjectCard";
import { BsArrowLeft } from "react-icons/bs";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-10 dark:bg-gray-950 sm:pb-28 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200 dark:hover:border-white/20 dark:hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950"
          >
            <BsArrowLeft
              className="text-base transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            />
            Back to home
          </Link>
        </div>

        <header className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
            Portfolio
          </p>
          <h1 className="mt-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl dark:from-emerald-400 dark:via-teal-400 dark:to-sky-400">
            Projects
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
            Selected work across full-stack and frontend products—shipping with
            TypeScript, modern React, and production-ready tooling.
          </p>
        </header>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              id={project.id}
              tags={project.tags}
              imageUrl={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
