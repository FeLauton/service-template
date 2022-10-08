import type { HeadFC } from "gatsby";
import * as React from "react";
import "remixicon/fonts/remixicon.css";
import "../styles/main.scss";

const IndexPage = () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLink = document.querySelectorAll(".nav__link");

  /*===== MENU SHOW =====*/
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  /*===== MENU HIDDEN =====*/
  if (navClose && navMenu) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  /*===== REMOVE MENU MOBILE =====*/
  const linkAction = () => {
    if (navMenu) {
      navMenu.classList.remove("show-menu");
    }
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Fellipe Lauton
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="ri-home-line"></i>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="ri-trophy-line"></i>
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#qualification" className="nav__link">
                  <i className="ri-book-open-line"></i>
                  Qualification
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="ri-briefcase-line"></i>
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="ri-image-line"></i>
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="ri-chat-3-line"></i>
                  Contact
                </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>
          <div className="nav__buttons">
            {/* <i className="ri-moon-line change-theme" id="theme-button"></i> */}
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home section" id="home"></section>

        {/* <!--==================== SKILLS ====================--> */}
        <section className="skills section" id="skills"></section>

        {/* <!--==================== QUALIFICATION ====================--> */}
        <section className="qualification section" id="qualification"></section>

        {/* <!--==================== SERVICES ====================--> */}
        <section className="services section" id="services"></section>

        {/* <!--==================== PROJECTS ====================--> */}
        <section className="projects section" id="projects"></section>

        {/* <!--==================== TESTIMONIAL ====================--> */}
        <section className="testimonial section"></section>

        {/* <!--==================== CONTACT ====================--> */}
        <section className="contact section" id="contact"></section>
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer"></footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fellipe Lauton</title>;
