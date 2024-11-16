import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BrandBar from "./components/BrandBar/BrandBar";
import Skills from "./components/Skills/Skills";
import Gallery from "./components/Gallery/Gallery";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<BrandBar />
			<Skills />
			<Gallery />
			<Testimonial />
			<Footer />
		</>
	);
};

export default App;
