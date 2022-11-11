import React from 'react'
import styled from 'styled-components'
import Tag from '../shared/tag/tag'

const GameCard = ({ image, alt, width, height, margin, title, description, className, genre }) => {
  return (
    <Container className={className} width={width}  margin={margin}>
      <div className='h-full'>
        <Img src={image} alt={alt} height={height}/>
      </div>
      <div className='h-[180px] flex justify-between flex-col'>
        <Title className='my-[5px]'> {title} </Title>
        <div>
          <Description className='break-words'> {description} </Description>
          <Tag genre={genre} />
        </div>
      </div>
    </Container>
  )
}

export default GameCard

const Favorite = styled.div`
  position: absolute;
  bottom: 0px;
  right: 100%;
  transition: 0.2s;
`
const Img = styled.img`
  width : 100%;
  height : 100%;
  transition: 0.2s;
`
const Container = styled.div`
    position: relative;
    width : ${ (props) => props.width }; 
    height : ${ (props) => props.height };
    margin : ${ (props) => props.margin };
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s;
    &:hover{
      /* box-shadow: 0px 4px 40px 0px rgba(73, 198, 40, 0.4)  ; */
      transform: scale(1.05);
    }
    &:hover ${ Favorite }{
      right: 10px;
    }
    &:hover ${ Img }{
      opacity: 0.4;
    }
    @media(max-width : 992px){
      width : 220px;
    }
    @media(max-width : 768px){
      width : 95%;
      margin : 0 auto;
    }
    @media(max-width : 480px){
      /* width : 300px; */
      margin : 0 auto;
    }
`
const Title = styled.h2`
  font-size: 20px;
  color: #fff;
  @media(max-width : 768px){
    font-size: 20px;
  }
`

const Description = styled.p`
  font-size: 16px;
  color: #ccc;
  @media(max-width : 768px){
    font-size: 14px;
  }
`