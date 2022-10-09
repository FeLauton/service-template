import * as React from "react";
import cssIcon from "../../../assets/images/cssIcon.svg";
import gitIcon from "../../../assets/images/gitIcon.svg";
import htmlIcon from "../../../assets/images/htmlIcon.svg";
import javascriptIcon from "../../../assets/images/javascriptIcon.svg";
import reactIcon from "../../../assets/images/reactIcon.svg";
import "./index.scss";

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
            <div className="skills__data">
              <div className="skills__blob">
                <img src={htmlIcon} alt="skills image" />
              </div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
            <div className="skills__data">
              <div className="skills__blob">
                <img src={cssIcon} alt="skills image" />
              </div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
            <div className="skills__data">
              <div className="skills__blob">
                <img src={javascriptIcon} alt="skills image" />
              </div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
            <div className="skills__data">
              <div className="skills__blob">
                <img src={reactIcon} alt="skills image" />
              </div>
              <h3 className="skills__name">React</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>
            <div className="skills__data">
              <div className="skills__blob">
                <img src={gitIcon} alt="skills image" />
              </div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-braces-line"></i>Backend Developer
          </h3>
          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <img src="" alt="skills image" />
              </div>
              <h3 className="skills__name"></h3>
              <span className="skills__subtitle"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
