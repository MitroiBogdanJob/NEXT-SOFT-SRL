import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import Header from "./Shared.Header-Footer/Header/Header";
import Footer from "./Shared.Header-Footer/Footer/Footer";
import HomePage from "./HomePage/HomePage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import ContactPage from "./ContactPage/ContactPage";
import ServicesPage from "./ServicesPage/ServicesPage";
import ContactForm from "./ContactForm/ContactForm";
import TermsAndConditions from "./Shared.Header-Footer/Footer/Footer-Pages/TermsAndConditions"; // Fișierul pe care l-ai creat pentru Termeni și Condiții
import PrivacyPolicy from "./Shared.Header-Footer/Footer/Footer-Pages/PrivacyPolicy"; // Fișierul pe care l-ai creat pentru Politica de Confidențialitate
import themeSettings from "./themeSettings.json";

function App() {
	// Funcție pentru aplicarea temei
	const applyTheme = (theme) => {
		const root = document.documentElement;

		// Setează variabilele CSS pentru temă
		root.style.setProperty(
			"--background-color",
			theme.darkSchemeBackgroundColor,
		);
		root.style.setProperty("--text-color", theme.darkSchemeTextColor);
		root.style.setProperty("--brightness", `${theme.brightness}%`);
		root.style.setProperty("--contrast", `${theme.contrast}%`);
		root.style.setProperty("--font-family", theme.fontFamily || "inherit");
	};

	// Aplică tema la montarea componentei
	useEffect(() => {
		if (themeSettings.enabled) {
			applyTheme(themeSettings.theme);
		}
	}, []);

	return (
		<Router>
			<div id="background-wrapper">
				<div id="background"></div> {/* Fundalul interactiv */}
			</div>
			<div id="root">
				{" "}
				{/* Containerul principal pentru pagină */}
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/ContactForm" element={<ContactForm />} />
					<Route path="/AboutUs" element={<AboutUsPage />} />
					<Route path="/ContactUs" element={<ContactPage />} />
					<Route path="/Services" element={<ServicesPage />} />

					{/* Adaugă noile rute */}
					<Route
						path="/terms-and-conditions"
						element={<TermsAndConditions />}
					/>
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
