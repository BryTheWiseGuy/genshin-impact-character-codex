import React from 'react'
import CharacterButton from './CharacterButton'
import '../stylesheets/App.css'

// This component is the container for the character buttons seen on the homepage

function CharacterPanel({ characters }) {

  return (
    <div className='character-panel'>
      {characters.map((character) => {
        const { id } = character
        return <CharacterButton 
          key={id}
          character={character}
        />
      })}
    </div>
  )
}

export default CharacterPanel