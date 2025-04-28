import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div id="home" className="hero">
      {/* <img src="/portfolio.jpg" alt="" /> */}
      <h1>
        <span>
          HI, I'M <br />
          DHIRAJ MEHTA,
        </span>
      </h1>
      <h2>FRONTEND DEVELOPER</h2>
      <p>Turning ideas into clean, modern, and responsive websites.</p>
      <div className="hero-action">
        <a href="/resume.pdf" download="Dhiraj_Mehta_Resume.pdf">
        <button className="hero-button hero-btn">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
