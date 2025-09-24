
import React, { useEffect } from 'react';
import AOS from 'aos';
import feather from 'feather-icons';


const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    feather.replace();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-background to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-secondary mb-4">Let's Work Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <form className="space-y-6 bg-white p-8 rounded-xl shadow-[0_20px_60px_-20px_rgba(59,130,246,0.25)] border border-primary/10">
              <div>
                <label className="block text-secondary font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-secondary font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-secondary font-semibold mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <button type="submit" className="bg-gradient-to-r from-primary to-rose-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all">
                Send Message
              </button>
            </form>
          </div>
          <div data-aos="fade-left">
            <div className="bg-white p-8 rounded-xl shadow-[0_20px_60px_-20px_rgba(236,72,153,0.25)] border border-primary/10">
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
  );
};

export default ContactSection;
