import Email from "@/components/Email";
import Socials from "@/components/Socials";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Socials />
			<Email />
			<main>
				<Hero />
        <About />
			</main>
		</div>
	);
}
