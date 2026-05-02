import React from "react";
import Image, { type StaticImageData } from "next/image";

type EducationEntry = {
  id: number;
  img: StaticImageData;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
};

const cardShell =
  "flex min-h-[20rem] sm:min-h-[22rem] w-full flex-col rounded-2xl border border-black/[0.06] dark:border-white/10 bg-gray-100 dark:bg-white/[0.05] shadow-sm transition-all duration-300 hover:shadow-md hover:border-black/10 dark:hover:border-white/[0.14]";

function NextEducation({ education }: { readonly education: EducationEntry }) {
  return (
    <article className="w-full">
      <div className={cardShell}>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex shrink-0 gap-4 sm:gap-5">
            <div className="shrink-0">
              <div
                className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-xl border border-black/[0.06] dark:border-white/10 bg-white dark:bg-white/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <Image
                  src={education.img}
                  alt={`${education.school} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1 text-left">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {education.school}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                {education.degree}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-black/[0.04] px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-white/[0.08] dark:text-gray-300">
                  {education.date}
                </span>
                <span className="inline-flex items-center rounded-md bg-black/[0.04] px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-white/[0.08] dark:text-gray-300">
                  {education.grade}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 flex min-h-0 flex-1 flex-col border-t border-gray-200/90 pt-5 dark:border-white/10">
            {education.desc ? (
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {education.desc}
              </p>
            ) : (
              <div className="flex-1" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default NextEducation;
