import React from 'react'
import CharacterButton from './CharacterButton'
import '../stylesheets/App.css'

function CharacterPanel({ characters }) {

  return (
    <div className='character-panel'>
      {characters.map((character) => {
        return <CharacterButton 
          key={character.name}
          character={character}
        />
      })}
    </div>
  )
}

export default CharacterPanel