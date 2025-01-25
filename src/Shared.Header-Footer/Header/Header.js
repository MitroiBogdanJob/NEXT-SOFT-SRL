import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Images/Logo/Next Soft LOGO.png";

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navMenuRef = useRef(null); // Ref pentru meniul de navigare

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Funcție pentru a închide meniul când utilizatorul face clic în afara lui
	const handleClickOutside = (event) => {
		if (
			navMenuRef.current &&
			!navMenuRef.current.contains(event.target) // Verifică dacă clicul nu este în meniu
		) {
			setIsMobileMenuOpen(false);
		}
	};

	// Adaugă și elimină event listener-ul pentru clicuri globale
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="header-container">
			{/* Logo-ul */}
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
			<nav
				className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}
				ref={navMenuRef} // Adaugă ref pentru meniu
			>
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
