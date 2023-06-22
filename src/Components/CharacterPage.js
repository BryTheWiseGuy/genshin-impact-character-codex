import React from 'react'
import CharacterCard from './CharacterCard'
import '../stylesheets/App.css'
import Navbar from './Navbar'

function CharacterPage({ character, characters, setCurrentCharacter }) {
  const { artwork, name } = character

  console.log(character)

  return (
    <div className='character-page'>
      <div className='top-banner-container'>
        <div className='top-banner'>
          <img src={artwork} className='top-banner-image' alt='top-banner-img'/>
        </div>
        <div>
          <p className='banner-text-underlay'>{name}</p>
        </div>
      </div>
      {/* <div className='top-banner-spacer'></div> */}
      <Navbar characters={characters} onSetCurrentCharacter={setCurrentCharacter} />
      <CharacterCard character={character} />
    </div>
  )
}

export default CharacterPage

//This component is the entire character page, and houses the Character Card and the Talent Panel
//This page should include the character artwork as part of the design