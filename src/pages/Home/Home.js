import React from 'react'
import Card from '../../components/Card/Card'
import Disclamier from '../../components/Disclamier/Disclamier'
import OurExperience from '../../components/OurExperience/OurExperience'
import "./Home.scss"

const Home = () => {
    const images =[
        {text:"Arvelos Projects",url:"https://cdn.discordapp.com/attachments/616971277059620901/1017857065928114316/soldoutALL.gif"},
        {text:"Arvelos Projects",url:"https://cdn.discordapp.com/attachments/616971277059620901/1017857729085317180/pic-2022-07-08-T154506-741.gif"},
        {text:"Arvelos Projects",url:"https://cdn.discordapp.com/attachments/616971277059620901/1017858259551539241/52914b8ac2f16a11c42786c3d89a84f5.gif"},
        {text:"Arvelos Projects",url:"https://cdn.discordapp.com/attachments/616971277059620901/1017858370780270742/metakongz-nft.gif"},
        {text:"Arvelos Projects",url:"https://cdn.discordapp.com/attachments/616971277059620901/1017858559993724978/giphy.gif"}

    ]
    return (
        <div className='container'>
            <div className="cards">
                <Card images={images}/>

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