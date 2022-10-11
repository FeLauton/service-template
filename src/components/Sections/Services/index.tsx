import React from "react";
import "./index.scss";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid section__border">
        <ServiceCard
          title="Middleware"
          classIcon="ri-layout-4-line"
          description="Services that provides the best quality and at the request of the
            client, whit professional work and customer support"
        />
        <ServiceCard
          title="Middleware"
          classIcon="ri-code-line"
          description="Services that provides the best quality and at the request of the
            client, whit professional work and customer support"
        />
        <ServiceCard
          title="Middleware"
          classIcon="ri-quill-pen-line"
          description="Services that provides the best quality and at the request of the
            client, whit professional work and customer support"
        />
      </div>
    </section>
  );
};

export default Services;
