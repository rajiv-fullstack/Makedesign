import React from "react";
import Logo from "../assets/img/netsparked.png";
const Footer = () => {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <img src="assets/img/logo.png" alt="" />
                 <span>
                <img src={Logo} />
             </span>
                </a>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra. Justo
                  eget nada terra videa magna derita valies darta donna mare
                  fermentum iaculis eu non diam phasellus.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                F-237 Phase 8-B, Industrial Area <br />
                Sector 74,Sahibzada Ajit Singh Nagar
                  <br />
                  Punjab IN 160070 <br />
                  <br />
                  <strong>Phone:</strong> +91-172-4606237
                  <br />
                  <strong>Email:</strong> info@etsparked.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
             Netsparked
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  );
};

export default Footer;
