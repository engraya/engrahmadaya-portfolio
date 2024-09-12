import React from 'react'
import Image from 'next/image'
function NextEducation({ education } : any) {
  return (
<div className="flex justify-center items-center">
  <div className="flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2">
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center justify-center px-1.5 md:px-3">
        <Image className="w-12 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block" src={education.img} alt="" />
        <div className="text-left">
          <h4 className="text-lg whitespace-nowrap md:text-lg lg:text-lg ease-in-out duration-1000">{education.school}</h4>
          <h4 className="text-sm md:text-base font-medium dark:text-gray-200">{education.degree}</h4>
          <h6 className="text-sm md:text-base font-medium dark:text-gray-200">{education.date}</h6>
        </div>
      </div>
    </div>
    <div className="text-left p-2">
      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4">{education.desc}</p>
    </div>
  </div>
</div>

  )
}

export default NextEducation
