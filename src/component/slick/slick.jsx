import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slick = ({ dots, infinite, slideToShow, slidesToShowLg, slidesToShowLMd, slidesToShowLSm, slidesToShowLMobile, slideToScroll, speed, autoplay, arrows, autoplaySpeed, children }) => {
    const settings = {
        dots: dots,
        infinite: infinite,
        slidesToShow: slideToShow,
        slidesToScroll: slideToScroll,
        autoplay: autoplay,
        speed: speed,
        lazyLoad: true,
        arrows: arrows,
        autoplaySpeed: autoplaySpeed,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: slidesToShowLg,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: slidesToShowLMd,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToShowLSm,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: slidesToShowLMobile,
                    slidesToScroll: 1,
                    autoplaySpeed: 400,
                    speed: 1000,
                }
            }
        ],
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    padding: "10px",
                }}
            >
                <ul style={{ display: "flex", gap: '10px', justifyContent: 'center' }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='dots-slicks'>
                {/* {i + 1} */}
            </div>
        )
    };
    return (
        <>
            <Slider {...settings}>{children}</Slider>
            <style>
                {`
                    .dots-slicks{
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        border: 1px solid #49c628;
                    }
                    @media(max-width : 768px){
                        .dots-slicks{
                            width: 10px;
                            height: 10px;
                            border-radius: 50%;
                            border: 1px solid #49c628;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Slick