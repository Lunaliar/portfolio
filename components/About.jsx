import Image from "next/image";
import React from "react";

function About() {
	const tw = {
		component: "w-full md:screen p-2 pt-24 flex items-center py-16",
		container: "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8",
		aboutContainer: "col-span-2",
		aboutTitle: "uppercase texl-xl tracking-widest text-[#5651e5]",
		abouth2: "py-4",
		aboutp: "py-2 text-gray-600",
		aboutPLink: "py-2 text-gray-600 underline cursor-pointer",
		imageContainer:
			"w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300",
		image: "rounded-xl",
	};
	return (
		<div id="about" className={tw.component}>
			<div className={tw.container}>
				<div className={tw.aboutContainer}>
					<p className={tw.aboutTitle}>About</p>
					<h2 className={tw.abouth2}>Who I Am</h2>
					<p className={tw.aboutp}>&#47;&#47;Not a normal developer</p>
					<p className={tw.aboutp}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						vitae perferendis doloribus consequuntur alias, commodi fugit quis
						molestias quas velit ea dolorum aspernatur deserunt numquam, nihil
						quos ab! Commodi, sit.
					</p>
					<p className={tw.aboutp}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
						vitae perferendis doloribus consequuntur alias, commodi fugit quis
						molestias quas velit ea dolorum aspernatur deserunt numquam, nihil
						quos ab! Commodi, sit.
					</p>
					<p className={tw.aboutPLink}>Check out some of my latest projects!</p>
				</div>
				<div className={tw.imageContainer}>
					<img
						className={tw.image}
						src="https://i.pinimg.com/736x/b1/9a/f4/b19af4957faeaff7368392dc74dc4ae3.jpg"
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
