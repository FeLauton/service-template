import SkillCard from "./SkillCard";
import React from "react";
import "./index.scss";
import {
  awsEc2Icon,
  awsIcon,
  awsLambdaIcon,
  awsRdsIcon,
  awsRoute53Icon,
  cssIcon,
  gitIcon,
  htmlIcon,
  javascriptIcon,
  nodejsIcon,
  reactIcon,
  socketIoIcon,
  sqlIcon,
  typescriptIcon,
} from "../../../images";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My favorite skills</span>
      <div className="skills__container container grid section__border">
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-braces-line"></i>Frontend Developer
          </h3>
          <div className="skills__info">
            <SkillCard title="HTML" subtitle="Intermediate" icon={htmlIcon} />
            <SkillCard title="CSS" subtitle="Intermediate" icon={cssIcon} />
            <SkillCard
              title="Javascript"
              subtitle="Intermediate"
              icon={javascriptIcon}
            />
            <SkillCard
              title="Typescript"
              subtitle="Intermediate"
              icon={typescriptIcon}
            />
            <SkillCard title="React" subtitle="Advanced" icon={reactIcon} />
            <SkillCard title="Git" subtitle="Intermediate" icon={gitIcon} />
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-braces-line"></i>Backend Developer
          </h3>
          <div className="skills__info">
            <SkillCard
              title="NodeJS"
              subtitle="Intermediate"
              icon={nodejsIcon}
            />
            <SkillCard
              title="Socket.IO"
              subtitle="Intermediate"
              icon={socketIoIcon}
            />
            <SkillCard title="SQL Server" subtitle="Advanced" icon={sqlIcon} />
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-cloud-line"></i>Cloud
          </h3>
          <div className="skills__info">
            <SkillCard title="AWS" subtitle="Intermediate" icon={awsIcon} />
            <SkillCard
              title="AWS EC2"
              subtitle="Intermediate"
              icon={awsEc2Icon}
            />
            <SkillCard
              title="AWS RDS"
              subtitle="Intermediate"
              icon={awsRdsIcon}
            />
            <SkillCard
              title="AWS Route 53"
              subtitle="Intermediate"
              icon={awsRoute53Icon}
            />
            <SkillCard
              title="AWS Lambda"
              subtitle="Intermediate"
              icon={awsLambdaIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
