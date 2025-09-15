import React from 'react';
import artImage from '../images/art.jpg';

// Using placeholder images to replicate the visual design from the example.
const projects = [
  {
    id: 1,
    image: artImage,
    title: "Project Name",
    desc: "I created this personal project in order to show basic features and processes in programming a portfolio as an example.",
    reverse: false,
  },
  {
    id: 2,
    image: artImage,
    title: "Project Name",
    desc: "Work area: your view, deliverables, if any and your personal framework.",
    reverse: true,
  },
  {
    id: 3,
    image: artImage,
    title: "Project Name",
    desc: "Written details and a little description on the basis of the project. If you want to show, profile, details, etc.",
    reverse: false,
  },
  {
    id: 4,
    image: artImage,
    title: "Project Name",
    desc: "More details about the project can be added here.",
    reverse: true,
  },
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 p-8 font-sans">
      {/* Tailwind CSS CDN, placed here for demonstration */}
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="container mx-auto max-w-4xl py-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            <span className="relative inline-block pb-1">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
            </span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden ${
                project.reverse ? 'md:flex-row-reverse' : ''
              } md:items-stretch`}
            >
              {/* Image Section */}
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3 p-4">
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover object-center rounded-lg shadow-md"
                />
              </div>

              {/* Text Content Section */}
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                <a
                  href="#"
                  className="inline-block self-start px-4 py-2 text-sm font-semibold text-gray-800 border border-gray-400 rounded-full transition-colors duration-300 hover:bg-gray-200"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
