import React from "react";
import "./Services.css";

/* NOTE: Mengambil props berupa "data" yang diperoleh hasil
array dari App Component */

function Services({ data }) {
  /* NOTE: Membuat variabel baru yang di dalamnya terdapat 
  hasil props yang akan dirender oleh masing-masing 
  komponen nantinya */

  const servicesItems = data.map((item, key) => {
    return (
      <div key={key} className="item-services">
        <div className="item-circle">
          <i class={item.urlIcon}></i>
        </div>
        <h6 className="item-title">{item.title}</h6>
        <p className="item-desc">{item.desc}</p>
      </div>
    );
  });

  /* NOTE: Render component ke dalam bentuk UI */

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
          {servicesItems}
        </div>
      </section>
    </div>
  );
}

export default Services;
