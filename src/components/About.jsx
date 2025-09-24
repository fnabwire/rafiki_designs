import React from 'react';
import image1 from '../images/image1.jpg';
import heroImage from '../images/hero.jpg';
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
                        <img src={heroImage} alt="Designer Profile" className="w-full rounded-xl shadow-[0_25px_80px_-20px_rgba(59,130,246,0.35)] ring-4 ring-primary/10" />
                    </div>
                    <div data-aos="fade-left">
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-rose-500">My Design Philosophy</h3>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white via-background to-white border border-primary/10 shadow-[0_20px_60px_-20px_rgba(236,72,153,0.25)]">
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                I design for clarity and emotion—blending function with vibrant aesthetics. Every pixel should serve a purpose and every color should evoke a feeling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">Human-centered</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary">Story-driven</span>
                                <span className="px-3 py-1 text-sm rounded-full bg-rose-100 text-rose-500">Impact-first</span>
                            </div>
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
			</div>
		</section>
	);
};

export default About;
