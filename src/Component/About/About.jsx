import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src="/portfolio2.jpg" alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                I'm a Frontend Developer with a passion for creating beautiful
                and functional websites. I have experience in HTML, CSS,
                JavaScript, and React. I love turning ideas into reality and I'm
                always looking for new challenges to improve my skills.
              </p>
              <p>
                In my free time, I enjoy learning new technologies, reading
                books, and spending time with my family and friends.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Next JS</p>
                <hr style={{ width: "30%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
