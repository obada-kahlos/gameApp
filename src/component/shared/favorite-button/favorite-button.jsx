import React from 'react'
import styled from 'styled-components'

const FavoriteButton = ({onClick}) => {
  return (
    <Button onClick={onClick}><ion-icon name="heart-outline"></ion-icon></Button>
  )
}

export default FavoriteButton

const Button = styled.button`
  font-size: 30px;
  color: red;
  transition: 0.2s;
  width: 50px;
  height: 50px;
  &:hover{
    font-size: 36px;
  }
`