import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import sphere from "../Images/Sphere/sphere.webp";

function ContactForm() {
	// Creez un state pentru a stoca data minimă
	const [minDate, setMinDate] = useState("");
	const [selectedHour, setSelectedHour] = useState("");
	const [submitted, setSubmitted] = useState(false); // State pentru a verifica dacă s-a trimis
	const [message, setMessage] = useState(""); // State pentru mesaj
	const [formErrors, setFormErrors] = useState({}); // State pentru erori

	// Folosim useEffect pentru a seta data de mâine
	useEffect(() => {
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);

		const formattedDate = tomorrow.toISOString().split("T")[0];
		setMinDate(formattedDate);
	}, []);

	const handleSelect = (hour) => {
		setSelectedHour(hour);
	};

	const validateForm = () => {
		const errors = {};
		if (!document.getElementById("fullname").value)
			errors.fullName = "Full Name is required";
		if (!document.getElementById("email").value)
			errors.email = "Email is required";
		if (!document.getElementById("date").value)
			errors.date = "Date is required";
		if (!selectedHour) errors.hour = "Hour is required";
		if (!message) errors.message = "Message is required";

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault(); // Previne refresh-ul paginii

		if (!validateForm()) return;

		setSubmitted(true); // Setează formularul ca fiind trimis

		// Creează obiectul cu datele din formular
		const formData = {
			fullName: document.getElementById("fullname").value,
			email: document.getElementById("email").value,
			date: document.getElementById("date").value,
			hour: selectedHour,
			message: message,
		};

		try {
			// Trimite datele la API-ul C#
			const response = await fetch(
				"https://nextsoftsrl-backend.azurewebsites.net/api/ContactForm/send-email",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				},
			);

			const result = await response.json();

			if (response.ok) {
				// Dacă emailul a fost trimis cu succes
				console.log(result.message);
				setSubmitted(true);
			} else {
				// Dacă a apărut o eroare
				console.error(result.error);
				setSubmitted(false);
			}
		} catch (error) {
			console.error("Error:", error);
			setSubmitted(false);
		}
	};

	return (
		<>
			<h6 className={styles.title}>Start a project</h6>

			<img className={styles.rotatingImg} alt="sphere-Image" src={sphere} />

			{!submitted ? (
				<form className={styles.formcontact} onSubmit={handleSubmit}>
					<label>First Name </label>
					<input type="text" id="fullname" name="fullname" />
					{formErrors.fullName && <p>{formErrors.fullName}</p>}
					<br />

					<label htmlFor="email">Email </label>
					<input type="email" id="email" name="email"></input>
					{formErrors.email && <p>{formErrors.email}</p>}
					<br />

					<label htmlFor="date">Pick a date </label>
					<input type="date" id="date" name="date" min={minDate}></input>
					{formErrors.date && <p>{formErrors.date}</p>}
					<br />

					<div className={styles.radioGroup}>
						{[
							"13:00 PM",
							"14:00 PM",
							"15:00 PM",
							"16:00 PM",
							"17:00 PM",
							"18:00 PM",
						].map((hour) => (
							<label
								key={hour}
								className={`${styles.radioOption} ${
									selectedHour === hour ? styles.selected : ""
								}`}
								onClick={() => handleSelect(hour)}
							>
								<input type="radio" name="hours" value={hour} />
								{hour}
							</label>
						))}
					</div>
					{formErrors.hour && <p>{formErrors.hour}</p>}
					<br />

					<label>Message </label>
					<textarea
						id="message"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows="4" // setează numărul de rânduri vizibile
						cols="50" // setează lățimea
					/>
					{formErrors.message && <p>{formErrors.message}</p>}

					<br />

					<button type="submit">Submit</button>
				</form>
			) : (
				<p className={styles.confirmationMessage}>
					We’ve received your details and we'll get back to you as soon as
					possible!
				</p>
			)}
		</>
	);
}

export default ContactForm;
