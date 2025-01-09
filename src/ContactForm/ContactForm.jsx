// FormContact.jsx
import React from "react";
import "./ContactForm.css"; 
import sphere from "../Images/Sphere/sphere.webp";
function ContactForm() {
	return (
		<>
			<h6>Book a Meeting!</h6>

			<img className="rotating-img" alt="sphere-Image" 
			src={sphere} 
			/>

			<form>
				<label>First Name </label>
				<input type="text" id="fullname" name="fullname" />
			</form>
		</>
	);
}

export default ContactForm;
