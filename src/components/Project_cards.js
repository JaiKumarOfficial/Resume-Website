import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Project_cards(props) {
  return (
    <>
      <div className="card">
        <div className="top">
          <h1>{props.data.title}</h1>
          {props.data.icon ? (
            <FontAwesomeIcon icon={faTwitter} color="blue" className="icon" />
          ) : (
            ""
          )}
        </div>
        <div className="center">
          <p>{props.data.detail}</p>
          <h6>{props.data.listTitle || ""}</h6>
          <ol>{props.data.list?.map((elem) => <li>{elem}</li>) || ""}</ol>
        </div>
        <div className="bottom">
          <a href={props.data.link}>
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
        </div>
      </div>
    </>
  );
}
