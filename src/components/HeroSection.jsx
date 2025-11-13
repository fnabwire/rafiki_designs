import React, { useEffect } from 'react';
import heroImage from '../images/hero.jpg';

const HeroSection = () => {

  const PRIMARY_COLOR_HEX = '#0f4c5c'; // Deep Cyan/Blue
  const SECONDARY_COLOR_HEX = '#e36414'; // Vibrant Orange

  useEffect(() => {
      }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Replaced data-aos with simple structure */}
          <div>
            {/* Tag Banner: Primary Color Scheme */}
            <div className={`inline-flex items-center px-4 py-1 rounded-full bg-[${PRIMARY_COLOR_HEX}]/10 text-[${PRIMARY_COLOR_HEX}] text-sm font-medium mb-4`}>
              Available for freelance work
            </div>
            
            {/* Main Heading Gradient: Secondary to Primary */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[${SECONDARY_COLOR_HEX}] via-[${PRIMARY_COLOR_HEX}] to-[${SECONDARY_COLOR_HEX}]">
              John Juma
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Graphic Designer • Computer & Electronics Systems Engineer • Virtual Assistant
            </p>
            
            {/* Skill Tags */}
            <ul className="flex flex-wrap gap-2 mb-8">
              {/* Brand Identity: Secondary Color Scheme */}
              <li className={`px-3 py-1 text-sm rounded-full bg-[${SECONDARY_COLOR_HEX}]/10 text-[${SECONDARY_COLOR_HEX}] font-medium`}>Brand Identity</li>
              {/* UI/UX: Primary Color Scheme */}
              <li className={`px-3 py-1 text-sm rounded-full bg-[${PRIMARY_COLOR_HEX}]/10 text-[${PRIMARY_COLOR_HEX}] font-medium`}>UI/UX</li>
              {/* Marketing: Mapped to Primary Color Scheme for consistency */}
              <li className={`px-3 py-1 text-sm rounded-full bg-[${PRIMARY_COLOR_HEX}]/10 text-[${PRIMARY_COLOR_HEX}] font-medium`}>Marketing</li>
            </ul>
            
            <div className="flex space-x-4">
              {/* CTA 1 (Explore Work): Primary Background */}
              <a 
                href="#projects" 
                className={`bg-[${PRIMARY_COLOR_HEX}] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90`}
              >
                Explore My Work
              </a>
              {/* CTA 2 (Hire Me): Secondary Border/Text */}
              <a 
                href="#contact" 
                className={`border-2 border-[${SECONDARY_COLOR_HEX}] text-[${SECONDARY_COLOR_HEX}] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[${SECONDARY_COLOR_HEX}] hover:text-white`}
              >
                Hire Me
              </a>
            </div>
          </div>
          
          {/* Hero Image Section */}
          <div className="relative">
            <div 
              // Custom shadow using Primary Color
              className={`rounded-xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(15,76,92,0.4)] ring-4 ring-[${PRIMARY_COLOR_HEX}]/10`}
            >
              <img src={heroImage} alt="Designer Profile" className="w-full h-96 object-cover" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;