import React from "react";
import { Link } from "react-router-dom"; // Adaugă acest import
import "./Header.css";
import logo from "../Logo/Next Soft LOGO.png";

function Header() {
	return (
		<header className="header-container">
			{/* Adăugăm logo-ul */}
			<img src={logo} alt="Logo" className="logo" />

			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contacttt">Contact</Link>
					</li>
					<li>
						<Link to="/Servici">Services</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
