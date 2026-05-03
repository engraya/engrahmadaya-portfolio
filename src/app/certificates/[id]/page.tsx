import React from "react";
import { certificates } from "@lib/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CertificateDetailContent from "@components/certificates/CertificateDetailContent";

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return certificates.map((c) => ({
    id: String(c.id),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const id = Number(params.id);
  const certificate = certificates.find((c) => c.id === id);
  if (!certificate) {
    return { title: "Certificate" };
  }
  const description = `Issued by ${certificate.issuingBody} (${certificate.date}).`;
  return {
    title: certificate.title.replaceAll(/\s+/g, " ").slice(0, 70),
    description,
    openGraph: {
      title: certificate.title,
      description,
    },
  };
}

export default function CertificateDetailsPage({ params }: Readonly<Props>) {
  const id = Number(params.id);
  const certificate = certificates.find((c) => c.id === id);

  if (!certificate || Number.isNaN(id)) {
    notFound();
  }

  const { title, date, image, issuingBody, liveDemo } = certificate;

  return (
    <CertificateDetailContent
      title={title}
      date={date}
      issuingBody={issuingBody}
      image={image}
      liveDemo={liveDemo}
    />
  );
}
