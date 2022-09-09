import React from 'react'
import Card from '../../components/Card/Card'
import "./Collections.scss"
import { v4 as uuidv4 } from 'uuid'
import { FaEthereum } from "react-icons/fa"

const Collections = () => {

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
        <div className='container'>
            <div className="filters">
                <ul>
                    {menu}
                </ul>
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Collections