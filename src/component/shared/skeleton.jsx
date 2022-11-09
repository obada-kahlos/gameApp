import Skeleton from '@mui/material/Skeleton';

import React from 'react'

const LoadingSkeleton = ({height , width}) => {
    return (
        <div className='flex gap-8 justify-between'>
            <Skeleton sx={{ bgcolor: 'rgba(180,180,180,0.3)' }} animation="wave" variant="rounded" width={width} height={height}/>
            <Skeleton sx={{ bgcolor: 'rgba(180,180,180,0.3)' }} animation="wave" variant="rounded" width={width} height={height}/>
            <Skeleton sx={{ bgcolor: 'rgba(180,180,180,0.3)' }} animation="wave" variant="rounded" width={width} height={height}/>
            <Skeleton sx={{ bgcolor: 'rgba(180,180,180,0.3)' }} animation="wave" variant="rounded" width={width} height={height}/>
        </div>
    )
}

export default LoadingSkeleton