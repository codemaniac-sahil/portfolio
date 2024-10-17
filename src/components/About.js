import React from "react";
import Footer from "./Footer";
// import LightMode from "./LightMode";
// import Navbar from './Navbar'
import NavbarAll from "./NavbarAll";
import { FaMoon, FaSun } from "react-icons/fa";
import javascript from '../skill-images/javascript.png'
import github from '../skill-images/github.png'
import php from '../skill-images/php.png'
import python from '../skill-images/python.png'
import react from '../skill-images/react.png'
import clang from '../skill-images/c lang.png'
import mongodb from '../skill-images/mongodb.png'
import nodejs from '../skill-images/nodejs.png'
import aws from '../skill-images/aws.png'
import azure from '../skill-images/azure.png'
import git from '../skill-images/git.png'
import mysql from '../skill-images/mysql.png'





function About(props) {
  const getAge = () => {
    const birthYear = new Date('12/08/2001').getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
  return (
    <>
      <div className={`about-${props.theme}`}>
        <NavbarAll theme={props.theme} />

        <div className={`aboutme-${props.theme}`}>
          <p>
            ABOUT <hr id="line" />
          </p>
          <br />
          <h1>LEARN MORE ABOUT ME</h1>

          <div className="aboutme-header">
            <div className="image">
              <img src={require("../images/myprofile.jpg")} alt="myprofile" />
            </div>
            <div className="aboutme-section">
              <h1>Full Stack Developer</h1>
              <p>

                I am Sahil Bisht, a passionate Full-Stack Developer with a knack for creating efficient and user-friendly solutions. I hold a Bachelor's degree in Computer Science from KIET Group of Institutions and have honed my skills working at EasyEd, where I led both front-end and back-end development initiatives. My technical expertise spans across various technologies such as React, Node.js, MongoDB, Express.js, and PHP. I also have a strong understanding of cloud platforms like Amazon AWS, Microsoft Azure, and GCP, and I am proficient in Docker. My portfolio includes diverse projects, including a real-time collaborative document editor and a specialized video calling platform for deaf and mute individuals. I am always eager to learn and adapt to new technologies and challenges. In my spare time, I enjoy contributing to open-source projects and exploring new tech trends.
              </p>
              <div className="info">
                <div className="info-1">
                  <p>
                    <span className="bold">Birthday : </span>08 December 2001
                  </p>

                  <p>
                    <span className="bold">Phone : </span>91+ 9540765805
                  </p>
                  <p>
                    <span className="bold">City: </span>New Delhi, India
                  </p>
                </div>

                <div className="info-2">
                  <p>
                    <span className="bold">Age : </span>{getAge()}
                  </p>
                  <p>
                    <span className="bold">Degree : </span>Bachelor's of
                    Technology
                  </p>
                  <p>
                    <span className="bold">Email : </span>
                    sahilbisht19334@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="skills container">
            <div class="section-title">
              <h1>Skills</h1>
            </div>
          </div>
          <div className="skill-image">
            <div className="skill-img-card">
              <img src={javascript} alt="JavaScript" />
            </div>
            <div className="skill-img-card">
              <img src={react} alt="reactJs" />
            </div>
            <div className="skill-img-card">
              <img src={python} alt="python" />
            </div>
            <div className="skill-img-card">
              <img src={php} alt="php" />
            </div>
            <div className="skill-img-card">
              <img src={github} alt="github" />
            </div>
            <div className="skill-img-card">
              <img src={clang} alt="clang" />
            </div>
            <div className="skill-img-card">
              <img src={mongodb} alt="mongodb" />
            </div>
            <div className="skill-img-card">
              <img src={nodejs} alt="nodejs" />
            </div>
            <div className="skill-img-card">
              <img src={aws} alt="aws" />
            </div>
            <div className="skill-img-card">
              <img src={azure} alt="azure" />
            </div>
            <div className="skill-img-card">
              <img src={git} alt="git" />
            </div>
            <div className="skill-img-card">
              <img src={mysql} alt="mysql" />
            </div>
          </div>

          <Footer />
        </div>
        <div className="theme-setting">
          {props.theme === "dark" ? (
            <FaSun onClick={props.toggleTheme} />
          ) : (
            <FaMoon onClick={props.toggleTheme} />
          )}
        </div>
      </div>
      {/* <LightMode /> */}
    </>
  );
}

export default About;
