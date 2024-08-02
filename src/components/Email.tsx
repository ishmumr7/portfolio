"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Email = () => {
	const emailAddress = "ishmum20000@gmail.com";

	return (
		<motion.div
			className="email"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: "easeInOut",
				delay: 1.1,
			}}
		>
			<Link href={`mailto:${emailAddress}`} className="email-link">
				{emailAddress}
			</Link>
		</motion.div>
	);
};

export default Email;
