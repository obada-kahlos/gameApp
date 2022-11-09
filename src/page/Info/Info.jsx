import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieActors, movieImage } from '../../feature/get-movies-info-slice';

const Info = () => {
    const { moviesImageData, isLoading , movieActorsData } = useSelector((state) => state.getMoviesInfo)
    console.log(moviesImageData);
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(movieImage(params.id.replace(':', '')))
        dispatch(movieActors(params.id.replace(':', '')))
    }, [dispatch])
    console.log(movieActorsData);
    return (
        <>
            <div className='text-[#fff]'>movie</div>
            {/* {
                movieActorsData.map((item)=>(
                    <img src={item.image} alt="" />
                ))
            } */}
        </>

    )
}

export default Info