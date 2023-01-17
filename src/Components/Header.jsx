import React from "react";
import "../assets/css/style.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import Logo from "../assets/img/netsparked.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div classNameName="Main-menu">
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="header">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="nav-link scrollto">
              <img src={Logo} alt="" />
              </Link>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                <Link to="/" className="nav-link scrollto">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link scrollto">About</Link>
                </li>
                <li>
                <Link to="/services" className="nav-link scrollto">Services</Link>
                </li>
                <li>
                <Link to="/portfolio" className="nav-link scrollto">Portfolio</Link>
                 </li>
                <li>
                <Link to="/contact-us" className="getstarted"> Get Started</Link>
                 </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;