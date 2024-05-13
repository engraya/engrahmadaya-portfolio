import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
  };
  

function SectionHeading({ children }: SectionHeadingProps) {
  return (
      <h2 className="bg-gradient-to-r capitalize mb-8 from-emerald-300 text-center to-pink-500 font-sans bg-clip-text text-4xl font-bold text-transparent">
        {children}
        </h2>
  )
}

export default SectionHeading
