import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";

import sphere from "../Images/Sphere/sphere.webp";

function ContactForm() {
	// Creez un state pentru a stoca data minimă
	const [minDate, setMinDate] = useState("");
	const [selectedHour, setSelectedHour] = useState("");
	const [submitted, setSubmitted] = useState(false); // State pentru a verifica dacă s-a trimis

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

	const handleSubmit = async (e) => {
		e.preventDefault(); // Previne refresh-ul paginii
		setSubmitted(true); // Setează formularul ca fiind trimis

		// Creează obiectul cu datele din formular
		const formData = {
			fullName: document.getElementById("fullname").value,
			email: document.getElementById("email").value,
			date: document.getElementById("date").value,
			hour: selectedHour,
		};

		try {
			// Trimite datele la API-ul C#
			const response = await fetch(
				"https://localhost:7243/api/ContactForm/send-email",
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
					<input type="text" id="fullname" name="fullname" /> <br />
					<br />
					<label htmlFor="email">Email </label>
					<input type="email" id="email" name="email"></input> <br />
					<br />
					<label htmlFor="date">Pick a date </label>
					<input type="date" id="date" name="date" min={minDate}></input> <br />
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
					<br />
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
