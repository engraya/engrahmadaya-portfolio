import React from 'react'
import styled from 'styled-components'
import { softSkills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;



const Skill = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #61d6e6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 15px;
  text-align: center;
  
  
`




const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Soft Skills</Title>
       <Skill>
          {softSkills.map((skill) => (
            <SkillTitle key={skill}><ul><li>{skill.title}</li></ul> </SkillTitle>
          ))}
         </Skill>
      </Wrapper>
    </Container>
  )
}

export default Skills