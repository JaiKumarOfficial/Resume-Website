import React, { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Projects(props) {
  const [current, SetCurrent] = useState(0);
  const [size, setSize] = useState("small");
  const [left, setLeft] = useState(0);
  const [center, setCenter] = useState(1);
  const [right, setRight] = useState(2);
  const len = props.data.length - 1;

  const project_card = props.data.map((project, idx) => {
    return idx === current && <ProjectCards key={project.id} data={project} />;
  });

  const project_card_left = props.data.map((project, idx) => {
    return (
      idx === left && (
        <ProjectCards key={project.id} data={project} className="side-slide" />
      )
    );
  });
  const project_card_center = props.data.map((project, idx) => {
    return (
      idx === center && (
        <ProjectCards
          key={project.id}
          data={project}
          className="center-slide"
        />
      )
    );
  });
  const project_card_right = props.data.map((project, idx) => {
    return (
      idx === right && (
        <ProjectCards key={project.id} data={project} className="side-slide" />
      )
    );
  });

  const next = () => {
    SetCurrent(current === len ? 0 : current + 1);
    setLeft(left === len ? 0 : left + 1);
    setCenter(center === len ? 0 : center + 1);
    setRight(right === len ? 0 : right + 1);
  };
  const previous = () => {
    SetCurrent(current === 0 ? len : current - 1);
    setLeft(left === 0 ? len : left - 1);
    setCenter(center === 0 ? len : center - 1);
    setRight(right === 0 ? len : right - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 1000 ? "small" : "large");
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="projects" className="projects">
        <h1 className="title">PROJECTS</h1>
        <div className="projects-container">
          <div className="projects-container-child">
            {size === "small" ? (
              project_card
            ) : (
              <>
                {project_card_left}
                {project_card_center}
                {project_card_right}
              </>
            )}
            {/* {project_card_left}
            {project_card_center}
            {project_card_right} */}
            <ArrowBackIosIcon className="arrow-left" onClick={previous} />
            <ArrowForwardIosIcon className="arrow-right" onClick={next} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
