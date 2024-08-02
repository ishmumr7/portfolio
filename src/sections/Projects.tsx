import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
	const projects = [
		{
			image: "/campus-closet.png",
			name: "Campus Closet",
			description:
				"A web based marketplace for the students of Universiti Teknologi Malaysia. The main goal of this project is to make a website where UTM students and employees can buy and sell things.",
			technologies: [
				"React",
				"Redux Toolkit",
				"Tailwind",
				"Node.js",
				"MongoDB",
				"Socket.IO",
			],
			externalLinks: {
				live: "https://github.com/ishmumr7/campus-closet",
				github: "https://github.com/ishmumr7/campus-closet",
			},
		},
	];

	return (
		<div className="projects" id="work">
			<div className="title">
				<h2>Some of My Projects</h2>
			</div>
			<div className="projects-container">
				{projects.map((project, index) => (
					<div className="project" key={index}>
						<div className="project-image">
							<div className="project-image-overlay"></div>
							<div className="project-image-container">
								<Image src={project.image} alt={project.name} fill quality={100} />
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
								<li className="project-info-links-item">
									<Link
										href={project.externalLinks.github}
										className="project-info-links-item-link"
										target="_blank"
									>
										<FiGithub />
									</Link>
								</li>
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
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
