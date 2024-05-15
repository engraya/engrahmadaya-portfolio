"use client"


import Link from "next/link";
import React from "react";
import CertificateCard from "@components/others/Cards/CertificateCards";
import { certificates } from "@lib/constants";

function CertificatesPage() {
  return (
<section className="relative mx-auto max-w-screen-lg p-4 text-gray-800">
  <h1 className="mb-4 text-center text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent sm:text-4xl">Certifications</h1>
  <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <div className="" key={index}>
            <Link href={`/certificates/${certificate.id}`}>
            <CertificateCard certificate={certificate}/>
            </Link>
          </div>
        ))}
      </div>
</section>
  )
}

export default CertificatesPage
