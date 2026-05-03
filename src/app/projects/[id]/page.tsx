import React from "react";
import { projects } from "@lib/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetailContent from "@components/projects/ProjectDetailContent";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const id = Number(params.id);
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title.replaceAll(/\s+/g, " ").slice(0, 70),
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default function ProjectDetailsPage({ params }: Readonly<Props>) {
  const id = Number(params.id);
  const project = projects.find((p) => p.id === id);

  if (!project || Number.isNaN(id)) {
    notFound();
  }

  const { title, description, image, tags, github, category, kind } = project;
  const webapp = "webapp" in project ? project.webapp : undefined;

  return (
    <ProjectDetailContent
      title={title}
      description={description}
      image={image}
      tags={tags}
      github={github}
      webapp={webapp}
      category={category}
      kind={kind}
      apiDocs={"apiDocs" in project ? project.apiDocs : undefined}
      baseUrl={"baseUrl" in project ? project.baseUrl : undefined}
      auth={"auth" in project ? project.auth : undefined}
      deployment={"deployment" in project ? project.deployment : undefined}
      endpoints={"endpoints" in project ? project.endpoints : undefined}
      architectureSummary={
        "architectureSummary" in project
          ? project.architectureSummary
          : undefined
      }
    />
  );
}
