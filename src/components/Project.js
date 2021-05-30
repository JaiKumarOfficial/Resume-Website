import React from "react";
import Project_cards from "./Project_cards";

function Projects(props) {
  const project_cards = props.data.map((project) => {
    return <Project_cards key={project.id} data={project} />;
  });

  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-container">{project_cards}</div>
    </div>
  );
}

export default Projects;
