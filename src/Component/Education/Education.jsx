import React from "react";
import "./Education.css";

function Education() {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>My Education</h1>
      </div>
      <div className="education-content">
        <div className="education-left">
          <h2>2020 - 2025</h2>
          <p>
            Bachelor of Science in Computer Science And Information Technology
          </p>
          <hr />
          <h2>Nihareeka College of Management And IT</h2>
          <p>Biratnagar, Morang</p>
          <p className="para">
            Focused on software development, web technologies, and
            problem-solving with a strong academic foundation.
          </p>
        </div>
        <div className="education-right">
          <h2>2016 - 2018</h2>
          <p>Higher Secondary Education</p>
          <hr />
          <h2>COBASS HSS</h2>
          <p>Biratnagar, Morang</p>
          <p className="para">
            Completed higher secondary education with a focus on science and
            mathematics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
