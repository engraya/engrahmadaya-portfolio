import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
import Link from 'next/link'
function NextMembershipCard({membership} : any) {
  return (
<div className="flex justify-center items-center">
  <div className="flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2">
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center justify-center px-1.5 md:px-3">
        <Image className="w-10 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block"  src={membership.img} height={50} width={50} alt="" />
        <div className="text-left">
          <h4 className="text-lg md:text-lg lg:text-lg ease-in-out duration-1000">{membership.membershipTitle}</h4>
          <h4 className="text-sm md:text-base font-medium dark:text-gray-200">{membership.membershipBody}</h4>
          <h6 className="text-sm md:text-base font-medium dark:text-gray-200"><span>Membership ID : </span>{membership.membershipID}</h6>
          <h6 className="text-sm md:text-base font-medium dark:text-gray-200"><span>Date : </span>{membership.date}</h6>
        </div>
      </div>
      {membership.doc &&
        <Link href={membership.doc} target='_blank'>
            <Image src={membership.doc} height={50} width={50} alt="document" className="rounded-full"/>
        </Link>
      }
    </div>
  </div>
</div>
  )
}

export default NextMembershipCard
