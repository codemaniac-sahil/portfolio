import React from "react";
import Footer from "./Footer";
// import LightMode from "./LightMode";
// import Navbar from './Navbar'
import NavbarAll from "./NavbarAll";
import { FaMoon, FaSun } from "react-icons/fa";

function About(props) {
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
                I am web developer, having good ability to transcribe any UI on
                website, good command of modern tools/ technologies, in Web
                development, meticulous, respects the rules of good development
                , I am good in teamwork and leadership and I like to go ahead in
                aid propose ideas to advance a project.{" "}
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
                    <span className="bold">Age : </span>21
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
              <img
                src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                alt="html"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                alt="html5 logo, opencode css"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
                alt="Illustration For Creating The Library And Adding Dependencies - Js Logo Transparent, HD Png Download@kindpng.com"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                alt="Illustration For Creating The Library And Adding Dependencies - Js Logo Transparent, HD Png Download@kindpng.com"
              />
            </div>

            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
                alt="Illustration For Creating The Library And Adding Dependencies - Js Logo Transparent, HD Png Download@kindpng.com"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png"
                alt="Illustration For Creating The Library And Adding Dependencies - Js Logo Transparent, HD Png Download@kindpng.com"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/archive/6/64/20170429090804%21Expressjs.png"
                alt="Illustration For Creating The Library And Adding Dependencies - Js Logo Transparent, HD Png Download@kindpng.com"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://www.php.net/images/logos/new-php-logo.svg"
                alt="Illustration For Creating The Library And Adding Dependencies - Js Logo Transparent, HD Png Download@kindpng.com"
              />
            </div>

            <div className="skill-img-card">
              <img
                src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg"
                alt="mysql"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png"
                alt="mysql"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
                alt="mysql"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                alt="c language"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
                alt="c language"
              />
            </div>
            <div className="skill-img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg"
                alt="c language"
              />
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
