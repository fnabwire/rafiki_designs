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
    <section className="bg-background py-8">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">Resume</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Experience</h3>
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg shadow-md p-5 mb-4">
                <span className="block text-sm font-bold text-primary mb-1">{exp.year}</span>
                <h4 className="text-lg font-bold text-secondary mb-1">{exp.title}</h4>
                <span className="block text-base text-primary mb-1">{exp.company}</span>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-lg shadow-md p-5 mb-4">
                <span className="block text-sm font-bold text-primary mb-1">{edu.year}</span>
                <h4 className="text-lg font-bold text-secondary mb-1">{edu.title}</h4>
                <span className="block text-base text-primary mb-1">{edu.institution}</span>
                <p className="text-gray-700 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <a
            className="px-6 py-2 bg-primary text-white rounded-md font-semibold transition-all duration-300 hover:bg-secondary"
            href="https://drive.google.com/file/d/1Xki5QFwDpzc9czcjevyIx59olIsApLRC/view?usp=drivesdk"
            download="JOHN JUMA_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
