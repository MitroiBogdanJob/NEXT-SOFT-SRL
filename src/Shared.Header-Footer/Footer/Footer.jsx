import React from "react";
import { Link } from "react-router-dom"; // Dacă folosești React Router pentru navigare
import "./Footer.css"; // Importă fișierul CSS

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				{/* Linkuri utile */}
				<div className="footer-column">
					<h4>Linkuri utile</h4>
					<ul className="footer-list">
						<li>
							<Link to="/politica-de-confidentialitate" className="footer-link">
								Politica de Confidențialitate
							</Link>
						</li>
						<li>
							<Link to="/termeni-si-conditii" className="footer-link">
								Termeni și Condiții
							</Link>
						</li>
					</ul>
				</div>

				{/* Copyright */}
				<div className="footer-copyright">
					<p>&copy; 2025 Next Soft SRL. Toate drepturile rezervate.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
