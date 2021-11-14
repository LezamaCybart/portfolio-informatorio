import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contacto</label>
      <div className="contact-container">
        <div className="contact-left">
          <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;
