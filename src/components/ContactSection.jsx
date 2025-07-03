import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section id="ContactSection">
      <div style={contactSectionStyle}>
        <div className="contact-container" style={contactContainerStyle}>
          {/* Address */}
          <div className="contact-item" style={contactItemStyle}>
            <FontAwesomeIcon icon={faHome} className="icon" style={iconStyle} />
            <strong className="title" style={titleStyle}>My Address</strong>
            <p className="text" style={textStyle}>Nairobi, Kenya</p>
          </div>

          {/* Phone */}
          <div className="contact-item" style={contactItemStyle}>
            <FontAwesomeIcon icon={faPhone} className="icon" style={iconStyle} />
            <strong className="title" style={titleStyle}>Give Me a Call</strong>
            <p className="text" style={textStyle}>+254 746 981 845</p>
          </div>

          {/* Email */}
          <div className="contact-item" style={contactItemStyle}>
            <FontAwesomeIcon icon={faEnvelope} className="icon" style={iconStyle} />
            <strong className="title" style={titleStyle}>Send Me an Email</strong>
            <p className="text" style={textStyle}>jumaelectricals@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const contactSectionStyle = {
  backgroundColor: "#032825",
  color: "white",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const contactContainerStyle = {
  display: "flex",
  gap: "180px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const contactItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "200px",
};

const iconStyle = {
  fontSize: "30px",
  color: "#98760B",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "18px",
};

const textStyle = {
  marginTop: "5px",
};

export default ContactSection;
