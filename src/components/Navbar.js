import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../images/white-logo.png";

import { Button } from "./Button";

/* NOTE: Mengambil props berupa "data" yang diperoleh hasil
array dari App Component */

function Navbar() {
  /* NOTE: Menentukan state yang akan digunakan menggunakan
  React Hooks. Alasan menggunakan React Hooks dibandingkan 
  Class-based Component, kodenya lebih efisien dan mudah dibaca
  */

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  /* NOTE: Membuat fungsi tombol tutup dan buka Navigation Bar saat 
  sedang berada di mode mobile responsive */

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /* NOTE: Membuat variabel untuk menunjukkan 
  menu Navigation Bar di mode mobile responsive
  muncul saat lebar layar kurang dari 1200px */

  const showButton = () => {
    if (window.innerWidth <= 1200) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  /* NOTE: Mengaktivasi variabel menu Navigation Bar 
  setelah melakukan render pada component  */

  useEffect(() => {
    showButton();
  }, []);

  /* NOTE: Melakukan event handler saat mengecilkan layar kurang
  dari 1200px */
  window.addEventListener("resize", showButton);

  return (
    /* NOTE: Render component ke dalam bentuk UI */
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
                href="#services-section"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hosting
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
