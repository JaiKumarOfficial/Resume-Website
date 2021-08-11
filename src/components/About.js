import React from "react";
import image from "../images/IMG_0580.jpg";
import { about_me_content } from "../data/project_data";
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
            <h1>{about_me_content.title}</h1>
            <h4>{about_me_content.subtitle}</h4>
            <p>{about_me_content.description}</p>
          </div>
        </div>
        <div className="about-card">
          <div className="image-container">
            <div className="about-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/jai.jpg`}
                alt="Profile Picture"
              />
            </div>
          </div>
          <div className="about-center">
            <h4>Jai Kumar</h4>
          </div>
          <div className="card-links">
            <a
              href="https://www.linkedin.com/in/jaikumar11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/JaiKumarOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/JaiKumar__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/jaikumar11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
