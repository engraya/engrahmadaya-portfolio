import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import type { StaticImageData } from "next/image";

type Membership = {
  id: number;
  img: StaticImageData;
  membershipTitle: string;
  membershipBody: string;
  date: string;
  membershipID: string;
  doc?: string;
};

const cardShell =
  "flex min-h-[20rem] sm:min-h-[22rem] w-full flex-col rounded-2xl border border-black/[0.06] dark:border-white/10 bg-gray-100 dark:bg-white/[0.05] shadow-sm transition-all duration-300 hover:shadow-md hover:border-black/10 dark:hover:border-white/[0.14]";

function NextMembershipCard({
  membership,
}: {
  readonly membership: Membership;
}) {
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
                  src={membership.img}
                  alt={`${membership.membershipTitle} logo`}
                  height={64}
                  width={64}
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1 text-left">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {membership.membershipTitle}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                {membership.membershipBody}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex w-fit items-center rounded-md bg-black/[0.04] px-2 py-0.5 text-xs font-medium tabular-nums text-gray-700 dark:bg-white/[0.08] dark:text-gray-300">
                  <span className="mr-1.5 text-gray-500 dark:text-gray-500">
                    ID
                  </span>
                  {membership.membershipID}
                </span>
                <span className="inline-flex items-center rounded-md bg-black/[0.04] px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-white/[0.08] dark:text-gray-300">
                  {membership.date}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 flex min-h-0 flex-1 flex-col border-t border-gray-200/90 pt-5 dark:border-white/10">
            {membership.doc ? (
              <Link
                href={membership.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gray-800 transition-colors hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-offset-gray-900 rounded-md"
                aria-label={`View credential for ${membership.membershipTitle}`}
              >
                View credential
                <BsArrowRight
                  className="text-base transition-transform group-hover/link:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ) : (
              <div className="flex-1" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default NextMembershipCard;
