
import React, { useEffect } from 'react';
import AOS from 'aos';
import artImage from '../images/art.jpg';


const projects = [
  {
    id: 1,
    image: artImage,
    title: "Brand Identity - EcoLife",
    desc: "Complete brand identity design for an eco-friendly lifestyle brand, including logo, packaging, and marketing materials.",
    tags: ["Branding", "Packaging"],
    aosDelay: "",
  },
  {
    id: 2,
    image: artImage,
    title: "Mobile App - TechFlow",
    desc: "User interface design for a productivity app focused on seamless task management and team collaboration.",
    tags: ["UI/UX", "Mobile"],
    aosDelay: "100",
  },
  {
    id: 3,
    image: artImage,
    title: "Restaurant Menu - Bella Vista",
    desc: "Elegant menu design for an Italian restaurant, combining traditional elements with modern typography.",
    tags: ["Print", "Typography"],
    aosDelay: "200",
  },
];

const PortfolioSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of recent work that showcases my design approach and creative solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-[0_10px_40px_-12px_rgba(99,102,241,0.25)] hover:shadow-[0_20px_60px_-15px_rgba(236,72,153,0.35)] transition-shadow"
              data-aos="fade-up"
              data-aos-delay={project.aosDelay}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
