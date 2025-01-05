import "./App.css";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import ServicesPage from "./ServicesPage/ServicesPage";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/About" element={<AboutPage />} />
				<Route path="/Contact" element={<ContactPage />} />
				<Route path="/Services" element={<ServicesPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
