import * as React from "react";
import "./index.scss";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid section__border">
        <div className="services__card">
          <i className="ri-layout-4-line"></i>
          <h2 className="services__title">
            UI/UX <br />
            Designer
          </h2>
          <p className="services__description">
            Services that provides the best quality and at the request of the
            client, whit professional work and customer support
          </p>
          <div className="services__border"></div>
        </div>
        <div className="services__card">
          <i className="ri-code-line"></i>
          <h2 className="services__title">
            UI/UX <br />
            Designer
          </h2>
          <p className="services__description">
            Services that provides the best quality and at the request of the
            client, whit professional work and customer support
          </p>
          <div className="services__border"></div>
        </div>
        <div className="services__card">
          <i className="ri-quill-pen-line"></i>
          <h2 className="services__title">
            UI/UX <br />
            Designer
          </h2>
          <p className="services__description">
            Services that provides the best quality and at the request of the
            client, whit professional work and customer support
          </p>
          <div className="services__border"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
