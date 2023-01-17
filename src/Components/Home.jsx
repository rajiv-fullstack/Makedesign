import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "../assets/img/about.jpg";
import Features from "../assets/img/features-3.png";
import Portfolione from "../assets/img/portfolio/portfolio1.png";
import Portfoliotwo from "../assets/img/portfolio/portfolio2.png";
import Portfoliothree from "../assets/img/portfolio/portfolio3.png";
import Portfoliofour from "../assets/img/portfolio/portfolio4.png";
import Portfoliofive from "../assets/img/portfolio/portfolio5.png";
import Portfoliosix from "../assets/img/portfolio/portfolio6.png";
import Testimonialsone from "../assets/img/testimonials/testimonials-1.jpg";
import Testimonialstwo from "../assets/img/testimonials/testimonials-2.jpg";
import Testimonialsthree from "../assets/img/testimonials/testimonials-3.jpg";
import Testimonialsfour from "../assets/img/testimonials/testimonials-4.jpg";
import Testimonialsfive from "../assets/img/testimonials/testimonials-5.jpg";
import Testimonialssix from "../assets/img/testimonials/up.png";
import Clientone from "../assets/img/clients/client-1.png";
import Clienttwo from "../assets/img/clients/client-2.png";
import Clientthree from "../assets/img/clients/client-3.png";
import Clientfour from "../assets/img/clients/client-4.png";
import Clientfive from "../assets/img/clients/client-5.png";
import Clientsix from "../assets/img/clients/client-6.png";
import Clientseven from "../assets/img/clients/client-7.png";


import Footer from "../Components/Footer";
import { render } from "@testing-library/react";


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">

                  <h2>OUR COMPANY PROFILE</h2>
                  <p>
                    We providing Software Development, Mobile Application Development and Digital Marketing services to businesses worldwide. We embrace the latest technologies to deliver solutions that address our clients’ business challenges. We focus on resolving the IT conundrum for our clients thereby enabling them to focus on their core business strengths.
                  </p>
                  <div className="text-lg-start">
                    <a
                      href="#"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={About} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>OUR SERVICES</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 pb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-box blue">
                  <i className="ri-discuss-line icon"></i>
                  <h3>PYTHON/DJANGO DEVELOPMENT</h3>
                  <p>
                    We have a specialization in Python/Django Development and use it on many govt projects.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 pb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-box orange">
                  <i className="ri-discuss-line icon"></i>
                  <h3>CLOUD/SAAS DEVELOPMENT</h3>
                  <p>
                    Built on cloud means infrastructure you can trust, expertise-rich solutions, and a full range of business applications to help you drive enterprise transformation.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 pb-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-box green">
                  <i className="ri-discuss-line icon"></i>
                  <h3>WEB/E-COMMERCE DEVELOPMENT</h3>
                  <p>
                    We can develop a quality based website or transfer your existing website to the newer technology.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-box red">
                  <i className="ri-discuss-line icon"></i>
                  <h3>SERVER/CLOUD SUPPORT</h3>
                  <p>
                    We provide knowledgeable, certified, in-house staff with technical experiences ranging from 3 to 20 years.Unlimited 24×7 coverage.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-box purple">
                  <i className="ri-discuss-line icon"></i>
                  <h3>CREATIVE DESIGN</h3>
                  <p>
                    Creative Design There are many tools, which can be used for making the website designed into a proper manner.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="service-box pink">
                  <i className="ri-discuss-line icon"></i>
                  <h3>WORDPRESS EXPERTS</h3>
                  <p>
                    We pride ourselves on being a leading WordPress solutions provider while still being small and agile enough to truly partner with our clients.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}
        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <div>
                    <span className="purecounter">235</span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <div>
                    <span className="purecounter">1600</span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i
                    className="bi bi-headset"
                    style={{ color: "#15be56;" }}
                  ></i>
                  <div>
                    <span className="purecounter">1465</span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-people" style={{ color: "#bb0852;" }}></i>
                  <div>
                    <span className="purecounter">15</span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}
        {/* <!-- Feature Icons --> */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row feature-icons" data-aos="fade-up">
              <h3>WHY CHOOSE OUR SERVICES</h3>

              <div className="row">
                <div
                  className="col-xl-4 text-center"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={Features} className="img-fluid p-4" alt="" />
                </div>

                <div className="col-xl-8 d-flex content">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="ri-line-chart-line"></i>
                      <div>
                        <h4>24/7 SUPPORT</h4>
                        <p>
                          At Netsparked Web Design, our client relationships do not start at 9am and end at 6am – they stay and we continue to deliver real time support and the quality services that they deserve.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="ri-stack-line"></i>
                      <div>
                        <h4>CUSTOMER RELATIONSHIP</h4>
                        <p>
                          Not only we provide real time support, we also focus on mastering customer relationship strategies. We strive to maintain healthy relationships with our clients.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="ri-brush-4-line"></i>
                      <div>
                        <h4>CREATIVE TEAM</h4>
                        <p>
                          At Netsparked Web Design, we have the best designers, developers, quality analysts and project managers. We follow agile processes to ensure quality and timely delivery as required by the client.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="ri-magic-line"></i>
                      <div>
                        <h4>COST EFFECTIVENESS</h4>
                        <p>
                        Based on your ROI needs and goals, we offer affordable and quality website design services that will sharply reflect your businesses.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="ri-command-line"></i>
                      <div>
                        <h4>TIMELY DELIVERY</h4>
                        <p>
                        Not only we worked hard to complete the project work successfully, we also believe in timely delivery of the work done with no flaw as per the comfort of the client.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <i className="ri-radar-line"></i>
                      <div>
                        <h4>RESULTS DRIVEN</h4>
                        <p>
                        We believe in laying firm foundations with the right technology that result in prominent website designs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Feature Icons --> */}
          </div>
        </section>
        {/* <!-- End Features Section --> */}
        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Portfolio</h2>
              <p>Check our latest work</p>
            </header>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row gy-4 portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={Portfolione} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Trustedd</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href={Portfolione}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="App 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src={Portfoliotwo} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Ringspo Engagement Ring and Diamond</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliotwo}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Web 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={Portfoliothree} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Aesthetics Lab</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliothree}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="App 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src={Portfoliofour} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Bandevoted Services</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliofour}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Card 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src={Portfoliofive} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Quebecphotobooth</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliofive}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Web 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={Portfoliosix} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Govt PG College Una</h4>
                    <p></p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliosix}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="App 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Card 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Card 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Web 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}
        {/* <!-- ======= Testimonials Section ======= --> */}
        <div className="testimonials-wrap">
          <div className="container">
            <div className="heading-section">
              <span className="sub-heading">Testimonials</span>
              <h2>Happy Clients & Feedbacks</h2>
            </div>
            <div className="carousel-testimonial owl-carousel">
              <div className="item">
                <div className="testimonial-box d-flex">
                <div class="flex-container">
                  <div className="user-img">
                    <img src={Testimonialsone} />
                  </div>
                  <div className="user-img2">
                    <img src={Testimonialssix} />
                  </div>
                  </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                <div class="flex-container">
                  <div className="user-img">
                    <img src={Testimonialstwo} />
                  </div>
                  <div className="user-img2">
                    <img src={Testimonialssix} />
                  </div>
                  </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Rodel Golez</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                <div class="flex-container">
                  <div className="user-img">
                    <img src={Testimonialsthree} />
                  </div>
                  <div className="user-img2">
                    <img src={Testimonialssix} />
                  </div>
                </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Ken Bosh</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                <div class="flex-container">
                  <div className="user-img">
                    <img src={Testimonialsfour} />
                  </div>
                  <div className="user-img2">
                    <img src={Testimonialssix} />
                  </div>
                </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Racky Henderson</p>
                    <span className="position">Father</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                <div class="flex-container">
                  <div className="user-img">
                    <img src={Testimonialsfive} />
                  </div>
                  <div className="user-img2">
                    <img src={Testimonialssix} />
                  </div>
                </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Henry Dee</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Rodel Golez</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Ken Bosh</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Racky Henderson</p>
                    <span className="position">Father</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Henry Dee</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" class="clients">

          <div class="container" data-aos="fade-up">

            <header class="section-header">
              <h2>Our Clients</h2>
              <p>Temporibus omnis officia</p>
            </header>

            <div class="clients-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class=""><img src={Clientone} class="img-fluid" /></div>
                <div class=""><img src={Clienttwo} class="img-fluid" /></div>
                <div class=""><img src={Clientthree} class="img-fluid" /></div>
                <div class=""><img src={Clientfour} class="img-fluid" /></div>
                <div class=""><img src={Clientfive} class="img-fluid" /></div>
                <div class=""><img src={Clientsix} class="img-fluid" /></div>
                <div class=""><img src={Clientseven} class="img-fluid" /></div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Clients Section --> */}
      </main>

      <Footer />
    </>
  );
};

export default Home;
