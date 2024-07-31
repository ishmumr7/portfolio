import Email from "@/components/Email";
import Socials from "@/components/Socials";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
	return (
		<div>
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
		</div>
	);
}
