import React from 'react'
import styled from 'styled-components'

const InputForm = ({onClick , isPassword , labelText , name , id , value , type , pattern , icon , onChange , placeholder , required , ErrorMessage}) => {
  return (
    <>
      <div className='md:mb-[25px] mb-[20px]'>
        <label className='text-[16px] text-[#737373]' htmlFor={id}>{labelText}</label>
        <div className='relative'>
          <input type={type} name={name} id={id} pattern={pattern} 
          value={value} onChange={onChange} placeholder={placeholder} required={required}
          className='w-full border-b-[2px] border-[#49C628] py-[8px] pl-[40px] pr-[10px] ' 
          />
          <Icon className='left-[10px]'>
            <ion-icon name={icon}></ion-icon>
          </Icon>
          {
            name === 'password' &&
              <Icon onClick={onClick} className='right-[10px]'>
                {
                  isPassword ? <ion-icon name="eye-off-outline"></ion-icon> : <ion-icon name="eye-outline"></ion-icon>
                }
              </Icon>
          }
        <span className='error absolute'>{ErrorMessage}</span>
        </div>
    </div>
      
      <style>
          {`
            span.error{
                color : red;
                font-size: 13px;
                display: none;
                {/* bg-[#E8F0FE] */}
            }
            @media(max-width : 768px){
              span.error{
                font-size: 12px;
              } 
            }
            input:invalid  {
                border-bottom: 2px solid red;
            }
            input:invalid ~ span {
                display: block;
            }
          `}
      </style>
    </>

  )
}

export default InputForm


const Icon = styled.span`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  color : #737377;
  font-size: 20px;
  cursor: pointer;
`

