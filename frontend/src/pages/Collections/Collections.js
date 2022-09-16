import React from 'react'
import Card from '../../components/User/Card/Card'
import "./Collections.scss"
import { v4 as uuidv4 } from 'uuid'
import Navbar from '../../components/User/Navbar/Navbar'
import Footer from '../../components/User/Footer/Footer'

const Collections = () => {

    const images = [
        { text: "Arvelos Projects", url: "https://cdn.discordapp.com/attachments/616971277059620901/1017857065928114316/soldoutALL.gif" },
        { text: "Arvelos Projects", url: "https://cdn.discordapp.com/attachments/616971277059620901/1017857729085317180/pic-2022-07-08-T154506-741.gif" },
        { text: "Arvelos Projects", url: "https://cdn.discordapp.com/attachments/616971277059620901/1017858259551539241/52914b8ac2f16a11c42786c3d89a84f5.gif" },
        { text: "Arvelos Projects", url: "https://cdn.discordapp.com/attachments/616971277059620901/1017858370780270742/metakongz-nft.gif" },
        { text: "Arvelos Projects", url: "https://cdn.discordapp.com/attachments/616971277059620901/1017858559993724978/giphy.gif" }

    ]

    const menuArray = [
        { text: "All" },
        { text: "Ethereum", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/640px-Ethereum_logo_translucent.svg.png" },
        { text: "Solana", url: "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png?v=637944448890000000" }
    ]

    const menu = menuArray.map(item => {
        let id = uuidv4();
        return <li key={id.toString()}>
            {item.url && <img src={item.url} alt="" />}
            {item.text}
        </li>
    })

    return (
        <>
        <Navbar/>
            <div className='container'>
                <div className="filters">
                    <ul>
                        {menu}
                    </ul>
                </div>
                <div className="cards">
                    <Card images={images} />
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default Collections