import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../style/style'

const Navbar = ({ nav }) => {
    const navbarData = [
        {
            to: '/',
            icon: 'home-outline',
            title: 'Home',
        },
        {
            to: 'o',
            icon: 'color-palette-outline',
            title: 'Genres'
        },
        {
            to: 'o',
            icon: 'earth-outline',
            title: 'Top Movies',
        },
        {
            to: 'tag',
            icon: 'bar-chart-outline',
            title: 'Games By Tag ',
        }
    ]
    return (
        <Nav active={nav}>
            <Ul>
                {
                    navbarData.map((item, key) => (
                        <LinkElem to={item.to} key={key}>
                            <Li>
                                <span className='flex items-center justify-center'> <ion-icon name={item.icon}></ion-icon> </span>
                                <span> {item.title} </span>
                            </Li>
                        </LinkElem>
                    ))
                }
            </Ul>
            <Wrapper className=''>
                <NavLink to='favorite-movies'>
                    <Heart>
                        <span className='flex items-center justify-center text-[30px] text-[red]'> <ion-icon name="heart"></ion-icon> </span>
                    </Heart>
                </NavLink>
                <Button> Login </Button>
            </Wrapper>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    backdrop-filter: blur(20px);
    z-index : 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 5px 25px 0 rgb(0 0 0 / 30%);
    transition: 0.3s ease-in-out;
    @media(max-width : 1024px){
        position: fixed;
        top: 0;
        left : ${ (props) => props.active ? '0%' : '-100%' };
        height: 0;
        width : 250px;
        height: 100vh;
        display: flex;
        align-items: flex-start;
        flex-direction: column-reverse;
        justify-content: flex-end;
        transition: 0.3s ease-in-out;
    }
    a.active{
        color : #49c628;
    }
`
const Ul = styled.nav`
    display: flex;
    gap: 10px;
    @media(max-width : 1024px){
        display: block;
        width: 100%;
    }
`
export const LinkElem = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    @media(max-width : 1024px){
        justify-content: flex-start;
    }

`
const Li = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width : 140px;
    gap: 5px;
    height: 80px;
    font-size: 15px;
    transition: 0.3s;
    &:after{
        position: absolute;
        content : '';
        bottom : 0px;
        left : 0px;
        width : 0;
        height : 2px;
        background : #49c628;
        transition: 0.3s;
    }
    &:hover:after{
        width : 100%;
    }
    &:hover{
        color : #49c628;
    }
    @media(max-width : 1024px){
        width : 100%;
        display: flex;
        height: auto;
        align-items: center;
        padding: 30px 10px;
        justify-content: flex-start;
        &:hover:after{
            width : 60%;
        }
    }
`
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    p{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }
    @media(max-width : 1024px){
        width: 100%;
        display: block;
        padding: 10px;
        padding-bottom: 30px;
        border-bottom: 3px solid #49c628;
    }
`
const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    @media(max-width : 1024px){
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column-reverse;
    }
`
const Heart = styled.div`
    @media(max-width : 1024px){
        position: absolute;
        top: 20px;
        right: 10px;
    }
`


