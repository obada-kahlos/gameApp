import React from 'react'
import styled, { keyframes } from 'styled-components'

const Popup = ({ handleOpen, openPopup, Title, children }) => {
    return (
        <>
            {
                openPopup &&
                <>
                    <div>
                        <Wrapper>
                            <PopupHeader>
                                <h1> {Title} </h1>
                                <span onClick={handleOpen} className='cursor-pointer text-[24px]'> <ion-icon name="close-outline"></ion-icon> </span>
                            </PopupHeader>
                            <PopupBody>
                                {children}
                            </PopupBody>
                        </Wrapper>
                        <OverLay onClick={handleOpen}></OverLay>
                    </div>
                    <style>
                        {`
                            body{
                                overflow : hidden;
                            }
                        `}
                    </style>
                </>
            }
        </>

    )
}

export default Popup

const PopupAnimation = keyframes`
    from{
        transform: translate(-50%,-60%);
    }
    to{
        transform: translate(-50%,-50%) ;
    }
`
const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 450px;
    height: auto;
    border-radius: 10px;
    z-index: 999;
    backdrop-filter: blur(50px);
    box-shadow: 0 3px 20px 0px rgba(0,0,0,0.5);
    animation: ${ PopupAnimation } 0.3s linear;
    @media(max-width : 600px){
        width: 100%;
        height: 100%;
    }
`
const PopupHeader = styled.div`
    padding: 15px 30px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ffffffa8;
`
const PopupBody = styled.div`
    padding: 0px 30px 30px 30px;
`
const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background-color: #333333a4;
    cursor: pointer;
`