import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="image-wrapper"></div>
      <div className="main-info">
        <h1>jai kumar</h1>
        <Typed
          className="typed-text"
          strings={[
            "Full Stack Developer",
            "Python",
            "React",
            "C++",
            "Node JS",
          ]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
        <a href="#contact" className="btn-main-offer">
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default Header;
