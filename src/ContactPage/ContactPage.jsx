import React from "react";
import "./ContactPage.css"; // Import the CSS file for custom styling

const ContactPage = () => {
	const companyName = "Next Soft Srl";
	const email = "nextsoftsrl@outlook.com";
	const phoneNumber = "0758498244";
	const address = "Ramnicu Valcea, Valcea, Strada Morilor 97";

	return (
		<div className="contact-container">
			<h1>Contact Us</h1>
			<div className="contact-info">
				<p>
					<strong>Company:</strong> {companyName}
				</p>
				<p>
					<strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
				</p>
				<p>
					<strong>Phone Number:</strong>{" "}
					<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
				</p>
				<p>
					<strong>Address:</strong> {address}
				</p>
			</div>
		</div>
	);
};

export default ContactPage;
