import React, { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menuIcon from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
     

      <div className="navbar-links desktop">
        <Link to="intro" smooth={true} offset={-100} duration={500}>Home</Link>
        <Link to="about" smooth={true} offset={-50} duration={500}>About</Link>
        <Link to="projects" smooth={true} offset={-50} duration={500}>Projects</Link>
        <Link to="certifications" smooth={true} offset={-50} duration={500}>Certifications</Link>
        <Link to="skills" smooth={true} offset={-50} duration={500}>Skills</Link>
        
      </div>

      <button className="contact-btn desktop" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        <img src={contactImg} alt="Contact" /> Contact Me
      </button>

      <img src={menuIcon} alt="Menu" className="menu-icon mobile"
           onClick={() => setShowMenu(!showMenu)} />

      {showMenu && (
        <div className="navbar-links mobile">
          <Link to="intro" onClick={() => setShowMenu(false)}>Home</Link>
          <Link to="about" onClick={() => setShowMenu(false)}>About</Link>
          <Link to="projects" onClick={() => setShowMenu(false)}>Projects</Link>
          <Link to="certifications" onClick={() => setShowMenu(false)}>Certifications</Link>
          <Link to="skills" onClick={() => setShowMenu(false)}>Skills</Link>
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
