import React from 'react';
import heroImage from '../images/hero.jpg';
import { Briefcase } from 'lucide-react'; 

const HeroSection = () => {

  
  const PRIMARY_COLOR_HEX = '#0f4c5c'; // Deep Cyan/Blue
  const SECONDARY_COLOR_HEX = '#e36414'; // Vibrant Orange

  return (
    
    <section id="home" className="min-h-[50vh] flex items-center pt-16 pb-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl"> 
        <div className="grid lg:grid-cols-12 gap-8 items-center"> 
          
        
          <div className="lg:col-span-6 xl:col-span-7">
                        
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-2 leading-tight  ">
              Hello, I'm
              <span 
                className="block text-4xl sm:text-5xl lg:text-6xl font-black mt-1"
                style={{ background: `linear-gradient(to right, ${SECONDARY_COLOR_HEX}, ${PRIMARY_COLOR_HEX})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                John Juma
              </span>
            </h1>
            
            
            <p className="text-base md:text-lg text-gray-700 mb-4 font-medium">
              Graphic Designer • Computer Engineer • Virtual Assistant
            </p>
            
            
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-600 mb-1 flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                Core Proficiencies:
              </h3>
              <ul className="flex flex-wrap gap-2">
               
                <li 
                  className="px-3 py-1 text-xs rounded-md font-medium shadow-sm"
                  style={{ backgroundColor: `${SECONDARY_COLOR_HEX}1A`, color: SECONDARY_COLOR_HEX }}
                >
                  Brand Identity
                </li>
                              
                <li 
                  className="px-3 py-1 text-xs rounded-md font-medium shadow-sm"
                  style={{ backgroundColor: `${SECONDARY_COLOR_HEX}1A`, color: SECONDARY_COLOR_HEX }}
                >
                  Digital Marketing
                </li>
                <li 
                  className="px-3 py-1 text-xs rounded-md font-medium shadow-sm"
                 style={{ backgroundColor: `${SECONDARY_COLOR_HEX}1A`, color: SECONDARY_COLOR_HEX }}
                >
                  Advertising
                </li>
                <li 
                  className="px-3 py-1 text-xs rounded-md font-medium shadow-sm"
                  style={{ backgroundColor: `${SECONDARY_COLOR_HEX}1A`, color: SECONDARY_COLOR_HEX }}
                >
                  Logo Design
                </li>
                <li 
                  className="px-3 py-1 text-xs rounded-md font-medium shadow-sm"
                  style={{ backgroundColor: `${SECONDARY_COLOR_HEX}1A`, color: SECONDARY_COLOR_HEX }}
                >
                  Photo Manipulation
                </li>
                <li 
                  className="px-3 py-1 text-xs rounded-md font-medium shadow-sm"
                  style={{ backgroundColor: `${SECONDARY_COLOR_HEX}1A`, color: SECONDARY_COLOR_HEX }}
                >
                  Digital Marketing
                </li>
              </ul>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              
              {/* CTA 1 (Explore Work) */}
              <a 
                href="#projects" 
                className="text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-primary/50"
                style={{ backgroundColor: PRIMARY_COLOR_HEX }}
              >
                Explore My Portfolio
              </a>

              {/* CTA 2 (Hire Me) */}
              <a 
                href="#contact" 
                className="border-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center hover:shadow-md hover:bg-white"
                style={{ borderColor: SECONDARY_COLOR_HEX, color: SECONDARY_COLOR_HEX }}
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:col-span-6 xl:col-span-5 relative order-first lg:order-last">
            {/* Decorative shape */}
            <div 
              className="absolute hidden lg:block w-36 h-36 rounded-full -top-6 -right-6 opacity-50 blur-lg z-0"
              style={{ backgroundColor: SECONDARY_COLOR_HEX }}
            ></div>
            
            {/* Image Container*/}
            <div 
              className="relative z-10 rounded-xl overflow-hidden aspect-square w-full mx-auto max-w-xs lg:max-w-sm"
              style={{ 
                boxShadow: `0 10px 20px -6px ${PRIMARY_COLOR_HEX}66`, 
                border: `3px solid ${PRIMARY_COLOR_HEX}`
              }}
            >
              <img 
                src={heroImage} 
                alt="John Juma Profile" 
                className="w-full h-full object-cover transform scale-105 hover:scale-100 transition duration-500 ease-in-out" 
              />
            </div>
            
            {/* Decorative shape */}
             <div 
              className="absolute hidden lg:block w-24 h-24 rounded-full bottom-4 left-0 opacity-40 blur-md z-0"
              style={{ backgroundColor: PRIMARY_COLOR_HEX }}
            ></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;