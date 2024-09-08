import Link from "next/link";
import React from "react";
import Project from "@components/Project";
import { projects } from "@lib/constants";
import ProjectCard from "@components/ProjectCard";
function ProjectsPage() {
  return (
<section className="relative mx-auto max-w-screen-lg p-4 text-gray-800">
  <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent sm:text-4xl">Projects</h1>
  <div className="mx-auto grid max-w-screen-xl grid-cols-1 p-2 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div className="" key={index}>
            <Link href={`/projects/${project.id}`}>
            {/* <Project title={project.title} description={project.description} tags={project.tags} imageUrl={project.image} /> */}
            <ProjectCard title={project.title} description={project.description} id={project.id} tags={project.tags} imageUrl={project.image}/>
            </Link>

          </div>
        ))}
      </div>
</section>

  )
}

export default ProjectsPage









