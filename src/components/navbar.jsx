// import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { navLinks } from '../constants';
import '../assets/styles/navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    return (
    <nav className="nav flex align-items flex-1">
      <img src='' alt="logo" />
      {!isSmallScreen &&
        <div className='align-center flex'>
        <ul className='flex mx-6'>
          {navLinks.map((link, index) => (
            <li key={link.id} className={`${index !== navLinks.length - 1 ? "mr-10" : "mr-1"}`} onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      }
      
    </nav>
  );
};

export default Navbar;
