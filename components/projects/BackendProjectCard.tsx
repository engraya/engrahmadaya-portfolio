import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, Github, Server } from "lucide-react";
import type { ProjectEndpoint } from "@lib/content/projects";

type Props = {
  id: number;
  title: string;
  description: string;
  tags: readonly string[];
  github?: string;
  baseUrl?: string;
  apiDocs?: string;
  webapp?: string;
  highlights?: readonly string[];
  endpoints?: readonly ProjectEndpoint[];
};

const linkClass = "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:hover:bg-white/10 dark:hover:text-emerald-300";

export default function BackendProjectCard({ id, title, description, tags, github, baseUrl, apiDocs, webapp, highlights, endpoints = [] }: Props) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-emerald-500/50 hover:shadow-md dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-white/10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400"><Server size={16} aria-hidden="true" /> Backend / API</span>
        <span className="font-mono text-xs text-gray-500 dark:text-gray-400">HTTP / JSON</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <Link href={`/projects/${id}`} className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 hover:text-emerald-600">{title}</Link>
        </h2>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
        {highlights?.length ? <ul className="mt-5 space-y-2 text-sm text-gray-700 dark:text-gray-200">{highlights.map(item => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />{item}</li>)}</ul> : null}
        <ul aria-label="Tech stack" className="mb-6 mt-5 flex flex-wrap gap-1.5">{tags.slice(0, 5).map(tag => <li key={tag} className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-300">{tag}</li>)}</ul>
        <div className="mt-auto overflow-hidden rounded-xl border border-slate-800 bg-slate-950 text-slate-200">
          <p className="border-b border-white/10 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400">Selected endpoints</p>
          <ul className="divide-y divide-white/10 px-4">{endpoints.slice(0, 3).map(ep => <li key={`${ep.method}-${ep.path}`} className="py-3">
            <div className="flex items-start gap-2 font-mono text-xs"><span className={`shrink-0 rounded px-1.5 py-0.5 font-bold ${ep.method === "GET" ? "bg-emerald-500/15 text-emerald-300" : ep.method === "POST" ? "bg-sky-500/15 text-sky-300" : "bg-violet-500/15 text-violet-300"}`}>{ep.method}</span><code className="min-w-0 break-all leading-5">{ep.path}</code></div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{ep.purpose}</p>
          </li>)}</ul>
          {!endpoints.length ? <p className="p-4 text-xs text-slate-400">Explore the repository for API usage and implementation.</p> : null}
        </div>
        {baseUrl ? <div className="mt-4"><p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">Base URL</p><code className="mt-1 block break-all text-xs leading-relaxed text-gray-600 dark:text-gray-300">{baseUrl}</code></div> : null}
      </div>
      <footer className="flex flex-wrap items-center gap-1 border-t border-gray-100 px-3 py-3 text-gray-600 dark:border-white/10 dark:text-gray-300">
        {github ? <a className={linkClass} href={github} target="_blank" rel="noopener noreferrer"><Github size={14} aria-hidden="true" />Source</a> : null}
        {apiDocs ? <a className={linkClass} href={apiDocs} target="_blank" rel="noopener noreferrer"><BookOpen size={14} aria-hidden="true" />API docs</a> : null}
        {webapp || baseUrl ? <a className={linkClass} href={webapp || baseUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} aria-hidden="true" />Live API</a> : null}
        <Link className={`${linkClass} text-emerald-700 dark:text-emerald-400`} href={`/projects/${id}`}>Details<ArrowRight size={14} aria-hidden="true" /></Link>
      </footer>
    </article>
  );
}
