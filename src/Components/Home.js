import React from 'react'
import CharacterPanel from './CharacterPanel.js';
import TravelerImage from '../images/genshin-impact-traveler-featured-image.png';

function Home({ characters }) {

    return (
        <div className='home'>
            <div id="banner-image">
                <img className="banner-image" src={TravelerImage} alt="traveler-banner" />
            </div>
            <div className='page-break'></div>
            <CharacterPanel characters={characters} />
        </div>
    )
}

export default Home

//The home page upon rendering should display a grid of all available characters, as well as a navbar with dropdown menus, filters, and a search bar for quicker navigation