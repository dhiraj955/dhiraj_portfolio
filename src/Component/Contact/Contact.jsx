/* eslint-disable no-undef */
import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0058b183-5423-465f-a881-67b0934a3942");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset(); 
   
    }
  };
  return (
    <div  id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Ready to start your next project?</p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>
                <FaMapMarkerAlt /> Biratnagar, Nepal
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <FaPhoneAlt /> +977-9826728851
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <HiOutlineMail /> dhirajmehta955@gmail.com
              </p>
            </div>
            <div className="contact-detail">
            <a href="https://www.facebook.com/dhiraj.arya.71" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/dhirajmehta782?igsh=cnlydHl1NjJuaHc=" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/dhiraj-mehta-444492270/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <div className="label-contact">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
          </div>
          <div className="label-contact">
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
          </div>
          <div className="label-contact">
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
