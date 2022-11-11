import React, { useEffect } from 'react'
import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import GameCard from '../../component/movies-card/game-card';
import Container from '../../component/shared/container/container';
import InfoDescription from '../../component/shared/info-description/info-description';
import IsLoading from '../../component/shared/isloading/isloading';
import Tag from '../../component/shared/tag/tag';
import { Title } from '../../component/style/style';
import { gameById, resetData } from '../../feature/game-by-id-slice';

const Info = () => {
    const { isLoading, data } = useSelector((state) => state.gameById)
    const { dataList } = useSelector((state) => state.gameList)
    const [showText, setShowText] = useState(false)
    const params = useParams()
    console.log(params.id.replace(':', ''));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(gameById(params.id.replace(':', '')))
    }, [dispatch,params])

    const handleResetData = () => {
        dispatch(resetData())
    }

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
                    <Container padding={'120px 90px 0px 90px'}>
                        <div className='text-[#fff] grid grid-cols-12 gap-4  py-[10px] justify-center items-start'>
                            <div className='md:col-span-4 col-span-12'>
                                <h2 className='text-white md:text-[26px] text-[20px]'> {data?.title} </h2>
                                <p className='text-[rgba(255,255,255,0.8)] mb-[10px]'> {data?.short_description.slice(0, 80)} </p>
                                <LazyLoad offset={50} height={300} once>
                                    <img src={data?.thumbnail} alt={data?.title} className='md:w-full w-[350px]' />
                                </LazyLoad>
                            </div>
                            <div className='md:col-span-8 col-span-12 md:mt-[95px] mt-[30px]'>
                                <h2 className='text-white md:text-[26px] text-[20px]'> About the game. </h2>
                                <p className='text-[16px] text-[#fff] '> {
                                    showText ?
                                        data?.description
                                        : data?.description.slice(0, 300)
                                }
                                    <span onClick={() => setShowText(!showText)} className='cursor-pointer'>... {showText ? "see less" : "see more"}</span>
                                </p>
                                <InfoDescription data={data?.developer} description={'Developer'} />
                                <InfoDescription data={data?.platform} description={'Platform'} />
                                <InfoDescription data={data?.publisher} description={'Publisher'} />
                                <InfoDescription data={data?.release_date} description={'Release date'} />
                                <div className='flex justify-between items-center'>
                                    <Tag genre={data?.genre} />
                                    <a href={data?.thumbnail} download>
                                        <DownloadBtn>
                                            <ion-icon name="cloud-download-outline"></ion-icon>
                                        </DownloadBtn>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='text-white'>
                            <h2 className='text-white md:text-[26px] text-[20px]'> Minimum System Requirements. </h2>
                            <InfoDescription data={data?.minimum_system_requirements?.graphics} description={'Graphics'} />
                            <InfoDescription data={data?.minimum_system_requirements?.memory} description={'Memory'} />
                            <InfoDescription data={data?.minimum_system_requirements?.os} description={'OS'} />
                            <InfoDescription data={data?.minimum_system_requirements?.processor} description={'Processor'} />
                            <InfoDescription data={data?.minimum_system_requirements?.processor} description={'Storage'} />
                        </div>
                        <div className='flex gap-4 overflow-x-auto my-[30px]'>
                            {
                                data?.screenshots?.map((image) => (
                                    <LazyLoad offset={50} height={300} once>
                                        <Screenshots className='w-[300px] h-[170px]'>
                                            <img src={image?.image} alt="img" width='100%' height='100%' />
                                        </Screenshots>
                                    </LazyLoad>
                                ))
                            }
                        </div>
                    </Container>
            }
            <Container padding={'30px 0px'}>
                <Title className='text-[30px] text-white text-center mb-[20px]'>Games you may like.</Title>
                <div className='flex justify-center items-start flex-wrap gap-[25px]'>
                    {
                        dataList.slice(124, 128).map((game) => (
                            <Link to={`/info:${ game.id }`}>
                                <GameCard
                                    key={game.id}
                                    alt={game.title}
                                    image={game.thumbnail}
                                    title={game.title}
                                    description={game.short_description.slice(0, 70)}
                                    genre={game.genre}
                                    width={'300px'}
                                />
                            </Link>
                        ))
                    }
                </div>
            </Container>
        </>

    )
}

export default Info

const Screenshots = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    &::-webkit-scrollbar{
        display: none;
    }
    &::-webkit-scrollbar-track {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        display: none;
    }
    &::-webkit-scrollbar-track {
        display: none;
    }
`
const Download = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
`;
const DownloadBtn = styled.div`
    color: #fff;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #49c628;
    font-size: 22px;
    font-weight: bold;
    animation: ${ Download } 2s linear alternate infinite;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 4px 20px 0px #49c628a6;
    }
    @media(max-width : 768px){
        width: 40px;
        height: 40px;
    }
`