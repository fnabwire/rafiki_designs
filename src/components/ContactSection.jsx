import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
  <section id="ContactSection" className="bg-[#F0F8FF] text-[#012169] py-10 flex flex-col items-center text-center border-t-4 border-[#0E97B9]">
      <div className="flex gap-[130px] justify-center flex-wrap max-w-6xl w-full px-4">

        {/* Address */}
        <div className="flex flex-col items-center max-w-[200px]">
          <FontAwesomeIcon icon={faHome} className="text-3xl text-[#0E97B9] mb-2" />
          <strong className="text-lg">My Address</strong>
          <p className="mt-1">Mombasa, Kenya</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center max-w-[200px]">
          <FontAwesomeIcon icon={faPhone} className="text-3xl text-[#0E97B9] mb-2" />
          <strong className="text-lg">Give Me a Call</strong>
          <p className="mt-1">+254 704 186 266</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center max-w-[200px]">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-[#0E97B9] mb-2" />
          <strong className="text-lg">Send Me an Email</strong>
          <p className="mt-1">franciscanabwire2@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;