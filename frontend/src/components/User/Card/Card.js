import React from 'react'
import "./Card.scss"
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'


const Card = ({ project }) => {

    const cardList = project.map(item => {
        const id = uuidv4()
        const price = {
            ETH: require(`../../../images/ETH.jfif`),
            SOL:require(`../../../images/SOL.png`)
        }
        let image = ""
        try {
            image = require(`../../../card-images/${item.name}-${item.type}.${item.type}`)

        } catch (error) {
            image = ""
        }

        return (
            <div className='card' key={id.toString()}>
                <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt="" className="nft-image" />
                </a>
                <div className="info">
                    <h3 className='name'>{item.name}</h3>
                    <div className='nft'>
                        <div className='size'>{item.stock} Supplys</div>
                    </div>
                    <div className='data'>
                        <div className='price'>
                            <img src={price[item.blockchain]} alt="" className="price-image" />
                            <span>{item.blockchain}</span>
                        </div>
                        <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">
                            <div className='wiew'>Wiew</div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    )
    return cardList.reverse()

}

export default Card