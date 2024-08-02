"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = () => {
	const sectionLinks = [
		{ name: "About", link: "/#about" },
		{ name: "Experience", link: "/#experience" },
		{ name: "Work", link: "/#work" },
		{
			name: "Contact",
			link: "/#contact",
		},
	];

	const [visible, setVisible] = useState(false);
	const [responsiveVisible, setResponsiveVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 100 ? setVisible(true) : setVisible(false);
		});
	});

	useEffect(() => {
		const links = document.querySelectorAll(".nav-items-list-item-link");
		links.forEach((link) => {
			link.addEventListener("click", () => setResponsiveVisible(false));
		});
		const nav = document.querySelector(".nav-items");
		nav?.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		const html = document.querySelector("html");
		html?.addEventListener("click", (e) => {
			setResponsiveVisible(false);
		});
	}, []);

	useEffect(() => {
		const main = document.querySelector("main");
		if (responsiveVisible) {
			main?.classList.add("blur");
		} else {
			main?.classList.remove("blur");
		}
	}, [responsiveVisible]);

	return (
		<nav>
			<div className={`wrapper ${visible && "blur-nav"}`}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
					}}
					className="brand"
				>
					<Link href="/">
						<Logo />
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
					}}
					className="nav-responsive-toggle"
				>
					{responsiveVisible ? (
						<CgClose
							onClick={(e) => {
								e.stopPropagation();
								setResponsiveVisible(false);
							}}
						/>
					) : (
						<GiHamburgerMenu
							onClick={(e) => {
								e.stopPropagation();
								setResponsiveVisible(true);
							}}
						/>
					)}
				</motion.div>
				<div className={`${responsiveVisible && "nav-responsive"} nav-items`}>
					<ul className="nav-items-list">
						{sectionLinks.map((item, index) => (
							<motion.li
								key={index}
								className="nav-items-list-item"
								initial={{ opacity: 0, y: -25 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
									delay: 0.3 + index * 0.1,
								}}
							>
								<Link href={item.link} className="nav-items-list-item-link">
									{item.name}
								</Link>
							</motion.li>
						))}
					</ul>
					<motion.div className="nav-items-button"
					initial={{ opacity: 0, y: -25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
						delay: 0.6,
					}}>
						<Button text="Resume" link="http://localhost:3000/Resume.pdf" />
					</motion.div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
