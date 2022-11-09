import React, { useEffect } from 'react'
import LazyLoad from 'react-lazyload'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import empty from '../../assets/empty.svg'
import { Button } from '../../component/style/style'
import { listOfGame } from '../../feature/game-list-slice'

const FavoriteMovies = () => {
    const { dataList, isLoading } = useSelector((state) => state.gameList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listOfGame())
    }, [dispatch])
    console.log(dataList);
    const navigate = useNavigate()

    return (
        <Container>
            <Empty>
                <div>
                    <p className='md:text-[24px] text-[18px] mb-[20px]' > You don't have any anime in your,<br /> <span className='md:text-[40px] text-[24px] font-mono'> favorites! </span> </p>
                    <p className='mt-[10px] md:text-[18px] text-[14px]'> Lets add Some Movies To Your Favorite </p>
                    <Button onClick={() => { navigate(-1) }}> Add some </Button>
                </div>
                <LazyLoad offset={50} height={300} once>
                    <img src={empty} alt="" width='350px' height='300px' />
                </LazyLoad>
            </Empty>
        </Container>
    )
}

export default FavoriteMovies

const Container = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
    @media(min-width : 1200px){
        width: 1170px;
        margin: 0 auto;
    }
    @media(max-width : 768px){
        width : 100%;
        margin: 0;
        padding-top: 50px;
        padding-left: 10px;
        padding-right: 10px;
    }
`
const Empty = styled.div`
    margin-top : 30px;
    width : 100%;
    height : auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color : #fff;
    @media(max-width : 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`