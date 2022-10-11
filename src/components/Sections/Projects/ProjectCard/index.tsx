import React from "react";
import "./index.scss";

type ProjectCardProps = {
  image: any;
  title: string;
  subtitle: string;
};

const ProjectCard = ({ image, title, subtitle }: ProjectCardProps) => {
  return (
    <div className="project__card">
      <img src={image} alt="project image" className="project__img" />
      <div className="project__card__info">
        <span className="project__subtitle">{subtitle}</span>
        <h1 className="project__title">{title}</h1>
        <a href="#" className="project__button">
          View demo <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
