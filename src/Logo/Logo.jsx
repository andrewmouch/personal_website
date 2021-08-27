import React from 'react';
import LogoText from '../assets/SVGs/LogoText.svg';
import './Logo.css';

function Logo() {
    return (
        <div className="logo-container">
            <img alt="A" src={LogoText} className="logo-text" />
        </div>
    );
}

export default Logo;