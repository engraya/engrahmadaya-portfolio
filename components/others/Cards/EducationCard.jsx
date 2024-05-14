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

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px hsla(182, 74%, 70%, 0.469);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }
    border: 0.1px solid #9cf2fd;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`


const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`


const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`




const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} height={50} width={50} alt='edu-image' className='h-16 bg-black rounded-tl-lg mt-1 sm:h-10' />
                <Body>
                    <div className='text-lg font-bold text-emerald-100'>{education.school}</div>
                    <div className='text-sm font-normal text-emerald-100'>{education.degree}</div>
                    <div className='text-xs font-normal text-emerald-100'>{education.date}</div>
                </Body>
            </Top>
            <div className='text-xs font-normal text-emerald-100'><b>Grade: </b>{education.grade}</div>
            <Description>
                <div className='text-emerald-100 font-normal text-sm'>{education.desc}</div>
            </Description>
        </Card>
    )
}

export default EducationCard