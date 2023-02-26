import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    // <ul className={props.show ? "navlinks-mobile-menu" : "navlinks ${}"}>
    <ul
      className={`${props.show ? "navlinks-mobile-menu" : "navlinks"}-${
        props.theme
      }`}
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/about"> About </NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/resume">Resume</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/project">Projects</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
