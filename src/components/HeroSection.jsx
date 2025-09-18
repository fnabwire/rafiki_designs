import React, { useEffect } from 'react';
import AOS from 'aos';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Creative Design <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transforming ideas into visually stunning experiences that captivate and inspire.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                View Work
              </a>
              <a href="#contact" className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all">
                Get in Touch
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <div className="hero-frame custom-shadow">
              <img src={('../images/art.jpg')} alt="Designer Profile" className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">2+ Years</div>
              <div className="text-sm">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;