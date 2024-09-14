import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { certificates } from "@lib/constants";
import { TiArrowBackOutline } from "react-icons/ti";
function CertificateDetails({params} : {
    params : { id : any } 
}) {
    const { id } = params;
    const {title, date, image, issuingBody, liveDemo } = certificates[id];
  return (
<div className="dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link href="/certificates">
    <div className='mb-4'>
    <div className="bg-gradient-to-r from-emerald-300 to-blue-300 px-4 py-2 text-xs outline-none ring-blue-300 focus:ring bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center">
    <TiArrowBackOutline />
    </div>
    </div>
    </Link>
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lgmb-4">
          <Image className="w-full h-full object-cover" src={image} width={500} height={500} alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <Link href={liveDemo} target='_blank'>
            <button className="w-full bg-gradient-to-r from-emerald-300 to-blue-500  dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Live Demo</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Body: </span>
            <span className="text-gray-600 dark:text-gray-300">{issuingBody}</span>
          </div>
        </div>

        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Year</span>
          <div className="flex items-center mt-2">
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{date}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CertificateDetails
