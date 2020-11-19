import React from 'react';
import "./CustomerSection.css";
import DataCustomer from './data/datacustomer.json'

function CustomerSection() {
    return (
      <div>
        <section className="customer-section" id="customer-section">
          <div className="title-container">
            <h1 className="customer-title">OUR CUSTOMERS</h1>
            <hr />
          </div>
          <div className="customer-container">
                {DataCustomer.map((item, key) => {return (
                    <img className="customer-img" key={key} src={item.urlLogo} alt={item.name}></img>
                )})}
          </div>
        </section>
      </div>
    );
}

export default CustomerSection
