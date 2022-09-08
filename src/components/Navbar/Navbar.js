import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BsDiscord } from "react-icons/bs"
import { RiQuestionAnswerFill } from "react-icons/ri"

import "./Navbar.scss"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    let leftItems = [
        { icon: <BsDiscord />, text: "Discord", url: "https://discord.gg/j4j" },
        {
            icon: <RiQuestionAnswerFill />,
            text: "Any Question?",
            text2: "Contact Arvelos",
            url: "https://discordapp.com/users/994336699301777520/Discord"
        },
    ]

    const leftMenu = leftItems.map(item => {
        let id = uuidv4();
        return (
            <div className="item" key={id.toString()}>
                <a href={item.url} target="_blank" rel="noreferrer">
                    <span className='icon'>{item.icon}</span>
                    <div>
                        {item.text && <div className='text'>{item.text}</div>}
                        {item.text2 && <div className='text'>{item.text2}</div>}
                    </div>
                </a>
            </div >
        )
    })

    let middleItems = [
        { text: "Home", url: "/" },
        { text: "Collections", url: "/collections" },
    ]

    const middleMenu = middleItems.map(item => {
        let id = uuidv4();
        return (
            <Link to={item.url}>
                <div className="item" key={id.toString()}>

                    {item.text && item.text}
                </div>
            </Link>

        )
    })

    return (
        <div className="navbar">
            <div className="wrapper">
                <Link to={"/"}>
                    <div className="logo">
                        <img src="https://cdn.discordapp.com/attachments/616971277059620901/1017177715419389982/a_ca5ecd9ae0b50af5a9213582b0428b9e.gif" alt="logo" />
                        <div className='animate-charcter'>Gif Share</div>
                    </div>
                </Link>
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