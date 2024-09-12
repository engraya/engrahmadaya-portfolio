
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MemebershipCard from "../Cards/MembershipCard"
import { memberships } from '../../../lib/constants';
import SectionHeading from '@components/SectionHeading';
import NextMembershipCard from './NextMembershipCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 60px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;


const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const Memberships = () => {
    return (
        <Container id="memberships">
               <SectionHeading>Memberships</SectionHeading>
                {memberships.map((membership, index) => (
                    <div className="gap-y-8" key={membership.id}>
                        <NextMembershipCard membership={membership}/>
                    </div>
                ))}
        </Container>
    )
}

export default Memberships