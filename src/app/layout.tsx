import type { Metadata } from "next";
import { Roboto_Mono, Raleway } from "next/font/google";
import "@/scss/globals.scss";
import "@/scss/index.scss";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Meet Tahzeeb",
	description: "Tahzeeb's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={robotoMono.className}>{children}</body>
		</html>
	);
}
