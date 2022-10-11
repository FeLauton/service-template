import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";
import "swiper/css/pagination";
import React from "react";
import shapeCircle from "../../../images/shape-circle.svg";
import "./index.scss";
import "swiper/css";

const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="container section__border">
        <div className="testimonial__container">
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
          >
            <SwiperSlide
              children={
                <TestimonialCard
                  name="Júlio César"
                  reference="Scrum Master"
                  testimonial="Working with Chris is to give a good impression, I carry out my
                project at a good cost, with excellent quality and attention.
                Great service and recommended."
                />
              }
            />
            <SwiperSlide
              children={
                <TestimonialCard
                  name="André Lemos"
                  reference="Developer"
                  testimonial="Working with Chris is to give a good impression, I carry out my
                project at a good cost, with excellent quality and attention.
                Great service and recommended."
                />
              }
            />
            <SwiperSlide
              children={
                <TestimonialCard
                  name="Anelise"
                  reference="UX/UI Designer"
                  testimonial="Working with Chris is to give a good impression, I carry out my
                project at a good cost, with excellent quality and attention.
                Great service and recommended."
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
      <img
        src={shapeCircle}
        alt="testimonial image"
        className="testimonial__img"
      />
    </section>
  );
};

export default Testimonial;
