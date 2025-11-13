

const Testimonials = () => {
  
  const PRIMARY_COLOR = 'text-[#0f4c5c]'; // Deep Cyan/Blue
  const SECONDARY_COLOR = 'text-[#e36414]'; // Vibrant Orange

  
  const testimonialsData = [
    {
      quote: "Exceptional attention to detail and creative vision. The brand identity perfectly captured our company's essence.",
      name: "Sarah Njoki",
      title: "CEO, EcoLife",
      imgUrl: "https://placehold.co/80x80/cccccc/333333?text=S",
    },
    {
      quote: "The app design exceeded our expectations. User engagement increased by 40% after the redesign.",
      name: "Michael Kibet",
      title: "Product Manager, TechFlow",
      imgUrl: "https://placehold.co/80x80/cccccc/333333?text=M",
    },
    {
      quote: "Beautiful menu design that complements our ambiance. Customers love it!",
      name: "Maria Mulwa",
      title: "Owner, Kijanikibichi",
      imgUrl: "https://placehold.co/80x80/cccccc/333333?text=M",
    },
    {
      quote: "Creative, timely, and collaborative. Our campaign saw a notable uplift thanks to the design work.",
      name: "David Otieno",
      title: "Marketing Lead, Kaibeni",
      imgUrl: "https://placehold.co/80x80/cccccc/333333?text=D",
    },
  ];

  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      
      <style>
        {`
          @keyframes marquee-rtl {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12">
          
          <h2 className={`text-4xl font-bold ${SECONDARY_COLOR} mb-4`}>Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">What clients say about our collaboration and results.</p>
        </div>

        {/* RTL marquee carousel */}
        <div className="overflow-hidden relative rounded-xl shadow-lg border border-gray-100">
          
          <div className="flex gap-6 py-6 px-3 animate-[marquee-rtl_28s_linear_infinite] will-change-transform">
            
            {/* Duplicate set for seamless loop (rendering the testimonials twice) */}
            {[1, 2].map(set => (
              <div key={set} className="flex gap-6">
                {testimonialsData.map((testimonial, index) => (
                  <div 
                    key={`${set}-${index}`}
                    className="min-w-[300px] max-w-sm bg-white p-6 rounded-xl shadow-md transform hover:shadow-xl transition-all duration-300"
                  >
                    
                    <div className={`${PRIMARY_COLOR} text-4xl mb-3 font-serif`}>"</div>
                    <p className="text-gray-700 mb-5 italic">{testimonial.quote}</p>
                    <div className="flex items-center mt-4">
                      {/* Using placehold.co for image fallbacks */}
                      <img 
                        src={testimonial.imgUrl} 
                        alt={testimonial.name} 
                        className="w-10 h-10 rounded-full mr-3 object-cover" 
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src="https://placehold.co/80x80/cccccc/333333?text=Client";
                        }}
                      />
                      <div>
                        {/* Client Name uses Secondary Color */}
                        <div className={`font-semibold ${SECONDARY_COLOR}`}>{testimonial.name}</div>
                        <div className="text-xs text-gray-500">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;