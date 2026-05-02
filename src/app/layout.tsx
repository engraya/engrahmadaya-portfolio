import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import ActiveSectionContextProvider from "@context/ActiveSectionContext";
import Footer from "@components/Footer";
import ThemeSwitch from "@components/ThemeSwitch";
import Providers from "@components/Providers";
import { Toaster } from "react-hot-toast";
import { getSiteUrl } from "@lib/site";
import { Bio } from "@lib/constants";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmad Yakubu Ahmad | Full-Stack Engineer",
    template: "%s | Ahmad Yakubu Ahmad",
  },
  description:
    "Full-stack engineer (React, Next.js, TypeScript, Node). Portfolio, projects, and contact.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ahmad Yakubu Ahmad",
    title: "Ahmad Yakubu Ahmad | Full-Stack Engineer",
    description:
      "Full-stack engineer shipping production web apps with React, Next.js, TypeScript, and Node.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Yakubu Ahmad | Full-Stack Engineer",
    description:
      "Full-stack engineer shipping production web apps with React, Next.js, TypeScript, and Node.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: Bio.name,
    url: siteUrl,
    sameAs: [Bio.github, Bio.linkedin, Bio.twitter],
    jobTitle: "Full-Stack Engineer",
    email: Bio.mail,
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} relative bg-gray-50 text-gray-900 antialiased pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
}
