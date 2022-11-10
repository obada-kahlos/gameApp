import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar/navbar'

import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../component/footer/footer'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { listOfGame } from '../../feature/game-list-slice'

const Layout = () => {

  const [nav, setNav] = useState(false)
  const handleShowNav = () => {
    setNav((prev) => !prev)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listOfGame())
  }, [dispatch])
  // console.log(gameListData);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setNav(false)
      }
      else if (window.innerWidth > 1024) {
        setNav(true)
      }
    }
    window.addEventListener('resize', handleResize)
  }, []);

  return (
    <>
      <Navbar nav={nav} />
      <div>
        <Outlet />
      </div>
      <Footer />
      <div className='fixed lg:top-[-60px] bottom-0 lg:right-0 w-[120px] h-[120px] rounded-full bg-main-color lg:block hidden'></div>
      <NavButton onClick={handleShowNav} >
        {nav ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}
      </NavButton>
    </>
  )
}

export default Layout

const NavButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 5px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(73, 198, 40,0.4);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  transition: 0.4s;
  &:hover{
    box-shadow: 0px 4px 20px 0px #49c628a6;
    background-color: rgba(73, 198, 40,1);
  }
`
