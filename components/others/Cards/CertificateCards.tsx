import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    height: 350px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px hsla(182, 74%, 70%, 0.469);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`


const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`


type CertificateProps = {
    id : number
    title : string
    date : string
    issuingBody : string
    image :  | StaticImageData
    liveDemo : string
}

type Certificate = {
    certificate : CertificateProps
}


const CertificateCards = ({certificate} : Certificate) => {
    return (
        <Card>

            <Image src={certificate.image} width={500} height={500} alt='certificate' className="w-full h-[180px] rounded-10"/>
            <Details>
                <div className='font-bold text-emerald-100 text-md'>{certificate.title}</div>
                <div className='font-medium text-emerald-100 text-sm'>{certificate.date}</div>
                <div className='text-sm font-normal text-emerald-100'>{certificate.issuingBody}</div>
            </Details>
        </Card>
    )
}

export default CertificateCards