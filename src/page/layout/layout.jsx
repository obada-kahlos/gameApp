import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar/navbar'

import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer/footer'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { listOfGame } from '../../feature/game-list-slice'
import Popup from '../../component/popup/popup'
import Login from '../../component/login/login'
import Rejecter from '../../component/signup/signup'

const Layout = () => {

  const [nav, setNav] = useState(false)
  const handleShowNav = () => {
    setNav((prev) => !prev)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listOfGame())
  }, [dispatch])

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

  const [openPopup, setOpenPopup] = useState(false)
  const HandleOpenPopup = () => {
    setOpenPopup((prev) => !prev)
  }

  const [login, setLogin] = useState(false)
  const handleLogin = () => {
    setLogin((prev) => !prev)
  }

  return (
    <>
      <Navbar nav={nav} handleShowNav={handleShowNav} HandleOpenPopup={HandleOpenPopup} />
      <div>
        <Outlet />
      </div>
      <Footer />
      <div className='fixed lg:top-[-60px] bottom-0 lg:right-0 w-[120px] h-[120px] rounded-full bg-main-color lg:block hidden'></div>
      <div className='lg:hidden block fixed bottom-10 right-10'>
        <NavButton onClick={handleShowNav} >
          {nav ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}
        </NavButton>
      </div>
      <Popup Title={'Login'} openPopup={openPopup} handleOpen={HandleOpenPopup}>
        {
          login === false ? <Login handleLogin={handleLogin} /> : <> <Rejecter handleLogin={handleLogin} /> </>
        }
      </Popup>
    </>
  )
}

export default Layout

const NavButton = styled.button`
  padding: 5px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #fff;
  backdrop-filter: blur(20px);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  transition: 0.4s;
  &:hover{
    box-shadow: 0px 4px 20px 0px #49c628a6;
  }
`
