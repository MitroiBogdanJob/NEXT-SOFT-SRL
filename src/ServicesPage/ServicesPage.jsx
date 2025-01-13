import React, { useState } from "react";
import "./ServicesPage.css";

import database from "./Images-ServicesPage/database.jpg";

const servicesData = [
	{
		title: "Desktop Applications",
		description:
			"Robust desktop applications tailored to your business needs, providing high performance, scalability, and seamless integration with other systems, developed using C# and .NET technologies.",
		linkText: "Learn more about Desktop Applications",
		url: "https://officialpage.com/desktop-applications",
	},
	{
		title: "Web Applications",
		description:
			"Custom web applications designed for responsiveness, scalability, and user-friendly interfaces, ensuring seamless experiences across devices. Built with C#, ASP.NET Core, and modern front-end.",
		linkText: "Learn more about Web Applications",
		url: "https://officialpage.com/web-applications",
	},
	{
		title: "Databases",
		description:
			"Efficient and secure database solutions using Microsoft SQL Server, designed to store, manage, and retrieve your data with ease, supporting your business operations.",
		linkText: "Learn more about Databases",
		url: "https://officialpage.com/databases",
	},
	{
		title: "ERP Systems",
		description:
			"Integrated ERP systems built with C# and Microsoft SQL Server that streamline your core business processes, improve decision-making, and enhance overall efficiency.",
		linkText: "Learn more about ERP Systems",
		url: "https://officialpage.com/erp-systems",
	},
	{
		title: "APIs",
		description:
			"Custom API development using C# and ASP.NET Core to enable seamless communication between your systems and third-party applications, ensuring smooth data flow.",
		linkText: "Learn more about APIs",
		url: "https://officialpage.com/apis",
	},
];

const ServicesPage = () => {
	const [iframeUrl, setIframeUrl] = useState("");

	const handleReadMore = (url) => {
		setIframeUrl(url); // Setează URL-ul în iframe
	};

	return (
		<>
			{" "}
			<h6 style={{ fontSize: "48px" }}>Services</h6>
			<div className="first-text">
				Custom desktop applications, web applications, databases, and APIs are
				at the heart of what we do at NEXT SOFT. Our team specializes in
				developing high-performance enterprise software, including ERP systems
				and scalable digital products, all designed to improve usability and
				efficiency. By focusing on intuitive design, responsive functionality,
				and seamless integration across platforms, we deliver impactful
				solutions that refine user experience, increase operational capacity,
				and support your business growth globally.
			</div>
			<br />
			<br />
			<br />
			<div className="applications-container">
				<img
					className="beautiful"
					src={database}
					alt="Database solutions"
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
							href="#"
							className="service-link"
							onClick={() => handleReadMore(service.url)} // La click se va încarca pagina oficială în iframe
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
			<div className="first-text">
				Move your industry forward, our sector-specific knowledge allows us to
				build solutions that accommodate what’s happening in your industry today
				– and prepare you for what’s next.
			</div>
		</>
	);
};

export default ServicesPage;
