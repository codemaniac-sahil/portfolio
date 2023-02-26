import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";
import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";
import { FaMoon, FaSun } from "react-icons/fa";

function Home(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`homepage-${props.theme}`}>
        <div className="header">
          <div className="upper-header">
            <div className="container">
              <h1>Sahil Bisht</h1>
              <h2>
                I'm a passionate <span id="profession">Web Developer</span> from
                India
              </h2>
              <nav className={`navbar-${props.theme}`}>
                <a
                  href="#"
                  className="toggle-button1"
                  onClick={() => setShow(!show)}
                >
                  <span className={`bar1-${props.theme}`}></span>

                  <span className={`bar1-${props.theme}`}></span>

                  <span className={`bar1-${props.theme}`}></span>
                </a>
                <Navbar show={show} theme={props.theme} />
              </nav>
            </div>

            <div className={`social-link-${props.theme}`}>
              <a href="https://github.com/codemaniac-sahil">
                <AiFillGithub />
              </a>
              <a href="https://www.instagram.com/bisht_6903">
                <AiFillInstagram />
              </a>
              <a href="https://www.linkedin.com/in/sahil-bisht-a218b0220/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.buymeacoffee.com/codemaniacsahil">
                <SiBuymeacoffee />
              </a>
            </div>
          </div>
        </div>
        <Footer />
        {/* <button onClick={props.toggleTheme}>{`Enable ${
          props.theme === "light" ? "Dark" : "Light"
        } Mode`}</button> */}
        <div className="theme-setting">
          {props.theme === "dark" ? (
            <FaSun onClick={props.toggleTheme} />
          ) : (
            <FaMoon onClick={props.toggleTheme} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
