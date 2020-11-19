import React from "react";
import "./Services.css";
import DataServices from "./data/dataservices.json";

function Services() {
  return (
    <div>
      <section className="services-section" id="services-section">
        <div className="title-container">
          <h1 className="services-title">OUR SERVICES</h1>
          <hr />
          <p className="services-desc">
            We are one of the easiest website hosting platforms to use, and
            remain committed to providing our customers with one of the best
            hosting solutions on the market.
          </p>
        </div>
        <div className="services-container">
          {/* Mengambil data JSON kemudian menaruh ke dalam masing-masing item gridbox */}
          {DataServices.map((item, key) => {
            return (
              <div key={key} className="item-services">
                <div className="item-circle">
                  <i class={item.urlIcon}></i>
                </div>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Services;