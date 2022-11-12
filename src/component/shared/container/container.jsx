import React from 'react'
import styled from 'styled-components'

const Container = ({ children , padding }) => {
    return (
        <Wrapper padding={padding}>
            {children}
        </Wrapper>
    )
}

export default Container

export const Wrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding: ${ (props) => props.padding ? props.padding : '120px 15px' };
  margin-right: auto;
  margin-left: auto;
  @media(max-width: 650px){
    width: 95%;
    padding: 30px 15px;
  }
  @media(max-width: 768px){
    width : 95%;
    padding: 30px 0px;
  }
  @media(max-width : 1024px){
    width : 90%;
    padding: 30px 0px;
  }
  @media(min-width : 1200px){
    width : 95%;
  }
` 