import React from 'react';
import './TagPage.scss';

const TagPage =()=>{
    return(
        
            <section className='tag-page'>
                <header className='heading'>What would you like to tag?</header>
                <article className='tag-container'>
                    <input type='text' id='link' placeholder='Paste a YouTube, Vimeo or Dailymotion video URL'/>
                    <button className='tag-button'>TAG NOW</button>
                </article>

            </section>
        
    )
}
export default TagPage;