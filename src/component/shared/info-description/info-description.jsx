import React from 'react'
import styled from 'styled-components'

const InfoDescription = ({ description, data }) => {
    return (
        <P>{description}: <Strong> {data} </Strong> </P>
    )
}

export default InfoDescription

const P = styled.p`
    color: #fff;
    font-size: 16px;
    @media(max-width : 768px){
        font-size: 14px;
    }
`
const Strong = styled.strong`
    color: #49c628;
    font-size: 16px;
    @media(max-width : 768px){
        font-size: 14px;
    }
`