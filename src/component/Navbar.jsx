import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='booali shake-text'>&lt;Booali/&gt;</span>
      <div className='social-icons'>
        <a href="https://www.linkedin.com/in/boo-ali-kazmi-9675b52b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='icons' />
        </a>
        <a href="https://github.com/booali9" target="_blank" rel="noopener noreferrer">
          <FaGithub className='icons' />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100010539648788" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='icons' />
        </a>
        <a href="https://www.instagram.com/booalikazmi/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='icons' />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
