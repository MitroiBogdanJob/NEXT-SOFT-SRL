import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AboutUPage from './AboutUPage/AboutUPage';
import ContactPage from './ContactPage/ContactPage';
import ServicesPage from './ServicesPage/ServicesPage';


function App() {
  return (
  <Router>
     <Header />
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUPage />} />
        <Route path="/contacttt" element={<ContactPage />} />
        <Route path="/Servici" element={<ServicesPage />} />
      </Routes>
    <Footer />
</Router>
  );
}

export default App;
