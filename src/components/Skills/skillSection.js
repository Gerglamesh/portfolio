import React from "react";
import SkillGroup from "./skillGroup";

export default function SkillsSection({
  skillGroups = [{ 
    groupHeader: "",
    skills: [{ name: "", value: 0, color: 10 }] 
  }]
}) {
  return (
    <section className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Specialties</span>
            <h2 className="colorlib-heading animate-box">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <p>
              During my days of coding and studying I have encountered many
              different frameworks and languages. Below you can find selection
              of them.
            </p>
            {
              skillGroups.map((group) => {
                return (
                <SkillGroup 
                  groupHeader={group.groupHeader}
                  skills={group.skills}
                />)
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}
