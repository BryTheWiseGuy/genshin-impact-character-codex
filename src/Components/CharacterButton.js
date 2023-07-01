import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.css';

//This component renders all character buttons seen on the home page

function CharacterButton({ character }) {
  const { icon, name, visionIcon, vision } = character;

  return (
    <div className={vision}>
      <button className='character-btn shared-class'>
        <div style={{position: 'relative', display: 'flex', alignItems: 'center', width: '400px'}}>
          <img src={icon} alt={name}/>
          <div className='text-container' style={{width: '400px'}}>
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