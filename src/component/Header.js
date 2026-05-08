import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='header'>
            <div className='header-content'>

                <h1 className='logo'>Fahmi.</h1>

                {/* HAMBURGER */}
                <div 
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* NAV */}
                <nav className={`nav ${menuOpen ? 'show' : ''}`}>
                    <a href='#Profile'>Profile</a>
                    <a href='#Education'>Education</a>
                    <a href='#Project'>Project</a>
                    <a href='#Sertificate'>Sertificate</a>
                </nav>

            </div>
        </div>
    );
}

export default Header;