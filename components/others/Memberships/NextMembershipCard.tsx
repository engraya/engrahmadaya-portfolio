import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiArrowForwardOutline } from "react-icons/ti";
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

function NextMembershipCard({ membership }: { membership: Membership }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-between bg-[#f3f4f6] dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center px-1.5 md:px-3">
            <Image
              className="w-10 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block"
              src={membership.img}
              height={50}
              width={50}
              alt=""
            />
            <div className="text-left">
              <h4 className="text-lg md:text-lg lg:text-lg ease-in-out duration-1000">
                {membership.membershipTitle}
              </h4>
              <h4 className="text-sm md:text-base font-medium dark:text-gray-200">
                {membership.membershipBody}
              </h4>
              <h6 className="text-sm md:text-base font-medium dark:text-gray-200">
                <span>Membership ID : </span>
                {membership.membershipID}
              </h6>
              <h6 className="text-sm md:text-base font-medium dark:text-gray-200">
                <span>Date : </span>
                {membership.date}
              </h6>
              <div className="mt-4 text-blue-700 dark:text-blue-400">
                {membership.doc ? (
                  <Link
                    href={membership.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-slate-400 hover:text-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                    aria-label="Open membership document"
                  >
                    <TiArrowForwardOutline size="2rem" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextMembershipCard;
