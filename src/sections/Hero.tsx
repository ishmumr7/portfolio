"use client";

import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="hero">
			<motion.h6
				className="hero-title"
				initial={{ opacity: 0, y: 5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
					delay: 0.6,
				}}
			>
				Hello, I&apos;m
			</motion.h6>
			<motion.h2
				className="hero-title-large"
				initial={{ opacity: 0, y: 5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
					delay: 0.7,
				}}
			>
				Fayruz Tahzeeb
			</motion.h2>
			<motion.h2 className="hero-title-large hero-title-sub"
			initial={{ opacity: 0, y: 5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 0.8,
			}}>
				Creating Engaging Web Experiences.
			</motion.h2>
			<motion.p className="hero-text"
			initial={{ opacity: 0, y: 5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 0.9,
			}}>
				As a passionate Full Stack Developer with a flare for MERN stack
				development, I thrive on building innovative and user-friendly digital
				experiences. My expertise is from ideation to accessible human-centered
				products that make a difference.
			</motion.p>
			<motion.div className="hero-button"
			initial={{ opacity: 0, y: 5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 1,
			}}>
				<Button
					text="Check out my resume"
					link="http://tahzeeb.netlify.app/Resume.pdf"
				/>
			</motion.div>
		</div>
	);
};

export default Hero;
