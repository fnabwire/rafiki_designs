import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <nav className="bg-[#012169] text-white p-4 fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="#home" className="hover:text-[#0E97B9] transition duration-300">RAFIKI DESIGNS</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-[#0E97B9] transition duration-300">Home</a>
          <a href="#portfolio" className="hover:text-[#0E97B9] transition duration-300">Portfolio</a>
          <a href="#contact" className="hover:text-[#0E97B9] transition duration-300">ContactSection</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#about" className="block py-2 px-4 hover:bg-[#0E97B9] transition duration-300">About</a>
          <a href="#portfolio" className="block py-2 px-4 hover:bg-[#0E97B9] transition duration-300">Portfolio</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-[#0E97B9] transition duration-300">ContactSection</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;