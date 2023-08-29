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
  const getAge=()=>{
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
              <h1>Web Developer</h1>
              <p>
                {" "}
                Hi there! I'm Sahil, a passionate MERN Stack Developer and Solana Developer with a knack for turning ideas into reality through coding magic. 🚀<br/>

🔹 Who am I?<br/>
I'm a self-motivated and curious individual who thrives on challenges and loves to dive deep into the world of web development. My journey began with a fascination for MERN (MongoDB, Express.js, React, Node.js) stack and has recently expanded into the exciting realm of Solana blockchain development.<br/>

🔹 What I Bring to the Table:<br/>
While I may not have formal experience, my dedication and commitment have led me to embark on remarkable projects showcasing my skills and determination. These projects are not just code; they represent my passion and the countless hours I've poured into refining my craft.<br/>

🔹 What Drives Me:<br/>
I'm motivated by the opportunity to learn and improve continuously. The ever-evolving nature of technology keeps me on my toes, and I'm committed to staying at the forefront of innovation in the web and blockchain domains.<br/>

🔹 What's Next:<br/>
I'm excited to join a team where I can collaborate with like-minded professionals, contribute to innovative projects, and further hone my development skills. While my journey is just beginning, I'm eager to make a meaningful impact in the tech world.<br/>

🔹 Let's Connect:<br/>
If you're passionate about cutting-edge technologies, web development, or the potential of blockchain, I'd love to connect! Feel free to reach out to me on LinkedIn.<br/>

Thank you for stopping by, and I'm looking forward to the exciting opportunities that lie ahead in this coding adventure! 🌟<br/>{" "}
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
              <img src={javascript} alt="JavaScript"/>
            </div>
            <div className="skill-img-card">
              <img src={react} alt="reactJs"/>
            </div>
             <div className="skill-img-card">
              <img src={python} alt="python"/>
            </div>
            <div className="skill-img-card">
              <img src={php} alt="php"/>
            </div>
            <div className="skill-img-card">
              <img src={github} alt="github"/>
            </div>
            <div className="skill-img-card">
              <img src={clang} alt="clang"/>
            </div>
            <div className="skill-img-card">
              <img src={mongodb} alt="mongodb"/>
            </div>
            <div className="skill-img-card">
              <img src={nodejs} alt="nodejs"/>
            </div>
            <div className="skill-img-card">
              <img src={aws} alt="aws"/>
            </div>
            <div className="skill-img-card">
              <img src={azure} alt="azure"/>
            </div>
            <div className="skill-img-card">
              <img src={git} alt="git"/>
            </div>
            <div className="skill-img-card">
              <img src={mysql} alt="mysql"/>
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
