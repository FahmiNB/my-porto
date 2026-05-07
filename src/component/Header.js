import React from 'react';
import './Header.css';

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className='header-content'>
                    
                    <h1 className='logo'>Fahmi.</h1>

                    <nav className='nav'>
                        <a href='#Profile'>Profile</a>
                        <a href='#Education'>Education</a>
                        <a href='#Project'>Project</a>
                        <a href='#Sertificate'>Sertificate</a>
                        {/* <a href='#Contact'>Contact</a> */}
                    </nav>

                </div>
            </div>
        );
    }
}

export default Header;