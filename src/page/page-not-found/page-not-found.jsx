import React from 'react'
import { useNavigate } from 'react-router-dom'

import errorImage from '../../assets/bg-games.jpg'
const PageNotFound = () => {

    const navigate = useNavigate()

    return (
        <>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a onClick={()=> navigate('/')}>Go To Homepage</a>
                </div>
            </div>
            <style>
                {`
                #notfound {
                    position: relative;
                    height: 100vh;
                }
                #notfound .notfound {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                }
                .notfound {
                    max-width: 410px;
                    width: 100%;
                    text-align: center;
                }
                .notfound .notfound-404 {
                    height: 280px;
                    position: relative;
                    z-index: -1;
                }
                .notfound .notfound-404 h1 {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 230px;
                    margin: 0px;
                    font-weight: 900;
                    position: absolute;
                    left: 50%;
                    -webkit-transform: translateX(-50%);
                    -ms-transform: translateX(-50%);
                    transform: translateX(-50%);
                    background: url(${errorImage}) no-repeat;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-size: cover;
                    background-position: center;
                    opacity : 0.7;
                }
                .notfound h2 {
                    font-family: 'Montserrat', sans-serif;
                    color: #fff;
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-top: 0;
                }
                .notfound p {
                    font-family: 'Montserrat', sans-serif;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 400;
                    margin-bottom: 20px;
                    margin-top: 0px;
                }
                .notfound a {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    text-decoration: none;
                    text-transform: uppercase;
                    display: inline-block;
                    padding: 15px 30px;
                    border-radius: 40px;
                    color: #fff;
                    font-weight: 700;
                    box-shadow: 0px 4px 20px 0px #49c628a6;
                    background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
                    cursor : pointer;
                }
                @media only screen and (max-width: 767px) {
                    .notfound .notfound-404 {
                            height: 142px;
                        }
                        .notfound .notfound-404 h1 {
                            font-size: 112px;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default PageNotFound