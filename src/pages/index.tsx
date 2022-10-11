import React from "react";
import type { HeadFC } from "gatsby";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "../assets/styles/main.scss";
import "remixicon/fonts/remixicon.css";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Fellipe Lauton</title>;
