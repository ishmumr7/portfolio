"use client";

import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

const Socials = () => {
	const socialLinks = [
		{
			name: "Github",
			icon: <FiGithub />,
			link: "https://www.github.com/ishmumr7",
		},
		{
			name: "LinkedIn",
			icon: <FiLinkedin />,
			link: "https://www.linkedin.com/in/tahzeebr7/",
		},
		{
			name: "Twitter",
			icon: <FiTwitter />,
			link: "https://x.com/ishmumr7",
		},
	];

	return (
		<motion.div
			className="social-icons"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 1.1,
			}}
		>
			<ul className="social-icons-list">
				{socialLinks.map(({ name, icon, link }) => (
					<li key={name} title={name} className="social-icons-list-item">
						<Link
							href={link}
							className="social-icons-list-item-link"
							target="_blank"
						>
							{icon}
						</Link>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default Socials;
