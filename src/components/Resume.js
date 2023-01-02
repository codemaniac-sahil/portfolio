import React from "react";
// import Navbar from './Navbar'
import NavbarAll from "./NavbarAll";

function Resume() {
  return (
    <>
      <NavbarAll />
      <div className="resume">
        <object
          data="/file/Sahil_bisht-01-12-2022.pdf"
          type="application/pdf"
          aria-label="Alternative Text"
        />
      </div>
    </>
  );
}

export default Resume;
