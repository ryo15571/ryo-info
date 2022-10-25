import React from "react";

function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Navbar() {
  return (

    <header className="main-header bg-gray-500 fixed z-40 w-full flex-auto">
     
      <div className="flex justify-center py-5 text-lg">
      <a href="/aboutme">
        <div className="font-light text-gray-300">
          <div className="px-7">About Me</div>
        </div>
      </a>
      <a href="/resume">
        <div className="font-light text-gray-300">
          <div className="px-7">Resume</div>
        </div>
      </a>
      <a href="/favsong">
        <div className="font-light text-gray-300">
          <div className="px-7">Favorite Song</div>
        </div>
      </a>
      <a href="/certificate">
        <div className="font-light text-gray-300">
          <div className="px-7 text-end">Certificate</div>
        </div>
      </a>
      <a href="/grade">
        <div className="font-light text-gray-300">
          <div className="px-7 text-end">Grade</div>
        </div>
      </a>
      </div>

      {/* <a href="/">
        <div className="text-2xl">
          <h1>RyoEiam</h1>
        </div>
      </a>
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>

      </div>
      <nav className="text-neutral-300 ">
        <ul className="grid grid-cols-4 px-5">
          <li>
            <a href="/aboutme">About Me</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/favsong">Favorite Song</a>
          </li>
          <li>
            <a href="/certificate">Certificate</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Navbar;