"use client";

import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

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
				<div className="brand">
					<Link href="/">
						<Logo />
					</Link>
				</div>
				<div className="nav-responsive-toggle">
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
				</div>
				<div className={`${responsiveVisible && "nav-responsive"} nav-items`}>
					<ul className="nav-items-list">
						{sectionLinks.map((item, index) => (
							<li key={index} className="nav-items-list-item">
								<Link href={item.link} className="nav-items-list-item-link">
									{item.name}
								</Link>
							</li>
						))}
					</ul>
					<div className="nav-items-button">
						<Button text="Resume" link="http://localhost:3000/Resume.pdf" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
