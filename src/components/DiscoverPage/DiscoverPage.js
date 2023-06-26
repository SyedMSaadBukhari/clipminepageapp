import React from 'react';
import './DiscoverPage.scss';
import gatesjob from "../../clipminepage/video-gatesjobs_280x187.png"
import gatesstone from "../../clipminepage/video-emma_280x187.png"
import pipboy from "../../clipminepage/video-ronconway_280x187.png"
const DiscoverPage = ()=>{
    return(
        
        <section className='discoverpage'>
            <header className='subheading'>Help your viewers discover what matters most to them!</header>
            <section className='card-container'>
                <article className='discover-card'>
                    <DiscoverCard
                    imgSrc={gatesjob}
                    imgAlt="Bill & Steve"
                    description="@01:00:20 Greatest thing about Bill and Steve's Relationship."
                    />
                    <aside className='tags'>
                        <p>4 people tagged</p>
                        <p>170</p>
                    </aside>
                    <aside className='embed'>
                        <p>Embed &lt;/&gt;</p>
                        <p>share</p>
                    </aside>
                </article>
                <article className='discover-card'>
                    <DiscoverCard
                    imgSrc={gatesstone}
                    imgAlt="Bill & Steve"
                    description="@01:59 Hook:Emma Stone Greatest thing about Bill......."
                    />
                    <div className='tags'>
                        <p>3 people tagged</p>
                        <p>200</p>
                    </div>
                    <div className='embed'>
                        <p>Embed &lt;/&gt;</p>
                        <p>share</p>
                    </div>
                </article>
                <article className='discover-card'>
                    <DiscoverCard
                    imgSrc={pipboy}
                    imgAlt="Bill & Steve"
                    description="@13:34 Real Pip-Boy with 2nd screen experience Emma Stone....."
                    />
                    <div className='tags'>
                        <p>2 people tagged</p>
                        <p>305</p>
                    </div>
                    <div className='embed'>
                        <p>Embed &lt;/&gt;</p>
                        <p>share</p>
                    </div>
                </article>
            </section>  
            <footer className='clipmine-def'>ClipMine works great for sharing and embedding recorded video-game sessions,tutorials,product rivews,talk shows,speeches,lectures and sports coverage. Tryout more samples</footer>
        </section>
        
    )
}

function DiscoverCard(props) {
    return (
        <figure className="card">
            <img className='Vid-snap' src={props.imgSrc} alt={props.imgAlt} />
            <figcaption className="description">
                <p className="video-description">{props.description}</p>
            </figcaption>
        </figure>
    );
}

export default DiscoverPage;
