import React, { useState, useEffect } from "react";
import "./PriceSection.css";

/* NOTE: Mengambil props berupa "data" yang diperoleh hasil
array dari App Component */

function Price({ data }) {
  /* NOTE: Menentukan state yang akan digunakan menggunakan
  React Hooks. Alasan menggunakan React Hooks dibandingkan 
  Class-based Component, kodenya lebih efisien dan mudah dibaca
  */

  const [domain, setDomain] = useState(null);
  const [sshAccess, setSshAccess] = useState(null);

  /* NOTE: Mengambil data API yang diberikan melalui App Component
  kemudian menentukan apakah true atau false sesuai dengan 
  data yang diterima menggunakan React Hooks */

  useEffect(() => {
    setDomain(data.free_domain);
    setSshAccess(data.ssh_access);
  }, []);

  /* NOTE: Melakukan format harga 
  ke dalam bentuk sesuai titik angka rupiah  */

  const formatPrice = (price) => {
    return Intl.NumberFormat("id-ID").format(price);
  };

  /* NOTE: Menghitung harga asli sebelum jumlahnya 
  dipotong oleh diskon kemudian format harganya 
  ke dalam bentuk sesuai titik angka rupiah */

  const discountedPrice = (price) => {
    const discount = 0.8;
    return Intl.NumberFormat("id-ID").format(price / discount);
  };

  /* 
  NOTE: Mengambil data JSON kemudian menaruh ke dalam 
  masing-masing item gridbox */

  const infoPrice = data.map((item, key) => {
    /* NOTE: Jika judul paket hosting ialah "Super", 
    maka salah satu item pada Gridbox akan berubah tidak
    mengikuti item pada gridbox lainnya */

    const recommendedStyle =
      item.hosting_type === "Super" ? (
        <div className="recommended-price">
          <p className="recommended-title">We Recommend</p>
        </div>
      ) : (
        ""
      );

    /* NOTE: Jika judul paket hosting ialah "Super", 
    maka salah satu item pada Gridbox akan berubah tidak
    mengikuti item pada gridbox lainnya */

    const discountPrice =
      item.hosting_type === "Super" ? (
        <div className="price-box">
          <p className="title-price">
            <span id="title-price-discount">{discountedPrice(item.price)}</span>
          </p>
          <div className="discount-price-container">
            <sup id="discount-currency">Rp</sup>{" "}
            <span id="title-price-detail">{formatPrice(item.price)}</span>
            <p className="discount-price-detail">per {item.duration}</p>
          </div>
        </div>
      ) : (
        <div className="price-box">
          <p className="title-price">
            <sup>Rp</sup> <span>{formatPrice(item.price)}</span>
            <p className="duration-price">per {item.duration}</p>
          </p>
        </div>
      );

      /* NOTE: Jika paket hosting memiliki free domain maka item Gridbox akan menampilkan
      tulisan Free Domain, Term & Policy, dan SSH Access */

      const isFreeDomain =
        item.free_domain && item.ssh_access
          ? "extra-flexbox"
          : "extra-flexbox-hidden";

    /* NOTE: Render component ke dalam bentuk UI */

    return (
      <div key={key} className="item-price">
        {recommendedStyle}
        <h6>{item.hosting_type}</h6>
        {discountPrice}
        <div className="item-box-align">
          <span className="item-right-align">{item.capacity_space}</span>
          <span className="item-left-align">{item.capacity_type}</span>
        </div>
        <div className="item-box-align">
          <span className="item-right-align">{item.bandwidth_capacity}</span>
          <span className="item-left-align">{item.bandwidth_type}</span>
        </div>
        <div className="item-box-align">
          <span className="item-right-align">{item.website_capacity}</span>
          <span className="item-left-align">{item.website_type}</span>
        </div>
        <div className="item-box-align">
          <span className="item-right-align">{item.email_capacity}</span>
          <span className="item-left-align">{item.email_type}</span>
        </div>
        <div className="item-box-align">
          <span className="item-right-align">{item.support_type}</span>
          <span className="item-left-align">{item.support_capacity}</span>
        </div>
        <div className={isFreeDomain}>
          <span className="text-center">
            Free Domain {" "}
            <i class="far fa-question-circle">
              <span className="domain-policy-tooltip">
                {item.domain_policy}
              </span>
            </i>
          </span>
          <span className="text-center">SSH Access</span>
        </div>
        <button className="price-btn">Order</button>
      </div>
    );
  });

  return (
    <div>
      <section className="price-section" id="price-section">
        <div className="title-container">
          <h1 className="price-title">OUR PRICING</h1>
          <hr />
        </div>
        <div className="price-container">{infoPrice}</div>
      </section>
    </div>
  );
}

export default Price;
