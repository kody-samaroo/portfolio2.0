import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {
    const [showNav, setShowNav] = useState(true)

    function scrollToSection(value) {
        window.scrollTo({
            top: value,
            behavior: 'smooth'
        })
    }


  return (
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
                    className="inactive"
                    activeClassName="active" 
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(0)}}
                >
                    Home 
                </div> 
            </li>

            <li> 
                <div 
                    className="inactive"
                    activeClassName="active" 
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(650)}}
                >
                    Work Experience 
                </div> 
            </li>
            
            <li> 
                <div 
                    className="inactive"
                    activeClassName="active" 
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(1200)}}
                >
                    Projects 
                </div> 
            </li>

            <li> 
                <div 
                    className="inactive"
                    activeClassName="active" 
                    role="button"
                    onClick={() => { setShowNav(!showNav); scrollToSection(1850)}}
                >
                    Contact 
                </div> 
            </li>
            
        </ul>
    </div>    
  )
}

export default Navbar