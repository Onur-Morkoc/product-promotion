import React from 'react'
import "./Card.scss"
const Card = ({images}) => {

console.log(images)
    const cardList =images.map(image=>{
        return(
            <div className='card'>
            <img src={image.url} alt="" className="nft-image" />
            <div className="info">
                <h3 className='name'>{image.text}</h3>
                <div className='nft'>
                    <div className='size'>700 Supplys</div>

                </div>
                <div className='data'>
                    <div className='price'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/640px-Ethereum_logo_translucent.svg.png" alt="" className="price-image" />
                        <span>ETH</span>
                    </div>
                    <div className='wiew'>Wiew</div>
                </div>
            </div>
        </div>
        )
    }

    )
    return  cardList
    
}

export default Card