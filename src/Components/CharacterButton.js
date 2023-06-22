import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.css';

function CharacterButton({ character }) {
  const { icon, name, visionIcon, vision } = character;

  return (
    <div className={vision}>
      <button className='character-btn shared-class'>
        <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
          <img src={icon} alt={name}/>
          <div className='text-container'>
            <Link
              className='dropdown-link shared-class'
              to={`/characters/${name}`}
            >
              {name}
            </Link>
          </div>
        </div>
        <div className='spacer'></div>
        <img className='vision-icon' src={visionIcon} alt='vision-icon'/>
      </button>
    </div>
  )
}

export default CharacterButton