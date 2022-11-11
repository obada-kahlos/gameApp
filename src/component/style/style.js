import styled from "styled-components"

export const Title = styled.h3`
  font-size: 30px;
  color : #fff;
  text-align: center;
  margin: 20px 0px;
  @media(max-width : 768px){
    font-size: 18px;
  }
`
export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 4px 20px 0px #49c628a6;
  background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
  @media(max-width : 768px){
    font-size: 14px;
    padding: 7px 35px;
  }
`
