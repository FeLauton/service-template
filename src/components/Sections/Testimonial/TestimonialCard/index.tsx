import React from "react";
import "./index.scss";

type TestimonialCardProps = {
  name: string;
  reference: string;
  testimonial: string;
};

const TestimonialCard = ({
  name,
  reference,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <div className="testimonial__content">
      <p className="testimonial__description">{`"${testimonial}"`}</p>
      <div>
        <h3 className="testimonial__name">{name}</h3>
        <span className="testimonial__subtitle">{reference}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
