

const Footer = () => {
  
  const PRIMARY_COLOR = '#0f4c5c'; // Deep Cyan/Blue
  const SECONDARY_COLOR = '#e36414'; // Vibrant Orange

  return (
    
    <footer className={`bg-white/95 backdrop-blur-sm text-gray-800 py-3 rounded-t-xl`}>
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center">
          {/* Company Name */}
          <div className="text-3xl font-extrabold mb-4 tracking-wider">Rafiki Designs</div>
          <p className="mb-8 opacity-90">Creating beautiful designs that make a difference</p>
          
          {/* Navigation Links */}
          <div className="flex justify-center space-x-6 mb-4 text-lg font-medium">
            
            <a href="#" className={`hover:text-[${PRIMARY_COLOR}] transition-colors duration-300`}>Home</a>
            <a href="#about" className={`hover:text-[${PRIMARY_COLOR}] transition-colors duration-300`}>About</a>
            <a href="#projects" className={`hover:text-[${PRIMARY_COLOR}] transition-colors duration-300`}>Projects</a>
            <a href="#testimonials" className={`hover:text-[${PRIMARY_COLOR}] transition-colors duration-300`}>Testimonials</a>
            <a href="#contact" className={`hover:text-[${PRIMARY_COLOR}] transition-colors duration-300`}>Contact</a>
          </div>
          
          {/* Copyright */}
          <p className="opacity-70 text-sm mt-6">© {new Date().getFullYear()} Rafiki Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;