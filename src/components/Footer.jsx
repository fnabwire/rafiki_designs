import React from 'react';
import BackToTop from './BackToTop';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-2">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <p>&copy; {new Date().getFullYear()} John Juma. All rights reserved.</p>
      </div>
      <BackToTop />
    </footer>
  );
}

// ...existing code...
