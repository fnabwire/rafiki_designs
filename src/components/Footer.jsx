import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">RafikiDesigns</div>
          <p className="text-gray-300 mb-8">Creating beautiful designs that make a difference</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-gray-400">© 2025 RafikiDesigns. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
