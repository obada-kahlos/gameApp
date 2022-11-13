import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
const Image = ({ image, alt, height }) => {
    return (
        <LazyLoadImage
            src={image}
            alt={alt}
            height={height}
            width={'100%'}
            effect={'blur'}
            delayTime={1000}
            threshold={1000}
            placeholderSrc={image}
        />
    )
}

export default Image