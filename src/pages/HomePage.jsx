import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

import ContactSection from '../components/ContactSection';
import Testimonials from '../components/Testimonials';
import PortfolioSection from '../components/PortfolioSection';
import About from '../components/About';

function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      {/* <About/> */}
      <HeroSection />
      {/* <AboutSection /> */}
      <PortfolioSection /> 
      {/* <Testimonials /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;
