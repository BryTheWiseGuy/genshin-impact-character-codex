import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Dropdown.css';

// This component renders the dropdown menu displayed when hovering over characters on the home page

function Dropdown({ characters }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const determineNavLinkClassName = ({isActive}) => isActive ? 'dropdown-link ' : 'dropdown-link'

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu-clicked' : 'dropdown-menu'}
            >
                {characters.map((character) => {
                    const { id, name } = character;
                    return (
                        <li key={id} >
                            <NavLink
                                className={determineNavLinkClassName}
                                to={`/characters/${name}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Dropdown;