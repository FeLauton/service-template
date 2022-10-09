import type { HeadFC } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import "../assets/styles/main.scss";
import Footer from "../components/Footer";
import Main from "../components/Main";

const IndexPage = () => {
  const [navMenuShow, setNavMenuShow] = useState<boolean>(false);
  const navLink = document.querySelectorAll(".nav__link");

  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (navToggle && navMenu) {
      navMenuShow
        ? navMenu.classList.add("show-menu")
        : navMenu.classList.remove("show-menu");
    }
  }, [navMenuShow]);

  /*===== REMOVE MENU MOBILE =====*/
  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");

    if (navMenu) {
      navMenu.classList.remove("show-menu");
    }
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Fellipe Lauton
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link"
                  onClick={() => navMenuShow && setNavMenuShow(!navMenuShow)}
                >
                  <i className="ri-home-line"></i>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className="nav__link"
                  onClick={() => navMenuShow && setNavMenuShow(!navMenuShow)}
                >
                  <i className="ri-trophy-line"></i>
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#qualification"
                  className="nav__link"
                  onClick={() => navMenuShow && setNavMenuShow(!navMenuShow)}
                >
                  <i className="ri-book-open-line"></i>
                  Qualification
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  className="nav__link"
                  onClick={() => navMenuShow && setNavMenuShow(!navMenuShow)}
                >
                  <i className="ri-briefcase-line"></i>
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#projects"
                  className="nav__link"
                  onClick={() => navMenuShow && setNavMenuShow(!navMenuShow)}
                >
                  <i className="ri-image-line"></i>
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className="nav__link"
                  onClick={() => navMenuShow && setNavMenuShow(!navMenuShow)}
                >
                  <i className="ri-chat-3-line"></i>
                  Contact
                </a>
              </li>
            </ul>

            <div
              className="nav__close"
              id="nav-close"
              onClick={() => navMenuShow && setNavMenuShow(!navMenuShow)}
            >
              <i className="ri-close-line"></i>
            </div>
          </div>
          <div className="nav__buttons">
            {/* <i className="ri-moon-line change-theme" id="theme-button"></i> */}
            <div
              className="nav__toggle"
              id="nav-toggle"
              onClick={() => setNavMenuShow(!navMenuShow)}
            >
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>
      <Main />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fellipe Lauton</title>;
