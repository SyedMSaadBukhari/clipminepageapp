import React from 'react';
import './Partners.scss';
import combinator from "../../clipminepage/partners/partner-yc_215x94.png";
import blackbox from "../../clipminepage/partners/partner-blackbox_215x94.png";
import ucf from "../../clipminepage/partners/partner-ucf_215x94.png";
import bothsides from "../../clipminepage/partners/partner-bothsides_215x94.png";
import cvt from "../../clipminepage/partners/partner-cv_215x94.png";
import FiveStart from "../../clipminepage/partners/partner-500startups_215x94.png";


const Partners =()=>{
    return(
        
            <section className='partners'>
                <header className='heading'>Who's Using ClipMine?</header>
                <article className='partners-container'>
                    <img className='ptnr-img' src={combinator} alt='CombinatorLogo'/>
                    <img className='ptnr-img' src={blackbox} alt='BlackboxLogo'/>
                    <img className='ptnr-img' src={ucf} alt='UcfLogo'/>
                    <img className='ptnr-img' src={bothsides} alt='BothsidesLogo'/>
                    <img className='ptnr-img' src={cvt} alt='CvtLogo'/>
                    <img className='ptnr-img' src={FiveStart} alt='500Logo'/>
                </article>
                <footer className='footer'>Want to embed videos on your website?<a href='#!'>content</a></footer>
            </section>
        
    )
}
export default Partners;