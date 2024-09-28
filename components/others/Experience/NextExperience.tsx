"use client";

import React from "react";
import SectionHeading from '@components/SectionHeading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '../../../lib/constants';
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@context/ThemeContext";


export default function NextExperience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              // @ts-ignore
              // icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                <h3 className="font-semibold capitalize">{item.role}</h3>
                <p className="font-normal !mt-0">{item.company}</p>
                </div>
                <div className="flex flex-col">
                <p className="font-normal text-xs text-gray-500 italic">{item.type}</p>
                <p className="font-normal text-xs text-gray-500 italic">{item.date}</p>
                </div>
       
              </div>

              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.desc}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}