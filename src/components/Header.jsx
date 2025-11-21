import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

 
  const PRIMARY_COLOR_HEX = '#0f4c5c'; // Deep Cyan/Blue
  const SECONDARY_COLOR_HEX = '#e36414'; // Vibrant Orange
  const TEXT_COLOR_HEX = '#374151'; // Equivalent to gray-700

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    

  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo/Brand Name */}
          <a href="#home" className="text-2xl font-extrabold flex items-center tracking-tight">
            <span 
              className="text-3xl font-black mr-1"
              style={{ color: SECONDARY_COLOR_HEX }}
            >
              J
            </span>
            <span style={{ color: PRIMARY_COLOR_HEX }}>
            ohn 
            </span>
            <span 
              className="text-3xl font-black mr-1"
              style={{ color: SECONDARY_COLOR_HEX }}
            >
             J
            </span>
            <span style={{ color: PRIMARY_COLOR_HEX }}>
            uma
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-base font-medium transition-colors relative group"
                style={{ color: TEXT_COLOR_HEX }}
              >
                {item.name}
                {/* Underline Hover Effect */}
                <span 
                  className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: SECONDARY_COLOR_HEX }}
                ></span>
              </a>
            ))}
            
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-md transition-colors"
            aria-label="Toggle Menu"
            style={{ color: PRIMARY_COLOR_HEX, border: `1px solid ${PRIMARY_COLOR_HEX}` }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/*Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4 border-t' : 'max-h-0 opacity-0 overflow-hidden'}`}
        style={{ borderColor: PRIMARY_COLOR_HEX + '1A' }} // Light border
      >
        <div className="flex flex-col space-y-2 px-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              onClick={toggleMenu}
              className="py-2 text-lg font-medium hover:pl-2 transition-all duration-200"
              style={{ color: TEXT_COLOR_HEX, borderLeft: `3px solid transparent` }}
              onMouseEnter={(e) => e.currentTarget.style.borderLeft = `3px solid ${SECONDARY_COLOR_HEX}`}
              onMouseLeave={(e) => e.currentTarget.style.borderLeft = `3px solid transparent`}
            >
              {item.name}
            </a>
          ))}
          {/* Contact CTA for mobile */}
          <a 
            href="#contact" 
            onClick={toggleMenu}
            className="mt-4 px-4 py-2 text-center rounded-lg font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: SECONDARY_COLOR_HEX }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;