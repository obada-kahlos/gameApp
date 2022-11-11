import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import IsLoading from '../../component/shared/isloading/isloading';
import { Container } from '../../component/style/style';
import { gameById } from '../../feature/game-by-id-slice';
import { movieActors, movieImage } from '../../feature/get-movies-info-slice';

const Info = () => {
    const { isLoading, data } = useSelector((state) => state.gameById)
    const params = useParams()
    console.log(params.id.replace(':', ''));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(gameById(params.id.replace(':', '')))
    }, [dispatch])
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
                    <Container>
                        <div className='text-[#fff] grid grid-cols-12 gap-4 md:py-[100px] py-[10px] justify-center items-center'>
                            <div className='md:col-span-4 col-span-12'>
                                <h1 className='text-main-color text-[26px]'> {data?.title} </h1>
                                <p className='text-[rgba(255,255,255,0.8)]'> {data?.short_description} </p>
                                <img src={data?.thumbnail} alt={data?.title} width='100%' />
                            </div>
                            <div className='md:col-span-8 col-span-12'>
                                <p className='text-[16px] text-[#fff]'> {data?.description.slice(0, 300)}... </p>
                                <p> Developer: <strong>{data?.developer}</strong></p>
                                <p> Platform: <strong>{data?.platform}</strong> </p>
                                <p> Publisher:  <strong>{data?.publisher}</strong> </p>
                                <p> Release date:  <strong>{data?.release_date}</strong> </p>
                            </div>
                        </div>
                        <div className='flex gap-8 overflow-x-auto'>
                            {
                                data?.screenshots?.map((image) => (
                                    <img src={image.image} alt="img" width='300px' />
                                ))
                            }
                        </div>
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </Container>
            }
        </>

    )
}

export default Info