import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Socials = () => {
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

	return <div className="social-icons">
    <ul className="social-icons-list">
      {
        socialLinks.map(({name, icon, link}) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link href={link} className="social-icons-list-item-link" target="_blank">{icon}</Link>
          </li>
        ))
      }
    </ul>
  </div>;
};

export default Socials;
