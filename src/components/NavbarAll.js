import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
import NavbarOne from "./NavbarOne";
import { useState } from "react";

function NavbarAll() {
  const [show, setShow] = useState(false);
  return (
    <div className="navbarall">
      <div className="navbar-1">
        <div className="logo">
          <h1>
            <NavLink to="/">Sahil Bisht</NavLink>
          </h1>
        </div>
        <a href="#" className="toggle-button" onClick={() => setShow(!show)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <NavbarOne show={show} />
      </div>
    </div>
  );
}

export default NavbarAll;
