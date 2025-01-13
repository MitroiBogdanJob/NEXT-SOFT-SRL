import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-column">
					<h4>Useful Links</h4>
					<ul className="footer-list">
						<li>
							<Link to="/privacy-policy" className="footer-link">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link to="/terms-and-conditions" className="footer-link">
								Terms and Conditions
							</Link>
						</li>
					</ul>
				</div>

				<div className="footer-copyright">
					<p>&copy; 2025 Next Soft SRL. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
