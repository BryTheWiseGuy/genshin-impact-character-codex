import React from 'react';
import { Container } from 'react-bootstrap';
import TalentPanel from './TalentPanel';

function CharacterCard({ character }) {
  const { id, name, rarity, cardIcon, showcase, sideBanner, title, nation, constellation, constellationIcon, description } = character

  function handleRarity(rarity) {
    let primogem = <img src="https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Primogem.png/" alt="Primogem"/>
    if (rarity === 4) {
      return <div className='card-rarity'>
        {primogem}
        {primogem}
        {primogem}
        {primogem}
      </div>
    } else {
      return <div className='card-rarity'>
        {primogem}
        {primogem}
        {primogem}
        {primogem}
        {primogem}
    </div>
    }
  }

  return (
    <div>
      <div className='showcase-media'>
        <Container>
          <div className="ratio ratio-21x9">
            <iframe
              className='character-showcase'
              src={showcase}
              title={`Character Showcase ${id}`}
              allowFullScreen></iframe>
          </div>
        </Container>
      </div>
      <div className='bottom-video-spacer'></div>
      <div className='character-card'> 
        <div className='information-panel'>
          <img className='side-banner' src={sideBanner} alt='character-card-side-banner' />
          <div className='details-panel'>
            <img src={cardIcon} className='card-icon' alt='card-icon'/>
            <h1 className='character-name'>
              {name}
            </h1>
            <div className='title-container'>
              <div className='character-title'>
                  {title}
              </div>
            </div>
            <div className='info-grid'>
              <div className='character-nation'>
                Nation:
                <div>
                  {nation}
                </div>
              </div>
              <div className='character-rarity'>
                Rarity:
                <div>
                  {handleRarity(rarity)}
                </div>
              </div>
            </div>
            <div className='description-container'>
              <p>{description}</p>
            </div>
            <div className='constellation-container'>
              Constellation:
              <div className='character-constellation'>
                {constellation}
              </div>
              <img src={constellationIcon} alt='constellation-icon'/>
            </div>
          </div>
          <TalentPanel character={character}/>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

//This component is a card for the character that includes the name, title, affiliation, rarity, nation, vision, and constellation
//This component utilizes the icon for the image display