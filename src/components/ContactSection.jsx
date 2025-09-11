import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section id="ContactSection" className="bg-background py-10">
      <div className="max-w-3xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Address */}
          <div className="flex flex-col items-center bg-secondary text-white rounded-lg p-6 shadow-md w-full md:w-1/3">
            <FontAwesomeIcon icon={faHome} className="text-3xl mb-2" />
            <strong className="text-lg font-bold mb-1">My Address</strong>
            <p className="text-base">Nairobi, Kenya</p>
          </div>
          {/* Phone */}
          <div className="flex flex-col items-center bg-secondary text-white rounded-lg p-6 shadow-md w-full md:w-1/3">
            <FontAwesomeIcon icon={faPhone} className="text-3xl mb-2" />
            <strong className="text-lg font-bold mb-1">Give Me a Call</strong>
            <p className="text-base">+254 746 981 845</p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center bg-secondary text-white rounded-lg p-6 shadow-md w-full md:w-1/3">
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-2" />
            <strong className="text-lg font-bold mb-1">Send Me an Email</strong>
            <p className="text-base">jumaelectricals@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
