import React from "react";

const experiences = [
  {
    id: 1,
    year: "09/2024 - 12/2024",
    title: "Virtual Assistant- Intern",
    company: "SolotechSystems",
    description:
      "Networking company based in Amboseli, Lavington.It offers services ranging from Wi-Fi installations to CCTV configurations.",
  },
  {
    id: 2,
    year: "05/2024 - 08/2024",
    title: "Electric Bikes Engineer",
    company: "eBee Mobility Africa",
    description:
      "eBee is an E-mobility company in Kenya and Africa.It specializes in electric bikes for transport, leisure, and last-mile delivery.",
  },
];

const education = [
  {
    id: 1,
    year: "2021 - 2025",
    title: "Bachelor of Technology in Computer and Electronic Systems Engineering",
    institution: "Mount Kenya University",
    description:
      "A comprehensive degree program equipping me with the knowledge and skills in computer hardware, software, and electronic systems design.",
  },
  {
    id: 2,
    year: "2024 - 2024",
    title: "Virtual Assistant",
    institution: "ALX Africa",
    description:
      "A training program focused on developing essential virtual assistant skills and technical proficiency, enhancing my ability to provide remote administrative support.",
  },
];

const Resume = () => {
  return (
    <div className="bg-[#032825] text-white px-4 py-12 text-center rounded-md">
      <h2 className="text-3xl font-bold mb-6">MY RESUME</h2>
      <div className="flex justify-center gap-4 mb-8">
        <a
          className="mt-2 px-5 py-2 bg-[#98760B] text-[#032825] rounded-md font-semibold transition-colors duration-300 hover:bg-[#bfa14d]"
          href="https://drive.google.com/file/d/1Xki5QFwDpzc9czcjevyIx59olIsApLRC/view?usp=drivesdk"
          download="JOHN JUMA_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
      <div className="flex flex-wrap justify-around gap-8 resume-sections">
        {/* Experiences */}
        <div className="w-full md:w-[45%] text-left">
          <h3 className="text-2xl font-bold border-b-2 border-[#98760B] pb-1 mb-5">Experience</h3>
          <div className="relative pl-6 border-l-4 border-[#98760B] timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative mb-8 timeline-item">
                <div className="absolute -left-8 top-0 w-7 h-7 bg-[#98760B] text-white font-bold text-center leading-7 rounded-full timeline-number">
                  {exp.id}
                </div>
                <p className="text-[#98760B] font-bold timeline-year">{exp.year}</p>
                <h4 className="text-lg font-bold timeline-title">{exp.title}</h4>
                <p className="italic text-[#f5f5dc] timeline-company">{exp.company}</p>
                <p className="text-[#bbbbbb] timeline-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div className="w-full md:w-[45%] text-left">
          <h3 className="text-2xl font-bold border-b-2 border-[#98760B] pb-1 mb-5">Education</h3>
          <div className="relative pl-6 border-l-4 border-[#98760B] timeline">
            {education.map((edu) => (
              <div key={edu.id} className="relative mb-8 timeline-item">
                <div className="absolute -left-8 top-0 w-7 h-7 bg-[#98760B] text-white font-bold text-center leading-7 rounded-full timeline-number">
                  {edu.id}
                </div>
                <p className="text-[#98760B] font-bold timeline-year">{edu.year}</p>
                <h4 className="text-lg font-bold timeline-title">{edu.title}</h4>
                <p className="italic text-[#f5f5dc] timeline-company">{edu.institution}</p>
                <p className="text-[#bbbbbb] timeline-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
