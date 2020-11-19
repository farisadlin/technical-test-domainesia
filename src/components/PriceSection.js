import React, { useState, useEffect } from "react";
import "./PriceSection.css";
import DataPricing from "./data/datapricing.json";

function Price() {
  const [domain, setDomain] = useState(null);
  const [sshAccess, setSshAccess] = useState(null);

  useEffect(() => {
    setDomain(DataPricing.free_domain);
    setSshAccess(DataPricing.ssh_access);
  }, []);

  return (
    <div>
      <section className="price-section" id="price-section">
        <div className="title-container">
          <h1 className="price-title">OUR PRICING</h1>
          <hr />
        </div>
        <div className="price-container">
          {/* Mengambil data JSON kemudian menaruh ke dalam masing-masing item gridbox */}
          {DataPricing.map((item, key) => {
            return (
              <div key={key} className="item-price">
                <h6>{item.hosting_type}</h6>
                <div className="price-box">
                  <p className="title-price">
                    <sup>Rp</sup>{" "}
                    <span id="title-price-detail">
                      {item.price.toLocaleString("id-ID")}
                    </span>
                  </p>
                  <p className="duration-price">per {item.duration}</p>
                </div>
                <div className="item-box-align">
                  <span className="item-right-align">
                    {item.capacity_space}
                  </span>
                  <span className="item-left-align">{item.capacity_type}</span>
                </div>
                <div className="item-box-align">
                  <span className="item-right-align">
                    {item.bandwidth_capacity}
                  </span>
                  <span className="item-left-align">{item.bandwidth_type}</span>
                </div>
                <div className="item-box-align">
                  <span className="item-right-align">
                    {item.website_capacity}
                  </span>
                  <span className="item-left-align">{item.website_type}</span>
                </div>
                <div className="item-box-align">
                  <span className="item-right-align">
                    {item.email_capacity}
                  </span>
                  <span className="item-left-align">{item.email_type}</span>
                </div>
                <div className="item-box-align">
                  <span className="item-right-align">{item.support_type}</span>
                  <span className="item-left-align">
                    {item.support_capacity}
                  </span>
                </div>
                <div
                  className={
                    item.free_domain && item.ssh_access
                      ? "extra-flexbox"
                      : "extra-flexbox-hidden"
                  }
                >
                  <span className="text-center">Free Domain</span>
                  <span className="text-center">
                    SSH Access{" "}
                    <i class="far fa-question-circle">
                      <span className="domain-policy-tooltip">
                        {item.domain_policy}
                      </span>
                    </i>
                  </span>
                </div>
                <button className="price-btn">Order</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Price;
