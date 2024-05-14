import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { projects } from "@lib/constants";

type ProjectProps = {
    id? : any
    title?  : string
    description? : string
    image? : string
    tags? : string[]
    category? : string[]
    hosted?: boolean
    hosting_platform? : string
    github? : string
    webapp? : string 
}
function ProjectDetailsPage({params} : {
    params : { id : any } 
}) {
    const { id } = params;
    const {title, description, image, tags, category, github, webapp } = projects[id];
  return (
<div className="dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link href="/projects">
    <div className='mb-4'>
    <button className="bg-gradient-to-r from-emerald-300 to-blue-500 px-4 py-2 text-xs rounded-xl text-white outline-none ring-blue-300 focus:ring">Back to Projects</button>
    </div>
    </Link>
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <Image className="w-full h-full object-cover overflow-hidden" src={image} width={500} height={500} alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <Link href={webapp} target='_blank'>
            <button className="w-full bg-gradient-to-r from-emerald-300 to-blue-500  dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Live Demo</button>
            </Link>
          </div>
          <div className="w-1/2 px-2">
            <Link href={github} target='_blank'>
            <button className="w-full bg-gradient-to-r from-emerald-300 to-blue-500  dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Project Code</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
        <span className="font-bold text-gray-700 dark:text-gray-300">Description:</span>
        <p className="text-gray-100 dark:text-gray-300 text-sm mb-4">
        {description}
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
            <span className="text-gray-600 dark:text-gray-300">{category}</span>
          </div>
          {/* <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Hosting Platform: </span>
            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
          </div>
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Hosted: </span>
            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
          </div> */}
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Url</span>
          <div className="flex items-center mt-2">
          <span className="text-gray-300 dark:text-gray-300">{webapp}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Repository</span>
          <div className="flex items-center mt-2">
          <span className="text-gray-300 dark:text-gray-300">{github}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Tech Stack:</span>
          <div className="flex items-center mt-2">
            {tags.map((tag) => (
            <button key={tag} className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{tag}</button>
            ))}

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProjectDetailsPage
