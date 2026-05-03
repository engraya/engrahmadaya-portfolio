"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowLeft, BsBoxArrowUpRight } from "react-icons/bs";

function hostLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

type CertificateDetailContentProps = {
  readonly title: string;
  readonly date: string;
  readonly issuingBody: string;
  readonly image: StaticImageData;
  readonly liveDemo: string;
};

export default function CertificateDetailContent({
  title,
  date,
  issuingBody,
  image,
  liveDemo,
}: CertificateDetailContentProps) {
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
            href="/certificates"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-gray-200 dark:hover:border-white/20 dark:hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950"
          >
            <BsArrowLeft
              className="text-base transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            />
            All certificates
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
            Certification
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            Credential issued by{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {issuingBody}
            </span>{" "}
            ({date}).
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BsBoxArrowUpRight className="text-lg" aria-hidden />
              View full certificate
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
            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-gray-100 shadow-lg dark:border-white/10 dark:bg-gray-900/40 dark:shadow-emerald-950/20">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={image}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  alt={`Certificate preview: ${title}`}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.aside
            className="flex flex-col gap-8 lg:col-span-5"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <section className="rounded-2xl border border-black/[0.06] bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                Credential details
              </h2>
              <dl className="mt-4 space-y-5">
                <div>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Issuing organization
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                    {issuingBody}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Year / period
                  </dt>
                  <dd className="mt-2">
                    <span className="inline-flex rounded-lg border border-gray-200/90 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-800 dark:border-white/10 dark:bg-white/[0.08] dark:text-gray-200">
                      {date}
                    </span>
                  </dd>
                </div>
                {/* <div>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Hosted credential
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 break-all text-sm font-medium text-emerald-700 underline decoration-emerald-700/30 underline-offset-2 transition hover:decoration-emerald-700 dark:text-emerald-400 dark:decoration-emerald-400/30 dark:hover:decoration-emerald-400 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      {hostLabel(liveDemo)}
                      <BsBoxArrowUpRight
                        className="shrink-0 text-xs opacity-70"
                        aria-hidden
                      />
                    </a>
                  </dd>
                </div> */}
              </dl>
            </section>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
