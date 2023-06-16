import React from "react";
// import Navbar from './Navbar'
import NavbarAll from "./NavbarAll";

function Resume(props) {
  return (
    <>
      <NavbarAll theme={props.theme} />
      <div className="resume">
        <object
          data="/file/sahil-bisht-12-03-2023.pdf"
          type="application/pdf"
          aria-label="Alternative Text"
        />
      </div>
    </>
  );
}

export default Resume;
