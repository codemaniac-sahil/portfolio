import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";
import Navbar from "./Navbar";
import { useState } from "react";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <div className="upper-header">
        <div className="container">
          <h1>Sahil Bisht</h1>
          <h2>
            I'm a passionate <span id="profession">Web Developer</span> from
            India
          </h2>
          <nav className="navbar">
            <a
              href="#"
              className="toggle-button"
              onClick={() => setShow(!show)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
            <Navbar show={show} />
          </nav>
        </div>

        <div className="social-link">
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
  );
}

export default Home;
