import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';


const About = () => {
	useEffect(() => {
		AOS.init({ duration: 800, once: true });
	}, []);

	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16" data-aos="fade-up">
					<h2 className="text-4xl font-bold text-secondary mb-4">About Me</h2>
				<p className="text-gray-600 max-w-2xl mx-auto">
					As a skilled graphic designer with hands-on experience in Canva, Photoshop, and other design tools, I excel at creating visually appealing and professional materials. I am a highly organized and resourceful Virtual Assistant with proven expertise in time management, administrative support, and digital tools. My experience includes managing schedules, handling correspondence, designing marketing assets, and streamlining workflows to enhance productivity.
				</p>
				</div>
                            
              </div>
		</section>
	);
};

export default About;
