import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import PortfolioSection from '../components/PortfolioSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <About />
        <PortfolioSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

