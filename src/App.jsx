import React, { useEffect, useState, useCallback } from 'react';

const ensureTagOnce = (selector, create) => {
	let el = document.querySelector(selector);
	if (!el) {
		el = create();
		document.head.appendChild(el);
	}
	return el;
};

const loadScript = (src) =>
	new Promise((resolve, reject) => {
		const existing = Array.from(document.scripts).find(s => s.src === src);
		if (existing) {
			if (existing.getAttribute('data-loaded') === 'true') return resolve();
			existing.addEventListener('load', () => resolve());
			existing.addEventListener('error', reject);
			return;
		}
		const script = document.createElement('script');
		script.src = src;
		script.async = true;
		script.defer = true;
		script.addEventListener('load', () => {
			script.setAttribute('data-loaded', 'true');
			resolve();
		});
		script.addEventListener('error', reject);
		document.head.appendChild(script);
	});

const App = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	// Inject Tailwind CDN, AOS CSS/JS, Feather, and custom styles
	useEffect(() => {
		// Tailwind CDN
		loadScript('https://cdn.tailwindcss.com').catch(() => {});

		// AOS CSS
		ensureTagOnce('link[data-id="aos-css"]', () => {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
			link.setAttribute('data-id', 'aos-css');
			return link;
		});

		// Custom styles (.hero-frame, .custom-shadow)
		ensureTagOnce('style[data-id="custom-styles"]', () => {
			const style = document.createElement('style');
			style.setAttribute('data-id', 'custom-styles');
			style.innerHTML = `
				.hero-frame { position: relative; display: inline-block; }
				.hero-frame::before { content: ''; position: absolute; top: -15px; left: -15px; right: -15px; bottom: -15px; border: 3px solid #DC7049; border-radius: 8px; z-index: -1; }
				.hero-frame::after { content: ''; position: absolute; top: -25px; left: -25px; right: -25px; bottom: -25px; border: 2px solid #586234; border-radius: 12px; z-index: -2; }
				.custom-shadow { box-shadow: 0 10px 30px rgba(220, 112, 73, 0.2); }
			`;
			return style;
		});

		// Favicon (optional parity with original)
		ensureTagOnce('link[rel="icon"][data-id="favicon"]', () => {
			const link = document.createElement('link');
			link.rel = 'icon';
			link.type = 'image/x-icon';
			link.href = '/static/favicon.ico';
			link.setAttribute('data-id', 'favicon');
			return link;
		});

		(async () => {
			await loadScript('https://unpkg.com/aos@2.3.1/dist/aos.js').catch(() => {});
			await loadScript('https://unpkg.com/feather-icons').catch(() => {});
			if (window.AOS) {
				window.AOS.init({ duration: 800, once: true });
			}
			if (window.feather && window.feather.replace) {
				window.feather.replace();
			}
		})();
	}, []);

	// Re-run feather.replace after mobile menu toggles (icons might mount/unmount)
	useEffect(() => {
		if (window.feather && window.feather.replace) {
			window.feather.replace();
		}
	}, [mobileOpen]);

	const handleSmoothScroll = useCallback((e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			setMobileOpen(false);
		}
	}, []);

	return (
		<div className="bg-background font-sans text-base">
			{/* Navigation */}
			<nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
				<div className="container mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
					<div className="text-2xl font-bold text-secondary">John Juma</div>
						<div className="hidden md:flex space-x-8">
							<a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-secondary hover:text-primary transition-colors">Home</a>
							<a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-secondary hover:text-primary transition-colors">About</a>
							<a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="text-secondary hover:text-primary transition-colors">Projects</a>
							<a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} className="text-secondary hover:text-primary transition-colors">Testimonials</a>
							<a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-secondary hover:text-primary transition-colors">Contact</a>
						</div>
						<button aria-label="Open menu" className="md:hidden text-secondary" onClick={() => setMobileOpen(o => !o)}>
							<i data-feather="menu"></i>
						</button>
					</div>
					{/* Mobile menu */}
					{mobileOpen && (
						<div className="md:hidden mt-4 space-y-2">
							<a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="block py-2 text-secondary hover:text-primary transition-colors">Home</a>
							<a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="block py-2 text-secondary hover:text-primary transition-colors">About</a>
							<a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="block py-2 text-secondary hover:text-primary transition-colors">Projects</a>
							<a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} className="block py-2 text-secondary hover:text-primary transition-colors">Testimonials</a>
							<a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="block py-2 text-secondary hover:text-primary transition-colors">Contact</a>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section id="home" className="min-h-screen flex items-center pt-20 pb-16">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div data-aos="fade-right">
							<h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
								John <span className="text-primary">Juma</span>
							</h1>
							<p className="text-lg text-gray-600 mb-8">
								Graphic Designer | Computer and Electronics Systems Engineer | Virtual Assistant
							</p>
							<div className="flex space-x-4">
								<a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">Explore My Work</a>
								<a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all">Hire Me</a>
							</div>
						</div>
						<div data-aos="fade-left" className="relative">
							<div className="hero-frame custom-shadow">
								<img src="http://static.photos/creative/640x360/1" alt="Designer Profile" className="w-full h-96 object-cover rounded-lg" />
							</div>
							<div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg">
								<div className="text-2xl font-bold">5+ Years</div>
								<div className="text-sm">Experience</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
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
							<img src="http://static.photos/studio/640x360/2" alt="Design Process" className="w-full rounded-lg shadow-lg" />
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

			{/* Projects Section */}
			<section id="projects" className="py-20 bg-background">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							A selection of recent work that showcases my design approach and creative solutions.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up">
							<img src="http://static.photos/brand/640x360/3" alt="Project 1" className="w-full h-48 object-cover" />
							<div className="p-6">
								<h3 className="text-xl font-bold text-secondary mb-2">Brand Identity - EcoLife</h3>
								<p className="text-gray-600 mb-4">
									Complete brand identity design for an eco-friendly lifestyle brand, including logo, packaging, and marketing materials.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">Branding</span>
									<span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">Packaging</span>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
							<img src="http://static.photos/tech/640x360/4" alt="Project 2" className="w-full h-48 object-cover" />
							<div className="p-6">
								<h3 className="text-xl font-bold text-secondary mb-2">Mobile App - TechFlow</h3>
								<p className="text-gray-600 mb-4">
									User interface design for a productivity app focused on seamless task management and team collaboration.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">UI/UX</span>
									<span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">Mobile</span>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
							<img src="http://static.photos/restaurant/640x360/5" alt="Project 3" className="w-full h-48 object-cover" />
							<div className="p-6">
								<h3 className="text-xl font-bold text-secondary mb-2">Restaurant Menu - Bella Vista</h3>
								<p className="text-gray-600 mb-4">
									Elegant menu design for an Italian restaurant, combining traditional elements with modern typography.
								</p>
								<div className="flex flex-wrap gap-2">
									<span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">Print</span>
									<span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">Typography</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-4xl font-bold text-secondary mb-4">Client Testimonials</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							What people are saying about working with me and the results we've achieved together.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-background p-8 rounded-lg" data-aos="fade-up">
							<div className="text-primary text-4xl mb-4">"</div>
							<p className="text-gray-600 mb-6">
								Exceptional attention to detail and creative vision. The brand identity perfectly captured our company's essence.
							</p>
							<div className="flex items-center">
								<img src="http://static.photos/people/80x80/6" alt="Client" className="w-12 h-12 rounded-full mr-4" />
								<div>
									<div className="font-semibold text-secondary">Sarah Johnson</div>
									<div className="text-sm text-gray-500">CEO, EcoLife</div>
								</div>
							</div>
						</div>

						<div className="bg-background p-8 rounded-lg" data-aos="fade-up" data-aos-delay="100">
							<div className="text-primary text-4xl mb-4">"</div>
							<p className="text-gray-600 mb-6">
								The app design exceeded our expectations. User engagement increased by 40% after the redesign.
							</p>
							<div className="flex items-center">
								<img src="http://static.photos/people/80x80/7" alt="Client" className="w-12 h-12 rounded-full mr-4" />
								<div>
									<div className="font-semibold text-secondary">Michael Chen</div>
									<div className="text-sm text-gray-500">Product Manager, TechFlow</div>
								</div>
							</div>
						</div>

						<div className="bg-background p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
							<div className="text-primary text-4xl mb-4">"</div>
							<p className="text-gray-600 mb-6">
								Beautiful menu design that perfectly complements our restaurant's ambiance. Customers love it!
							</p>
							<div className="flex items-center">
								<img src="http://static.photos/people/80x80/8" alt="Client" className="w-12 h-12 rounded-full mr-4" />
								<div>
									<div className="font-semibold text-secondary">Maria Rossi</div>
									<div className="text-sm text-gray-500">Owner, Bella Vista</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-background">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16" data-aos="fade-up">
						<h2 className="text-4xl font-bold text-secondary mb-4">Let's Work Together</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Ready to bring your vision to life? Get in touch and let's discuss your next project.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-12">
						<div data-aos="fade-right">
							<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
								<div>
									<label className="block text-secondary font-semibold mb-2">Name</label>
									<input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
								</div>
								<div>
									<label className="block text-secondary font-semibold mb-2">Email</label>
									<input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
								</div>
								<div>
									<label className="block text-secondary font-semibold mb-2">Message</label>
									<textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
								</div>
								<button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">Send Message</button>
							</form>
						</div>
						<div data-aos="fade-left">
							<div className="bg-white p-8 rounded-lg shadow-lg">
								<h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
								<div className="space-y-4">
									<div className="flex items-center">
										<div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
											<i data-feather="mail" className="text-primary"></i>
										</div>
										<div>
												<div className="text-sm text-gray-500">Email</div>
												<div className="font-semibold text-secondary">jumaelectricals@gmail.com</div>
										</div>
									</div>
									<div className="flex items-center">
										<div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
											<i data-feather="phone" className="text-primary"></i>
										</div>
										<div>
												<div className="text-sm text-gray-500">Phone</div>
												<div className="font-semibold text-secondary">+254 746 981 845</div>
										</div>
									</div>
									<div className="flex items-center">
										<div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
											<i data-feather="map-pin" className="text-primary"></i>
										</div>
										<div>
												<div className="text-sm text-gray-500">Location</div>
												<div className="font-semibold text-secondary">Nairobi, Kenya</div>
										</div>
									</div>
								</div>
								<div className="mt-8 pt-6 border-t border-gray-200">
									<h4 className="text-lg font-semibold text-secondary mb-4">Follow Me</h4>
									<div className="flex space-x-4">
										<a href="#" className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
											<i data-feather="instagram" className="text-primary hover:text-white"></i>
										</a>
										<a href="#" className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
											<i data-feather="twitter" className="text-primary hover:text-white"></i>
										</a>
										<a href="#" className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
											<i data-feather="linkedin" className="text-primary hover:text-white"></i>
										</a>
										<a href="#" className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
											<i data-feather="dribbble" className="text-primary hover:text-white"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-secondary text-white py-12">
				<div className="container mx-auto px-6">
					<div className="text-center">
						<div className="text-2xl font-bold mb-4">John Juma</div>
						<p className="text-gray-300 mb-8">Creating beautiful designs that make a difference</p>
						<div className="flex justify-center space-x-6 mb-8">
							<a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="hover:text-primary transition-colors">Home</a>
							<a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-primary transition-colors">About</a>
							<a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')} className="hover:text-primary transition-colors">Projects</a>
							<a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} className="hover:text-primary transition-colors">Testimonials</a>
							<a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="hover:text-primary transition-colors">Contact</a>
						</div>
						<p className="text-gray-400">© 2025 John Juma. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
