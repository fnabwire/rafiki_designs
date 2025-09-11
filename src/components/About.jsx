import React from 'react';

export default function About() {
	return (
		<section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-background px-8 py-16">
			<div className="flex-1 flex flex-col justify-center md:items-start items-center z-10 max-w-xl">
				<h2 className="text-3xl font-bold text-secondary mb-4 md:text-left text-center">About me</h2>
				<p className="text-gray-700 mb-6 md:text-left text-center">
					Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
				</p>
				<a
					className="px-5 py-2 bg-secondary rounded-md font-semibold text-white transition-all duration-300 hover:bg-primary w-fit"
					href="#"
				>
					Resume
				</a>
			</div>
			<div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
				<div className="relative w-64 h-64 flex items-center justify-center">
					<div className="absolute inset-0 rounded-full bg-primary" style={{ zIndex: 1 }}></div>
					<img src="/src/images/image1.jpg" alt="About" className="relative w-56 h-56 object-cover rounded-full z-10" />
				</div>
			</div>
		</section>
	);
}
