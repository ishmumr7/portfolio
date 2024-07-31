import Button from "@/components/Button";
import React from "react";

const Contact = () => {
	return (
		<div className="contact" id="contact">
			<h2 className="contact-title">Epilogue</h2>
			<h2 className="contact-subtitle">Get in Touch</h2>
			<p className="contact-text">
				I&apos;m currently on the lookout for new and exciting opportunities! Whether
				you have a potential job offer, a question, or just want to chat, my
				inbox is open. Let&apos;s connect and see how we can collaborate!
			</p>
      <div className="contact-cta">
        <Button text="Connect" link="mailto:ishmum20000@gmail.com" />
      </div>
		</div>
	);
};

export default Contact;
