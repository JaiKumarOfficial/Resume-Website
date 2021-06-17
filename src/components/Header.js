import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const homeImg = {
    background: `url(${process.env.PUBLIC_URL}/left_macbook_back_35.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div id="home" className="header-wrapper" style={homeImg}>
      <div className="image-wrapper">
        {/* <img src={homeImg} alt="home-img"></img> */}
      </div>
      <div className="main-info">
        <h1>jai kumar</h1>
        <Typed
          className="typed-text"
          strings={[
            "Full Stack Developer",
            "Python",
            "JavaScript",
            "React",
            "C++",
            "Node JS",
          ]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
        <div style={{ display: "flex" }}>
          <a href="#contact" className="btn-main-offer">
            <FontAwesomeIcon icon={faEnvelope} /> CONTACT
          </a>
          <a
            href={process.env.PUBLIC_URL + "/Resume.pdf"}
            className="btn-main-offer"
            download="Jai-Resume"
          >
            <FontAwesomeIcon icon={faDownload} /> RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
