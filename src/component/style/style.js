import styled from "styled-components"

export const Title = styled.h5`
  font-size: 60px;
  color : #333;
  @media(max-width : 1050px){
    font-size: 40px;
  }
`
export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 5px;
  margin-top : 20px;
  font-size: 18px;
  box-shadow: 0px 4px 20px 0px #49c628a6;
  background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
  @media(max-width : 768px){
    font-size: 14px;
    padding: 7px 35px;
    margin: 20px 0px;
  }
`

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media(min-width: 650px){
    width: 540px;
  }
  @media(min-width: 768px){
    width : 768px;
  }
  @media(min-width : 992px){
    width : 960px;
  }
  @media(min-width : 1200px){
    width : 1140px;
  }
` 
