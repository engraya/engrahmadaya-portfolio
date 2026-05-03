import React from 'react'
import Link from 'next/link';
import { Bio } from '@lib/constants';
import { BsLinkedin, BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  const wa = String(Bio.whatsapp).replace(/\D/g, "");
  return (
    <footer className="mb-10 px-4 text-center text-gray-600 dark:text-gray-300">
      <p className="mb-2 block text-xs">
        <a
          href={`https://wa.me/${wa}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
        >
          WhatsApp (+{Bio.whatsapp})
        </a>
      </p>
      <p className="mb-2 block text-xs">
        <a
          href={`mailto:${Bio.mail}`}
          className="underline underline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
        >
          {Bio.mail}
        </a>
      </p>
      <small className="mb-3 block text-xs">
        &copy; {new Date().getFullYear()} Ahmad Yakubu Ahmad. All rights reserved.
      </small>
      <div className="flex gap-2 items-center justify-center text-center flex-wrap">
        <Link href={Bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex mt-3 px-3 bg-cyan-200 py-3 rounded-full text-gray-800 outline-none transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-emerald-400">
          <span className="flex items-center justify-center"><BsLinkedin /></span>
        </Link>
        <Link href={Bio.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex mt-3 px-3 bg-cyan-200 py-3 rounded-full text-gray-800 outline-none transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-emerald-400">
          <span className="flex items-center justify-center"><BsFacebook /></span>
        </Link>
        <Link href={Bio.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="inline-flex mt-3 px-3 bg-cyan-200 py-3 rounded-full text-gray-800 outline-none transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-emerald-400">
          <span className="flex items-center justify-center"><BsTwitter /></span>
        </Link>
        <Link href={Bio.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex mt-3 px-3 bg-cyan-200 py-3 rounded-full text-gray-800 outline-none transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-emerald-400">
          <span className="flex items-center justify-center"><BsInstagram /></span>
        </Link>
        <Link href={Bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex mt-3 px-3 bg-cyan-200 py-3 rounded-full text-gray-800 outline-none transition hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-emerald-400">
          <span className="flex items-center justify-center"><BsGithub /></span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer
