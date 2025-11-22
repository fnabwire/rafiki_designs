import React, { useEffect } from 'react';
import AOS from 'aos';
import { FiCheckCircle,FiGlobe,FiBriefcase,FiZap,FiMapPin,FiUsers,FiCode} from 'react-icons/fi';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // --- NEW COLOR MAPPINGS ---
    const PRIMARY_TEXT_COLOR = 'text-[#0f4c5c]'; // Deep Cyan/Blue
    const SECONDARY_HIGHLIGHT_COLOR = 'text-[#e36414]'; // Vibrant Orange
    
    // Card Style Definitions
    const lightCardBg = "#F9FAFB"; // A light background to complement the primary color
   
    // Icons/Titles for the dark cards use the secondary highlight color
    const darkCardIconColor = SECONDARY_HIGHLIGHT_COLOR; 
  

    const Card = ({ title, children, bgColor, icon, titleColor, iconBaseColor }) => (
        <div 
            className={`p-6 rounded-xl shadow-lg ${bgColor} transform transition duration-300 hover:scale-[1.02]`}
            data-aos="fade-up"
        >
            <div className="flex items-center mb-4">
                {React.createElement(icon, { className: `text-2xl ${iconBaseColor.replace('text-', 'text-')}` })}
                <h3 className={`text-xl font-semibold ml-3 ${titleColor.replace('text-', 'text-')}`}>{title}</h3>
            </div>
            <ul className="space-y-3">
                {children}
            </ul>
        </div>
    );

    const ListItem = ({ icon: Icon, text, color }) => (
        <li className="flex items-start">
            <Icon className={`text-xl flex-shrink-0 mt-1 ${color.replace('text-', 'text-')}`} />
            <span className="ml-3 text-gray-700 dark:text-gray-300">{text}</span>
        </li>
    );

    return (
        <section id="about" className="py-12 bg-[#0f4c5c] text-white">
            <div className="container mx-auto px-6">
                
                {/* About Me Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className={`text-4xl font-bold mb-4 text-white`}>About Me</h2>
                    <p className="text-white/90 max-w-3xl mx-auto">
                        As a skilled graphic designer with hands-on experience in Canva, Photoshop, and other design tools, I excel at creating visually appealing and professional materials. I am a highly organized and resourceful Virtual Assistant with proven expertise in time management, administrative support, and digital tools. My experience includes managing schedules, handling correspondence, designing marketing assets, and streamlining workflows to enhance productivity.
                    </p>
                </div>
                
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1: Availability (Uses Primary Color for emphasis) */}
                    <Card
                        title="Available Now"
                        bgColor={lightCardBg}
                        icon={FiCheckCircle}
                        titleColor={darkCardIconColor}
                        iconBaseColor={darkCardIconColor}
                    >
                        <ListItem icon={FiBriefcase} text="Full-time & Internship roles" color="text-gray-300" />
                        <ListItem icon={FiZap} text="Immediate start available" color="text-gray-300" />
                    </Card>

                    {/* Card 2: Work Flexibility  */}
                    <Card
                        title="Work Flexibility"
                        bgColor={lightCardBg}
                        icon={FiGlobe}
                        titleColor={darkCardIconColor}
                        iconBaseColor={darkCardIconColor}
                    >
                        <ListItem icon={FiMapPin} text="Onsite/Hybrid preferred" color="text-gray-300" />
                        <ListItem icon={FiGlobe} text="Open to international remote" color="text-gray-300" />
                        <ListItem icon={FiUsers} text="Adaptable to company needs" color="text-gray-300" />
                    </Card>

                    {/* Card 3: Quick Details  */}
                    <Card
                        title="Quick Details"
                        bgColor={lightCardBg}
                        icon={FiUsers}
                        titleColor={darkCardIconColor}
                        iconBaseColor={darkCardIconColor}
                    >
                        <ListItem icon={FiMapPin} text="Based in: Nairobi, Kenya" color="text-gray-300" />
                        <ListItem icon={FiCode} text="Core Skills: Adobe Photoshop, Canva, Adobe Illustrator , Figma " color="text-gray-300" />
                        <ListItem icon={FiBriefcase} text="Experience: Graphic Design , Computer & Electronics Systems Engineer , Virtual Assistant " color="text-gray-300" />
                    </Card>

                </div>
                
            </div>
        </section>
    );
};

export default About;