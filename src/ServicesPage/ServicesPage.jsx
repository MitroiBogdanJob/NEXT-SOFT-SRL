import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importă Link din react-router-dom
import "./ServicesPage.css";

import database from "./Images-ServicesPage/database.jpg";

const servicesData = [
	{
		title: "Desktop Applications",
		description:
			"Robust desktop applications tailored to your business needs, providing high performance, scalability, and seamless integration with other systems, developed using C# and .NET technologies.",
		linkText: "Learn more about Desktop Applications",
		url: "https://en.wikipedia.org/wiki/https://www.walkme.com/glossary/desktop-application/",
	},
	{
		title: "Web Applications",
		description:
			"Custom web applications designed for responsiveness, scalability, and user-friendly interfaces, ensuring seamless experiences across devices. Built with C#, ASP.NET Core, and modern front-end.",
		linkText: "Learn more about Web Applications",
		url: "https://en.wikipedia.org/wiki/Web_application",
	},
	{
		title: "Databases",
		description:
			"Efficient and secure database solutions using Microsoft SQL Server, designed to store, manage, and retrieve your data with ease, supporting your business operations.",
		linkText: "Learn more about Databases",
		url: "https://en.wikipedia.org/wiki/Database",
	},
	{
		title: "ERP Systems",
		description:
			"Integrated ERP systems built with C# and Microsoft SQL Server that streamline your core business processes, improve decision-making, and enhance overall efficiency.",
		linkText: "Learn more about ERP Systems",
		url: "https://en.wikipedia.org/wiki/Enterprise_resource_planning",
	},
	{
		title: "APIs",
		description:
			"Custom API development using C# and ASP.NET Core to enable seamless communication between your systems and third-party applications, ensuring smooth data flow.",
		linkText: "Learn more about APIs",
		url: "https://en.wikipedia.org/wiki/API",
	},
];

const ServicesPage = () => {
	const [iframeUrl, setIframeUrl] = useState("");

	const handleReadMore = (e, url) => {
		e.preventDefault(); // Previne deschiderea link-ului într-o filă nouă
		setIframeUrl(url); // Setează URL-ul în iframe
	};

	return (
		<>
			<h6 style={{ fontSize: "48px" }}>
				We transform your ideas into software!
			</h6>
			<div
				className="first-text"
				style={{
					display: "flex",
					justifyContent: "space-between",
					paddingLeft: "20px",
				}}
			>
				<div className="first-text" style={{ textIndent: "20px" }}>
					Custom desktop applications, web applications, databases, and APIs are
					at the heart of what we do at NEXT SOFT. Our team specializes in
					developing high-performance enterprise software, including ERP systems
					and scalable digital products, all designed to improve usability and
					efficiency. By focusing on intuitive design, responsive functionality,
					and seamless integration across platforms, we deliver impactful
					solutions that refine user experience, increase operational capacity,
					and support your business growth globally.
				</div>
			</div>

			<br />
			<br />
			<br />
			<div className="applications-container">
				<img
					className="beautiful"
					src={database}
					alt="Database solutions for business management"
					style={{ width: "78%", height: "auto" }}
				/>
				<br />
				<br />
				<br />
			</div>
			<div className="services-grid">
				{servicesData.map((service, index) => (
					<div className="service-card" key={index}>
						<h3 className="service-title">{service.title}</h3>
						<p className="service-description">{service.description}</p>
						<a
							href={service.url} // Folosește URL-ul din obiectul service
							className="service-link"
							rel="noopener noreferrer" // Adaugă rel pentru securitate
							onClick={(e) => handleReadMore(e, service.url)} // La click se va încărca pagina oficială în iframe
						>
							{service.linkText} →
						</a>
					</div>
				))}
			</div>
			{/* Secțiune cu iframe pentru a încărca paginile oficiale */}
			{iframeUrl && (
				<div className="iframe-container">
					<iframe
						src={iframeUrl}
						width="100%"
						height="600px"
						title="Service Information"
					></iframe>
				</div>
			)}
			<br />
			<br />
			<br />
			{/* Secțiunea cu textul în două culori și fundalul cu 0 și 1 */}
			<div
				className="first-text"
				style={{
					position: "relative", // pentru a putea poziționa elementele suplimentare
					fontSize: "26px", // dimensiunea textului
					fontWeight: "normal", // text normal
					lineHeight: "1.8", // linii mai distantate pentru o citire mai ușoară
					letterSpacing: "0.5px", // un pic de spațiu între litere pentru a îmbunătăți lizibilitatea
					textAlign: "center", // aliniere centrală pentru un aspect mai echilibrat
					background: "linear-gradient(to right, purple, blue)", // gradient pe text
					WebkitBackgroundClip: "text", // aplicarea gradientului pe text
					color: "transparent", // face textul transparent pentru a vedea gradientul
					zIndex: "1", // asigură că textul este deasupra
				}}
			>
				Move your industry forward, our sector-specific knowledge allows us to
				build solutions that accommodate what’s happening in your industry
				today, and prepare you for what’s next.
			</div>

			<p className="text-large homepage-text-large_homepage-text-lg__24_gZ">
				{/* Link-ul stilizat ca buton */}
				<Link to="/ContactForm" className="transparent-button">
					Let’s start your first project together
				</Link>
			</p>
			<br />
			<br />
			{/* Adăugarea efectului subtil cu 0 și 1 pe lateralele textului */}
			<div
				className="binary-background"
				style={{
					position: "absolute",
					top: "0",
					left: "0",
					right: "0",
					bottom: "0",
					zIndex: "-1", // face ca fundalul să fie în spatele textului
					background:
						"linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
					backgroundSize: "20px 20px", // dimensiunea pătratelor pentru efectul binar
					backgroundPosition: "0 0",
					animation: "binaryAnim 3s infinite",
					width: "100%",
					height: "100%",
				}}
			></div>
		</>
	);
};

export default ServicesPage;
