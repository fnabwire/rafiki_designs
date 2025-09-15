import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[70vh] bg-background px-8 pt-16 pb-8">
      <div className="flex-1 flex flex-col justify-center md:items-start items-center z-10 max-w-xl">
        <h2 className="text-4xl font-bold mb-3 text-primary md:text-left text-center">About Me</h2>
        <p className="text-base text-secondary mb-6 md:text-left text-center">
          As a skilled graphic designer with hands-on experience in Canva, Photoshop, and other design tools, I excel at creating visually appealing and professional materials.
          I am a highly organized and resourceful Virtual Assistant with proven expertise in time management, administrative support, and digital tools. My experience includes managing schedules, handling correspondence, designing marketing assets, and streamlining workflows to enhance productivity.
        </p>
        <a
          className="px-6 py-2 bg-primary text-white rounded-md font-semibold transition-all duration-300 hover:bg-secondary w-fit"
          href="https://drive.google.com/file/d/1Xki5QFwDpzc9czcjevyIx59olIsApLRC/view?usp=drivesdk"
          download="JOHN JUMA_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
        <div className="relative w-22 h-22 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary" style={{ zIndex: 1 }}></div>
          <img src="/src/images/art.jpg" alt="About" className="absolute inset-0 w-6 h-6 object-cover object-center rounded-full z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;