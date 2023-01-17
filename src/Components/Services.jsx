import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "./Footer";
const Services = () => {
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
				<h2>Our Services</h2>
				<ol class="breadcrumb header-bradcrumb justify-content-center">
					<li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">Our Services</li>
				</ol>
			</div>
		</div>
	</div>
</section>

{/* <!-- Start Services Section
==================================== --> */}

<section class="services" id="services">
	<div class="container">
		<div class="row justify-content-center">
			{/* <!-- section title --> */}
			<div class="col-xl-6 col-lg-8">
				<div class="title text-center">
					<h2>Our Services</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex,
						in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.</p>
					<div class="border"></div>
				</div>
			</div>
			{/* <!-- /section title --> */}
		</div>
		<div class="row no-gutters">

			{/* <!-- Single Service Item --> */}
			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 color-bg text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-copy-outline"></i>
					</div>
					<h3>WordPress Theme</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			{/* <!-- End Single Service Item -->

			<!-- Single Service Item --> */}
			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-alarm-outline"></i>
					</div>
					<h3>Responsive Design</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			{/* <!-- End Single Service Item -->

			<!-- Single Service Item --> */}
			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 color-bg text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-book-outline"></i>
					</div>
					<h3>Media &amp; Advertisement</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
		
			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4  text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-briefcase-outline"></i>
					</div>
					<h3>Graphic Design</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
		
			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 color-bg text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-crop"></i>
					</div>
					<h3>Apps Development</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
			
			<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
				<div class="service-block p-4 text-center">
					<div class="service-icon text-center">
						<i class="tf-ion-ios-home-outline"></i>
					</div>
					<h3>Networking</h3>
					<p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam
						iaculis arcu at mauris dapibus consectetur.</p>
				</div>
			</div>
		

		</div> 
	</div> 
</section> 
{/* <!-- Start Team Skills
=========================================== --> */}
<section class="team-skills section-sm" id="skills">
	<div class="container">
		<div class="row justify-content-center">

			<div class="col-xl-6 col-lg-8">
				<div class="title text-center">
					<h2>Our Skills</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat, vel veniam, eos et
						delectus eveniet molestiae. Esse, voluptas ratione.</p>
					<div class="border"></div>
				</div>
			</div>
		
		</div>

		<div class="row justify-content-between">
			<div class="col-md-5">
				<div class="team-skills-content">
					<h2 class="mb-3">Simple To Start</h2>
					<p>Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in
						faucibus lorem accumsan non. Donec mattis tin unt metuorbi sed tort Igor aman luctus dignissim.
						Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in
						faucibus lorem accumsan non.</p>
					<a href="contact.html" class="btn btn-main mt-20">Contact Us</a>
				</div>
			</div>
			<div class="col-md-6">
				<div class="progress-block">
					<ul>
						<li class="mb-3">
							<span>Photoshop</span>
							<div class="progress">
								<div class="progress-bar prog-one">
								</div>
							</div>
						</li>
						<li class="mb-3">
							<span>Web Application</span>
							<div class="progress">
								<div class="progress-bar prog-two">
								</div>
							</div>
						</li>
						<li class="mb-3">
							<span>Andriod Application</span>
							<div class="progress">
								<div class="progress-bar prog-three">
								</div>
							</div>
						</li>
						<li>
							<span>IOS Development</span>
							<div class="progress">
								<div class="progress-bar prog-four">
								</div>
							</div>
						</li>
					</ul>

				</div>
			</div>
		</div> 
    </div>
    </section>
   
    <Footer />
    </>
  );
};

export default Services;
