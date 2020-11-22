import React from "react";
import "./CustomerSection.css";

/* NOTE: Mengambil props berupa "data" yang diperoleh hasil
array dari App Component */

function CustomerSection({ data }) {
  /* NOTE: Membuat variabel baru yang di dalamnya terdapat 
  hasil props yang akan dirender oleh masing-masing 
  komponen nantinya */

  const customerItems = data.map((item, key) => {
    return (
      <img
        className="customer-img"
        key={key}
        src={item.urlLogo}
        alt={item.name}
      ></img>
    );
  });

  /* NOTE: Render component ke dalam bentuk UI */

  return (
    <div>
      <section className="customer-section" id="customer-section">
        <div className="title-container">
          <h1 className="customer-title">OUR CUSTOMERS</h1>
          <hr />
        </div>
        <div className="customer-container">{customerItems}</div>
      </section>
    </div>
  );
}

export default CustomerSection;
