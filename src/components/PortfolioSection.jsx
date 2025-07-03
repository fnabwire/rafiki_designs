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
    <section ref={ref} className="bg-[#032825] p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-[#98760B] text-center">Latest Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-2 justify-center">
        {projects.map((project) => (
          <div key={project.id} className="text-center text-white p-2">
            <img src={project.image} alt={`Project ${project.id}`} className="w-full max-w-xs mx-auto rounded-md" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <a className="inline-block px-5 py-2 bg-[#98760B] text-[#f5f5dc] rounded-md font-semibold no-underline transition-colors duration-300 hover:bg-[#bfa14d]" href="/portfolio" rel="noopener noreferrer">
          Explore More Projects
        </a>
      </div>
    </section>
  );
}
