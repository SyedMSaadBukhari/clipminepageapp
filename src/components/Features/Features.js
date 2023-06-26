import React from 'react';
import './Features.scss';
import meanSharing from "../../clipminepage/features/index-sharing_300x120.png";
import InteractiveEmbeds from "../../clipminepage/features/index-embeds_300x120.png";
import SmartTagging from "../../clipminepage/features/index-tagging_300x120.png"

const Features = ()=>{
    return(
        
            <section className='features'>
                <header className='features-heading'>Features</header>
                <section className='feature-container'>
                    <article className='feature-card'>
                        <FeatureCards
                        imgSrc={meanSharing}
                        imgAlt="shareImg"
                        title="Meaningful Sharing"
                        description="ClipMine works great for sharing and embedding recorded video-game sessions,tutorials,product rivews,talk shows,speeches,lectures and sports coverage. Tryout more samples"
                        />
                        <FeatureCards
                        imgSrc={InteractiveEmbeds}
                        imgAlt="EmbedsImg"
                        title="Interactive Embeds"
                        description="Want to enable the ClipMine experience on your blog
                        or Twitter feed? Just embed our Content-Aware Video
                        Player. It is responsive and built to work across
                        different modern browsers and devices. Start by
                        tagging a video of your choice or pick an already
                        tagged one and simply paste the embed code into
                        your website"
                        />
                        <FeatureCards
                        imgSrc={SmartTagging}
                        imgAlt="TaggingImg"
                        title="Smart Tagging"
                        description="Found an interesting point in a video? On ClipMine,
                        adding tags is not reserved for the video owners only
                        - any community member can do it. In addition our
                        smart algorithms can automatically suggest tags (in
                        private beta) for a wide variety of videos"
                        />
                    </article>

                </section>
            </section>
        
    )
}
function FeatureCards(props) {
    return (
        <figure className="card">
            <img className='card-img' src={props.imgSrc} alt={props.imgAlt} />
            <figcaption className="description">
                <p className='figure-title'><strong>{props.title}</strong></p>
                <p className="feature-description">{props.description}</p>
            </figcaption>
        </figure>
    );
}

export default Features;