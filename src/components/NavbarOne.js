import React from "react";
import { NavLink } from "react-router-dom";

function NavbarOne(props) {
  return (
    <ul className={props.show ? "navlinks-mobile-menu1" : "navlinks1"}>
      {/* // <ul className="navlinks"> */}
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

export default NavbarOne;
