import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-section">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2 id="footer-desc-detail-header-1">Contact</h2>
              <p className="footer-desc">
                HostingKite Company<br />
                Kaliurang Street Number 44 Yogyakarta 55581
                <br />
                Yogyakarta, Indonesia
              </p>
              <h2 id="footer-desc-detail-header-2">Customer Service</h2>
              <p className="footer-desc">
                Phone: (0274) 999999
                <br />
                IM: 085742424242
                <br />
                sales@hostingkite.com
              </p>
            </div>
            <div className="footer-link-items">
              <h2>Domain</h2>
              <a href="#price-section">Price List</a>
              <a href="#">Domain Register</a>
              <a href="#">Domain Transfer</a>
              <a href="#">Domain Reseller</a>
              <a href="#">Requirements</a>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Hosting</h2>
              <a href="#">Web Hosting</a>
              <a href="#">Web Hosting Indonesia</a>
              <a href="#">Web Hosting Wordpress</a>
              <a href="#">Virtual Private Server</a>
              <a href="#">SSL Certificate</a>
              <a href="#">Web Apps</a>
              <a href="#">Hosting Migration</a>
            </div>
            <div className="footer-link-items">
              <h2>About Us</h2>
              <a href="#">About</a>
              <a href="#">Special Promotion</a>
              <a href="#">Career</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <div className="social-icons">
                <a className="social-icon-link" href="#" target="_blank">
                  <div className="social-icon-link-container">
                    <i class="fab fa-facebook fa-2x"></i>
                    <span className="social-icon-link-text">Facebook</span>
                  </div>
                </a>
                <a className="social-icon-link" href="#" target="_blank">
                  <div className="social-icon-link-container">
                    <i class="fab fa-instagram fa-2x"></i>
                    <span className="social-icon-link-text">Instagram</span>
                  </div>
                </a>
                <a className="social-icon-link" href="#" target="_blank">
                  <div className="social-icon-link-container">
                    <i class="fab fa-youtube fa-2x"></i>
                    <span className="social-icon-link-text">Youtube</span>
                  </div>
                </a>
                <a className="social-icon-link" href="#" target="_blank">
                  <div className="social-icon-link-container">
                    <i class="fab fa-twitter fa-2x"></i>
                    <span className="social-icon-link-text">Twitter</span>
                  </div>
                </a>
                <a className="social-icon-link" href="#" target="_blank">
                  <div className="social-icon-link-container">
                    <i class="fab fa-linkedin fa-2x"></i>
                    <span className="social-icon-link-text">LinkedIn</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-line" />
        <span className="footer-copyright">Copyright &#169; 2020 HostingKite Company</span>
      </section>
    </div>
  );
}

export default Footer;