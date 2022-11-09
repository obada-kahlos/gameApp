import React from 'react'
import styled from 'styled-components'
import FavoriteButton from '../shared/favorite-button/favorite-button'

const MoviesCard = ({ image, alt, width, height, margin, title, ratingOnImage ,rating, children, className }) => {
  return (
    <Container className={className} width={width} height={height} margin={margin}>
      <div className='h-full'>
        <Img src={image} alt={alt} className='w-full' />
      </div>
      {children}
      <Content>
        <h1 className='text-[16px] mb-[10px] text-[#fff]'> {title} </h1>
        {
          ratingOnImage &&
          <div className='bg-main-color p-2 text-[14px] text-white w-fit rounded-[3px] flex justify-center items-center gap-2'>
            <p className='pt-[2px]'>{rating}</p>
            <span className='flex justify-center items-center'><ion-icon name="star-outline"></ion-icon></span>
          </div>
        }

      </Content>
      <Favorite>
        <FavoriteButton />
      </Favorite>
    </Container>
  )
}

export default MoviesCard

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
    width : ${ (props) => props.width ? props.width : '250px' }; 
    height : ${ (props) => props.height ? props.height : '400px' };
    margin : ${ (props) => props.margin };
    border-radius: 10px;
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
    &:hover ${Img}{
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

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width : 100%;
  height : 100%;
  background-color: rgba(0,0,0,0.2);
  padding : 15px;
`
