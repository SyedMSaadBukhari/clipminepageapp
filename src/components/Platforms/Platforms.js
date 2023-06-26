import React from 'react';
import './Platforms.scss';
import youtube from "../../clipminepage/platforms/platform-youtube_230x100.png";
import vimeo from "../../clipminepage/platforms/platform-vimeo_230x100.png";
import dailymotion from "../../clipminepage/platforms/platform-dailymotion_230x100.png";
import html from "../../clipminepage/platforms/platform-html5_230x100.png"

const Platforms =()=>{
    return(
        
            <section className='platforms'>
                <header className='heading'>Supported Platforms</header>
                <article className='platforms-container'>
                    <img className='pltfrm-img' src={youtube} alt='youtubeLogo'/>
                    <img className='pltfrm-img' src={vimeo} alt='VimeoLogo'/>
                    <img className='pltfrm-img' src={dailymotion} alt='dailymotionLogo'/>
                    <img className='pltfrm-img' src={html} alt='htmlLogo'/>
                </article>

            </section>
        
    )
}
export default Platforms;