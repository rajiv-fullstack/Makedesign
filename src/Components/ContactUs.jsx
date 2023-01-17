import React from "react";
import "../assets/award/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "./Footer";

const ContactUs = () => {
    return(
        <>
        <Header />
        {/* <!--
End Fixed Navigation
==================================== --> */}

<section class="single-page-header">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>Contact Us</h2>
				<ol class="breadcrumb header-bradcrumb justify-content-center">
					<li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">Contact Us</li>
				</ol>
			</div>
		</div>
	</div>
</section>
{/* 
 <!--Start Contact Us
	=========================================== --> */}
 <section class="contact-us" id="contact">
 	<div class="container">
 		<div class="row justify-content-center">
			 {/* <!-- section title --> */}
 			<div class="col-xl-6 col-lg-8">
				<div class="title text-center">
					<h2>Get In Touch</h2>
					<p>Say Hello! Don't be shy.</p>
					<div class="border"></div>
				</div>
			</div>
			{/* <!-- /section title --> */}
		</div>
 		<div class="row">
 			{/* <!-- Contact Details --> */}
 			<div class="contact-details col-md-6 ">
 				<h3 class="mb-3">NEED 24/7 SUPPORT</h3>
 				<p>Contact our support team</p>
 				<ul class="contact-short-info mt-4">
 					<li class="mb-3">
 						<i class="tf-ion-ios-home"></i>
 						<span>F-237 Phase 8-B, Industrial Area
                          Sector 74,Sahibzada Ajit Singh Nagar</span>
 					</li>
 					<li class="mb-3">
 						<i class="tf-ion-android-phone-portrait"></i>
 						<span>Phone: 91-172-4606237</span>
 					</li>
 					<li class="mb-3">
 						<i class="tf-ion-android-globe"></i>
 						<span>Fax: +91-172-4606237</span>
 					</li>
 					<li>
 						<i class="tf-ion-android-mail"></i>
 						<span>Email: info@etsparked.com</span>
 					</li>
 				</ul>
 				{/* <!-- Footer Social Links --> */}
 				<div class="social-icon">
 					<ul>
 						<li><i class="bi bi-facebook"></i></li>
 						<li><i class="bi bi-twitter"></i></li>
 						<li><i class="bi bi-linkedin"></i></li>
 					</ul>
 				</div>
 				{/* <!--/. End Footer Social Links --> */}
 			</div>
 			{/* <!-- / End Contact Details -->

 			<!-- Contact Form --> */}
 			<div class="contact-form col-md-6 ">
 				<form id="contact-form" method="post" role="form">
 					<div class="form-group mb-4">
 						<input type="text" placeholder="Your Name" class="form-control" name="name" id="name" required />
 					</div>

 					<div class="form-group mb-4">
 						<input type="email" placeholder="Your Email" class="form-control" name="email" id="email" required />
 					</div>

 					<div class="form-group mb-4">
 						<input type="text" placeholder="Subject" class="form-control" name="subject" id="subject" required />
 					</div>

 					<div class="form-group mb-4">
 						<textarea rows="6" placeholder="Message" class="form-control" name="message" id="message" required></textarea>
 					</div>
 					<div id="cf-submit">
 						<input type="submit" id="contact-submit" class="btn btn-transparent" value="Submit" />
 					</div>

 				</form>
 			</div>
 			{/* <!-- ./End Contact Form --> */}

 		</div> 
 	</div> 
 </section> 
        <Footer />
        </>
    );
}

export default ContactUs;