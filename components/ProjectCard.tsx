"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import type { ProjectEndpoint, ProjectKind } from "@lib/content/projects";

function methodPillClass(method: ProjectEndpoint["method"]) {
  switch (method) {
    case "GET":
      return "bg-emerald-500/25 text-emerald-200 ring-emerald-500/30";
    case "POST":
      return "bg-sky-500/25 text-sky-200 ring-sky-500/30";
    case "PUT":
      return "bg-amber-500/25 text-amber-200 ring-amber-500/30";
    case "PATCH":
      return "bg-violet-500/25 text-violet-200 ring-violet-500/30";
    case "DELETE":
      return "bg-rose-500/25 text-rose-200 ring-rose-500/30";
    default:
      return "bg-gray-500/25 text-gray-200 ring-gray-500/30";
  }
}

function kindBadgeClasses(kind: ProjectKind) {
  switch (kind) {
    case "backend":
      return "bg-indigo-500/15 text-indigo-700 ring-1 ring-indigo-500/25 dark:text-indigo-300 dark:ring-indigo-400/30";
    case "fullstack":
      return "bg-sky-500/15 text-sky-800 ring-1 ring-sky-500/25 dark:text-sky-200 dark:ring-sky-400/30";
    default:
      return "bg-emerald-500/15 text-emerald-800 ring-1 ring-emerald-500/25 dark:text-emerald-300 dark:ring-emerald-400/30";
  }
}

function kindLabel(kind: ProjectKind) {
  if (kind === "backend") return "API";
  if (kind === "fullstack") return "Fullstack";
  return "Frontend";
}

type ProjectProps = {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly imageUrl: string | StaticImageData;
  readonly id: number;
  readonly kind?: ProjectKind;
  readonly isPackage?: boolean;
  readonly endpoints?: readonly ProjectEndpoint[];
  readonly index?: number;
};

function ProjectCard({
  title,
  description,
  tags,
  id,
  imageUrl,
  kind = "frontend",
  isPackage = false,
  endpoints,
  index = 0,
}: ProjectProps) {
  const visibleTags = tags.slice(0, 5);
  const moreCount = tags.length - visibleTags.length;
  const previewEndpoints = (endpoints ?? []).slice(0, 3);

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.36) }}
    >
      <CardContainer
        className="h-full w-full max-w-none"
        containerClassName="flex h-full w-full items-stretch justify-stretch py-0 perspective-[1000px]"
      >
        <Link
          href={`/projects/${id}`}
          className="flex h-full min-h-[28rem] w-full max-w-none outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950 sm:min-h-[30rem]"
        >
          <CardBody className="group/card relative flex h-full min-h-[28rem] w-full max-w-none flex-col rounded-2xl border border-black/[0.08] bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 [transform-style:preserve-3d] hover:shadow-md dark:border-white/10 dark:bg-white/[0.06] dark:hover:shadow-emerald-500/10 sm:min-h-[30rem] sm:p-6 [&>*]:[transform-style:preserve-3d]">
            <span
              className={`absolute right-4 top-4 z-10 rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${
                isPackage
                  ? "bg-rose-500/15 text-rose-700 ring-1 ring-rose-500/25 dark:text-rose-300 dark:ring-rose-400/30"
                  : kindBadgeClasses(kind)
              }`}
            >
              {isPackage ? "npm package" : kindLabel(kind)}
            </span>
            <CardItem
              translateZ="40"
              className="pr-16 text-lg font-semibold leading-snug tracking-tight text-gray-900 dark:text-white sm:text-xl"
            >
              <span className="line-clamp-2">{title}</span>
            </CardItem>
            <CardItem
              as="p"
              translateZ="50"
              className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
            >
              {description}
            </CardItem>
            <div className="mt-4 flex min-h-[2.5rem] flex-wrap gap-1.5">
              {visibleTags.map((tag, tagIndex) => (
                <CardItem
                  key={`${id}-tag-${tagIndex}-${tag}`}
                  translateZ="35"
                  className="rounded-md bg-black/[0.05] px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-gray-700 dark:bg-white/10 dark:text-gray-200"
                >
                  {tag}
                </CardItem>
              ))}
              {moreCount > 0 ? (
                <CardItem
                  translateZ="35"
                  className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-800 dark:text-emerald-300"
                >
                  +{moreCount}
                </CardItem>
              ) : null}
            </div>
            <CardItem translateZ="90" className="relative mt-4 w-full shrink-0">
              {kind === "backend" ? (
                <div className="relative flex aspect-[16/10] w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-4 font-mono text-xs shadow-inner dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
                  <div className="mb-2 flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-gray-500">
                    <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-gray-500">api surface</span>
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col justify-center gap-3">
                    {previewEndpoints.length > 0 ? (
                      previewEndpoints.map((ep, i) => (
                        <div
                          key={`${ep.method}-${ep.path}-${i}`}
                          className="flex flex-wrap items-baseline gap-2 border-b border-white/5 pb-2 last:border-0 last:pb-0"
                        >
                          <span
                            className={`shrink-0 rounded px-1.5 py-0.5 text-[0.65rem] font-bold ring-1 ${methodPillClass(ep.method)}`}
                          >
                            {ep.method}
                          </span>
                          <span className="min-w-0 truncate text-gray-200">
                            {ep.path}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500">
                        Define{" "}
                        <code className="text-gray-400">endpoints</code> in
                        projects data
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/[0.06] bg-gray-100 dark:border-white/10 dark:bg-gray-800/50">
                  <Image
                    src={imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`Project preview: ${title}`}
                    className="object-cover transition-transform duration-500 group-hover/card:scale-[1.02]"
                  />
                </div>
              )}
            </CardItem>
            <div className="mt-5 flex items-center justify-end border-t border-gray-200/90 pt-4 dark:border-white/10">
              <CardItem
                translateZ="25"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 transition-colors group-hover/card:text-emerald-800 dark:text-emerald-400 dark:group-hover/card:text-emerald-300"
              >
                View project
                <BsArrowRight
                  className="text-base transition-transform group-hover/card:translate-x-0.5"
                  aria-hidden
                />
              </CardItem>
            </div>
          </CardBody>
        </Link>
      </CardContainer>
    </motion.div>
  );
}

export default ProjectCard;
