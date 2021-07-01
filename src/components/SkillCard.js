import React from "react";

export default function SkillCard(props) {
  function renderSkillBar(skill) {
    let skillBar = [];
    for (let i = 0; i < skill; i++) {
      skillBar.push(
        <div className="skillBar-dot-1-out">
          <div className="skillBar-dot-1-in"></div>
        </div>
      );
    }
    for (let i = 0; i < 5 - skill; i++) {
      skillBar.push(
        <div className="skillBar-dot-1-out">
          <div className="skillBar-dot-0-in"></div>
        </div>
      );
    }
    return skillBar;
  }
  return (
    <div className="skill-card">
      <img src={props.data.skillImg || "#"} alt={props.data.alt}></img>
      <div className="skillBar">{renderSkillBar(props.data.skillBar)}</div>
    </div>
  );
}
