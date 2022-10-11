import * as React from "react";
import Home from "../Sections/Home";
import Skills from "../Sections/Skills";
import Qualification from "../Sections/Qualification";
import Services from "../Sections/Services";
import Projects from "../Sections/Projects";
import Testimonial from "../Sections/Testimonial";
import Contact from "../Sections/Contact";
import "./styles.scss";

const Main = () => {
  return (
    <main>
      <Home />
      <Skills />
      <Qualification />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default Main;
