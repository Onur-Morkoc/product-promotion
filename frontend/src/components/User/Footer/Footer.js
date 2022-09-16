import React from 'react'
import { Link } from 'react-router-dom'
import gifshare from '../../../images/GifShare.gif';
import { v4 as uuidv4 } from 'uuid'
import "./Footer.scss"
import { BsDiscord } from "react-icons/bs"
import { RiQuestionAnswerFill } from "react-icons/ri"

const Footer = () => {

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
                <li>
                    {item.text && item.text}
                </li>
            </Link>

        )
    })
    return (
        <div className="footer">
            <div className="block-1">
                <Link to={"/"}>
                    <div className="logo">
                        <img src={gifshare} alt="logo" />
                        <div className='animate-charcter'>Gif Share</div>
                    </div>
                </Link>
            </div>
            <div className="block-2">
                <div className="title">Gifshares.com</div>
                <ul>
                    {middleMenu}
                </ul>

            </div>
            <div className="block-3">
                <div className="title">Community</div>
                <ul>
                    {rightMenu}
                </ul>

            </div>
        </div>
    )
}

export default Footer