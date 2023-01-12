import React from "react";
import Footer from "./Footer";
// import Navbar from './Navbar'
import NavbarAll from "./NavbarAll";

function About() {
  return (
    <>
      <div className="about">
        <NavbarAll />

        <div className="aboutme">
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

            <div class="row skills-content">
              <div class="skills-1">
                <div class="progress">
                  <span class="skill">
                    HTML <i class="val">100%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    CSS <i class="val">90%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    JavaScript <i class="val">75%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div class="progress">
                  <span class="skill">
                    ReactJS <i class="val">90%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div class="skills-2">
                <div class="progress">
                  <span class="skill">
                    PHP <i class="val">80%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    MySQL <i class="val">90%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div class="progress">
                  <span class="skill">
                    NodeJS <i class="val">70%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div class="progress">
                  <span class="skill">
                    MongoDB <i class="val">60%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
