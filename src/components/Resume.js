import React from "react";
// import Navbar from './Navbar'
import NavbarAll from "./NavbarAll";

function Resume() {
  return (
    <>
      <NavbarAll />
      <div className="resume">
        <object
          data="/file/sahil-bisht-01-11-2022.pdf"
          type="application/pdf"
          aria-label="Alternative Text"
        />
      </div>
    </>
  );
}

export default Resume;
