import React from 'react';
import './Benefits.scss';
import ExperienceImg from "../../clipminepage/benefits/index-benefit-personal_166x166.png"; 
import EngagementImg from "../../clipminepage/benefits/index-benefit-engagement_166x166.png";
import AnalyticsImg from "../../clipminepage/benefits/index-benefit-analytics_166x166.png"

const Benefits = ()=>{
    return(
        
            <section className='benefits-container'>
                <header className='heading'>Benefits</header>  
                <article className='Personal-Experience'>
                    <img className='Benefits-img' src={ExperienceImg} alt='ExpIcon'/>
                    <span className='benefits-description'>
                        <h2 className='benefit-name'>Personalized Experience</h2>
                        <p>ClipMine allows your viewers to the video content and see what's inside, through it, and
                        specific parts of the videos they like.</p>
                    </span>
                </article>
                <article className='Improved-Engagement'>
                    <img className='Benefits-img' src={EngagementImg} alt='EngageIcon'/>
                    <span className='benefits-description'>
                        <h2 className='benefit-name'>Improved Engagement</h2>
                        <p>Our customers have seen up to 50% higher engagement and lower early drop-off rates on their
                        videos when embedded with ClipMine.</p>
                    </span>
                </article>
                <article className='Actionable-Analytics'>
                    <img className='Benefits-img' src={AnalyticsImg} alt='AnalyticsIcon'/>
                    <span className='benefits-description'>
                        <h2 className='benefit-name'>Actionable Analytics</h2>
                        <p>Our in-video analytics (by invitation only) allow you to understand user engagement in terms
                        of your content rather than timestamps. You'll exactly know which parts of the video are more
                        likely to be clicked and how long users stay there.</p>
                    </span>
                </article>
                    
            </section>
        
    )
}


export default Benefits;
