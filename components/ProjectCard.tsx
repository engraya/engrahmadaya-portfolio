"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";


type ProjectProps = {
    title : string
    description  :string
    tags : string[]
    imageUrl :  any
    id : any
  }


function ProjectCard({
    title,
    description,
    tags,
    id,
    imageUrl,
  }: ProjectProps) {
  return (
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[20rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={imageUrl}
          width={500}
          height={300}
          alt="thumbnail"
          className="w-full rounded-xl group-hover/card:shadow-xl"
        />
      </CardItem>
      <div className="flex justify-between items-center mt-20">
        <CardItem
          translateZ={20}
          as={Link}
          href={`/projects/${id}`}
          target="__blank"
          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
        >
          Details →
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
  )
}

export default ProjectCard
