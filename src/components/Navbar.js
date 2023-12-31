import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavStyles } from '../styles/NavStyles';


function Navbar() {
    const [showNav, setShowNav] = useState(true)

    function scrollToSection(value) {
        window.scrollTo({
            top: value,
            behavior: 'smooth'
        })
    }


  return (
    <NavStyles>
    <div className="nav-container">
        <div
            className="mobile-menu-icon"
            role="button"
            onClick={() => setShowNav(!showNav)}
        >
            <FontAwesomeIcon icon="fa-solid fa-bars"/>
        </div>

        <ul className={showNav ? "nav-items hide-items" : "nav-items"}>
            <div 
                className="close-nav-icon"
                role="button"
                onClick={() => setShowNav(!showNav)}
            >
                <FontAwesomeIcon icon="fa-solid fa-x"/>
            </div>
            <li> 
                <div 
                    className="nav-title inactive"
                    activeClassName="active" 
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(0)}}
                >
                    Home 
                </div> 
            </li>

            <li> 
                <div 
                    className="nav-title inactive"
                    activeClassName="active" 
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(650)}}
                >
                    Work Experience 
                </div> 
            </li>
            
            <li> 
                <div 
                    className="nav-title inactive"
                    activeClassName="active" 
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(1600)}}
                >
                    Projects 
                </div> 
            </li>
        </ul>
    </div>
    </NavStyles>
  )
}

export default Navbar