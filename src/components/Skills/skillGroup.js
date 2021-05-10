import React from "react";
import Skill from "./skill";

export default function SkillGroup({
  groupHeader = "",
  skills = [{ name: "", value: 0 , color: 1}],
}) {
  return (
    <div className="row">
      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
        <strong>{groupHeader}</strong>
      </div>
      {skills.map((skill) => {
        return (
          <Skill name={skill.name} value={skill.value} color={skill.color} />
        );
      })}
      </div>
  );
}
