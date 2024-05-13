import React from 'react'
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import SectionHeading from './SectionHeading';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
function GotoProjects() {
  const { ref } = useSectionInView("Projects");
  return (
    <>
        <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="projects"
  >
    <div className='mb-10'>
        <SectionHeading>My projects</SectionHeading>
        <Link
            href="/projects"
            className="group  bg-gradient-to-r from-emerald-300 to-blue-500  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            Go to Projects{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
    </div>
  </motion.section>
    
    </>



  )
}

export default GotoProjects
