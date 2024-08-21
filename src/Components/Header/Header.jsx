import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';
import './Header.css';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setShowHeader(true); // Scrolling up, show header
    } else {
      setShowHeader(false); // Scrolling down, hide header
    }
    setLastScrollY(currentScrollY);

    // Check if the user has scrolled past 100px from the top
    setIsScrolled(currentScrollY > 100);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.hamburger-react')) {
      setOpen(false); // Close the menu if clicked outside
    }
  };

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <div>
      <nav
        className={`header ${showHeader ? 'header-visible' : 'header-hidden'} ${isScrolled ? 'header-scrolled' : ''}`}
      >
        <div className='logo'>
          <h1>Food Delivery</h1>
        </div>
        <div className='menu'>
          <p>Home</p>
          <p>Orders</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className='navbar'>
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
          <div
            ref={menuRef}
            className={`${isOpen ? 'hamburger_menu' : 'hamburger_menu_hidden'} ${isScrolled ? 'hamburger_menu-scrolled' : ''}`}
          >
            <p>Home</p>
            <p>Orders</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
