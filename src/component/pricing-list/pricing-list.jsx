import React from 'react'
import styled from 'styled-components'

const PricingList = ({ pricingPlan, pricingPrice, time }) => {
  return (
    <Wrapper>
      <Header>
        <PricingPlan> {pricingPlan} </PricingPlan>
        <div className='flex justify-center items-center'>
          <PricingPrice> {pricingPrice}<Time>/per {time} </Time> </PricingPrice>
        </div>
      </Header>
      <Body>
        <p className='text-[#fff] flex items-center justify-center gap-4'> <span className='text-main-color'><ion-icon name="checkmark-outline"></ion-icon></span> obada kahlous </p>
        <Button>
          Get Started
        </Button>
      </Body>
    </Wrapper>
  )
}

export default PricingList
const Button = styled.button`
  display: block;
  margin: 0px auto;
  border: 2px solid rgba(255,255,255,0.5);
  padding: 8px 15px;
  color: #fff;
  border-radius: 5px;
  transition: 0.5s ease-in-out;
`
const Wrapper = styled.div`
  width: 300px;
  height: auto;
  border: 2px solid transparent;
  border-top: 2px solid #49c628;
  padding: 20px;
  border-radius: 5px;
  backdrop-filter: blur(20px);
  box-shadow: 0 3px 20px 0px rgba(0,0,0,0.5);
  cursor: pointer;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  &:hover{
    border: 2px solid #49c628;
  }
  &:hover ${ Button }{
    border: 2px solid #49c628;
  }
  @media(max-width : 600px){
    width: 100%;
  }
`
const Header = styled.div`
  position: relative;
  &::after{
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 2px;
    background-color: #49c628;
  }
`
const PricingPlan = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #fff;
  font-family: fangsong;
`
const PricingPrice = styled.p`
   font-weight: normal;
    font-size: 50px;
    color: #49c628;
`
const Time = styled.span`
  font-size: 16px;
  color: #fff;
`

const Body = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  padding: 10px 0px;
`
