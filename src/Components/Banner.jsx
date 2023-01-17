import React from "react";
import Slider from "../assets/img/hero-img.png";

const Banner = () => {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Connecting Business Need With Netsparked.
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We offer web design,web development,server support,and digital marketing services.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-lg-start">
                  <a
                    href="#about"
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get In Touch With Us</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={Slider} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}
    </>
  );
};
export default Banner;
