import React from 'react'
import "./Widget.scss"
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsBag } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'

const Widget = ({ data }) => {

    const widget = data.map(item => {
        const id = uuidv4()
        return (
            <div className="widget" key={id.toString()}>
                <div className="left">
                    <span className='title'>{item.title}</span>
                    <span className='counter'>{item.counter}</span>
                    <span className='link'>{item.link}</span>
                </div>
                <div className="right">
                    <BsBag className='icon' />
                </div>
            </div>
        )

    })

    return (
        <>
            {widget}
        </>
    )
}

export default Widget