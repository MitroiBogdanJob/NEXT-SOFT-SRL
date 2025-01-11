import React from "react";
import { Link } from "react-router-dom"; // Adaugă acest import
import "./Header.css";
import logo from "../../Images/Logo/Next Soft LOGO.png";

function Header() {
	return (
		<header className="header-container">
			{/* Adăugăm logo-ul */}
			<Link to="./">
				<img src={logo} alt="Logo" className="logo" />
			</Link>

			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/AboutUs">About us</Link>
					</li>
					<li>
						<Link to="/Services">Services</Link>
					</li>
					<li>
						<Link to="/ContactUs">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
