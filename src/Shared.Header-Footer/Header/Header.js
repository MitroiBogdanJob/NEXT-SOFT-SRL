import React, { useState } from "react";
import { Link } from "react-router-dom"; // Adaugă acest import
import "./Header.css";
import logo from "../../Images/Logo/Next Soft LOGO.png";

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="header-container">
			{/* Adăugăm logo-ul */}
			<Link to="./">
				<img src={logo} alt="Logo" className="logo" />
			</Link>

			{/* Butonul pentru meniul de mobil */}
			<div
				className={`burger-menu ${isMobileMenuOpen ? "open" : ""}`}
				onClick={toggleMobileMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/* Meniul de navigare */}
			<nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
				<ul>
					<li>
						<Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/AboutUs" onClick={() => setIsMobileMenuOpen(false)}>
							About us
						</Link>
					</li>
					<li>
						<Link to="/Services" onClick={() => setIsMobileMenuOpen(false)}>
							Services
						</Link>
					</li>
					<li>
						<Link to="/ContactUs" onClick={() => setIsMobileMenuOpen(false)}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
