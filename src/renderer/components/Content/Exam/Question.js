import React from 'react'
import styled from 'styled-components'

const QuestionStyles = styled.div`
  & > :last-child {
    margin-bottom: 2rem;
  }
`

const Image = styled.img`
  max-width: 75vw;
  max-height: 60vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.grey[1]};
`

const NormalText = styled.div`
  font: 1.4rem 'Open Sans';
  margin-bottom: 0.5rem;
`

const BigText = styled.div`
  font: 3rem 'Open Sans';
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.black};
`

export default ({ question }) => (
  <QuestionStyles>
    {question.map((el, i) => {
      if (el.variant === 0) {
        return <Image key={i} src={el.text} />
      } else if (el.variant === 1) {
        return <NormalText key={i}>{el.text}</NormalText>
      } else if (el.variant === 2) {
        return <BigText key={i}>{el.text}</BigText>
      } else {
        return null
      }
    })}
  </QuestionStyles>
)
