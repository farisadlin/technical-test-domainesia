import React from 'react';
import "./Testimonial.css";

function Testimonial ({data}) {
        return (
          <div>
            <section className="testimonial-section" id="testimonial-section">
              <div className="title-container">
                <h1 className="testimonial-title">TESTIMONIALS</h1>
                <hr />
              </div>
              <div className="testimonial-container">
              {/* Mengambil data JSON melalui API dari Contentful kemudian menaruh ke dalam masing-masing item gridbox */}
              {data.map((item,key) => {
                  return (
                    <div key={key} className="item-testimonial">
                      <img className="author-image" alt={item.author} src={item.urlAvatar}></img>
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
              })}
              </div>
            </section>
          </div>
        );

    }

export default Testimonial;
