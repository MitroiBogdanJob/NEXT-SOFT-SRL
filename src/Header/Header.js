import React from "react";
import { Link } from "react-router-dom"; // Adaugă acest import
import "./Header.css";
import logo from "../Logo/Next Soft LOGO.png";

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
						<Link to="/AboutPage">About Us</Link>
					</li>
					<li>
						<Link to="/Services">Services</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
