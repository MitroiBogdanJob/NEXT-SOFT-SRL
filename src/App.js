import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./Shared.Header-Footer/Header/Header";
import Footer from "./Shared.Header-Footer/Footer/Footer";
import HomePage from "./HomePage/HomePage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import ContactPage from "./ContactPage/ContactPage";
import ServicesPage from "./ServicesPage/ServicesPage";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  return (
    <Router>
      <div id="background-wrapper">
        <div id="background"></div> {/* Fundalul interactiv */}
      </div>
      <div id="root"> {/* Containerul principal pentru pagină */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/ContactUs" element={<ContactPage />} />
          <Route path="/Services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
