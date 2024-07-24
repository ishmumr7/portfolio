import Link from "next/link";
import React from "react";

const Email = () => {
	const emailAddress = "ishmum20000@gmail.com";

	return (
		<div className="email">
			<Link href={`mailto:${emailAddress}`} className="email-link">
				{emailAddress}
			</Link>
		</div>
	);
};

export default Email;
