import React from 'react';
import { useInView } from 'react-intersection-observer';
import image43 from '../images/image43.jpg';
import image53 from '../images/image53.jpg';
import image15 from '../images/image15.jpg';
import image27 from '../images/image27.jpg';

const projects = [
  { id: 1, image: image43 },
  { id: 2, image: image53 },
  { id: 3, image: image15 },
  { id: 4, image: image27 },
];

export default function PortfolioSection() {
  const { ref } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} id="projects" className="bg-background py-12">
      <h2 className="text-3xl font-bold mb-10 text-secondary text-center">Projects</h2>
      <div className="flex flex-col gap-8 items-center">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center max-w-3xl w-full p-6">
            <img src={project.image} alt={`Project ${project.id}`} className="w-20 h-20 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-xl font-bold text-secondary mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">Short description. You can add details about the project here.</p>
              <a className="px-4 py-2 border-2 border-primary rounded-md font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white" href="#" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
