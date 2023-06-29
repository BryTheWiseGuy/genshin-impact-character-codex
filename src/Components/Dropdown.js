import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Dropdown.css';

function Dropdown({ characters, onMenuClick }) {
    const [click, setClick] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const handleDropdownClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu-clicked' : 'dropdown-menu'}
            >
                {characters.map((character, index) => {
                    const isActive = activeIndex === index;
                    const { id, name } = character;
                    return (
                        <li key={id} className={isActive ? 'active' : ''}>
                            <Link
                                className='dropdown-link'
                                to={`/characters/${name}`}
                                onClick={() => {
                                    handleDropdownClick(index)
                                    closeMobileMenu()
                                    onMenuClick()
                                }}
                            >
                                {name}
                            </Link>
                            {isActive && (
                                <ul className='submenu'>
                                    {characters.map(() => {
                                        return <li key={id}>
                                            <Link
                                                className='dropdown-link'
                                                to={`/characters/${name}`}
                                                onClick={!isActive}
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    })}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Dropdown;