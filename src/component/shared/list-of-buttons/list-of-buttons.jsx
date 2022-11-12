import React from 'react'
import styled from 'styled-components'

const ListOfButtons = ({ items }) => {
    return (
        <ul className='flex justify-center items-center flex-wrap gap-4 my-[30px]'>
            {
                items?.map((item,key) => (
                    <LI onClick={item.onClick} key={key}> {item.title} </LI>
                ))
            }
        </ul>
    )
}

export default ListOfButtons
const LI = styled.li`
    padding: 10px 30px;
    color: #fff;
    border: 2px solid rgba(204, 204, 204,0.6);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        border: 2px solid #49c628;
        color: #49c628;
    }
    @media(max-width : 768px){
        
    }
`




