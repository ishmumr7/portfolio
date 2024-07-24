import Button from "@/components/Button";
import React from "react";

const Hero = () => {
	return (
		<div className="hero">
			<h6 className="hero-title">Hello, I&apos;m</h6>
			<h2 className="hero-title-large">Fayruz Tahzeeb</h2>
			<h2 className="hero-title-large hero-title-sub">
				Creating Engaging Web Experiences.
			</h2>
			<p className="hero-text">
				As a passionate Full Stack Developer with a flare for MERN stack development,
				I thrive on building innovative and user-friendly digital experiences.
				My expertise is from ideation to accessible human-centered products
				that make a difference.
			</p>
			<div className="hero-button">
				<Button text="Check out my resume" link="http://localhost:3000/Resume.pdf" />
			</div>
		</div>
	);
};

export default Hero;
