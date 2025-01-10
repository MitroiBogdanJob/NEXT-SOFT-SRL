import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";

import sphere from "../Images/Sphere/sphere.webp";

function ContactForm() {
	// Creez un state pentru a stoca data minimă
	const [minDate, setMinDate] = useState("");
	const [selectedHour, setSelectedHour] = useState("");

	// Folosim useEffect pentru a seta data de mâine
	useEffect(() => {
		// Obține data de mâine
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);

		// Formatează data în formatul YYYY-MM-DD
		const formattedDate = tomorrow.toISOString().split("T")[0];

		// Setează valoarea minimă
		setMinDate(formattedDate);
	}, []);

	const handleSelect = (hour) => {
		setSelectedHour(hour);
	};

	return (
		<>
			<h6 className={styles.title}>Start a project</h6>

			{/* Aplică stilul corect */}
			<img className={styles.rotatingImg} alt="sphere-Image" src={sphere} />
			<form className={styles.formcontact}>
				<label>First Name </label>
				<input type="text" id="fullname" name="fullname" /> <br />
				<br />
				<label htmlFor="email">Email </label>
				<input type="email" id="email" name="email"></input> <br />
				<br />
				<label htmlFor="date">Pick a date</label>
				<input
					type="date"
					id="date"
					name="date"
					min={minDate} // Setează data minimă (mâine)
				></input>{" "}
				<br />
				<br />
				{/* Grup pentru selecția orei */}
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
		</>
	);
}

export default ContactForm;
