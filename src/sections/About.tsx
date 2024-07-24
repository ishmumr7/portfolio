import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
	const skillsList = [
		{
			name: "JavaScript",
			progress: "Advanced",
		},
		{
			name: "React.js",
			progress: "Advanced",
		},
		{
			name: "Node.js",
			progress: "Intermediate",
		},
		{
			name: "MongoDB",
			progress: "Advanced",
		},
		{
			name: "Next.js",
			progress: "Intermediate",
		},
		{
			name: "TypeScript",
			progress: "Beginner",
		},
		{
			name: "C++",
			progress: "Intermediate",
		},
		{
			name: "Java",
			progress: "Intermediate",
		},
	];

	return (
		<div className="about" id="about">
			<div className="title">
				<h2>About Me</h2>
			</div>
			<div className="about-grid">
				<div className="about-grid-info">
					<div className="about-grid-info-text">
						Hello! I&apos;m Fayruz Tahzeeb Rahman, a recent graduate with a
						Bachelor of Computer Science (Software Engineering) from Universiti
						Teknologi Malaysia, class of 2024. I specialize in Full Stack Web
						Development and have a keen interest in game development and IoT.
					</div>
					<div className="about-grid-info-text">
						I&apos;m on the lookout for exciting job opportunities where I can
						apply my skills and continue to grow professionally. Outside of
						coding, I enjoy staying active with sports like football, badminton,
						and swimming.
					</div>
					<div className="about-grid-info-text">
						Currently, I&apos;m working on a project called{" "}
						<Link
							href="https://github.com/ishmumr7/campus-closet"
							target="_blank"
							className="link"
						>
							Campus Closet
						</Link>
						, a student marketplace for UTM using MERN.
					</div>
					<div className="about-grid-info-text">
						Technologies I&apos;ve been working on recently:
					</div>
					<ul className="about-grid-info-list">
						{
							skillsList.map(({name, progress}) => (
								<li key={name} className="about-grid-info-list-item">{name}</li>
							))
						}
					</ul>
				</div>
				<div className="about-grid-photo">
					<div className="overlay">

					</div>
					<div className="overlay-border">

					</div>
					<div className="about-grid-photo-container">
						<Image src="/tahzeeb.jpg" alt="Display Picture" fill/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
