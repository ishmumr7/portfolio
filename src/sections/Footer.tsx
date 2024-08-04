import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
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
			className="footer"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
		>
			<div className="footer-socials">
				<ul className="footer-socials-list">
					{socialLinks.map(({ name, icon, link }) => (
						<li key={name} className="footer-socials-list-item">
							<Link href={link} target="_blank" className="footer-socials-list-item-link">
								{icon}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<Link href="https://www.github.com/ishmumr7" target="_blank" className="footer-credits">
				Fayruz Tahzeeb Rahman | 2024
			</Link>
		</motion.div>
	);
};

export default Footer;
