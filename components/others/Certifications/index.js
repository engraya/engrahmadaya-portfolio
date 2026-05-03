import React from 'react'
import { Container, Wrapper, CardContainer, ToggleButtonGroup } from './CertificatesStyle'
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
          {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates