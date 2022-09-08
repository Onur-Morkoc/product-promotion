import React from 'react'
import Card from '../../components/Card/Card'
import Disclamier from '../../components/Disclamier/Disclamier'
import OurExperience from '../../components/OurExperience/OurExperience'
import "./Home.scss"

const Home = () => {
    return (
        <div className='container'>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='disclamier-info'>
                <Disclamier />
            </div>
            <div className='ourexperience-info'>
                <OurExperience />
            </div>
        </div>



    )
}

export default Home