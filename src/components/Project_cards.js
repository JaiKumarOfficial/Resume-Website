import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBalanceScale,
  faBook,
  faCoins,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function setIcon(icon) {
  switch (icon) {
    case "faTwitter":
      return <FontAwesomeIcon icon={faTwitter} color="blue" className="icon" />;
    case "faBalanceScale":
      return (
        <FontAwesomeIcon icon={faBalanceScale} color="black" className="icon" />
      );
    case "faBook":
      return <FontAwesomeIcon icon={faBook} color="brown" className="icon" />;
    case "faCoins":
      return <FontAwesomeIcon icon={faCoins} color="green" className="icon" />;
    case "faUsers":
      return (
        <FontAwesomeIcon icon={faUsers} color="#6ea6ea" className="icon" />
      );
  }
}

export default function Project_cards(props) {
  const icon = props.data.icon;
  return (
    <>
      <div className={`card ${props.className}`}>
        <div className="top">
          <h1>{props.data.title}</h1>
          {icon ? setIcon(icon) : ""}
        </div>
        <div className="center">
          <p>{props.data.detail}</p>
          {props.data.listTitle ? <h6>{props.data.listTitle}</h6> : ""}
          {props.data.list ? (
            <ol>
              {props.data.list.map((elem, index) => (
                <li key={index}>{elem}</li>
              ))}
            </ol>
          ) : (
            ""
          )}
        </div>
        <div className="bottom">
          <a href={props.data.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
        </div>
      </div>
    </>
  );
}
