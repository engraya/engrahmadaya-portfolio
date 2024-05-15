"use client";


import Link from "next/link";
import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { projects } from "@lib/constants";
function Projects() {

  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div className="" key={index}>
            <Link href={`/projects/${project.id}`}>
            <Project title={project.title} description={project.description} tags={project.tags} imageUrl={project.image} />
            </Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
