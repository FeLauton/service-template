import React from "react";
import "./index.scss";

type SkillCardProps = {
  icon: any;
  title: string;
  subtitle: string;
};

const SkillCard = ({ icon, title, subtitle }: SkillCardProps) => {
  return (
    <div className="skill__data">
      <div className="skill__blob">
        <img src={icon} alt="skills image" />
      </div>
      <h3 className="skill__title">{title}</h3>
      <span className="skill__subtitle">{subtitle}</span>
    </div>
  );
};

export default SkillCard;
