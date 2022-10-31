import React from "react";
import ContactIcons from "./ContactIcons";

const tw = {
	component: "w-full h-screen text-center pt-24",
	container:
		"max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center",
	topP: "uppercase text-sm tracking-widest text-gray-600",
	title: "py-4 text-gray-700",
	titleSpan: "text-[#5651e5]",
	descriptionTitle: "py-2 text-gray-700",
	description: "py-4 text-gray-600 max-w-[70%] m-auto",
	iconBox: "flex items-center justify-around max-w-[500px] m-auto pt-4 pb-8",
	icon: "rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300",
};

function Main() {
	return (
		<div id="main" className={tw.component}>
			<div className={tw.container}>
				<div>
					<p className={tw.topP}>Let&apos;s build something truly magical</p>
					<h1 className={tw.title}>
						Hello, I&apos;m <span className={tw.titleSpan}>Sav</span>
					</h1>
					<h1 className={tw.descriptionTitle}>A Front-End Web Developer</h1>
					<p className={tw.description}>
						I&apos;m a junior web developer and it{"'"}s wonderful to make your
						aquantence. I was initially trained through Udemy with one of Colt
						Steele{"'"}s courses. Now having practiced much in React I am ready
						and capable of solving most problems junior developers can face in
						the industry! Hard work and enthusiasm are my best traits.
					</p>
					<ContactIcons boxStyle={tw.iconBox} iconStyle={tw.icon} size="40" />
				</div>
			</div>
		</div>
	);
}

export default Main;
