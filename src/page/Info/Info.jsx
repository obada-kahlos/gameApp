import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { gameById } from '../../feature/game-by-id-slice';
import { movieActors, movieImage } from '../../feature/get-movies-info-slice';

const Info = () => {
    const { isLoading } = useSelector((state) => state.gameById)
    const params = useParams()
    console.log(params.id.replace(':', ''));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(gameById(params.id.replace(':', '')))
    }, [dispatch])
    return (
        <>
            <div className='text-[#fff]'>game</div>
        </>

    )
}

export default Info