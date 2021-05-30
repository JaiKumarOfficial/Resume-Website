import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBalanceScale,
  faBook,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

function setIcon(icon) {
  switch (icon) {
    case "faTwitter":
      return <FontAwesomeIcon icon={faTwitter} color="blue" className="icon" />;
      break;
    case "faBalanceScale":
      return (
        <FontAwesomeIcon icon={faBalanceScale} color="black" className="icon" />
      );
      break;
    case "faBook":
      return <FontAwesomeIcon icon={faBook} color="brown" className="icon" />;
      break;
    case "faCoins":
      return <FontAwesomeIcon icon={faCoins} color="green" className="icon" />;
      break;
  }
}

export default function Project_cards(props) {
  const icon = props.data.icon;
  return (
    <>
      <div className="card">
        <div className="top">
          <h1>{props.data.title}</h1>
          {props.data.icon ? setIcon(props.data.icon) : ""}
        </div>
        <div className="center">
          <p>{props.data.detail}</p>
          <h6>{props.data.listTitle || ""}</h6>
          <ol>
            {props.data.list?.map((elem, index) => (
              <li key={index}>{elem}</li>
            )) || ""}
          </ol>
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
