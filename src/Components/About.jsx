import React from "react";
import "../assets/award/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "./Footer";
import Companyimg from "../assets/img/about/company-image.jpg";
import Vission from "../assets/img/about/company-image-2.jpg";
import Mission from "../assets/img/about/company-image-3.jpg";   
const About = () => {
  return (
    <>
      <Header />
      {/* <!--
End Fixed Navigation
==================================== --> */}

<section class="single-page-header">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>About Us</h2>
				<ol class="breadcrumb header-bradcrumb justify-content-center">
					<li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">About Us</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<section class="about-shot-info section-sm">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 mt-20">
				<h2 class="mb-3">OUR COMPANY PROFILE</h2>
				<p>We providing Software Development, Mobile Application Development and Digital Marketing
					 services to businesses worldwide.</p>
				<p>We embrace the latest technologies to deliver solutions
					  that address our clients’ business challenges.
				</p>
				<p>We focus on resolving the IT conundrum for our clients 
					thereby enabling them to focus on their core business strengths.</p>
				
			</div>
			<div class="col-lg-6 mt-4 mt-lg-0">
				<img loading="lazy" class="img-fluid" src={Companyimg} alt="" />
			</div>
		</div>
	</div>
</section>


<section class="company-mission section-sm bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-md-6 content">
				<h3>NETSPARKED’S BUSINESS OBJECTIVES</h3>
				<p class="mb-5">To become valued and trusted partner in planning and implementing application development
					 programs by consistently delivering within approved estimated effort and timelines.
					To derive value from documented quality management system by continually providing 
					resources and guidance to train the staff and improve effectiveness of deployed processes.
					We assure to deliver high quality and reliable IT solutions at a competitive cost to our 
					client that ranges from SME, global fortune 500 and niche new generation technology 
					companies.</p>
				<img loading="lazy" src={Vission} alt="" class="img-fluid mt-30" />
			</div>
			<div class="col-md-6 mt-5 mt-md-0 content">
				<h3>VISION AND MISSION</h3>
				<p class="mb-4">Our vision is to provide the utmost integrity and client satisfaction through our services,
					creating lasting relationships with our clients while providing ideal working environments
					for our employees to help us become a dominant IT software solutions provider.
					Our mission is to create competitively priced, high quality software solutions that 
					increase business value and improve business processes for all clientele.
					Netsparked has been continually investing in maintaining the infrastructure to provide 
					best of work environment to our team members and to serve our customers better.</p>
				<img loading="lazy" src={Mission} alt="" class="img-fluid mt-30" />
			</div>
		</div>
	</div>
</section>

{/* <!--
Start Counter Section
==================================== --> */}
<section class="counter-wrapper section-sm">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-xl-6 col-lg-8 text-center">
				<div class="title">
					<h2>Award-Winning Agency</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
				</div>
			</div>
		</div>
		<div class="row">
			{/* <!-- first count item --> */}
			<div class="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div class="counters-item">
					<i class="bi bi-emoji-smile"></i>
					<div>
						<span class="counter" data-count="150">150+</span>
					</div>
					<h3>Happy Clients</h3>
				</div>
			</div>
			{/* <!-- end first count item --> */}

			{/* <!-- second count item --> */}
			<div class="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div class="counters-item">
					<i class="bi bi-journal-richtext"></i>
					<div>
						<span class="counter" data-count="130">350+</span>
					</div>
					<h3>Projects completed</h3>
				</div>
			</div>
			{/* <!-- end second count item --> */}

			{/* <!-- third count item --> */}
			<div class="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div class="counters-item">
					<i class="bi bi-people"></i>
					<div>
						<span class="counter" data-count="99">325</span>
					</div>
					<h3>Positive feedback</h3>

				</div>
			</div>
			{/* <!-- end third count item -->

			<!-- fourth count item --> */}
			<div class="col-md-3 col-sm-6 col-xs-6 text-center ">
				<div class="counters-item kill-border">
					<i class="bi bi-chevron-down"></i>
					<div>
						<span class="counter" data-count="250">250</span>
					</div>
					<h3>Cups of Coffee</h3>
				</div>
			</div>
			{/* <!-- end fourth count item --> */}
		</div> 
	</div> 
</section> 
<Footer />
    </>
  );
};

export default About;
