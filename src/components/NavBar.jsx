import {NavLink} from 'react-router-dom';
import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <div className="NavContainer">
                <ul>
                    <li><NavLink exact to="/" activeClassName="activeItem">Home</NavLink></li>
                    <li><NavLink exact to="/about"  activeClassName="activeItem">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;