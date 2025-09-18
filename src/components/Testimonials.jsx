import React, { useEffect } from 'react';
import AOS from 'aos';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-secondary mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What people are saying about working with me and the results we've achieved together.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
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

          {/* Testimonial 2 */}
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

          {/* Testimonial 3 */}
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
  );
};

export default Testimonials;
