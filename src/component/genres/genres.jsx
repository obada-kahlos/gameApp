import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { moviesType } from '../../feature/genres-slice'

const Genres = () => {

    const dispatch = useDispatch()
    const { moviesTypeData, isLoading } = useSelector((state) => state.getDataSlice)
    useEffect(() => {
        dispatch(moviesType())
    }, [,])
    const scrollRef = useRef(null)
    const scrollLeft = () => {
        scrollRef.current.scrollLeft += 200;
    }
    const scrollRight = () => {
        scrollRef.current.scrollLeft -= 200;
    }

    return (
        <>
            <h1 className='text-left md:text-[30px] my-[20px] text-[16px] text-white'> Moves type. </h1>
            <Wrapper ref={scrollRef}>
                {
                    moviesTypeData.map((item, key) => (
                        <Container className='' key={key}>
                            <h1 className='md:text-[20px] text-[14px] text-[#fff]'> {item.name} </h1>
                            <p className='md:text-[36px] text-[14px] font-bold text-[#49c628a6]'> {item.movies_count} </p>
                        </Container>
                    ))
                }
            </Wrapper>
            {
                moviesTypeData.length > 0 ?
                    <ArrowsButton>
                        <button onClick={scrollRight}> <ion-icon name="arrow-back-outline"></ion-icon> </button>
                        <button onClick={scrollLeft}> <ion-icon name="arrow-forward-outline"></ion-icon> </button>
                    </ArrowsButton>
                    : null
            }
        </>
    )
}

export default Genres

const Wrapper = styled.div`
    position: relative;
    display: flex;
    gap: 30px;
    overflow : hidden;
    overflow-x : scroll;
    padding-bottom: 30px;
    &::-webkit-scrollbar{
        display: none;
    }
`
const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    min-width : 160px;
    padding : 10px;
    cursor: pointer;
    @media(max-width : 768px){
       min-width : 110px; 
    }
    &:hover{
        backdrop-filter: blur(20px);
    }
`
const ArrowsButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 10px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    button{
        background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
        color : #fff;
        width : 40px;
        height : 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-size : 22px;
        transition: 0.4s;
        &:hover{
            box-shadow: 0px 4px 20px 0px #49c628a6;
        }
        @media(max-width : 768px){
            font-size : 14px;
            width : 30px;
            height : 30px;
        }
    }
`