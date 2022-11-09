import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../../assets/slider-bg.jpg'
import Genres from '../genres/genres'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviesCard from '../movies-card/movies-card';


import { useDispatch, useSelector } from 'react-redux';
import { upcomingMovies } from '../../feature/upcoming-slice';

import CircularProgress from '@mui/material/CircularProgress';
import { NowPlaying, resetNowPlaying } from '../../feature/movies-now-playing-slice';
import Slick from '../slick/slick';
import { Button, Container } from '../style/style';

import cenamaImage from '../../assets/cenama.jpg'

import Tag from '../shared/tag/tag';
import LoadingSkeleton from '../shared/skeleton';
import Loader from '../loader/loader';
import Pagination from '@mui/material/Pagination';
import IsLoading from '../shared/isloading/isloading';
import { Link } from 'react-router-dom';

const Movies = () => {

  const { upcoming, isLoading } = useSelector((state) => state.upcoming)
  const { moviesNowPlayingData , isLoadingNowPlaying } = useSelector((state) => state.nowPlaying)
  const dispatch = useDispatch()

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value)
    dispatch(resetNowPlaying())
  }

  useEffect(()=>{
    dispatch(upcomingMovies())
  },[dispatch])

  useEffect(() => {
    dispatch(NowPlaying(page))
  }, [dispatch , page])

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
          </>: 
        <Header>
          <Container>
                <div>
                  <div>
                    <h2 className='mb-[10px] text-[30px] text-white'>Top Movies.</h2>
                    <Slick
                      arrows={false}
                      autoplay={true}
                      autoplaySpeed={2000}
                      dots={false}
                      slideToScroll={1}
                      slideToShow={4}
                      slidesToShowLg={4}
                      slidesToShowLMd={3}
                      slidesToShowLSm={2}
                      slidesToShowLMobile={1}
                      speed={1500}
                      infinite={true} >
                      { 
                        upcoming.map((upcomingItem) => (
                          <Link to={`/:${upcomingItem.id}`} key={upcomingItem.id}>
                            <MoviesCard alt={upcomingItem.title} image={upcomingItem.poster} title={upcomingItem.title} ratingOnImage={true} rating={upcomingItem.vote} />
                          </Link>
                        ))
                      }
                    </Slick>

                  </div>
                  <MoviesType className='md:w-[95%] w-full mx-auto my-5 relative'>
                    <Genres />
                  </MoviesType>
                </div>
          </Container>
        </Header>
      }

      <Section>
        <Container className=''>
          <h2 className='mb-[10px] text-[30px] text-white'> Now Playing. </h2>
          <div className=''>
            {
              isLoadingNowPlaying ? <div className='flex justify-center items-center h-[400px]'><Loader /> </div>:
              <Slick
                arrows={false}
                autoplay={false}
                autoplaySpeed={2000}
                dots={true}
                slideToScroll={6}
                slideToShow={6}
                slidesToShowLg={5}
                slidesToShowLMd={3}
                slidesToShowLSm={2}
                slidesToShowLMobile={2}
                speed={1500}
                infinite={true}
              >
                {
                  moviesNowPlayingData.map((item, key) => (
                    <Link to={`/:${item.id}`}>
                      <div key={key} className='mb-[30px]'>
                        <MoviesCard alt={item.title} image={item.poster} height='240px' width='160px' ratingOnImage={false}/>
                        <div className='mt-[10px] md:p-[0px] p-[15px] h-[120px] flex flex-col justify-between'>
                          <div>
                            <p className='text-white text-[14px]'> {item.title} </p>
                            <div className='text-[14px] text-white w-fit rounded-[3px] flex justify-center items-center gap-2'>
                              <p className='pt-[2px]'>{item.vote}</p>
                              <span className='flex justify-center items-center text-main-color'><ion-icon name="star-outline"></ion-icon></span>
                            </div>
                          </div>
                          <Tag genres={item.genres.slice(0, 2)} />
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </Slick>
            }
          </div>
        </Container>
        <div className='w-full mt-[60px] mb-[20px] mx-auto flex justify-center text-white'>
          <Pagination count={10} page={page} onChange={handleChange} color='primary' size="small"/>
        </div>
      </Section>
    </>
  )
}

export default Movies

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
  @media(max-width : 1024px){
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 30px;
  };
  @media(max-width : 768px){
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 100px;
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