import React from "react";
import './SeparatorIntro.css';
import SeparatorImage from "../../images/separator-intro.png";

function SeparatorIntro() {
  /* NOTE: Render component ke dalam bentuk UI */

  return (
    <div>
      <section className="separator-intro-section">
        <div className="separator-intro-container">
          <div className="separator-intro-item-left">
            <h1 className="separator-title">
              We help, as much or as little as you'd like, with perfecting every
              aspect of your website.
            </h1>
            <p className="separator-desc">
              The point is that HostingKite covers everything you could possibly
              need from a host. If you start with us, you’ll never need to
              switch to someone else.
            </p>
            <ul className="separator-list">
              <li>
                Enjoy perfect integration with WordPress and install it in one
                click.
              </li>
              <li>
                Increase your popularity with optional SEO & marketing services.
              </li>
              <li>
                Monitor your site with an integrated dashboard and included
                analytics.
              </li>
              <li>Receive a FREE domain, customizable theme, and more.</li>
            </ul>
            <button className="separator-btn">
              Learn More <i class="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="separator-intro-item-right">
            <img
              src={SeparatorImage}
              alt="separator-image"
              className="separator-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeparatorIntro;
