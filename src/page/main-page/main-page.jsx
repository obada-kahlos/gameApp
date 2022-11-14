import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../../assets/bg-games.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from '../../component/movies-card/game-card';


import { useDispatch, useSelector } from 'react-redux';


import IsLoading from '../../component/shared/isloading/isloading';
import { listOfGame } from '../../feature/game-list-slice';
import ListOfButtons from '../../component/shared/list-of-buttons/list-of-buttons';
import { platform } from '../../feature/games-by-platform-slice';
import Loader from '../../component/loader/loader';
import { Link } from 'react-router-dom';
import Container from '../../component/shared/container/container';
import Button from '../../component/shared/button/button';
import { Title } from '../../component/shared/heading/heading';
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

  const [showMore, setShowMore] = useState(32)
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
                    dataList.slice(0, 8).map((game, key) => (
                      <Link to={`/info:${ game.id }`} key={key}>
                        <GameCard
                          alt={game.title}
                          image={game.thumbnail}
                          title={game.title}
                          description={game.short_description.slice(0, 70)}
                          genre={game.genre}
                          width={'320px'}
                          height={'190px'}
                        />
                      </Link>
                    ))
                  }
                </div>
              </Container>
              <Layout></Layout>
            </Header>
            <Container>

              <Title> Games by platform. </Title>
              <ListOfButtons items={platformButtons} />
              {
                isLoadingPlatform ? <div className='flex justify-center items-center h-[300px]'> <Loader /> </div> :
                  <>
                    <div className='flex justify-center items-start flex-wrap gap-[25px]'>
                      {
                        platformData.slice(20, showMore).map((game, key) => (
                          <Link to={`/info:${ game.id }`} key={key}>
                            <GameCard
                              alt={game.title}
                              image={game.thumbnail}
                              title={game.title}
                              description={game.short_description.slice(0, 70)}
                              genre={game.genre}
                              width={'320px'}
                              height={'190px'}
                            />
                          </Link>
                        ))
                      }
                    </div>
                    <div className='my-[30px] flex justify-center items-center gap-4'>
                      <Button onClick={handleShowMore}> Show More </Button>
                      {
                        showMore > 32 ? <Button onClick={handleShowLess}> Show Less </Button> : null
                      }
                    </div>
                  </>
              }
            </Container>
          </>
      }
    </>

  )
}

export default MainPage

const Header = styled.header`
  position: relative;
  height: auto;
  background: url(${ img }) no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
  color: #fff;
  z-index: 995;
  @media(max-width : 1024px){
    padding-left: 5px;
    padding-right: 5px;
  };
  @media(max-width : 768px){
    padding-left: 5px;
    padding-right: 5px;
  }
`
const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  z-index: 1;
`