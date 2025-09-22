import React from 'react';
import image1 from '../images/image1.jpg';
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
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div data-aos="fade-right">
						<img src={image1} alt="Design Process" className="w-full rounded-lg shadow-lg" />
					</div>
					<div data-aos="fade-left">
						<h3 className="text-2xl font-bold text-secondary mb-6">My Design Philosophy</h3>
						<p className="text-gray-600 mb-6">
							I believe that great design is about more than just aesthetics—it's about creating solutions that are both beautiful and functional. Every project is an opportunity to tell a story and connect with audiences on a deeper level.
						</p>
						<div className="grid grid-cols-2 gap-6">
							<div>
								<div className="flex items-center mb-2">
									<div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
									<span className="font-semibold text-secondary">Brand Identity</span>
								</div>
								<p className="text-sm text-gray-600">Creating memorable brand experiences</p>
							</div>
							<div>
								<div className="flex items-center mb-2">
									<div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
									<span className="font-semibold text-secondary">UI/UX Design</span>
								</div>
								<p className="text-sm text-gray-600">User-centered interface design</p>
							</div>
							<div>
								<div className="flex items-center mb-2">
									<div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
									<span className="font-semibold text-secondary">Print Design</span>
								</div>
								<p className="text-sm text-gray-600">Traditional media with modern touch</p>
							</div>
							<div>
								<div className="flex items-center mb-2">
									<div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
									<span className="font-semibold text-secondary">Motion Graphics</span>
								</div>
								<p className="text-sm text-gray-600">Bringing designs to life</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
