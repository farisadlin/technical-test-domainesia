import React from 'react';
import "./CustomerSection.css";

function CustomerSection({data}) {
  return (
    <div>
      <section className="customer-section" id="customer-section">
        <div className="title-container">
          <h1 className="customer-title">OUR CUSTOMERS</h1>
          <hr />
        </div>
        <div className="customer-container">
          {data.map((item, key) => {
            return (
              <img
                className="customer-img"
                key={key}
                src={item.urlLogo}
                alt={item.name}
              ></img>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default CustomerSection
