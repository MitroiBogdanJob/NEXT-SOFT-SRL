import React from "react";
import { Link } from "react-router-dom";
import "./ServicesPage.css";
import database from "./Images-ServicesPage/database.jpg";

const servicesData = [
	{
		title: "Desktop Applications",
		description:
			"Robust desktop applications tailored to your business needs, providing high performance, scalability, and seamless integration with other systems, developed using C# and .NET technologies.",
	},
	{
		title: "Web Applications",
		description:
			"Custom web applications designed for responsiveness, scalability, and user-friendly interfaces, ensuring seamless experiences across devices. Built with C#, ASP.NET Core, and modern front-end.",
	},
	{
		title: "Databases",
		description:
			"Efficient and secure database solutions using Microsoft SQL Server, designed to store, manage, and retrieve your data with ease, supporting your business operations.",
	},
	{
		title: "ERP Systems",
		description:
			"Integrated ERP systems built with C# and Microsoft SQL Server that streamline your core business processes, improve decision-making, and enhance overall efficiency.",
	},
	{
		title: "APIs",
		description:
			"Custom API development using C# and ASP.NET Core to enable seamless communication between your systems and third-party applications, ensuring smooth data flow.",
	},
];

const ServicesPage = () => {
	return (
		<>
			<h6 className="title-text">Your ideas into software</h6>
			<div className="text-large text-center">
				Crafting high-performance digital solutions that help businesses thrive.
				By focusing on intuitive design, responsive functionality, and seamless
				integration across platforms, we deliver impactful solutions that refine
				user experience, increase operational capacity, and support your
				business growth globally.
			</div>
			<br />

			<div className="applications-container">
				<img
					className="image"
					src={database}
					alt="Database solutions for business management"
				/>
			</div>

			<div className="services-section">
				{servicesData.map((service, index) => (
					<div
						key={index}
						className="service-card"
						style={{
							maxWidth: "800px",
							margin: "20px auto",
							padding: "20px",
							border: "1px solid #ddd",
							borderRadius: "18px",
							boxShadow: "0 4px 8px rgba(101, 101, 101, 0.1)",
							background: "#222",
							color: "white",
						}}
					>
						<h2
							className="service-title"
							style={{ fontFamily: "inherit", textAlign: "center" }}
						>
							{service.title}
						</h2>
						<p className="service-description" style={{ textAlign: "justify" }}>
							{service.description}
						</p>
					</div>
				))}
			</div>

			<div
				className="first-text2"
				style={{
					textAlign: "center",
					marginTop: "40px",
					fontSize: "24px",
					fontWeight: "bold",
				}}
			>
				Move your industry forward. Our sector-specific knowledge allows us to
				build solutions that accommodate what’s happening in your industry
				today, and prepare you for what’s next.
			</div>

			<p
				className="text-large homepage-text-large_homepage-text-lg__24_gZ"
				style={{ textAlign: "center", marginTop: "20px" }}
			>
				<Link to="/ContactForm" className="transparent-button">
					Let’s start your first project together
				</Link>
			</p>
		</>
	);
};

export default ServicesPage;
