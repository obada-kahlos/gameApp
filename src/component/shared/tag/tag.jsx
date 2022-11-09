import React from 'react'

const Tag = ({ genres }) => {
    const colors = {
        Action: '#d0540e',
        Adventure: '#07b056',
        War: '#126a7b',
        Comedy: '#2d211a',
        Family: '#ab16aa',
        Horror: '#780c0c',
        Romance: '#7f01b0',
        Drama: '#ff00f3',
        Crime: '#b9c334',
        Thriller: '#79b70a',
        Animation: '#b70a9b',
        Fantasy: '#800ab7',
    }
    return (
        <ul className='flex gap-1 flex-wrap mt-[5px]'>
            {
                genres.map((genre, key) => (
                    <li key={key} className='text-[14px] text-white p-1 rounded-[2px]'
                        style={{
                            background: `${ colors[genre.name] ? colors[genre.name] : '#333' }`
                        }} > {genre.name} </li>
                ))
            }
        </ul>
    )
}

export default Tag