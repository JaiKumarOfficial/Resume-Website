import React from "react";
import image from "../images/IMG_0580.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div id="about" className="flex-container about-me">
        <div className="flex-child1"></div>
        <div className="flex-child2">
          <div className="child2-container">
            <h1>Hello</h1>
            <h4>Here's who I am & what I do</h4>
            <p>afshasldhad</p>
          </div>
        </div>
        <div className="about-card">
          <div className="image-container">
            <div className="about-image">
              {/* <img src={image} alt="Profile Picture" /> */}
            </div>
          </div>
          <div className="about-center">
            <h4>Jai Kumar</h4>
          </div>
          <div className="card-links">
            <a href="https://www.linkedin.com/in/jaikumar11/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/JaiKumarOfficial">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/JaiKumar__">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/jaikumar11/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
