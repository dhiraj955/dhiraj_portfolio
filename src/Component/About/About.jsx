import React from "react";

function About() {
  return (
    <section id="about" className="w-[80%]  mx-auto  flex flex-col gap-16 items-center justify-center">
      {/* Title */}
      <div className="text-3xl mt-15 sm:text-4xl font-semibold text-gray-800 text-center">
        <h1>About Me</h1>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/aboutd.jpg"
            alt="About Dhiraj"
            className="max-w-[400px] w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Paragraph */}
        <div className="w-full md:w-1/2 text-[1.1rem] sm:text-[1.2rem] text-gray-700 space-y-4 font-medium">
          <p>
            I'm a Frontend Developer with a passion for creating beautiful and
            functional websites. I have experience in HTML, CSS, JavaScript, and React.
            I love turning ideas into reality and I'm always looking for new challenges to improve my skills.
          </p>
          <p>
            I'm currently exploring advanced React features like hooks, context API, and performance optimization.
            I also have a keen interest in responsive design and ensuring accessibility across all devices.
            Collaboration and teamwork are important to me, and I enjoy contributing to open-source projects.
            I believe in writing clean, maintainable code that scales well with time and growth.
            My goal is to build web experiences that not only look good but also deliver exceptional user experience.
          </p>
          <p>
            In my free time, I enjoy learning new technologies, reading books, and spending time with my family and friends.
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-10 sm:gap-0 mt-10">
        <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
          <h1 className="text-[#136aa3] text-5xl font-bold">1</h1>
          <p className="text-lg font-medium text-center">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="hidden sm:block w-[1px] h-12 bg-gray-300" />
        <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
          <h1 className="text-[#136aa3] text-5xl font-bold">10+</h1>
          <p className="text-lg font-medium text-center">PROJECTS COMPLETED</p>
        </div>
        <hr className="hidden sm:block w-[1px] h-12 bg-gray-300" />
        <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
          <h1 className="text-[#136aa3] text-5xl font-bold">5+</h1>
          <p className="text-lg font-medium text-center">HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  );
}

export default About;
