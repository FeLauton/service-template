import typescriptIcon from "../../../images/typescriptIcon.svg";
import socketIoIcon from "../../../images/socketIoIcon.svg";
import nodejsIcon from "../../../images/nodejsIcon.svg";
import awsIcon from "../../../images/awsIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ProjectCard from "./ProjectCard";
import "swiper/css/pagination";
import React from "react";
import "./index.scss";
import "swiper/css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="container section__border">
        <div className="projects__container">
          <Swiper
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              1200: {
                slidesPerView: 2,
                spaceBetween: -56,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: -56,
              },
            }}
          >
            <SwiperSlide
              children={
                <ProjectCard
                  title="Web"
                  subtitle="Modern Website"
                  image={nodejsIcon}
                />
              }
            />
            <SwiperSlide
              children={
                <ProjectCard
                  title="Web"
                  subtitle="ECommerce Store"
                  image={typescriptIcon}
                />
              }
            />
            <SwiperSlide
              children={
                <ProjectCard
                  title="Design"
                  subtitle="Application Design"
                  image={socketIoIcon}
                />
              }
            />
            <SwiperSlide
              children={
                <ProjectCard
                  title="Animation"
                  subtitle="Animation Prototypes"
                  image={awsIcon}
                />
              }
            />
          </Swiper>
          <div className="swiper-buttons">
            <div className="swiper-button-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="swiper-button-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
