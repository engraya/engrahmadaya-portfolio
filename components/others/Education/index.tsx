"use client";

import React from "react";
import styled from "styled-components";
import { education } from "@lib/constants";
import SectionHeading from "@components/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import NextEducation from "./NextEducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

export default function Education() {
  const { ref } = useSectionInView("Education");
  return (
    <motion.section
      ref={ref}
      className="mb-10 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="education"
    >
      <div className="mb-6">
        <Container>
          <SectionHeading>Education</SectionHeading>
          {education.map((edu) => (
            <div className="gap-y-8" key={edu.id}>
              <NextEducation education={edu} />
            </div>
          ))}
        </Container>
      </div>
    </motion.section>
  );
}
