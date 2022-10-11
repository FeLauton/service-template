import React from "react";
import "./index.scss";

type Props = {
  title: string;
  classIcon: string;
  description: string;
};

const ServiceCard = ({ title, description, classIcon }: Props) => {
  return (
    <div className="services__card">
      <i className={classIcon}></i>
      <h2 className="services__title">{title}</h2>
      <p className="services__description">{description}</p>
      <div className="services__border"></div>
    </div>
  );
};

export default ServiceCard;
