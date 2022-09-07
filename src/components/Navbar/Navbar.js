import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
    MdLanguage,
    MdOutlineDarkMode,
    MdOutlineFullscreenExit,
    MdOutlineNotificationsNone,
    MdOutlineChatBubbleOutline,
    MdList
} from "react-icons/md"
import "./Navbar.scss"

const Navbar = () => {

    let leftItems = [
        { icon: <MdLanguage />, text: "English" },
        { icon: <MdOutlineDarkMode /> },
        { icon: <MdOutlineNotificationsNone />, notification: 1 },
        { icon: <MdOutlineChatBubbleOutline />, notification: 1 },
        { icon: <MdList /> }
    ]

    const leftMenu = leftItems.map(item => {
        let id = uuidv4();
        return (
            <div className="item" key={id.toString()}>
                {item.icon}
                {item.text && item.text}
                {item.notification && (
                    <div className="notification">
                        {item.notification}
                    </div>
                )}
            </div>
        )
    })

    let middleItems = [
        { text: "Metamask" },
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
                    <img src="https://cdn.discordapp.com/attachments/616971277059620901/1017177715419389982/a_ca5ecd9ae0b50af5a9213582b0428b9e.gif" alt="logo" className="logo" />
                    <div className='animate-charcter'>Arvelos</div>
                </div>
                <div className="block-1">
                    {middleMenu}
                </div>
                <div className="block-2">
                    {leftMenu}
                    <div className="item">
                        <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="Profil" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar