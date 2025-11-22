import React, { useState } from 'react';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';
import image13 from '../images/image13.jpg';
import image14 from '../images/image14.jpg';
import image15 from '../images/image15.jpg';
import image16 from '../images/image16.jpg';
import image17 from '../images/image17.jpg';
import image18 from '../images/image18.jpg';
import image19 from '../images/image19.jpg';
import image20 from '../images/image20.jpg';
import image21 from '../images/image21.jpg';
import image22 from '../images/image22.jpg';
import image23 from '../images/image23.jpg';
import image24 from '../images/image24.jpg';
import image25 from '../images/image25.jpg';
import image26 from '../images/image26.jpg';
import image27 from '../images/image27.jpg';
import image28 from '../images/image28.jpg';
import image29 from '../images/image29.jpg';
import image30 from '../images/image30.jpg';
import image31 from '../images/image31.jpg';
import image32 from '../images/image32.jpg';
import image33 from '../images/image33.jpg';
import image34 from '../images/image34.jpg';
import image35 from '../images/image35.jpg';
import image36 from '../images/image36.jpg';
import image37 from '../images/image37.jpg';
import image38 from '../images/image38.jpg';
import image39 from '../images/image39.jpg';
import image40 from '../images/image40.jpg';
import image41 from '../images/image41.jpg';
import image42 from '../images/image42.jpg';
import image43 from '../images/image43.jpg';
import image44 from '../images/image44.jpg';
import image45 from '../images/image45.jpg';
import image46 from '../images/image46.jpg';
import image47 from '../images/image47.jpg';
import image48 from '../images/image48.jpg';
import image49 from '../images/image49.jpg';
import image50 from '../images/image50.jpg';
import image51 from '../images/image51.jpg';
import image52 from '../images/image52.jpg';
import image53 from '../images/image53.jpg';
import image54 from '../images/image54.jpeg';
import image55 from '../images/image55.jpeg';
import image56 from '../images/image56.jpeg';
import image57 from '../images/image57.jpeg';
import image58 from '../images/image58.jpeg';
import image59 from '../images/image59.jpeg';
import image60 from '../images/image60.jpeg';
import image61 from '../images/image61.jpeg';
import image62 from '../images/image62.jpeg';
import image63 from '../images/image63.jpeg';
import image64 from '../images/image64.jpeg';
import image65 from '../images/image65.jpeg';
import image66 from '../images/image66.jpeg';
import image67 from '../images/image67.jpeg';
import image68 from '../images/image68.jpeg';
import image69 from '../images/image69.jpeg'; 
import image70 from '../images/image70.jpeg';
import image71 from '../images/image71.jpeg';
import image72 from '../images/image72.jpeg';
import image73 from '../images/image73.jpeg';
import image74 from '../images/image74.jpeg';
import image75 from '../images/image75.jpeg';

const projects = [
  { id: 1, image: image1, category: 'Advertising' },
  { id: 2, image: image2, category: 'Brand Design' },
  { id: 3, image: image3, category: 'Brand Design' },
  { id: 4, image: image4, category: 'Brand Design' },
  { id: 5, image: image5, category: 'Brand Identity' },
  { id: 6, image: image6, category: 'Marketing' },
  { id: 7, image: image7, category: 'Brand Design' },
  { id: 8, image: image8, category: 'Marketing' },
  { id: 9, image: image9, category: 'Marketing' },
  { id: 10, image: image10, category: 'Marketing' },
  { id: 11, image: image11, category: 'Advertising' },
  { id: 12, image: image12, category: 'Brand Design' },
  { id: 13, image: image13, category: 'Marketing' },
  { id: 14, image: image14, category: 'Marketing' },
  { id: 15, image: image15, category: 'Advertising' },
  { id: 16, image: image16, category: 'Brand Design' },
  { id: 17, image: image17, category: 'Brand Design' },
  { id: 18, image: image18, category: 'Brand Design' },
  { id: 19, image: image19, category: 'Brand Design' },
  { id: 20, image: image20, category: 'Brand Design' },
  { id: 21, image: image21, category: 'Advertising' },
  { id: 22, image: image22, category: 'Brand Identity' },
  { id: 23, image: image23, category: 'Brand Identity' },
  { id: 24, image: image24, category: 'Brand Identity' },
  { id: 25, image: image25, category: 'Brand Identity' },
  { id: 26, image: image26, category: 'Marketing' },
  { id: 27, image: image27, category: 'Marketing' },
  { id: 28, image: image28, category: 'Brand Identity'},
  { id: 29, image: image29, category: 'Advertising' },
  { id: 30, image: image30, category: 'Advertising' },
  { id: 31, image: image31, category: 'Advertising' },
  { id: 32, image: image32, category: 'Advertising' },
  { id: 33, image: image33, category: 'Marketing' },
  { id: 34, image: image34, category: 'Brand Design' },
  { id: 35, image: image35, category: 'Brand Identity' },
  { id: 36, image: image36, category: 'Brand Identity' },
  { id: 37, image: image37, category: 'Photo Manipulation' },
  { id: 38, image: image38, category: 'Logo Design' },
  { id: 39, image: image39, category: 'Brand Identity' },
  { id: 40, image: image40, category: 'Advertising' },
  { id: 41, image: image41, category: 'Advertising' },
  { id: 42, image: image42, category: 'Advertising' },
  { id: 43, image: image43, category: 'Advertising' },
  { id: 44, image: image44, category: 'Advertising' },
  { id: 45, image: image45, category: 'Logo Design' },
  { id: 46, image: image46, category: 'Brand Identity' },
  { id: 47, image: image47, category: 'Brand Identity' },
  { id: 48, image: image48, category: 'Logo Design' },
  { id: 49, image: image49, category: 'Logo Design' },
  { id: 50, image: image50, category: 'Brand Design' },
  { id: 51, image: image51, category: 'Brand Design' },
  { id: 52, image: image52, category: 'Brand Design' },
  { id: 53, image: image53, category: 'Brand Design' },
  { id: 54, image: image54, category: 'Advertising' },
  { id: 55, image: image55, category: 'Brand Design' },
  { id: 56, image: image56, category: 'Brand Design' },
  { id: 57, image: image57, category: 'Brand Design' },
  { id: 58, image: image58, category: 'Brand Design' },
  { id: 59, image: image59, category: 'Marketing' },
  { id: 60, image: image60, category: 'Marketing' },
  { id: 61, image: image61, category: 'Marketing' },
  { id: 62, image: image62, category: 'Marketing' },
  { id: 63, image: image63, category: 'Marketing' },
  { id: 64, image: image64, category: 'Advertising' },
  { id: 65, image: image65, category: 'Advertising' },
  { id: 66, image: image66, category: 'Advertising' },
  { id: 67, image: image67, category: 'Advertising' },
  { id: 68, image: image68, category: 'Advertising' },
  { id: 69, image: image69, category: 'Advertising' },
  { id: 70, image: image70, category: 'Advertising' },
  { id: 71, image: image71, category: 'Advertising' },
  { id: 72, image: image72, category: 'Advertising' },
  { id: 73, image: image73, category: 'Advertising' },
  { id: 74, image: image74, category: 'Advertising' },
  { id: 75, image: image75, category: 'Advertising' },
];


const PRIMARY_BG_COLOR = 'bg-[#0f4c5c]'; // Deep Cyan/Blue
const PRIMARY_TEXT_COLOR = 'text-[#0f4c5c]';
const SECONDARY_BG_COLOR = 'bg-[#e36414]'; // Vibrant Orange
const SECONDARY_TEXT_COLOR = 'text-[#e36414]';


export default function Portfolio() {
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImage, setModalImage] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);
  const projectsByCategory = filteredProjects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <section id="portfolio-gallery" className="bg-gray-100 p-8 md:p-12 rounded-xl max-w-7xl mx-auto mt-0 mb-10 shadow-lg">
      
      {/* Category Buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {categories.map(category => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-md ${
              selectedCategory === category 
                ? `${SECONDARY_BG_COLOR} text-white shadow-xl transform scale-105` // Active: Vibrant Orange
                : `${PRIMARY_BG_COLOR} text-white hover:${SECONDARY_BG_COLOR}` // Inactive: Deep Cyan, Hover: Vibrant Orange
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display projects by category */}
      {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
        <div key={category} className={category === selectedCategory || selectedCategory === 'All' ? '' : 'hidden'}>
         
          <h2 className={`${SECONDARY_TEXT_COLOR} text-3xl font-extrabold mt-6 mb-8 text-center border-b-2 border-gray-300 pb-2`}>{category}</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {categoryProjects.map(project => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={`Project ${project.id} - ${project.category}`}
                  className="w-full h-full object-cover aspect-square cursor-pointer transition-transform duration-500 group-hover:scale-110"
                  onClick={() => setModalImage(project.image)}
                />
                
                {/* Overlay to show category on hover */}
                <div 
                  className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  onClick={() => setModalImage(project.image)}
                >
                    <p className={`text-white text-base font-bold px-3 py-1 rounded-full ${PRIMARY_BG_COLOR} bg-opacity-80`}>{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for image preview */}
      {modalImage && (
        <div 
          className="fixed inset-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-[1000] p-4 backdrop-blur-sm" 
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={modalImage} 
              alt="Preview" 
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl object-contain" 
            />
            <button 
                onClick={() => setModalImage(null)}
                className={`absolute top-4 right-4 text-white text-3xl font-bold p-2 rounded-full ${SECONDARY_BG_COLOR} hover:bg-white hover:${SECONDARY_TEXT_COLOR} transition-colors`}
            >
                &times;
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
