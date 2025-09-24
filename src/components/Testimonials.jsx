import React, { useEffect } from 'react';
import AOS from 'aos';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-secondary mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">What clients say about our collaboration and results.</p>
        </div>
        {/* RTL marquee carousel */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-[marquee-rtl_28s_linear_infinite] will-change-transform">
            {/* Duplicate set for seamless loop */}
            {[1,2].map(set => (
              <div key={set} className="flex gap-6">
                <div className="min-w-[300px] max-w-sm bg-background p-6 rounded-xl shadow-sm">
                  <div className="text-primary text-4xl mb-3">"</div>
                  <p className="text-gray-600 mb-5">Exceptional attention to detail and creative vision. The brand identity perfectly captured our company's essence.</p>
                  <div className="flex items-center">
                    <img src="http://static.photos/people/80x80/6" alt="Client" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="font-semibold text-secondary">Sarah Johnson</div>
                      <div className="text-xs text-gray-500">CEO, EcoLife</div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[300px] max-w-sm bg-background p-6 rounded-xl shadow-sm">
                  <div className="text-primary text-4xl mb-3">"</div>
                  <p className="text-gray-600 mb-5">The app design exceeded our expectations. User engagement increased by 40% after the redesign.</p>
                  <div className="flex items-center">
                    <img src="http://static.photos/people/80x80/7" alt="Client" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="font-semibold text-secondary">Michael Chen</div>
                      <div className="text-xs text-gray-500">Product Manager, TechFlow</div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[300px] max-w-sm bg-background p-6 rounded-xl shadow-sm">
                  <div className="text-primary text-4xl mb-3">"</div>
                  <p className="text-gray-600 mb-5">Beautiful menu design that complements our ambiance. Customers love it!</p>
                  <div className="flex items-center">
                    <img src="http://static.photos/people/80x80/8" alt="Client" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="font-semibold text-secondary">Maria Rossi</div>
                      <div className="text-xs text-gray-500">Owner, Bella Vista</div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[300px] max-w-sm bg-background p-6 rounded-xl shadow-sm">
                  <div className="text-primary text-4xl mb-3">"</div>
                  <p className="text-gray-600 mb-5">Creative, timely, and collaborative. Our campaign saw a notable uplift thanks to the design work.</p>
                  <div className="flex items-center">
                    <img src="http://static.photos/people/80x80/10" alt="Client" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <div className="font-semibold text-secondary">David Miller</div>
                      <div className="text-xs text-gray-500">Marketing Lead, NorthPeak</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
