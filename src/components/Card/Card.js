import React from 'react'
import "./Card.scss"
const Card = () => {
    return (
        <div className='card'>
            <img src="https://cdn.discordapp.com/attachments/1007713937778815028/1017162774238986350/1.jpg" alt="" className="nft-image" />
            <div className="info">
                <h3 className='name'>alveros</h3>
                <div className='nft'>
                    <div className='size'>700 Items</div>
                    <div className='price'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/640px-Ethereum_logo_translucent.svg.png" alt="" className="price-image" />
                        <span>ETH</span>
                    </div>
                </div>
                <div className='data'>
                    <div className='history'>1 Day Ago</div>
                    <div className='wiew'>Wiew</div>
                </div>
            </div>


        </div>
    )
}

export default Card