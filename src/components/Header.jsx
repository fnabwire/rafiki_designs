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
        <header className={`w-full fixed top-0 left-0 z-50 transition-all${isScrolled ? " hidden" : ""} bg-background shadow-md`}>
          <nav className={`flex justify-between items-center px-6 py-4${isMenuOpen ? "" : ""}`}>
            <ul className="flex space-x-6">
              <li><Link to="/home" className="text-primary hover:text-secondary font-semibold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary hover:text-secondary font-semibold transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-primary hover:text-secondary font-semibold transition-colors">Portfolio</Link></li>
            </ul>
          </nav>
        </header>

      {/* Floating Waffle Menu */}
        <button className="fixed top-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors" onClick={toggleMenu} aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>

      {/* Mobile Navigation (appears when menu is open) */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-2/3 h-full bg-background shadow-lg flex flex-col items-center pt-20 z-50">
            <ul className="space-y-8">
              <li><Link to="/home" className="text-primary hover:text-secondary text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="text-primary hover:text-secondary text-lg font-bold" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/portfolio" className="text-primary hover:text-secondary text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
            </ul>
          </div>
        )}
    </>
  );
};

export default Header;
