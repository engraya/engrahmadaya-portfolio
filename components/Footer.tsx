import React from 'react'
import Link from 'next/link';
import { Bio } from '@lib/constants';
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 engraya. All rights reserved.
      </small>
      <div className='flex gap-2 items-center justify-center text-center'>
        <Link href={Bio.linkedin} target='_blank'>
          <div className="animate-bounce rounded-full focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-3 bg-cyan-200 py-3 tracking-wide text-gray-800">
          <span className='text-center justify-center flex items-center'><BsLinkedin/></span>
        </div>
       </Link>

       <Link href={Bio.facebook} target='_blank'>
          <div className="animate-bounce rounded-full focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-3 bg-cyan-200 py-3 tracking-wide text-gray-800">
          <span className='text-center justify-center flex items-center'><BsFacebook/></span>
        </div>
       </Link>
       <Link href={Bio.twitter} target='_blank'>
          <div className="animate-bounce rounded-full focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-3 bg-cyan-200 py-3 tracking-wide text-gray-800">
          <span className='text-center justify-center flex items-center'><BsTwitter/></span>
        </div>
       </Link>
       <Link href={Bio.instagram} target='_blank'>
          <div className="animate-bounce rounded-full focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-3 bg-cyan-200 py-3 tracking-wide text-gray-800">
          <span className='text-center justify-center flex items-center'><BsInstagram/></span>
        </div>
       </Link>
       <Link href={Bio.github} target='_blank'>
          <div className="animate-bounce rounded-full focus:animate-none hover:animate-none inline-flex text-md font-medium mt-3 px-3 bg-cyan-200 py-3 tracking-wide text-gray-800">
          <span className='text-center justify-center flex items-center'><BsGithub/></span>
        </div>
       </Link>
      </div>

      {/* <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p> */}
    </footer>
  )
}

export default Footer
