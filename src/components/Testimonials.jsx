import React from "react";

const testimonials = [
  {
    name: "Faith Nasieku",
    role: "Project Manager",
    quote:
      "John's designs are incredibly creative and visually stunning. He has a great understanding of branding and always delivers high-quality work. I highly recommend him for any design project.",
  },
  {
    name: "Phyian Lee",
    role: "Content Creator",
    quote:
      "Working with John was a fantastic experience. He's a great communicator, always met deadlines, and exceeded my expectations with his innovative designs.  I'll definitely be hiring him again.",
  },
  {
    name: "Justus Kombo",
    role: "Web Developer",
    quote:
      "John's ability to translate ideas into compelling visuals is truly impressive. He's a talented and dedicated designer who brings a unique perspective to every project.  He's a true professional.",
  },
  {
    name: "Cromwell Oloo",
    role: "Project Manager",
    quote:
      "I was blown away by John's creativity and attention to detail. He took my vague ideas and turned them into a polished and professional design that perfectly captured my vision.  He's a pleasure to work with.",
  },
  {
    name: "Karani Mwale",
    role: "Graphic Designer",
    quote:
      "John is a highly skilled and versatile graphic designer. He's able to adapt to different styles and create designs that are both aesthetically pleasing and functional.  I'm thrilled with the results he delivered.",
  },
];

const Testimonials = () => {
  return (
    <div className="text-center py-8 px-4 bg-[#f5f5dc] rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-[#98760B]">Clients' Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#032825] rounded-xl shadow-lg shadow-[#98760B] p-6 max-w-xs text-center">
            <p className="italic text-white mb-4">"{testimonial.quote}"</p>
            <h3 className="text-lg font-bold text-white mb-1">{testimonial.name}</h3>
            <p className="text-[#98760B] mb-2">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
