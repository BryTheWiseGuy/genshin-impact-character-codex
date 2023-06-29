import React from 'react'

function TalentPanel({ character }) {

  console.log(character);
  
  return (
    <div className='talent-panel'>
      <h1 className='panel-title'>Talents</h1>
      <div className='talent-detail-container'>
        <div className='talent-icon'>
          <img src={character.talents[0].talentIcon} alt='talent-icon'/>
        </div>
        <div className='talent-details'>
          <h1>{character.talents[0].name}</h1>
          <h2>{character.talents[0].type}</h2>
        </div>
        <div className='talent-description'>
          <p>{character.talents[0].description}</p>
        </div>
        <div className='talent-preview'>
          <img src={character.talents[0].preview} alt="ability-preview"/>
        </div>
      </div>
      <div className='talent-detail-container'>
        <div className='talent-icon'>
          <img src={character.talents[1].talentIcon} alt='talent-icon'/>
        </div>
        <div className='talent-details'>
          <h1>{character.talents[1].name}</h1>
          <h2>{character.talents[1].type}</h2>
        </div>
        <div className='talent-description'>
          <p>{character.talents[1].description}</p>
        </div>
        <div className='talent-preview'>
          <img src={character.talents[1].preview} alt="ability-preview"/>
        </div>
      </div>
      <div className='talent-detail-container'>
        <div className='talent-icon'>
          <img src={character.talents[2].talentIcon} alt='talent-icon'/>
        </div>
        <div className='talent-details'>
          <h1>{character.talents[2].name}</h1>
          <h2>{character.talents[2].type}</h2>
        </div>
        <div className='talent-description'>
          <p>{character.talents[2].description}</p>
        </div>
        <div className='talent-preview'>
          <img src={character.talents[2].preview} alt="ability-preview"/>
        </div>
      </div>
    </div>
  )
}

export default TalentPanel

//This component displays all talent information, weapon information, and displays the character showcase if available
//This component should render onto the character page next to the character card