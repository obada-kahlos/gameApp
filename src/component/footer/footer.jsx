import React from 'react'
import styled from 'styled-components'
import { Button } from '../style/style'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className='grid grid-cols-12 gap-0 text-[#fff]'>
          <div className='md:col-span-3 sm:col-span-6 col-span-12'>
            <h1> Download Our App </h1>
            <button className='transition-all px-[10px] py-[8px] text-[rgba(255,255,255,0.6)] hover:text-white text-[16px] my-[10px]
              border-[2px] border-[rgba(255,255,255,0.4)] hover:border-main-color flex items-center gap-4 rounded-[4px]
            '
            
            
            > Download <ion-icon name="arrow-down-circle-outline"></ion-icon> </button>
          </div>
          <div className='md:col-span-3 col-span-6'>
            <h3 className='text-[#fff] text-[16px]'> Legal </h3>
            <ul>
              <li className='footer-list'>Terms of Use</li>
              <li className='footer-list'>Privacy Policy</li>
              <li className='footer-list'>Security</li>
            </ul>
          </div>
          <div className='md:col-span-3 col-span-6'>
          <h3 className='text-[#fff] text-[16px]'> Resources </h3>
            <ul>
              <li className='footer-list'>About Us</li>
              <li className='footer-list'>Pricing Plan</li>
              <li className='footer-list'>Help Center</li>
            </ul>
          </div>
          <div className='md:col-span-3 sm:col-span-6 col-span-12'>
          <h3 className='text-[#fff] text-[16px]'> Contact </h3>
          <ul>
              <li className='footer-list'>+963 997-741-497</li>
              <li className='footer-list'>Kahlousobada@gmail.com</li>
          </ul>
          </div>
        </div>
        <CopyRight>
            <h1> 	&#169; Name, 2022-2023 Create by Obada Kahlous  </h1>
            <p> كل يوم هو! بداية جديدة </p>
        </CopyRight>
      </FooterContainer>
      <style>
        {`
          .footer-list{
            font-size : 14px;
            color : rgba(255,255,255,0.6);
            transition : 0.4s;
            margin : 10px 0px;
            cursor : pointer;
          }
          .footer-list:hover{
            color : #49c628a6;
          }
        `}
      </style>
    </>

  )
}

export default Footer

const FooterContainer = styled.footer`
  margin-top: 60px;
  border-top: 3px solid transparent;
  border-image: linear-gradient(0.25turn, #7dfb7d, #3cfd07 , #59ee9a);
  border-image-slice: 1;
  padding-top: 100px;
  padding-right : 80px;
  padding-left : 80px;
  @media(max-width : 768px){
    padding-right : 20px;
    padding-left : 20px;
  }
`
const CopyRight = styled.div`
  width : 80%;
  margin: 70px auto 0px auto;
  padding : 10px 0px;
  color : rgba(255,255,255,0.6);
  font-size: 16px;
  border-top : 1px solid rgba(255,255,255,0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width : 768px){
    width : 100%;
    font-size: 10px;
  }
`