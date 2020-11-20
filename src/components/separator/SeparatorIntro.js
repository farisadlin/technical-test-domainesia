import React from "react";
import './SeparatorIntro.css';
import SeparatorImage from "../../images/separator-intro.png";

function SeparatorIntro() {
  return (
    <div>
      <section className="separator-intro-section">
        <div className="separator-intro-container">
          <div className="separator-intro-item-left">
            <h1 className="separator-title">
              A digital web design studio creating modern & engaging online
              experiences
            </h1>
            <p className="separator-desc">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <ul className="separator-list">
              <li>We put a lot of effort in design.</li>
              <li>The most important ingredient of successful website.</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
              <li>Submit Your Organization.</li>
            </ul>
            <button className="separator-btn">Learn More <i class="fas fa-arrow-right"></i></button>
          </div>
          <div className="separator-intro-item-right">
            <img src={SeparatorImage} alt="separator-image" className="separator-img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeparatorIntro;
