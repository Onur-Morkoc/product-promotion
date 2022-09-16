import React from 'react'
import "./Disclamier.scss"

const Disclamier = () => {
    return (
        <div className='disclamier'>
            <div className="title">DISCLAMIER</div>
            <div className='dinfo'>
                <div className="images">
                    <img src="https://cdn.discordapp.com/attachments/1017116163270004736/1017454015874859110/gfsharesite1.png" alt="" className="image-1" />
                    <img src="https://cdn.discordapp.com/attachments/1017116163270004736/1017454016415944724/Gifsharesite3.png" alt="" className="image-2" />
                    <img src="https://cdn.discordapp.com/attachments/1017116163270004736/1017454016101367898/gfsharesite2.png" alt="" className="image-3" />
                </div>
                <div className='description'>
                    While every effort has been made to ensure that the information on this site is accurate; Gif Share declares that it is not responsible for any errors, omissions or inconsistencies of purpose, whether stated or implied, that may be on this site or linked sites, and cannot be held responsible for any direct or indirect damages and losses that may arise from them. This site is subject to renewal due to changes in technology, standards or legal obligations. Some companies or products used as examples herein may be registered trademarks and/or registered trademarks of affiliated companies and may not reflect the views of Gif Share. What is written or promoted on this site is not investment advice.
                </div>
            </div>


        </div>
    )
}

export default Disclamier