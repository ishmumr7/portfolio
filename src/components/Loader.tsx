import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
	useEffect(() => {
		setTimeout(() => {
			setIsLoading();
		}, 1900);
	}, [setIsLoading]);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className="loader"
					exit={{ scale: 0 }}
					key="motiondivleave"
					transition={{
						duration: 0.45,
						ease: "easeInOut",
					}}
				>
					<svg
						id="logo"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
					>
						<title>Logo</title>
						<g>
							<g id="T" transform="translate(40, 35)">
								<motion.path
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 1,
										ease: "easeInOut",
										delay: 1,
									}}
									fill="currentColor"
									d="M 0 0 L 20 0 L 20 5 L 12.5 5 L 12.5 25 L 7.5 25 L 7.5 5 L 0 5 Z"
								/>
							</g>
							<motion.path
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{
									duration: 1,
									ease: "easeInOut",
								}}
								stroke="currentColor"
								strokeWidth="5"
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
							/>
						</g>
					</svg>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Loader;
