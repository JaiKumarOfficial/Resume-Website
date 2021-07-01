import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const closeNavbar = () => {
    document.querySelector(".navbar-collapse").classList.remove("show");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          JAI KUMAR
          {/* <span style={{ fontSize: 15, marginLeft: 10 }}>
            {" "}
            | FullStack Developer
          </span> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#home" onClick={closeNavbar}>
                Home<span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#timeline" onClick={closeNavbar}>
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeNavbar}>
                skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeNavbar}>
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeNavbar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
