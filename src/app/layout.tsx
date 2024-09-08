import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import ActiveSectionContextProvider from "@context/ActiceSectionContext";
import Footer from "@components/Footer";
import ThemeSwitch from "@components/ThemeSwitch";
import ThemeContextProvider from "@context/ThemeContext";
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engr Ahmad | Portfolio",
  description: "Ahmad is a full-stack engineer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="!scroll-smooth">
      <body 
        className={`${inter.className} bg-gray-800 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Footer/>
            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      
        </body>
    </html>
  );
}
