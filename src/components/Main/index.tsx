import type { HeadFC } from "gatsby";
import * as React from "react";
import Contact from "../Sections/Contact";
import Home from "../Sections/Home";
import Projects from "../Sections/Projects";
import Qualification from "../Sections/Qualification";
import Services from "../Sections/Services";
import Skills from "../Sections/Skills";
import Testimonial from "../Sections/Testimonial";
import "./index.scss";

const Main = () => {
  return (
    <main className="main">
      <Home />
      <Skills />
      <Qualification />
      <Projects />
      <Services />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default Main;

export const Head: HeadFC = () => <title>Fellipe Lauton</title>;
