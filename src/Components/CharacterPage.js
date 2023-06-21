import React from 'react'
import '../stylesheets/App.css'

function CharacterPage({ character }) {
  const { artwork, name } = character

  return (
    <div className='side-banner-container'>
      <div className='side-banner'>
        <img src={artwork} className='side-banner-image'/>
      </div>
      <div>
        <p className='banner-text-underlay'>{name}</p>
      </div>
    </div>
  )
}

export default CharacterPage

//This component is the entire character page, and houses the Character Card and the Talent Panel
//This page should include the character artwork as part of the design