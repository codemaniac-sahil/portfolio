import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
import NavbarOne from "./NavbarOne";
import { useState } from "react";

function NavbarAll(props) {
  const [show, setShow] = useState(false);
  return (
    <div className={`navbarall-${props.theme}`}>
      <div className={`navbar-1-${props.theme}`}>
        <div className={`logo-${props.theme}`}>
          <h1>
            <NavLink to="/">Sahil Bisht</NavLink>
          </h1>
        </div>
        <NavLink href="#" className="toggle-button" onClick={() => setShow(!show)}>
          <span className={`bar-${props.theme}`}></span>
          <span className={`bar-${props.theme}`}></span>

          <span className={`bar-${props.theme}`}></span>
        </NavLink>
        <NavbarOne show={show} theme={props.theme} />
      </div>
    </div>
  );
}

export default NavbarAll;
