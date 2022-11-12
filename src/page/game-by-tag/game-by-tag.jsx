import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../component/shared/button/button'
import Container from '../../component/shared/container/container'
import { Title } from '../../component/shared/heading/heading'
import IsLoading from '../../component/shared/isloading/isloading'
import ListOfButtons from '../../component/shared/list-of-buttons/list-of-buttons'
import Tag from '../../component/shared/tag/tag'
import { gameByTag } from '../../feature/game-by-tag-slice'

const GameByTag = () => {
    const { gameByTagData, isLoading } = useSelector((state) => state.gameByTag)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(gameByTag('Mmorpg'))
    }, [,])
    const [showMore, setShowMore] = useState(17)
    const handleShowMore = () => {
        setShowMore(showMore + 9)
    }
    const handleShowLess = () => {
        setShowMore(showMore - 9)
    }
    const GameByTagButtons = [
        {
            title: 'Shooter',
        },
        {
            title: 'Mmorpg',
        },
        {
            title: 'PVP',
        },
        {
            title: 'Mmofps',
        },
        {
            title: 'Mmofp',
        },
        {
            title: 'Mmofp',
        },
    ]
    return (
        <>
            {
                isLoading ? <>
                    <IsLoading />
                    <style>
                        {`
                    body{
                      overflow : hidden;
                    }
                  `}
                    </style>
                </> :
                    <Container className=''>
                        <Title> Games By Tag. </Title>
                        <ListOfButtons items={GameByTagButtons} />
                        <div className='grid grid-cols-12 lg:gap-10 gap-4'>
                            {
                                gameByTagData.slice(8, showMore).map((game ,key) => (
                                    <Wrapper key={key} className='lg:col-span-4 md:col-span-6 col-span-12 cursor-pointer'>
                                        <Link to={`/info:${ game.id }`}>
                                            <div className=''>
                                                <div className='relative overflow-hidden'>
                                                    <LazyLoad offset={50} height={300} once>
                                                        <img src={game.thumbnail} alt={game.title} className='opacity-[0.8] rounded-[5px] h-[240px] w-full' />
                                                    </LazyLoad>
                                                    <PlayIconContainer className=''>
                                                        <PlayIcon> <ion-icon name="play-outline"></ion-icon> </PlayIcon>
                                                    </PlayIconContainer>
                                                </div>
                                                <div className='mt-[20px]'>
                                                    <div className='flex justify-between flex-col h-[220px] py-2'>
                                                        <div className='flex flex-col gap-2 overflow-hidden'>
                                                            <h2 className='text-main-color font-bold'> {game.title} </h2>
                                                            <p className='text-[#fff] text-[14px]'> {game.short_description.slice(0, 150)}... </p>
                                                            <div className='text-[#fff] rounded-[2px] w-fit flex items-center gap-1'>
                                                                <p className=''> developer: {game.developer} </p>
                                                                <span className='flex justify-center items-center text-main-color'><ion-icon name="star"></ion-icon></span>
                                                            </div>
                                                            <p className='text-white'> platform: {game.platform} </p>
                                                        </div>
                                                        <Tag genre={game.genre} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Wrapper>
                                ))
                            }
                        </div>
                        <div className='my-[30px] flex justify-center items-center gap-4'>
                            <Button onClick={handleShowMore}> Show More </Button>
                            {
                                showMore > 17 ? <Button onClick={handleShowLess}> Show Less </Button> : null
                            }
                        </div>
                    </Container>
            }
        </>
    )
}

export default GameByTag

const PlayIconContainer = styled.div`
    position: absolute;
    top: 0;
    left : 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background : rgba(0,0,0,0);
`
const PlayIcon = styled.div`
    width : 60px;
    height : 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 26px;
    border-radius: 50%;
    border : 2px solid #49c628;
    transition: 0.6s;
    opacity: 0;
`
const Wrapper = styled.div`
    transition: 0.4s;
    border-radius: 4px;
    padding : 5px;
    overflow: hidden;
    &:hover{
        background: #3f3e3e;
    }
    &:hover ${ PlayIcon } {
        opacity: 1;
    }
    &:hover ${ PlayIconContainer } {
        background : rgba(0,0,0,0.5);
    }
`