import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center flex-row flex-wrap min-h-[60vh] bg-[#032825] p-8 hero-section">
      <div className="flex items-center flex-row flex-wrap justify-center w-full">
        <div className="text-center text-white flex-1 p-4 max-w-xl">
          <h1 className="text-[#98760B] text-3xl md:text-4xl font-bold mb-2">Hello, I'm John Juma</h1>
          <p className="text-lg md:text-xl mb-6">
            Graphic Designer | Computer and Electronics Systems Engineer | Virtual Assistant
          </p>
          <div className="flex justify-center gap-4 mt-5 flex-wrap button-container">
            <a
              className="px-5 py-2 bg-[#98760B] rounded-md font-semibold text-white transition-all duration-300 hover:bg-[#bfa14d] cta-button"
              href="#ContactSection"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
            <a
              className="px-5 py-2 bg-[#98760B] rounded-md font-semibold text-white transition-all duration-300 hover:bg-[#bfa14d] cta-button"
              href="/portfolio"
              rel="noopener noreferrer"
            >
              Explore My Work
            </a>
          </div>
        </div>
        {/* <AboutSection /> */}
      </div>
    </section>
  );
};

export default HeroSection;
