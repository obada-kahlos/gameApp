import React from 'react'
import styled from 'styled-components'

const Heading = ({children}) => {
  return (
    <Title>{children}</Title>
  )
}

export default Heading

export const Title = styled.h3`
  font-size: 30px;
  color : #fff;
  text-align: center;
  margin: 20px 0px;
  @media(max-width : 768px){
    font-size: 18px;
  }
`