import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center gap-6 min-h-screen bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.4)), url("/dhiraj.jpg")',
      }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold w-full sm:w-3/4 md:w-1/3 leading-tight">
        <span className="text-[#136aa3]">
          HI, I'M <br /> DHIRAJ MEHTA,
        </span>
      </h1>

      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 -mt-3">
        FRONTEND DEVELOPER
      </h2>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-xl mx-auto -mt-2">
        Turning ideas into clean, modern, and responsive websites.
      </p>

      <a
        href="/cv_dhiraj_mehta-1.pdf"
        download="Dhiraj_Mehta_Resume.pdf"
        className="   px-8 py-3 rounded-md bg-[#136aa3] text-white font-semibold text-lg transition-opacity duration-200 hover:opacity-95"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Hero;
