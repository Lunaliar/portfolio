import React from "react";
import {GrMailOption} from "react-icons/gr";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import ContactIcons from "./ContactIcons";
function Main() {
	const tw = {
		component: "w-full h-screen text-center pt-24",
		container:
			"max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center",
		topP: "uppercase text-sm tracking-widest text-gray-600",
		title: "py-4 text-gray-700",
		titleSpan: "text-[#5651e5]",
		descriptionTitle: "py-2 text-gray-700",
		description: "py-4 text-gray-600 max-w-[70%] m-auto",
		iconBox: "flex items-center justify-around max-w-[500px] m-auto py-4",
		icon: "rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300",
	};

	return (
		<div id="main" className={tw.component}>
			<div className={tw.container}>
				<div>
					<p className={tw.topP}>Let's build something truly magical</p>
					<h1 className={tw.title}>
						Hello, I'm <span className={tw.titleSpan}>Sav</span>
					</h1>
					<h1 className={tw.descriptionTitle}>A Front-End Web Developer</h1>
					<p className={tw.description}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, hic
						ipsam repellat iure nisi iusto sit, quisquam iste ipsum similique
						facilis consequatur! Sunt culpa rem facere deleniti voluptate
						numquam beatae.
					</p>
					<ContactIcons boxStyle={tw.iconBox} iconStyle={tw.icon} size="40" />
				</div>
			</div>
		</div>
	);
}

export default Main;
