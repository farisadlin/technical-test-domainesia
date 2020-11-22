import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../images/white-logo.png";

import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1200) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#hero-section">
            <img className="navbar-logo" src={Logo} alt="HostingKite"></img>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#hero-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#services-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Service
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#testimonial-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Testimonial
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#price-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Price
              </a>
            </li>

            <li>
              <a
                href="#"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
