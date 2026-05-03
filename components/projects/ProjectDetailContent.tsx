"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BsArrowLeft,
  BsBoxArrowUpRight,
  BsClipboard,
  BsGithub,
} from "react-icons/bs";
import type { ProjectEndpoint, ProjectKind } from "@lib/content/projects";

type ProjectDetailContentProps = {
  readonly title: string;
  readonly description: string;
  readonly image: string | StaticImageData;
  readonly tags: readonly string[];
  readonly github: string;
  readonly webapp?: string;
  readonly category?: string;
  readonly kind: ProjectKind;
  readonly apiDocs?: string;
  readonly baseUrl?: string;
  readonly auth?: string;
  readonly deployment?: string;
  readonly endpoints?: readonly ProjectEndpoint[];
  readonly architectureSummary?: readonly string[];
};

function hostLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function methodPillClass(method: ProjectEndpoint["method"]) {
  switch (method) {
    case "GET":
      return "bg-emerald-500/20 text-emerald-200 ring-emerald-500/35";
    case "POST":
      return "bg-sky-500/20 text-sky-200 ring-sky-500/35";
    case "PUT":
      return "bg-amber-500/20 text-amber-200 ring-amber-500/35";
    case "PATCH":
      return "bg-violet-500/20 text-violet-200 ring-violet-500/35";
    case "DELETE":
      return "bg-rose-500/20 text-rose-200 ring-rose-500/35";
    default:
      return "bg-gray-500/20 text-gray-200 ring-gray-500/35";
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function kindEyebrowLabel(kind: ProjectKind) {
  if (kind === "backend") return "Backend / API";
  if (kind === "fullstack") return "Full-stack";
  return "Frontend";
}

function CopyBaseUrlButton({ url }: { readonly url: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(url).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        });
      }}
      className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 dark:border-white/15 dark:bg-white/[0.08] dark:text-gray-200 dark:hover:bg-white/[0.12] outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      <BsClipboard className="text-sm" aria-hidden />
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function ApiSurfaceBlock({
  endpoints,
  title,
}: {
  readonly endpoints: readonly ProjectEndpoint[];
  readonly title: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-lg dark:border-white/10 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:shadow-emerald-950/20">
      <div className="border-b border-white/10 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          API surface
        </p>
        <p className="mt-1 text-sm text-gray-300">{title}</p>
      </div>
      <ul className="max-h-[min(28rem,70vh)] space-y-0 divide-y divide-white/10 overflow-y-auto p-4 sm:p-5">
        {endpoints.map((ep, i) => (
          <li key={`${ep.method}-${ep.path}-${i}`} className="py-4 first:pt-0">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-md px-2 py-0.5 text-[0.7rem] font-bold ring-1 ${methodPillClass(ep.method)}`}
              >
                {ep.method}
              </span>
              <code className="text-sm text-gray-100">{ep.path}</code>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {ep.purpose}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectDetailContent({
  title,
  description,
  image,
  tags,
  github,
  webapp,
  category,
  kind,
  apiDocs,
  baseUrl,
  auth,
  deployment,
  endpoints,
  architectureSummary,
}: ProjectDetailContentProps) {
  const isBackend = kind === "backend";
  const endpointList = endpoints ?? [];

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-8 dark:bg-gray-950 sm:pb-24 sm:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Breadcrumb"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200 dark:hover:border-white/20 dark:hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950"
          >
            <BsArrowLeft
              className="text-base transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            />
            All projects
          </Link>
        </motion.nav>

        <motion.header
          className="mt-10 max-w-3xl"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
            {kindEyebrowLabel(kind)}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {webapp ? (
              <motion.a
                href={webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BsBoxArrowUpRight className="text-lg" aria-hidden />
                Live demo
              </motion.a>
            ) : null}
            {apiDocs ? (
              <motion.a
                href={apiDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <BsBoxArrowUpRight className="text-lg" aria-hidden />
                API docs
              </motion.a>
            ) : null}
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-white/15 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/[0.12] outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BsGithub className="text-lg" aria-hidden />
              Source code
            </motion.a>
          </div>
        </motion.header>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-7"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            {isBackend ? (
              endpointList.length > 0 ? (
                <ApiSurfaceBlock endpoints={endpointList} title={title} />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-100/80 dark:border-white/20 dark:bg-gray-900/50">
                  <p className="px-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    Add{" "}
                    <code className="text-gray-600 dark:text-gray-300">endpoints</code>{" "}
                    to this project in{" "}
                    <code className="text-gray-600 dark:text-gray-300">projects.ts</code>{" "}
                    to show the API surface here.
                  </p>
                </div>
              )
            ) : (
              <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-gray-100 shadow-lg dark:border-white/10 dark:bg-gray-900/40 dark:shadow-emerald-950/20">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={image}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    alt={`Screenshot: ${title}`}
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </motion.div>

          <motion.aside
            className="flex flex-col gap-8 lg:col-span-5"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            {category ? (
              <section className="rounded-2xl border border-black/[0.06] bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                  Type
                </h2>
                <p className="mt-3 text-sm capitalize leading-relaxed text-gray-700 dark:text-gray-200">
                  {category}
                </p>
              </section>
            ) : null}

            <section className="rounded-2xl border border-black/[0.06] bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                Links
              </h2>
              <dl className="mt-4 space-y-4">
                {webapp ? (
                  <div>
                    <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Live site
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 break-all text-sm font-medium text-emerald-700 underline decoration-emerald-700/30 underline-offset-2 transition hover:decoration-emerald-700 dark:text-emerald-400 dark:decoration-emerald-400/30 dark:hover:decoration-emerald-400 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                      >
                        {hostLabel(webapp)}
                        <BsBoxArrowUpRight
                          className="shrink-0 text-xs opacity-70"
                          aria-hidden
                        />
                      </a>
                    </dd>
                  </div>
                ) : null}
                {apiDocs ? (
                  <div>
                    <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      API documentation
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={apiDocs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 break-all text-sm font-medium text-emerald-700 underline decoration-emerald-700/30 underline-offset-2 transition hover:decoration-emerald-700 dark:text-emerald-400 dark:decoration-emerald-400/30 dark:hover:decoration-emerald-400 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                      >
                        {hostLabel(apiDocs)}
                        <BsBoxArrowUpRight
                          className="shrink-0 text-xs opacity-70"
                          aria-hidden
                        />
                      </a>
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Repository
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 break-all text-sm font-medium text-emerald-700 underline decoration-emerald-700/30 underline-offset-2 transition hover:decoration-emerald-700 dark:text-emerald-400 dark:decoration-emerald-400/30 dark:hover:decoration-emerald-400 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      {hostLabel(github)}
                      <BsGithub
                        className="shrink-0 text-xs opacity-70"
                        aria-hidden
                      />
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            {baseUrl || auth || deployment ? (
              <section className="rounded-2xl border border-black/[0.06] bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                  Runtime
                </h2>
                <dl className="mt-4 space-y-4">
                  {baseUrl ? (
                    <div>
                      <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Base URL
                      </dt>
                      <dd className="mt-2 flex flex-wrap items-center gap-2">
                        <code className="min-w-0 flex-1 break-all rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-800 dark:bg-white/10 dark:text-gray-200">
                          {baseUrl}
                        </code>
                        <CopyBaseUrlButton url={baseUrl} />
                      </dd>
                    </div>
                  ) : null}
                  {auth ? (
                    <div>
                      <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Auth
                      </dt>
                      <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {auth}
                      </dd>
                    </div>
                  ) : null}
                  {deployment ? (
                    <div>
                      <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        Deployment
                      </dt>
                      <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {deployment}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </section>
            ) : null}

            <section className="rounded-2xl border border-black/[0.06] bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                Tech stack
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <li key={`${tag}-${i}`}>
                    <span className="inline-flex rounded-lg border border-gray-200/90 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-800 dark:border-white/10 dark:bg-white/[0.08] dark:text-gray-200">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.aside>
        </div>

        {architectureSummary && architectureSummary.length > 0 ? (
          <motion.section
            className="mt-16 rounded-2xl border border-black/[0.06] bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05] sm:p-8"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.45, delay: 0.22 }}
            aria-labelledby="architecture-heading"
          >
            <h2
              id="architecture-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400"
            >
              Architecture
            </h2>
            <ol className="mt-8 space-y-6">
              {architectureSummary.map((step, i) => (
                <li key={`${step}-${i}`} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs font-bold text-gray-800 dark:border-white/15 dark:bg-white/10 dark:text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </motion.section>
        ) : null}
      </div>
    </div>
  );
}
