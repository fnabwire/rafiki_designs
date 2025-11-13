import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    
    <section 
      id="ContactSection" 
      className="bg-[#032825] text-white p-10 flex flex-col items-center text-center"
    >
      <div className="w-full">
        <div 
          className="flex justify-center flex-wrap gap-10 items-start lg:gap-20">
          
          {/* Address Item */}
          <div 
            className="flex flex-col items-center max-w-[200px] lg:max-w-[180px] sm:max-w-full sm:w-full sm:text-center"
          >
            
            <FontAwesomeIcon 
              icon={faHome} 
              className="text-[30px] text-[#98760B] mb-2.5 sm:text-[25px]" 
            />
            
            <strong className="text-[18px] sm:text-[16px]">My Address</strong>
            
            <p className="mt-1.5 sm:text-[14px]">Nairobi, Kenya</p>
          </div>

          {/* Phone Item */}
          <div 
            className="flex flex-col items-center max-w-[200px] lg:max-w-[180px] sm:max-w-full sm:w-full sm:text-center"
          >
            <FontAwesomeIcon 
              icon={faPhone} 
              className="text-[30px] text-[#98760B] mb-2.5 sm:text-[25px]" 
            />
            <strong className="text-[18px] sm:text-[16px]">Give Me a Call</strong>
            <p className="mt-1.5 sm:text-[14px]">+254 746 981 845</p>
          </div>

          {/* Email Item */}
          <div 
            className="flex flex-col items-center max-w-[200px] lg:max-w-[180px] sm:max-w-full sm:w-full sm:text-center"
          >
            <FontAwesomeIcon 
              icon={faEnvelope} 
              className="text-[30px] text-[#98760B] mb-2.5 sm:text-[25px]" 
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