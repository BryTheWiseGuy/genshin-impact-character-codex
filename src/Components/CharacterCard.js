import React from 'react'
import { Container } from 'react-bootstrap'

function CharacterCard({ character }) {
  const { id, name, showcase, sideBanner, rarity, title, affiliation, nation, constellation, description } = character

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
        <div className='character-card-side-banner'>
          <img className='side-banner' src={sideBanner} alt='character-card-side-banner' />
        </div>
      </div>
    </div>
  )
}

export default CharacterCard

//This component is a card for the character that includes the name, title, affiliation, rarity, nation, vision, and constellation
//This component utilizes the icon for the image display