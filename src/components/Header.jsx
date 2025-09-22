import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Header = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary">John Juma</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-secondary hover:text-primary transition-colors">Projects</a>
            <a href="#testimonials" className="text-secondary hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Contact</a>
          </div>
          <button className="md:hidden text-secondary">
            <i data-feather="menu"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;