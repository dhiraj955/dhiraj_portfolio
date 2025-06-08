import React from "react";

function Education() {
  return (
    <div id="education" className="flex flex-col items-center justify-center gap-20 w-[95%] mx-auto md:w-[95vw]">
      <div className="mt-[50px] md:mt-15 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center">My Education</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 w-full">
        <div className="flex flex-col gap-5 w-[95%] md:w-full text-center md:text-center">
          <h2 className="text-lg text-gray-800 font-normal md:text-[18px] sm:text-2xl">2020 - 2025</h2>
          <p className="text-lg font-normal md:text-[17px] sm:text-xl">
            Bachelor of Science in Computer Science And Information Technology
          </p>
          <hr className="w-1/2 h-[2px] bg-[#136aa3] rounded-full mx-auto" />
          <h2 className="text-lg text-gray-800 font-normal md:text-[17px]  sm:text-2xl">Nihareeka College of Management And IT</h2>
          <p className="text-lg font-normal md:text-[17px] sm:text-xl">Biratnagar, Morang</p>
          <p className="text-lg font-normal mb-12 md:text-[17px] sm:text-xl sm:mb-2">
            Focused on software development, web technologies, and problem-solving with a strong academic foundation.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-[95%] md:w-full text-center md:text-center">
          <h2 className="text-lg text-gray-800 font-normal md:text-[18px] sm:text-2xl">2016 - 2018</h2>
          <p className="text-lg font-normal md:text-[17px] sm:text-xl">Higher Secondary Education</p>
          <hr className="w-1/2 h-[2px] bg-[#136aa3] rounded-full mx-auto" />
          <h2 className="text-lg text-gray-800 font-normal md:text-[18px] sm:text-2xl">COBASS HSS</h2>
          <p className="text-lg font-normal md:text-[17px] sm:text-xl">Biratnagar, Morang</p>
          <p className="text-lg font-normal mb-12 md:text-[17px] sm:text-xl sm:mb-2">
            Completed higher secondary education with a focus on science and mathematics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
