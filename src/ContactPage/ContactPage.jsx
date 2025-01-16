import React from "react";
import "./ContactPage.css"; // Import the CSS file for custom styling

const ContactPage = () => {
	const companyName = "Next Soft Srl";
	const email = "nextsoftsrl@outlook.com";
	const phoneNumber = "0758498244";

	return (
		<div className="contact-container">
			{/* Adaugă un strat pentru imagine */}
			<div className="background-overlay"></div>
			<div className="contact-content">
				<h6 style={{ fontSize: "48px" }}>Contact Us</h6>

				<div className="contact-info">
					<p className="p-contact">
						<strong>Company: </strong> {companyName}
					</p>
					<p>
						<strong>Email: </strong> <a href={`mailto:${email}`}>{email}</a>
					</p>
					<p>
						<strong>Phone Number: </strong>{" "}
						<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
					</p>
					<p>
						<br />
					</p>

					{/* Programul de lucru */}
					<p>
						<strong>Working Hours: </strong>
						<br />
						Monday - Friday: 09:00 AM - 06:00 PM
						<br />
						Saturday - Sunday: Closed
					</p>
					<br />
					<br />
					{/* Linkuri sociale */}
					<p className="social-links">
						<strong>Follow Us:</strong>
						<br />
						<a
							href="https://www.facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook
						</a>
						<span> | </span>
						<a
							href="https://www.linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						<span> | </span>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
						<span> | </span>
						<a
							href="https://www.tiktok.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							TikTok
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
