"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		const transformSelected = () => {
			const underline = document.querySelector<HTMLElement>(".underline");
			underline!.style.top = `${selected * 2.5}rem`;
		};
		transformSelected();
	}, [selected]);

	const experiences = [
		{
			name: "Genuity Systems Ltd.",
			role: "Software Engineer Intern",
			url: "https://www.genuitysystems.com/",
			start: "September 2023",
			end: "February 2024",
			description: [
				"Database Administration and Front-End Design: Managed SQL databases, ensuring data integrity and performance. Designed user interfaces using HTML, CSS, and JavaScript, focusing on user experience.",
				"Software Documentation: Created comprehensive user manuals, API documentation, and technical guides. Ensured accuracy and accessibility for both technical and non-technical users.",
				"Backend Development and Integration: Developed and integrated backend services using PHP and Laravel. Implemented RESTful APIs for seamless frontend-backend communication",
			],
		},
		// //One more test experience
		// {
		// 	name: "ABC Systems Ltd.",
		// 	role: "Full-Stack Developer Intern",
		// 	url: "https://www.genuitysystems.com/",
		// 	start: "September 2023",
		// 	end: "February 2024",
		// 	description: [
		// 		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugiat, molestias commodi libero nostrum quidem nobis eligendi sapiente in quia similique ducimus quod quo sunt consequatur praesentium sit sequi architecto.",
		// 		"Software Documentation: Created comprehensive user manuals, API documentation, and technical guides. Ensured accuracy and accessibility for both technical and non-technical users.",
		// 		"Backend Development and Integration: Developed and integrated backend services using PHP and Laravel. Implemented RESTful APIs for seamless frontend-backend communication",
		// 	],
		// },
	];

	return (
		<motion.div
			className="experience"
			id="experience"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			variants={{
				visible: { opacity: 1, y: -50 },
				hidden: { opacity: 0, y: 0 },
			}}
		>
			<div className="title">
				<h2>Where I&apos;ve Worked</h2>
			</div>

			<div className="container">
				<ul className="exp-slider">
					<div className="underline"></div>
					{experiences.map((experience, index) => (
						<li
							key={index}
							className={`exp-slider-item ${
								index === selected && "exp-slider-item-selected"
							}`}
							onClick={() => setSelected(index)}
						>
							<span>{experience.name}</span>
						</li>
					))}
				</ul>
				<motion.div
					className="exp-details"
					key={selected}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
				>
					<div className="exp-details-position">
						<div className="exp-details-position-container">
							<h3>{experiences[selected].role}</h3>
							<h3 className="exp-details-position-container-company">
								<Link href={experiences[selected].url} className="link">
									{experiences[selected].name}
								</Link>
							</h3>
						</div>
					</div>
					<p className="exp-details-range">
						{experiences[selected].start} - {experiences[selected].end}
					</p>
					<ul className="exp-details-list">
						{experiences[selected].description.map((item, index) => (
							<li className="exp-details-list-item" key={index}>
								{item}
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Experience;
