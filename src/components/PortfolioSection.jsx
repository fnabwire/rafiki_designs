import React from 'react';
import Portfolio from './Portfolio';

const projects = [
  {
    id: 1,
    imagePlaceholder: "https://placehold.co/600x300/e36414/ffffff?text=EcoLife+Branding",
    title: "Brand Identity - EcoLife",
    desc: "Complete brand identity design for an eco-friendly lifestyle brand, including logo, packaging, and marketing materials.",
    tags: ["Branding", "Packaging"],
  
  },
  {
    id: 2,
    imagePlaceholder: "https://placehold.co/600x300/0f4c5c/ffffff?text=TechFlow+App",
    title: "Mobile App - TechFlow",
    desc: "User interface design for a productivity app focused on seamless task management and team collaboration.",
    tags: ["UI/UX", "Mobile"],
    
  },
  {
    id: 3,
    imagePlaceholder: "https://placehold.co/600x300/e36414/ffffff?text=Bella+Vista+Menu",
    title: "Restaurant Menu - Bella Vista",
    desc: "Elegant menu design for an Italian restaurant, combining traditional elements with modern typography.",
    tags: ["Print", "Typography"],
    
  },
];

const PortfolioSection = () => {
 
  const PRIMARY_BG_COLOR = 'bg-[#0f4c5c]'; 
  const PRIMARY_TEXT_COLOR = 'text-[#0f4c5c]';
  const SECONDARY_TEXT_COLOR = 'text-[#e36414]'; 
  const SECONDARY_BG_COLOR = 'bg-[#e36414]';
  
  

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          
          <h2 className={`text-4xl font-bold ${SECONDARY_TEXT_COLOR} mb-4`}>Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of recent work that showcases my design approach and creative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(227,100,20,0.35)] transition-shadow duration-300"
            >
              
              <img 
                src={project.imagePlaceholder} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                
                <h3 className={`text-xl font-bold ${SECONDARY_TEXT_COLOR} mb-2`}>{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    
                    <span 
                      key={tag} 
                      className={`${PRIMARY_BG_COLOR} bg-opacity-10 ${PRIMARY_TEXT_COLOR} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a 
                href="#Portfolio" // Placeholder link for the other projects page
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer"
                
                className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white ${SECONDARY_BG_COLOR} shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110`}
            >
                Explore All Projects
            </a>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;