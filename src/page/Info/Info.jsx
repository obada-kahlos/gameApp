import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { gameById } from '../../feature/game-by-id-slice';
import { movieActors, movieImage } from '../../feature/get-movies-info-slice';

const Info = () => {
    const { isLoading , data } = useSelector((state) => state.gameById)
    const params = useParams()
    console.log(params.id.replace(':', ''));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(gameById(params.id.replace(':', '')))
    }, [dispatch])
    return (
        <>
            <div className='text-[#fff]'>
                <h1> {data.title} </h1>
                <img src={data.thumbnail} alt={data.title} />
                <p> {data.description} </p>
                <p> {data.short_description} </p>
                <p> {data.developer} </p>
                <p> {data.platform} </p>
                <p> {data.publisher} </p>
                <p> {data.release_date} </p>
                {
                    data.screenshots.map((image)=>(
                        <img src={image.image} alt="img" />
                    ))
                }
            </div>
        </>

    )
}

export default Info