import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

import backgroundImage from '../../assets/rejecter.jpg'
import SocialButtons from '../../component/social-buttons/social-buttons';

const Register = () => {

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
          <Container>
                <LeftContainer>
                    <Overlay>
                        <div>
                          <h1 className='text-[white] md:text-[60px] text-[26px] font-bold'> Website Name. </h1>
                          <p>You can find here what ever you want, <strong> Quality, Top rate and all type </strong>  </p>
                        </div>
                    </Overlay>
                </LeftContainer>
                <RightContainer>
                    <Outlet />
                    <div className='lg:mt-[10px] mt-[0px]'>
                        <p className='md:text-[22px] text-[18px] text-[#333] '> login with social media </p>
                        <SocialButtons />
                    </div>
                </RightContainer>
          </Container>
      </div>
      <style>
        {`
          body{
            background-color : #fff;
          }
        `}
      </style>
    </>
  )
}

export default Register

const Container = styled.div`
  width: 80%;
  height : 90vh;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 0 20px 6px #090b6f85;
  @media(max-width : 1050px){
    display: block;
  }
  @media(max-width : 768px){
    width: 100%;
    border-radius: 0px;
    height : 100vh;
  }
`

const LeftContainer = styled.div`
  color: #FFFFFF;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundImage});
  overflow: hidden;
  width : 60%;
  @media(max-width : 1050px){
    width : 100%;
    height : 20%
  }
`
const Overlay = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: rgba(0,0,0,0.8);
  overflow: hidden;
  box-sizing: border-box;
  @media(max-width : 768px){
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
`
const RightContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap : 20px;
  overflow: hidden;
  width : 40%;
  @media(max-width : 1050px){
    padding: 20px;
    width : 100%;
    height : 80%;
    gap: 4px;
  }
`