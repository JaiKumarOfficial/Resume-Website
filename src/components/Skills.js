import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../data/project_data";

function Skills() {
  const skill_cards = skills.map((elem) => {
    return <SkillCard data={elem} key={elem.id} />;
  });
  return (
    <>
      <div id="skills" className="skills">
        <h1 className="title">Skills</h1>
        <div className="right">
          <div className="skills-container">{skill_cards}</div>
        </div>
      </div>
    </>
  );
}

export default Skills;
