import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Header */}
      <header className={`header${isScrolled ? " hidden" : ""}`}>
        <nav className={`header-nav${isMenuOpen ? " open" : ""}`}>
          <ul className="menu">
            <li><Link to="/home" className="header-nav-link">Home</Link></li>
            <li><Link to="/about" className="header-nav-link">About</Link></li>
            <li><Link to="/portfolio" className="header-nav-link">Portfolio</Link></li>
          </ul>
        </nav>
      </header>

      {/* Floating Waffle Menu */}
      <button className="floating-menu" onClick={toggleMenu} aria-label="Open menu">
        <FontAwesomeIcon icon={faBars} className="waffle-icon" />
      </button>

      {/* Mobile Navigation (appears when menu is open) */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li><Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
