import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../../assets/slider-bg.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from '../../component/movies-card/game-card';


import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Title } from '../../component/style/style';


import cenamaImage from '../../assets/cenama.jpg'
import IsLoading from '../../component/shared/isloading/isloading';
import { listOfGame } from '../../feature/game-list-slice';
import ListOfButtons from '../../component/shared/list-of-buttons/list-of-buttons';
import { platform } from '../../feature/games-by-platform-slice';
import Loader from '../../component/loader/loader';
const MainPage = () => {


  const { dataList, isLoading } = useSelector((state) => state.gameList)
  const { platformData, isLoadingPlatform } = useSelector((state) => state.platforms)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listOfGame());
  }, [dispatch])

  useEffect(() => {
    dispatch(platform('pc'));
  }, [dispatch])

  const handlePlatformPc = () => {
    dispatch(platform('pc'));
  }
  const handlePlatformAll = () => {
    dispatch(platform('all'));
  }
  const handlePlatformBrowser = () => {
    dispatch(platform('browser'));
  }

  const [showMore, setShowMore] = useState(12)
  const handleShowMore = () => {
    setShowMore(showMore + 12)
  }
  const handleShowLess = () => {
    setShowMore(showMore - 12)
  }

  const platformButtons = [
    {
      title: 'Pc',
      onClick: handlePlatformPc
    },
    {
      title: 'Browser',
      onClick: handlePlatformBrowser
    },
    {
      title: 'All',
      onClick: handlePlatformAll
    },
  ]
  return (
    <>
      {
        isLoading ?
          <>
            <IsLoading />
            <style>
              {`
                body{
                  overflow : hidden;
                }
              `}
            </style>
          </> :
          <>
            <Header>
              <Container>
                <Title className='text-[30px] text-white text-center mb-[20px]'>Top Games.</Title>
                <div className='flex justify-center items-start flex-wrap gap-[25px]'>
                  {
                    dataList.slice(0, 8).map((game) => (
                      <GameCard
                        key={game.id}
                        alt={game.title}
                        image={game.thumbnail}
                        title={game.title}
                        description={game.short_description.slice(0, 70)}
                        genre={game.genre}
                        width={'300px'}
                      />
                    ))
                  }
                </div>
              </Container>
            </Header>
            <Container>

              <Title> Games by platform. </Title>
              <ListOfButtons items={platformButtons} />
              {
                isLoadingPlatform ? <div className='flex justify-center items-center h-[600px]'> <Loader /> </div> :
                  <div className='flex justify-center items-start flex-wrap gap-[25px]'>
                    {
                      platformData.slice(0, showMore).map((game) => (
                        <GameCard
                          key={game.id}
                          alt={game.title}
                          image={game.thumbnail}
                          title={game.title}
                          description={game.short_description.slice(0, 70)}
                          genre={game.genre}
                          width={'300px'}
                        />
                      ))
                    }
                  </div>
              }
              <div className='my-[30px] flex justify-center items-center gap-4'>
                <Button onClick={handleShowMore}> Show More </Button>
                {
                  showMore > 12 ?  <Button onClick={handleShowLess}> Show Less </Button> : null
                }
              </div>
            </Container>
          </>
      }
    </>

  )
}

export default MainPage

const Header = styled.header`
  height: auto;
  background: url(${ img }) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
  color: #fff;
  @media(max-width : 1024px){
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 30px;
  };
  @media(max-width : 768px){
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 30px;
  }
`
const MoviesType = styled.div`
      &:after{
        position: absolute;
        content : '';
        bottom: 10px;
        left: 0;
        height : 3px;
        width: 70%;
        background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
    }
`
const Section = styled.section`
      padding: 40px 0;
      background: url(${ cenamaImage }) center center / cover no-repeat;
`