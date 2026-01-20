import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  const PRIMARY_COLOR = '#0f4c5c'; 
  const SECONDARY_COLOR = '#e36414'; 

  return (
    
    <section 
      id="ContactSection" 
      className={`bg-[${PRIMARY_COLOR}] text-white pt-10 pb-10 flex flex-col items-center text-center`}
    >
      <div className="w-full">
        <div 
          className="flex justify-center flex-wrap gap-10 items-start lg:gap-20"
        >
          
          {/* Address Item */}
          <div 
            className="flex flex-col items-center max-w-[200px] lg:max-w-[180px] sm:max-w-full sm:w-full sm:text-center"
          >
            {/* Set icon color to Secondary color */}
            <FontAwesomeIcon 
              icon={faHome} 
              className={`text-[30px] text-[${SECONDARY_COLOR}] mb-2.5 sm:text-[25px]`} 
            />
            
            <strong className="text-[18px] sm:text-[16px]">My Address</strong>
            
            <p className="mt-1.5 sm:text-[14px]">Nairobi, Kenya</p>
          </div>

          {/* Phone Item */}
          <div 
            className="flex flex-col items-center max-w-[200px] lg:max-w-[180px] sm:max-w-full sm:w-full sm:text-center"
          >
            {/* Set icon color to Secondary color */}
            <FontAwesomeIcon 
              icon={faPhone} 
              className={`text-[30px] text-[${SECONDARY_COLOR}] mb-2.5 sm:text-[25px]`} 
            />
            <strong className="text-[18px] sm:text-[16px]">Give Me a Call</strong>
            <p className="mt-1.5 sm:text-[14px]">+254 746 981 845</p>
          </div>

          {/* Email Item */}
          <div 
            className="flex flex-col items-center max-w-[200px] lg:max-w-[180px] sm:max-w-full sm:w-full sm:text-center"
          >
            {/* Set icon color to Secondary color */}
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className={`text-[30px] text-[${SECONDARY_COLOR}] mb-2.5 sm:text-[25px]`} 
            />
            <strong className="text-[18px] sm:text-[16px]">Send Me an Email</strong>
            <p className="mt-1.5 sm:text-[14px]">jumaelectricals@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


