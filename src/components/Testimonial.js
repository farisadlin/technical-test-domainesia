import React from 'react';
import "./Testimonial.css";

/* NOTE: Mengambil props berupa "data" yang diperoleh hasil
array dari App Component */

function Testimonial ({data}) {
  /* NOTE: Membuat variabel baru yang di dalamnya terdapat 
  hasil props yang akan dirender oleh masing-masing 
  komponen nantinya */

  const testimonialItems = data.map((item, key) => {
    return (
      <div key={key} className="item-testimonial">
        <img
          className="author-image"
          alt={item.author}
          src={item.urlAvatar}
        ></img>
        <h6 className="author-testimonial">
          <span className="author-name">{item.author}</span>
          <br />
          <span className="author-position">({item.position})</span>
        </h6>
        <p className="testimonial-detail">
          <q>{item.testimonial}</q>
        </p>
      </div>
    );
  });

  /* NOTE: Render component ke dalam bentuk UI */

  return (
    <div>
      <section className="testimonial-section" id="testimonial-section">
        <div className="title-container">
          <h1 className="testimonial-title">OUR TESTIMONIALS</h1>
          <hr />
        </div>
        <div className="testimonial-container">{testimonialItems}</div>
      </section>
    </div>
  );
}

export default Testimonial;
