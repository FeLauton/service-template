import * as React from "react";
import shapeCircle from "../../../images/shape-circle.svg";
import "./index.scss";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Experience & education</span>
      <div className="qualification__container container grid section__border">
        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-pencil-ruler-2-line"></i>Education
          </h3>
          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <span className="qualification__country">
                Brazil - Centro Universitário UNIFAAT
              </span>
              <span className="qualification__year">2011 - 2013</span>
            </div>
          </div>
        </div>
        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-building-line"></i>Work
          </h3>
          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">Full Stack Developer</h3>
              <span className="qualification__country">
                Prática Klimaquip - Brazil
              </span>
              <span className="qualification__year">2021 - Present</span>
            </div>
          </div>
        </div>
      </div>
      <img
        src={shapeCircle}
        alt="qualification image"
        className="qualification__img"
      />
    </section>
  );
};

export default Qualification;
