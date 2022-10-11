import shapeCircle from "../../../images/shape-circle.svg";
import shapeWaves from "../../../images/shape-waves.svg";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./index.scss";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            Hi, I’m Fellipe <br />
            Full Stack Developer <br />
            Based In Brazil <br />
          </h1>
          <div className="home__blob grid">
            <div className="home__perfil">
              <StaticImage
                src="../../../images/perfil.png"
                alt="home perfil"
                className=""
              />
            </div>
            <img src={shapeWaves} alt="" className="home__shape-waves" />
            <img src={shapeCircle} alt="" className="home__shape-circle" />
          </div>
          <ul className="home__social">
            <a
              href="https://linkedin.com/in/fellipe-lauton"
              className="home__social-link"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href="https://github.com/felauton" className="home__social-link">
              <i className="ri-github-line"></i>
            </a>
          </ul>
        </div>
        <div className="home__info">
          <div>
            <h3 className="home__info-title">BIOGRAPHY</h3>
            <p className="home_info-description">
              Hi, I'm Fellipe, a Full Stack Developer who believes anything is
              possible when it comes to programming. Based in Brazil.
            </p>
          </div>
          <div>
            <h3 className="home__info-title">CONTACT</h3>
            <p className="home_info-description">
              Minas Gerais, Brazil <br />
              lipelauton@gmail.com <br />
              +55 35 98437-9484 <br />
            </p>
          </div>
          <div>
            <h3 className="home__info-title">SERVICES</h3>
            <p className="home_info-description">
              Frontend Developer <br />
              Backend Developer <br />
              <br />
            </p>
          </div>
        </div>
        <div className="home__info">
          <div>
            <h3 className="home__info-title">YEARS OF EXPERIENCE</h3>
            <p className="home_info-number">01+</p>
          </div>
          <div>
            <h3 className="home__info-title">COMPLETED PROJECTS</h3>
            <p className="home_info-number">04+</p>
          </div>
          <div>
            <h3 className="home__info-title">COMPANIES WORKED</h3>
            <p className="home_info-number">01+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
