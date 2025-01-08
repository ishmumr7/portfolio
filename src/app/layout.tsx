import type { Metadata } from "next";
import { Roboto_Mono, Raleway } from "next/font/google";
import "@/scss/globals.scss";
import "@/scss/index.scss";
import Script from "next/script";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tahzeeb Rahman | Full Stack Developer",
	description:
		"Tahzeeb Rahman, a graduate of Universiti Teknologi Malaysia (UTM) with a bachelor's in Computer Science (Software Engineering), is the co-founder and lead software engineer at Advanced Robotics Systems (arsystems.org) and Project Whitecode (prowhitecode.com). Explore his portfolio showcasing expertise in JavaScript, React.js, Next.js, Node.js, MongoDB, TypeScript, C++, Java, SEO, and more.",
	keywords: [
		"Tahzeeb Rahman",
		"Full Stack Developer",
		"Co-founder",
		"Lead Software Engineer",
		"Advanced Robotics Systems",
		"Project Whitecode",
		"JavaScript",
		"React.js",
		"Next.js",
		"Node.js",
		"TypeScript",
		"MongoDB",
		"C++",
		"Java",
		"SEO",
		"Portfolio",
		"UTM",
		"Universiti Teknologi Malaysia",
		"Software Engineering",
	],
	authors: [{ name: "Tahzeeb Rahman" }],
	openGraph: {
		title: "Tahzeeb Rahman | Full Stack Developer",
		description:
			"Explore the portfolio of Tahzeeb Rahman, co-founder and lead software engineer at Advanced Robotics Systems and Project Whitecode, and a UTM graduate specializing in software engineering and full stack development.",
		url: "https://www.tahzeeb.tech",
		images: [
			{
				url: "/preview.png",
				alt: "Tahzeeb Rahman's Portfolio Preview",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Script
				id="json-ld-organization"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Tahzeeb Rahman",
						jobTitle: "Co-founder and Lead Software Engineer",
						worksFor: [
							{
								"@type": "Organization",
								name: "Advanced Robotics Systems",
								url: "https://arsystems.org",
							},
							{
								"@type": "Organization",
								name: "Project Whitecode",
								url: "https://prowhitecode.com",
							},
						],
						alumniOf: {
							"@type": "CollegeOrUniversity",
							name: "Universiti Teknologi Malaysia (UTM)",
						},
						sameAs: [
							"https://github.com/ishmumr7",
							"https://linkedin.com/in/tahzeebr7",
							"https://x.com/ishmumr7",
						],
						url: "https://www.tahzeeb.tech",
					}),
				}}
			/>
			<body className={robotoMono.className}>{children}</body>
		</html>
	);
}
