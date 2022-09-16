import React from 'react'
import "./Card.scss"
import { v4 as uuidv4 } from 'uuid'


const Card = ({project}) => {

    const cardList =project.map(item=>{
        const id = uuidv4()
        let image =""
        try {
            image = require(`../../../card-images/${item.name}-${item.type}.${item.type}`)
          
        } catch (error) {
            image=""
        }
        
        return(
            <div className='card' key={id.toString()}>
            <img src={image} alt="" className="nft-image" />
            <div className="info">
                <h3 className='name'>{item.name}</h3>
                <div className='nft'>
                    <div className='size'>{item.stock} Supplys</div>
                </div>
                <div className='data'>
                    <div className='price'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/640px-Ethereum_logo_translucent.svg.png" alt="" className="price-image" />
                        <span>{item.blockchain}</span>
                    </div>
                    <div className='wiew'>Wiew</div>
                </div>
            </div>
        </div>
        )
    }

    )
    return  cardList.reverse()
    
}

export default Card