"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
	const projects = [
		{
			image: "/jawahir.png",
			name: "Jawahir-Al-Riyadh Educational Company",
			description:
				"A landing page for Jawahir-Al-Riyadh Educational Company, showcasing their school and educational services.",
			technologies: ["NextJS", "NextUI", "Tailwind, Framer Motion"],
			externalLinks: {
				live: "https://jawahir-school.netlify.app/",
			},
		},
		{
			image: "/campus-closet.png",
			name: "Campus Closet",
			description:
				"A web based marketplace for the students of Universiti Teknologi Malaysia. The main goal of this project is to make a website where UTM students and employees can buy and sell things.",
			technologies: [
				"React",
				"Redux",
				"Tailwind",
				"Node.js",
				"MongoDB",
				"Stripe",
				"Socket.IO",
			],
			externalLinks: {
				live: "https://github.com/ishmumr7/campus-closet",
				github: "https://github.com/ishmumr7/campus-closet",
			},
		},
		{
			image: "/jom-tapau.png",
			name: "Jom Tapau",
			description:
				"Jom Tapau is a pre-order food delivery platform based on a cafeteria in the UTM campus. Its vision is to help university students and working adults afford cheaper food delivery meals and services",
			technologies: [
				"React",
				"Bootstrap",
				"Node.js",
				"MongoDB",
				"Firebase",
				"Stripe",
			],
			externalLinks: {
				live: "https://spiffy-raindrop-bb2a07.netlify.app/",
				github: "https://github.com/Jom-Tapau",
			},
		},
		{
			image: "/whitecode.png",
			name: "Project Whitecode",
			description:
				"A landing page for a startup software firm, showcasing their innovative solutions, services, and team to attract potential clients and investors.",
			technologies: ["NextJS", "NextUI", "Tailwind", "Framer Motion", "React Simple Maps"],
			externalLinks: {
				live: "https://prowhitecode.com/",
			},
		},
	];

	return (
		<motion.div
			className="projects"
			id="work"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
		>
			<div className="title">
				<h2>Some of My Projects</h2>
			</div>
			<div className="projects-container">
				{projects.map((project, index) => (
					<motion.div
						className="project"
						key={index}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: 50 },
						}}
					>
						<div className="project-image">
							<div className="project-image-overlay"></div>
							<div className="project-image-container">
								<Image
									src={project.image}
									alt={project.name}
									fill
									quality={100}
								/>
							</div>
						</div>
						<div className="project-info">
							<div className="project-info-overline">Featured Project</div>
							<h3 className="project-info-title">{project.name}</h3>
							<div className="project-info-description">
								<p>{project.description}</p>
							</div>
							<ul className="project-info-tech-list">
								{project.technologies.map((tech) => (
									<li key={tech} className="project-info-tech-list-item">
										{tech}
									</li>
								))}
							</ul>
							<ul className="project-info-links">
								{project.externalLinks.github && (
									<li className="project-info-links-item">
										<Link
											href={project.externalLinks.github}
											className="project-info-links-item-link"
											target="_blank"
										>
											<FiGithub />
										</Link>
									</li>
								)}
								<li className="project-info-links-item">
									<Link
										href={project.externalLinks.live}
										className="project-info-links-item-link"
										target="_blank"
									>
										<FiExternalLink />
									</Link>
								</li>
							</ul>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default Projects;
