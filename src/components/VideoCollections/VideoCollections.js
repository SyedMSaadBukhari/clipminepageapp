import React from 'react';
import './VideoCollections.scss';

const VideoCollections = ()=>{
    return(
        
            <section className='video-collections'>
                <header className='heading'>ClipMine Video Collections</header>
                <article className='video-container'>
                    <span className='startups'>STARTUPS</span>
                    <span className='machineLearning'>MACHINE LEARNING</span>
                </article>
                <footer className='footer'>These are curated lists of high quality online videos, tagged by ClipMine's smart algorithms and editors to
                demonstrate the usefulness of ClipMine.</footer>
            </section>
        
        
    )
}

export default VideoCollections;
