import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BsDiscord } from "react-icons/bs"
import { RiQuestionAnswerFill } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"

import gifshare from '../../../images/GifShare.gif';
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setmenu] = useState(false)

    let rightItems = [
        { icon: <BsDiscord />, text: "Discord", url: "https://discord.gg/j4j" },
        {
            icon: <RiQuestionAnswerFill />,
            text: "Any Question?",
            text2: "Contact Arvelos",
            url: "https://discordapp.com/users/994336699301777520/Discord"
        },
    ]

    const rightMenu = rightItems.map(item => {
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
            <Link to={item.url} key={id.toString()}>
                <div className="item" key={id.toString()}>
                    {item.text && item.text}
                </div>
            </Link>

        )
    })

    const menuHandler = () => setmenu((prev) => !prev)


    return (
        <div className="container-navbar">
            <div className="navbar">
                <div className="wrapper">
                    <Link to={"/"}>
                        <div className="logo">
                            <img src={gifshare} alt="logo" />
                            <div className='animate-charcter'><span>Gif</span> Share</div>
                        </div>
                    </Link>
                    <div className={menu ? "block-1 active" : "block-1"}>
                        {middleMenu}
                    </div>
                    <div className={menu ? "block-2 active" : "block-2"}>
                        {rightMenu}
                    </div>
                    <div className="humburgermenu" onClick={menuHandler}><GiHamburgerMenu /></div>
                </div>
            </div>
        </div>

    )
}

export default Navbar