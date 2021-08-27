import React from 'react';
import './NavButtons.css';

function NavButtons() {
    return (
        <ul className="nav-buttons-list">
            <li className="nav-buttons-item">About Me</li>
            <li className="nav-buttons-item">Experience</li>
            <li className="nav-buttons-item">Work</li>
            <li className="nav-buttons-item">Contact</li>
        </ul>
    );
}

export default NavButtons;