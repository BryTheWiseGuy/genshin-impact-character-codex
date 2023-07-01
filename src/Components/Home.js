import React from 'react'
import CharacterPanel from './CharacterPanel.js';
import TravelerImage from '../images/genshin-impact-traveler-featured-image.png';

// The home page upon rendering should display a list of all available characters, 
// as well as a navbar with dropdown menus, a search bar for quicker navigation, and
// a button that takes the use to a New Character form page.

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