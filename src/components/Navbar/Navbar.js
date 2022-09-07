import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BsDiscord } from "react-icons/bs"
import { RiQuestionAnswerFill } from "react-icons/ri"

import "./Navbar.scss"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    let leftItems = [
        { icon: <BsDiscord />, text: "Discord", url: "https://discord.gg/j4j" },
        { icon: <RiQuestionAnswerFill />, text: "Any Question?", text2: "Contact Arvelos", url: "" },
    ]

    const leftMenu = leftItems.map(item => {
        let id = uuidv4();
        return (
            <div className="item" key={id.toString()}>
                <span className='icon'>{item.icon}</span>
                <div>
                    <div className='text'>{item.text && item.text}</div>
                    <div className='text'>{item.text2 && item.text2}</div>
                </div>

            </div>
        )
    })

    let middleItems = [
        { text: "Home" },
        { text: "Collections" },
    ]

    const middleMenu = middleItems.map(item => {
        let id = uuidv4();
        return (
            <div className="item" key={id.toString()}>
                {item.text && item.text}
            </div>
        )
    })

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="logo">
                    <img src="https://cdn.discordapp.com/attachments/616971277059620901/1017177715419389982/a_ca5ecd9ae0b50af5a9213582b0428b9e.gif" alt="logo"/>
                    <div className='animate-charcter'>Gif Share</div>
                </div>
                <div className="block-1">
                    {middleMenu}
                </div>
                <div className="block-2">
                    {leftMenu}
                </div>
            </div>
        </div>
    )
}

export default Navbar