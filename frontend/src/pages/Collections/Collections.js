import React from 'react'
import Card from '../../components/User/Card/Card'
import "./Collections.scss"
import { v4 as uuidv4 } from 'uuid'
import Navbar from '../../components/User/Navbar/Navbar'
import Footer from '../../components/User/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../redux/actions/productAction'
import MetaData from '../../components/MetaData'

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
    const { projects } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct("onaylı"))
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <MetaData title={`Collections`}/>
            <div className='container'>
                <div className="filters">
                    <ul>
                        {menu}
                    </ul>
                </div>
                <div className="cards">
                    <Card project={projects} />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Collections