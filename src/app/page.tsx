"use client";
import Email from "@/components/Email";
import Socials from "@/components/Socials";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Head from "next/head";
import { useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [showContent, setShowContent] = useState(false);

	const handleLoaderLoaded = () => {
		setIsLoading(false);
		setTimeout(() => setShowContent(true), 450);
	};

	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{showContent && (
				<>
					<Navbar />
					<Socials />
					<Email />
					<main>
						<Hero />
						<About />
						<Experience />
						<Projects />
						<Contact />
					</main>
				</>
			)}
			<Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
		</div>
	);
}
