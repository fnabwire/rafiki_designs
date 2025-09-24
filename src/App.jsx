import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import PortfolioSection from './components/PortfolioSection';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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

    // (Navigation handled inside Header component)

    return (
        <div className="bg-background font-sans text-base">
            <Header />
            <HeroSection />
            <About />
            <PortfolioSection />
            <Portfolio />
            <Testimonials />
            <ContactSection />
            <Footer />
        </div>
	);
};

export default App;
