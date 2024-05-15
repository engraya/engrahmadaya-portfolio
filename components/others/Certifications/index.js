import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './CertificatesStyle'
import CertificateCard from '../Cards/CertificateCards'
import { certificates } from '../../../lib/constants'
import SectionHeading from '@components/SectionHeading'

const Certificates = () => {
  return (
    <Container id="certifications">
      <Wrapper>
      <SectionHeading>Certifications</SectionHeading>
        <ToggleButtonGroup >
        </ToggleButtonGroup>
        <CardContainer>
          {certificates.map((certificate) => (
              <CertificateCard key={certificate} certificate={certificate}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates