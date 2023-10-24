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
    <div
        className="mobile-menu-icon"
        role="button"
        onClick={() => setShowNav(!showNav)}
    >
        <FontAwesomeIcon icon="fa-solid fa-bars" />
    </div>
  )
}

export default Navbar