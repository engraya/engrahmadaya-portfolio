"use client";

import React from "react";
import SectionHeading from "@components/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@lib/constants";
import { useSectionInView } from "@/lib/hooks";

export default function NextExperience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="#6b7280">
        {experiences.map((item, index) => (
          <React.Fragment key={item.id ?? index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              date={item.date}
              dateClassName="!text-gray-600 dark:!text-gray-400"
              iconStyle={{
                fontSize: "1.5rem",
              }}
            >
              <div className="flex justify-between gap-3">
                <div className="flex min-w-0 flex-col">
                  <h3 className="font-semibold capitalize text-gray-900 dark:text-gray-100">
                    {item.role}
                  </h3>
                  <p className="font-normal !mt-0 text-gray-800 dark:text-gray-300">
                    {item.company}
                  </p>
                </div>
                <p className="shrink-0 font-normal text-xs italic text-gray-600 dark:text-gray-400">
                  {item.type}
                </p>
              </div>

              <p className="!mt-1 !font-normal text-gray-700 dark:text-gray-200">
                {item.desc}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
