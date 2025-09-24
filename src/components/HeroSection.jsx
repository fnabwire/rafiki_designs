import React, { useEffect } from 'react';
import AOS from 'aos';
import heroImage from '../images/hero.jpg';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-white via-background to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              Available for freelance work
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-rose-500">
              John Juma
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Graphic Designer • Computer & Electronics Systems Engineer • Virtual Assistant
            </p>
            <ul className="flex flex-wrap gap-2 mb-8">
              <li className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">Brand Identity</li>
              <li className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">UI/UX</li>
              <li className="px-3 py-1 text-sm rounded-full bg-rose-100 text-rose-500">Marketing</li>
            </ul>
            <div className="flex space-x-4">
              <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Explore My Work
              </a>
              <a href="#contact" className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all">
                Hire Me
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(59,130,246,0.35)] ring-4 ring-primary/10">
              <img src={heroImage} alt="Designer Profile" className="w-full h-96 object-cover" />
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