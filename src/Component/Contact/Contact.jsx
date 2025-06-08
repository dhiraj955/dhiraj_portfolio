import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formDataObj = new FormData(e.target);
    formDataObj.append("access_key", "0058b183-5423-465f-a881-67b0934a3942");

    const object = Object.fromEntries(formDataObj);
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
      e.target.reset();
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="w-[80%] max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Get in touch</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-20">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#136aa3]">
            Let's talk
          </h1>
          <p className="text-gray-700 text-lg">
            Ready to start your next project?
          </p>

          <div className="space-y-5 text-lg text-gray-700">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt /> Biratnagar, Nepal
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt /> +977-9826728851
            </p>
            <p className="flex items-center gap-3">
              <HiOutlineMail /> dhirajmehta955@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaGithub />
              <a
                href="https://github.com/dhiraj955"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Github link
              </a>
            </p>
            <div className="flex gap-6 mt-4 text-2xl">
              <a
                href="https://www.facebook.com/dhiraj.arya.71"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/dhirajmehta782?igsh=cnlydHl1NjJuaHc="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/dhiraj-mehta-444492270/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={onSubmit} className="md:w-1/2 space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#136aa3] font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-14 px-4 rounded bg-gray-200 text-gray-800 text-lg outline-none"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#136aa3] font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-14 px-4 rounded bg-gray-200 text-gray-800 text-lg outline-none"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#136aa3] font-medium">
              Write your message here
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-gray-200 text-gray-800 text-lg resize-none outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#136aa3] text-white font-semibold py-3 px-6 rounded hover:opacity-95 hover:cursor-pointer transition-all duration-200 w-full"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
