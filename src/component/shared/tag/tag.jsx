import React from 'react'

const Tag = ({ genre }) => {
    const colors = {
        Shooter: '#d0540e',
        MMOARPG: '#07b056',
        MMORPG: '#126a7b',
        Fighting: '#ab16aa',
        ARPG: '#780c0c',
        Strategy: '#ff00f3',
        // Comedy: '#2d211a',
        // Romance: '#7f01b0',
        // Crime: '#b9c334',
        // Thriller: '#79b70a',
        // Animation: '#b70a9b',
        // Fantasy: '#800ab7',
    }
    return (
        <div className='text-[14px] text-white p-1 rounded-[2px] mt-[10px] w-fit'
            style={{
                background: `${ colors[genre] ? colors[genre] : '#333' }`
            }} > {genre}
        </div>
    )
}

export default Tag