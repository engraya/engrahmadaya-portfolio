import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@lib/constants";
import { TiArrowBackOutline } from "react-icons/ti";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
    title: project.title.replace(/\s+/g, " ").slice(0, 70),
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const id = Number(params.id);
  const project = projects.find((p) => p.id === id);

  if (!project || Number.isNaN(id)) {
    notFound();
  }

  const { title, description, image, tags, github, webapp } = project;

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-4">
        <Link
          href="/projects"
          className="inline-flex bg-gradient-to-r from-emerald-300 to-blue-300 px-4 py-2 text-xs outline-none ring-blue-300 focus-visible:ring-2 bg-gray-800 text-gray-900 rounded-full w-10 h-10 items-center justify-center"
          aria-label="Back to projects"
        >
          <TiArrowBackOutline size="2rem" />
        </Link>
        <div className="flex flex-col md:flex-row -mx-4 mt-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 overflow-hidden relative">
              <Image
                className="object-cover"
                src={image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={`Screenshot: ${title}`}
              />
            </div>
            <div className="flex -mx-2 mb-4 gap-2">
              <div className="w-1/2 px-2">
                <Link
                  href={webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-emerald-300 to-blue-500 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Live Demo
                </Link>
              </div>
              <div className="w-1/2 px-2">
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-emerald-300 to-blue-500 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Project Code
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="text-2xl font-bold text-slate-100 dark:text-white mb-2">{title}</h1>
            <span className="font-bold text-emerald-400 dark:text-gray-300">Description</span>
            <p className="text-gray-100 dark:text-gray-300 text-sm mb-4">{description}</p>
            <div className="mb-4">
              <span className="font-bold text-emerald-400 dark:text-gray-300">Live URL</span>
              <div className="flex items-center mt-2">
                <a
                  href={webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-gray-300 underline outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  {webapp}
                </a>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-emerald-400 dark:text-gray-300">Repository</span>
              <div className="flex items-center mt-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-gray-300 underline outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  {github}
                </a>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-emerald-400 dark:text-gray-300">Tech stack</span>
              <ul className="flex flex-wrap gap-2 mt-2 list-none p-0">
                {tags.map((tag) => (
                  <li key={tag}>
                    <span className="inline-block bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-3 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
