import React from "react";
import "../assets/award/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "./Footer";
import Portfolione from "../assets/img/portfolio/portfolio1.png";
import Portfoliotwo from "../assets/img/portfolio/portfolio2.png";
import Portfoliothree from "../assets/img/portfolio/portfolio3.png";
import Portfoliofour from "../assets/img/portfolio/portfolio4.png";
import Portfoliofive from "../assets/img/portfolio/portfolio5.png";
import Portfoliosix from "../assets/img/portfolio/portfolio6.png";

 const Portfolio = () => {
    return(
        <>
        <Header />
        {/* <!--
End Fixed Navigation
==================================== --> */}

<section className="single-page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2>Portfolio</h2>
				<ol className="breadcrumb header-bradcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
					<li className="breadcrumb-item active" aria-current="page">Portfolio</li>
				</ol>
			</div>
		</div>
	</div>
</section>
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
                    <p></p>
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
                    <p></p>
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
                    <p></p>
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


        <Footer />
        </>
    );
 }

 export default Portfolio;