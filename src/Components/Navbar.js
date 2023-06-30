import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Navbar.css'
import Dropdown from './Dropdown'

function Navbar({ characters }) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Genshin.Codex
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link className='nav-links' onClick={closeMobileMenu}>
              <i className='fa-sharp fa-solid fa-magnifying-glass'/>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/new-character-form' className='nav-links' onClick={closeMobileMenu}>
              New Character
            </Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link className='nav-links' onClick={() => setDropdown(prev => !prev)}>
              Characters <i className={dropdown ? 'fas fa-caret-down' : 'fas fa-caret-left'} />
            </Link>
            {dropdown && <Dropdown characters={characters} />}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

//This NavBar contains Home, Characters Dropdown (Should take you to a specific characters page), and Vision Dropdown (should update which characters are displayed on home screen)