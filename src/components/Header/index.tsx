import React, { useState } from "react";
import "../../assets/styles/main.scss";
import "./styles.scss";

const Header = () => {
  const [navMenuShow, setNavMenuShow] = useState<boolean>(false);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav_logo">
          Fellipe Lauton
        </a>
        <div
          className={navMenuShow ? "show__menu nav__menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link"
                onClick={() => setNavMenuShow(false)}
              >
                <i className="ri-home-line"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={() => setNavMenuShow(false)}
              >
                <i className="ri-trophy-line"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                className="nav__link"
                onClick={() => setNavMenuShow(false)}
              >
                <i className="ri-book-open-line"></i>
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className="nav__link"
                onClick={() => setNavMenuShow(false)}
              >
                <i className="ri-briefcase-line"></i>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link"
                onClick={() => setNavMenuShow(false)}
              >
                <i className="ri-image-line"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={() => setNavMenuShow(false)}
              >
                <i className="ri-chat-3-line"></i>
                Contact
              </a>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setNavMenuShow(false)}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav__buttons">
          <i className="ri-moon-line change-theme" id="theme-button"></i>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setNavMenuShow(true)}
          >
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
