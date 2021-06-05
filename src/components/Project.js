import React from "react";
import Project_cards from "./Project_cards";

function Projects(props) {
  const project_cards = props.data.map((project) => {
    return <Project_cards key={project.id} data={project} />;
  });

  return (
    <>
      <div id="projects" className="projects">
        <h1 className="title">PROJECTS</h1>
        <div className="projects-container">
          <div className="projects-container-child">{project_cards}</div>
        </div>
      </div>
    </>
  );
}

export default Projects;
