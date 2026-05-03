"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CardBody, CardContainer, CardItem } from "@components/ui/3d-card";

export type CertificateCardData = {
  readonly id: number;
  readonly title: string;
  readonly date: string;
  readonly issuingBody: string;
  readonly image: StaticImageData;
  readonly liveDemo: string;
};

type CertificateCardProps = {
  readonly certificate: CertificateCardData;
  readonly index?: number;
};

export default function CertificateCard({
  certificate,
  index = 0,
}: CertificateCardProps) {
  const { id, title, date, issuingBody, image } = certificate;

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
          href={`/certificates/${id}`}
          className="flex h-full min-h-[26rem] w-full max-w-none outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950 sm:min-h-[28rem]"
        >
          <CardBody className="group/card relative flex h-full min-h-[26rem] w-full max-w-none flex-col rounded-2xl border border-black/[0.08] bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 [transform-style:preserve-3d] hover:shadow-md dark:border-white/10 dark:bg-white/[0.06] dark:hover:shadow-emerald-500/10 sm:min-h-[28rem] sm:p-6 [&>*]:[transform-style:preserve-3d]">
            <span className="absolute right-4 top-4 z-10 rounded-full bg-violet-500/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-violet-800 ring-1 ring-violet-500/25 dark:text-violet-300 dark:ring-violet-400/30">
              Certificate
            </span>
            <CardItem
              translateZ="40"
              className="pr-16 text-lg font-semibold leading-snug tracking-tight text-gray-900 dark:text-white sm:text-xl"
            >
              <span className="line-clamp-2">{title}</span>
            </CardItem>
            <CardItem
              as="p"
              translateZ="45"
              className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
            >
              {issuingBody}
            </CardItem>
            <div className="mt-4 flex min-h-[2.5rem] flex-wrap gap-1.5">
              <CardItem
                translateZ="35"
                className="rounded-md bg-black/[0.05] px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-gray-700 dark:bg-white/10 dark:text-gray-200"
              >
                {date}
              </CardItem>
            </div>
            <CardItem translateZ="90" className="relative mt-4 w-full shrink-0">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/[0.06] bg-gray-100 dark:border-white/10 dark:bg-gray-800/50">
                <Image
                  src={image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`Certificate preview: ${title}`}
                  className="object-cover transition-transform duration-500 group-hover/card:scale-[1.02]"
                />
              </div>
            </CardItem>
            <div className="mt-5 flex items-center justify-end border-t border-gray-200/90 pt-4 dark:border-white/10">
              <CardItem
                translateZ="25"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 transition-colors group-hover/card:text-emerald-800 dark:text-emerald-400 dark:group-hover/card:text-emerald-300"
              >
                View certificate
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
