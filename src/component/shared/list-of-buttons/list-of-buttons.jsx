import React, { useState } from 'react'
import styled from 'styled-components'

const ListOfButtons = ({ items }) => {
    const [active , setActive] = useState(0)
    return (
        <ul className='flex justify-center items-center gap-4 my-[30px]'>
            {
                items?.map((item,index) => (
                    <LI onClick={item.onClick} > {item.title} </LI>
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
`




