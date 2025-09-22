import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top${isVisible ? ' show' : ''} bg-secondary text-background hover:bg-background`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fa fa-chevron-up text-secondary"></i>
    </button>
  );
};

export default BackToTop;
