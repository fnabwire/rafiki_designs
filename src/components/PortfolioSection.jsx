import React from 'react';
import image55 from '../images/image55.jpeg';
import image70 from '../images/image70.jpeg';
import kijaniprofile from '../images/kijaniprofile.png';

const projects = [
  {
    id: 1,
    imagePlaceholder: image55,
    title: "Brand Design - Mac Dental",
    desc: "Their team of experienced dentists and hygienists are dedicated to providing personalized care to help patients achieve optimal oral health.Mac Dental utilizes the latest technology and techniques to ensure comfortable and effective treatments.Mac Dental is committed to delivering exceptional dental care in a welcoming environment.",
    tags: ["Branding", "Advertising", "Marketing"],
  
  },
  {
    id: 2,
    imagePlaceholder: kijaniprofile,
    title: "Company Profile - Kijani",
    desc: "Kijani Company Profile.A Nairobi-based,data driven sustainability partner that provides Kenyan businesses with the technology,expertise,and strategic insight to measure, manage, and report on their Environmental, Social, and Governance(ESG) performance ",
    tags: ["Company", "Business Profile"],
    
  },
  {
    id: 3,
    imagePlaceholder: image70,
    title: "Advertising - Orion Energy",
    desc: "Orion Energy is a leading provider of renewable energy solutions, specializing in solar and wind power installations for residential, commercial, and industrial clients.Orion Energy helps businesses and homeowners reduce their carbon footprint while lowering energy costs through cutting-edge technology and expert service.",
    tags: ["Marketing", "Advertising"],
    
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
                className="w-full h-63 object-cover" 
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

        {/* <div className="text-center mt-12">
            <a 
                href="#Portfolio"             
                
                className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white ${SECONDARY_BG_COLOR} shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-110`}
            >
                Explore All Projects
            </a>
        </div> */}

      </div>
    </section>
  );
};

export default PortfolioSection;